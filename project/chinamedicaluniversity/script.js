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
        texth2:"中國醫藥大學行政教學大樓",
        textp1:"建築南向立面由三米寬的鋼構架與不同穿透性的玻璃結合而成。於此皮層中，集中服務性質建築元素，整合垂直動線，如樓梯、電梯、空調與給水等管線。交替使用不同模矩尺寸及二種透明度的玻璃帷幕單元，帶有混亂感的帷幕立面，以一種自然有機的分割手法，表現自在的現代性。",
        textp2:"考慮建築的通風換氣及隔熱效果，鋼構架內留有多處挑空風道，配合二種不同穿透性的玻璃構成空氣隔熱層，產生熱對流的垂直通風；平面配置上鄰接半戶外走廊，藉由水平通風廊道為建築物注入新鮮空氣。"
    }
}) ;

let info = new Vue({
    el:".info",
    data:({
        infoli1:"建築:邱文傑建築師事務所",
        infoli2:"地點:台中",
        infoli3:"完工:2020",
        infoli4:"攝影:李易暹攝影工作室",
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

