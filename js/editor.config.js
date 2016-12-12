/**
 * Created by Administrator on 2016/9/24.
 */
var editor = new wangEditor('editArea');

editor.config.menus = [
    'source',
    'bold',
    'underline',
    'italic',
    'strikethrough',
    'eraser',
    'forecolor',
    'bgcolor',
    'quote',
    'fontfamily',
    'fontsize',
    'head',
    'unorderlist',
    'orderlist',
    'alignleft',
    'aligncenter',
    'alignright',
    'link',
    'unlink',
    'table',
    'img',
    'undo',
    'redo',
    'fullscreen'
];

editor.create();