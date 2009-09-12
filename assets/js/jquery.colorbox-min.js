/*
	ColorBox v1.2.6 - a full featured, light-weight, customizable lightbox based on jQuery 1.3
	(c) 2009 Jack Moore : colorpowered.com
*/
(function(w){var t,j,I,B,s,G,a,d,L,f,v,b,C,F,H,o,h,A,i,g,J,K,c,n,z,e,x,k,D,p,r;function u(){z.css({position:"absolute",width:H.width(),height:H.height(),top:H.scrollTop(),left:H.scrollLeft()})}function m(){var M;function N(){F.text(I.slideshowStop).bind("cbox_complete",function(){C=setTimeout(w.fn.colorbox.next,I.slideshowSpeed)}).bind("cbox_load",function(){clearTimeout(C)}).one("click",function(){M();w(this).removeClass("hover")});J.removeClass("cboxSlideshow_off").addClass("cboxSlideshow_on")}M=function(){clearTimeout(C);F.text(I.slideshowStart).unbind("cbox_complete cbox_load").one("click",function(){N();C=setTimeout(w.fn.colorbox.next,I.slideshowSpeed);w(this).removeClass("hover")});J.removeClass("cboxSlideshow_on").addClass("cboxSlideshow_off")};if(I.slideshow&&b.length>1){if(I.slideshowAuto){N()}else{M()}}}function l(){if(w("#cboxInlineTemp").length>0){x.children().insertBefore("#cboxInlineTemp");w("#cboxInlineTemp").remove()}}function E(M){if(M.keyCode==37){M.preventDefault();A.click()}else{if(M.keyCode==39){M.preventDefault();h.click()}}}function y(M,N){N=N=="x"?document.documentElement.clientWidth:document.documentElement.clientHeight;return(typeof M=="string")?(M.match(/%/)?(N/100)*parseInt(M,10):parseInt(M,10)):M}function q(M){return I.photo?true:M.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(.*))?$/i)}w(function(){w.fn.colorbox.init()});w.fn.colorbox=function(N,M){if(this.length){this.each(function(){var O=w(this).data("colorbox")?w.extend({},w(this).data("colorbox"),N):w.extend({},w.fn.colorbox.settings,N);w(this).data("colorbox",O).addClass("cboxelement")})}else{w(this).data("colorbox",w.extend({},w.fn.colorbox.settings,N))}w(this).unbind("click.colorbox").bind("click.colorbox",function(P){j=this;I=w(j).data("colorbox");j.blur();B=M?M:false;var O=I.rel?I.rel:j.rel;if(O&&O!="nofollow"){b=w(".cboxelement").filter(function(){var Q=w(this).data("colorbox").rel?w(this).data("colorbox").rel:this.rel;return(Q==O)});v=b.index(j);if(v<0){b=b.add(j);v=b.length-1}}else{b=w(j);v=0}if(!t){w.event.trigger("cbox_open");o.html(I.close);z.css({opacity:I.opacity}).show();t=true;w.fn.colorbox.position(y(I.initialWidth,"x"),y(I.initialHeight,"y"),0);if(w.browser.msie&&w.browser.version<7){H.bind("resize scroll",u)}}m();w.fn.colorbox.load();if(I.overlayClose===true){z.css({cursor:"pointer"}).click(w.fn.colorbox.close)}P.preventDefault()});if(N&&N.open){w(this).triggerHandler("click.colorbox")}return this};w.fn.colorbox.element=function(){return j};w.fn.colorbox.init=function(){H=w(window);w("body").prepend(z=w('<div id="cboxOverlay" />').hide(),J=w('<div id="colorbox" />'));K=w('<div id="cboxWrapper" />').appendTo(J).append(w("<div/>").append(w('<div id="cboxTopLeft"/>'),k=w('<div id="cboxTopCenter"/>'),w('<div id="cboxTopRight"/>')),D=w('<div id="cboxMiddleLeft" />'),e=w('<div id="cboxContent" />'),p=w('<div id="cboxMiddleRight" />'),w("<div/>").append(w('<div id="cboxBottomLeft"/>'),r=w('<div id="cboxBottomCenter"/>'),w('<div id="cboxBottomRight"/>')));K.find("[id]").css({"float":"left"});e.append(x=w('<div id="cboxLoadedContent" style="width:0; height:0;" />'),c=w('<div id="cboxLoadingOverlay" />'),n=w('<div id="cboxLoadingGraphic" />'),g=w('<div id="cboxTitle" />'),i=w('<div id="cboxCurrent" />'),F=w('<div id="cboxSlideshow" />'),h=w('<div id="cboxNext" />').click(w.fn.colorbox.next),A=w('<div id="cboxPrevious" />').click(w.fn.colorbox.prev),o=w('<div id="cboxClose" />').click(w.fn.colorbox.close));e.children().addClass("hover").mouseover(function(){w(this).addClass("hover")}).mouseout(function(){w(this).removeClass("hover")}).hide();L=k.height()+r.height()+e.outerHeight(true)-e.height();f=D.width()+p.width()+e.outerWidth(true)-e.width();d=x.outerHeight(true);a=x.outerWidth(true);J.css({"padding-bottom":L,"padding-right":f}).hide();w().bind("keydown.cbox_close",function(M){if(M.keyCode==27){M.preventDefault();o.click()}});e.children().removeClass("hover")};w.fn.colorbox.next=function(){v=v<b.length-1?v+1:0;w.fn.colorbox.load()};w.fn.colorbox.prev=function(){v=v>0?v-1:b.length-1;w.fn.colorbox.load()};w.fn.colorbox.position=function(P,O,N,Q){var R=document.documentElement.clientHeight;var T=R/2-O/2;var S=document.documentElement.clientWidth/2-P/2;if(O>R){T-=(O-R)}if(T<0){T=0}if(S<0){S=0}T+=H.scrollTop();S+=H.scrollLeft();P=P-f;O=O-L;K[0].style.width=K[0].style.height="9999px";function U(V){k[0].style.width=r[0].style.width=e[0].style.width=V.style.width;n[0].style.height=c[0].style.height=e[0].style.height=D[0].style.height=p[0].style.height=V.style.height}var M=(J.width()===P&&J.height()===O)?0:N;J.dequeue().animate({height:O,width:P,top:T,left:S},{duration:M,complete:function(){U(this);K[0].style.width=(P+f)+"px";K[0].style.height=(O+L)+"px";if(Q){Q()}if(w.browser.msie&&w.browser.version<7){u()}},step:function(){U(this)}})};w.fn.colorbox.dimensions=function(Q){if(!t){return}H.unbind("resize.cbox_resize");var O=I.transition=="none"?0:I.speed;x.remove();x=w(Q);var M;var W;function U(){if(I.width){M=s}else{M=s&&s<x.width()?s:x.width()}return M}function T(){if(I.height){W=G}else{W=G&&G<x.height()?G:x.height()}return W}x.hide().appendTo("body").attr({id:"cboxLoadedContent"}).css({width:U()}).css({height:T()}).prependTo(e);if(w.browser.msie&&w.browser.version<7){w("select").not(w("#colorbox select")).css({visibility:"hidden"})}if(w("#cboxPhoto").length>0&&I.height){var R=(W-parseInt(w("#cboxPhoto")[0].style.height,10))/2;w("#cboxPhoto").css({marginTop:(R>0?R:0)})}function V(Z){var Y=M+a+f;var aa=W+d+L;w.fn.colorbox.position(Y,aa,Z,function(){if(!t){return}if(w.browser.msie){if(w("#cboxPhoto").length>0){x.fadeIn(100)}J.css("filter","")}e.children().show();w("#cboxIframe").after("<iframe name='iframe_"+new Date().getTime()+"' frameborder=0 src='"+(I.href?I.href:j.href)+"' />").remove();c.hide();n.hide();F.hide();if(b.length>1){i.html(I.current.replace(/\{current\}/,v+1).replace(/\{total\}/,b.length));h.html(I.next);A.html(I.previous);w().unbind("keydown",E).one("keydown",E);if(I.slideshow){F.show()}}else{i.add(h).add(A).hide()}g.html(I.title?I.title:j.title);w.event.trigger("cbox_complete");if(B){B.call(j)}if(I.transition==="fade"){J.fadeTo(O,1,function(){if(w.browser.msie){J.css("filter","")}})}H.bind("resize.cbox_resize",function(){w.fn.colorbox.position(Y,aa,0)})})}if(I.transition=="fade"){J.fadeTo(O,0,function(){V(0)})}else{V(O)}if(I.preloading&&b.length>1){var P=v>0?b[v-1]:b[b.length-1];var S=v<b.length-1?b[v+1]:b[0];var X=w(S).data("colorbox").href?w(S).data("colorbox").href:S.href;var N=w(P).data("colorbox").href?w(P).data("colorbox").href:P.href;if(q(X)){w("<img />").attr("src",X)}if(q(N)){w("<img />").attr("src",N)}}};w.fn.colorbox.load=function(){j=b[v];I=w(j).data("colorbox");w.event.trigger("cbox_load");c.show();n.show();o.show();l();var M=I.height?y(I.height,"y")-d-L:false;var P=I.width?y(I.width,"x")-a-f:false;if(I.maxHeight){G=I.maxHeight?y(I.maxHeight,"y")-d-L:false;M=M&&M<G?M:G}if(I.maxWidth){s=I.maxWidth?y(I.maxWidth,"x")-a-f:false;P=P&&P<s?P:s}G=M;s=P;var N=I.href?I.href:j.href;if(I.inline){w('<div id="cboxInlineTemp" />').hide().insertBefore(w(N)[0]);w.fn.colorbox.dimensions(w(N).wrapAll("<div/>").parent())}else{if(I.iframe){w.fn.colorbox.dimensions(w("<div><div id='cboxIframe' /></div>"))}else{if(q(N)){var O=new Image();O.onload=function(){O.onload=null;if((G||s)&&I.resize){var S=this.width;var Q=this.height;var U=0;var T=this;var R=function(){Q+=Q*U;S+=S*U;T.height=Q;T.width=S};if(s&&S>s){U=(s-S)/S;R()}if(G&&Q>G){U=(G-Q)/Q;R()}}w.fn.colorbox.dimensions(w("<div />").css({width:this.width,height:this.height}).append(w(this).css({width:this.width,height:this.height,display:"block",margin:"auto",border:0}).attr("id","cboxPhoto")));if(b.length>1){w(this).css({cursor:"pointer"}).click(w.fn.colorbox.next)}if(w.browser.msie&&w.browser.version==7){this.style.msInterpolationMode="bicubic"}};O.src=N}else{w("<div />").load(N,function(Q,R){if(R=="success"){w.fn.colorbox.dimensions(w(this))}else{w.fn.colorbox.dimensions(w("<p>Request unsuccessful.</p>"))}})}}}};w.fn.colorbox.close=function(){t=false;clearTimeout(C);H.unbind("resize.cbox_resize");F.unbind("cbox_complete cbox_load click");l();z.css({cursor:"auto"}).fadeOut("fast").unbind("click",w.fn.colorbox.close);w().unbind("keydown",E);if(w.browser.msie&&w.browser.version<7){w("select").css({visibility:"inherit"});H.unbind("resize scroll",u)}e.children().hide();J.stop(true,false).removeClass().fadeOut("fast",function(){j.focus();x.remove();J.css({opacity:1});w.event.trigger("cbox_closed")})};w.fn.colorbox.settings={transition:"elastic",speed:350,width:false,height:false,initialWidth:"400",initialHeight:"400",maxWidth:false,maxHeight:false,resize:true,inline:false,iframe:false,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,overlayClose:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow"}})(jQuery);