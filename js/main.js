$.getJSON("../bin/datas/datas_FR.json", function(json) {
    appDatas = json;// this will show the info it in firebug console
    start();
});


function start(){

    // document.querySelector(".header").innerHTML(appDatas.name);
    console.log(appDatas.name);
}