$(function() {
    // 轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false //用户操作后不会停止自动播放
    });

    //侧边栏
    var flag = 1;
    $("#showSide").click(function() {
        if (flag == 1) {
            $("#showSide").attr("src", "images/ico_btn2.png");
            $(".content").animate({ "right": "2.55rem" }, 500);
            $(".aside").animate({ "right": "0" }, 500);
            flag = 2;
        } else if (flag == 2) {
            $("#showSide").attr("src", "images/ico_btn2_hov.png");
            $(".content").animate({ "right": "0" }, 500);
            $(".aside").animate({ "right": "-2.55rem" }, 500);
            flag = 1;
        }
    });

    //文字滚动
    function autoPlay() {
        $(".infoList li:first").animate({ "marginTop": "-0.35rem" }, 1500, function() {
            $(this).css("marginTop", 0).appendTo($(".infoList"));
        });
    }
    var timer = setInterval(autoPlay, 1500);

    $(".infoList li").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(autoPlay, 1500);
    });

    //热门院校切换
    $(".trend_content_wrap .trend_content:gt(0)").hide();
    $(".trend_content_wrap .trend_content .trend_content_02").hide();
    $(".trend .trend_play .trend_title ul").find("li").each(function(index) {
        $(this).hover(function() {
            $(".trend .trend_play .trend_title ul").find("li").removeClass("on").eq(index).addClass("on");
            $(".trend_content_wrap .trend_content").hide().eq(index).show();
            $(".trend_content_wrap .trend_content .trend_content_02").hide();
        });
    });

    var num = 1;
    $("#loadMore").click(function() {
        if (num == 1) {
            $(".trend_content_wrap .trend_content_02").slideDown();
            $("#loadMore").html("点击收起");
            num = 2;
        } else if (num == 2) {
            $(".trend_content_wrap .trend_content_02").slideUp();
            $("#loadMore").html("点击加载更多");
            num = 1;
        }
    });

    //优选留学方案下拉
    $(".optimize .optimize_item").hide();
    var times = 1;
    $(".optimize_title").click(function() {
        if (times == 1) {
            $(".optimize .optimize_item").slideDown();
            $("#sel").attr("src", "images/xiala_icon1.png");
            times = 2;
        } else if (times == 2) {
            $(".optimize .optimize_item").slideUp();
            $("#sel").attr("src", "images/xiala_icon2.png");
            times = 1;
        }
    });

    // 指纹动画按钮
    var mark = 1;
    $(".fingerPrint").click(function() {
        if (mark == 1) {
            $("#fingerPrint_icon1").animate({ "left": "1rem" }, 500);
            $("#fingerPrint_icon2").animate({ "left": "2rem" }, 500);
            $("#fingerPrint_icon3").animate({ "left": "3rem" }, 500);
            $("#fingerPrint_icon4").animate({ "left": "4rem" }, 500);
            $("#fingerPrint_icon5").animate({ "left": "5rem" }, 500);
            $(".fingerPrint").attr("src", "images/ico_btn23.png");
            mark = 2;
        } else if (mark == 2) {
            $("#fingerPrint_icon1").animate({ "left": "0.06rem" }, 500);
            $("#fingerPrint_icon2").animate({ "left": "0.06rem" }, 500);
            $("#fingerPrint_icon3").animate({ "left": "0.06rem" }, 500);
            $("#fingerPrint_icon4").animate({ "left": "0.06rem" }, 500);
            $("#fingerPrint_icon5").animate({ "left": "0.06rem" }, 500);
            $(".fingerPrint").attr("src", "images/ico_btn22.png");
            mark = 1;
        }
    });
    $("#fingerPrint_icon5").click(function() {
        $("body,html").animate({ "scrollTop": 0 }, 500);
        return false;
    });

    //弹出层
    $(".al_bg").hide();
    $(".Pop_up .al_window").hide();
    $("#alBtn").click(function() {
        $(this).animate({ "right": "-0.76rem" }, 500);
        $(".al_bg").show();
        $(".al_window").show();
    });
    $(".al_bg").click(function() {
        $("#alBtn").animate({ "right": "0rem" }, 500);
        $(".al_bg").hide();
        $(".al_window").hide();
    });
    $("#dBtn").click(function() {
        $("#alBtn").animate({ "right": "0rem" }, 500);
        $(".al_bg").hide();
        $(".al_window").hide();
    });

    function show() {
        $(".al_bg").show();
        $(".al_window").show();
        $("#alBtn").animate({ "right": "-0.76rem" }, 500);
    }
    // setInterval(show, 5000);

});
