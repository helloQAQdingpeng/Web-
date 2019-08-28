var nav = document.getElementsByClassName("nav")[0];
var navs = nav.children;
var jnImageroll = document.getElementById("jnImageroll");
var cho = jnImageroll.children[1].children;
var show = jnImageroll.children[0].children;
var jnBrandList = document.querySelector("#jnBrandList");
var jnBrandTab = document.querySelectorAll("#jnBrandTab ul li ");
var index = 0;
var timer;
var num = 0;
var running = false;


for (var i = 1; i < navs.length - 1; i++) {
    navs[i].onmouseover = function () {
        this.children[1].style.display = "block"
    };
    navs[i].onmouseout = function () {
        this.children[1].style.display = "none"
    };
}


var play = function () {
    for (var i = 0; i < cho.length; i++) {
            cho[i].className = "";
            show[i].style.display = "none"
        }
        cho[index].className = "chos";
        show[index].style.display = "block";
    };

    function run() {
        index++;
        if (index == 5) index = 0;
        play();
    }

    var id = setInterval(run, 1000);


var palytwo =  function () {
    running = true;
    var target = -790* num;
    timer = setInterval(function () {
        var step = (target - jnBrandList.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //步长取整
        jnBrandList.style.left = jnBrandList.offsetLeft + step + "px";
        if(jnBrandList.offsetLeft == target){
            running = false;
            clearInterval(timer);
        }
    },20);

        for (var i = 0;i<jnBrandTab.length;i++){
            jnBrandTab[i].className = "";
    }
              jnBrandTab[this.num].className = "chos";
};


for (var i = 0; i <jnBrandTab.length; i++) {
    jnBrandTab[i].num = i;
    jnBrandTab[i].onclick = function () {

        if(running)return;
        num = this.num;
        palytwo()
    }
}

