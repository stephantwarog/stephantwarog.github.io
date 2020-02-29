// var datas = require('../../_data/datas.json');
//var datas = JSON.parse(datasFR);

// var appDatas;
var menuOpened = false;
$(".navigationMenuContainer").hide();

// $.getJSON("./_data/datas.json", function(json) {
//     appDatas = json;// this will show the info it in firebug console
//     console.log(appDatas);
//     start();
// });

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

    //     var menuList = appDatas.interface.menu;
    //     var menuTag = appDatas.interface.menuLinks;
    //     console.log(typeof  menuList);
    //     var menuHTML = "";

    //     for (bt in menuList) {
    //         console.log(bt);
    //         menuHTML += "<div class=\"navigationMenuButton\" id=\""+menuTag[bt]+"\">"+menuList[bt]+"</div>";            
    //     }



    //     console.log(menuHTML);
    //     $(".navigationMenu").html(menuHTML);
    //     // menuList.forEach(function(bt){
    //     //     console.log(bt);
    //     // });

        $(".navigationMenuButton").on("click",function(){
            console.log($(this));
            console.log("id : " + $(this).attr("id"));
            console.log("url : " + $(this).attr("url"));
            // if($(this).attr("id")!==""){
            //     currentTag = $(this).attr("id");
            //     $(".mainContent").load("portofolio.html", function() {
            //         $(".portoFolioContent").html(currentTag);
            //     });
            // }else{
            //     currentTag = "";
            //     $(".mainContent").load("home.html", function() {
            //         home();
            //     });
            // }
        });

    //     // }

    // // });
    home();
}

function home(){

    var txt = $(".CVresume");
    // txt.html(appDatas.i8n[lang].content1);

    // var btIcons = document.body.querySelectorAll(".icon");
    // btIcons.forEach((bt)=> {
        // console.log(bt);
        $(".icon").on("click",function(){
            let me = 0;
            for(let i = 1 ; i<=3; i++){
                // console.log($(this).hasClass("icon"+i));
                if($(this).hasClass("icon"+i)){
                    me =  i;
                    break;
                }
            }
            for(let i = 1 ; i<=3; i++){
                $(".icon"+i).removeClass("icon"+i+"on");
            }
            $(".CVresume").addClass("displayNone");
            $(".CVresume").insertAfter($(".PortofolioButton"));

            $(this).addClass("icon"+me+"on");

            console.log(me);
            let bloc = $(".resume"+me);
            console.log("bloc = " + bloc);

            bloc.removeClass("displayNone");
            bloc.insertBefore($(".PortofolioButton"));
        });

        $(".PortofolioButton").on("click",function(){
            currentTag = "latest";
            $(".mainContent").load("portofolio.html",function(){
                $(".portoFolioContent").html(currentTag);
            });
        });    
}


start();