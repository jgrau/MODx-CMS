<?php
if(IN_MANAGER_MODE!="true") die("<b>INCLUDE_ORDERING_ERROR</b><br /><br />Please use the MODx Content Manager instead of accessing this file directly.");
if(!$modx->hasPermission('delete_template')) {	
	$e->setError(3);
	$e->dumpError();	
}
?>
<?php

$id=intval($_GET['id']);

// delete the template, but first check it doesn't have any documents using it
$sql = "SELECT id, pagetitle FROM $dbase.`".$table_prefix."site_content` WHERE $dbase.`".$table_prefix."site_content`.template=".$id." and $dbase.`".$table_prefix."site_content`.deleted=0;";
$rs = mysql_query($sql);
$limit = mysql_num_rows($rs);
if($limit>0) {
	echo "This template is in use. Please set the documents using the template to another template. Documents using this template:<br />";
	for ($i=0;$i<$limit;$i++) {
		$row = mysql_fetch_assoc($rs);
		echo $row['id']." - ".$row['pagetitle']."<br />\n";
	}	
	exit;
}

if($id==$default_template) {
	echo "This template is set as the default template. Please choose a different default template in the MODx configuration before deleting this template.<br />";
	exit;
}

// invoke OnBeforeTempFormDelete event
$modx->invokeEvent("OnBeforeTempFormDelete",
						array(
							"id"	=> $id
						));
						
//ok, delete the document.
$sql = "DELETE FROM $dbase.`".$table_prefix."site_templates` WHERE $dbase.`".$table_prefix."site_templates`.id=".$id.";";
$rs = mysql_query($sql);
if(!$rs) {
	echo "Something went wrong while trying to delete the template...";
	exit;
} else {		
	// invoke OnTempFormDelete event
	$modx->invokeEvent("OnTempFormDelete",
							array(
								"id"	=> $id
							));

	// empty cache
	include_once "cache_sync.class.processor.php";
	$sync = new synccache();
	$sync->setCachepath("../assets/cache/");
	$sync->setReport(false);
	$sync->emptyCache(); // first empty the cache		
	// finished emptying cache - redirect
	$header="Location: index.php?a=76&r=2";
	header($header);
}
?>
