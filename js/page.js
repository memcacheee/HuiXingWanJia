$(document).ready(function(){

    /*服务项目*/
	$(".items_content ul li").click(function(){
        $(".items_content ul li").children("span").css("display","none");
        $(this).children("span").css("display","block");
        var index = $(this).index();
        $(".items_content_btm").find("img").eq(index).show().siblings().hide();
    })    

	/*头部一直在顶部*/
	$(window).scroll(function(){
		if(jQuery(this).scrollTop()>1){
			$(".header").addClass("header_scroll");
		}else{
			$(".header").removeClass("header_scroll");
		}
	});

    /*头部菜单*/
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

    // 多选框
    $(".box span").click(function(){
        $(this).prev('input').click();
    })

});