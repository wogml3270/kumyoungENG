
// window.onload = function(){
//     let HVAC_img_tab = document.querySelectorAll('.performance_tab_list > li');
    
//     let HVAC_img = document.querySelector('.performance_hvac');

//     HVAC_img_tab[5].addEventListener('click', () =>{
//         HVAC_img_tab[5].style.backgroundColor = '#004170';
//         HVAC_img_tab[5].style.color = '#ffffff';
//         HVAC_img.style.display = 'grid';
//     });
// }

$(document).ready(function(){
    $('.performance_list > li').click(function(){

        let tab_id = $(this).attr('performance-data-tab');

        $('.performance_list li').removeClass('performance_active');
        $('.performance_grid > div').removeClass('performance_active');
        $('.title_tab').removeClass('performance_active');

        $(this).addClass('performance_active');
        $("." + tab_id).addClass('performance_active');
    });
});