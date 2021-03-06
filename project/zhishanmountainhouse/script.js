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
        texth2:"芝山山屋",
        textp1:"「接近但不觸碰；交錯但不交融」",
        textp2:"透過交錯但不交融的核心概念，試著將私密的展覽空間與開放的公共空間揉合。順著騎樓下的螺旋梯可上至二、三樓的廊箱，再直達屋頂平台。公共空間獨立運作，無須踏入展覽區。展覽的範圍自騎樓下的玻璃盒子開始，經由混凝土樓梯通往二樓與三樓的鋼板量體；最後透過水泥樓梯，可到達懸挑於屋頂平台上方的屋頂突出。屬於展覽空間的屋頂突出物吊掛了一座爬梯，它無法通達下方的屋頂平台，但人們可藉由它停留在半空中，接近但不碰觸。"
    }
}) ;

let info = new Vue({
    el:".info",
    data:({
        infoli1:"建築:邱文傑建築師事務所",
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

