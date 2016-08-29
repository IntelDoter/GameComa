/**
 * Created by IntelDoter on 29.07.2016.
 */

"use strict";

$(document).ready(function(){
    $('.parallax').parallax();

    $(".nav_link").hover(
        function() {
            $(this).css("transform","scale(1.4)")
        },
        function() {
            $(this).css("transform","scale(1)")
        }
    )

});