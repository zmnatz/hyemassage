$(function() {
	$(".hideOnNoScript").show();
	$(window).hashchange(handleHashChange);		
	if(!location.hash)
		location.hash = '#home';
	else
		handleHashChange();
});

$(function(){
	loadTestimonials('json/testimonials.json','#testimonials');
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