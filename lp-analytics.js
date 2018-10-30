/*!
* @preserve
* jquery.scrolldepth.js | v1.0
* Copyright (c) 2016 Rob Flaherty (@robflaherty)
* Licensed under the MIT and GPL licenses.
*/
//!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var n,t,r,o,i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},a=e(window),l=[],c=!1,u=0;return e.scrollDepth=function(p){function s(e,i,a,l){var c=p.trackerName?p.trackerName+".send":"send";o?(o({event:"ScrollDistance",event_category:"Scroll Depth",event_action:e,event_label:i,eventValue:1,eventNonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,o({event:"ScrollDistance",event_category:"Scroll Depth",event_action:"Pixel Depth",event_label:d(a),eventValue:1,eventNonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&o({event:"ScrollTiming",event_category:"Scroll Depth",event_action:e,event_label:i,eventTiming:l})):(n&&(window[r](c,"event","Scroll Depth",e,i,1,{nonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,window[r](c,"event","Scroll Depth","Pixel Depth",d(a),1,{nonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&window[r](c,"timing","Scroll Depth",e,l,i)),t&&(_gaq.push(["_trackEvent","Scroll Depth",e,i,1,p.nonInteraction]),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",d(a),1,p.nonInteraction])),p.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,l,i,100])))}function h(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function g(n,t,r){e.each(n,function(n,o){-1===e.inArray(n,l)&&t>=o&&(s("Percentage",n,t,r),l.push(n))})}function f(n,t,r){e.each(n,function(n,o){-1===e.inArray(o,l)&&e(o).length&&t>=e(o).offset().top&&(s("Elements",o,t,r),l.push(o))})}function d(e){return(250*Math.floor(e/250)).toString()}function m(){y()}function v(e,n){var t,r,o,i=null,a=0,l=function(){a=new Date,i=null,o=e.apply(t,r)};return function(){var c=new Date;a||(a=c);var u=n-(c-a);return t=this,r=arguments,0>=u?(clearTimeout(i),i=null,a=c,o=e.apply(t,r)):i||(i=setTimeout(l,u)),o}}function y(){c=!0,a.on("scroll.scrollDepth",v(function(){var n=e(document).height(),t=window.innerHeight?window.innerHeight:a.height(),r=a.scrollTop()+t,o=h(n),i=+new Date-D;return l.length>=p.elements.length+(p.percentage?4:0)?(a.off("scroll.scrollDepth"),void(c=!1)):(p.elements&&f(p.elements,r,i),void(p.percentage&&g(o,r,i)))},500))}var D=+new Date;p=e.extend({},i,p),e(document).height()<p.minHeight||(p.gaGlobal?(n=!0,r=p.gaGlobal):"function"==typeof ga?(n=!0,r="ga"):"function"==typeof __gaTracker&&(n=!0,r="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(t=!0),"function"==typeof p.eventHandler?o=p.eventHandler:"undefined"==typeof window[p.dataLayer]||"function"!=typeof window[p.dataLayer].push||p.gtmOverride||(o=function(e){window[p.dataLayer].push(e)}),e.scrollDepth.reset=function(){l=[],u=0,a.off("scroll.scrollDepth"),y()},e.scrollDepth.addElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&(e.merge(p.elements,n),c||y())},e.scrollDepth.removeElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&e.each(n,function(n,t){var r=e.inArray(t,p.elements),o=e.inArray(t,l);-1!=r&&p.elements.splice(r,1),-1!=o&&l.splice(o,1)})},m())},e.scrollDepth});
//jQuery(function() {
//    // no scrolling info for quiz (shallow page)
//    if ( self.location.href.indexOf('/testet/') < 0 ) {
//        jQuery.scrollDepth({
//            userTiming: false,
//            pixelDepth: false,
//            // CM: the following is just for debugging!
//            eventHandler: function(data) {
//                console.log(data)
//            }
//        });
//    }
//});

