// setting which open dialog
function showDlgBoxedInfo() {
    Dialogs.dlgBoxedInfo.show();
}
/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function pgBoxedStyle_Self_OnShow(e) {
    // setting position of imgNewsContent,imgNewsContent1,imgNewsContent2
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent0.imgNewsContent.height = Device.screenWidth / 1.5;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent0.imgNewsContent.width = Device.screenWidth;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.height = Device.screenWidth / 1.5;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.width = Device.screenWidth;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.width = Device.screenWidth;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.height = Device.screenWidth / 1.5;
    // setting iOS NavigationBar
    var title = lang.pgBoxedStyleTitle;
    if (Device.deviceOS == "Android") {}
    else {
        header.init(this, listHeader, listStatusbarColor, title);
        header.setLeftItem(pagesBack);
        header.setRightItem(showDlgBoxedInfo);
    }
}
/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Page
*/
function pgBoxedStyle_Self_OnKeyPress(e) {
    if (e.keyCode == 4) {
        Pages.back();
    }
}
/**
* Triggers at each page change if scrollview paging is enabled.
* @param {onPageChangedEventArguments} e
* @this SMF.UI.ScrollView
*/
function pgBoxedStyle_svNewsContentPager_OnPageChanged(e) {
    // using 3 scrollview for scroll performance and better UI
    // setting position of scrollviews and filling data to objects
    index = e.pageIndex;
    if (index > 0 && index < newsArray.length - 1) {
        for (i = 0; i < 3; i++) {
            var innerSv = boxedStyleNewsScrollViews[i];
            if (innerSv.left == Device.screenWidth * (index + 2)) {
                innerSv.left = Device.screenWidth * (index - 1);
                innerSv.controls[0].image = newsArray[index - 1].image[0].url;
                innerSv.controls[1].text = newsArray[index - 1].title;
                innerSv.controls[2].text = newsArray[index - 1].description;
                innerSv.controls[2].height = boxedStyleNewsLblHeights[index - 1];
                innerSv.contentHeight = boxedStyleNewsScrollViewsContentHeights[index - 1];
            }
            if (innerSv.left == Device.screenWidth * (index - 2)) {
                innerSv.left = Device.screenWidth * (index + 1);
                try {
                    innerSv.controls[0].image = newsArray[index + 1].image[0].url;
                    innerSv.controls[1].text = newsArray[index + 1].title;
                    innerSv.controls[2].text = newsArray[index + 1].description;
                    innerSv.controls[2].height = boxedStyleNewsLblHeights[index + 1];
                    innerSv.contentHeight = boxedStyleNewsScrollViewsContentHeights[index + 1];
                } catch (ex) {
                    //alert(ex);
                }
            }
        }
    }
}