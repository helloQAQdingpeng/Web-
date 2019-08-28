$(function () {
    $(".newswp-leftnav ul li").hover(function () {
        $(this).addClass("blue").siblings().removeClass("blue")
    })
    $(".content_nav ul li").click(function () {
        index = $(this).index();
        $(this).addClass("hot").siblings().removeClass("hot");
        if (index == 0){
            $(".new_page1").css("display","block");
            $(".new_page2").css("display","none")
        }else {
            $(".new_page1").css("display","none");
            $(".new_page2").css("display","block")
        }
    })





})