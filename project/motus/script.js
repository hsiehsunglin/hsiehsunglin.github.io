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
        texth2:"澎湖MOTUS運動用品店",
        textp1:"位在澎湖的運動用品店，是由新一代所創立的新品牌，從白色的外牆、白色的招牌，以及空間中大量的白色，利用微量的粉色系物件做點綴，嘗試讓商品於白色背景凸顯出來。在白色、鏡面、不鏽鋼原色的韻律中，新的視覺概念試圖跳脫傳統運動用品店的形象，更帶有一些實驗性。",
        textp2:"在樓梯的區域，強烈的橘色塑造了垂直的動線，在白色建築中彷彿脫離開來，一路穿越到三樓，三樓選物區則使用了夾板原木漆面的方式，試著讓文創選物增添了更多的原始氣息，利用木框形成無形的視覺劃分。"
    }
}) ;

let info = new Vue({
    el:".info",
    data:({
        infoli1:"空間:樂工設計",
        infoli2:"地點:澎湖",
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

