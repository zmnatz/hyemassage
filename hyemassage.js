$(function() {
	var hash = location.hash;
	if(!location.hash)
	{
		hash = '#home';
	}
	handleChange(hash);
	
	$("li.hideOnNoScript").show();
	$("a.hideOnNoScript").show();
			
	$(window).hashchange(function()
	{
        handleChange(location.hash);
	});
	
	loadTestimonials('json/testimonials.json','#testimonials');
});

function handleChange(hash)
{
    $('content div.section').hide();
	$('header ul li').removeClass('selected');
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