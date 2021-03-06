<?php if (!defined('APPLICATION')) exit();

$PluginInfo['Identicon5'] = array(
	'Name' => 'Identicon5 (jQuery)',
	'Description' => 'Identicons using HTML5 Canvas & JQuery. Draws identicons using HTML5 Canvas instead of the Gravatar image link. If Canvas is not supported the plugin defaults to the standard gravatar image link.',
	'Version' => '1.9.2.0.18',
	'Author' => 'Francis Shanahan',
	'AuthorUrl' => 'http://francisshanahan.com'
);

class Identicon5Plugin implements Gdn_IPlugin {
	
	
	// copy/paste from Gravatar plugin

	
	// custom
	public function OnlineMessageModel_BeforeGet_Handler(&$Sender) {
		$Sender->SQL->Select('iu.Email', '', 'InsertEmail');
	}
	

	public function Setup() {
		RemoveFromConfig('EnabledPlugins.Gravatar');
	}
	
	
	// TODO: CHANGE TO COMMENTS, DISCUSSION, ACTIVITY RENDER ONLY
	public function Base_Render_Before($Sender) {
		if ($Sender->DeliveryType() == DELIVERY_TYPE_ALL) {
			$Sender->AddDefinition('GardenThumbnailWidth', C('Garden.Thumbnail.Width', 40));
			$Sender->AddJsFile('plugins/Identicon5/jquery.identicon5.js');
			$Sender->AddJsFile('plugins/Identicon5/functions.identicon5.js');
		}
	}
	
	
}

if (!function_exists('UserBuilder')) {

	function UserBuilder($Object, $UserPrefix = '') {
		static $GravatarAvatar, $GardenThumbnailWidth, $DefaultAvatarAsset;
		$User = new StdClass();
		$UserID = $UserPrefix.'UserID';
		$Name = $UserPrefix.'Name';
		$Photo = $UserPrefix.'Photo';
		$Email = $UserPrefix.'Email';
		$User->UserID = $Object->$UserID;
		$User->Name = $Object->$Name;
		$User->Photo = property_exists($Object, $Photo) ? $Object->$Photo : '';
		$User->Email = property_exists($Object, $UserPrefix.'Email') ? $Object->{$UserPrefix.'Email'} : '';
		$User->Gender = property_exists($Object, $UserPrefix.'Gender') ? $Object->{$UserPrefix.'Gender'} : '';
		
		
		if ($User->Photo == '' && property_exists($Object, $Email)) {
			$Hash = md5(strtolower($Object->$Email));
			if ($GravatarAvatar === Null) {
				$HTTPS = GetValue('HTTPS', $_SERVER, '');
				$Protocol =  (strlen($HTTPS) || GetValue('SERVER_PORT', $_SERVER) == 443) ? 'https://secure.' : 'http://www.';
				$GravatarAvatar = $Protocol.'gravatar.com/avatar.php';
				$GardenThumbnailWidth = C('Garden.Thumbnail.Width', 40);
				$DefaultAvatarAsset = urlencode(Asset(C('Plugins.Gravatar.DefaultAvatar', 'plugins/Identicon5/default.gif'), True));
			}
			$User->Photo = $GravatarAvatar.'?gravatar_id='.$Hash.'&amp;default='.$DefaultAvatarAsset.'&amp;size='.$GardenThumbnailWidth;
		}
		return $User;
	}
}













