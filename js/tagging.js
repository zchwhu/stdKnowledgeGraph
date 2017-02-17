/**
 * Created by Administrator on 2016/12/21 0021.
 */
$(function () {
    var selectText, start, end, target;
    $(document).on("mouseup","#tag-area",function (e) {
        target = e.target;
        selectText = tag.getSelectText();
        start = tag.getStart($(this)[0]);
        end = tag.getEnd($(this)[0]);

        if(tag.getSelectText().length>0){
            tag.fixPosition($(this)[0]);
            tag.showToolBar($("#tag-analog span")[0]);
        }else{
            if(!$(".tag-toolbar").is(":hidden")){
                $(".tag-toolbar").hide();
            }
        }
    }).on("mousedown","#tag-area",function () {
        if(!$(".tag-toolbar").is(":hidden")){
            $(".tag-toolbar").hide();
        }
    });

    // 点击其他位置时关闭工具栏
    $(document.body).click(function (e) {
        if(target!==e.target&&e.target!==$(".tag-toolbar")){
            if(!$(".tag-toolbar").is(":hidden")){
                $(".tag-toolbar").hide();
            }
        }
    })

    // 清除所有标签
    $(document).on("click",".tag-clear",function () {
        if(confirm("您的操作将清楚文本中的所有标签，是否确定？")){
            var noTagText = $("#tag-area").val().replace(/<.*?>/g,"");
            $("#tag-area").val(noTagText);
        }
    })

    //给选中文本添加标签
    $(document).on("click",".tag-fun",function () {
        var tagName = $(this).attr("title"),
            preText = $("#tag-area").val().substring(0,start),
            hinderText = $("#tag-area").val().substring(end);
        var tagText = '<'+tagName+'>'+selectText+'</'+tagName+'>';
        $("#tag-area").val(preText+tagText+hinderText);
        if(!$(".tag-toolbar").is(":hidden")){
            $(".tag-toolbar").hide();
        }
    })

    $(document).on("input","#tag-area",function () {
        $(this).height($(this).height+this.scrollHeight);
    })

    var tag = {
        //获取选中的文本
        getSelectText:function() {
            var txt;
            if(document.selection){
                txt = document.selection.createRange().text;//ie
            }else{
                txt = document.getSelection();
            }
            return txt.toString();
        },
        // 获取选中文本的起始位置
        getStart:function (obj) {
            var start = obj.selectionStart;
            return start;
        },
        //获取选中文本的结束位置
        getEnd:function (obj) {
            var end = obj.selectionEnd;
            return end;
        },
        //添加定位辅助元素
        fixPosition:function (obj) {
            var cursor = this.getStart(obj),
                preText = obj.value.substring(0,cursor)
            if($("#tag-analog").find("span").length>0){
                $("#tag-analog").html('');
            }
            $("#tag-analog").text(preText);
            $("#tag-analog").append($("<span>"+this.getSelectText()+"</span>"))
        },
        // 获取元素左偏移量
        getElementLeft:function (element) {
            var actualLeft = element.offsetLeft,
                current = element.offsetParent;

            while (current!==null){
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            return actualLeft;
        },
        // 获取元素上偏移量
        getElementTop:function (element) {
            var actualTop = element.offsetTop,
                current = element.offsetParent;

            while(current != null){
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            return actualTop;
        },
        //获取元素右边界
        getRightBound:function (element) {
            var rightBound = this.getElementLeft(element)+element.offsetWidth;
            return rightBound;
        },
        //工具栏显示
        showToolBar:function (element) {
            var left = this.getElementLeft(element)+$("#tag-analog span").width()/2-$(".tag-toolbar").width()/2;
            if(left+$(".tag-toolbar").width()/2>this.getRightBound($("#tag-area")[0])){
                left = this.getRightBound($("#tag-area")[0])-$(".tag-toolbar").width()/2
            }else{
                left = this.getElementLeft(element)+$("#tag-analog span").width()/2-$(".tag-toolbar").width()/2;
            }
            $(".tag-toolbar").css({
                "left":left,
                "top":this.getElementTop(element)+25-$("#tag-area").scrollTop()
            }).show();
        }
    }
})
