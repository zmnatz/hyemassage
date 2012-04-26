$(function() {
	$(window).hashchange(function()
	{
		handleChange(location.hash);
	});
	var hash = location.hash;
	if(!location.hash)
	{
		hash = '#home';
	}
	handleChange(hash);
});

function handleChange(hash)
{
	$('content div.section').each(function(i,value){
		$(value).hide();
	});
	$('header ul li').each(function(i,value){
		$(value).removeClass('selected')	
	});
	$(hash).fadeIn();
	$(hash+'-link').addClass('selected');
}