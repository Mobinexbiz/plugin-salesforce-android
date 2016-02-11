
// user selects interest with repeatbox selectedItem event
/**
* Creates action(s) that are run when an item is selected on the repeat box.
* @param {RepeatboxEventArgument} e
* @this SMF.UI.RepeatBox
*/
function pgInterestList_rBoxInterest_OnSelectedItem(e) {
    Data.DS_Interest.seek(e.rowIndex);
    if (Data.DS_Interest.image == "") {
        Data.DS_Interest.image = "list_check.png";
        Data.DS_Interest.fontColor = "#057AFB";
    } else {
        Data.DS_Interest.fontColor = "#999999";
        Data.DS_Interest.image = "";
    }
    Data.notify("Data.DS_Interest");
}
// filling data to objects in repeatbox
/**
* Creates action(s) that are run when an item is loaded onWeakPinError the repeat box.
* @param {RepeatboxEventArgument} e
* @this SMF.UI.RepeatBox
*/
function pgInterestList_rBoxInterest_OnRowRender(e) {
    Data.DS_Interest.seek(e.rowIndex);
    Pages.pgInterestList.rBoxInterest.imgOk.image = Data.DS_Interest.image;
    Pages.pgInterestList.rBoxInterest.lblInterest.fontColor = Data.DS_Interest.fontColor;
}
function showdlgInterestListInfo() {
    Dialogs.dlgInterestList.show();
}
/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function pgInterestList_Self_OnShow(e) {
    this.statusBar.background = formStatusbarColor;
    Data.notify("Data.DS_Interest");
    this.rBoxInterest.allowDeletingItems = false;
    fromLogin = 3;
    var title = lang.interestlist;
    // setting iOS NavigationBar
    if (Device.deviceOS == "Android") {header.init(this, formHeader, formStatusbarColor, title);
        header.setLeftItem(pagesBack);}
    else {
        header.init(this, formHeader, formStatusbarColor, title);
        header.setLeftItem(pagesBack);
        header.setRightItem(showdlgInterestListInfo);
    }
}
/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Page
*/
function pgInterestList_Self_OnKeyPress(e) {
    if (e.keyCode == 4)
        Pages.back();
}