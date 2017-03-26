;(function() {

	var header_search_text = $('.header-search-text')
	   ,header_search_list = $('.header-search-list')
	   ,header_search_input = $('.header-search').find('input')
	   ,show_ctrl = $('.show-ctrl').find('li')
	   ,show_pics = $('.show-picture').find('img')
	   ,index = 0
	   ,next_but = $('.fr-span')
	   ,prep_but = $('.fl-span')
	   ,si
	   ,show_list_items = $('.show-list-items').find('li')
	   ,show_list_div = $('.show-list-div > li')
	   ,show_list = $('.show-list')
	   ;
	   // console.log(show_list_div);
// 头部事件
	   header_search_input.on('focus',function() {
	   	header_search_text.hide();
	   	header_search_list.show();
	   })
	   header_search_input.on('blur',function() {
	   	header_search_text.show();
	   	header_search_list.hide();
	   })


// 轮播事件
	// 小圆点点击事件
		show_ctrl.on('click',function() {
			var _this = $(this);
			var index = _this.index();
			ctrl_addClass(index);
			change_image(index);
			clearInterval(si);
		})
	//小圆点添加addclass函数
		function ctrl_addClass(index) {
			$(show_ctrl[index]).addClass('show-ctrl-active').siblings().removeClass('show-ctrl-active');
		}
	//更改图片函数
		function change_image(index) {
			// if(index===undefined) return;
			// console.log(show_pics[index])
			$(show_pics[index]).css({opacity:'1'}).siblings().css({opacity:'0'})
		}
		change_image(index);


	//button点击事件
	  //下一张
		next_but.on('click',function() {
			   if (index < 4){
			   	index++;
			   } 
			    else {
			    	index = 0;
			    }
			    change_image(index);
			    ctrl_addClass(index);
			    clearInterval(si);
			
		})

		//上一张
		prep_but.on('click',function() {
			   if (index > 0){
			   	index--;
			   } 
			    else {
			    	index = 4;
			    }
			    change_image(index);
			    ctrl_addClass(index);
			    clearInterval(si);
			
		})

		//自动轮播
		function running_by_myself() {
			if (index < 4){
			   	index++;
			   } 
			    else {
			    	index = 0;
			    }
			    change_image(index);
			    ctrl_addClass(index);
		}

		
		// 自动轮播函数
		function si_running(){
			si = setInterval(function(){
				running_by_myself()
			},4000)
		}
		si_running();

		//停止轮播函数
		show_pics.on('mouseover',function() {
			clearInterval(si);
		})
		//继续轮播函数
		show_pics.on('mouseout',function() {
			si_running();
		})


	//show展出栏
	show_list_items.mousemove(function() {
		var index = $(this).index();
		show_list_div_con(index)
	})
	function show_list_div_con(index) {
		$(show_list_div[index]).show().siblings().hide();
	}

	show_list.on('mouseleave',function() {
		show_list_div.hide();
	})
})();