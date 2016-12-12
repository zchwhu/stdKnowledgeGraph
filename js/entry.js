/**
 * Created by Administrator on 2016/11/8.
 */
$(function(){
    $(".login-form").submit(function(){
        var $errorNum = 0,
            $username = $("input[name='username']"),
            $password = $("input[name='password']");
        if($username.val().length==0){
            addErrorInfo($username,"请输入用户名");
            $errorNum++;
        }
        if($password.val().length==0){
            addErrorInfo($password,"请输入密码");
            $errorNum++;
        }
        if($errorNum>0){
            return false;
        }
    })

    $(".regist-form").submit(function(){
        var $errorNum = 0,
            $username = $("input[name='username']"),
            $password = $("input[name='password']"),
            $repeatpassword = $("input[name='repeatpassword']");
        if($username.val().length==0){
            addErrorInfo($username,"请输入用户名");
            $errorNum++;
        }
        if($password.val().length==0){
            addErrorInfo($password,"请输入密码");
            $errorNum++;
        }
        if($repeatpassword.val().length==0){
            addErrorInfo($repeatpassword,"请确认密码");
            $errorNum++;
        }
        if($password.val().length>0&&$repeatpassword.val().length>0&&$password.val()!=$repeatpassword.val()){
            addErrorInfo($repeatpassword,"密码输入不一致，请重新确认");
            $errorNum++;
        }
        if($errorNum>0){
            return false;
        }
    })

    $("form :input").focus(function(){
        removeErrorInfo($(this));
    })

    //增加表单错误校验信息
    function addErrorInfo($obj,$text){
        var $parent=$obj.parents(".form-group");
        if($parent.find(".glyphicon-remove").length==0){
            $parent.addClass("has-error");
            $parent.append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
            $parent.find(".help-block").text($text);
        }
    }

    //删除表单错误校验信息
    function removeErrorInfo($obj){
        var $parent=$obj.parents(".form-group");
        if($parent.find(".glyphicon-remove").length>0){
            $parent.removeClass("has-error").find(".glyphicon-remove").remove();
            $parent.find(".help-block").text("");
        }
    }
})