// intersection observer
!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(i){var r=i.element,s=h(r),c=this._rootContainsTarget(r),a=i.entry,u=e&&c&&this._computeTargetAndRootIntersection(r,n),l=i.entry=new o({time:t.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:n,intersectionRect:u});a?e&&c?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(n,o){if("none"!=t.getComputedStyle(n).display){for(var i,r,s,c,u,l,p,d,f=h(n),g=a(n),_=!1;!_;){var v=null,m=1==g.nodeType?t.getComputedStyle(g):{};if("none"==m.display)return;if(g==this.root||g==e?(_=!0,v=o):g!=e.body&&g!=e.documentElement&&"visible"!=m.overflow&&(v=h(g)),v&&(i=v,r=f,void 0,void 0,void 0,void 0,void 0,void 0,s=Math.max(i.top,r.top),c=Math.min(i.bottom,r.bottom),u=Math.max(i.left,r.left),l=Math.min(i.right,r.right),d=c-s,!(f=(p=l-u)>=0&&d>=0&&{top:s,bottom:c,left:u,right:l,width:p,height:d})))break;g=a(g)}return f}},i.prototype._getRootRect=function(){var t;if(this.root)t=h(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},i.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},i.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},i.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},i.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=i,t.IntersectionObserverEntry=o}function o(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?i/n:this.isIntersecting?1:0}function i(t,e){var n,o,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){n(),i=null},o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=a(n)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document);

