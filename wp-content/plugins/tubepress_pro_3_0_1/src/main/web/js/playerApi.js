(function(f,l,n){var c=n.Beacon,d=c.publish,g=c.subscribe,b=n.Lang.Utils,o=n.Logger,a="tubepress.video.",i=a+"load",k=o.on(),h=(function(){var x=function(A,E,D,B,C){d(A,[E,D,B,C])},z=function(D,C,A,B){x(a+"start",D,C,A,B)},s=function(D,C,A,B){x(a+"stop",D,C,A,B)},y=function(D,C,A,B){x(a+"buffer",D,C,A,B)},q=function(D,C,A,B){x(a+"pause",D,C,A,B)},u=function(D,C,A,B){x(a+"error",D,C,A,B)},v=function(B,A){return f("#"+B).data(A)},t=function(A){return v(A,"videoid")},p=function(A){return v(A,"playerimplementation")},r=function(A){return v(A,"videoprovidername")},w=function(A){f.ajax({url:A,dataType:"script",cache:true})};return{fireVideoError:u,fireVideoPaused:q,fireVideoBuffering:y,fireVideoStopped:s,fireVideoStarted:z,getVideoIdFromDomId:t,getVideoProviderFromDomId:r,getPlayerImplNameFromDomId:p,loadScriptWithCache:w}}()),j=(function(){var q=b.isDefined,z="youtube",v=false,s={},p=function(B){return B.target.a.id},y=function(B){return h.getVideoIdFromDomId(p(B))},t=function(){return q(l.YT)&&q(l.YT.Player)},x=function(){if(v||t()){return}v=true;var B=l.location.protocol+"//www.youtube.com/player_api";h.loadScriptWithCache(B)},u=function(D){var G=y(D),F=p(D),B=h.getPlayerImplNameFromDomId(F),C=D.data,E=YT.PlayerState;if(G===null){return}switch(C){case E.PLAYING:h.fireVideoStarted(G,F,z,B);break;case E.PAUSED:h.fireVideoPaused(G,F,z,B);break;case E.ENDED:h.fireVideoStopped(G,F,z,B);break;case E.BUFFERING:h.fireVideoBuffering(G,F,z,B);break;case -1:break;default:if(k){o.log("Unknown YT event");o.dir(D)}break}},w=function(C){var E=y(C),D=p(C),B=h.getPlayerImplNameFromDomId(D);if(E===null){return}if(k){o.log("YT error");o.dir(C)}h.fireVideoError(E,D,z,B)},A=function(B){x();var C=function(){if(k){o.log(z+" API is available")}s[B]=new YT.Player(B,{events:{onError:w,onStateChange:u}})};b.callWhenTrue(C,t,250)},r=function(C,F,E,B,D){if(D===z){A(E)}};g(i,r);return{onYouTubeStateChange:u,onYouTubeError:w}}()),e=(function(){var s=false,u={},p="vimeo",x=function(){return b.isDefined(l.Froogaloop)},w=function(){if(!s&&!x()){s=true;h.loadScriptWithCache(l.location.protocol+"//a.vimeocdn.com/js/froogaloop2.min.js")}},y=function(C){var B=h.getVideoIdFromDomId(C),D=h.getVideoProviderFromDomId(C),A=h.getPlayerImplNameFromDomId(C);h.fireVideoStarted(B,C,D,A)},v=function(C){var B=h.getVideoIdFromDomId(C),D=h.getVideoProviderFromDomId(C),A=h.getPlayerImplNameFromDomId(C);h.fireVideoPaused(B,C,D,A)},t=function(C){var B=h.getVideoIdFromDomId(C),D=h.getVideoProviderFromDomId(C),A=h.getPlayerImplNameFromDomId(C);h.fireVideoStopped(B,C,D,A)},r=function(A){if(k){o.log(p+" API is available")}var B=u[A];B.addEvent("play",y);B.addEvent("pause",v);B.addEvent("finish",t)},z=function(B){w();var A=l.document.getElementById(B),C=function(){var D=new Froogaloop(A);u[B]=D;D.addEvent("ready",r)};b.callWhenTrue(C,x,400)},q=function(B,E,D,A,C){if(A===p){z(D)}};g(i,q);return{onVimeoReady:r,onVimeoPlay:y,onVimeoPause:v,onVimeoFinish:t}}()),m=(function(){var p=function(t){var s=h.getVideoIdFromDomId(t),q=h.getPlayerImplNameFromDomId(t),r=h.getVideoProviderFromDomId(t);d(i,[s,t,r,q])};return{register:p}}());n.AsyncUtil.processQueueCalls("tubePressPlayerApi",m)}(jQuery,window,TubePress));