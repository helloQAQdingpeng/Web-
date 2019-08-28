$(function () {
    $("#username").focus(function () {
        if ($(this).val()=="请输入用户名"){
            $(this).val("")
        }
    })

    $("#username").blur(function () {
        if ($(this).val()==""){
            $(this).val("请输入用户名")
        }
    })

    $("#username").keyup(function () {
        var x=$(this).val().length;
        if (x<6){
            $("span").attr("class","wrong").text("不能小于6位数")
        }else {
            $("span").attr("class","right").text("输入正确")
        }
    })

    $("#show").click(function () {
        var y=$(this).prop("checked")
        if (y==true){
            $("#password").attr("type","text")
        }else {
            $("#password").attr("type","password")
        }
    })


})