/**
 * Creates action(s) that are run when the user press the key of the devices.
 * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
 * @this SMF.UI.Page
 */
function pgCodeReaderAction_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.Page
 */
function pgCodeReaderAction_Self_OnShow(e) {
    this.statusBar.background = codeReaderStatusBarColor;
    if (Device.deviceOS == "Android") {
        header.init(this, codeReaderHeader, codeReaderStatusBarColor, headerTitle);
        header.setLeftItem(pagesBack);
    } else {
        header.init(this, codeReaderHeader, codeReaderStatusBarColor, headerTitle);
        header.setLeftItem(pagesBack);
        header.setRightItem();
    }
    switch (selectedCodeType) {
    case 0:
        Pages.pgCodeReaderAction.CodeReader1.readCode(SMF.UI.CodeType.qr, function () {
            alert(Pages.pgCodeReaderAction.CodeReader1.value);
        }, function () {
            alert("Failed to read code");
        });
        break;
    case 1:
        Pages.pgCodeReaderAction.CodeReader1.readCode(SMF.UI.CodeType.linear, function () {
            alert(Pages.pgCodeReaderAction.CodeReader1.value);
        }, function () {
            alert("Failed to read code")
        });
        break;
    case 2:
        Pages.pgCodeReaderAction.CodeReader1.readCode(SMF.UI.CodeType.dataMatrix, function () {
            alert(Pages.pgCodeReaderAction.CodeReader1.value);
        }, function () {
            alert("Failed to read code");
        });
        break;
    default:
        Pages.pgCodeReaderAction.CodeReader1.readCode(SMF.UI.CodeType.qr, function () {
            alert(Pages.pgCodeReaderAction.CodeReader1.value);
        }, function () {
            alert("Failed to read code");
        });
        break;
    }
}
var urlValidatorRegex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var phoneNumberValidatorRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
var emailValidatorRegex = /^(([^<>()[\]\\.,; :\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function codeHandler(txt) {
    if (urlValidatorRegex.test(txt)) {
        //SMF.Net.browseOut(txt);
        //alert(txt);
    } else if (phoneNumberValidatorRegex.test(txt)) {
        Device.makeCall(txt);
    } else if (emailValidatorRegex.test(txt)) {
        SMF.Net.sendMail({
            to : txt,
            cc : "",
            bcc : "",
            title : "Smartface",
            body : "Smartface In Action",
            attachment : "",
            onSuccess : function () {
                //alert("success");
            },
            onFailure : function () {
                //alert("failure");
            }
        });
    } else {
        //alert(txt);
    }
}