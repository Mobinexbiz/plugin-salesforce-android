/* Global Variables to use for Adding Pin Function */
var totalPin = 0;
var intervalIdforAll;
var intervalIdforType;
var counterPin = 0;
var counterforAll = 0;
var pinType;
var imgPath;
var centLat = Pages.pgMap1.map.centerLatitude;
var centLng = Pages.pgMap1.map.centerLongitude;
/**
* Creates action(s) that are run when the user press the key of the devices.
* @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
* @this SMF.UI.Page
*/
function pgMap1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.pgDashboard.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.leftToRight, SMF.UI.TransitionEffectType.push, false, false);
    }
}
function showDlgMap(e) {
    Dialogs.dlgMap.show();
}
/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function pgMap1_Self_OnShow() {
    this.statusBar.background = mapStatusbarColor;
    counter = 0;
    /* Navigation Bar Customizing */
    var title = lang.map;
    if (Device.deviceOS == "Android") {}
    else {
        header.init(this, mapHeader, mapStatusbarColor, title);
        header.setLeftItem(homeBack);
        header.setRightItem(showDlgMap);
    }
    this.contFilter.btnFilter.height = this.contFilter.btnFilter.width / 2;
    this.contFilter.btnFilter.top = (this.contFilter.height - this.contFilter.btnFilter.height) / 2;
    this.contFilter.btnMapType.height = this.contFilter.btnMapType.width;
    this.contFilter.btnMapType.top = (this.contFilter.height - this.contFilter.btnMapType.height) / 2;
    this.map.removePin(Data.wcMap_OutDSetpins.rowCount.toString());
    /* Running Web Client and Adding Pin Conditions */
    if (webclientSuccessed == false)
        SMF.Net.wcMap.run();
    if (webclientSuccessed && rowAddedToPinDataset) {
        Data.wcMap_OutDSetpins.seek(0);
        for (var i = 0; i < Data.wcMap_OutDSetpins.rowCount; i++) {
            Pages.pgMap1.map.removePin(i.toString());
            Data.wcMap_OutDSetpins.moveNext();
        }
        Data.wcMap_OutDSetpins.seek(0);
        totalPin = 0;
        counterforAll = 0;
        Pages.pgMap1.contFilter.lblNumberOfResults.text = (Data.wcMap_OutDSetpins.rowCount).toString();
        if (Pages.pgMap1.contFilterType.rectForBtnAll.visible == true) {
            addingAll();
        } else {
            counterPin = 0;
            addingAsFilter(pinType, imgPath);
        }
    }
}
/* BtnFilter OnPressed Function*/
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.ImageButton
*/
function pgMap1_btnFilter_OnPressed(e) {
    /* If pressed before(opened) , we close it*/
    if (filterPressed) {
        filterPressed = false;
        Pages.pgMap1.contFilter.btnFilter.defaultImage = "resources://filter.png";
        var endYValue = Pages.pgMap1.contFilterType.top + Pages.pgMap1.contFilterType.height + 5;
        var endYValueStr = endYValue.toString();
        Pages.pgMap1.contFilterType.animate({
            property : 'Y',
            endValue : endYValueStr,
            motionEase : 0,
            duration : 100,
            onFinish : function () {
                Pages.pgMap1.contFilterType.visible = false;
            }
        });
    } else {
        /* If its closed , We open it */
        filterPressed = true;
        Pages.pgMap1.contFilter.btnFilter.defaultImage = "resources://filter2.png";
        Pages.pgMap1.contFilterType.top = Pages.pgMap1.contFilter.top;
        Pages.pgMap1.contFilterType.left = Pages.pgMap1.contFilter.left;
        Pages.pgMap1.contFilterType.visible = true;
        var endYValue = Pages.pgMap1.contFilterType.top - Pages.pgMap1.contFilterType.height - 5;
        var endYValueStr = endYValue.toString();
        Pages.pgMap1.contFilterType.animate({
            property : 'Y',
            endValue : endYValueStr,
            motionEase : 0,
            duration : 100,
            onFinish : function () {}
        });
    }
}
/**
* @param {TouchEventArgument} e Returns e.x and e.y values of touched points.
* @this SMF.UI.Container
*/
function pgMap1_contFilter_OnTouch(e) {
    touched = true;
    firstTouched = true;
}
function pgMap1_contFilter_OnTouchEnded(e) {
    touched = false;
}
/* Function to show all filter types Pins */
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.ImageButton
*/
function pgMap1_imgBtnAll_OnPressed(e) {
    Pages.pgMap1.map.centerLatitude = centLat;
    Pages.pgMap1.map.centerLongitude = centLng;
    if (selectedFilterValue != 0) {
        switch (selectedFilterValue) {
        case 1:
            Pages.pgMap1.contFilterType.rectForBtnTriangle.visible = false;
            break;
        case 2:
            Pages.pgMap1.contFilterType.rectForBtnSquare.visible = false;
            break;
        case 3:
            Pages.pgMap1.contFilterType.rectForBtnCircle.visible = false;
            break;
        default:
            break;
        }
        selectedFilterValue = 0;
        Pages.pgMap1.contFilterType.rectForBtnAll.visible = true;
        Data.wcMap_OutDSetpins.seek(0);
        for (var i = 0; i < Data.wcMap_OutDSetpins.rowCount; i++) {
            Pages.pgMap1.map.removePin(i.toString());
            Data.wcMap_OutDSetpins.moveNext();
        }
        Data.wcMap_OutDSetpins.seek(0);
        counterforAll = 0;
        addingAll();
        Pages.pgMap1.contFilter.lblNumberOfResults.text = (Data.wcMap_OutDSetpins.rowCount).toString();
    }
}
/* If Triangle type Selected */
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.ImageButton
*/
function pgMap1_imgBtnTriangle_OnPressed(e) {
    Pages.pgMap1.map.centerLatitude = centLat;
    Pages.pgMap1.map.centerLongitude = centLng;
    if (selectedFilterValue != 1) {
        switch (selectedFilterValue) {
        case 0:
            Pages.pgMap1.contFilterType.rectForBtnAll.visible = false;
            break;
        case 2:
            Pages.pgMap1.contFilterType.rectForBtnSquare.visible = false;
            break;
        case 3:
            Pages.pgMap1.contFilterType.rectForBtnCircle.visible = false;
            break;
        default:
            break;
        }
        selectedFilterValue = 1;
        Pages.pgMap1.contFilterType.rectForBtnTriangle.visible = true;
        Data.wcMap_OutDSetpins.seek(0);
        for (var i = 0; i < Data.wcMap_OutDSetpins.rowCount; i++) {
            Pages.pgMap1.map.removePin(i.toString());
            Data.wcMap_OutDSetpins.moveNext();
        }
        Data.wcMap_OutDSetpins.seek(0);
        counterforAll = 0;
        imgPath = "resources://triangle_pointer.png";
        counterPin = 0;
        pinType = 0;
        addingAsFilter(pinType, imgPath);
    }
}
/* If Square Selected */
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.ImageButton
*/
function pgMap1_imgBtnSquare_OnPressed(e) {
    Pages.pgMap1.map.centerLatitude = centLat;
    Pages.pgMap1.map.centerLongitude = centLng;
    if (selectedFilterValue != 2) {
        switch (selectedFilterValue) {
        case 0:
            Pages.pgMap1.contFilterType.rectForBtnAll.visible = false;
            break;
        case 1:
            Pages.pgMap1.contFilterType.rectForBtnTriangle.visible = false;
            break;
        case 3:
            Pages.pgMap1.contFilterType.rectForBtnCircle.visible = false;
            break;
        default:
            break;
        }
        selectedFilterValue = 2;
        Pages.pgMap1.contFilterType.rectForBtnSquare.visible = true;
        Data.wcMap_OutDSetpins.seek(0);
        for (var i = 0; i < Data.wcMap_OutDSetpins.rowCount; i++) {
            Pages.pgMap1.map.removePin(i.toString());
            Data.wcMap_OutDSetpins.moveNext();
        }
        Data.wcMap_OutDSetpins.seek(0);
        counterPin = 0;
        imgPath = "resources://square_pointer.png";
        counterforAll = 0;
        pinType = 1;
        addingAsFilter(pinType, imgPath);
    }
}
/* If Circle selected */
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.ImageButton
*/
function pgMap1_imgBtnCircle_OnPressed(e) {
    Pages.pgMap1.map.centerLatitude = centLat;
    Pages.pgMap1.map.centerLongitude = centLng;
    if (selectedFilterValue != 3) {
        switch (selectedFilterValue) {
        case 0:
            Pages.pgMap1.contFilterType.rectForBtnAll.visible = false;
            break;
        case 1:
            Pages.pgMap1.contFilterType.rectForBtnTriangle.visible = false;
            break;
        case 2:
            Pages.pgMap1.contFilterType.rectForBtnSquare.visible = false;
            break;
        default:
            break;
        }
        selectedFilterValue = 3;
        Pages.pgMap1.contFilterType.rectForBtnCircle.visible = true;
        Data.wcMap_OutDSetpins.seek(0);
        for (var i = 0; i < Data.wcMap_OutDSetpins.rowCount; i++) {
            Pages.pgMap1.map.removePin(i.toString());
            Data.wcMap_OutDSetpins.moveNext();
        }
        Data.wcMap_OutDSetpins.seek(0);
        counterforAll = 0;
        counterPin = 0;
        imgPath = "resources://circle_pointer.png";
        pinType = 2;
        addingAsFilter(pinType, imgPath);
    }
}
/* Map Type Changing Btn Pressed Function*/
/**
* Creates action(s) that are run when the object is pressed from device's screen.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.ImageButton
*/
function pgMap1_btnMapType_OnPressed(e) {
    if (typeOfMap == 0) {
        typeOfMap = 1;
        Pages.pgMap1.map.mapType = 1;
        Pages.pgMap1.contFilter.btnMapType.defaultImage = "resources://road.png";
    } else if (typeOfMap == 1) {
        typeOfMap = 0;
        Pages.pgMap1.map.mapType = 0;
        Pages.pgMap1.contFilter.btnMapType.defaultImage = "resources://world.png";
    }
    Data.wcMap_OutDSetpins.seek(0);
    for (var i = 0; i < Data.wcMap_OutDSetpins.rowCount; i++) {
        Pages.pgMap1.map.removePin(i.toString());
        Data.wcMap_OutDSetpins.moveNext();
    }
    Data.wcMap_OutDSetpins.seek(0);
    counterforAll = 0;
    if (Pages.pgMap1.contFilterType.rectForBtnAll.visible == true) {
        addingAll();
        Pages.pgMap1.contFilter.lblNumberOfResults.text = (Data.wcMap_OutDSetpins.rowCount).toString();
    } else {
        counterPin = 0;
        addingAsFilter(pinType, imgPath);
    }
}
/* OnPinSelected Function*/
/**
* Creates action(s) when you select the PIN on the page.
* @param {onPinSelectedEventArguments} e
* @this SMF.UI.MapView
*/
function pgMap1_map_OnPINSelected(e) {
    selectedPinId = e.id;
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgMap2, mapHeader, mapStatusbarColor, lang.mapDetails);
        header.setLeftItem(pagesBack);
    }
    Pages.pgMap2.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
