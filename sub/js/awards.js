
window.onload = function(){
    let awardsGrid = document.querySelector('.awards_grid');
    let hiddenBlock = document.querySelector('.hidden_block');
    let plusBtn = document.querySelector('.plus_btn');

    plusBtn.addEventListener('click', (e) =>{
        hiddenBlock.style.display = 'block';
        awardsGrid.innerHTML = `
        <div>
            <img src="../images/box01.jpg" alt="">
            <p>ISO-9001 (품질)</p>
        </div>
        <div>
            <img src="../images/box02.jpg" alt="">
            <p>ISO-14001 (환경)</p>
        </div>
        <div>
            <img src="../images/box03.jpg" alt="">
            <p>ISO-45001</p>
        </div>
        <div>
            <img src="../images/box04.jpg" alt="">
            <p>고용우수기업</p>
        </div>
        <div>
            <img src="../images/box05.jpg" alt="">
            <p>글로벌 강소기업 지정서</p>
        </div>
        <div>
            <img src="../images/box06.jpg" alt="">
            <p>스타기업 지정서</p>
        </div>
        <div>
            <img src="../images/box07.jpg" alt="">
            <p>기술역량 우수기업</p>
        </div>
        <div>
            <img src="../images/box08.jpg" alt="">
            <p>철탑산업 훈장증</p>
        </div>
        <div>
            <img src="../images/box09.jpg" alt="">
            <p>벤처기업 확인서</p>
        </div>
        <div>
            <img src="../images/box10.jpg" alt="">
            <p>이노비즈 확인서</p>
        </div>
        <div>
            <img src="../images/box11.jpg" alt="">
            <p>좋은 일터</p>
        </div>
        <div>
            <img src="../images/box12.jpg" alt="">
            <p>특허증 (제10-1946860호)</p>
        </div>
        <div>
            <img src="../images/box13.jpg" alt="">
            <p>특허증 (제 10-2305225호)</p>
        </div>
        <div>
            <img src="../images/box14.jpg" alt="">
            <p>수출의탑-천만불</p>
        </div>
        `;
        plusBtn.style.display = 'none';
        e.preventDefault();
    });
    
}