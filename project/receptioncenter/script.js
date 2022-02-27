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
        texth2:"忠泰建設忠泰本質接待中心",
        textp1:"此空間專為位於板橋江子翠重劃區建案打造之接待中心，建案命名為「忠泰本質」，以家回歸本質、生活向上為概念，企圖結合品牌風格以及在地生活感。",
        textp2:"希望不只是營造出華麗的內裝，而是能帶給參訪者更多生活與人文的感受，空間主體使用圓形球體以及弧線的語彙，試著讓各個空間相互呼應，同時柔化建築結構以及空間的關係，色調以白色藝術塗料貫穿全空間，以柚木色木皮、粗織紋繃布劃分不同使用空間，搭配鍍鈦金屬提升空間細節以及質感。",
        textp3:"首先會進到中央接待區，大型的圓球形造型天花映入眼簾搭配著周圍的間接照明所呈現的柔光，較高的天花高層做為整體空間的中心，隱約分隔出右側展覽空間以及左側洽談空間，右側弧形入口引導參訪者進入展覽空間，左側洽談區則以大面積的書櫃營造出木紋質感的方體，無形地畫分出座位、走道以及吧檯的區域。"
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

