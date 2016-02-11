function dlgFormUserInfo_imgClose_OnTouchEnded(e) {
    Dialogs.dlgFormUserInfo.close();
}
/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Dialog
*/
function dlgFormUserInfo_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Dialogs.dlgFormUserInfo.close();
    }
}