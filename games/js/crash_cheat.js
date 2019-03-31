<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://ziyuan.lruihao.cn/images/go.png");
         document.title = '小栈崩溃了╭(°A°`)╮';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://ziyuan.lruihao.cn/images/back.png");
         document.title = '又好了(ฅ>ω<*ฅ)';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
             $('[rel="icon"]').attr('href', "https://ziyuan.lruihao.cn/images/heart.png");
         }, 2000);
     }
 });