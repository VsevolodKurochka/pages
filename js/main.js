$(document).ready(function(){

		// VARIABLES
		var header_menu_name 	= 'vnav-menu',
				header_menu 			= $('.' + header_menu_name),
				body 							= $("body"),
				visibility        = "in visible",
				active            = "active",
		 		backdrop = $("<div />", {
					class: "vmodal-backdrop fade"
				});

		// SCROLL TO BLOCK
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		$('[data-modal-video]').click(function(){
			var modalVideoAttr = $(this).attr("data-modal-video");
			$("<iframe />", {
				src: modalVideoAttr + "?autoplay=1",
				class: "modal-video"
			}).appendTo("#vmodal_video .vmodal_iframe");
		});
			$("#vmodal_video .vmodal_iframe").html('');
		function deleteVideo(){
			$("#vmodal_video .vmodal_iframe").html('');
		}
		$('[data-modal="vmodal"]').click(function(){
			var thisTarget = $(this).attr("data-modal-target");
			if ( thisTarget ) {
				$(thisTarget).addClass(visibility);
				body.append(backdrop).addClass("vmodal-open");
				backdrop.addClass(visibility);
			}else{
				console.log("Need attribtue [data-modal-target].");
			}
		});
		$('[data-close="vmodal"]').click(function(){
			$(this).closest(".vmodal").removeClass(visibility);
			backdrop.removeClass(visibility);
			body.removeClass("vmodal-open");
			deleteVideo();
		});
		$(window).click(function(e){
			if ( backdrop.length > 0 ) {
				if ( $(e.target).is(".vmodal") ) {
					$(".vmodal.in").removeClass(visibility);
					backdrop.removeClass(visibility);
					body.removeClass("vmodal-open");
					deleteVideo();
				}
			}
		});
});	