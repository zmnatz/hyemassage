$(function() {
	$(".hideOnNoScript").show();
	$(window).hashchange(handleHashChange);		
	loadTestimonials('json/testimonials.json','#testimonials');
	if(!location.hash)
		location.hash = '#home';
});

function handleHashChange()
{
	var hash = location.hash ? location.hash : '#home';
    $('.section').hide();
	$('.nav-item').removeClass('selected');
	$(hash).fadeIn();
	$(hash+'-link').addClass('selected');
}

function loadTestimonials(url,outputDiv)
{
	$.getJSON(url, function(data) {url
    	$.each(data.testimonials, function(index,testimonial) {
    		var output = '<p>"'+testimonial.text + '"<br/>';
    		output += ' - ' + testimonial.reviewer + '</p>';
    		$(outputDiv).append(output);
    	})
	});
}