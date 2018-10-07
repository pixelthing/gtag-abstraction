/*!
* @preserve
* jquery.scrolldepth.js | v1.0
* Copyright (c) 2016 Rob Flaherty (@robflaherty)
* Licensed under the MIT and GPL licenses.
*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var n,t,r,o,i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0,gaGlobal:!1,gtmOverride:!1,trackerName:!1,dataLayer:"dataLayer"},a=e(window),l=[],c=!1,u=0;return e.scrollDepth=function(p){function s(e,i,a,l){var c=p.trackerName?p.trackerName+".send":"send";o?(o({event:"ScrollDistance",event_category:"Scroll Depth",event_action:e,event_label:i,eventValue:1,eventNonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,o({event:"ScrollDistance",event_category:"Scroll Depth",event_action:"Pixel Depth",event_label:d(a),eventValue:1,eventNonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&o({event:"ScrollTiming",event_category:"Scroll Depth",event_action:e,event_label:i,eventTiming:l})):(n&&(window[r](c,"event","Scroll Depth",e,i,1,{nonInteraction:p.nonInteraction}),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,window[r](c,"event","Scroll Depth","Pixel Depth",d(a),1,{nonInteraction:p.nonInteraction})),p.userTiming&&arguments.length>3&&window[r](c,"timing","Scroll Depth",e,l,i)),t&&(_gaq.push(["_trackEvent","Scroll Depth",e,i,1,p.nonInteraction]),p.pixelDepth&&arguments.length>2&&a>u&&(u=a,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",d(a),1,p.nonInteraction])),p.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,l,i,100])))}function h(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function g(n,t,r){e.each(n,function(n,o){-1===e.inArray(n,l)&&t>=o&&(s("Percentage",n,t,r),l.push(n))})}function f(n,t,r){e.each(n,function(n,o){-1===e.inArray(o,l)&&e(o).length&&t>=e(o).offset().top&&(s("Elements",o,t,r),l.push(o))})}function d(e){return(250*Math.floor(e/250)).toString()}function m(){y()}function v(e,n){var t,r,o,i=null,a=0,l=function(){a=new Date,i=null,o=e.apply(t,r)};return function(){var c=new Date;a||(a=c);var u=n-(c-a);return t=this,r=arguments,0>=u?(clearTimeout(i),i=null,a=c,o=e.apply(t,r)):i||(i=setTimeout(l,u)),o}}function y(){c=!0,a.on("scroll.scrollDepth",v(function(){var n=e(document).height(),t=window.innerHeight?window.innerHeight:a.height(),r=a.scrollTop()+t,o=h(n),i=+new Date-D;return l.length>=p.elements.length+(p.percentage?4:0)?(a.off("scroll.scrollDepth"),void(c=!1)):(p.elements&&f(p.elements,r,i),void(p.percentage&&g(o,r,i)))},500))}var D=+new Date;p=e.extend({},i,p),e(document).height()<p.minHeight||(p.gaGlobal?(n=!0,r=p.gaGlobal):"function"==typeof ga?(n=!0,r="ga"):"function"==typeof __gaTracker&&(n=!0,r="__gaTracker"),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(t=!0),"function"==typeof p.eventHandler?o=p.eventHandler:"undefined"==typeof window[p.dataLayer]||"function"!=typeof window[p.dataLayer].push||p.gtmOverride||(o=function(e){window[p.dataLayer].push(e)}),e.scrollDepth.reset=function(){l=[],u=0,a.off("scroll.scrollDepth"),y()},e.scrollDepth.addElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&(e.merge(p.elements,n),c||y())},e.scrollDepth.removeElements=function(n){"undefined"!=typeof n&&e.isArray(n)&&e.each(n,function(n,t){var r=e.inArray(t,p.elements),o=e.inArray(t,l);-1!=r&&p.elements.splice(r,1),-1!=o&&l.splice(o,1)})},m())},e.scrollDepth});
jQuery(function() {
    // no scrolling info for quiz (shallow page)
    if ( self.location.href.indexOf('/testet/') < 0 ) {
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
            event_action     : 'more - bullets',
            checkGraphic     : true
        },
        '#result_infographic .bullets .bullet[data-tooltip="Bjud in familjen"]' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'till bjuda - bullets'
        },
        '#result_infographic .wrapper-left' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'more - sidebars left',
            checkGraphic     : true
        },
        '#result_infographic .wrapper-right' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'more - sidebars right',
            checkGraphic     : true
        },
        '#result_infographic .pointer' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'toggle',
            event_label      : 'Vet du någon annan som borde ta detta test?'
        },
        '#result_infographic .categories-title .column' : {
            event_category   : 'quiz-spel:resultat',
            event_action     : 'click - subjects',
            checkSubjects    : true
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
        '#course .play-button' : {
            event_category   : 'course:video',
            event_action     : 'play',
            checkCourseTitle : true
        },
        '#course .tabs li' : {
            event_category   : 'course:content',
            event_action     : 'tab',
            checkCourseTitle : true,
            checkCourseTab   : true
        },
        '#course .video-chapters .chapter' : {
            event_category   : 'course:chapter',
            event_action     : 'chapter',
            checkCourseTitle : true,
            checkCourseChapter: true
        }
    };

    // run...
    var init = function() {

        // debug
        //console.log('DEBUG anaytics event keys:',eventSelectors)

        // set up event list
        registerEvents();

        // register timeline clicks
        registerTimeLine();

        // set up slide event in results
        registerSwipeEvent();

        // set up film events
        registerFilm();

        checkResultPage();

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
                // check for title of course
                if ( eventSelectors[ ev.data.key ].checkCourseTitle ) {
                    eventSelectors[ ev.data.key ].event_category = checkCourseTitle( ev );
                }
                // check for tab click in course
                if ( eventSelectors[ ev.data.key ].checkCourseTab ) {
                    eventSelectors[ ev.data.key ].event_label = checkCourseTab( ev );
                }
                // check for chapter click in course
                if ( eventSelectors[ ev.data.key ].checkCourseChapter ) {
                    eventSelectors[ ev.data.key ].event_label = checkCourseChapter( ev );
                }
                sendEvent( ev.data.key, ev );
                // check for status in results page
                if ( eventSelectors[ ev.data.key ].checkGraphic ) {
                    checkResultPage();
                }
                // check for infograhic help on the four subjects in results page
                if ( eventSelectors[ ev.data.key ].checkSubjects ) {
                    checkSubjects( ev );
                }
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
            if ( Math.abs( swipedX ) > Math.abs( swipedY )*0.75 
                && Math.abs( swipedX ) > 10 
                && timerLength > 50 ) {
                var payload = {
                    event_category   : 'quiz-spel:resultat',
                    event_action     : 'more - swipe ' + ( swipedX < 0 ? 'left' : 'right' )
                };
                sendEvent( false, false, payload );
                checkResultPage();
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

    var registerFilm = function () {
        var $doc = jQuery( document );
        var videoSelector = '.video-modal video';
        var playing = false;
        document.addEventListener('play', function() {
            if (event.target.matches( videoSelector )) {
                playing = true;
                sendEvent( false, false, {'event_action':'play', 'event_category':'intro:video'});
            }
        }, true);
        document.addEventListener('pause', function() {
            if (event.target.matches( videoSelector )) {
                sendEvent( false, false, {'event_action':'pause', 'event_category':'intro:video'});
                playing = false;
            }
        }, true);
        document.addEventListener('ended', function() {
            if (event.target.matches( videoSelector )) {
                setTimeout(function() {playing = false;},50);
                sendEvent( false, false, {'event_action':'ended', 'event_category':'intro:video'});
            }
        }, true);
        document.addEventListener('volumechange', function() {
            if (event.target.matches( videoSelector )) {
                sendEvent( false, false, {'event_action':'volumechange', 'event_category':'intro:video'});
            }
        }, true);
        document.addEventListener("seeked", function() { 
            if (event.target.matches( videoSelector )) {
                sendEvent( false, false, {'event_action':'seeked', 'event_category':'intro:video'});
            }
        }, true);

        $doc.on('click', '#hero-0 .play-video', function( ev ) {
            sendEvent( false, false, {'event_action':'open', 'event_category':'intro:video'});
        });
        $doc.on('click', '.video-modal .close', function( ev ) {
            if ( playing ) {
                sendEvent( false, false, {'event_action':'close - whilst playing', 'event_category':'intro:video'});
            } else {
                sendEvent( false, false, {'event_action':'close - not playing', 'event_category':'intro:video'});
            }
            played = false;
        });
        $doc.on('click', '#hero-0 .video-modal .modal-bg', function( ev ) {
            if ( playing ) {
                sendEvent( false, false, {'event_action':'close (bg) - whilst playing', 'event_category':'intro:video'});
            } else {
                sendEvent( false, false, {'event_action':'close (bg) - not playing', 'event_category':'intro:video'});
            }
            played = false;
        });

    };

    var checkResultPage = function() {

        setTimeout( function () {

            $graphic = jQuery('.graphics');
            $invitation = jQuery('.family-image');
            $score = jQuery('.warning-container');
            if ( $graphic.length ) {
                sendEvent( false, false, {'event_action':'view infographic', 'event_category':'quiz-spel:resultat'});
            } else if ( $invitation.length ) {
                sendEvent( false, false, {'event_action':'view family invite', 'event_category':'quiz-spel:resultat'});
            } else if ( $score.length ) {
                var score = $score.text().trim();
                sendEvent( false, false, {'event_action':'view score', 'event_category':'quiz-spel:resultat','event_label':score});
            }
        },500);

    };

    var checkSubjects = function( ev ) {

        var thatEvent = ev;
        setTimeout( function () { 

            var $target = jQuery(thatEvent.target);
            if ( $target.hasClass('hide-info') ) {
                $target = $target.parent();
            }
            var $button = $target.find('span');
            if ( $button.hasClass('hide-info') ) {
                var subject = $target.text().trim();
                sendEvent( false, false, {'event_action':'view subject', 'event_category':'quiz-spel:resultat', 'event_label': subject});
            }
        },300);

    };

    var checkCourseTitle = function( ev ) {

        return 'course:' + jQuery('.title-wrapper h2').first().text().trim();

    };

    var checkCourseTab = function( ev ) {

        return 'tab:' + jQuery(ev.target).text().trim();

    };

    var checkCourseChapter = function( ev ) {

        var $target = jQuery(ev.target);
        if ( $target.closest('.chapter').length ) {
            $target = $target.closest('.chapter');
        }
        var text = $target.find('strong').text().trim();
        return 'chapter:' + text;

    };

    return {
        init: init()
    };
    
})();