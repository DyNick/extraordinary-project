'use strict'

$(document).ready(function(){
    $('.column__item  a').click(function(e){
        e.preventDefault();
        $("#content").load($(this).attr('href'));
    });
});
