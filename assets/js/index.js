
$(document).ready(function() {
     
    $("#featured-list").owlCarousel({
     
        autoPlay: 5000, //Set AutoPlay to 3 seconds 
        items : 1,
        transitionStyle : "fade",
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [751,1],
        itemsTablet: [733,2],
        itemsTabletSmall: false,
        itemsMobile : [471,1]
    });
});

/*globals jQuery, document */
(function ($) {
    "use strict";
     
    $(document).ready(function(){

        $(".post-content_pellere").fitVids();
    });

}(jQuery));

(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

// Loading
/*!
 * headroom.js v0.6.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(t,n){"use strict";function i(t){this.callback=t,this.ticking=!1}function e(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var n,i,s=t||{};for(i=1;i<arguments.length;i++){var o=arguments[i]||{};for(n in o)s[n]="object"==typeof s[n]?e(s[n],o[n]):s[n]||o[n]}return s}function s(t){return t===Object(t)?t:{down:t,up:t}}function o(t,n){n=e(n,o.options),this.lastKnownScrollY=0,this.elem=t,this.debouncer=new i(this.update.bind(this)),this.tolerance=s(n.tolerance),this.classes=n.classes,this.offset=n.offset,this.initialised=!1,this.onPin=n.onPin,this.onUnpin=n.onUnpin,this.onTop=n.onTop,this.onNotTop=n.onNotTop}var a={bind:!!function(){}.bind,classList:"classList"in n.documentElement,rAF:!!(t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame)};t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame,i.prototype={constructor:i,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},o.prototype={constructor:o,init:function(){return o.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var n=this.classes;this.initialised=!1,t.removeEventListener("scroll",this.debouncer,!1),this.elem.classList.remove(n.unpinned,n.pinned,n.top,n.initial)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,t.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,n=this.classes;(t.contains(n.pinned)||!t.contains(n.unpinned))&&(t.add(n.unpinned),t.remove(n.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,n=this.classes;t.contains(n.unpinned)&&(t.remove(n.unpinned),t.add(n.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,n=this.classes;t.contains(n.top)||(t.add(n.top),t.remove(n.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,n=this.classes;t.contains(n.notTop)||(t.add(n.notTop),t.remove(n.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==t.pageYOffset?t.pageYOffset:(n.documentElement||n.body.parentNode||n.body).scrollTop},getViewportHeight:function(){return t.innerHeight||n.documentElement.clientHeight||n.body.clientHeight},getDocumentHeight:function(){var t=n.body,i=n.documentElement;return Math.max(t.scrollHeight,i.scrollHeight,t.offsetHeight,i.offsetHeight,t.clientHeight,i.clientHeight)},isOutOfBounds:function(t){var n=0>t,i=t+this.getViewportHeight()>this.getDocumentHeight();return n||i},toleranceExceeded:function(t,n){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[n]},shouldUnpin:function(t,n){var i=t>this.lastKnownScrollY,e=t>=this.offset;return i&&e&&n},shouldPin:function(t,n){var i=t<this.lastKnownScrollY,e=t<=this.offset;return i&&n||e},update:function(){var t=this.getScrollY(),n=t>this.lastKnownScrollY?"down":"up",i=this.toleranceExceeded(t,n);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),this.shouldUnpin(t,i)?this.unpin():this.shouldPin(t,i)&&this.pin(),this.lastKnownScrollY=t)}},o.options={tolerance:{up:0,down:0},offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},o.cutsTheMustard="undefined"!=typeof a&&a.rAF&&a.bind&&a.classList,t.Headroom=o}(window,document);


// super-header 
!function(e){var n=document.querySelector("#header_pellere");new Headroom(n,{tolerance:{down:2,up:5},offset:100,classes:{initial:"slide",pinned:"slide--reset",unpinned:"slide--up"}}).init()}(jQuery);