$(function(){

    var index=1


        $(".spot span").click(function () {
             index = $(this).index()+1
            var z = index*-600+"px"
            $(this).addClass("blue").siblings().removeClass("blue")
            $(".content ul").animate({left: z}, 1000)
        })

        $(".btn .right").click(function () {
            if(!$(".content ul").is(":animated")) {
            index++;
            if (index > 5) {
                $(".content ul").css("left","-600px");
                index = 2;
            }
                if (index<5) {
                    var i=index-1
                }else {
                    var i=0
                }
                var x=-600*index+"px";
            $(".content ul").animate({left: x}, 1000)
            $(".spot span").eq(i).addClass("blue").siblings().removeClass("blue")
            }
        })

        $(".btn .left").click(function () {
            if(!$(".content ul").is(":animated")) {
            index--;
            if (index < 0) {
                $(".content ul").css("left","-2400px");
                index = 3;
            }

                if (index<1) {
                    var i=3
                }else {
                    var i=index-1
                }
            var y=-600*index+"px"
            $(".spot span").eq(i).addClass("blue").siblings().removeClass("blue")
            $(".content ul").animate({left: y}, 1000)
            }
        })





})