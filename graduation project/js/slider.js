  $(function(){

	 var w=1260;

	  var l=0;

	  var timer=null;

	  var len=$(".scroll ul li").length*2; 

	 $(".scroll ul").append($(".scroll ul").html()).css({'width':len*w, 'left': -len*w/2});

	 

	//自动每6秒切换一次 

    timer=setInterval(init,6000);	

	function init(){

		 $(".scroll .next").trigger('click'); //当页面一加载就触发next按钮的点击事件，用trigger的好处是减少重复代码,如果不用，就要把按钮click事件里代码全部复制过来，因为加载的代码和点击next按钮代码和效果相同，所以就用trigger触发执行click里面代码。

	}

	

	$(".scroll ul li").hover(function(){

		 clearInterval(timer);

		},function(){

			timer=setInterval(init,6000);

	   });

	

	  $(".scroll .prev").click(function(){

		  l=parseInt($(".scroll ul").css("left"))+w;  //这里要转成整数，因为后面带了px单位

			 showCurrent(l); 

		  });

		  $(".scroll .next").click(function(){

		     l=parseInt($(".scroll ul").css("left"))-w;  //这里要转成整数，因为后面带了px单位

			showCurrent(l);

	  });

	   function showCurrent(l){     //把图片的左右切换封装成一个函数

	   if($(".scroll ul").is(':animated')){ //当ul正在执行动画的过程中，阻止执行其它动作。关键之处，不然图片切换显示不完全，到最后图片空白不显示。

	      return;

	   }

		  $(".scroll ul").animate({"left":l},500,function(){

				if(l==0){ 

			   $(".scroll ul").css("left",-len*w/2);   

			   

			 }else if(l==(1-len)*w){ //图片位置到最后一张时（第二份最后一张）时，就把图片定位到第一份最后一张。从而显示的是第一份最后一张。

				 $(".scroll ul").css('left',(1-len/2)*w); 

				}

		    }); 	  

		 }

	  

	  });