$(document).ready(function(){
//定时器返回值
    var time=null;
    //记录当前位子
    var nexImg = 0;
    //用于获取轮播图图片个数
    var imgLength = $(".c-banner .banner ul li").length;
    //当时动态数据的时候使用,上面那个删除
    // var imgLength =0;
    //设置底部第一个按钮样式
    $(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css({"background-color":"#4d8fff","width":"36px","border-radius": "25px"});

    //页面加载
    $(document).ready(function(){
        // dynamicData();
        //启动定时器,设置时间为3秒一次
        time =setInterval(intervalImg,3000);
    });
    //轮播图
    function intervalImg(){
        if(nexImg<imgLength-1){
            nexImg++;
        }else{
            nexImg=0;
        }
        
        //将当前图片试用绝对定位,下一张图片试用相对定位
        $(".c-banner .banner ul img").eq(nexImg-1).css("position","absolute");
        $(".c-banner .banner ul img").eq(nexImg).css("position","relative");
        
        $(".c-banner .banner ul li").eq(nexImg).css("display","block");
        $(".c-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);
        $(".c-banner .banner ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
            $(".c-banner .banner ul li").eq(nexImg-1).css("display","none");
        });
        $(".c-banner .jumpBtn ul li").css({"background-color":"white","width":"13px","border-radius":"50%"});
        $(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css({"background-color":"#4d8fff","width":"36px","border-radius": "25px"});
    }

    //轮播图底下按钮
    //动态数据加载的试用应放在请求成功后执行该代码,否则按钮无法使用
    $(".c-banner .jumpBtn ul li").each(function(){
        //为每个按钮定义点击事件
        $(this).click(function(){
            clearInterval(time);
            $(".c-banner .jumpBtn ul li").css({"background-color":"white","width":"13px","border-radius":"50%"});
            jumpImg = $(this).attr("jumpImg");
            if(jumpImg!=nexImg){
                var after =$(".c-banner .banner ul li").eq(jumpImg);
                var befor =$(".c-banner .banner ul li").eq(nexImg);
                
                //将当前图片试用绝对定位,下一张图片试用相对定位
                $(".c-banner .banner ul img").eq(nexImg).css("position","absolute");
                $(".c-banner .banner ul img").eq(jumpImg).css("position","relative");
                
                after.css("display","block");
                after.stop().animate({"opacity":1},1000);
                befor.stop().animate({"opacity":0},1000,function(){
                    befor.css("display","none");
                });
                nexImg=jumpImg;
            }
            $(this).css({"background-color":"#4d8fff","width":"36px","border-radius": "25px"});
            time =setInterval(intervalImg,3000);
        });
    });	

	$(".items_content ul li").click(function(){
        $(".items_content ul li").children("span").css("display","none");
        $(this).children("span").css("display","block");
        var index = $(this).index();
        $(".items_content_btm").find("img").eq(index).show().siblings().hide();
    })    

	
	$(window).scroll(function(){
		if(jQuery(this).scrollTop()>1){
			$(".header").addClass("header_scroll");
		}else{
			$(".header").removeClass("header_scroll");
		}
	});

	$(".header .mobileMenuBtn").click(function(){
		$(".header .mobileMenuBtn").toggleClass("active");
		$(".header .header_menu").toggleClass("active");
		$(".header .mobileMenuBtn_shad").toggleClass("active");
	});
	$(".header .mobileMenuBtn_shad").click(function(){
		$(".header .mobileMenuBtn").toggleClass("active");
		$(".header .header_menu").toggleClass("active");
		$(".header .mobileMenuBtn_shad").toggleClass("active");
	});
	var w_width=$(window).width();
	if(w_width<767){$(".technical_support_type .title").click(function(){
		$(".technical_support_type ul").slideToggle();
		$(".technical_support_type .title span").toggleClass("active");
	});
}else{}
if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:150,mobile:true,live:true
});
	wow.init();
};
var win_width=$(window).width();

$(".box span").click(function(){
    $(this).prev('input').click();
})

});