/*
* @Author: Administrator
* @Date:   2017-10-28 10:01:09
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-30 17:09:37
*/
$(function(){
	var section2=$(".section-2").data('flag',false);
	var section3=$(".section-3").data('flag',false);
	var section4=$(".section-4").data('flag',false);
    var section5=$(".section-5").data('flag',false);
    var section6=$(".section-6").data('flag',false);
    var section7=$(".section-7").data('flag',false);
	var section8=$(".section-8").data('flag',false);

    $('.next').on('click',function(){
        $.fn.fullpage.moveSectionDown();
        $(this).fadeOut();
    })
    $('#fullpage').fullpage({
    	controlArrowColor:'#000',
    	verticalCentered: false,
        navigation:true,
    	afterLoad:function(anchorLink, index){
    		if(index==2 && !section2.data('flag')){
                section2.data('flag',true);
    			section2.find('.search').animate({
    				marginLeft:-100,
    			},800,'linear',function(){
    				//隐藏
    				$(this).hide();
    				//移动
    				section2.find('.leave').show().animate({
    					width:148,
    					height:30,
    					marginLeft:100,
    					bottom:449
    				},800,'linear');
    				//文字显示
    				section2.find('.words-2').animate({
    					opacity:1
    				},800);
    				//商品显示
    				section2.find('.goods').animate({
    					height:218
    				},800,'linear',function(){
                        $('.next').fadeIn();
                    });
    			})
    		}
    	},
    	onLeave:function(index,nextIndex,direction){
    		if(nextIndex==3 && direction=='down' && !section3.data('flag')){
                section3.data('flag',true);
    			section2.find('.shirt').show().animate({
    				bottom:-$(window).height()+200,
    				width:207,
    				marginLeft:-247
    			},1000);	
    			section3.find('.color2').delay(700).animate({
    				opacity:1
    			});
    			section3.find('.btn2').delay(700).animate({
    				opacity:1
    			},function(){
                  $('.next').fadeIn();
                });
    			//遮罩层显示
    			section2.find('.cover').show();
    		}

    		// 第四屏动画
    		if(nextIndex==4 && direction=='down' && !section4.data('flag')){
                section4.data('flag',true);
                section2.find('.shirt').hide();

    			section3.find('.italic').show().animate({
    				bottom:-$(window).height()+260,
    				marginLeft:-45
    			},1000,function(){
    				$(this).hide();
    				//图片隐藏
    				section4.find('.italic').show();
    				//小车移动
	    			section4.find('.cart').animate({
	    				left:'200%'
	    			},1000,'easeInBack',function(){
	    				//文字改变
		    			section4.find('.word2').animate({
		    				opacity:1
		    			});
		    			//电脑显示
		    			section4.find('.card').fadeIn(600,function(){
		    				section4.find('.card-word').show();
                            $('.next').fadeIn();
		    			});

	    			})	
    			});
    			
    		}
    		// 第五屏动画
    		if(nextIndex==5 && direction=='down' && !section5.data('flag')){
                section5.data('flag',true);
    			section5.find('.italic').show().animate({
    				 marginTop:36
    			},1000,function(){
    				section5.find('.order').animate({
    					marginTop:-185
    				},1000,function(){
    					section5.find('.hand').animate({
    						bottom:0
    					},1000,function(){
    						section5.find('.mouseb').animate({
    							opacity:1
    						},function(){
                                $('.next').fadeIn();
                            });
    					});
    				})
    			});
    		}
            //第六屏
            if(nextIndex==6 && direction=='down' && !section6.data('flag')){
                //动画：沙发充第五屏掉落，盒子接住沙发
                //盒子掉落到车内
                //地址出现
                //背景移动
                //人先后出现  标语出现
                section6.data('flag',true);
                section5.find('.italic').animate({
                    top:$(window).height(),
                    width:100,
                    marginLeft:-230
                },1000,function(){
                    $(this).hide();
                    section6.find('.box').animate({
                        bottom:30
                    },1000,function(){
                        $(this).hide();
                        //地址飞出
                        section6.find('.adress').show();
                        //文字飞出
                        section6.find('.word').animate({
                            opacity:1,
                            marginLeft:-200
                        },1000)
                        //背景移动
                        section6.animate({
                            backgroundPositionX:'100%'
                        },1000,function(){
                            //男人出现
                            section6.find('.man').animate({
                               height:305,
                               bottom:116
                            },1000,function(){
                                $(this).animate({
                                    marginLeft:-50
                                },1000,function(){
                                    section6.find('.woman').fadeIn(1000,function(){
                                        section6.find('.please').show();
                                        $('.next').fadeIn();
                                    })
                                })
                            });
                        })
                    })
                })
                //盒子飞出
                section6.find('.box').show().animate({
                    marginLeft:-230
                },1000)
            }
            //第七屏
            if(nextIndex==7 && direction=='down' && !section7.data('flag')){
               section7.data('flag',true);
                section7.find('.star').animate({
                    width:93
                },1000)
                section7.find('.good').animate({
                    opacity:1,
                    marginLeft:-280
                },1000,function(){
                    $('.next').fadeIn();
                })
            }
            //第八屏
            if(nextIndex==8 && direction=='down' && !section8.data('flag')){
                section8.data('flag',true);
                //手随鼠标
                section8.on('mousemove',function(event){
                    //鼠标位置
                    var iTop=event.pageY+25;
                    var iLeft=event.pageX-85;
                    if(iTop<$(window).height()-$(this).find('.hand').height()){
                        iTop=$(window).height()-$(this).find('.hand').height()
                    }
                    $(this).find('.hand').css({
                        left:iLeft,
                        top:iTop
                    })
                })
                //点击再来一次
                section8.find('.again').on('click',function(){
                    $.fn.fullpage.moveTo(1);
                    //清除动画
                    $('*').not('#fullpage,.section,body,html').attr('style','');
                    //单独设置section6
                    section6.css('backgroundPositionX','');
                    $('.section').each(function(){
                        $(this).data('flag',false);
                    })
                })
            }
    	}
    });

});