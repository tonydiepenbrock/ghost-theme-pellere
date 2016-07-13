// Loading
$(window).load(function(){$(".se-pre-con").fadeOut("slow")});

// Add Sticky to Right Column
$(function(){$(window).resize(function(){$(window).width()<1100?$(".right-column.index").removeClass("sticky_item"):$(".right-column.index").addClass("sticky_item")}).resize()});

// Sticky 
$(document).ready(function(){$(".sticky_item").stick_in_parent();});

// Header Scroll Effect
!function(e){var l=0;e(window).scroll(function(){var a=e(this).scrollTop();a>100&&a>l?e("#header_pellere").addClass("fixed").removeClass("default"):e("#header_pellere").addClass("default").removeClass("fixed"),l=a})}(jQuery);