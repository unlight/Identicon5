jQuery(document).ready(function(){
	var GardenThumbnailWidth = gdn.definition('GardenThumbnailWidth');
	$('img[src*="gravatar.com/avatar.php"]').identicon5({size:GardenThumbnailWidth,replace:true});
});