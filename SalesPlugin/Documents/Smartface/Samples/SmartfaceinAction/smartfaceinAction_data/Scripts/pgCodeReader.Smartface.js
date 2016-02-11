/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Page
*/
function pgCodeReader_Self_OnKeyPress(e){
    if(e.keyCode === 4) {
        Pages.back();
    }
}
var selectedCodeType;
var headerTitle = "Code Reader";
/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function pgCodeReader_Self_OnShow(e){
    this.statusBar.background = codeReaderStatusBarColor;
    headerTitle = "Code Reader";
    if (Device.deviceOS == "Android") {
        header.init(this, codeReaderHeader, codeReaderStatusBarColor, headerTitle);
        header.setLeftItem(homeBack);
    } else {
        header.init(this, codeReaderHeader, codeReaderStatusBarColor, headerTitle);
        header.setLeftItem(homeBack);
        header.setRightItem();
    }
}
function pgCodeReader_cntQrCodeReader_OnTouchEnded(e){
    selectedCodeType = 0;
    headerTitle = 'QR Code Reader';
    Pages.pgCodeReaderAction.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function pgCodeReader_cntLinearCodeReader_OnTouchEnded(e){
    selectedCodeType = 1;
    headerTitle = 'Linear Code Reader';
    Pages.pgCodeReaderAction.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function pgCodeReader_cntDataMatrixReader_OnTouchEnded(e){
    selectedCodeType = 2;
    headerTitle = 'Data Matrix Code Reader';
    Pages.pgCodeReaderAction.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}