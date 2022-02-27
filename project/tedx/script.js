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
        texth2:"TEDX十周年展演",
        textp1:"有別於以往的目的，這次是為跑酷選手量身打造的空間，物件尺寸除了需要配合選手們的需求，距離與材質，也親身嘗試來調整。所有的跳箱、桿子物件都是以訂做的方式設計，也運用了止滑膠及軟墊作保護。",
        textp2:"藉由立體的箱體圍塑出主空間，訂做了大量黑色紙箱，以砌磚的方式交丁堆疊而成，試著藉由立體單元呼應場內高低的跳箱，而跳箱等物件使用了螢光色搭配對比反光文字，跳出地壁的黑。嘗試了快速且實驗性的舞台呈現。"
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

