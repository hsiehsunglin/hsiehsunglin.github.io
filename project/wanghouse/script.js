let showbody = document.querySelector("body");
setTimeout(()=>{
    showbody.classList.add("show");
},500);


let social = new Vue({
    el:'.social',
    data:{
        instagram:"https://www.instagram.com/dadariohsieh/",
    },
});

let content = new Vue({
    el:'.logo',
    data:{
        englishname1:'Hsieh',
        englishname2:'Sung',
        englishname3:'Lin',
    },
});

let text = new Vue({
    el:".text",
    data:{
        texth2:"安和路王宅",
        textp1:"這間屋宅是女主人兒時成長的家，我們聽著她介紹著過去的樣貌、與未來的期待，後期分做兩戶，而今我們再次修整、重新打造新家庭成員的生活空間，運用自然的素材，試著創造輕鬆、愜意且自由自在的家，同時配合著每位家庭成員不同的日常小細節，讓每個角落的都能成為別緻的風景。",
        textp2:"整體空間由兩戶打通，面積雖大，但長向的軸向也有所限制，垂直高度也是需注意的問題。將公領域切分出完整的區塊，以開放的方式提供更多的景深，利用牆面的材質分割與天花的韻律，隱約地劃分出不同功能的區塊。主體使用溫潤的大地色系，融合地陪襯柚木家具、鬆軟質感的灰色沙發。小孩房則保留最大的彈性，為了提供成長過程中不同的需求，主要使用了淺色系的色塊搭配活動家具，以便未來調整。"
    }
}) ;

let info = new Vue({
    el:".info",
    data:({
        infoli1:"空間:樂工設計",
        infoli2:"地點:台北",
        infoli3:"完工:2021",
    })
}) ;


let copyright = new Vue({
    el:'.footer',
    data:{
        year:' @ ' + new Date().getFullYear(),
        name:'HSIEH SUNG LIN'
    },
});

$(function () {
    let win = $(window) ;
    let backToTop = $(".goTop") ;
    win.scroll(
        function () {
            if(win.scrollTop() > 200) {
                backToTop.show();
            } else {
                backToTop.hide();
            }
        }
    );
    backToTop.click(
        function () {
            $('html, body').animate({scrollTop:0} , 200);
        }
    )
})


$(document).ready(function() { 
    $(".bars").click(function() { 
    $(".flex-menu").toggle(); 
    }); 
}); 

