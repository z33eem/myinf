
$(function(){
    
    $.fn.centerElements = (function(){
        $(this).css({
            top: ($(window).height() - $(this).height()) / 2,
            left: ($(window).width() - $(this).width()) / 2
        })
        return $(this);
    })
    
    $('div').centerElements();
});