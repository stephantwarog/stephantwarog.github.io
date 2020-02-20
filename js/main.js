$.getJSON("../bin/datas/datas.json", function(json) {
    appDatas = json;// this will show the info it in firebug console
    $(".mainContent").load("home.html",function(){
        start();
    });
});

// var datas = require('../bin/datas/datas.json');
//var datas = JSON.parse(datasFR);

var menuOpened = false;
$(".navigationMenuContainer").hide();

function start(){

        $(".burgerButton").on("click",function(){
            menuOpened = !menuOpened;
            (menuOpened === true) ? $(".navigationMenuContainer").show() : $(".navigationMenuContainer").hide();
            console.log(menuOpened);
        });

        $(".navigationMenuContainer").on("click",function(){
            $(".navigationMenuContainer").hide();
            menuOpened = false;
        });
        $(".navigationMenu").on("click",function(){
            $(".navigationMenuContainer").hide(); 
            menuOpened = false;
        });

        var menuList = appDatas.interface.menu;
        var menuTag = appDatas.interface.menuLinks;
        console.log(typeof  menuList);
        var menuHTML = "";

        for (bt in menuList) {
            console.log(bt);
            menuHTML += "<div class=\"navigationMenuButton\" id=\""+menuTag[bt]+"\">"+menuList[bt]+"</div>";            
        }



        console.log(menuHTML);
        $(".navigationMenu").html(menuHTML);
        // menuList.forEach(function(bt){
        //     console.log(bt);
        // });

        $(".navigationMenuButton").on("click",function(){
            console.log($(this));
            console.log($(this).attr("id"));
            if($(this).attr("id")!==""){
                currentTag = $(this).attr("id");
                $(".mainContent").load("portofolio.html", function() {
                    $(".portoFolioContent").html(currentTag);
                });
            }else{
                currentTag = "";
                $(".mainContent").load("home.html", function() {
                    home();
                });
            }
        });

        // }

    // });
    home();
}

function home(){

    var txt = $(".CVresume");
    txt.html(appDatas.resumeContent["content1"]);
    // document.querySelector(".header").innerHTML(appDatas.name);
    // var btIcons = document.body.querySelectorAll(".icon");
    // btIcons.forEach((bt)=> {
        // console.log(bt);
        $(".icon").on("click",function(){
            let me = 0;
            console.log(this);
            for(let i = 1 ; i<=3; i++){
                console.log($(this).hasClass("icon"+i));
                if($(this).hasClass("icon"+i)){
                    me =  i;
                    break;
                }
            }
            console.log(me);
            for(let i = 1 ; i<=3; i++){
                $(".icon"+i).removeClass("icon"+i+"on");
            }

            $(this).addClass("icon"+me+"on");


            // btIcons.forEach((bt)=>bt.classList.remove("icon"+b+"on"));
            // for(let i = 1 ; i<=3; i++){
            //     let b = $(".icon"+i);
            //     b.classList.remove(".icon"+b+"on");
            // }
            
            // // let switched = (bt.classList.contains("icon"+me+"on"))? true : false;
            txt.html(appDatas.resumeContent["content"+me]);
            // this.classList.add(".icon"+b+"on");
            // console.log(txt);
        });

        $(".PortofolioButton").on("click",function(){
            currentTag = "latest";
            $(".mainContent").load("portofolio.html",function(){
                $(".portoFolioContent").html(currentTag);
            });
        });    
}
