$(document).ready(function () {
	$('body').on('mouseenter','.card-bmkt',function()	{
		var crd = _BMDB({"id":$(this).data('id')}).first();
		var htmlout = '';
		htmlout = JSON.stringify(crd);
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  htmlout
			},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			},
			position: {
				my: 'left center',
				at: 'right center',
				viewport : $(window)
			},
			hide:	{
				//event: 'unfocus'
			}
		});
	});
});