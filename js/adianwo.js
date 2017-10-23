// ----------------------------------轮播图----------------------------
(function () {
  

    window.onload = function() {
        var h = document.querySelectorAll(".slider-li img")[0].height
        document.querySelector(".slider").style.height = h + "px"
    }
    $(function () {

        var index = 0;
        var timer = null;
        function setTimer() {
            $(".slider").children(".slider-ul1").children().eq(index).css({
                "width": "50px"
            }).siblings().css({
                "width": "25px"
            })
            $(".slider").children(".slider-ul").children().eq(index).fadeIn().siblings().fadeOut();
            index++
            if (index >= $(".slider").children(".slider-ul").children().length) {
                index = 0
            }
        }
        timer = setInterval(setTimer, 3000)
        $(".slider-ul1").on("click", ".slider-li1", function () {
            clearInterval(timer)
            var _this = $(this);
            index = $(this).index()
            _this.css({
                "width": "50px"
            }).siblings().css({
                "width": "25px"
            })
            $(".slider").children(".slider-ul").children().eq(index).fadeIn().siblings().fadeOut();
        })
      
        $(".slider-li1").on("mouseover", function () {
            clearInterval(timer)
        })
        $(".slider-li1").on("mouseout", function () {
            clearInterval(timer)
            timer = setInterval(setTimer, 3000)
        })
    

        // 动态获取轮播图img的宽度赋值给他的父元素
        $(window).on('resize',function() {
            if ( $(".slider").width() <= 1060) {
                $(".slider").height(387);
            }
            var H = $(".slider-li img").height()
            console.log(H)
            $(".slider").height(H);
        })



var flag = true;

        //  屏幕滚动事件    
        $(window).scroll(function () {

            if ($(window).scrollTop() >= 100) {
                $(".go-up").css({
                    "opacity": "1"
                })
            }else{
                $(".go-up").css({
                    "opacity": "0"
                })
            }

            // 01 大数据盒子动画
            if ($(window).scrollTop() >= $(".thirdBox-bigDate").offset().top / 2) {
                $(".LI").css({
                    "opacity": "1",
                    "transform": "translateX(0px)"
                })
            };

            // 02   数据管理平台动画
            if ($(window).scrollTop() >= $(".Data-management-flatform").offset().top) {
                $(".c1").css({
                    "opacity": "1",
                })
            }
            // 04 媒体联盟平台动画
            if ( $(window).scrollTop() >= $(".fifth-mediaPlatform").offset().top ) {
               
                $(".P").css({
                    "animation":"rotate 3s"
                })
            }
            
           
            // 05 微信垂直推广动画
            if ($(window).scrollTop() >= $(".wechat-vertical-promotion").offset().top) {
                $(".wechat-vertical-promotion-left-h2,.wechat-vertical-promotion-left-h3,.wechat-vertical-promotion-left-li").css({
                    "transform": "translateX(0px)"
                })
            }


            
        //  文字书写
    //   if ( flag) {
    //       if ( $(window).scrollTop() >= $(".fatherContent").offset().top) {
    //         flag = false;
    //         var kk = 0;
    //         var t = null;
    //         var data = "ADX服务于主和DSP流量采买的程序化交易平台,基于海量媒体资源吗,提供实时竞价(RTB),程序化直投(PDB),私有交易市场(PMP)等多种交易方式。";
    //          t = setInterval(function() {
    //             kk++;
    //             if (kk == data.length) {
    //                 clearInterval(t)
    //             }
    //             var data2 = data.substring(kk-1,kk)
    //             $(".Content").append(data2)

    //         },80)
    //      }
    //   }
        });

        // Content

        // 返回顶部
        $(".go-up").on("click", function () {
            var _this = $(this)
            $('body,html').stop().animate({
                scrollTop: 0
            }, 300, "linear", function () {
                _this.css({
                    "opacity": 0,
                })
            })
            return false;
        })
        $(".go-up").on("mouseenter",function() {
            $(".lastImg").attr("src",'./images/footer/go-up2.png')
        })
        $(".go-up").on("mouseleave",function() {
            $(".lastImg").attr("src",'./images/footer/go-up.png')
        })




    })
})();
