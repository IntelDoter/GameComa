/**
 * Created by IntelDoter on 29.07.2016.
 */

"use strict";

$(document).ready(function(){

    var $angle_btn = $(".btn_angle");

    $angle_btn.click(function() {
       $angle_btn.css("transform","rotate(180deg)");
    });

    var options = [
        {selector: '#server_list', offset: 0, callback: function() {
            $angle_btn.css("transform","rotate(180deg)");
        } }
    ];
});