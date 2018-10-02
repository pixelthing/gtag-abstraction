/*!
* @preserve
* jquery.scrolldepth.js | v1.0
* Copyright (c) 2016 Rob Flaherty (@robflaherty)
* Licensed under the MIT and GPL licenses.
*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var n,t,r,o,i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},a=e(window),l=[],c=!1,u=0;return e.scrollDepth=function(p){function s(e,i,a,l){var c=p.trackerName?p.trackerName+".send":"send";o?(o({event:"ScrollDistance",event_category:"Scroll Depth",event_action:e,event_label:i,eventValue:1,eventNonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,o({event:"ScrollDistance",event_category:"Scroll Depth",event_action:"Pixel Depth",event_label:d(a),eventValue:1,eventNonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&o({event:"ScrollTiming",event_category:"Scroll Depth",event_action:e,event_label:i,eventTiming:l})):(n&&(window[r](c,"event","Scroll Depth",e,i,1,{nonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,window[r](c,"event","Scroll Depth","Pixel Depth",d(a),1,{nonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&window[r](c,"timing","Scroll Depth",e,l,i)),t&&(_gaq.push(["_trackEvent","Scroll Depth",e,i,1,p.nonInteraction]),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",d(a),1,p.nonInteraction])),p.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,l,i,100])))}function h(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function g(n,t,r){e.each(n,function(n,o){-1===e.inArray(n,l)&&t>=o&&(s("Percentage",n,t,r),l.push(n))})}function f(n,t,r){e.each(n,function(n,o){-1===e.inArray(o,l)&&e(o).length&&t>=e(o).offset().top&&(s("Elements",o,t,r),l.push(o))})}function d(e){return(250*Math.floor(e/250)).toString()}function m(){y()}function v(e,n){var t,r,o,i=null,a=0,l=function(){a=new Date,i=null,o=e.apply(t,r)};return function(){var c=new Date;a||(a=c);var u=n-(c-a);return t=this,r=arguments,0>=u?(clearTimeout(i),i=null,a=c,o=e.apply(t,r)):i||(i=setTimeout(l,u)),o}}function y(){c=!0,a.on("scroll.scrollDepth",v(function(){var n=e(document).height(),t=window.innerHeight?window.innerHeight:a.height(),r=a.scrollTop()+t,o=h(n),i=+new Date-D;return l.length>=p.elements.length+(p.percentage?4:0)?(a.off("scroll.scrollDepth"),void(c=!1)):(p.elements&&f(p.elements,r,i),void(p.percentage&&g(o,r,i)))},500))}var D=+new Date;p=e.extend({},i,p),e(document).height()<p.minHeight||(p.gaGlobal?(n=!0,r=p.gaGlobal):"function"==typeof ga?(n=!0,r="ga"):"function"==typeof __gaTracker&&(n=!0,r="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(t=!0),"function"==typeof p.eventHandler?o=p.eventHandler:"undefined"==typeof window[p.dataLayer]||"function"!=typeof window[p.dataLayer].push||p.gtmOverride||(o=function(e){window[p.dataLayer].push(e)}),e.scrollDepth.reset=function(){l=[],u=0,a.off("scroll.scrollDepth"),y()},e.scrollDepth.addElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&(e.merge(p.elements,n),c||y())},e.scrollDepth.removeElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&e.each(n,function(n,t){var r=e.inArray(t,p.elements),o=e.inArray(t,l);-1!=r&&p.elements.splice(r,1),-1!=o&&l.splice(o,1)})},m())},e.scrollDepth});
jQuery(function() {
    // no scrolling info for quiz (shallow page)
    if ( self.location.href.indexOf('/quiz/') < 0 ) {
        jQuery.scrollDepth({
            userTiming: false,
            pixelDepth: false,
            // CM: the following is just for debugging!
            //eventHandler: function(data) {
            //    console.log(data)
            //}
        });
    }
});

/* event tracking (requires jQuery) */
var gaAbstract = (function() {

    var timeStart = Math.round(+new Date()/1000);

    // list of all the selectors that will trigger events
    var eventSelectors = {
        '.menu-toggle' : {
            event_category   : 'misc',
            event_action     : 'click',
            event_label      : 'mobile nav toggle'
        },
        '#cookie_info a' : {
            event_category   : 'misc',
            event_action     : 'click',
            event_label      : 'cookie accept'
        },
        '#text_block-4 a[target=_blank]' : {
            event_category   : 'offsite',
            event_action     : 'click',
            event_label      : 'köp lampa nu'
        },
        '.at-svc-facebook' : {
            event_category   : 'share',
            event_action     : 'click',
            event_label      : 'facebook'
        },
        '.at-svc-facebook' : {
            event_category   : 'share',
            event_action     : 'click',
            event_label      : 'facebook'
        },
        '.at-svc-twitter' : {
            event_category   : 'share',
            event_action     : 'click',
            event_label      : 'twitter'
        },
        '.at-svc-email' : {
            event_category   : 'share',
            event_action     : 'click',
            event_label      : 'email'
        },
        '.at-svc-pinterest' : {
            event_category   : 'share',
            event_action     : 'click',
            event_label      : 'pinterest'
        },
        // step 1
        '.user_details #age' : {
            type             : 'change',
            event_category   : 'quiz-spel:steg1',
            event_action     : 'choose age'
        },
        '#infromation_modal-0 .button' : {
            event_category   : 'quiz-spel:steg1',
            event_action     : 'start'
        },
        '#user_details-0 .pointer' : {
            event_category   : 'quiz-spel:steg1',
            event_action     : 'toggle',
            event_label      : 'Klicka för info om hur vi behandlar personuppgifter'
        },
        '#quiz-0.step-0 .actions .button:not([disabled])' : {
            event_category   : 'quiz-spel:steg1',
            event_action     : 'submit'
        },
        // step 2
        '#quiz-0.step-1 .actions .button.border:not([disabled])' : {
            event_category   : 'quiz-spel:steg2',
            event_action     : 'back'
        },
        '#quiz-0.step-1 .actions .button:not(.border):not([disabled])' : {
            event_category   : 'quiz-spel:steg2',
            event_action     : 'submit'
        },
        // page 3
        '#quiz-0.step-2 .actions .button.border:not([disabled])' : {
            event_category   : 'quiz-spel:steg3',
            event_action     : 'back'
        },
        '#quiz-0.step-2 .actions .button:not(.border):not([disabled])' : {
            event_category   : 'quiz-spel:steg3',
            event_action     : 'submit'
        },
        // page 4
        '#quiz-0.step-3 .actions .button.border:not([disabled])' : {
            event_category   : 'quiz-spel:steg4',
            event_action     : 'back'
        },
        '#quiz-0.step-3 .actions .button:not(.border):not([disabled])' : {
            event_category   : 'quiz-spel:steg4',
            event_action     : 'submit'
        },
        // page 5
        '#quiz-0.step-4 .actions .button.border:not([disabled])' : {
            event_category   : 'quiz-spel:steg5',
            event_action     : 'back'
        },
        '#quiz-0.step-4 .actions .button:not(.border):not([disabled])' : {
            event_category   : 'quiz-spel:steg5',
            event_action     : 'submit'
        },
        // page 6
        '#quiz-0.step-5 .actions .button.border:not([disabled])' : {
            event_category   : 'quiz-spel:steg6',
            event_action     : 'back'
        },
        '#quiz-0.step-5 .actions .button:not(.border):not([disabled])' : {
            event_category   : 'quiz-spel:steg6',
            event_action     : 'submit'
        },
        // bjud in
        '.invite-form .button:not(.disabled)' : {
            event_category   : 'quiz-spel:steg8',
            event_action     : 'bjuda'
        },
        '#quiz-0.step-6 .actions .button.border:not([disabled])' : {
            event_category   : 'quiz-spel:steg7',
            event_action     : 'back'
        },
        '#quiz-0.step-6 .actions .button:not(.border):not([disabled])' : {
            event_category   : 'quiz-spel:steg7',
            event_action     : 'submit'
        },
        // results
        '#result_infographic .bullets .bullet:not([data-tooltip="Bjud in familjen"])' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'more - bullets'
        },
        '#result_infographic .bullets .bullet[data-tooltip="Bjud in familjen"]' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'till bjuda - bullets'
        },
        '#result_infographic .wrapper-right' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'more - sidebars right'
        },
        '#result_infographic .wrapper-left' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'more - sidebars left'
        },
        '#result_infographic .pointer' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'toggle',
            event_label      : 'Vet du någon annan som borde ta detta test?'
        },
        '#result_infographic .share-wrapper .button:not(.disabled)' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'share',
            event_label      : 'Bjud in dina vänner'
        },
        '#result_infographic .sent-invitation-wrapper .button:not(.disabled)' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'bjuda in din familj'
        },
    };

    // run...
    var init = function() {

        // debug
        //console.log('DEBUG anaytics event keys:',eventSelectors)

        // set up slide event in results
        registerEvents();

        // set up slide event in results
        registerTimeLine();

        // set up slide event in results
        registerSwipeEvent();

    };

    var registerEvents = function() {

        // for each selector that needs to trigger an event
        var $doc = jQuery( document );
        var selectorKeys = Object.keys( eventSelectors );
        for ( var i=0; i < selectorKeys.length; i++ ) {

            var selectorKey = selectorKeys[ i ];
            var selectorObj = eventSelectors[ selectorKey ];
            var selectorAction = ( selectorObj.type ? selectorObj.type : 'click' );
            var sendEventHandler = function( ev ) {
                sendEvent( ev.data.key, ev );
            }

            // set a delegated event
            $doc.on(
                selectorAction,
                selectorKey,
                { key : selectorKey },
                sendEventHandler
            );
            // debug
            //console.log('DEBUG anaytics event set: ',selectorAction,selectorKey,sendEventHandler)
        }
        // debug
        //console.log('DEBUG anaytics events set: ' + i)

    };

    // when an event is triggered...
    var sendEvent = function( selectorKey, ev, selectorObj ) {

        var selectorObj = selectorObj || eventSelectors[ selectorKey ];
        var selectorAction = ev.type;

        // add timing
        var timeNow = Math.round(+new Date()/1000);
        selectorObj.value = timeNow - timeStart;

        // if select, add the result as a label
        if ( selectorAction === 'change' ) {
            selectorObj.event_label = jQuery( ev.target ).val();
        }
        
        // if Google analytics has failed to load or is blocked by ad-blocker, exit now
        if ( typeof window.ga === 'undefined' ) {
            console.error( 'GA not loaded (failed to load, initialise or blocked), failed to send:', selectorAction, selectorObj );
            return;
        }
        // send GA event
        gtag('event', selectorAction, selectorObj);
        // debug
        //console.warn( 'DEBUG ANALYTICS: ', selectorAction, selectorObj )
    };

    var registerSwipeEvent = function () {

        var $doc = jQuery( document );
        var el = '.wrapper-left+.wrapper';
        var timer = 0;
        var swipeX = 0;
        var swipeY = 0;
        $doc.on( 'touchcancel', el, function( ev ) {
            timer = 0;
            swipeX = 0;
            swipeY = 0;
        } );
        $doc.on( 'mouseup touchend', el, function( ev ) {
            var timerLength = Math.round(+new Date()) - timer;
            var swipedX = ev.offsetX - swipeX;
            var swipedY = ev.offsetY - swipeY;
            if ( Math.abs( swipedX ) > Math.abs( swipedY ) 
                && Math.abs( swipedX ) > 5 
                && timerLength > 50 ) {
                var payload = {
                    event_category   : 'quiz-spel:resultat',
                    event_action     : 'more - swipe ' + ( swipedX < 0 ? 'left' : 'right' )
                };
                sendEvent( false, false, payload );
            }
            timer = 0;
            swipeX = 0;
            swipeY = 0;
        } );
        $doc.on( 'mousedown touchstart', el, function( ev ) {
            timer = Math.round(+new Date());
            swipeX = ev.offsetX;
            swipeY = ev.offsetY;
        } );

    };

    var registerTimeLine = function() {

        var $doc = jQuery( document );
        $doc.on('click', '.question.done', function( ev ) {
            var to = jQuery( ev.target ).text();
            var payload = {
                event_category   : 'quiz-spel:nav',
                event_action     : 'click - timeline',
                event_label      : '> ' + to
            };
            //console.log( payload )
            sendEvent( false, false, payload );
        });

    };

    return {
        init: init()
    };
    
})();