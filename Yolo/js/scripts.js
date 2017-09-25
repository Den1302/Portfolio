$(function(){
	$('.block_sort select').selectbox()

  	//Табы
	$(".block_form").each(function(){
	    var activeTabFirst = $(this).find(".tab_content:first").show()
		$(activeTabFirst).find('.country > select').styler({
			selectSearch: true,
			selectSearchLimit: 4,
			selectSearchPlaceholder: '',
		})
	})
	$(".buy_proxies .li").click(function() {
	    var parentBox = $(this).parents('.block_form')
	    
	    $(parentBox).find(".buy_proxies .li").removeClass("active")
	    $(this).addClass("active")
	    $(parentBox).find(".tab_content").hide()
	    
	    var activeTab = $(this).find("a").attr("href")
	    $(activeTab).fadeIn()
	    $(activeTab).find('.country > select').styler({
			selectSearch: true,
			selectSearchLimit: 4,
			selectSearchPlaceholder: '',
		})
	    return false
	})

	//адаптивное меню
	$('.menu_link').toggle(function(){
		$(this).toggleClass('active').next().fadeIn();
	}, function(){
		$(this).toggleClass('active').next().fadeOut();
	});

	//Плавный скролинг к якорю
	$('a.scroll').click(function(){
	    var selected = $(this).attr('href');	
	    $.scrollTo(selected, 1000, { offset: 0 });		
	    return false;
	});

	// Всплывающие окна
	$('.modal_link').fancybox({
		fitToView: false,
		autoResize: false,
		autoSize: true,
		padding: 0,
		margin: 0,
		maxWidth: '100%'
	})
	$('.modal_pas').click(function(e){
	  	e.preventDefault()
	  	$.fancybox.close(true)

	  	setTimeout(function(){
	   	$.fancybox.open('#modal1', {
		    fitToView  : false,
		    autoResize : true,
		    autoSize   : true,
		    padding    : 0,
		    margin     : 0,
		    width      : '96%',
		    maxWidth   : '96%',
		    autoWidth  : true
	    })
	  	}, 250)
	})
});
$(window).load(function(){

	if( $(window).width() > 479 ){
		$('.items .item1').each(function(){
			productHeight($('.items .item1'), 3);
		});
		$('.items .item2').each(function(){
			productHeight($('.items .item2'), 3);
		});
	}

	if( device.desktop() ){
		//паралакс
		$('#scene').parallax({
	    	frictionX: 0.2,
	  		frictionY: 0,
	    });

	    // Шапка
		$('.line_top').sticky({
			topSpacing: 0
		})

		$('.bng5').on('inview', function(event, isInView) {
			if (isInView) {
				$(this).addClass('active');
			}
		});

		$('.features .item1 .lamp').on('inview', function(event, isInView) {
			if (isInView) {
				$(this).addClass('active');
			}
		});

		$('.features .item2 .lamp').on('inview', function(event, isInView) {
			if (isInView) {
				$(this).addClass('active');
			}
		});

		$('.information .container').on('inview', function(event, isInView) {
			if (isInView) {
				setTimeout(function(){
			        $('.information .thumb').addClass('animated slideInLeft');
			    }, 200);

			    setTimeout(function(){
			        $('.information .info').addClass('animated slideInRight');
			    }, 200);
			}
		});

		$('.banner .img').on('inview', function(event, isInView) {
			if (isInView) {
				setTimeout(function(){
			        $('.banner .img').addClass('animated slideInLeft');
			    }, 200);
			}
		});
		
		$('.order .item').on('inview', function(event, isInView) {
			if (isInView) {
				$(this).addClass('animated zoomIn');
			}
		});
	}
});

function setHeight(selector){
    var maxheight = 0;

    $(selector).each(function() {
        if($(this).innerHeight() > maxheight) { maxheight = $(this).innerHeight(); }
    });

    $(selector).innerHeight(maxheight);
}


function productHeight(selector, step){
	var start    = 0;
	var finish   = step;
	var products = selector;

	for( var i = 0; i < products.length; i++ ){
		var obj = products.slice(start, finish).find('.heig');
		setHeight( obj );

		start  = start+step;
		finish = finish+step;
	}
}


$(document).ready(function(){
    $(".i.fa.fa-angle-down").click(function(){
        $("#arrow").css('transform: rotate(180deg);');
        return false;
    });
});
