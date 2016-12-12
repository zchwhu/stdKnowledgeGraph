/**
 * Created by Administrator on 2016/11/8.
 */
$(function(){
    //��ʾ�߼���������
    $(".advanced-search-mode-btn").click(function(){
        $(".advanced-search").fadeIn(1000);
    })

    $(document).on("click",".search-plus-btn",function(){
        addSearchArea($(".advanced-search-footer"));

        function addSearchArea($obj){
            var $field = {
                    "����":1,
                    "ʱ��":2,
                    "��ҵ":3,
                    "��Դ":4
                },
                $logic = {
                    "����":1,
                    "��":2,
                    "����":3
                };
            var $searchArea = $(" <div class='advanced-search-area fadeIn'> </div> "),
                $fieldSelect = $(" <select class='form-control'> </select> "),
                $logicSelect = $(" <select class='form-control'> </select> "),
                $input = $("<div class='form-group'><input class='form-control' type='text'></div>");

            for(prop in $field){
                $fieldSelect.append("<option value='"+$field[prop]+"'>"+prop+"</option>");
            }
            for(prop in $logic){
                $logicSelect.append("<option value='"+$logic[prop]+"'>"+prop+"</option>");
            }
            $searchArea.append($logicSelect);
            $searchArea.append($fieldSelect);
            $searchArea.append(" <div class='form-group'> <input class='form-control' type='text'></div> ");
            $searchArea.append($logicSelect.clone());
            $searchArea.append(" <div class='form-group'> <input class='form-control' type='text'></div> ");
            $searchArea.insertBefore($obj);
        }
    }).on("click",".search-minus-btn",function(){
            if($(".advanced-search-area").length>1){
                $(".advanced-search-footer").prev().hide(800,function(){
                    $(this).remove();
                })
            }
    }).on("click",".advanced-search-close",function(){
        //�رո߼���������
        $(".advanced-search").fadeOut();
    })

    $(".search-input input").focus(function(){
        if(!$(".advanced-search").is(":hidden")){
            $(".advanced-search").fadeOut();
        }
    })
})