$(function () {
    $(".purchase ul .color dl dt").click(function () {
        var x = $(this).index()
        var y = -310*x + "px"
        var w = -216*x + "px"
        $(this).addClass("green").siblings().removeClass("green")
        $(".zoomPad ul").css({left:y})
        $(".Various ul").css({left:w})
        if (x==0){
            $(".purchase ul .color strong").text("蓝色")
        }
        if (x==1){
            $(".purchase ul .color strong").text("黄白")
        }
        if (x==2){
            $(".purchase ul .color strong").text("粉绿")
        }
    })
    $(".purchase ul .size dl dt").click(function () {
        var text = $(this).text()
        $(".purchase ul .size strong").text(text)
        $(this).addClass("Selection").siblings().removeClass("Selection")
    })

    $(".purchase ul .form select").change(function () {
        var option = $(this).val();
        var t = option*200
        $(".purchase ul .Total strong").text(t)
})
    
    $(".Various ul li").click(function () {
        var h = $(this).html()
        $(".zoomPad ul li").html(h)
    })
    $(".introduce ul li").click(function () {
        var l = $(this).index()
        $(".introduce .words div").eq(l).addClass("show").siblings().removeClass("show")
    })

    $(".purchase .Shopping").click(function () {
        var size = $(".purchase .size strong").text()
        var color = $(".purchase .color strong").text()
        var Number = $(".purchase .form select").val()
        var total = $(".purchase .Total strong").text()

        var data = "您购买的产品是:免烫高支棉条纹衬衣;尺寸是："
                + size + "；颜色是" + color + "；数量是" + Number
                + "；总价是" + total + "元。"

        $(".modal").css("display","block")
        $(".Tips").css("display","block")
        $(".box-main-content-right #zz").text(data)
    })
    $(".box-button").click(function () {
        $(".modal").css("display","none")
        $(".Tips").css("display","none")
    })
    $(".box-title span").click(function () {
        $(".modal").css("display","none")
        $(".Tips").css("display","none")
    })
    $(".box-title span").hover(function () {
        $(this).addClass("btn")
    },function () {
        $(this).removeClass("btn")
    });


    $(".content ul li").click(function () {
        $(this).attr("class","selected").siblings().removeClass();
        var x=$(this).attr("id");
        var y="assets/css/" + x + ".css";
        $("#tt").attr("href",y)
    });

    $(".score .rating  dt").click(function () {

        var dt = $(this).attr("class");
        var index = $(this).index();
        var s = index+1;
        var b = "您给此商品的评分是：" + s + "分";
        alert(b);


        var p = "rating " + dt + "star" + " clear";
        $(".score dl").attr("class",p)



    })
})