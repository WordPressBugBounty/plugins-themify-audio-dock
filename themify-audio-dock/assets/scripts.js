!function($){"use strict";$(window).one("load",(function(){$(".wp-audio-shortcode").on("play playing",(function(i){$(this).closest(".mejs-inner").find(".mejs-currenttime").addClass("visible-currenttime")}));const i=$("#themify-audio-dock");i.length>0&&i.on("click",".button-switch-player",(function(i){i.preventDefault(),$(this).closest("#themify-audio-dock").toggleClass("collapsed")})).find(".mejs-volume-button, .mejs-horizontal-volume-slider").wrapAll('<div class="themify-audio-dock-volume" />')}))}(jQuery);