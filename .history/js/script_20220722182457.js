
$(document).ready(function(){
    // html file onload
    $("#header").load("header.html");
    $("#information").load("inf_banner.html");
    $("#business").load("busi_banner.html");
    $("#product").load("pro_banner.html");
    $("#footer").load("footer.html");

    //main content01에 tab 메뉴 -- 박재희
    $('.list li').click(function(){
        
        let tab_id = $(this).attr('data-tab');

        $('.list li').removeClass('active');
        $('.content01_box').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });
});


// // 제이쿼리 안쓰고 2중 for문을 사용하려다가 안된 코드
// const tabList = document.querySelectorAll('.tab_menu .list li');
// const active = document.querySelector('.active');

// for(var i=0; i<tabList.length; i++){
//     tabList[i].active.addEventListner('click', (e) =>{
//         e.preventDefault();
//         for(var j = 0; j < tabList.length; j++){
//             tabList[j].classList.remove('active');
//           }
//           this.parentNode.classList.add('active');
//     });
// }

