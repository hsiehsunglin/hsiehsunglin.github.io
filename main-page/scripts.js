
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
    el:'.content',
    data:{
        englishname1:'Hsieh',
        englishname2:'Sung',
        englishname3:'Lin',
        name:'謝松霖',
        contact1:"Contact with me",
        contact2:"0921016258",
        contact3:"新北市新店區北宜路一段105巷4弄27號",
        contact4:"dahsieh8139@gmail.com",
    },
});

let text = new Vue({
    el:'.text',
    data:{
        text1:"If it's not fun , you're not doing it right.",
        text2:"曾經以為會一直待在建築設計與室內設計領域的我，轉念之間，踏入了前端的世界，是個無程式背景的麻瓜。嘗試之下，發現寫程式的有趣，前端像是虛擬世界的建築，用不同的語言建立了皮、肉、骨。目前透過網路課程自學，了解HTML、CSS、JS的基本概念及語法，也持續讓自己更熟練，學習API串接及Vue框架的操作，以成為前端工程師為目標努力中。",
        text3:"在建築事務所以及室內設計公司，常接觸一些需要強烈品牌識別及空間的案子，擅長簡報提案、及3D空間繪製，偶然發現3D概念的網頁開發，想進入從事品牌識別以及網站設計的領域，希望不要畫地自限，就能擁有更多的自己，發揮更多的潛力。",
    },
});

let experienceList = new Vue({
    el:".experienceList",
    data:{
        experienceh3:"Experience",
        time1:"2019.06 - 2021.06",
        experience1:"樂工設計 設計師",
        time2:"2017.02 - 2019.03",
        experience2:"邱文傑建築師事務所 設計師",
    }
}) ;


let info = new Vue({
    el:".education",
    data:{
        educationh3:"Education",
        time1:"2015.11 - 2016.11",
        education1:"陸軍特種作戰指揮部",
        time2:"2010.9 - 2015.6",
        education2:"實踐大學建築設計學系",
        time3:"2007.9 - 2010.6",
        education3:"台北市立和平高級中學"
    }
}) ;


let frontEnd = new Vue({
    el:".frontEnd",
    data:{
        frontEndh3:"Front - End",
        frontEnd1:"HTML",
        frontEnd2:"CSS",
        frontEnd3:"JavaScript",
        frontEnd4:"jQuery",
        frontEnd5:"Vue.js",
        frontEnd6:"Git",
    }
}) ;

let tools = new Vue({
    el:".tools",
    data:{
        toolh3:"Adobe",
        tool1:"Photoshop",
        tool2:"Illustrator",
        tool3:"Lightroom",
        tool4:"InDesign",
        tool5:"Windows",
        tool6:"Mac OS",
    }
}) ;

let archis = new Vue({
    el:".archis",
    data:{
        archih3:"Architecture",
        archi1:"AutoCad",
        archi2:"SketchUp",
        archi3:"Rhino",
        archi4:"VRay",
    }
}) ;




let experience = new Vue({
    el:".experience",
    data:{
        experienceh2:"Experience",
        project1:"2021 澎湖MOTUS運動用品店",
        project_text1:"設計提案/3D製圖/施工圖製作/報價單/現場監工",
        project2:"2021 達欣東門馥寓大廳設計",
        project_text2:"設計提案/3D製圖/施工圖製作/報價單",
        project3:"2020 璞石貿易辦公室",
        project_text3:"設計提案/3D製圖/施工圖製作/報價單/現場監工",
        project4:"2021 安和路王宅",
        project_text4:"設計提案/3D製圖/施工圖製作/報價單/現場監工",
        project5:"2021 忠泰建設忠泰本質接待中心",
        project_text5:"設計提案/3D製圖/施工圖製作/報價單/現場監工",
        project6:"2020 TEDX十周年展演",
        project_text6:"設計提案/3D製圖/施工圖製作/報價單/現場監工",
        project7:"2020 正儀日本貿易辦公室",
        project_text7:"設計提案/3D製圖/施工圖製作/報價單/現場監工",
        project8:"2019 芝山山屋",
        project_text8:"全區規劃/模型製作/施工圖製作/現場監工",
        project9:"2019 基隆山海城串聯再造計畫工程",
        project_text9:"全區規劃/模型製作/計畫書製作",
        project10:"2019 中國醫藥大學行政教學大樓",
        project_text10:"空間規劃/立面設計/3D製圖/施工圖製作",
        project11:"2018 高雄六龜育幼院",
        project_text11:"全區規劃/模型製作",
        project12:"2017 八里聖心中小學",
        project_text12:"全區規劃/模型製作",
        project13:"2017 桃園廣豐新天地",
        project_text13:"立面設計/圖說製作",
        
    }
});


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





 