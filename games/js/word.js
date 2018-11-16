var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("哈哈哈哈哈哈", "是不是觉得很有趣(づ◡ど)","不是( ´◔‸◔`)？", "好吧","其实我也觉得","也就一般般","不过有一种小学时候","玩4399小游戏的感觉","(ˉ▽￣～)");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#8A2BE2"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});