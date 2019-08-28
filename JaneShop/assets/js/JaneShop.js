$(function () {

    $(".content div input").blur(function () {
       $(this).val("请输入商品名称")
    })
    $(".content div input").focus(function () {
        $(this).val("")
    })

    $(".content ul li").click(function () {
        $(this).attr("class","selected").siblings().removeClass()
        var x=$(this).attr("id")
        var y="assets/css/" + x + ".css"
        $("#tt").attr("href",y)
    })

    $(".nav ul li").hover(function () {
        $(this).children("div").show()
    },function () {
        $(this).children("div").hide()
    })

    $(".option .title a").mouseenter(function () {
        $(this).addClass("last").siblings().removeClass("last")
        var index =$(this).index()
        $(".option ul li").eq(index).show().siblings().hide()
    })

    var index=0
    var run=function () {
            index++;
            if (index>4){
                index=0
            }
            $(".option .title a").eq(index).addClass("last").siblings().removeClass("last")
            $(".option ul li").eq(index).show().siblings().hide()
    }

    var id=setInterval(run,2000)


    $(".option").hover(function () {
        clearInterval(id)
    },function () {
        id=setInterval(run,2000)
    })

    $(".main-bottom .logo ul li .img").hover(function () {
        $(this).next().next().addClass("imageOver")
    },function () {
        $(this).next().next().removeClass("imageOver")
    })

    $(".main-bottom .title ul li").click(function () {
            var x=$(this).index()
            var y=x*-780 + "px"
            $(".main-bottom .logo ul").animate({left:y},1000)
            $(this).addClass("one").siblings().removeClass("one")



    })




})