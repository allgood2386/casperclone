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
                if($(".adsbygoogle").css('display')=="none") //use your ad's id here I have used Google Adense
                {
                    $('.adsbygoogle').replaceWith('<div class="adblocker">Hey I noticed you have an ad blocker.' +
                        ' Well I\'m a developer paying off student loans still and every bit helps. I\'ve gone and ' +
                    'made these ads as un-intrusive as possible so if you could consider whitelisting this site ' +
                '   it would be much appreciated!');
                    $('.adsbygoogle').css('display','block!important' );
                }
        });

    });
}(jQuery));