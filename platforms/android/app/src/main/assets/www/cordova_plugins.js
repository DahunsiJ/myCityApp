cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-flashlight.Flashlight",
      "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
      "pluginId": "cordova-plugin-flashlight",
      "clobbers": [
        "window.plugins.flashlight"
      ]
    },
    {
      "id": "cordova-plugin-request-location-accuracy_sayeh.RequestLocationAccuracy",
      "file": "plugins/cordova-plugin-request-location-accuracy_sayeh/www/android/RequestLocationAccuracy.js",
      "pluginId": "cordova-plugin-request-location-accuracy_sayeh",
      "clobbers": [
        "cordova.plugins.locationAccuracy"
      ]
    },
    {
      "id": "cordova-universal-links-plugin.universalLinks",
      "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
      "pluginId": "cordova-universal-links-plugin",
      "clobbers": [
        "universalLinks"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-request-location-accuracy_sayeh": "2.2.2",
    "cordova-universal-links-plugin": "1.2.1"
  };
});