/**
 * Created by IntelDoter on 29.07.2016.
 */

"use strict";

$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    /* slider */
    $('.next').click(function() {
        var current = $('.current');
        var parent = current.parent();
        if (current.next().is("li")) {
            var nextEl = current.next();
            current.removeClass('current');
            nextEl.addClass('current');
        } else {
            current.removeClass('current');
            parent.children().first().addClass('current');
        }
    });
    $('.back').click(function() {
        var current = $('.current');
        var parent = current.parent();
        if (current.prev().is("li")) {
            var nextEl = current.prev();
            current.removeClass('current');
            nextEl.addClass('current');
        } else {
            current.removeClass('current');
            parent.children().last().addClass('current');
        }
    });

    $(".play").click(function() {
        var elem = $(this).parent().parent().find(".play_action");
        elem.css("display", "block");
    });

    $(".close_action").click(function() {
        var elem = $(this).parent();
        elem.css("display", "none");
    });

});