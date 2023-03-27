$('.slider').slick({
	slidesToShow:3,
	appendArrows: $('.clients__arrow'),
	responsive:[
		{
			breakpoint: 1601,
			settings: {
				variableWidth: true,
				centerMode: true,
				appendArrows: false,
				slidesToShow: 1
			}
		}
	]
}); 

$('.slider').on(`init reInit`, function(event, slick) {
	$('.counter').text(1 + ' / ' + slick.slideCount);
  });
  $('.slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
	$('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
  });