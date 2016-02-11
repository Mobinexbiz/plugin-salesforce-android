var imgHeight;
var defaultContentTop;
/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Page
*/
function pgLineStyle_Self_OnKeyPress(e) {
    if (e.keyCode == 4) {
        Pages.back();
    }
}
// setting which open dialog
function showDialog(e) {
    Dialogs.dlgListView.show();
}
function showDlgListLineInfo() {
    Dialogs.dlgListLineInfo.show();
}
/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function pgLineStyle_Self_OnShow(e) {
    // setting iOS NavigationBar
    this.statusBar.background = listStatusbarColor;
    var title = lang.pgLineStyleTitle;
    if (Device.deviceOS == "Android") {
        header.init(this, listHeader, listStatusbarColor, title);
        header.setLeftItem(pagesBack);
    } else {
        header.init(this, listHeader, listStatusbarColor, title);
        header.setLeftItem(pagesBack);
        header.setRightItem(showDlgListLineInfo);
    }
    Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.image = "";
    Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.image = "";
    Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.image = "";
    // setting size of imgNewsContent,imgNewsContent1,imgNewsContent2
    var a = Device.screenWidth / 1.5;
    this.svNewsContentPager.svNewsContent0.imgNewsContent.height = a;
    this.svNewsContentPager.svNewsContent0.imgNewsContent.width = Device.screenWidth;
    this.svNewsContentPager.svNewsContent1.imgNewsContent1.height = a;
    this.svNewsContentPager.svNewsContent1.imgNewsContent1.width = Device.screenWidth;
    this.svNewsContentPager.svNewsContent2.imgNewsContent2.width = Device.screenWidth;
    this.svNewsContentPager.svNewsContent2.imgNewsContent2.height = a;
    imgHeight = this.svNewsContentPager.svNewsContent0.imgNewsContent.height;
    defaultContentTop = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.top;
    Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.onScroll = onScroll1;
    imgHeight2 = this.svNewsContentPager.svNewsContent1.imgNewsContent1.height;
    defaultContentTop2 = Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.top;
    Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.onScroll = onScroll2;
    imgHeight3 = this.svNewsContentPager.svNewsContent2.imgNewsContent2.height;
    defaultContentTop3 = Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.top;
    Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.onScroll = onScroll3;
}
function onScroll1(e) {
    if (e.scrollY <= 0) {
        if (Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.top < defaultContentTop) {
            Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.top += (e.scrollY * -1);
            Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.height = Device.screenHeight - Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.top;
        } else {
            if (e.scrollY == 0) {
                Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.imageFillType = SMF.UI.ImageFillType.aspectFit;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.height = imgHeight;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.width = Device.screenWidth;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.left = 0;
            } else if ((defaultContentTop + (e.scrollY * -1)) > imgHeight) {
                if (Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.imageFillType != 2)
                    Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.imageFillType = SMF.UI.ImageFillType.stretch;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.height = defaultContentTop + (e.scrollY * -1);
                Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.width = Device.screenWidth + (e.scrollY * -1 * 1.500938);
                Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.left =  - (e.scrollY * -1 * 1.500938 / 2);
            }
        }
        if (!Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.backgroundTransparent)
            Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.backgroundTransparent = true;
    } else {}
    Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgShadow0.top = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.imgNewsContent.height;
}
function onScroll2(e) {
    if (e.scrollY <= 0) {
        if (Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.top < defaultContentTop) {
            Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.top += (e.scrollY * -1);
            Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.height = Device.screenHeight - Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.top;
        } else {
            if (e.scrollY == 0) {
                Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.imageFillType = SMF.UI.ImageFillType.aspectFit;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.height = imgHeight2;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.width = Device.screenWidth;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.left = 0;
            } else if ((defaultContentTop2 + (e.scrollY * -1)) > imgHeight2) {
                if (Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.imageFillType != 2)
                    Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.imageFillType = SMF.UI.ImageFillType.stretch;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.height = defaultContentTop2 + (e.scrollY * -1);
                Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.width = Device.screenWidth + (e.scrollY * -1 * 1.500938);
                Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.left =  - (e.scrollY * -1 * 1.500938 / 2);
            }
        }
        if (!Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.backgroundTransparent)
            Pages.pgLineStyle.svNewsContentPager.svNewsContent1.content1.backgroundTransparent = true;
    } else {}
    Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgShadow1.top = Pages.pgLineStyle.svNewsContentPager.svNewsContent1.imgNewsContent1.height;
}
function onScroll3(e) {
    if (e.scrollY <= 0) {
        if (Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.top < defaultContentTop) {
            Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.top += (e.scrollY * -1);
            Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.height = Device.screenHeight - Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.top;
        } else {
            if (e.scrollY == 0) {
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.imageFillType = SMF.UI.ImageFillType.aspectFit;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.height = imgHeight3;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.width = Device.screenWidth;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.left = 0;
            } else if ((defaultContentTop3 + (e.scrollY * -1)) > imgHeight3) {
                if (Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.imageFillType != 2)
                    Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.imageFillType = SMF.UI.ImageFillType.stretch;
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.height = defaultContentTop3 + (e.scrollY * -1);
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.width = Device.screenWidth + (e.scrollY * -1 * 1.500938);
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.left =  - (e.scrollY * -1 * 1.500938 / 2);
            }
            if (!Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.backgroundTransparent)
                Pages.pgLineStyle.svNewsContentPager.svNewsContent2.content2.backgroundTransparent = false;
        }
    } else {}
    Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgShadow2.top = Pages.pgLineStyle.svNewsContentPager.svNewsContent2.imgNewsContent2.height;
}
/**
* Triggers at each page change if scrollview paging is enabled.
* @param {onPageChangedEventArguments} e
* @this SMF.UI.ScrollView
*/
function pgLineStyle_svNewsContentPager_OnPageChanged(e) {
    // using 3 scrollview for scroll performance and better UI
    // setting position of scrollviews and filling data to objects
    var index = e.pageIndex;
    if (index > 0 && index < newsArrayList.length - 1) {
        for (i = 0; i < 3; i++) {
            var innerSv = lineStyleNewsScrollViews[i];
            innerSv.controls[1].scrollY = 0;
            if (innerSv.left == Device.screenWidth * (index + 2)) {
                innerSv.left = Device.screenWidth * (index - 1);
                innerSv.controls[0].image = newsArrayList[index - 1].image[0].url;
                innerSv.controls[1].controls[0].text = newsArrayList[index - 1].title;
                innerSv.controls[1].controls[1].text = newsArrayList[index - 1].description;
                innerSv.controls[1].controls[1].height = lineStyleNewsLblHeights[index - 1];
                innerSv.controls[1].contentHeight = lineStyleNewsScrollViewsContentHeights[index - 1];
            }
            if (innerSv.left == Device.screenWidth * (index - 2)) {
                innerSv.left = Device.screenWidth * (index + 1);
                innerSv.controls[0].image = newsArrayList[index + 1].image[0].url;
                innerSv.controls[1].controls[0].text = newsArrayList[index + 1].title;
                innerSv.controls[1].controls[1].text = newsArrayList[index + 1].description;
                innerSv.controls[1].controls[1].height = lineStyleNewsLblHeights[index + 1];
                innerSv.controls[1].contentHeight = lineStyleNewsScrollViewsContentHeights[index + 1];
            }
        }
    }
    if (index > 0 && index == (newsArrayList.length - 1)) {
        isUsingSwipe = true;
        rowNum = 11;
        pageNum = Number(pageNum) + 1;
        Data.wcListView_InDSet.rowNumber = rowNum;
        Data.wcListView_InDSet.pagenumber = pageNum;
        SMF.Net.wcListView.run();
    }
}