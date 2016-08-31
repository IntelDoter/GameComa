/**
 * Created by IntelDoter on 29.07.2016.
 */

"use strict";

$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop:true,
        slideMargin: 0,
        thumbItem: 9
    });

});