if (jQuery !== undefined) {

	jQuery(document).ready(function(){
		var GardenThumbnailWidth = gdn.definition('GardenThumbnailWidth');
		var options = {size: GardenThumbnailWidth, 	replace: true};
		var s = 'img[src*="gravatar.com/avatar.php"]';
		$(s).identicon5(options);
		
		if (typeof($.livequery) == 'function') {
			$(s).livequery(function(){
				$(this).identicon5(options);
			});
		}
	});
	
}

