$(function () {

    $(".topnav ul li").hover(function () {
        $(this).children("dl").show();
    },function () {
        $(this).children("dl").hide();
    })


    $(".bth ul li").click(function () {
        $(this).addClass("red").siblings().removeClass("red");
        var index=$(this).index();
        $(".img ul li").eq(index).show().siblings().hide();
        $(".note ul li").eq(index).show().siblings().hide();
    })

    $(".sidebar ul li").click(function () {

        $(this).children("dl").slideToggle();
        $(this).siblings().children("dl").slideUp();
        return(false)
    })

})
