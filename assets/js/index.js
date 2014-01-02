/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");
        $(function(){
            setTimeout(function(){
                if($(".addsbygoogle").css('display')=="none") //use your ad's id here I have used Google Adense
                {
                    console.log('here3');
                    $('body').html("We noticed you have an active Ad Blocker. Example.com is ad funded, we promise our ads are of high quality and are unobtrusive. The best help you could provide to keep us running, is to whitelist us in your ad blocker. Thanks!");
                }
            },3000);
        });

    });
}(jQuery));