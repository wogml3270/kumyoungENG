$(function(){
    const $snbbox = $('.snb > ul.snb_box > li:nth-child(2) > a');
    const $lnb = $('ol.lnb');

    $snbbox.on("mouseenter",function(){
        // evt.preventDefault();
        $lnb.slideToggle(150);        
    })

    $lnb.on("mouseleave",function(){
        $(this).slideUp(150);
    })

})