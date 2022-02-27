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
    el:'.logoArea',
    data:{
        englishname1:'Hsieh',
        englishname2:'Sung',
        englishname3:'Lin',
        projectsList1:'Projects',
    },
});

let copyright = new Vue({
    el:'.footer',
    data:{
        year:' @ ' + new Date().getFullYear(),
        name:'HSIEH SUNG LIN'
    },
});

let projectsArea = new Vue({
    el:".projectsArea",
    data:{
        time1:"2021",
        project1:"澎湖MOTUS運動用品店",
        time2:"2021",
        project2:"達欣東門馥寓大廳設計",
        time4:"2021",
        project4:"安和路王宅",
        time5:"2021",
        project5:"忠泰建設忠泰本質接待中心",
        time6:"2020",
        project6:"TEDX十周年展演",
        time7:"2020",
        project7:"正儀日本貿易辦公室",
        time8:"2019",
        project8:"芝山山屋",
        time10:"2019",
        project10:"中國醫藥大學行政教學大樓",

    }
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