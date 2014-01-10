$(document).ready(function(){
	$('.title').click(function(){
		//$('.faq .questions .question .disc').hide(300);
		$(this).parent().find('.content').toggle(300);
	});
	$('.faq .search').on('keyup', 'input', function() {
		faq_find();
	});
	$('.keys .key').click(function(){
		$('.search input').val($(this).text());
		faq_find();
	});
	$('.faq .js_clin_search').click(function(){
		$('.search input').val('');
		faq_find();
	});
});

function faq_find(){
	$('.faq .questions .question .disc').each(function(k, v){
		$(v).html(strip_tags_sel($(v).html()));
	});
	$('.faq .questions .question .content .keys .key').each(function(k, v){
		$(v).html(strip_tags_sel($(v).html()));
	});
	$('.faq .questions .question .title').each(function(k, v){
		$(v).html(strip_tags_sel($(v).html()));
	});
	var phrase = $('.search input').val();
	if(phrase.length > 0){
		$(".faq .questions :contains("+phrase+")").not(":has(:contains("+phrase+"))").each(function(){
			var that = $(this);
			var html = that.html();
			
			html = html.replace(new RegExp(phrase, 'gi'), '<sel>'+phrase+'</sel>');
			that.html(html);
		});
		
		$('.faq .questions .question .content .disc').parent().parent().hide();
		$('.faq .questions .question .content .disc sel').parent().parent().parent().show();
		$('.faq .questions .question .content .disc sel').parent().parent().show();
		$('.faq .questions .question .content .disc sel').parent().parent().parent().show();
		
		$('.faq .questions .question .content .keys .key sel').parent().parent().parent().parent().show();
		$('.faq .questions .question .content .keys .key sel').parent().parent().parent().show();
		
		$('.faq .questions .question .title sel').parent().parent().parent().show();
		
		$('.faq .questions .question .content .keys .key sel').parent().parent().parent().parent().show();
		$('.faq .questions .question .content .keys .key sel').parent().parent().parent().show();
		$('.faq .questions .question .content .keys .key sel').parent().parent().parent().parent().show();
	}else{
		$('.faq .questions .question').show();
		$('.faq .questions .question .content').show();
		//$('.faq .questions .question .content').hide();
	}
}
function strip_tags_sel(str){
	if(str.length <= 0){
		return str;
	}
	return str.replace(/<\/?sel>/g, '');
}