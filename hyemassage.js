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
        if(location.hash=='#contact')
            window.location.reload();
        else
		    handleChange(location.hash);
	});
});

function handleChange(hash)
{
    $('content div.section').hide();
	$('header ul li').removeClass('selected');
	$(hash).fadeIn();
	$(hash+'-link').addClass('selected');
}