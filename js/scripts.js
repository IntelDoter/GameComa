/**
 * Created by IntelDoter on 29.07.2016.
 */

"use strict";

$(document).ready(function(){
    $('.parallax').parallax();

    $('.caller').scrollfire({

        offset: 0,
        topOffset: 150,
        bottomOffset: 150,

        onTopHidden: function(nav_games){
        $(elm).css("display", "block");
    }
    });

})