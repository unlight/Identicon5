jQuery(document).ready(function(){

	var GardenThumbnailWidth = gdn.definition('GardenThumbnailWidth');
	var Options = {
		size: GardenThumbnailWidth, 
		replace: true,
		className: 'IdentIcon5'
	};
	var Selector = 'img[src*="gravatar.com/avatar.php"]';
	var PropertyNames = 'width height top right bottom left margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-styleborder-left-style position display visibility z-index overflow-x overflow-y white-space clip float clear cursor'.split(' ');
	var LinkIdentIcon5 = function() {
		var Collection = $(Selector);
		var TestImage = Collection.first();
		var CssHeadString = '';
		for (var i = PropertyNames.length - 1; i >= 0; i--) {
			CssHeadString += "\n" + PropertyNames[i] + ': ' + TestImage.css(PropertyNames[i]) + ";";
		}
		CssHeadString = ".IdentIcon5 {" + CssHeadString + "\n}";
		CssHeadString = '<style type="text/css">'+CssHeadString+'</style>';
		$(CssHeadString).appendTo($('head').first());
		$(Selector).identicon5(Options);
	};
	
	// Replace avatar by identicon5
	LinkIdentIcon5();
	if (typeof($.livequery) == 'function') $(Selector).livequery(LinkIdentIcon5);

});