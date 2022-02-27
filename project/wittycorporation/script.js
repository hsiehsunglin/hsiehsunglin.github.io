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
        texth2:"正儀日本貿易辦公室",
        textp1:"位在台北精華辦公大樓的辦公室，業主來自日本，頻繁往返台日。辦公室的主體色調也帶有淡淡的日系氣息，卻又跳脫傳統的棋盤配置，主要以開放式的六邊形辦公桌，依照部門及職位精密地分配。",
        textp2:"大量的白色系質感漆讓素雅的牆面帶有微微的粗曠抹面，搭配白色系的家具以及白色烤漆的金屬框線。桌板及天花使用了相同的淺色木紋像是面對面對話，框住了一整片的空氣，延伸出了景深。會議室及主管空間運用了漸層的半透明玻璃，試著保留更多的隱密又不會阻擋視覺穿透。"
    }
}) ;

let info = new Vue({
    el:".info",
    data:({
        infoli1:"空間:樂工設計",
        infoli2:"地點:台北",
        infoli3:"完工:2020",
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

