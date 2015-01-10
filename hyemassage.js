/*globals $ */
$(function () {
    'use strict';
    
    function handleHashChange() {
        var hash = location.hash || '#home';
        $('.section').hide();
        $('.nav-item').removeClass('selected');
        $(hash).fadeIn();
        $(hash + '-link').addClass('selected');
    }
    
    function loadTestimonials(url, outputDiv) {
        $.getJSON(url, function (data) {
            $.each(data.testimonials, function (index, testimonial) {
                $(outputDiv).append($('<p/>').html('"' + testimonial.text + '"')
                    .append('<br/>').append(' - ' + testimonial.reviewer));
            });
        });
    }
    
    $(".hideOnNoScript").show();
	$(window).hashchange(handleHashChange);
    handleHashChange();
    loadTestimonials('json/testimonials.json', '#testimonials');
});