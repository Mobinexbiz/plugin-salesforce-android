function dlgSquareInfo_imgClose_OnTouchEnded(e) {
    Dialogs.dlgSquareInfo.close();
}
/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Dialog
*/
function dlgSquareInfo_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Dialogs.dlgSquareInfo.close();
    }
}