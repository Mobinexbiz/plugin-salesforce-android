/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Page
*/
function pgBlog_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function pgBlog_Self_OnShow() {
    this.statusBar.background = '#C1392D';
    headerSocial.init(this);
    headerSocial.setCategoryItem();
    headerSocial.openSIA();
    if (firstRun == true) {
        if (Device.connectionType != 0)
            dlg.show();
        intervalID = setInterval(function () {
                updateTime();
            }, 50);
        firstRun = false;
        //admob for ios should create once for each page
        if (Device.deviceOS == 'iOS')
            createAdmob(this);
    }
    //admob for android should create everytime for each page shown
    if (Device.deviceOS == 'Android') {
        createAdmob(this);
    }
}