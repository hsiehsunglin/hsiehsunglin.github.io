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
        texth2:"達欣東門馥寓大廳設計",
        textp1:"此大廳設計地點位於台北東門周邊，帶入東門地區的文藝氣質、書香氛圍。整體空間從入口的大門，利用深灰色不鏽鋼鍍鈦崁入實木，提升工藝感，搭配黑色系大理石外牆，大門右側設計像櫥窗的立面，隱約展現內部的氣質。",
        textp2:"進到大廳空間，對到的是前往停車場空間的大門，利用金屬簍空的材質與大門形成對比，大廳空間整體利用材質與色系，形成視覺上的兩個區域，分別是深色系的公領域以及淺色系的私領域，指引住戶回家的方向。",
        textp3:"公共區配置書櫃層板以及叫重量感的文藝掛畫，後層為深灰色系實木皮牆面，利用金屬以及玻璃材質之燈具點綴空間的沉穩，櫃台上方鍍鈦金屬帶狀天花與電梯立面相互呼應，電梯兩側則使用灰黑色鏡面，凸顯了中央的電梯立面，同時也具有鏡子的功能，私領域整體主要為淺色洞石壁磚，利用鍍鈦邊條於牆上分割出不同的韻律。"
    }
}) ;

let info = new Vue({
    el:".info",
    data:({
        infoli1:"空間:樂工設計",
        infoli2:"地點:台北",
        infoli3:"設計:2021",
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

