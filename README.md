
Smartface Salesforce plugin for Android
===================

This is Smartface Salesforce plugin based on SalesForce Native Android SDK. You can use this plugin on Smartface IDE and Smartface Cloud Development portal.

<img src="http://i.imgur.com/LazEaOx.png">|<img src="http://i.imgur.com/cbRNAhx.png">

 

Setup
=====

To start using Calendar plugin you need to follow below steps:

 - Download plugin file.
 - Copy plugin file to Smartface plugin folder.
 - Select Calendar plugin in Smartface project settings.

To use Calendar with auto complete support (Optional)

 - Copy Calendar auto complete Javascript file to your project folder.
 - Load auto complete file in global.

You can look following guides to understand how can you pass these steps:

 - Adding a plugin to Smartface projects
 - Adding auto complete support for plugins

#Features

* Authentication with Webview.
* Using SalesforceRestAPI.

#### Constructor

You can create SalesForce Manager Constructor as;

````Javascript
var SFSDKManager = new SMFSFManager();
````

#### Set ConnectedAppId Property

ConnectedAppId is a value that Salesforce created for you to use in app.

````Javascript
SFSDKManager.connectedAppId = "3MVG9FS3IyroMOh4nubHUj9SXAs1i6qwY8KhK6bsE6WmX3g9vrNsjA1CGgUsdasdasdfdsfsdfsdfqqww";
````

#### Set connectedAppCallbackUri Property

ConnectedAppCallbackUri is a uri that Salesforce uses for communication.

````Javascript
SFSDKManager.connectedAppCallbackUri = "test://test"; 
````

#### Set authScopes Property

AuthScopes is an array that includes what the application will use.

````Javascript
SFSDKManager.authScopes = ["web", "api"];
````

#### launch Function

This will show Webview to authenticate with User email and Password.

````Javascript
SFSDKManager.launch();
````

#### SMFPostLaunchAction Event

After logging successfully this event will be triggered.

````Javascript
SFSDKManager.SMFPostLaunchAction = function(e) {
    /**** after login action is successful ****/
};
````

#### SMFLaunchErrorAction Event
If there is an error while authenticating ;

````Javascript
SFSDKManager.SMFLaunchErrorAction = function(e) {
    /****  when authentication error occurs ****/
};
````

#### SFRestAPI Object
SFRestApi is used to send request and to get response with delegate methods. You can call sharedInstance as;

````Javascript
var restApi = SFRestAPI.sharedInstance();
````

#### SFRestRequest Object
You can use this class as request object. SFRestAPI creates SFRestRequest object as ;

````Javascript
var restRequest = restApi.requestForQuery(query);
````

#### SMFSFRestDelegate Object

Events are handled with this class methods. You can create as ;

````Javascript
var reqDelegate = new SMFSFRestDelegate();
````

#### SMFSFRestDelegate onSuccess Event

This event is triggered after a successful request ;

````Javascript
reqDelegate.onSuccess = function(e) {}
````

#### SMFSFRestDelegate onFail Event

If there is an error after request ;

````Javascript
reqDelegate.onFail = function(e) {}
````

#### SFRestAPI sendDelegate Method

You can send request by this method. Takes two parameters request and delegate

````Javascript
restApi.sendDelegate(restRequest, reqDelegate);
````

# Plugin Initialization for Smartface

You can download plugin project and you can create a plugin zip file to use on smartface by doing steps in  [Smartface.io](http://www.smartface.io/developer/guides/plugins/developing-smartface-plugins/)
* You can use SalesForceSMF-Doc.js(autocomplete file) by including into Global.js file in your smartface project.

# Usage on Smartface

You can authenticate with Salesforce and You can send request. Example ;

````Javascript
var SFSDKManager = new SMFSFManager();
SFSDKManager.connectedAppId = "3MVG9FS3IyroMOh4nubHUj9SXAs1i6qwY8KhK6bsE6WmX3g9vrNsjA1CGgUsdasdasdfdsfsdfsdfqqww";
SFSDKManager.connectedAppCallbackUri = "test://test"; 
SFSDKManager.authScopes = ["web", "api"];
SFSDKManager.SMFPostLaunchAction = function(e) {
    /**** after login action is successful ****/
    sendRequest();
};

SFSDKManager.launch();

function sendRequest() {
    /*** In SF account, it gets first 10 users and with recieved response it alerts the first user name ***/
    var limit = 100;
    var restApi = SFRestAPI.sharedInstance();
    var reqDelegate = new SMFSFRestDelegate();
    reqDelegate.onSuccess = function(e) {
        var names = [];
        for (var i = 0; i < limit; i++) {
            try {
                names.push(e.records[0].Name);
            }
            catch (exx) {
                break;
            }
        }
        alert(names.join("\n"));
    }
    restApi.sendDelegate(restRequest, reqDelegate);
}
````

You can find more example usage about properties and functions in sf.js file.

Requirements
========

Release Notes
========

Read the [RELEASE-NOTES.md](https://github.com/SmartfaceIO/plugin-salesforce-android/blob/master/RELEASE-NOTES.md) file.

# Author
 Smartface inc.

# License
Smartface SalesForce Android Plugin uses SalesForce SDK. You can check LICENSE.md