/* event tracking (requires jQuery) */
var gaAbstract = (function() {

    var timeStart = Math.round(+new Date()/1000);

    // list of all the selectors that will trigger events
    var clickSelectors = {
        '#menu-item-5498 .highlight' : {
            event_category  : 'step0',
            event_action    : 'booking-bar-toggle',
            event_label     : 'booking-bar'
        },
        /* booking bar */
        '.main-header .book-choice-container .btn-inverted' : {
            event_category  : 'step0',
            event_action    : 'booking-bar-search',
            event_label     : 'nav'
        },
        '.kmc-section .kmc-component-booking-bar .book-choice-container .btn-inverted' : {
            event_category  : 'step0',
            event_action    : 'booking-bar-search',
            event_label     : 'footer'
        },
        '.book-choice-container:nth-child(1) .select2-hidden-accessible' : {
            type            : 'change',
            event_category  : 'step0',
            event_action    : 'change',
            event_label     : 'Type:~data-code'
        },
        '.book-choice-container:nth-child(2) .select2-hidden-accessible' : {
            type            : 'change',
            event_category  : 'step0',
            event_action    : 'change',
            event_label     : 'Destination:~data-code'
        },
        '.book-choice-container:nth-child(3) .select2-hidden-accessible' : {
            type            : 'change',
            event_category  : 'step0',
            event_action    : 'change',
            event_label     : 'Camp:~data-code'
        },
        '.book-choice-container:nth-child(4) .select2-hidden-accessible' : {
            type            : 'change',
            event_category  : 'step0',
            event_action    : 'change',
            event_label     : 'Level:~data-code'
        },
        '.book-choice-container:nth-child(5) .select2-hidden-accessible' : {
            type            : 'change',
            event_category  : 'step0',
            event_action    : 'change',
            event_label     : 'Duration:~VALUE'
        }
    };
    var mutationSelectors = {
        '#fc_frame' : {
            looking_for     : '.fc-open',
            limit_page      : true,
            event_category  : 'misc',
            event_action    : 'chat-opened'
        }
    };
    var intersectionSelectors = {
        '.kmc-booking-bar' : {
            event_category  : 'step0',
            event_action    : 'booking-bar-impression',
            event_label     : 'nav'
        },
        /* chat */
        '.kmc-component-booking-bar' : {
            event_category  : 'step0',
            event_action    : 'booking-bar-impression',
            event_label     : 'footer'
        }
    };

    // run...
    var init = function() {
        // set up event list
        clickEvents();
        mutationEvents();
        intersectionEvents();
    };

    var clickEvents = function() {

        // for each selector that needs to trigger an event
        var $doc = jQuery( document );
        var selectorKeys = Object.keys( clickSelectors );
        for ( var i=0; i < selectorKeys.length; i++ ) {

            var selectorKey = selectorKeys[ i ];
            var selectorObj = clickSelectors[ selectorKey ];
            var selectorNativeAction = ( selectorObj.type ? selectorObj.type : 'click' );
            console.log(selectorNativeAction)
            var sendEventHandler = function( ev ) {
                var gaKey = ev.data.key;
                var payload = JSON.parse( JSON.stringify( clickSelectors[ gaKey ] ) );
                payload.event_label = labelParsing( payload.event_label, ev.target );
                sendEvent( payload );
            }
            // set a delegated event
            $doc.on(
                selectorNativeAction,
                selectorKey,
                { key : selectorKey },
                sendEventHandler
            );
        }
    };

    var mutationEvents = function() {

        var observerOptions = {
            attributes: true, 
            childList: false, 
            subtree: false
        }
        var observers = [];
        var observerTriggered = {};
        var eventDeBounce = false;
        var mutationCallback = function( mutationsList, observer ) { 
            var mutationKeys = Object.keys( mutationsList );
            for( var i = 0; i < mutationKeys.length; i++ ) {
                var mutation = mutationsList[i];
                var gaKey = mutation.target.gaKey;
                if ( gaKey && mutationSelectors[ gaKey ] && !observerTriggered[ gaKey ] ) {
                    var payload = JSON.parse( JSON.stringify( mutationSelectors[ gaKey ] ) );
                    var mutationTest = ( payload.looking_for ? payload.looking_for : false );
                    if ( !mutationTest || ( mutationTest && mutation.target.matches( mutationTest ) ) ) {
                        // is this event limited to once per page?
                        if ( payload.limit_page ) {
                            observerTriggered[ gaKey ] = true;
                        }
                        payload.event_label = labelParsing( payload.event_label, mutation.target );
                        clearTimeout( eventDeBounce );
                        eventDeBounce = setTimeout( function () {
                            sendEvent( payload );
                            eventDeBounce = false;
                        }, 50 );
                    }
                }
            };
        };

        var selectorKeys = Object.keys( mutationSelectors );
        for( var i = 0; i < selectorKeys.length; i++ ) {

            observers[i] = new MutationObserver( mutationCallback );
            var targets = document.querySelectorAll( selectorKeys[i] );
            for ( var k = 0; k < targets.length; k++ ) {
                var target = targets[ k ];
                console.log('target',target)
                if ( target ) {
                    target.gaKey = selectorKeys[i];
                    observers[i].observe( target, observerOptions );
                }
            }

        }

    };

    var intersectionEvents = function() {

        var observerOptions = {
            root:  null,
            rootMargin: '0px',
            threshold: 1.0
        }
        var observers = [];
        var observerTriggered = {};
        var intersectionCallback = function( entries ) { 
            entries.forEach( entry => {
                var gaKey = entry.target.gaKey;
                if ( entry.intersectionRatio > 0.75 && !observerTriggered[ gaKey ] ) {
                    observerTriggered[ gaKey ] = true;
                    sendEvent( intersectionSelectors[ gaKey ] );
                }
            } );
        };

        var keys = Object.keys( intersectionSelectors );
        for( var i = 0; i < keys.length; i++ ) {
            
            observers[i] = new IntersectionObserver( intersectionCallback, observerOptions );
            var target = document.querySelector( keys[i] );
            if ( target ) {
                target.gaKey = keys[i]; // encode data into the dom to pass to callback
                observers[i].observe( target );
            }

        }

    };

    var labelParsing = function( event_label, el ) {

        // setting an attribute, of an element
        // eg "{title}" would result in the contents of the title attribute. 
        // "destination:{title}" would result in "destination:" followed by the contents of the title attribute. 
        if ( event_label && event_label.indexOf('{') >= 0 ) {
            var labelSplit = event_label.split('{');
            var prefix = labelSplit[0];
            var attr = labelSplit[1].replace('{','').replace('}','');
            event_label = prefix + el.getAttribute( attr );
        // the value of a select
        } else if ( event_label && event_label.indexOf('~VALUE') >= 0 ) {
            event_label = el.value;
        // weirdly specific ;-)
        } else if ( event_label && event_label.indexOf('~') >= 0 ) {
            var labelSplit = event_label.split('~');
            var prefix = labelSplit[0];
            var value = el.value;
            var option = el.querySelector('[value="' + value + '"]');
            event_label = prefix + option.getAttribute( labelSplit[1] );
        }
        return event_label;

    };

    // when an event is triggered...
    var sendEvent = function( selectorObj ) {

        // add timing
        var timeNow = Math.round(+new Date()/1000);
        selectorObj.value = timeNow - timeStart;
        
        // if Google analytics has failed to load or is blocked by ad-blocker, exit now
        if ( typeof window.ga === 'undefined' ) {
            console.error( 'GA not loaded (failed to load, initialise or blocked), failed to send:', selectorAction, selectorObj );
            return;
        }
        // send GA event
        //ga('event', selectorObj['event_action'], selectorObj);
        // debug
        console.log( 'DEBUG ANALYTICS: ', selectorObj['event_action'], selectorObj )
    };

    return {
        init: init()
    };
    
})();