/**
 * Created by Administrator on 2016/11/8.
 */
$(function(){
    $(".login-form").submit(function(){
        var $errorNum = 0,
            $username = $("input[name='username']"),
            $password = $("input[name='password']");
        if($username.val().length==0){
            addErrorInfo($username,"�������û���");
            $errorNum++;
        }
        if($password.val().length==0){
            addErrorInfo($password,"����������");
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
            addErrorInfo($username,"�������û���");
            $errorNum++;
        }
        if($password.val().length==0){
            addErrorInfo($password,"����������");
            $errorNum++;
        }
        if($repeatpassword.val().length==0){
            addErrorInfo($repeatpassword,"��ȷ������");
            $errorNum++;
        }
        if($password.val().length>0&&$repeatpassword.val().length>0&&$password.val()!=$repeatpassword.val()){
            addErrorInfo($repeatpassword,"�������벻һ�£�������ȷ��");
            $errorNum++;
        }
        if($errorNum>0){
            return false;
        }
    })

    $("form :input").focus(function(){
        removeErrorInfo($(this));
    })

    //���ӱ�����У����Ϣ
    function addErrorInfo($obj,$text){
        var $parent=$obj.parents(".form-group");
        if($parent.find(".glyphicon-remove").length==0){
            $parent.addClass("has-error");
            $parent.append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
            $parent.find(".help-block").text($text);
        }
    }

    //ɾ��������У����Ϣ
    function removeErrorInfo($obj){
        var $parent=$obj.parents(".form-group");
        if($parent.find(".glyphicon-remove").length>0){
            $parent.removeClass("has-error").find(".glyphicon-remove").remove();
            $parent.find(".help-block").text("");
        }
    }
})