var idForPin;
var timeoutID;
/* MapView onLongTouch Function to add new Pin manually */
function pgMap1_map_OnLongTouch(e) {
    clearTimeout(timeoutID);
    idForPin = Data.wcMap_OutDSetpins.rowCount;
    lastLat = e.latitude;
    lastLon = e.longitude;
    var imgPath;
    pinTypeToAdd = selectedFilterValue - 1;
    if (selectedFilterValue - 1 == 0)
        imgPath = "resources://triangle_pointer.png";
    else if (selectedFilterValue - 1 == 1)
        imgPath = "resources://square_pointer.png";
    else if (selectedFilterValue - 1 == 2)
        imgPath = "resources://circle_pointer.png";
    else if (selectedFilterValue == 0)
        imgPath = "resources://triangle_pointer.png";
    Pages.pgMap1.map.addPin({
        id : idForPin.toString(),
        title : "Dropped Pin",
        subtitle : "Dropped Address",
        latitude : e.latitude,
        longitude : e.longitude,
        selectedImage : imgPath,
        unSelectedImage : imgPath,
        draggable : true,
        animate : true
    });
    changeAddress();
    pinAdded = true;
}
function changeAddress() {
    timeoutID = setTimeout(function () {
            SMF.Map.lookupAddress(lastLat, lastLon,
                function (e) {
                lastAddress = e.results[0].addressValue;
                Pages.pgMap1.map.getPin(idForPin.toString()).subtitle = lastAddress;
                clearTimeout(timeoutID);
            },
                function (e) {});
        }, 3000);
}
// Function to show all filter types Pins by a Timer
function addingAll() {
    if (counterforAll < Data.wcMap_OutDSetpins.rowCount) {
        var imgPath2;
        intervalIdforAll = setTimeout(function () {
                if (Data.wcMap_OutDSetpins.type == 0)
                    imgPath2 = "resources://triangle_pointer.png";
                else if (Data.wcMap_OutDSetpins.type == 1)
                    imgPath2 = "resources://square_pointer.png";
                else
                    imgPath2 = "resources://circle_pointer.png";
                Pages.pgMap1.map.addPin({
                    id : counterforAll.toString(),
                    title : Data.wcMap_OutDSetpins.title,
                    subtitle : Data.wcMap_OutDSetpins.subtitle,
                    latitude : parseFloat(Data.wcMap_OutDSetpins.latitude),
                    longitude : parseFloat(Data.wcMap_OutDSetpins.longitude),
                    selectedImage : imgPath2,
                    unSelectedImage : imgPath2,
                    draggable : false,
                    animate : true
                });
                Data.wcMap_OutDSetpins.moveNext();
                counterforAll++;
                addingAll();
            },
                20);
    } else {
        clearTimeout(intervalIdforAll);
    }
}
// Function to show selected filter types Pins by a Timer
function addingAsFilter(pinType, imgPath) {
    if (counterforAll < Data.wcMap_OutDSetpins.rowCount) {
        intervalIdforType = setTimeout(function () {
                if (Data.wcMap_OutDSetpins.type == pinType) {
                    Pages.pgMap1.map.addPin({
                        id : counterforAll.toString(),
                        title : Data.wcMap_OutDSetpins.title,
                        subtitle : Data.wcMap_OutDSetpins.subtitle,
                        latitude : parseFloat(Data.wcMap_OutDSetpins.latitude),
                        longitude : parseFloat(Data.wcMap_OutDSetpins.longitude),
                        selectedImage : imgPath,
                        unSelectedImage : imgPath,
                        draggable : false,
                        animate : true
                    });
                    Data.wcMap_OutDSetpins.moveNext();
                    counterPin++;
                } else {
                    Data.wcMap_OutDSetpins.moveNext();
                }
                counterforAll++;
                addingAsFilter(pinType, imgPath);
            }, 40);
    } else {
        clearTimeout(intervalIdforType);
    }
    if (counterforAll < Data.wcMap_OutDSetpins.rowCount) {}
    else {
        Pages.pgMap1.contFilter.lblNumberOfResults.text = counterPin.toString();
    }
}