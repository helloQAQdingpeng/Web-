$(function () {
    $(".banner").hover(function () {
        $(".btn").show()
    },function () {
        $(".btn").hide()
    })
    
    $(".number ul li").click(function () {
        $(this).addClass("red").siblings().removeClass()
        index=$(this).index()
        $(".logo ul li").eq(index).show().siblings().hide()
    })
    var index=0
    $(".right").click(function () {
        index++;
        if (index>5){
            index=0
    }
        $(".number ul li").eq(index).addClass("red").siblings().removeClass("red")
        $(".logo ul li").eq(index).show().siblings().hide()
    })

    $(".left").click(function () {
        index--;
        if (index<0) {
            index=5
        }
        $(".number ul li").eq(index).addClass("red").siblings().removeClass("red")
        $(".logo ul li").eq(index).show().siblings().hide()
    })

    var run=function(){
        index++;
        if (index>5){
            index=0
        }
        $(".number ul li").eq(index).addClass("red").siblings().removeClass("red")
        $(".logo ul li").eq(index).show().siblings().hide()
    }


   var id=setInterval(run,2000)

    $(".banner").hover(function () {
        clearInterval(id)
    },function () {
        id=setInterval(run,2000)
    })




})