var faruk; // hiç kuullanılmıyor sadece projeye değer katmak için tanımlandı ;)
var DEBUGMODE = false; //TODO it must be false when publishing
var alertObject;
var calledFromMerge = false;
var flagListCustomer; //card setting
var dashboardRefreshFlag = false;
var checkpinflag;
var dsetCardIndex;
var fromPage;
var createPin;
var backFlag = false;
var pgHistory = [];
var isAndroid = false;
var varMaster = stringToHex('137508CD2A0546B3A0F979BC');
var privateKey;
var logPage = "WelcomeScreen";
var gsmNumber = "0";
var gsmOperatorCode = "0";
var gsmCountryCode = "90";
var hdrActivationID = "NotCreated";
var hdrApplicationID = Application.version;
var hdrCustomerNo = "0";
var hdrDeviceID = "";
var hdrDeviceModel = "SF1|" + Device.brandName + "|" + Device.brandModel + "|" + Device.deviceOS + "|" + Device.deviceOSVersion + "|" + Device.modifiedOS;
var hdrIPAddress = Device.deviceIP;
var hdrLanguage = Device.language.toLowerCase();
var langFromReturnedService = "tr";
var languageVersion = "V1"; // TODO it must receive from server
var facebookAppId = "1476242392603696";
var facebookToken = "";
var facebookMessage = "";
var hdrPort = "0";
var hdrSession = "0";
var hdrTckn = "0";
var hdrUserID = "";
var encpin;
var adSoyad = "";
var onlyName = "";
var isRegister = 0;
var numberofCards = 0;
var searchTransaction = "";
var transactionStartDate = "";
var transactionEndDate = "";
var transactionIndex = 0;
var transactionCount = 20;
var transactionType1 = "";
var transactionType2 = "";
var transactionType3 = "";
var transactionType4 = "";
var transactionOrder = "transaction_date";
var arrOrderButtons = [Dialogs.dlgOrder.cont.btnOrderDateDesc, Dialogs.dlgOrder.cont.btnOrderDateAsc, Dialogs.dlgOrder.cont.btnOrderAmountDesc, Dialogs.dlgOrder.cont.btnOrderAmountAsc];
var flagForBtnOrderDate = false;
var flagForBtnOrderAmount = true;
var trxHistoryRefreshFlag = false;
var flagForCountRefresh = true;
var trxType = "";
var trxStatus = "";
var trxTypeForReceievedMoney = "";
var trxTCKN = "";
var selectedTrxType = "";
var lastQueryForTrxHistory = "";
var lastIndexOfTrxHistory = 0;
var trHistory = [];
var kkrCreditCard = [];
var sendMoneyNextPage;
var byDateCount = 0;
var byCountCount = 0;
var countOfRow = 0;
var showRouteFlag = 0;
var internetAlertFlag = false;
//var mapTur = "";
//var mapName = "";
var IsBackFromDetailPage = false;
var ShowRoute = false;
var varMapViewChannelType = "";
var varMapViewSearchText = "";
var varLatitude;
var varLongitude;
var varDistance = 2000;
var varCenterLatitude;
var varCenterLongitude;
var mapTabBar = false;
var flagForSelectImage = "";
var listAllTransactionsCalledFor = "";
//var pgComingMoney_CurrentTransaction = resetTransactionDetailObject();
var transferMoney_CardIndex = 0;
var pgComingMoney_transferMoneySelectedTransactionIndex = -1;
var transferMoneyShowTimeFunc = null;
var successAction = null;
var cancelSendedMoney_transactionRefNo = "";
var cancelrx_transactionRefNo = "";
var resendAtmRef_transactionRefNo = "";
var sendReceiptRef_transactionRefNo = "";
var sendReceiptRef_mail = "";
var getWalletImage_imageId = "";
var currentTransactionRefNo_TransferMoney = "";
var getProfilePicture_senderTckn = "";
var sendMoneyCallingFrom = "";
var sendMoneyCancelledCallMergeBeforeDashboard = false;
var smsResendCount = 0;
var transactionHistoryRefreshFlag = false;
var transferMoneyObject = [];
var transactionDetailObject = resetTransactionDetailObject();
var trxDetailMoneyRequestImageRectRectSize = [];
//CardApplication - Input Parameters
var myPageIndex = 0;
var pgMyPage_ComingFromBack = false;
var appliedCardType = "CREDIT_CARD";
var cardType = "Bonus";
var vcMainCardNumber = "0";
var vcMainCardType = "CreditCard";
var gsmExtensionNumber = "0";
var gsmPhoneType = "MobilePhone"; //para gönderde de kullaniyorum ;)
var vcLimitCurrencyCode = 0;
var vcLimitAmount = 0;
var vcStartDate = "1900-01-01";
var vcEndDate = "1900-01-01";
var myScrollX = 0;
var publicCard1 = false;
var publicCard2 = false;
var publicCard3 = false;
var isThereBonusCard = false;
var isThereDebitCard = false;
var isTherePegasusCard = false;
var isThereVirtualCard = false;
var bonusCard;
var pegasusCard;
//GetAtmBranchList
var atmBranchList = [];
var myChannelType = "";
var myChannelName = "";
var tempChannelType = "";
var tempChannelName = "";
var filterChannelType = "";
var myMapDataRefresh = 0;
var zoomLevel = 15;
var pinList = [];
var activePinList = [];
var distance = 0;
var selectedPinId;
var deviceLatitude = 0;
var deviceLongitude = 0;
var topLatitude;
var bottomLatitude;
var topLongitude;
var bottomLongitude;
var gpsAllowed;
var locationFound = false;
function toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}
//GetAvailableBalance - Output Parameters
var receivedDailyTrx = 0;
var receivedMonthlyTrx = 0;
var receiverDailyLimit = 0;
var receiverMonthlyLimit = 0;
var senderDailyLimit = 0;
var senderMonthlyLimit = 0;
var senderOneOfLimit = 0;
var sentDailyTrx = 0;
var sentMonthlyTrx = 0;
var deletedNotification = "0";
//QRCode
var qrAtmId = "";
var qrAtmReference = "";
var qrTrxRef = "";
var qrTrxAmount = "";
var qrSenderGsmNoAreaCode = "";
var qrSenderGsmNo = "";
var qrSenderExtensionNum = "";
var senderPhoneType = "MobilePhone";
var trxDetailCalledFor = "";
//Notification
var ntTrxType = "";
var ntTrxStatus = "";
var ntType = "";
//Insert ALias
var aliasName = "";
var aliasImage = "";
var aliasGsmNo = "";
var aliasEmail = "";
var aliasCardNo = "";
var aliasImageInsertType = "";
var aliasTransactionType = "";
var saveAliasTypeForSendMoney = "";
var aliasIdForDeleting = "0";
var aliasFacebookUserId = "";
//Page Flags
var fromPage = "";
var cardPgs = 0;
var cardBns = 0;
var walletStatusFlag = 0;
var selectedCardID;
var selectedCardStatus;
var selectedCardIndex = 0;
var selectedCardType = "";
var selectedCardRelatedCardNo;
var selectedRealCardType = "";
var cardPIN;
var tipShowedOnce = false;
var minimizeTime = 0;
var isLoggedIn = false;
var returnToDashbooard = false;
var varSelectedCardNumber;
var varSelectedCardType;
var varQuasiRef;
var varMotoRef;
var varECommerceRef;
var varAutomaticPaymentSelected;
var varStatementDateRef;
var varComingPage = "";
var selectedWalletStatus; // kartın aktif ya da pasif olmadığını gösterir
var varLimitAmountValue;
var varStartDate;
var varEndDate;
var selectedCardName; //CardSetting sayfasından detay bilgilerimde kullanılmak için
var lastStatementDate; //Hesap kesim tarihini değiştirken servis false dönerse kullanılır.
var dateStartVirtualCardTransferLimit = false; //Sanal kart limit tanımlama sayfasında tekrar sayfa görüntülendiğinde tüm verileri temizlemek için kullanılır
var refreshScrollView = false;
var flagLimit = false; // Cart setting Sanal kart limit tanımlama
var flagTransferLimit; // Sanal karta limit tanımlanma işlemi başarılı oldu.
var limitTransferToVirtualCard = false; // Sanal karta limit tanımlandığında MyCards'a tekrar geldiğimiz zaman kullanılır.
var accountForDebitCard = new Array(); // Debit Card ana hesaını değiştir ve yapısı accountForDebitCard.push([accBranchCode, accNumber, accType, accOrder, accCurrency]) şeklindedir.
var accountStatusForDebitCard = new Array(); //  Debit Card ana hesaını statusü - accPrimary
var mainAccountForDB; // Debit Karta Bağlı Ana Hesap
var mainAccountPeriodForDB; // Debit Karta Bağlı Ana Hesap Adı
var flagChangeAccount; // Debit Karta Bağlı Ana Hesap Değişimi başarılı oldu.
var varBranchCode; //executeLinkAcc-----
var varAccountNumber;
var varAccountOrder;
var varAccountType;
var varPrimary; //executeLinkAcc-----
var varIndex; //ListTransactionByCount2 için kullanılır. ÖNEMLİ: LISTTRANSACTIONBYCOUNT İÇİN DEĞİLDİR.
var varCount; //ListTransactionByCount2 için kullanılır. ÖNEMLİ: LISTTRANSACTIONBYCOUNT İÇİN DEĞİLDİR.
var varStartDate; //ListTransactionByCount2 için kullanılır. ÖNEMLİ: LISTTRANSACTIONBYCOUNT İÇİN DEĞİLDİR.
// sendmoney objesini olusturuyoruz.
var currentAvailableBalance;
var currentBalance;
var receiverCardNo;
var currentTaxFee;
var currentCommissionFee;
var currentTransactionFee;
var cvvCount = 0;
var inputTransactionType = 0;
var inputReceiverTypeId = 0;
var inputTransactionDetRefNo;
var inputTransactionRefNo;
var inputSenderCardNo;
var inputSenderCardType;
var inputSenderCardTypeEnum;
var inputReceiverCardNo;
var inputReceiverCardType;
var inputReceiverGsmOperatorCode = 0;
var inputReceiverGsmCountryCode = 90;
var inputReceiverGsmNo = 0;
var inputReceiverGsmNoFull = 0;
var inputAmount;
var inputPaymentType;
var inputMessage = "";
var inputTransactionType = 0;
var inputAliasId = 0;
var inputFacebookName = "";
var inputFacebookSurname = "";
var inputFacebookFullName = "";
var inputFacebookPictureUrl = "";
var selectedFriendFacebookId = "";
var myFacebookId = "";
var inputCvvIndx1 = 0;
var inputCvvIndx2 = 0;
var inputCvvValue1 = 0;
var inputCvvValue2 = 0;
var inputStartDate;
var inputEndDate;
var inputCurrentDate;
var inputTransactionCount;
var dsetCardIndex = 0;
var otpObject = {}
function showdashboard() {
    pgHistory = [];
    if (dashboardRefreshFlag == true) {
        Dialogs.dlgLoading.show();
        returnToDashboard = true;
        SMF.Net.MergeCustomerCard.run();
    } else {
        Pages.pgDashboard.show();
    }
}
function showTransactions() {
    pgHistory = [];
    Pages.pgTransactions.show();
}
function showMap() {
    pgHistory = [];
    Pages.pgMap.show();
}
var sendMoney = {
    modes : {
        cvv : "pending",
        message : "pending",
        paymentType : "pending",
        amount : "pending",
        receiver : "pending",
        card : "pending"
    },
    count : "",
    selecedCardId : "",
    receiverName : "",
    receiverSurname : "",
    calledFrom : ""
};
var selectedContact = null;
var __selecedCardName__ = null;
Object.defineProperty(sendMoney, "selecedCardName", {
    get : function () {
        return this.__selecedCardName__;
    },
    set : function (newValue) {
        this.__selecedCardName__ = newValue;
        Pages.pgSendMoney1.svMain.contTop.contAnimate.contSender.lblCardName.text = newValue;
        Pages.pgSendMoney2.svMain.contTop.contSender.lblCardName1.text = newValue;
        Pages.pgSendMoney3.svMain.contTop.contSender.lblCardName1.text = newValue;
        Pages.pgSendMoney4.svMain.contTop.contSender.lblCardName1.text = newValue;
        Pages.pgSendMoney5.svMain.contTop.contSender.lblCardName1.text = newValue;
        Pages.pgSendMoney6.svMain.contTop.contSender.lblCardName1.text = newValue;
    }
});
var __selecedCardType__ = null;
Object.defineProperty(sendMoney, "selecedCardType", {
    get : function () {
        return this.__selecedCardType__;
    },
    set : function (newValue) {
        this.__selecedCardType__ = newValue;
        inputSenderCardType = newValue == "DB" ? "DebitCard" : newValue == "CR" ? "CreditCard" : newValue == "VC" ? "VirtualCard" : "";
        //inputSenderCardTypeEnum = newValue == "DB" ? "2" : newValue == "CR" ? "1" : newValue == "VC" ? "3" : "0";
        inputSenderCardTypeEnum = newValue;
    }
});
var __selecedCardSendValue__ = null;
Object.defineProperty(sendMoney, "selecedCardSendValue", {
    get : function () {
        return this.__selecedCardSendValue__;
    },
    set : function (newValue) {
        this.__selecedCardSendValue__ = newValue;
        inputSenderCardNo = enc(newValue);
    }
});
var __selecedCardNo__ = null;
Object.defineProperty(sendMoney, "selecedCardNo", {
    get : function () {
        return this.__selecedCardNo__;
    },
    set : function (newValue) {
        this.__selecedCardNo__ = newValue;
        newValue = newValue.slice(0, 4) + " **** **** **" + newValue.slice(-2);
        Pages.pgSendMoney1.svMain.contTop.contAnimate.contSender.lblCardNo.text = newValue;
        Pages.pgSendMoney2.svMain.contTop.contSender.lblCardNo1.text = newValue;
        Pages.pgSendMoney3.svMain.contTop.contSender.lblCardNo1.text = newValue;
        Pages.pgSendMoney4.svMain.contTop.contSender.lblCardNo1.text = newValue;
        Pages.pgSendMoney5.svMain.contTop.contSender.lblCardNo1.text = newValue;
        Pages.pgSendMoney6.svMain.contTop.contSender.lblCardNo1.text = newValue;
    }
});
var __receiverType__ = null;
Object.defineProperty(sendMoney, "receiverType", {
    get : function () {
        return this.__receiverType__;
    },
    set : function (newValue) {
        this.__receiverType__ = newValue;
        if (newValue == "cep") {
            //kart bilgilerini temizliyoruz
            receiverCardNo = "";
            inputReceiverCardNo = "";
            inputReceiverCardType = "";
            //facebook bilgilieriniz temizliyoruz
            inputFacebookName = "";
            inputFacebookSurname = "";
            inputFacebookFullName = "";
            inputFacebookPictureUrl = "";
            selectedFriendFacebookId = "";
            myFacebookId = "";
            /*  if (saveAliasTypeForSendMoney != "GSMNUMBERFROMSAVEDALIAS") {
            inputAliasId = 0;
            }*/
        } else if (newValue == "card") {
            //telefon bilgileirniz temizliyoruz
            inputReceiverGsmOperatorCode = 0;
            inputReceiverGsmNo = 0;
            inputReceiverGsmNoFull = 0;
            //facebook bilgilerini temizliyoruz.
            inputFacebookName = "";
            inputFacebookSurname = "";
            inputFacebookFullName = "";
            inputFacebookPictureUrl = "";
            selectedFriendFacebookId = "";
            myFacebookId = "";
            /* if (saveAliasTypeForSendMoney != "CARDNOFROMSAVEDALIAS") {
            inputAliasId = 0;
            }*/
        } else if (newValue == "facebook") {
            //kart bilgilerini temizliyoruz
            receiverCardNo = "";
            inputReceiverCardNo = "";
            inputReceiverCardType = "";
            //gsm bilgilerini temizliyoruz
            inputReceiverGsmOperatorCode = 0;
            inputReceiverGsmNo = 0;
            inputReceiverGsmNoFull = 0;
            //alias id yi temizliyoruz
            inputAliasId = 0;
        } else {
            //tüm bilgileri temizliyoruz
            receiverCardNo = "";
            inputReceiverCardNo = "";
            inputReceiverCardType = "";
            inputReceiverGsmOperatorCode = 0;
            inputReceiverGsmNo = 0;
            inputReceiverGsmNoFull = 0;
            inputAliasId = 0;
            inputFacebookName = "";
            inputFacebookSurname = "";
            inputFacebookFullName = "";
            inputFacebookPictureUrl = "";
            selectedFriendFacebookId = "";
            myFacebookId = "";
        }
    }
});
var __receiverFullName__ = null;
Object.defineProperty(sendMoney, "receiverFullName", {
    get : function () {
        return this.__receiverFullName__;
    },
    set : function (newValue) {
        this.__receiverFullName__ = newValue;
        Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblRecieverName2.text = newValue;
        Pages.pgSendMoney3.svMain.contTop.contReciever.lblRecieverName1.text = newValue;
        Pages.pgSendMoney4.svMain.contTop.contReciever.lblRecieverName1.text = newValue;
        Pages.pgSendMoney5.svMain.contTop.contReciever.lblRecieverName1.text = newValue;
        Pages.pgSendMoney6.svMain.contTop.contReciever.lblRecieverName1.text = newValue;
        //sendMoney.receiverName = newValue;
        //sendMoney.receiverSurname = "";
        if ((newValue == "Telefon Numarası" || newValue == "Kart Numarası" || this.receiverType == "facebook") && !sendMoney.aliasId) {
            // alert(arguments.callee.caller.name);
            if (newValue == "Kart Numarası") {
                saveAliasTypeForSendMoney = "CARDNOFROMENTERED";
            } else if (newValue == "Telefon Numarası") {
                saveAliasTypeForSendMoney = "GSMNUMBERFROMENTERED";
            } else{
                saveAliasTypeForSendMoney = "CONTACTFROMFACEBOOK";
            }
            Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblRecieverName2.visible = false;
            Pages.pgSendMoney3.svMain.contTop.contReciever.lblRecieverName1.visible = false;
            Pages.pgSendMoney4.svMain.contTop.contReciever.lblRecieverName1.visible = false;
            Pages.pgSendMoney5.svMain.contTop.contReciever.lblRecieverName1.visible = false;
            Pages.pgSendMoney6.svMain.contTop.contReciever.lblRecieverName1.visible = false;
            Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblRecieverPhone2.visible = false;
            Pages.pgSendMoney3.svMain.contTop.contReciever.lblRecieverPhone1.visible = false;
            Pages.pgSendMoney4.svMain.contTop.contReciever.lblRecieverPhone1.visible = false;
            Pages.pgSendMoney5.svMain.contTop.contReciever.lblRecieverPhone1.visible = false;
            Pages.pgSendMoney6.svMain.contTop.contReciever.lblRecieverPhone1.visible = false;
            Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblAlone.visible = true;
            Pages.pgSendMoney3.svMain.contTop.contReciever.lblAlone.visible = true;
            Pages.pgSendMoney4.svMain.contTop.contReciever.lblAlone.visible = true;
            Pages.pgSendMoney5.svMain.contTop.contReciever.lblAlone.visible = true;
            Pages.pgSendMoney6.svMain.contTop.contReciever.lblAlone.visible = true;
        } else {
            Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblRecieverName2.visible = true;
            Pages.pgSendMoney3.svMain.contTop.contReciever.lblRecieverName1.visible = true;
            Pages.pgSendMoney4.svMain.contTop.contReciever.lblRecieverName1.visible = true;
            Pages.pgSendMoney5.svMain.contTop.contReciever.lblRecieverName1.visible = true;
            Pages.pgSendMoney6.svMain.contTop.contReciever.lblRecieverName1.visible = true;
            Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblRecieverPhone2.visible = true;
            Pages.pgSendMoney3.svMain.contTop.contReciever.lblRecieverPhone1.visible = true;
            Pages.pgSendMoney4.svMain.contTop.contReciever.lblRecieverPhone1.visible = true;
            Pages.pgSendMoney5.svMain.contTop.contReciever.lblRecieverPhone1.visible = true;
            Pages.pgSendMoney6.svMain.contTop.contReciever.lblRecieverPhone1.visible = true;
            Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblAlone.visible = false;
            Pages.pgSendMoney3.svMain.contTop.contReciever.lblAlone.visible = false;
            Pages.pgSendMoney4.svMain.contTop.contReciever.lblAlone.visible = false;
            Pages.pgSendMoney5.svMain.contTop.contReciever.lblAlone.visible = false;
            Pages.pgSendMoney6.svMain.contTop.contReciever.lblAlone.visible = false;
        }
    }
});
var __receiverBanner__ = null;
Object.defineProperty(sendMoney, "receiverBanner", {
    get : function () {
        return this.__receiverBanner__;
    },
    set : function (newValue) {
        this.__receiverBanner__ = newValue;
        if (this.__receiverFullName__ == "Kart Numarası" || saveAliasTypeForSendMoney == "CARDNOFROMSAVEDALIAS")
            newValue = newValue.slice(0, 4) + " **** **** **" + newValue.slice(-2);
        Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblRecieverPhone2.text = newValue;
        Pages.pgSendMoney3.svMain.contTop.contReciever.lblRecieverPhone1.text = newValue;
        Pages.pgSendMoney4.svMain.contTop.contReciever.lblRecieverPhone1.text = newValue;
        Pages.pgSendMoney5.svMain.contTop.contReciever.lblRecieverPhone1.text = newValue;
        Pages.pgSendMoney6.svMain.contTop.contReciever.lblRecieverPhone1.text = newValue;
        Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblAlone.text = newValue;
        Pages.pgSendMoney3.svMain.contTop.contReciever.lblAlone.text = newValue;
        Pages.pgSendMoney4.svMain.contTop.contReciever.lblAlone.text = newValue;
        Pages.pgSendMoney5.svMain.contTop.contReciever.lblAlone.text = newValue;
        Pages.pgSendMoney6.svMain.contTop.contReciever.lblAlone.text = newValue;
    }
});
var __receiverCardType__ = null;
Object.defineProperty(sendMoney, "receiverCardType", {
    get : function () {
        return this.__receiverCardType__;
    },
    set : function (newValue) {
        this.__receiverCardType__ = newValue;
        inputReceiverCardType = newValue;
    }
});
var __receiverSendValue__ = null;
Object.defineProperty(sendMoney, "receiverSendValue", {
    get : function () {
        return this.__receiverSendValue__;
    },
    set : function (newValue) {
        this.__receiverSendValue__ = newValue;
        if (sendMoney.receiverType == "card")
            inputReceiverCardNo = newValue;
    }
});
var __receiverTel__ = null;
Object.defineProperty(sendMoney, "receiverTel", {
    get : function () {
        return this.__receiverTel__;
    },
    set : function (newValue) {
        this.__receiverTel__ = newValue;
        inputReceiverGsmOperatorCode = newValue.slice(-10, -7);
        inputReceiverGsmNo = newValue.slice(-7);
        inputReceiverGsmNoFull = newValue;
    }
});
var __amount__ = null;
Object.defineProperty(sendMoney, "amount", {
    get : function () {
        return this.__amount__;
    },
    set : function (newValue) {
        this.__amount__ = newValue;
        inputAmount = newValue;
        Pages.pgSendMoney3.svMain.contTop.contAnimate.contAnimate2.contAmount.lblAmount2.text = newValue + " TL";
        Pages.pgSendMoney4.svMain.contTop.contAmount.lblAmount22.text = newValue + " TL";
        Pages.pgSendMoney5.svMain.contTop.contAmount.lblAmount22.text = newValue + " TL";
        Pages.pgSendMoney6.svMain.contTop.contAmount.lblAmount22.text = newValue + " TL";
    }
});
var __transferType__ = null;
Object.defineProperty(sendMoney, "transferType", {
    get : function () {
        return this.__transferType__;
    },
    set : function (newValue) {
        this.__transferType__ = newValue;
        inputPaymentType = newValue == getTextFromLangVar("pgSendMoney4_OtherPayments") ? "OtherPayments" : newValue == getTextFromLangVar("pgSendMoney4_Rent") ? "Rent" : newValue == getTextFromLangVar("pgSendMoney4_OfficeRent") ? "OfficeRent" : newValue == getTextFromLangVar("pgSendMoney4_OtherRents") ? "OtherRents" : "OtherPayments";
        Pages.pgSendMoney4.svMain.contTop.contAnimate.contPaymentType.Copy2oflblCardName12.text = newValue;
        Pages.pgSendMoney5.svMain.contTop.contPaymentType.Copy2oflblCardName1.text = newValue;
        Pages.pgSendMoney6.svMain.contTop.contPaymentType.Copy2oflblCardName1.text = newValue;
    }
});
var __message__ = null;
Object.defineProperty(sendMoney, "message", {
    get : function () {
        return this.__message__;
    },
    set : function (newValue) {
        this.__message__ = newValue;
        Pages.pgSendMoney5.svMain.contTop.contAnimate.contMessage.lblMessage421.text = newValue;
        Pages.pgSendMoney6.svMain.contTop.contMessage.lblMessage42.text = newValue;
        //alert(getTextFromLangVar("pgSendMoney6_noMessage") + " _ " + newValue);
        if (newValue != getTextFromLangVar("pgSendMoney6_noMessage")) {
            inputMessage = newValue;
        }
    }
});
var __aliasID__ = null;
Object.defineProperty(sendMoney, "aliasId", {
    get : function () {
        return this.__aliasID__;
    },
    set : function (newValue) {
        this.__aliasID__ = newValue;
        if (newValue)
            inputAliasId = newValue;
        else
            inputAliasId = 0;
    }
});
function sendMoneyPage() {
    try {
        for (property in sendMoney.modes) {
            tempPage = modeSwitch(property);
            if (tempPage) {
                sendMoneyNextPage = tempPage;
            }
        }
        return (sendMoneyNextPage);
    } catch (exx) {
        alertObject = alert(exx);
    }
}
function modeSwitch(modeCase) {
    switch (modeCase) {
    case "cvv":
          return(pageSwitch(sendMoney.modes.cvv, Pages.pgSendMoney6));
          break;
    case "message":
          return(pageSwitch(sendMoney.modes.message, Pages.pgSendMoney5));
          break;
    case "paymentType":
          return(pageSwitch(sendMoney.modes.paymentType, Pages.pgSendMoney4));
          break;
    case "amount":
          return(pageSwitch(sendMoney.modes.amount, Pages.pgSendMoney3));
          break;
    case "receiver":
        return (pageSwitch(sendMoney.modes.receiver, Pages.pgSendMoney2));
          break;
    case "card":
        return (pageSwitch(sendMoney.modes.card, Pages.pgSendMoney1));
           break;
    }
}
function pageSwitch(cases, _page) {
    log("page: " + _page.name + "case: " + cases);
    switch (cases) {
    case "pending":
        return (_page);
           break;
    case "done":
        return null;
          break;
    case "passed":
        return null;
          break;
    case "edit":
        return null;
          break;
    }
}
function pageChange(nextPage, contMain, contAnim) {
    contMain.visible = true;
    contAnim.alpha = 0;
    contAnim.animate({
        property : 'Alpha',
        endValue : 100,
        motionEase : 3,
        duration : "300",
        onFinish : function () {
            nextPage.show();
        }
    });
}
function setFee(feeText, kmhFee) {
    Pages.pgSendMoney6.svMain.contBottom.contOnay.top = Pages.pgSendMoney6.svMain.contBottom.contBottom2.height + Pages.pgSendMoney6.svMain.contBottom.contBottom2.top;
    if (kmhFee) {
        Pages.pgSendMoney6.svMain.contBottom.contOnay.height = Pages.pgSendMoney6.svMain.contBos.height * 10;
        Pages.pgSendMoney6.svMain.contBottom.contOnay.imgbtnOnayla.top = "%60";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.imgbtnOnayla.height = "%28.67%";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.lblUcret.top = "%1.33";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.lblUcret.height = "%29.33";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.lblInfo.text = getTextFromLangVar("pgSendMoney6_lblInfoKMHPart1") + " " + kmhFee + " " + getTextFromLangVar("pgSendMoney6_lblInfoKMHPart2");
        Pages.pgSendMoney6.svMain.contBottom.contOnay.lblInfo.visible = true;
    } else {
        Pages.pgSendMoney6.svMain.contBottom.contOnay.height = Pages.pgSendMoney6.svMain.contBos.height * 7;
        Pages.pgSendMoney6.svMain.contBottom.contOnay.imgbtnOnayla.top = "%45.45";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.imgbtnOnayla.height = "%39.09";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.lblUcret.top = "%1.82";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.lblUcret.height = "%40";
        Pages.pgSendMoney6.svMain.contBottom.contOnay.lblInfo.visible = false;
    }
    Pages.pgSendMoney6.svMain.contBottom.height = Pages.pgSendMoney6.svMain.contBottom.contOnay.top + Pages.pgSendMoney6.svMain.contBottom.contOnay.height;
    Pages.pgSendMoney6.svMain.contBottom.contOnay.lblUcret.text = feeText;
    Pages.pgSendMoney6.svMain.contBottom.contDevam.visible = false;
    Pages.pgSendMoney6.svMain.contBottom.contOnay.visible = true;
    //Pages.pgSendMoney6.svMain.contBottom.contBottom2.Rectangle1.visible = true;
    Pages.pgSendMoney6.svMain.contentHeight = Pages.pgSendMoney6.svMain.contBottom.top + Pages.pgSendMoney6.svMain.contBottom.contOnay.top + Pages.pgSendMoney6.svMain.contBottom.contOnay.height;
    Pages.pgSendMoney6.svMain.scrollY = Pages.pgSendMoney6.svMain.contentHeight - Pages.pgSendMoney6.svMain.height;
}
function clearSendMoney() {
    for (property in sendMoney) {
        if (property == "modes") {
            for (prp in sendMoney.modes) {
                sendMoney.modes[prp] = 'pending';
            }
        } else {
            sendMoney[property] = null;
        }
    }
    inputFacebookName = "";
    inputFacebookSurname = "";
    inputFacebookFullName = "";
    inputFacebookPictureUrl = "";
    selectedFriendFacebookId = "";
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contDuzenliCheck.imgCheck.image = "icon_checkbox.png";
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contDate2.visible = false;
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contCount.visible = false;
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contDate1.imgBg2.image = "bg_date_bottom.png";
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contDate1.blBanner1.text = getTextFromLangVar("pgSendMoney6_blBanner1_CaseOrdered");
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contDate1.DatePicker1.date = new Date();
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contDate2.lblDate2.text = getTextFromLangVar("pgSendMoney6_blBanner1_CaseFuture");
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contCount.lblCount.text = "0";
    Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contTel.edtPhoneNumber.text = "";
    Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo1.text = "";
    Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo2.text = "";
    Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo3.text = "";
    Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo4.text = "";
    Pages.pgSendMoney3.svMain.contBottom.contTutar.contTInprogress.contAmountEdt.edtAmount.text = "";
    Pages.pgSendMoney5.svMain.contBottom.contMesaj.contMInprogress.Container1.EditBox1.text = "";
    Pages.pgSendMoney6.svMain.contBottom.contBottom2.Rectangle1.visible = false;
    count = 1;
}
function cancelSendMoney(backPage, fonk, showalert) {
    if (showalert != false) {
        alertObject = alert({
                message : getTextFromLangVar("pgSendMoney6_alertCancelSendMoney"),
                title : getTextFromLangVar("global_alertTitle1"),
                alpha : 1,
                firstButtonText : getTextFromLangVar("global_alertBtn2"),
                OnFirstButtonPressed : function () {
                    clearSendMoney();
                    if (backPage) {
                        if (backPage == Pages.pgTransactionHistory) {
                            callTrxHistory();
                        } else {
                            backPage.show();
                        }
                    } else if (fonk) {
                        fonk();
                    } else {
                        pageBack();
                    }
                },
                secondButtonText : getTextFromLangVar("global_alertBtn1"),
                OnSecondButtonPressed : function () {}
            });
    } else {
        clearSendMoney();
        if (backPage) {
            if (backPage == Pages.pgTransactionHistory) {
                callTrxHistory();
            } else {
                backPage.show();
            }
        } else if (fonk) {
            fonk();
        } else {
            pageBack();
        }
    }
}
/*DASHBOARD huseyin**/
var isWelcomeScreenEnabled = false;
function refreshDashboardTipStatus() {
    isWelcomeScreenEnabled = true;
    tipShowedOnce = false;
    walletStatusFlag = 0;
}
/**DASHBOARD huseyin END*/
/*Ask Money*/
//Tekrar İstede kullanılan obje
var askMoneyNewSuggestion;
var isAskMoneyNewSuggestion = false;
function closeDialog(dialog) {
    dialog.close(SMF.UI.MotionEase.plain, SMF.UI.TransitionEffect.none, true);
}
function openDialog(dialog) {
    dialog.show(SMF.UI.MotionEase.plain, SMF.UI.TransitionEffect.none, true, true, false);
}
var cameraDelegateMethod;
var contactDelegateMethod;
var serviceInput_askMoneyAmount = 0;
var serviceInput_askMoneyMessageText = "";
var serviceInput_askMoneyMessageImage = null;
var serviceInput_askMoneyReceiverGsmNumberNumber;
var serviceInput_askMoneyReceiverGsmNumberAreaCode;
var serviceInput_askMoneyReceiverAliasId;
var serviceInput_askMoneySurname;
var serviceInput_askMoneyName;
var serviceInput_askMoneyGsmNoNumber;
var serviceInput_askMoneyGsmNoAreaCode;
function setAskMoneyServiceParameters(amount, message, messageImage, receiverGsmNumber, receiverGsmAreaCode, receiverAliasId) {
    serviceInput_askMoneyAmount = ((amount == null) ? "" : amount);
    serviceInput_askMoneyMessageText = (message == null || (message != null && message.length == 0)) ? "" : message;
    //(message == null || (message != null && message.length == 0)) ? (hdrLanguage == "tr" ? adSoyad + " " + getTextFromLangVar("pgAskMoney_fromyou") + " " + amount + " TL " + getTextFromLangVar("pgAskMoney_asking") : adSoyad + " " + getTextFromLangVar("pgAskMoney_asking") + " " + amount + " TL " + getTextFromLangVar("pgAskMoney_fromyou")) : message;
    /* Data.dsAskMoneyDataset.moveFirst();
    Data.dsAskMoneyDataset.Image = messageImage == null ? "" : messageImage;
    Data.dsAskMoneyDataset.commit();
    Data.dsAskMoneyDataset.refresh();*/
    serviceInput_askMoneyReceiverGsmNumberNumber = receiverGsmNumber == null ? "" : receiverGsmNumber;
    serviceInput_askMoneyReceiverGsmNumberAreaCode = receiverGsmAreaCode == null ? "" : receiverGsmAreaCode;
    serviceInput_askMoneyReceiverAliasId = receiverAliasId == null ? "0" : receiverAliasId;
    var arr = adSoyad.split(" ");
    var senderName = "";
    var senderSurname = "";
    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length - 1)
            senderName += arr[i];
        else
            senderSurname = arr[i];
    }
    serviceInput_askMoneyName = senderName == null ? "" : senderName;
    serviceInput_askMoneySurname = senderSurname == null ? "" : senderSurname;
    serviceInput_askMoneyGsmNoNumber = gsmNumber == null ? "" : gsmNumber;
    serviceInput_askMoneyGsmNoAreaCode = gsmOperatorCode == null ? "" : gsmOperatorCode;
}
function refreshPgAskMoney() {
    askMoney = null;
    selectedReceiver = null;
    Pages.pgAskMoney.svMain.contBut.AskMoneyButton.enabled = false;
    Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.ImageButtonPhoto.defaultImage = "icon_camera.png";
    Data.dsAskMoneyDataset.moveFirst();
    Data.dsAskMoneyDataset.Image = "";
    Data.dsAskMoneyDataset.commit();
    Data.dsAskMoneyDataset.refresh();
    Pages.pgAskMoney.svMain.contTop.contAnimateAmount.visible = false;
    Pages.pgAskMoney.svMain.contTop.contAnimateReceiver.visible = false;
    Pages.pgAskMoney.svMain.contTop.contAnimateMessage.visible = false;
    Pages.pgAskMoney.svMain.contAliciSecimi.visible = true;
    Pages.pgAskMoney.svMain.contAliciSecimi.contASInprogress.visible = true;
    Pages.pgAskMoney.svMain.contAliciSecimi.contASPending1.visible = false;
    Pages.pgAskMoney.svMain.contTutar.visible = true;
    Pages.pgAskMoney.svMain.contTutar.contTPending.visible = true;
    Pages.pgAskMoney.svMain.contTutar.contTInprogress.visible = false;
    Pages.pgAskMoney.svMain.contMesaj.contMPending.visible = true;
    Pages.pgAskMoney.svMain.contMesaj.contMInprogress.visible = false;
    Pages.pgAskMoney.svMain.contMesaj.visible = true;
    Pages.pgAskMoney.svMain.contAliciSecimi.contASInprogress.visible = true;
    Pages.pgAskMoney.svMain.contAliciSecimi.contASInprogress.contTel.edtPhoneNumber.text = "";
    Pages.pgAskMoney.svMain.contTutar.contTInprogress.ContainerT.EditBoxAmount.text = "";
    Pages.pgAskMoney.svMain.contTutar.contTPending.lblAmountBanner.text = getTextFromLangVar("pgAskMoney_lblAmountBanner");
    Pages.pgAskMoney.svMain.contTutar.contTPending.imgbtnEditAmountBottom.visible = false;
    Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.EditBoxMessage.text = "";
    Pages.pgAskMoney.svMain.contMesaj.contMPending.lblMesajBanner.text = getTextFromLangVar("pgAskMoney_lblMesajBanner");
    Pages.pgAskMoney.svMain.contMesaj.contMPending.imgbtnEditMessage.visible = false;
    Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.Label11.visible = true;
    Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.Label21.text = 40
}
/** for Card's related Card's Numbers and ID's*/
var cardsAndIds;
function Create2DArray(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}
/**END OF Ask Money*/
/**START OF Select Alias*/
/**aliasTransactionTypeQueryParam  phone=1, card=2, phone&Card=3*/
var aliasTransactionTypeQueryParam = 1;
var aliasQueryParam = "";
var needRefreshAliasData = true;
/** aliasPageForSelectOrShow Select=0, Show=1 */
var aliasPageForSelectOrShow = 0;
var aliasListener;
function startSelectAliasPage(aliasType, _listener, pageType) {
    aliasTransactionTypeQueryParam = aliasType;
    aliasListener = _listener;
    aliasPageForSelectOrShow = pageType;
    if (aliasType == 1) { //sadece telefon numarası olan kayıtlar
        Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.query = 'SELECT "ListAliasOfCustomer_OutDTblb_WLTAliasModel".* FROM "ListAliasOfCustomer_OutDTblb_WLTAliasModel"   WHERE ("ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_ReceiverCardNo"  LIKE :"%aliasQuery%" OR "ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_ReceiverGsmNo" LIKE :"%aliasQuery%" OR (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace("ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_AliasName", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c")) LIKE (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(:"%aliasQuery%", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c"))) AND ("ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_TransactionType" = :"transactionQueryParam" OR "ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_TransactionType" = 3)';
    } else {
        //alertObject = alert(aliasType);
        Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.query = 'SELECT "ListAliasOfCustomer_OutDTblb_WLTAliasModel".* FROM "ListAliasOfCustomer_OutDTblb_WLTAliasModel"    WHERE ("ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_ReceiverCardNo"  LIKE :"%aliasQuery%" OR "ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_ReceiverGsmNo" LIKE :"%aliasQuery%" OR (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace("ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_AliasName", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c")) LIKE (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(:"%aliasQuery%", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c"))) ';
    }
    aliasQueryParam = "";
    Pages.pgSelectAlias.Container1.contTel.edtPhoneNumber1.text = "";
    Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.refresh();
    Data.notify(Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel);
}
function refreshAliasData() {
    clearAliasData();
    SMF.Net.ListAliasOfCustomer.run(true);
}
function clearAliasData() {
    Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.query = 'SELECT "ListAliasOfCustomer_OutDTblb_WLTAliasModel".* FROM "ListAliasOfCustomer_OutDTblb_WLTAliasModel"';
    aliasTransactionTypeQueryParam = 0;
    Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.refresh();
    Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.clear();
    Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.commit();
    Data.ListAliasOfCustomer_OutDSetb_WLTAliasModel.query = 'SELECT "ListAliasOfCustomer_OutDTblb_WLTAliasModel".* FROM "ListAliasOfCustomer_OutDTblb_WLTAliasModel"    WHERE ("ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_ReceiverCardNo"  LIKE :"%aliasQuery%" OR "ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_ReceiverGsmNo" LIKE :"%aliasQuery%" OR (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace("ListAliasOfCustomer_OutDTblb_WLTAliasModel"."b_AliasName", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c")) LIKE (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(:"%aliasQuery%", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c"))) ';
}
/**END OF Select Alias*/
/** START OF ORDEREDTRANSACTIONS*/
var paramCardNumberForName;
var paramAliasID;
/*
var varOrderedTrxType = "ILERI";
var varIsBackFromCancelationToOrderedTrxPage = false;
function refreshOrderedTransactionsPage() {
refreshOrderedTransactionsData();
//    pgOrderedTrx_trxType = "ILERI";
}
 */
var pgOrderedTrx_FilterFunc = null;
var pgOrderedTrx_RefreshPage = false;
var pgOrderedTrx_trxType = "";
function openOrderedTrxPage(trxTypeStr) {
    pgOrderedTrx_trxType = trxTypeStr;
    pgOrderedTrx_RefreshPage = true;
    showPage(Pages.pgMyPage, Pages.pgOrderedTransaction, true);
}
/** END OF ORDEREDTRASNACTIONS*/
//toplam bakiye objesini olusturuyoruz
var toplamBakiye = {};
var amountValue = 0;
Object.defineProperty(toplamBakiye, "amount", {
    get : function () {
        return this.amountValue;
    },
    set : function (newValue) {
        newValue = newValue.toString().replace(".", "");
        newValue = newValue.toString().replace(",", ".");
        log("newValue: " + newValue);
        amountValue = amountValue + parseFloat(newValue);
        tempAmount = numberWithCommas(amountValue);
        Pages.pgDashboard.conInfo.lblAmount.text = tempAmount[0] + "," + tempAmount[1] + " TL";
    }
});
function Global_Events_OnStart(e) {
    try {
        Google.Analytics.initTracker({
            trackingId : "UA-41611957-2",
            dispatchInterval : 120,
            logLevel : 4,
            trackUncaughtExceptions : true
        });
        //forTest-true
        Google.Analytics.setDryRun(false);
        SMF.UI.StatusBar.color = "#FF6600";
        if (SMF.restoreVariable('languageVersion') != null) {
            languageVersion = SMF.restoreVariable('languageVersion');
        }
        if (SMF.restoreVariable('langFromReturnedService') != null) {
            langFromReturnedService = SMF.restoreVariable('langFromReturnedService');
        }
        changeLang(Device.language, true);
        langValuesFromOfflineDB();
        SMF.Net.ListParametricText.run(true);
        if (SMF.restoreVariable('isRegister') != null) {
            isRegister = SMF.restoreVariable('isRegister');
        }
        if (SMF.restoreVariable('hdrActivationID') != null) {
            hdrActivationID = SMF.restoreVariable('hdrActivationID');
        }
        if (SMF.restoreVariable('hdrCustomerNo') != null) {
            hdrCustomerNo = SMF.restoreVariable('hdrCustomerNo');
        }
        if (SMF.restoreVariable('adSoyad') != null) {
            adSoyad = SMF.restoreVariable('adSoyad');
        }
        if (SMF.restoreVariable('privateKey') != null) {
            privateKey = SMF.restoreVariable('privateKey');
        }
        if (Device.deviceOS == "iOS") {
            backBtnVisible();
            Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.imgOn1.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.lblOff1.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.lblOn1.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.switchBtnMailTeleOrd1.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.imgOn2.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.lblOff2.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.lblOn2.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.switchBtnQuashiCash1.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contLimit1.imgOn3.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contLimit1.lblOff3.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contLimit1.lblOn3.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contLimit1.switchBtnLimit1.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.imgOn4.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblOff4.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblOn4.visible = false;
            Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.switchBtnCardActive1.visible = true;
            hdrDeviceID = Device.vendorId;
        } else {
            backBtnUnvisible();
            Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.imgOn1.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.lblOff1.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.lblOn1.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.imgOn2.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.lblOn2.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.lblOff2.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contLimit1.imgOn3.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contLimit1.lblOff3.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contLimit1.lblOn3.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.imgOn4.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblOff4.visible = true;
            Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblOn4.visible = true;
            hdrDeviceID = Device.IMEI;
            isAndroid = true;
            Pages.pgWelcomeScreen.showStatusBar = true;
        }
        if (isRegister == 1) {
            log("privateKey: " + privateKey + " varMaster: " + varMaster + " hdrActivationID: " + hdrActivationID);
            tempPin = Cryptology.des3({
                    data : privateKey,
                    masterKey : varMaster,
                    modeOfOperation : "ecb",
                    initializationVector : "",
                    paddingType : "pkcs7",
                    mode : "decrypt",
                    inputFormat : 0, //inputlarımız base64 formatında
                    resultFormat : "byte"
                });
            encpin = tempPin.slice(0, 24);
            log("encpin: " + encpin);
            hdrActivationID = Cryptology.des3({
                    data : hdrActivationID,
                    masterKey : varMaster,
                    modeOfOperation : "ecb",
                    initializationVector : "",
                    paddingType : "pkcs7",
                    mode : "decrypt",
                    inputFormat : 0,
                    resultFormat : "byte"
                });
            log("hdrActivationID: " + hdrActivationID);
            tempcrypto = Cryptology.des3({
                    data : hdrActivationID,
                    masterKey : stringToHex(encpin),
                    modeOfOperation : "ecb",
                    initializationVector : "",
                    paddingType : "pkcs7",
                    mode : "encrypt",
                    inputFormat : "byte",
                    resultFormat : "hex"
                });
            hdrActivationID = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(tempcrypto));
            logPage = "Login";
            SMF.Net.InsertPageTransitionLog.run(true);
            Pages.pgLogin.show(0, 0, 0, false, false);
        }
         if (isAndroid)
                Notifications.remote.setCustomNotificationKeys({
                alertTitle : "payload.aps.ia",
                alertBody : "payload.aps.alert",
        });
        SMF.Net.InsertPageTransitionLog.run(true);
        setTabBar();
    } catch (exx) {
        alertObject = alert(exx);
    }
}
function backBtnVisible() {
    try {
        Pages.pgAddAndInviteFriend.nvBar.btnBack.visible = true;
        Pages.pgAddNewPerson.nvBar.btnBack.visible = true;
        Pages.pgAskMoney.nvBar.btnBack.visible = true;
        Pages.pgCardApprove.nvBar.btnBack.visible = true;
        Pages.pgCardApproveDetail.nvBar.btnBack.visible = true;
        Pages.pgCardDetailInfo.nvBar.btnBack.visible = true;
        Pages.pgCardSetting.nvBar.btnBack.visible = true;
        Pages.pgCardSettingDebitCard.nvBar.btnBack.visible = true;
        Pages.pgInviteFriend.nvBar.btnBack.visible = true;
        Pages.pgLimitInfo.nvBar.btnBack.visible = true;
        Pages.pgMapDetail.nvBar.btnBack.visible = true;
        Pages.pgMyCards.nvBar.btnBack.visible = true;
        Pages.pgMyPage.nvBar.btnBack.visible = true;
        Pages.pgNotifications.nvBar.btnBack.visible = true;
        Pages.pgOrderedTransaction.nvBar.btnBack.visible = true;
        Pages.pgReceivedMoneyList.nvBar.btnBack.visible = true;
        Pages.pgSelectAlias.nvBar.btnBack.visible = true;
        Pages.pgSendMoney1.nvBar.btnBack.visible = true;
        Pages.pgSendMoney2.nvBar.btnBack.visible = true;
        Pages.pgSendMoney3.nvBar.btnBack.visible = true;
        Pages.pgSendMoney4.nvBar.btnBack.visible = true;
        Pages.pgSendMoney5.nvBar.btnBack.visible = true;
        Pages.pgSendMoney6.nvBar.btnBack.visible = true;
        Pages.pgStatementDate.nvBar.btnBack.visible = true;
        Pages.pgTransactionDetail.nvBar.btnBack.visible = true;
        Pages.pgTransactionQR.nvBar.btnBack.visible = true;
        Pages.pgTransferMoney.nvBar.btnBack.visible = true;
        Pages.pgVirtualCardTransferLimit.nvBar.btnBack.visible = true;
        Pages.pgVirtualCardTransferLimit2.nvBar.btnBack.visible = true;
        Pages.pgExpressWallet.nvBar.btnBack.visible = true;
        Pages.pgUsageSummary.nvBar.btnBack.visible = true;
        Pages.pgHelp.nvBar.btnBack.visible = true;
        Pages.pgAbout.nvBar.btnBack.visible = true;
    } catch (err) {
        alertObject = alert(err.message);
    }
}
function backBtnUnvisible() {
    try {
        Pages.pgAddAndInviteFriend.nvBar.btnBack.visible = false;
        Pages.pgAddNewPerson.nvBar.btnBack.visible = false;
        Pages.pgAskMoney.nvBar.btnBack.visible = false;
        Pages.pgCardApprove.nvBar.btnBack.visible = false;
        Pages.pgCardApproveDetail.nvBar.btnBack.visible = false;
        Pages.pgCardDetailInfo.nvBar.btnBack.visible = false;
        Pages.pgCardSetting.nvBar.btnBack.visible = false;
        Pages.pgCardSettingDebitCard.nvBar.btnBack.visible = false;
        Pages.pgInviteFriend.nvBar.btnBack.visible = false;
        Pages.pgLimitInfo.nvBar.btnBack.visible = false;
        Pages.pgMapDetail.nvBar.btnBack.visible = false;
        Pages.pgMyCards.nvBar.btnBack.visible = false;
        Pages.pgMyPage.nvBar.btnBack.visible = false;
        Pages.pgNotifications.nvBar.btnBack.visible = false;
        Pages.pgOrderedTransaction.nvBar.btnBack.visible = false;
        Pages.pgReceivedMoneyList.nvBar.btnBack.visible = false;
        Pages.pgSelectAlias.nvBar.btnBack.visible = false;
        Pages.pgSendMoney1.nvBar.btnBack.visible = false;
        Pages.pgSendMoney2.nvBar.btnBack.visible = false;
        Pages.pgSendMoney3.nvBar.btnBack.visible = false;
        Pages.pgSendMoney4.nvBar.btnBack.visible = false;
        Pages.pgSendMoney5.nvBar.btnBack.visible = false;
        Pages.pgSendMoney6.nvBar.btnBack.visible = false;
        Pages.pgStatementDate.nvBar.btnBack.visible = false;
        Pages.pgTransactionDetail.nvBar.btnBack.visible = false;
        Pages.pgTransactionQR.nvBar.btnBack.visible = false;
        Pages.pgTransferMoney.nvBar.btnBack.visible = false;
        Pages.pgVirtualCardTransferLimit.nvBar.btnBack.visible = false;
        Pages.pgVirtualCardTransferLimit2.nvBar.btnBack.visible = false;
        Pages.pgExpressWallet.nvBar.btnBack.visible = false;
        Pages.pgUsageSummary.nvBar.btnBack.visible = false;
        Pages.pgHelp.nvBar.btnBack.visible = false;
        Pages.pgAbout.nvBar.btnBack.visible = false;
    } catch (err) {
        alertObject = alert(err.message);
    }
}
function code2Message(code) {
    var message = getTextFromLangVar("ERROR_" + code);
    //alert(message + " _ " + getTextFromLangVar("ERROR_" + code) + " _ " + code);
    return message == null ? getTextFromLangVar("ERROR_default") : message == "" ? getTextFromLangVar("ERROR_default") : message;
}
function code2AlertTitle(code) {
    var title = "";
    if (code == "34053") {
        title = getTextFromLangVar("global_alertTitle3");
    } else {
        title = getTextFromLangVar("global_alertTitle1");
    }
    return title;
}
function showError(dset) {
    try {
        //alert(dset.b_Code + );
        var code = dset.b_Code;
        if (!code) {
            code = dset.c_Code;
        }
        var forceLogin = (code == "34020" || code == "34012" || code == "34050" || code == "34051") ? true : false; // logine yonlendir
        var forceAuth = (code == "34013" || code == "34014" || code == "34016" || code == "34017" || code == "34018" || code == "34054" || code == "34053") ? true : false; // aktivasyona yonlendir
        //alert(code + " _ " + getTextFromLangVar("ERROR_" + code));
        if (code != "34002") {
            alertObject = alert({
                    message : code2Message(code),
                    title : code2AlertTitle(code),
                    alpha : 1,
                    firstButtonText : getTextFromLangVar("global_alertBtn2"),
                    OnFirstButtonPressed : function () {
                        if (forceLogin) {
                            pgHistory = [];
                            Pages.pgLogin.show();
                        } else if (forceAuth) {
                            pgHistory = [];
                            Pages.pgWelcomeScreen.show();
                        }
                        Dialogs.dlgLoading.close();
                        if (code == "6116" || code == "6193") {
                            if (Pages.pgSendMoney6.svMain.contBottom.contBottom2.contCVV.contCVVInprogress.edtCvv1.enabled == true)
                                Pages.pgSendMoney6.svMain.contBottom.contBottom2.contCVV.contCVVInprogress.edtCvv1.text = "";
                            if (Pages.pgSendMoney6.svMain.contBottom.contBottom2.contCVV.contCVVInprogress.edtCvv2.enabled == true)
                                Pages.pgSendMoney6.svMain.contBottom.contBottom2.contCVV.contCVVInprogress.edtCvv2.text = "";
                            if (Pages.pgSendMoney6.svMain.contBottom.contBottom2.contCVV.contCVVInprogress.edtCvv3.enabled == true)
                                Pages.pgSendMoney6.svMain.contBottom.contBottom2.contCVV.contCVVInprogress.edtCvv3.text = "";
                            cvvCount++;
                            if (cvvCount == 3) {
                                selectedCardStatus = 2;
                                cardPIN = "0000";
                                selectedCardID = sendMoney.selecedCardId;
                                Dialogs.dlgLoading.show();
                                SMF.Net.UpdateCustomerCardStatus.run(true);
                            }
                        }
                    }
                });
        }
    } catch (exx) {
        alertObject = alert(exx);
    }
}
function TabSelect() {
    try {
        this.useMapping = false;
        this.labelProperty = null;
        this.imageProperty = null;
        this.tabContainer = "";
        this.selectedImage = "";
        this.unselectedImage = "";
        this.selectedColor = "";
        this.unselectedColor = "";
        this.mapsImage = [];
        this.mapsLabel = [];
        var obj = [];
        this.__selectedLabel__ = null;
        Object.defineProperty(this, "selectedLabel", {
            get : function () {
                return this.__selectedLabel__;
            },
            set : function (newValue) {
                if (this.useMapping == true) {
                    for (var k = 0; k < this.mapsLabel.length; k++) {
                        if (this.mapsLabel[k][0].name == newValue.name) {
                            this.mapsLabel[k][0][this.labelProperty] = this.mapsLabel[k][1];
                        } else {
                            this.mapsLabel[k][0][this.labelProperty] = this.mapsLabel[k][2];
                        }
                    }
                } else {
                    obj = eval(this.tabContainer + ".controls");
                    for (var i = 0; i < obj.length; i++) {
                        if (obj[i].type == "Label") {
                            if (obj[i].name == newValue.name) {
                                obj[i].fontColor = this.selectedColor;
                            } else {
                                obj[i].fontColor = this.unselectedColor;
                            }
                        }
                    }
                }
            }
        });
        this.__selectedBg__ = null;
        Object.defineProperty(this, "selectedBg", {
            get : function () {
                return this.__selectedBg__;
            },
            set : function (newValue) {
                if (this.useMapping == true) {
                    for (var k = 0; k < this.mapsImage.length; k++) {
                        if (this.mapsImage[k][0].name == newValue.name) {
                            this.mapsImage[k][0][this.imageProperty] = this.mapsImage[k][1];
                        } else {
                            this.mapsImage[k][0][this.imageProperty] = this.mapsImage[k][2];
                        }
                    }
                } else {
                    obj = eval(this.tabContainer + ".controls");
                    for (var i = 0; i < obj.length; i++) {
                        if (obj[i].type == "Image") {
                            if (obj[i].name == newValue.name) {
                                obj[i].image = this.selectedImage;
                            } else {
                                obj[i].image = this.unselectedImage;
                            }
                        }
                    }
                }
            }
        });
    } catch (exx) {
        alertObject = alert("glabal: " + exx);
    }
}
var receiverTab = new TabSelect();
var mapTab = new TabSelect();
var transactionTab = new TabSelect();
var notificationTab = new TabSelect();
function phoneFormat(phone) {
    phone = phone.replace(/[^0-9]/g, '');
    phone = phone.replace(/(\d {3})(\d {3})(\d {4})/, "($1) $2 $3");
    return phone;
}
function refreshCardItem(cont, dset) {
    /*var i = cont.name.slice(-1);
    dset.seek(i - 1);
    selectedWalletStatus = dset.b_WalletStatus;
    if (dset.b_WalletStatus == 1) {
        try {
            cont["imgLock" + i].visible = false;
            Pages.pgMyCards.contAmount.visible = true;
            Pages.pgMyCards.contAmount.lblAmount.text = dset.b_AvailableBalance + " TL";
            if (cont["btnSettings" + i]) {
                cont["btnSettings" + i].defaultImage = "btn_Settings.png";
                cont["btnSettings" + i].highlightedImage = "btn_Settings_Pressed.png";
            }
            if (dset.b_CardType == "VC") {
                cont["lblSktText" + i].visible = true;
                cont["lblSkt" + i].visible = true;
                cont["lblCvv" + i].visible = true;
                Pages.pgMyCards.contAmount.blbBanner.text = getTextFromLangVar("pgMyCards_lblAmountBannerCaseCR");
            } else if (dset.b_CardType == "CR") {
                Pages.pgMyCards.contAmount.blbBanner.text = getTextFromLangVar("pgMyCards_lblAmountBannerCaseCR");
                var tempStatementDate = new Date(dset.c_StatementDate);
                var tempLastPaymentDate = new Date(dset.c_LastPaymentDate);
                var tempNextStatementDate = new Date(dset.c_NextStatementDate);
                log(tempStatementDate + "\n" + tempLastPaymentDate + "\n" + tempNextStatementDate);
                var tempCurrentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
                if (tempStatementDate.getTime() < new Date().getTime() && tempCurrentDate.getTime() < tempLastPaymentDate.getTime()) {
                    Pages.pgMyCards.svMenu.conDeclaration.lblDateBanner.text = getTextFromLangVar("pgMyCards_lblDateBanner_CaseLastPayment");
                    Pages.pgMyCards.svMenu.conDeclaration.lblDateValue.text = ("0" + tempLastPaymentDate.getDate()).slice(-2) + " " + getMonthNameFromLang(tempLastPaymentDate.getMonth() + 1) + " " + tempLastPaymentDate.getFullYear();
                    Pages.pgMyCards.svMenu.conDeclaration.lblPaymentBanner.text = getTextFromLangVar("pgMyCards_lblPaymentBanner_CaseLastPayment");
                    Pages.pgMyCards.svMenu.conDeclaration.lblPaymentValue.text = Data.ListCustomerCard_OutDSetb_WalletProduct.c_RemainingDebt == "" ? "0.00 TL" : parseFloat(Data.ListCustomerCard_OutDSetb_WalletProduct.c_RemainingDebt).toFixed(2) + " TL";
                } else {
                    Pages.pgMyCards.svMenu.conDeclaration.lblDateBanner.text = getTextFromLangVar("pgMyCards_lblDateBanner_CaseNextStatement");
                    Pages.pgMyCards.svMenu.conDeclaration.lblDateValue.text = ("0" + tempNextStatementDate.getDate()).slice(-2) + " " + getMonthNameFromLang(tempNextStatementDate.getMonth() + 1) + " " + tempNextStatementDate.getFullYear();
                    Pages.pgMyCards.svMenu.conDeclaration.lblPaymentBanner.text = getTextFromLangVar("pgMyCards_lblPaymentBanner_CaseNextStatement");
                    Pages.pgMyCards.svMenu.conDeclaration.lblPaymentValue.text = Data.ListCustomerCard_OutDSetb_WalletProduct.c_CurrentSpending == "" ? "0.00 TL" : parseFloat(Data.ListCustomerCard_OutDSetb_WalletProduct.c_CurrentSpending).toFixed(2) + " TL";
                }
                Pages.pgMyCards.svMenu.conDeclaration.visible = true;
            } else if (dset.b_CardType == "DB") {
                Pages.pgMyCards.contAmount.blbBanner.text = getTextFromLangVar("pgMyCards_lblAmountBannerCaseDB");
            }
        } catch (ex) {
            alertObject = alert(ex);
        }
    } else {
        cont["imgLock" + i].visible = true;
        Pages.pgMyCards.contAmount.visible = false;
        Pages.pgMyCards.svMenu.conDeclaration.visible = false;
        if (dset.b_CardType == "VC") {
            cont["lblSktText" + i].visible = false;
            cont["lblSkt" + i].visible = false;
            cont["lblCvv" + i].visible = false;
        }
        if (cont["btnSettings" + i]) {
            cont["btnSettings" + i].defaultImage = "btn_lock_kartlar.png";
            cont["btnSettings" + i].highlightedImage = "btn_lock_kartlar_press.png";
        }
    }*/
    if (returnToDashboard == false) {
    svCard.designAllCards(Pages.pgMyCards.svCards, Data.ListCustomerCard_OutDSetb_WalletProduct, "XL_", Pages.pgMyCards.conScrollBullets, null, null);
    Pages.pgMyCards.svCards.scrollX = (svCard.getSvIndex(Pages.pgMyCards.svCards, dSetIndexForMyCards, Data.ListCustomerCard_OutDSetb_WalletProduct) * Pages.pgMyCards.svCards.contCard1.width);
        Data.ListCustomerCard_OutDSetb_WalletProduct.seek(dSetIndexForMyCards);
        Pages.pgMyCards.contAmount.lblAmount.text = Data.ListCustomerCard_OutDSetb_WalletProduct.b_AvailableBalance + " TL";
    }
}
var myLatitude;
var myLongitude;
function Global_Events_OnLocationChanged(e) {
    varLatitude = e.lat;
    varLongitude = e.lng;
    myLatitude = e.lat;
    myLongitude = e.lng;
    deviceLatitude = e.lat;
    deviceLongitude = e.lng;
    if (myLatitude != 0 && myLongitude != 0) {
        locationFound = true;
    } else {
        locationFound = false;
    }
}
function getToday(sign) {
    var dateToday = new Date();
    return dateToday.getFullYear() + sign + (0 + "" + (dateToday.getMonth() + 1)).slice(-2) + sign + ((0 + "" + dateToday.getDate()).slice(-2));
}
function getPrevWeek(sign) {
    var datePrevWeek = new Date();
    datePrevWeek.setDate(datePrevWeek.getDate() - 7);
    return datePrevWeek.getFullYear() + sign + (0 + "" + (datePrevWeek.getMonth() + 1)).slice(-2) + sign + ((0 + "" + datePrevWeek.getDate()).slice(-2));
}
function getByCountDate(sign, datex) {
    var datePrevWeek = new Date(datex);
    datePrevWeek.setDate(datePrevWeek.getDate() - 1);
    return datePrevWeek.getFullYear() + sign + (0 + "" + (datePrevWeek.getMonth() + 1)).slice(-2) + sign + ((0 + "" + datePrevWeek.getDate()).slice(-2));
}
function getPickerDate(datex) {
    var d = new Date(datex);
    return d.getFullYear() + "-" + (0 + "" + (d.getMonth() + 1)).slice(-2) + "-" + ((0 + "" + d.getDate()).slice(-2));
}
function getFullDate(datex) {
    var d = new Date(datex);
    return ((0 + "" + d.getDate()).slice(-2)) + "/" + (0 + "" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
}
function getTomorrow(sign) {
    var dateToday = new Date();
    dateToday.setDate(dateToday.getDate() + 1);
    return dateToday.getFullYear() + sign + (0 + "" + (dateToday.getMonth() + 1)).slice(-2) + sign + ((0 + "" + dateToday.getDate()).slice(-2));
}
function getDateWithMontName(str) {
    var arr = [];
    var arr = str.split("T");
    var xx = arr[0].split("-");
    var varYear = xx[0];
    var varMonth = getMonthNameFromLang(parseInt(xx[1]));
    var varDay = xx[2];
    return (varDay + " " + varMonth + " " + varYear); //ex: 6 Ocak 2014
}
function getDateForOrderedTrxPage(str) {
    var arr = [];
    var arr = str.split("T");
    var xx = arr[0].split("-");
    var varMonth = getMonthNameFromLang(parseInt(xx[1]));
    var varDay = xx[2];
    return (varDay + " " + varMonth); // ex: 6 Ocak
}
function getDateFormatForDetailPages(datestr) {
    var d = new Date(datestr);
    return d.getUTCDate() + " " + getMonthNameFromLang(d.getUTCMonth() + 1) + " " + d.getUTCFullYear() + ", " + addZero(d.getUTCHours()) + ":" + addZero(d.getUTCMinutes());
}
function Global_Events_OnError(e) {
    var hebele = "";
    for (property in e) {
        hebele = hebele + (property + ": " + e[property] + "\n");
    }
    hebele = hebele + "\nmessage: " + e.message;
    log(hebele);
    //log(e.type + " __ " + e.stack + " __ " + e.line);
    switch (e.type) {
    case "Server Error":
        if (Device.connectionType == 0) {
            alertObject = alert({
                    message : getTextFromLangVar("global_alertCheckNet"),
                    title : getTextFromLangVar("global_alertTitle1"),
                    alpha : 1,
                    firstButtonText : getTextFromLangVar("global_alertBtn2"),
                    OnFirstButtonPressed : function () {
                        Pages.pgLogin.conConfirmation.eb1.edtConfirmCode1.text = "";
                        Pages.pgLogin.conConfirmation.eb2.edtConfirmCode2.text = "";
                        Pages.pgLogin.conConfirmation.eb3.edtConfirmCode3.text = "";
                        Pages.pgLogin.conConfirmation.eb4.edtConfirmCode4.text = "";
                        Dialogs.dlgLoading.close();
                        Pages.pgLogin.conConfirmation.eb1.edtConfirmCode1.focus();
                    }
                });
        } else {
            alertObject = alert({
                    message : getTextFromLangVar("ERROR_default"),
                    title : getTextFromLangVar("global_alertTitle1"),
                    alpha : 1,
                    firstButtonText : getTextFromLangVar("global_alertBtn2"),
                    OnFirstButtonPressed : function () {
                        Pages.pgLogin.conConfirmation.eb1.edtConfirmCode1.text = "";
                        Pages.pgLogin.conConfirmation.eb2.edtConfirmCode2.text = "";
                        Pages.pgLogin.conConfirmation.eb3.edtConfirmCode3.text = "";
                        Pages.pgLogin.conConfirmation.eb4.edtConfirmCode4.text = "";
                        Dialogs.dlgLoading.close();
                        Pages.pgLogin.conConfirmation.eb1.edtConfirmCode1.focus();
                    }
                });
            /*SMF.Net.sendMail({
            to : "engin.karabel@mobinex.biz",
            title : "Error",
            body : this.requestString + "\n\n\n" + this.responseText + "\n\n\n" + e.message + "\n\n\n" + this.name
            });*/
        }
    case "Size Overflow":
        //alertObject = alert(lang.networkError);
        break;
        //    case "Javascript":
        //            break;
    default:
        //        alert("Default Error:"+JSON.stringify(e));
        SES.Analytics.eventLog("error", JSON.stringify(e));
        break;
    }
}
function CallGetAtmOrBranchByLocation() {
    varLatitude = Pages.pgMap.contMain.contSv.contMap.MapView1.centerLatitude;
    varLongitude = Pages.pgMap.contMain.contSv.contMap.MapView1.centerLongitude;
    SMF.Net.GetAtmOrBranchByLocation.run(true);
}
function showSuccessProcessDialog(e) {
    Dialogs.dlgSuccesProcess.show();
    if ((typeof e) == "function") {
        successAction = e; // eger parameter olarak bir fonksiyon gonderildiyse successAction'a bu fonksiyon atanir.
    }
}
function setTrxType(ds) {
    trxStatus = ds["a_TransactionStatus"];
    trxType = ds["a_TransactionType"];
    trxTCKN = ds["a_ReceiverTckn"];
    if (trxType == "1" || trxType == "2" || trxType == "3") {
        if (trxStatus == "5" && trxTCKN != hdrTckn) { // Cep Telefonuna Para Gönderdim. Para Çekildi.
            if (ds["a_ReceiverGsmNo"] != "0") {
                ds["trxType"] = "1";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverGsmNo"].slice(-10);
                ds["trx_icon"] = "icon_trx_1.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype1");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            } else { // Facebook'a para gönderdim. Para çekildi
                ds["trxType"] = "20";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = "Facebook gönderimi";
                ds["trx_icon"] = "icon_trx_1.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype1");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            }
        } else if (trxStatus == "3" && trxTCKN != hdrTckn) { //Cep Telefonuna Para Gönderdim. Para Çekilmedi/aktarılmadı
            if (ds["a_ReceiverGsmNo"] != "0") {
                ds["trxType"] = "2";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverGsmNo"].slice(-10);
                ds["trx_icon"] = "icon_trx_2.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype2");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            } else { //Facebook'a para gönderdim. para Çekilmedi, aktarılmadı
                ds["trxType"] = "21";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = "Facebook gönderimi";
                ds["trx_icon"] = "icon_trx_2.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype2");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            }
        } else if (trxStatus == "3" && trxTCKN == hdrTckn) { // Bana para geldi çekilmedi-aktarılmadı
            ds["trxType"] = "3";
            ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
            ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
            ds["phone_number_2"] = "";
            ds["trx_icon"] = "icon_trx_5.png";
            ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype3");
            ds["trx_bg"] = "bg_transHistory_orange.png";
        } else if (trxStatus == "5" && trxTCKN == hdrTckn) { // Bana Para Geldi. Çekildi.
            ds["trxType"] = "4";
            ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
            ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
            ds["phone_number_2"] = "";
            ds["trx_icon"] = "icon_trx_6.png";
            ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype4");
            ds["trx_bg"] = "bg_transHistory_orange.png";
        } else if (trxStatus == "9" && trxTCKN == hdrTckn) { //Bana Para Geldi Kartıma Aktardım.
            ds["trxType"] = "5";
            ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
            ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
            ds["phone_number_2"] = "";
            ds["trx_icon"] = "icon_trx_6.png";
            ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype5");
            ds["trx_bg"] = "bg_transHistory_orange.png";
        } else if (trxStatus == "9" && trxTCKN != hdrTckn) { //Ben Para Gönderdim. GÖnderdiğim kişi parayı aktardı.
            if (ds["a_ReceiverGsmNo"] != "0") {
                ds["trxType"] = "6";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverGsmNo"].slice(-10);
                ds["trx_icon"] = "icon_trx_1.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype6");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            } else { //Facebook'a para gönderdim. Gönderdiğim kişi aktardı
                ds["trxType"] = "22";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = "Facebook gönderimi";
                ds["trx_icon"] = "icon_trx_1.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype6");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            }
        } else if (trxStatus == "7" && trxTCKN != hdrTckn) { // Gönderdiğim ama çekilmeyen para iade edildi
            if (ds["a_ReceiverGsmNo"] != "0") {
                ds["trxType"] = "7";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverGsmNo"].slice(-10);
                ds["trx_icon"] = "icon_trx_7.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype7");
                ds["trx_bg"] = "bg_transHistory_grey.png";
            } else { //Facebook'a para gönderdim. Çekilmediği için iade edildi
                ds["trxType"] = "23";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = "Facebook gönderimi";
                ds["trx_icon"] = "icon_trx_7.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype7");
                ds["trx_bg"] = "bg_transHistory_grey.png";
            }
        } else if (trxStatus == "7" && trxTCKN == hdrTckn) { // Gelen ama çekmediğim para iade edildi.
            ds["trxType"] = "8";
            ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
            ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
            ds["phone_number_2"] = "";
            ds["trx_icon"] = "icon_trx_7.png";
            ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype8");
            ds["trx_bg"] = "bg_transHistory_grey.png";
        } else if (trxStatus == "1") { // statusun 1 oldugu durum para gonderip iptal edilen durumlar
            if (trxTCKN == hdrTckn) { // bana para geldi.cekemeden iptal etti
                ds["trxType"] = "19";
                ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
                ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
                ds["phone_number_2"] = "";
                ds["trx_icon"] = "icon_trx_8.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype19");
                ds["trx_bg"] = "bg_transHistory_grey.png";
            } else { //para gonderdim cekemeden iptal ettim. sometimes it will be happened!! what can i do?
                if (ds["a_ReceiverGsmNo"] != "0") { /////////////////////////////////////////////////////////
                    ds["trxType"] = "18";
                    ds["name_surname"] = "";
                    ds["phone_number"] = "";
                    ds["phone_number_2"] = ds["a_ReceiverGsmNo"].slice(-10);
                    ds["trx_icon"] = "icon_trx_8.png";
                    ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype18");
                    ds["trx_bg"] = "bg_transHistory_grey.png";
                } else {
                    ds["trxType"] = "24";
                    ds["name_surname"] = "";
                    ds["phone_number"] = "";
                    ds["phone_number_2"] = "Facebook gönderimi";
                    ds["trx_icon"] = "icon_trx_8.png";
                    ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype18");
                    ds["trx_bg"] = "bg_transHistory_grey.png";
                }
            }
        }
    } else if (trxType == "10") {
        if (trxStatus == "8") {
            if (trxTCKN == hdrTckn) { //Birisi benden Para istedi
                ds["trxType"] = "9";
                ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
                ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
                ds["phone_number_2"] = "";
                ds["trx_icon"] = "icon_trx_3.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype9");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            } else if (trxTCKN != hdrTckn) { //Cüzdan Kullanıcısından para istedim
                ds["trxType"] = "10";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverGsmNo"].slice(-10);
                ds["trx_icon"] = "icon_trx_4.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype10");
                ds["trx_bg"] = "bg_transHistory_orange.png";
            }
        } else if (trxStatus == "3") {
            if (trxTCKN == hdrTckn) { // Birisi benden para istedi ve gönderdim
                ds["trxType"] = "11";
                ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
                ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
                ds["phone_number_2"] = "";
                ds["trx_icon"] = "icon_trx_1.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype11");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            } else if (trxTCKN != hdrTckn) { //cüzdan kullanıcısından para istedim ve gönderdi sagolsun
                ds["trxType"] = "12";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverGsmNo"].slice(-10);
                ds["trx_icon"] = "icon_trx_5.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype12");
                ds["trx_bg"] = "bg_transHistory_orange.png";
            }
        }
    } else if (trxType == "5" || trxType == "6" || trxType == "9") {
        if (trxStatus == "3") {
            if (trxTCKN != hdrTckn) { //Debit Karta para gönderdim
                ds["trxType"] = "13";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverCardNo"];
                ds["trx_icon"] = "icon_trx_1.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype13");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            } else if (trxTCKN == hdrTckn) { //Birisi benim debit kartıma para gönderdi.
                ds["trxType"] = "14";
                ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
                ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
                ds["phone_number_2"] = "";
                ds["trx_icon"] = "icon_trx_6.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype14");
                ds["trx_bg"] = "bg_transHistory_orange.png";
            }
        }
    } else if (trxType == "4" || trxType == "7" || trxType == "8") {
        if (trxStatus == "3") {
            if (trxTCKN != hdrTckn) { //Kredi kartı ödemesi yaptım
                ds["trxType"] = "15";
                ds["name_surname"] = "";
                ds["phone_number"] = "";
                ds["phone_number_2"] = ds["a_ReceiverCardNo"];
                ds["trx_icon"] = "icon_trx_1.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype15");
                ds["trx_bg"] = "bg_transHistory_blue.png";
            } else if (trxTCKN == hdrTckn) { //birisi benm kredi kartıma ödeme yaptı
                ds["trxType"] = "16";
                ds["name_surname"] = ds["a_SenderName"] + " " + ds["a_SenderSurname"];
                ds["phone_number"] = ds["a_SenderGsmNo"].slice(-10);
                ds["phone_number_2"] = "";
                ds["trx_icon"] = "icon_trx_6.png";
                ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype16");
                ds["trx_bg"] = "bg_transHistory_orange.png";
            }
        }
    } else if (trxType == "11" || trxType == "17") {
        if (trxStatus == "9") {
            //Kartıma para aktardım
            ds["trxType"] = "17";
            ds["name_surname"] = "";
            ds["phone_number"] = "";
            ds["phone_number_2"] = ds["a_ReceiverCardNo"];
            ds["trx_icon"] = "icon_trx_6.png";
            ds["trx_text"] = getTextFromLangVar("pgTransactionHistory_trxtype17");
            ds["trx_bg"] = "bg_transHistory_orange.png";
        }
    } else { //hiçbişeye girmezse
        ds["trxType"] = "99";
        ds["name_surname"] = "";
        ds["phone_number"] = "";
        ds["phone_number_2"] = "GEÇERSİZ İŞLEM";
        ds["trx_icon"] = "";
        ds["trx_text"] = "";
        ds["trx_bg"] = "bg_transHistory_grey.png";
    }
}
function walletInfoText() {
    try {
        if (Data.ListCustomerCard_OutDSetb_WalletProduct.rowCount != 0) {
            if (walletStatusFlag > 0) {
                Pages.pgDashboard.conInfo.lblAmount.visible = true;
                Pages.pgDashboard.conInfo.lblInfo.visible = true;
                Pages.pgDashboard.conInfo.lblInfoAlone.visible = false;
                Pages.pgDashboard.conInfo.lblInfo.text = getTextFromLangVar("pgDashboard_lblInfoCaseAmount");
                Pages.pgDashboard.conInfo.lblInfo.width = "%63";
            } else {
                Pages.pgDashboard.conInfo.lblAmount.visible = false;
                Pages.pgDashboard.conInfo.lblInfo.visible = false;
                Pages.pgDashboard.conInfo.lblInfoAlone.visible = true;
                Pages.pgDashboard.conInfo.lblInfoAlone.text = getTextFromLangVar("pgDashboard_lblInfoCaseInactiveall");
            }
        } else {
            Pages.pgDashboard.conInfo.lblAmount.visible = false;
            Pages.pgDashboard.conInfo.lblInfo.visible = false;
            Pages.pgDashboard.conInfo.lblInfoAlone.visible = true;
            Pages.pgDashboard.conInfo.lblInfoAlone.text = getTextFromLangVar("pgDashboard_lblInfoCaseNoCard");
        }
        //Pages.pgDashboard.conInfo.lblNameSurname.text = "Sn. " + adSoyad + ", Hoşgeldiniz.";
    } catch (exx) {
        alertObject = alert(exx);
    }
}
function Global_Events_OnMinimize(e) {
    if (isAndroid == false) {
        Dialogs.dlgMinimize.show();
    }
    minimizeTime = Math.floor(Date.now());
}
function Global_Events_OnMaximize(e) {
    Dialogs.dlgMinimize.close();
    if (Math.floor((Date.now() - minimizeTime) / 1000) > 240 && isLoggedIn) {
        alertObject.close();
        if (isRegister == 1) {
            pgHistory = [];
            Pages.pgLogin.show();
        } else {
            pgHistory = [];
            Pages.pgWelcomeScreen.show();
        }
    }
}
var dSetIndexForMyCards = 0;
var __indexForDataSet__ = null;
function svDesign() {
    this.cardIndex = new Array();
    this.designAllCards = function (svCards, dsetCard, imgSize, bulletCont, shownPage, currentPage) {
        try {
            if (dsetCard) {
                for (var i = 1; i <= dsetCard.rowCount; i++) {
                    dsetCard.seek(i - 1);
                    if (dsetCard.b_CardID == selectedCardID) {
                        dSetIndexForMyCards = (i - 1);
                    }
                    if (svCards["contCard" + i]) {
                        svCards["contCard" + i]["visible"] = true;
                        Object.defineProperty(svCards["contCard" + i], "indexForDataSet", {
                            get : function () {
                                return this.__indexForDataSet__;
                            },
                            set : function (newValue) {
                                this.__indexForDataSet__ = newValue;
                            }
                        });
                        svCards["contCard" + i]["indexForDataSet"] = i - 1;
                        if (svCards["contCard" + i]["lblCardNo" + i]) {
                            svCards["contCard" + i]["lblCardNo" + i]["text"] = dsetCard.b_CardNo.slice(0, 4) + " **** **** **" + dsetCard.b_CardNo.slice(-2);
                        }
                        svCards["contCard" + i]["lblVirtualCard" + i].visible = false;
                        //Virtual kart için görsel ayarları
                        if (dsetCard.b_CardType == "VC") {
                            svCards["contCard" + i]["lblVirtualCard" + i].visible = true;
                            if (svCards["contCard" + i]["lblSktText" + i]) {
                                if (dsetCard.b_WalletStatus == 0)
                                    svCards["contCard" + i]["lblSktText" + i].visible = false;
                                else
                                    svCards["contCard" + i]["lblSktText" + i].visible = true;
                            }
                            if (svCards["contCard" + i]["lblSkt" + i]) {
                                if (dsetCard.b_WalletStatus == 0)
                                    svCards["contCard" + i]["lblSkt" + i].visible = false;
                                else
                                    svCards["contCard" + i]["lblSkt" + i].visible = true;
                                svCards["contCard" + i]["lblSkt" + i].text = Data.KKRGetCardDetails_OutDSetKKRGetCardDetailsResult.a_ExpiryDate;
                            }
                            if (svCards["contCard" + i]["lblCvv" + i]) {
                                if (dsetCard.b_WalletStatus == 0)
                                    svCards["contCard" + i]["lblCvv" + i].visible = false;
                                else
                                    svCards["contCard" + i]["lblCvv" + i].visible = true;
                                svCards["contCard" + i]["lblCvv" + i].text = "CVV: " + /* getTextFromLangVar("pgMyCards_lblCvv1")*/
                                     + Data.KKRGetCardDetails_OutDSetKKRGetCardDetailsResult.a_CVV;
                            }
                            if (svCards["contCard" + i]["lblCardNo" + i]) {
                                svCards["contCard" + i]["lblCardNo" + i]["text"] = dsetCard.b_CardNo.slice(0, 4) + " " + dsetCard.b_CardNo.slice(4, 8) + " " + dsetCard.b_CardNo.slice(8, 12) + " " + dsetCard.b_CardNo.slice(12, 16);
                            }
                        }
                        if (svCards["contCard" + i]["btnSettings" + i]) {
                            if (dsetCard.b_WalletStatus == 0) {
                                svCards["contCard" + i]["btnSettings" + i].defaultImage = "btn_lock_kartlar.png";
                                svCards["contCard" + i]["btnSettings" + i].highlightedImage = "btn_lock_kartlar_press.png";
                            } else {
                                svCards["contCard" + i]["btnSettings" + i].defaultImage = "btn_Settings.png";
                                svCards["contCard" + i]["btnSettings" + i].highlightedImage = "btn_Settings_Pressed.png";
                            }
                        }
                        if (svCards["contCard" + i]["imgLock" + i]) {
                            if (dsetCard.b_WalletStatus == 0)
                                svCards["contCard" + i]["imgLock" + i].visible = true;
                            else
                                svCards["contCard" + i]["imgLock" + i].visible = false;
                        }
                        if (svCards["contCard" + i]["imgCardBg" + i])
                            svCards["contCard" + i]["imgCardBg" + i]["image"] = imgSize + dsetCard.card_img;
                    }
                    if (bulletCont) {
                        if (bulletCont["bullet" + i])
                            bulletCont["bullet" + i]["visible"] = true;
                    }
                }
                for (i = dsetCard.rowCount + 1; i <= 10; i++) {
                    if (svCards["contCard" + i])
                        svCards["contCard" + i]["visible"] = false;
                    if (bulletCont["bullet" + i])
                        bulletCont["bullet" + i]["visible"] = false;
                }
                this.setPaging(svCards, dsetCard.rowCount, shownPage, currentPage);
            } else {
                log("Dataset bulunamadı");
            }
        } catch (exx) {
            alertObject = alert(exx);
        }
    }
    this.setPaging = function (svCards, cardCount, pg, currentPage) {
        svCards.pageWidth = svCards.contCard1.width;
        svCards.contentWidth = cardCount * svCards.contCard1.width + (svCards.width - svCards.contCard1.width);
        if (pg)
            showPage(currentPage, pg, true);
    }
    this.designFilteredCards = function (svCards, dsetCard, imgSize, bulletCont, shownPage, currentPage) {
        try {
            this.cardIndex = [];
            this.cards = new Array();
            if (dsetCard) {
                for (var i = 1; i <= dsetCard.rowCount; i++) {
                    dsetCard.seek(i - 1);
                    if (dsetCard.b_WalletStatus == 1 && (dsetCard.b_CardType == "CR" || dsetCard.b_CardType == "DB")) {
                        this.cards.push([dsetCard.b_CardName, dsetCard.b_CardNo, dsetCard.b_AvailableBalance, dsetCard.card_img, dsetCard.card_icon]);
                        this.cardIndex.push([(i - 1), this.cards.length]);
                    }
                }
            }
            for (var i = 1; i <= this.cards.length; i++) {
                if (svCards["contCard" + i]) {
                    svCards["contCard" + i]["visible"] = true;
                    Object.defineProperty(svCards["contCard" + i], "indexForDataSet", {
                        get : function () {
                            return this.__indexForDataSet__;
                        },
                        set : function (newValue) {
                            this.__indexForDataSet__ = newValue;
                        }
                    });
                    if (this.cardIndex[(i - 1)][1] == i) {
                        svCards["contCard" + i]["indexForDataSet"] = this.cardIndex[(i - 1)][0];
                    } else {
                        log("index: " + this.cardIndex[(i - 1)][1] + " i: " + i);
                    }
                    if (svCards["contCard" + i]["lblCardNo" + i])
                        svCards["contCard" + i]["lblCardNo" + i]["text"] = this.cards[(i - 1)][1].slice(0, 4) + " **** **** **" + this.cards[(i - 1)][1].slice(-2);
                    if (svCards["contCard" + i]["imgCardBg" + i])
                        svCards["contCard" + i]["imgCardBg" + i]["image"] = imgSize + this.cards[(i - 1)][3];
                }
                if (bulletCont) {
                    if (bulletCont["bullet" + i])
                        bulletCont["bullet" + i]["visible"] = true;
                }
            }
            for (i = this.cards.length + 1; i <= 10; i++) {
                if (svCards["contCard" + i])
                    svCards["contCard" + i]["visible"] = false;
                if (bulletCont["bullet" + i])
                    bulletCont["bullet" + i]["visible"] = false;
            }
            this.setPaging(svCards, this.cards.length, shownPage, currentPage);
        } catch (exx) {
            alertObject = alert(exx);
        }
    }
    this.aproveCard = function (svCards, dsetCard, imgSize, bulletCont, shownPage, currentPage) {
        for (var i = 1; i <= dsetCard.rowCount; i++) {
            dsetCard.seek(i - 1);
            svCards["contCard" + i]["visible"] = true;
            if (dsetCard.b_CardName == "ING Bonus Plus Kart") {
                svCards["contCard" + i]["lblUstCardDes" + i]["text"] = getTextFromLangVar("pgCardApprove_bonusCardSummary");
            }
            if (dsetCard.b_CardName == "ING Pegasus Plus Kart") {
                svCards["contCard" + i]["lblUstCardDes" + i]["text"] = getTextFromLangVar("pgCardApprove_pegasusCardSummary");
            }
            if (dsetCard.b_CardName == "ING Bonus Plus Sanal Kart") {
                svCards["contCard" + i]["lblUstCardDes" + i]["text"] = getTextFromLangVar("pgCardApprove_bonusVirtualCardSummary");
            }
            if (dsetCard.b_CardName == "ING Pegasus Plus Sanal Kart") {
                svCards["contCard" + i]["lblUstCardDes" + i]["text"] = getTextFromLangVar("pgCardApprove_pegasusVirtualCardSummary");
            }
            //svCards["contCard" + i]["lblUstCardDes" + i]["text"] = dsetCard.b_Summary;
            svCards["contCard" + i]["imgCardBg" + i]["image"] = imgSize + dsetCard.card_img;
            if (bulletCont) {
                bulletCont["bullet" + i]["visible"] = true;
            }
        }
        this.setPaging(svCards, dsetCard.rowCount, shownPage);
        dsetCard.moveFirst();
    }
    this.getSvIndex = function (svCont, indx, dsetCard) {
        if (dsetCard) {
            for (var i = 1; i <= dsetCard.rowCount; i++) {
                if (svCont["contCard" + i]["indexForDataSet"] == indx) {
                    return (i - 1);
                    break;
                }
            }
        } else {
            for (var i = 1; i <= this.cardIndex.length; i++) {
                if (svCont["contCard" + i]["indexForDataSet"] == indx) {
                    return (i - 1);
                    break;
                }
            }
        }
    }
    this.validFilteredCardCount = function (dsetCard) {
        tempStatus = false;
        for (var i = 1; i <= dsetCard.rowCount; i++) {
            dsetCard.seek(i - 1);
            if (dsetCard.b_WalletStatus == 1 && (dsetCard.b_CardType == "CR" || dsetCard.b_CardType == "DB")) {
                tempStatus = true;
                break;
            } else {
                tempStatus = false;
            }
        }
        return tempStatus;
    }
}
var svCard = new svDesign();
function logout() {
    alertObject = alert({
            message : getTextFromLangVar("pgLogin_sureExit"),
            title : getTextFromLangVar("global_alertTitleExit"),
            alpha : 1,
            firstButtonText : getTextFromLangVar("global_alertBtn2"),
            OnFirstButtonPressed : function () {
                Dialogs.dlgLoading.show();
                clearAliasData();
                clearNotificationTable();
                clearTrxHistory();
                SMF.Net.LogOut.run(true);
            },
            secondButtonText : getTextFromLangVar("global_alertBtn1"),
            OnSecondButtonPressed : function () {}
        });
}
var arrContactPhones = [];
var rgxPhoneControl = "";
var flagForAddFriendAndInvite = "";
var contactInformations = {
    contactName : "",
    contactSurname : "",
    contactPhone : "",
    contactProfilePic : "",
    userProfilePic : "",
    contactCardNo : "",
    contactId : "0",
    getPhoneBookEntry : function () {
        contactInformations.clearContactsInfo();
        Device.Contacts.pick({
            showDetail : false, //ios
            onSuccess : function (e) {
                contactInformations.contactName = e.firstName + " " + e.middleName;
                contactInformations.contactSurname = e.lastName;
                for (i in e.phone) {
                    rgxPhoneControl = checkPhoneNumberFormat(e.phone[i]);
                    if (rgxPhoneControl) {
                        arrContactPhones.push(rgxPhoneControl.toString());
                    }
                }
                if (arrContactPhones.length == 0) { //sectigimiz kisinin gecerli bir telefon nuarası yoksa
                    if (flagForAddFriendAndInvite == "OPENADDFRIENDPAGE") { //
                        contactInformations.clearContactsInfo();
                        alertObject = alert({
                                message : getTextFromLangVar("global_noTelNumberFound"),
                                title : getTextFromLangVar("global_alertTitle1"),
                                alpha : 1,
                                firstButtonText : getTextFromLangVar("global_alertBtn2"),
                                OnFirstButtonPressed : function () {
                                    return;
                                }
                            });
                    } else if (flagForAddFriendAndInvite == "SENDSMSFORINVITE") {
                        alertObject = alert({
                                message : getTextFromLangVar("global_noTelNumberFound"),
                                title : getTextFromLangVar("global_alertTitle1"),
                                alpha : 1,
                                firstButtonText : getTextFromLangVar("global_alertBtn2"),
                                OnFirstButtonPressed : function () {
                                    return;
                                }
                            });
                    } else if (flagForAddFriendAndInvite == "SENDMONEYSELECTPHONE") {
                        contactInformations.contactPhone = "";
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contTel.edtPhoneNumber.text = contactInformations.contactPhone;
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo1.text = "";
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo2.text = "";
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo3.text = "";
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo4.text = "";
                        alertObject = alert({
                                message : getTextFromLangVar("pgSendMoney2_alert_ValidPhoneError"),
                                title : getTextFromLangVar("global_alertTitle1"),
                                alpha : 1,
                                firstButtonText : getTextFromLangVar("global_alertBtn2"),
                                OnFirstButtonPressed : function () {}
                            });
                    } else if (flagForAddFriendAndInvite == "ASKMONEYSELECTPHONE") {
                        contactDelegateMethod(null, null);
                    }
                } else if (arrContactPhones.length == 1) { //sectigimiz kisinin gecerli bir telefon numarası varsa
                    if (flagForAddFriendAndInvite == "OPENADDFRIENDPAGE") {
                        contactInformations.contactPhone = arrContactPhones[0];
                        showPage(Pages.pgAddAndInviteFriend, Pages.pgAddNewPerson, true);
                    } else if (flagForAddFriendAndInvite == "SENDSMSFORINVITE") {
                        Pages.pgDashboard.tmrAddFriend.active = true;
                    } else if (flagForAddFriendAndInvite == "SENDMONEYSELECTPHONE") {
                        contactInformations.contactPhone = arrContactPhones[0];
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contTel.edtPhoneNumber.text = contactInformations.contactPhone;
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo1.text = "";
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo2.text = "";
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo3.text = "";
                        Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo4.text = "";
                        sendMoney.receiverFullName = contactInformations.contactName + " " + contactInformations.contactSurname;
                        sendMoney.receiverName = contactInformations.contactName;
                        sendMoney.receiverSurname = contactInformations.contactSurname;
                        sendMoney.receiverBanner = contactInformations.contactPhone;
                        sendMoney.receiverTel = contactInformations.contactPhone;
                        sendMoney.receiverSendValue = contactInformations.contactPhone;
                        sendMoney.modes.receiver = "done";
                        saveAliasTypeForSendMoney = "GSMNUMBERFROMCONTACT";
                        sendMoney.receiverType = "cep";
                        pageChange(sendMoneyPage(), Pages.pgSendMoney2.svMain.contTop.contAnimate, Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever);
                    } else if (flagForAddFriendAndInvite == "ASKMONEYSELECTPHONE") {
                        contactDelegateMethod(arrContactPhones[0], contactInformations.contactName + " " + contactInformations.contactSurname);
                    }
                } else { //sectigimiz kisinin birden fazla telefon numarası varsa
                    if (!(isAndroid)) { // ios ise
                        Pages.pgDashboard.tmrAddFriend.active = true;
                    } else { //android ise
                        pick(
                            arrContactPhones,
                            function (e) {
                            if (flagForAddFriendAndInvite == "OPENADDFRIENDPAGE") {
                                contactInformations.contactPhone = arrContactPhones[e.index];
                                showPage(Pages.pgAddAndInviteFriend, Pages.pgAddNewPerson, true);
                            } else if (flagForAddFriendAndInvite == "SENDSMSFORINVITE") {
                                contactInformations.sendSMSForInvite(arrContactPhones[e.index]);
                            } else if (flagForAddFriendAndInvite == "SENDMONEYSELECTPHONE") {
                                contactInformations.contactPhone = arrContactPhones[e.index];
                                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contTel.edtPhoneNumber.text = contactInformations.contactPhone;
                                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo1.text = "";
                                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo2.text = "";
                                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo3.text = "";
                                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo4.text = "";
                                sendMoney.receiverFullName = contactInformations.contactName + " " + contactInformations.contactSurname;
                                sendMoney.receiverBanner = contactInformations.contactPhone;
                                sendMoney.receiverTel = contactInformations.contactPhone;
                                sendMoney.receiverSendValue = contactInformations.contactPhone;
                                sendMoney.modes.receiver = "done";
                                saveAliasTypeForSendMoney = "GSMNUMBERFROMCONTACT";
                                sendMoney.receiverType = "cep";
                                pageChange(sendMoneyPage(), Pages.pgSendMoney2.svMain.contTop.contAnimate, Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever);
                            } else if (flagForAddFriendAndInvite == "ASKMONEYSELECTPHONE") {
                                contactDelegateMethod(arrContactPhones[e.index], contactInformations.contactName + " " + contactInformations.contactSurname);
                            }
                        },
                            function () {},
                            function () {});
                    }
                }
            },
            onCancel : function (e) {},
            onError : function (e) {
                alertObject = alert(e);
            }
        }); //Device.contactspick sonu
    }, //getPhoneBookEntry sonu
    sendSMSForInvite : function (phoneNum) {
        SMF.Net.sendSMS({
            phoneNumber : phoneNum,
            messageText : getTextFromLangVar("sendSMS_smsText"),
            onSuccess : function (e) {
                alertObject = alert({
                        message : getTextFromLangVar("sendSMS_successSendSMS"),
                        title : getTextFromLangVar("global_alertTitle2"),
                        alpha : 1,
                        firstButtonText : getTextFromLangVar("global_alertBtn2"),
                        OnFirstButtonPressed : function () {
                            return;
                        }
                    });
            },
            onFailure : function (e) {
                alertObject = alert({
                        message : getTextFromLangVar("sendSMS_errorForInviteWithSMS"),
                        title : getTextFromLangVar("global_alertTitle1"),
                        alpha : 1,
                        firstButtonText : getTextFromLangVar("global_alertBtn2"),
                        OnFirstButtonPressed : function () {
                            return;
                        }
                    });
            }
        });
    },
    sendEmailForInvite : function () {
        SMF.Net.sendMail({
            to : "",
            cc : "",
            bcc : "",
            title : "ING CUZDAN",
            body : getTextFromLangVar("sendEmail_downloadApp"),
            attachment : "",
            onSuccess : function () {},
            onFailure : function () {}
        }); //mail sonu
    },
    clearContactsInfo : function () {
        contactInformations.contactName = "";
        contactInformations.contactSurname = "";
        contactInformations.contactPhone = "";
        contactInformations.contactProfilePic = "";
        contactInformations.userProfilePic = "";
        contactInformations.contactCardNo = "";
        contactInformations.contactId = "0";
        aliasImageInsertType = "";
        arrContactPhones = [];
        Data.dsInsertAliasImage.moveFirst();
        Data.dsInsertAliasImage.alias_image = "";
        Data.dsInsertAliasImage.commit();
        Data.dsInsertAliasImage.refresh();
        Data.notify("Data.dsInsertAliasImage");
    },
    clearContactsImageDataSet : function () {
        Data.dsInsertAliasImage.moveFirst();
        Data.dsInsertAliasImage.alias_image = "";
        Data.dsInsertAliasImage.commit();
        Data.dsInsertAliasImage.refresh();
        Data.notify("Data.dsInsertAliasImage");
    }
}
function resetTrxList() { // erkan burayı kullan
    listAllTransactionsCalledFor = "";
    transactionType1 = "BEKLEYEN";
    transactionType2 = "GELEN";
    transactionType3 = "GIDEN";
    transactionType4 = "TUMU";
    trxTypeForReceievedMoney = "";
    trxStatus = "";
    trxType = "";
    trxTCKN = "";
    searchTransaction = "";
    Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.clear();
    Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.commit();
}
function checkPhoneNumberFormat(phoneNum) {
    phoneNum = phoneNum.replace(/[`~!@#$%^&*()_|+\-=?;:,.<>\{\}\[\]\\\/]/gi, '');
    phoneNum = phoneNum.replace(/ /gi, "");
    if (phoneNum.length > 12)
        return false;
    var regExpObj = /5\d\d\d\d\d\d\d\d\d/; //5552221314 tarzında
    return regExpObj.exec(phoneNum.replace(/ /gi, ""));
}
function clearTrxHistory() {
    //Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.clear();
    //Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.commit();
    //Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.refresh();
    //Data.notify(Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction);
}
function callTrxHistory() { // kendi sayfalarından islem gecmisine gitmek isteyenlerin fonksiyonu kullanması yeterli
    try {
        Dialogs.dlgLoading2.show();
        Pages.pgTransactionHistory.rptBox.groupItems = true;
        flagForCountRefresh = true;
        transactionIndex = 0;
        byDateCount = 0;
        byCountCount = 0;
        countOfRow = 0;
            listAllTransactionsCalledFor = "";
        trxTypeForReceievedMoney = "";
        searchTransaction = "";
        //transactionOrder = "transaction_date";
        trxStatus = "";
        trxType = "";
        trxTCKN = "";
        transactionType1 = "BEKLEYEN";
        transactionType2 = "GELEN";
        transactionType3 = "GIDEN";
        transactionType4 = "TUMU";
        transactionStartDate = getPrevWeek("-");
        transactionEndDate = getToday("-");
        transactionTab.imageProperty = "fillColor";
        transactionTab.labelProperty = "fontColor";
        transactionTab.useMapping = true;
        transactionTab.mapsLabel = [[Pages.pgTransactionHistory.conFilter.conMenu.contWaiting.lblWaiting, "#000000", "#999999"], [Pages.pgTransactionHistory.conFilter.conMenu.contComing.lblComing, "#000000", "#999999"], [Pages.pgTransactionHistory.conFilter.conMenu.contSend.lblSend, "#000000", "#999999"], [Pages.pgTransactionHistory.conFilter.conMenu.contAll.lblAll, "#000000", "#999999"]];
        transactionTab.mapsImage = [[Pages.pgTransactionHistory.conFilter.conMenu.contWaiting, "#FFFFFF", "#F1F1F1"], [Pages.pgTransactionHistory.conFilter.conMenu.contComing, "#FFFFFF", "#F1F1F1"], [Pages.pgTransactionHistory.conFilter.conMenu.contSend, "#FFFFFF", "#F1F1F1"], [Pages.pgTransactionHistory.conFilter.conMenu.contAll, "#FFFFFF", "#F1F1F1"]];
        transactionTab.selectedLabel = Pages.pgTransactionHistory.conFilter.conMenu.contAll.lblAll;
        transactionTab.selectedBg = Pages.pgTransactionHistory.conFilter.conMenu.contAll;
        Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.query = 'SELECT "ListAllTransactionsByDate_OutDTbla_WLTTransaction".* FROM "ListAllTransactionsByDate_OutDTbla_WLTTransaction" WHERE (("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType1%") OR ("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType2%") OR ("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType3%") OR("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType4%")) AND "ListAllTransactionsByDate_OutDTbla_WLTTransaction"."trxType" LIKE :"trxType%" AND (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."name_surname", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c")) LIKE (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(:"%name_search%", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c")) ORDER BY "ListAllTransactionsByDate_OutDTbla_WLTTransaction"."transaction_date" DESC';
        lastQueryForTrxHistory = 'SELECT "ListAllTransactionsByDate_OutDTbla_WLTTransaction".* FROM "ListAllTransactionsByDate_OutDTbla_WLTTransaction" WHERE (("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType1%") OR ("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType2%") OR ("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType3%") OR("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."a_TrxTypeAtTrxHistory" LIKE :"%tranType4%")) AND "ListAllTransactionsByDate_OutDTbla_WLTTransaction"."trxType" LIKE :"trxType%" AND (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace("ListAllTransactionsByDate_OutDTbla_WLTTransaction"."name_surname", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c")) LIKE (Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(:"%name_search%", "Ü", "u"), "ü", "u"), "Ğ", "g"), "ğ", "g"), "Ş", "s"), "ş", "s"), "İ", "i"), "ı", "i"), "Ö", "o"), "ö", "o"), "Ç", "c"), "ç", "c")) ORDER BY "ListAllTransactionsByDate_OutDTbla_WLTTransaction"."transaction_date" DESC';
        selectOrderButtons(Dialogs.dlgOrder.cont.btnOrderDateDesc);
        //Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.query = 'SELECT "ListAllTransactionsByDate_OutDTbla_WLTTransaction".* FROM "ListAllTransactionsByDate_OutDTbla_WLTTransaction"';
        Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.clear();
        Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.commit();
        Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.refresh();
        Data.notify(Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction);
        SMF.Net.ListAllTransactionsByDate.run(true);
    } catch (exx) {
        alertObject = alert(exx);
    }
}
function showPage(pgNow, pgNext, isAdd, motionEase, effect, effectType, fade, rest) {
    if (isAdd == true) {
        if (pgNow) {
            pgHistory.push(pgNow);
        }
        logPage = pgNext.name;
        SMF.Net.InsertPageTransitionLog.run(true);
        pgNext.show();
    } else {
        pgNext.show();
    }
}
function pageBack() {
    try {
        if (pgHistory[(pgHistory.length - 1)].name == "pgDashboard") {
            if (dashboardRefreshFlag == true) {
                Dialogs.dlgLoading.show();
                returnToDashboard = true;
                SMF.Net.MergeCustomerCard.run();
            } else {
                pgHistory = [];
                Pages.pgDashboard.show();
            }
        } else if (pgHistory[(pgHistory.length - 1)].name == "pgTransactionHistory") {
            if (transactionHistoryRefreshFlag == true) {
                pgHistory = []; // transactionHistoryRefreshFlag kontrol edilecek.
                callTrxHistory();
            } else {
                Pages.pgTransactionHistory.show();
            }
        } else {
            pgHistory[(pgHistory.length - 1)].show();
        }
        pgHistory.pop();
    } catch (exx) {
        pgHistory = [];
        if (isRegister == 1)
            Pages.pgDashboard.show();
        else
            Pages.pgWelcomeScreen.show();
        alertObject = alert(exx);
    }
}
function getMaskCardNo(cardno) {
    if (cardno) {
        if (cardno.length >= 25) {
            cardno = dec(cardno);
        }
        return cardno.substring(0, 4) + " **** **** ** " + cardno.slice(-2);
    } else {
        return "";
    }
}
/* pgTransactionDetailManager Start*/
function transactionDetailPageFunctions() {
    /* Success Pages Start*/
    this.setupForAskMoneySuccessFunc = function () {
        //Setup Navbar
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_askmoneyheader");
        Pages.pgTransactionDetail.nvBar.btnClose.visible = true;
        //Setup Header
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.lblHeader1.text = getTextFromLangVar("pgTransactionDetail_askmoneysuccessmsg");
        //Setup Amount
        Pages.pgTransactionDetail.sv.contMain.cont1.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = transactionDetailObject["trx_amount"] + " " + getTextFromLangVar("global_currency");
        //Setup FromWho
        if (transactionDetailObject["receiver_name"] && transactionDetailObject.receiver_name.length > 0) {
            Pages.pgTransactionDetail.sv.contMain.cont3.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = transactionDetailObject["receiver_name"];
            Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject["receiver_phone"]);
        } else {
            Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject["receiver_phone"]);
        }
        Pages.pgTransactionDetail.sv.contMain.cont3.lblTextSender.text = getTextFromLangVar("pgTransactionDetail_askmoneyfromwho");
        //Message
        Pages.pgTransactionDetail.sv.contMain.cont11.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont11.lblTransactionRepeat1.text = transactionDetailObject["message"];
        //Setup Buttons
        Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_askmoneynewtrx");
        //Bottom Info
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.label1.text = getTextFromLangVar("pgTransactionDetail_askmoneyyouwillnotify");
    }
    this.setupForSendMoneySuccessFunc = function () {
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_sendmoneyheader");
        Pages.pgTransactionDetail.nvBar.btnClose.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.lblHeader1.text = getTextFromLangVar("pgTransactionDetail_sendmoneysuccessmsg");
        Pages.pgTransactionDetail.sv.contMain.cont1.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = transactionDetailObject["trx_amount"] + " " + getTextFromLangVar("global_currency");
        if (transactionDetailObject["trx_tnacomission"] && transactionDetailObject["trx_tnacomission"] != "") {
            Pages.pgTransactionDetail.sv.contMain.cont19.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont19.lblAmount19.text = transactionDetailObject["trx_tnacomission"] + " " + getTextFromLangVar("global_currency");
        }
        if (transactionDetailObject["trx_tnainterest"] && transactionDetailObject["trx_tnainterest"] != "") {
            Pages.pgTransactionDetail.sv.contMain.cont20.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont20.lblAmount20.text = transactionDetailObject["trx_tnainterest"] + " " + getTextFromLangVar("global_currency");
        }
        if (saveAliasTypeForSendMoney == "CARDNOFROMENTERED" || saveAliasTypeForSendMoney == "GSMNUMBERFROMENTERED") {
            Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = (saveAliasTypeForSendMoney == "CARDNOFROMENTERED" ? getMaskCardNo(transactionDetailObject["receiver_cardno"]) : fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject["receiver_phone"]));
        } else if (saveAliasTypeForSendMoney == "CONTACTFROMFACEBOOK") {
            Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = transactionDetailObject["receiver_name"] + " " + transactionDetailObject["receiver_surname"];
        } else { //GSMNUMBERFROMCONTACT
            Pages.pgTransactionDetail.sv.contMain.cont2.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo21.text = transactionDetailObject["receiver_name"] + " " + transactionDetailObject["receiver_surname"];
            Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo22.text = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject["receiver_phone"]);
        }
        if (!(saveAliasTypeForSendMoney == "CARDNOFROMSAVEDALIAS" || saveAliasTypeForSendMoney == "GSMNUMBERFROMSAVEDALIAS")) {
            //Kaydedilmeyecek ve Kaydet buttonu gösterilmeyecek
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_sendmoneybtn1");
        }
        Pages.pgTransactionDetail.sv.contMain.cont3.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = transactionDetailObject["sender_cardname"];
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = getMaskCardNo(transactionDetailObject["sender_cardno"]);
        Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_sendmoneybtn2");
        Pages.pgTransactionDetail.sv.contMain.cont10.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont10.btn3.text = getTextFromLangVar("pgTransactionDetail_sendmoneybtn3");
        //Bottom Info
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.label1.text = getTextFromLangVar("pgTransactionDetail_sendmoneycancancelnotify");
    }
    this.setupForOrderedDirectiveSuccessFunc = function () {
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_orderedheader");
        Pages.pgTransactionDetail.nvBar.btnClose.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.lblHeader1.text = getTextFromLangVar("pgTransactionDetail_orderedsuccessmsg");
        Pages.pgTransactionDetail.sv.contMain.cont1.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = transactionDetailObject["trx_amount"] + " " + getTextFromLangVar("global_currency");
        Pages.pgTransactionDetail.sv.contMain.cont3.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = transactionDetailObject["sender_cardname"];
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = getMaskCardNo(transactionDetailObject["sender_cardno"]);
        Pages.pgTransactionDetail.sv.contMain.cont4.visible = false;
        var valText = "";
        if (saveAliasTypeForSendMoney == "CARDNOFROMSAVEDALIAS"
             || saveAliasTypeForSendMoney == "CARDNOFROMENTERED") {
            valText = transactionDetailObject["receiver_cardno"];
        } else {
            valText = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject["receiver_phone"]);
        }
        if (transactionDetailObject["receiver_name"] && transactionDetailObject["receiver_name"] != "") {
            Pages.pgTransactionDetail.sv.contMain.cont2.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo21.text = transactionDetailObject["receiver_name"] + " " + transactionDetailObject["receiver_surname"];
            Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo22.text = valText;
        } else {
            Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = valText;
        }
        if (transactionDetailObject["trx_count"] > 1) {
            Pages.pgTransactionDetail.sv.contMain.cont5.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont5.lblTransactionRepeat.text = transactionDetailObject["trx_count"];
            Pages.pgTransactionDetail.sv.contMain.cont9.lblTextAmount1.text = getTextFromLangVar("pgTransactionDetail_orderedfirsttrxdate");
        }
        if (!(saveAliasTypeForSendMoney == "CARDNOFROMSAVEDALIAS" || saveAliasTypeForSendMoney == "GSMNUMBERFROMSAVEDALIAS")) {
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_sendmoneybtn1");
        }
        Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_sendmoneybtn3");
        Pages.pgTransactionDetail.sv.contMain.cont9.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont9.lblAmount1.text = getDateWithMontName(transactionDetailObject["trx_firstdate"]);
        //Bottom Info
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.label1.text = getTextFromLangVar("pgTransactionDetail_orderedcancancelnotify");
    }
    this.setupForTransferMoneySuccessFunc = function () {
        //Setup Navbar
        Pages.pgTransactionDetail.nvBar.btnClose.visible = true;
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_transfersheader");
        //Setup Header
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.lblHeader1.text = getTextFromLangVar("pgTransactionDetail_transfersuccessmsg");
        //Setup Amount
        Pages.pgTransactionDetail.sv.contMain.cont1.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = transactionDetailObject["trx_amount"] + " " + getTextFromLangVar("global_currency");
        //Setup Receive
        Pages.pgTransactionDetail.sv.contMain.cont2.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo21.text = transactionDetailObject["receiver_cardname"];
        Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo22.text = getMaskCardNo(transactionDetailObject["receiver_cardno"]);
        //Setup Sender
        Pages.pgTransactionDetail.sv.contMain.cont3.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = transactionDetailObject["sender_name"];
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject["sender_phone"]);
        //Setup Buttons
        Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_transferbtn1");
        Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_transferbtn2");
    }
    this.setupForQRSuccessFunc = function () {
        //Setup Navbar
        Pages.pgTransactionDetail.nvBar.btnClose.visible = true;
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_qrheader");
        //Setup Header -contHeader
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.lblHeader1.text = getTextFromLangVar("pgTransactionDetail_qrsuccessmsg");
        //Setup Amount -cont1
        Pages.pgTransactionDetail.sv.contMain.cont1.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.a_TransactionAmount + " " + getTextFromLangVar("global_currency");
        //Setup Receive -cont8
        Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.name_surname;
        //Setup Sender -cont3
        Pages.pgTransactionDetail.sv.contMain.cont3.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.a_SenderName + Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.a_SenderSurname;
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.a_SenderGsmNo;
        //Setup Date -cont4
        Pages.pgTransactionDetail.sv.contMain.cont4.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont4.lblTrancastionDate.text = Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.full_date;
        //Setup Button cont6
        Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_qrbtn1");
    }
    /* Success Pages End */
    /* Detail Pages Start */
    this.setupForOrderedTransactionDetailFunc = function () {
        //Setup Navbar
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_ordereddetailnavheader");
        if (!isAndroid) {
            Pages.pgTransactionDetail.nvBar.btnBack.visible = true;
        }
        //Setup Date
        Pages.pgTransactionDetail.sv.contMain.cont9.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont9.lblAmount1.text = getDateWithMontName(transactionDetailObject.trx_date);
        //Setup Amount
        Pages.pgTransactionDetail.sv.contMain.cont1.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = transactionDetailObject.trx_amount + " " + getTextFromLangVar("global_currency");
        //Setup Header
        Pages.pgTransactionDetail.sv.contMain.contHeader.visible = true;
        if (transactionDetailObject.trx_type == "ORDEREDTRXDUZENLI") {
            //Setup Count
            Pages.pgTransactionDetail.sv.contMain.cont12.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont12.lblTransactionRepeat2.text = transactionDetailObject.trx_count;
            Pages.pgTransactionDetail.sv.contMain.contHeader.lblHeader.text = getTextFromLangVar("pgTransactionDetail_ordereddetailregularlyheader");
            Pages.pgTransactionDetail.sv.contMain.contHeader.imgHeader.image = "icon_ordered2.png";
            Pages.pgTransactionDetail.sv.contMain.cont9.lblTextAmount1.text = getTextFromLangVar("pgTransactionDetail_ordereddetailfirstdate");
        } else {
            Pages.pgTransactionDetail.sv.contMain.contHeader.lblHeader.text = getTextFromLangVar("pgTransactionDetail_ordereddetailpostdatedheader");
            Pages.pgTransactionDetail.sv.contMain.contHeader.imgHeader.image = "icon_ordered1.png";
        }
        Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_ordereddetailbtn1");
        //Setup Sender Card
        if (transactionDetailObject.sender_name && transactionDetailObject.sender_name != "") {
            Pages.pgTransactionDetail.sv.contMain.cont3.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = transactionDetailObject.sender_name;
            Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = getMaskCardNo(transactionDetailObject.sender_cardno);
        } else {
            Pages.pgTransactionDetail.sv.contMain.cont13.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont13.lblSenderInfo811.text = getMaskCardNo(transactionDetailObject.sender_cardno);
        }
        var rtext2 = "";
        if (transactionDetailObject.receiver_phone && transactionDetailObject.receiver_phone.trim() != "") {
            rtext2 = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject.receiver_phone);
        } else if (transactionDetailObject.receiver_cardno && transactionDetailObject.receiver_cardno.trim() != "") {
            rtext2 = getMaskCardNo(transactionDetailObject.receiver_cardno);
        }
        //Setup Receiver Card
        if (transactionDetailObject.receiver_name && transactionDetailObject.receiver_name != "") {
            Pages.pgTransactionDetail.sv.contMain.cont2.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo21.text = transactionDetailObject.receiver_name;
            Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo22.text = rtext2;
        } else {
            Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = rtext2;
        }
    }
    this.setupForHistoryTransactionDetailFunc = function () {
        //Setup Navbar
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_historydetailnavheader");
        if (!isAndroid) {
            Pages.pgTransactionDetail.nvBar.btnBack.visible = true;
        }
        //Setup Header
        if (transactionDetailObject.trx_type == "3") { // Bana para geldi çekilmedi-aktarılmadı
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.visible = true;
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader2.text = transactionDetailObject.sender_name;
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader3.text = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject.sender_phone);
            Pages.pgTransactionDetail.sv.contMain.cont14.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont14.CopyoflblAmount11.text = getTextFromLangVar("pgTransactionDetail_historydetailsendedmoney");
            Pages.pgTransactionDetail.sv.contMain.cont14.lblAmount11.text = transactionDetailObject.trx_amount;
            Pages.pgTransactionDetail.sv.contMain.cont14.lblTextAmount11.text = getDateFormatForDetailPages(transactionDetailObject.trx_date);
            Pages.pgTransactionDetail.sv.contMain.cont16.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont16.lblTextAmount1111.text = transactionDetailObject["message"];
            Pages.pgTransactionDetail.sv.contMain.contBottomInfo.visible = true;
            Pages.pgTransactionDetail.sv.contMain.contBottomInfo.label1.text = getRemainDateStr(transactionDetailObject.trx_date);
            getProfilePicture_senderTckn = transactionDetailObject.sender_tckn;
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.contIconBack.CopyofActivityIndicator1.visible = true;
            SMF.Net.GetProfilePicture.run();
        } else if (transactionDetailObject.trx_type == "9") { //Birisi benden Para istedi
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.visible = true;
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader2.text = transactionDetailObject.sender_name;
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader3.text = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject.sender_phone);
            Pages.pgTransactionDetail.sv.contMain.cont14.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont14.CopyoflblAmount11.text = getTextFromLangVar("pgTransactionDetail_historydetailaskedmoney");
            Pages.pgTransactionDetail.sv.contMain.cont14.lblAmount11.text = transactionDetailObject.trx_amount;
            Pages.pgTransactionDetail.sv.contMain.cont14.lblTextAmount11.text = getDateFormatForDetailPages(transactionDetailObject.trx_date);
            Pages.pgTransactionDetail.sv.contMain.cont15.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont15.lblTextAmount111.text = transactionDetailObject["message"];
            //TODO calculate image border
            //transactionDetailObject["moneyreq_imageid"] = "27";
            if (transactionDetailObject["moneyreq_imageid"] != "0") {
                getWalletImage_imageId = transactionDetailObject["moneyreq_imageid"];
                Pages.pgTransactionDetail.sv.contMain.cont17.conImgSub11.visible = false;
                Pages.pgTransactionDetail.sv.contMain.cont17.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont17.ActivityIndicator1.visible = true;
                SMF.Net.GetWalletImage.run();
            }
            getProfilePicture_senderTckn = transactionDetailObject.sender_tckn;
            Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.contIconBack.CopyofActivityIndicator1.visible = true;
            SMF.Net.GetProfilePicture.run();
        } else {
            Pages.pgTransactionDetail.sv.contMain.contHeader.visible = true;
            Pages.pgTransactionDetail.sv.contMain.contHeader.lblHeader.text = transactionDetailObject.header_text;
            Pages.pgTransactionDetail.sv.contMain.contHeader.imgHeader.image = transactionDetailObject.header_icon;
            //Setup Date
            if (transactionDetailObject.trx_date && transactionDetailObject.trx_date.trim() != "") {
                Pages.pgTransactionDetail.sv.contMain.cont9.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont9.lblAmount1.text = getDateFormatForDetailPages(transactionDetailObject.trx_date);
            }
            //Setup Amount
            if (transactionDetailObject.trx_amount && transactionDetailObject.trx_amount != "") {
                Pages.pgTransactionDetail.sv.contMain.cont1.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = transactionDetailObject.trx_amount + " " + getTextFromLangVar("global_currency");
            }
            //Setup Sender
            var stext1 = "";
            if (transactionDetailObject.sender_name && transactionDetailObject.sender_name.trim() != "") {
                stext1 = transactionDetailObject.sender_name;
            }
            var stext2 = "";
            if (transactionDetailObject.sender_phone && transactionDetailObject.sender_phone.trim() != "") {
                stext1 = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject.sender_phone);
            } else if (transactionDetailObject.sender_cardno && transactionDetailObject.sender_cardno.trim() != "") {
                stext1 = getMaskCardNo(transactionDetailObject.sender_cardno);
            }
            if (stext1 != "" && stext2 != "") {
                Pages.pgTransactionDetail.sv.contMain.cont3.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = stext1;
                Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = stext2;
            } else if (stext1 != "") {
                Pages.pgTransactionDetail.sv.contMain.cont13.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont13.lblSenderInfo811.text = stext1;
            } else if (stext2 != "") {
                Pages.pgTransactionDetail.sv.contMain.cont13.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont13.lblSenderInfo811.text = stext2;
            }
            //Setup Receiver
            var rtext1 = "";
            if (transactionDetailObject.receiver_name && transactionDetailObject.receiver_name.trim() != "") {
                rtext1 = transactionDetailObject.receiver_name;
            }
            var rtext2 = "";
            if (transactionDetailObject.receiver_phone && transactionDetailObject.receiver_phone.trim() != "") {
                rtext2 = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject.receiver_phone);
            } else if (transactionDetailObject.receiver_cardno && transactionDetailObject.receiver_cardno.trim() != "") {
                rtext2 = getMaskCardNo(transactionDetailObject.receiver_cardno);
            }
            if (rtext1 != "" && rtext2 != "") {
                Pages.pgTransactionDetail.sv.contMain.cont2.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo21.text = rtext1;
                Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo22.text = rtext2;
            } else if (rtext1 != "") {
                Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = rtext1;
            } else if (rtext2 != "") {
                Pages.pgTransactionDetail.sv.contMain.cont8.visible = true;
                Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = rtext2;
            }
        }
        this.setupButtonsForDetails();
    }
    this.setupAtmTransactionDetailFunc = function () {
        //Setup Navbar
        Pages.pgTransactionDetail.nvBar.lblNavBar.text = getTextFromLangVar("pgTransactionDetail_atmnavheader");
        if (!isAndroid) {
            Pages.pgTransactionDetail.nvBar.btnBack.visible = true;
        }
        //Setup Header
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader2.text = transactionDetailObject.sender_name;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader3.text = fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(transactionDetailObject.sender_phone);
        Pages.pgTransactionDetail.sv.contMain.cont14.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont14.CopyoflblAmount11.text = getTextFromLangVar("pgTransactionDetail_atmsendedmoney");
        Pages.pgTransactionDetail.sv.contMain.cont14.lblAmount11.text = transactionDetailObject.trx_amount;
        Pages.pgTransactionDetail.sv.contMain.cont14.lblTextAmount11.text = getDateFormatForDetailPages(transactionDetailObject.trx_date);
        Pages.pgTransactionDetail.sv.contMain.cont16.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont16.lblTextAmount1111.text = getTextFromLangVar("pgTransactionDetail_atmcanwithdrawmoneynotify");
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.visible = true;
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.label1.text = getRemainDateStr(transactionDetailObject.trx_date);
        Pages.pgTransactionDetail.sv.contMain.cont18.visible = true;
        Pages.pgTransactionDetail.sv.contMain.cont18.lblTransactionRepeat11.text = transactionDetailObject.trx_atmreference;
        getProfilePicture_senderTckn = transactionDetailObject.sender_tckn;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.contIconBack.CopyofActivityIndicator1.visible = true;
        SMF.Net.GetProfilePicture.run();
    }
    this.setupButtonsForDetails = function () {
        if (transactionDetailObject.trx_type == "1") { //Cep Telefonuna Para Gönderdim. Para Çekildi.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendreceipt");
            Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoneyagain");
        } else if (transactionDetailObject.trx_type == "2") { //Cep Telefonuna Para Gönderdim. Para Çekilmedi/aktarılmadı
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtncancelsended");
            Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendsmsagain");
        } else if (transactionDetailObject.trx_type == "3") { // Bana para geldi çekilmedi-aktarılmadı
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtntransfertocard");
            Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnwithdrawfromatm");
        } else if (transactionDetailObject.trx_type == "4") { // Bana Para Geldi. Çekildi.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnaskmoney");
        } else if (transactionDetailObject.trx_type == "5") { //Bana Para Geldi Kartıma Aktardım.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnaskmoneyagain");
            //Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
            //Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendreceipt");
        } else if (transactionDetailObject.trx_type == "6") { //Ben Para Gönderdim. GÖnderdiğim kişi parayı aktardı.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendreceipt");
            Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoneyagain");
        } else if (transactionDetailObject.trx_type == "7") { // Gönderdiğim ama çekilmeyen para iade edildi
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoneyagain");
        } else if (transactionDetailObject.trx_type == "8") { // Gelen ama çekmediğim para iade edildi.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnaskmoneyagain");
        } else if (transactionDetailObject.trx_type == "9") { //Birisi benden Para istedi
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoney");
        } else if (transactionDetailObject.trx_type == "10") { //Cüzdan Kullanıcısından para istedim
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnaskmoneyagain");
        } else if (transactionDetailObject.trx_type == "11") { // Birisi benden para istedi ve gönderdim
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoneyagain");
        } else if (transactionDetailObject.trx_type == "12") { //Cüzdan kullanıcısından para istedim ve gönderdi sagolsun
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnaskmoneyagain");
        } else if (transactionDetailObject.trx_type == "13") { //Debit Karta para gönderdim
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendreceipt");
            Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoneyagain");
        } else if (transactionDetailObject.trx_type == "14") { //Birisi benim debit kartıma para gönderdi.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoney");
        } else if (transactionDetailObject.trx_type == "15") { //Kredi kartı ödemesi yaptım
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendreceipt");
            Pages.pgTransactionDetail.sv.contMain.cont7.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoneyagain");
        } else if (transactionDetailObject.trx_type == "16") { //birisi benm kredi kartıma ödeme yaptı
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoney");
        } else if (transactionDetailObject.trx_type == "17") { //Kartıma para aktardım
            //            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            //            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendreceipt");
        } else if (transactionDetailObject.trx_type == "18") { //Gönderdiğim parayı iptal ettim.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnsendmoneyagain");
        } else if (transactionDetailObject.trx_type == "19") { //Para gelmişti iptal etmiş.
            Pages.pgTransactionDetail.sv.contMain.cont6.visible = true;
            Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = getTextFromLangVar("pgTransactionDetail_historydetailbtnaskmoneyagain");
        }
    }
    /* Detail Pages End*/
    this.resetpgTransactionDetailFunc = function () {
        Pages.pgTransactionDetail.nvBar.btnClose.visible = false;
        Pages.pgTransactionDetail.nvBar.btnBack.visible = false;
        Pages.pgTransactionDetail.sv.contMain.contHeader.visible = false;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.visible = false;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont1.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont2.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont3.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont4.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont5.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont6.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont7.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont8.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont9.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont10.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont11.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont12.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont13.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont14.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont15.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont16.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont17.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont17.conImgSub11.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont17.ActivityIndicator1.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont18.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont19.visible = false;
        Pages.pgTransactionDetail.sv.contMain.cont20.visible = false;
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.visible = false;
        Pages.pgTransactionDetail.sv.btnInfo.visible = false;
        Pages.pgTransactionDetail.sv.contMain.contHeader.lblHeader.text = "";
        Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.lblHeader1.text = "";
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader2.text = "";
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.contIconBack.imgHeader2.image = "icon_contacts.png";
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.contIconBack.CopyofActivityIndicator1.visible = false;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader3.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo21.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo22.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont3.lblTextSender.text = getTextFromLangVar("pgTransactionDetail_historydetailsenderlabel");
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont4.lblTrancastionDate.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont5.lblTransactionRepeat.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont11.lblTransactionRepeat1.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont6.btn1.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont7.btn2.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont10.btn3.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont9.lblAmount1.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont9.lblTextAmount1.text = getTextFromLangVar("pgTransactionDetail_historydetailtrxdatelabel");
        Pages.pgTransactionDetail.sv.contMain.cont12.lblTransactionRepeat2.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont13.lblSenderInfo811.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont15.lblTextAmount111.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont16.lblTextAmount1111.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont17.conImgSub11.Image111.image = "";
        Pages.pgTransactionDetail.sv.contMain.cont18.lblTransactionRepeat11.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont19.lblAmount19.text = "";
        Pages.pgTransactionDetail.sv.contMain.cont20.lblAmount20.text = "";
        Pages.pgTransactionDetail.sv.contMain.contBottomInfo.label1.text = "";
        Pages.pgTransactionDetail.sv.scrollY = 0;
        Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.contIconBack.imgHeader2.imageFillType = SMF.UI.ImageFillType.normal;
    }
    /* Success Pages Show Start*/
    this.showDetailForAskMoneySuccess = function () {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupForAskMoneySuccessFunc();
            showPage(null, Pages.pgTransactionDetail, false);
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    this.showDetailForSendMoneySuccess = function () {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupForSendMoneySuccessFunc();
            showPage(null, Pages.pgTransactionDetail, false);
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    this.showDetailForOrderedDirectiveSuccess = function () {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupForOrderedDirectiveSuccessFunc();
            showPage(null, Pages.pgTransactionDetail, false);
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    this.showDetailForTransferMoneySuccess = function () {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupForTransferMoneySuccessFunc();
            showPage(null, Pages.pgTransactionDetail, false);
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    this.showDetailForQRSuccess = function () {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupForQRSuccessFunc();
            showPage(null, Pages.pgTransactionDetail, false);
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    /* Success Pages Show End*/
    /* Detail Pages Show */
    this.showOrderedTransactionDetail = function () {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupForOrderedTransactionDetailFunc();
            showPage(Pages.pgOrderedTransaction, Pages.pgTransactionDetail, true);
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    this.showHistoryTransactionDetail = function () {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupForHistoryTransactionDetailFunc();
            showPage(Pages.pgTransactionHistory, Pages.pgTransactionDetail, true);
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    this.showAtmTransactionDetail = function (fPage) {
        try {
            this.resetpgTransactionDetailFunc();
            this.setupAtmTransactionDetailFunc();
            if (fPage) {
                showPage(fPage, Pages.pgTransactionDetail, true);
            } else {
                showPage(null, Pages.pgTransactionDetail, false);
            }
        } catch (exe) {
            alertObject = alert(exe);
        }
    }
    /* Detail Pages Show */
}
function sendMoneyFromAskMoneyDetail() {
    clearSendMoney();
    returnPage = Pages.pgMyCards;
    sendMoney.selecedCardName = Data.ListCustomerCard_OutDSetb_WalletProduct.b_CardName;
    sendMoney.selecedCardNo = "*" + Data.ListCustomerCard_OutDSetb_WalletProduct.b_MaskedCardNumber.slice(-18);
    sendMoney.selecedCardId = Data.ListCustomerCard_OutDSetb_WalletProduct.b_CardID;
    sendMoney.selecedCardType = Data.ListCustomerCard_OutDSetb_WalletProduct.b_CardType;
    sendMoney.selecedCardSendValue = Data.ListCustomerCard_OutDSetb_WalletProduct.b_CardNo;
    sendMoney.modes.card = "done";
    svCard.designFilteredCards(Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards, Data.ListCustomerCard_OutDSetb_WalletProduct, "L_", Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.contScrlBar, sendMoneyPage(), Pages.pgMyCards);
}
var transactionDetailPageManager = new transactionDetailPageFunctions();
function getRemainDateStr(trxDate) {
    try {
        var newCurDate = new Date();
        var currentDateTime = newCurDate.getTime();
        trx_date = new Date(trxDate);
        trx_date = new Date(trx_date.getTime() + (trx_date.getTimezoneOffset() * 60000));
        if (trx_date > currentDateTime) {
            return getTextFromLangVar("pgTransactionDetail_historydetailfixyourdevicetime");
        } else {
            var remainStr = '';
            var endTime = 18;
            var diffDay = 7;
            var hourDiff = (trx_date.getUTCHours() < endTime ? (endTime - trx_date.getUTCHours()) : (24 - (trx_date.getUTCHours() - endTime)));
            trx_date.setUTCDate(trx_date.getUTCDate() + diffDay);
            trx_date.setUTCHours(trx_date.getUTCHours() + hourDiff);
            remainMiliSecond = trx_date.getTime() - currentDateTime;
            if (remainMiliSecond < 0) {
                return getTextFromLangVar("pgTransactionDetail_historydetailtimesupreversed");
            } else {
                var one_min = 1000 * 60;
                var one_hour = one_min * 60;
                var one_day = one_hour * 24;
                var remainDay = Math.floor(remainMiliSecond / one_day);
                remainMiliSecond = (remainMiliSecond - (remainDay * one_day));
                var remainHour = Math.floor((remainMiliSecond) / one_hour);
                remainMiliSecond = (remainMiliSecond - (remainHour * one_hour));
                var remainMin = Math.floor(remainMiliSecond / one_min);
                remainDayStr = "";
                if (remainDay) {
                    remainDayStr = remainDay + ' ' + getTextFromLangVar("pgTransactionDetail_historydetailnotifyday");
                }
                remainHourStr = "";
                if (remainHour) {
                    remainHourStr = (remainDay > 0 ? ', ' : '') + remainHour + ' ' + getTextFromLangVar("pgTransactionDetail_historydetailnotifyhour");
                }
                remainMinStr = "";
                if (remainMin) {
                    remainMinStr = (remainDay + remainHour > 0 ? ', ' : '') + remainMin + ' ' + getTextFromLangVar("pgTransactionDetail_historydetailnotifyminute");
                }
                remainStr = getTextFromLangVar("pgTransactionDetail_historydetailremaindatepart1") + ' ' + remainDayStr + remainHourStr + remainMinStr + ' ' + getTextFromLangVar("pgTransactionDetail_historydetailremaindatepart2");
                return remainStr;
            }
        }
    } catch (ex) {
        alertObject = alert(ex);
    }
}
function resetTransactionDetailObject() {
    return [];
}
/* pgTransactionDetailManager End*/
function numberWithCommas(nmbr) {
    parts = parseFloat(nmbr).toFixed(2).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //alertObject = alert(parts[0]);
    return parts;
}
function setNotificationType() {
    var notificationType = Data.ListNotification_OutDSeta_WLTNotificaiton.a_NotificationType;
    if (notificationType == "0") {
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_icon = "icon_notifications_trx.png";
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_text = getTextFromLangVar("pgNotifications_tabTransactions");
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_name_surname = Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderName + " " + Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderSurName;
    } else if (notificationType == "1") {
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_icon = "icon_notifications_oppur.png";
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_text = getTextFromLangVar("pgNotifications_tabOppurtinities");
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_name_surname = Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderName + " " + Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderSurName;
    } else if (notificationType == "2") {
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_icon = "icon_notifications_waiting.png";
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_text = getTextFromLangVar("pgNotifications_tabWaitingTransactions");
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_name_surname = Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderName + " " + Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderSurName;
    } else if (notificationType == "3") {
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_icon = "icon_notifications_order.png";
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_text = getTextFromLangVar("pgNotifications_tabReminding");
        Data.ListNotification_OutDSeta_WLTNotificaiton.notification_name_surname = Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderName + " " + Data.ListNotification_OutDSeta_WLTNotificaiton.a_SenderSurName;
    }
}
function addZero(num) {
    return (num < 10 ? "0" : "") + num;
}
function getCardTypeFromReceiverCardType(paramtxt) {
    var str = "";
    switch (paramtxt) {
    case "DB":
        str = "DebitCard";
        break;
    case "CR":
        str = "CreditCard";
        break;
    case "VC":
        str = "VirtualCard";
        break;
    default:
        str = "";
        break;
    }
    return str;
}
function askMoneyAgain(param, pageFullName) {
    refreshPgAskMoney();
    isAskMoneyNewSuggestion = true;
    askMoneyNewSuggestion = new Object();
    askMoneyNewSuggestion.amount = param["trx_amount"];
    askMoneyNewSuggestion.message = param["message"];
    if (param["trx_type"] == "5"
         || param["trx_type"] == "4"
         || param["trx_type"] == "8"
         || param["trx_type"] == "19") {
        askMoneyNewSuggestion.phoneNumber = param["sender_phone"];
    } else {
        askMoneyNewSuggestion.phoneNumber = param["receiver_phone"];
    }
    showPage(pageFullName, Pages.pgAskMoney, true);
}
function sendMoneyAgain(param, pageFullName) {
    try {
        dsetCardIndex = null;
        if (svCard.validFilteredCardCount(Data.ListCustomerCard_OutDSetb_WalletProduct) == true) {
            clearSendMoney();
            sendMoney.amount = param["trx_amount"];
            sendMoney.calledFrom = "SENDMONEYAGAIN";
            Pages.pgSendMoney3.svMain.contBottom.contTutar.contTInprogress.contAmountEdt.edtAmount.text = param["trx_amount"];
            sendMoney.modes.amount = "done";
            var phonetxt = "";
            var cardtxt = "";
            var nametxt = "";
            var surnametxt = "";
            if (param["trx_type"] == "1"
                 || param["trx_type"] == "2"
                 || param["trx_type"] == "6"
                 || param["trx_type"] == "7"
                 || param["trx_type"] == "11"
                 || param["trx_type"] == "18") {
                phonetxt = param["receiver_phone"];
            } else if (param["trx_type"] == "9"
                 || param["trx_type"] == "14"
                 || param["trx_type"] == "16") {
                nametxt = param["sender_name"];
                surnametxt = param["sender_surname"];
                phonetxt = param["sender_phone"];
            } else if (param["trx_type"] == "13"
                 || param["trx_type"] == "15") {
                cardtxt = param["receiver_cardno"];
            }
            var tmpMessage = getTextFromLangVar("pgSendMoney6_noMessage");
            if (param["trx_type"] == "1"
                 || param["trx_type"] == "2"
                 || param["trx_type"] == "6"
                 || param["trx_type"] == "7"
                 || param["trx_type"] == "11"
                 || param["trx_type"] == "13"
                 || param["trx_type"] == "15"
                 || param["trx_type"] == "18") {
                if (param["message"] && param["message"] != "") {
                    tmpMessage = param["message"];
                }
            }
            //            alertObject = alert("nametxt " + nametxt + "\n" + "cardtxt " + cardtxt);
            if (phonetxt) {
                sendMoneyCallingFrom = "pgTransactionDetail";
                sendMoney.receiverTel = phonetxt;
                sendMoney.receiverFullName = nametxt + " " + surnametxt;
                sendMoney.receiverName = nametxt;
                sendMoney.receiverSurname = surnametxt;
                sendMoney.receiverSendValue = phonetxt;
                sendMoney.receiverBanner = phonetxt;
                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contTel.edtPhoneNumber.text = phonetxt;
                sendMoney.receiverType = "cep";
                sendMoney.modes.receiver = "done";
                sendMoney.transferType = getTextFromLangVar("pgSendMoney4_OtherPayments");
                sendMoney.modes.paymentType = "passed";
                sendMoney.message = tmpMessage;
                Pages.pgSendMoney5.svMain.contBottom.contMesaj.contMInprogress.Container1.EditBox1.text = tmpMessage;
                sendMoney.modes.message = "passed";
                svCard.designFilteredCards(Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards, Data.ListCustomerCard_OutDSetb_WalletProduct, "L_", Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.contScrlBar, sendMoneyPage(), pageFullName);
            } else if (cardtxt) {
                sendMoneyCallingFrom = "pgTransactionDetail";
                receiverCardNo = cardtxt;
                var decReceiverCardNo = dec(cardtxt);
                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo1.text = decReceiverCardNo.substring(0, 4);
                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo2.text = decReceiverCardNo.substring(4, 8);
                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo3.text = decReceiverCardNo.substring(8, 12);
                Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contCardNo.edtCardNo4.text = decReceiverCardNo.substring(12);
                sendMoney.receiverBanner = cardtxt;
                sendMoney.receiverSendValue = dec(cardtxt);
                sendMoney.receiverFullName = nametxt + " " + surnametxt;
                sendMoney.receiverName = nametxt;
                sendMoney.receiverSurname = surnametxt;
                sendMoney.transferType = getTextFromLangVar("pgSendMoney4_OtherPayments");
                sendMoney.modes.paymentType = "passed";
                sendMoney.message = tmpMessage;
                Pages.pgSendMoney5.svMain.contBottom.contMesaj.contMInprogress.Container1.EditBox1.text = tmpMessage;
                sendMoney.modes.message = "passed";
                sendMoney.modes.receiver = "done";
                Dialogs.dlgLoading.show();
                svCard.designFilteredCards(Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards, Data.ListCustomerCard_OutDSetb_WalletProduct, "L_", Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.contScrlBar, null, null);
                pgHistory.push(pageFullName);
                Dialogs.dlgLoading.show();
                SMF.Net.GetCardType.run(true);
            } else {
                alertObject = alert(getTextFromLangVar("pgTransactionDetail_sendMoneyAgainNoDataAlert")); //Ben yazdım düzenlensin
            }
        } else {
            alertObject = alert({
                    message : getTextFromLangVar("pgTransactionDetail_sendMoneyAgainNoCardAlert"),
                    title : getTextFromLangVar("global_alertTitle1"),
                    alpha : 1,
                    firstButtonText : getTextFromLangVar("global_alertBtn2"),
                    OnFirstButtonPressed : function () {}
                });
        }
    } catch (exx) {
        //alertObject = alert(exx);
    }
}
var pgTransferMoney_selectedTrxRefNo = "";
function showTransferMoneyPage(cardIndexForTransferMoney, selectedTrxRefNo) {
    if (svCard.validFilteredCardCount(Data.ListCustomerCard_OutDSetb_WalletProduct) == true) {
        if (cardIndexForTransferMoney) {
            transferMoney_CardIndex = cardIndexForTransferMoney;
        } else {
            transferMoney_CardIndex = 0;
            dsetCardIndex = 0;
        }
        Dialogs.dlgLoading2.show();
        resetTrxList();
        transactionStartDate = getPrevWeek("-");
        transactionEndDate = getToday("-");
        listAllTransactionsCalledFor = "pgComingMoney";
        if (selectedTrxRefNo) {
            pgTransferMoney_selectedTrxRefNo = selectedTrxRefNo;
        }
        SMF.Net.ListAllTransactionsByDate.run(true);
    } else {
        if (Data.ListCustomerCard_OutDSetb_WalletProduct.rowCount == 0) {
            alertObject = alert({
                    message : getTextFromLangVar("pgTransactions_alertCaseNoCardForTransfer"),
                    title : getTextFromLangVar("global_alertTitle3"),
                    alpha : 1,
                    firstButtonText : getTextFromLangVar("pgTransactions_alertCaseNoCardBtnApply"),
                    OnFirstButtonPressed : function () {
                        //if (isThereBonusCard && isTherePegasusCard && isThereVirtualCard) {
                        if (isTherePegasusCard && isThereVirtualCard) {
                            alertObject = alert({
                                    message : getTextFromLangVar("pgTransactions_cardApply"),
                                    title : getTextFromLangVar("global_alertTitle1"),
                                    alpha : 1,
                                    firstButtonText : getTextFromLangVar("global_alertBtn2"),
                                    OnFirstButtonPressed : function () {}
                                });
                        } else {
                            fromPage = Pages.pgTransactions;
                            Dialogs.dlgLoading.show();
                            SMF.Net.ListPublicCards.run(true);
                        }
                    },
                    secondButtonText : getTextFromLangVar("global_alertBtn1"),
                    OnSecondButtonPressed : function () {}
                });
        } else {
            alertObject = alert({
                    message : getTextFromLangVar("pgTransactionDetail_transferMoneyAgainNoCardAlert"),
                    title : getTextFromLangVar("global_alertTitle1"),
                    alpha : 1,
                    firstButtonText : getTextFromLangVar("global_alertBtn2"),
                    OnFirstButtonPressed : function () {
                        if (fromPage == Pages.pgTransactions);
                        Pages.pgDashboard.show();
                    }
                });
        }
    }
}
function wait1Second() {
    Dialogs.dlgLoading.show();
    Pages.pgTransactionHistory.tmrRefresh.active = true;
}
function clearAliasInfo() {
    Pages.pgAddNewPerson.conAccount.contNameSurname.edtName.text = "";
    Pages.pgAddNewPerson.conAccount.contNameSurname.edtSurname.text = "";
    Pages.pgAddNewPerson.conAccount.contPhoneCardNo.edtMobilePhone.text = "";
    Pages.pgAddNewPerson.conAccount.contPhoneCardNo.edtCardNo.text = "";
    Pages.pgAddNewPerson.conAccount.contContactPicture.imgProfilePicture.image = "icon_person.png";
    Pages.pgAddNewPerson.conAccount.contContactPicture.imgProfilePicture.imageFillType = SMF.UI.ImageFillType.normal;
    contactInformations.contactName = "";
    contactInformations.contactSurname = "";
    contactInformations.contactPhone = "";
    contactInformations.contactProfilePic = "";
    contactInformations.userProfilePic = "";
    contactInformations.contactCardNo = "";
    arrContactPhones = [];
}
var CryptoJS = CryptoJS || function (h, r) {
    var k = {},
    l = k.lib = {},
    n = function () {},
    f = l.Base = {
        extend : function (a) {
            n.prototype = this;
            var b = new n;
            a && b.mixIn(a);
            b.hasOwnProperty("init") || (b.init = function () {
                b.$super.init.apply(this, arguments)
            });
            b.init.prototype = b;
            b.$super = this;
            return b
        },
        create : function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init : function () {},
        mixIn : function (a) {
            for (var b in a)
                a.hasOwnProperty(b) && (this[b] = a[b]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone : function () {
            return this.init.prototype.extend(this)
        }
    },
    j = l.WordArray = f.extend({
            init : function (a, b) {
                a = this.words = a || [];
                this.sigBytes = b != r ? b : 4 * a.length
            },
            toString : function (a) {
                return (a || s).stringify(this)
            },
            concat : function (a) {
                var b = this.words,
                d = a.words,
                c = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (c % 4)
                    for (var e = 0; e < a; e++)
                        b[c + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((c + e) % 4);
                else if (65535 < d.length)
                    for (e = 0; e < a; e += 4)
                        b[c + e >>> 2] = d[e >>> 2];
                else
                    b.push.apply(b, d);
                this.sigBytes += a;
                return this
            },
            clamp : function () {
                var a = this.words,
                b = this.sigBytes;
                a[b >>> 2] &= 4294967295 <<
                32 - 8 * (b % 4);
                a.length = h.ceil(b / 4)
            },
            clone : function () {
                var a = f.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random : function (a) {
                for (var b = [], d = 0; d < a; d += 4)
                    b.push(4294967296 * h.random() | 0);
                return new j.init(b, a)
            }
        }),
    m = k.enc = {},
    s = m.Hex = {
        stringify : function (a) {
            var b = a.words;
            a = a.sigBytes;
            for (var d = [], c = 0; c < a; c++) {
                var e = b[c >>> 2] >>> 24 - 8 * (c % 4) & 255;
                d.push((e >>> 4).toString(16));
                d.push((e & 15).toString(16))
            }
            return d.join("")
        },
        parse : function (a) {
            for (var b = a.length, d = [], c = 0; c < b; c += 2)
                d[c >>> 3] |= parseInt(a.substr(c,
                        2), 16) << 24 - 4 * (c % 8);
            return new j.init(d, b / 2)
        }
    },
    p = m.Latin1 = {
        stringify : function (a) {
            var b = a.words;
            a = a.sigBytes;
            for (var d = [], c = 0; c < a; c++)
                d.push(String.fromCharCode(b[c >>> 2] >>> 24 - 8 * (c % 4) & 255));
            return d.join("")
        },
        parse : function (a) {
            for (var b = a.length, d = [], c = 0; c < b; c++)
                d[c >>> 2] |= (a.charCodeAt(c) & 255) << 24 - 8 * (c % 4);
            return new j.init(d, b)
        }
    },
    t = m.Utf8 = {
        stringify : function (a) {
            try {
                return decodeURIComponent(escape(p.stringify(a)))
            } catch (b) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse : function (a) {
            return p.parse(unescape(encodeURIComponent(a)))
        }
    },
    q = l.BufferedBlockAlgorithm = f.extend({
            reset : function () {
                this._data = new j.init;
                this._nDataBytes = 0
            },
            _append : function (a) {
                "string" == typeof a && (a = t.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process : function (a) {
                var b = this._data,
                d = b.words,
                c = b.sigBytes,
                e = this.blockSize,
                f = c / (4 * e),
                f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                a = f * e;
                c = h.min(4 * a, c);
                if (a) {
                    for (var g = 0; g < a; g += e)
                        this._doProcessBlock(d, g);
                    g = d.splice(0, a);
                    b.sigBytes -= c
                }
                return new j.init(g, c)
            },
            clone : function () {
                var a = f.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize : 0
        });
    l.Hasher = q.extend({
            cfg : f.extend(),
            init : function (a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset : function () {
                q.reset.call(this);
                this._doReset()
            },
            update : function (a) {
                this._append(a);
                this._process();
                return this
            },
            finalize : function (a) {
                a && this._append(a);
                return this._doFinalize()
            },
            blockSize : 16,
            _createHelper : function (a) {
                return function (b, d) {
                    return (new a.init(d)).finalize(b)
                }
            },
            _createHmacHelper : function (a) {
                return function (b, d) {
                    return (new u.HMAC.init(a,
                            d)).finalize(b)
                }
            }
        });
    var u = k.algo = {};
    return k
}
(Math);
(function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;
    var Base64 = C_enc.Base64 = {
        stringify : function (wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                while (base64Chars.length % 4) {
                    base64Chars.push(paddingChar);
                }
            }
            return base64Chars.join('');
        },
        parse : function (base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex != -1) {
                    base64StrLength = paddingIndex;
                }
            }
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
                    var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }
            return WordArray.create(words, nBytes);
        },
        _map : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
}
    ());
function d2h(d) {
    return d.toString(16);
}
function h2d(h) {
    return parseInt(h, 16);
}
function stringToHex(tmp) {
    var str = '',
    i = 0,
    tmp_len = tmp.length,
    c;
    for (; i < tmp_len; i += 1) {
        c = tmp.charCodeAt(i);
        str += d2h(c);
    }
    return str;
}
var otpValueForLogin = "";
var unixTimeForLogin = getUnixTime();
function getUnixTime() {
    return Math.floor(Date.now() / 1000);
}
//otp class
function OtpModel(secret, crypt) {
    var secret = secret; // secret key
    var crypt = crypt; // can be SHA-1 SHA-256 SHA-512
    function dec2hex(s) {
        return (s < 15.5 ? '0' : '') + Math.round(s).toString(16);
    }
    function hex2dec(s) {
        return parseInt(s, 16);
    }
    function base32tohex(base32) {
        var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        var bits = "";
        var hex = "";
        for (var i = 0; i < base32.length; i++) {
            var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += leftpad(val.toString(2), 5, '0');
        }
        for (var i = 0; i + 4 <= bits.length; i += 4) {
            var chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16);
        }
        return hex;
    }
    function leftpad(str, len, pad) {
        if (len + 1 >= str.length) {
            str = Array(len + 1 - str.length).join(pad) + str;
        }
        return str;
    }
    this.generate = function (data) {
        var timeShift = 0;
        if (arguments.length == 2) {
            timeShift = parseInt(arguments[1]);
        }
        return generateOtp(data, timeShift);
    }
    function generateOtp(data, timeShift) {
        (function (T) {
            function z(a, c, b) {
                var g = 0,
                f = [0],
                h = "",
                l = null,
                h = b || "UTF8";
                if ("UTF8" !== h && "UTF16" !== h)
                    throw "encoding must be UTF8 or UTF16";
                if ("HEX" === c) {
                    if (0 !== a.length % 2)
                        throw "srcString of HEX type must be in byte increments";
                    l = B(a);
                    g = l.binLen;
                    f = l.value
                } else if ("ASCII" === c || "TEXT" === c)
                    l = J(a, h), g = l.binLen, f = l.value;
                else if ("B64" === c)
                    l = K(a), g = l.binLen, f = l.value;
                else
                    throw "inputFormat must be HEX, TEXT, ASCII, or B64";
                this.getHash = function (a, c, b, h) {
                    var l = null,
                    d = f.slice(),
                    n = g,
                    p;
                    3 === arguments.length ? "number" !==
                    typeof b && (h = b, b = 1) : 2 === arguments.length && (b = 1);
                    if (b !== parseInt(b, 10) || 1 > b)
                        throw "numRounds must a integer >= 1";
                    switch (c) {
                    case "HEX":
                        l = L;
                        break;
                    case "B64":
                        l = M;
                        break;
                    default:
                        throw "format must be HEX or B64";
                    }
                    if ("SHA-1" === a)
                        for (p = 0; p < b; p++)
                            d = y(d, n), n = 160;
                    else if ("SHA-224" === a)
                        for (p = 0; p < b; p++)
                            d = v(d, n, a), n = 224;
                    else if ("SHA-256" === a)
                        for (p = 0; p < b; p++)
                            d = v(d, n, a), n = 256;
                    else if ("SHA-384" === a)
                        for (p = 0; p < b; p++)
                            d = v(d, n, a), n = 384;
                    else if ("SHA-512" === a)
                        for (p = 0; p < b; p++)
                            d = v(d, n, a), n = 512;
                    else
                        throw "Chosen SHA variant is not supported";
                    return l(d, N(h))
                };
                this.getHMAC = function (a, b, c, l, s) {
                    var d,
                    n,
                    p,
                    m,
                    w = [],
                    x = [];
                    d = null;
                    switch (l) {
                    case "HEX":
                        l = L;
                        break;
                    case "B64":
                        l = M;
                        break;
                    default:
                        throw "outputFormat must be HEX or B64";
                    }
                    if ("SHA-1" === c)
                        n = 64, m = 160;
                    else if ("SHA-224" === c)
                        n = 64, m = 224;
                    else if ("SHA-256" === c)
                        n = 64, m = 256;
                    else if ("SHA-384" === c)
                        n = 128, m = 384;
                    else if ("SHA-512" === c)
                        n = 128, m = 512;
                    else
                        throw "Chosen SHA variant is not supported";
                    if ("HEX" === b)
                        d = B(a), p = d.binLen, d = d.value;
                    else if ("ASCII" === b || "TEXT" === b)
                        d = J(a, h), p = d.binLen, d = d.value;
                    else if ("B64" ===
                        b)
                        d = K(a), p = d.binLen, d = d.value;
                    else
                        throw "inputFormat must be HEX, TEXT, ASCII, or B64";
                    a = 8 * n;
                    b = n / 4 - 1;
                    n < p / 8 ? (d = "SHA-1" === c ? y(d, p) : v(d, p, c), d[b] &= 4294967040) : n > p / 8 && (d[b] &= 4294967040);
                    for (n = 0; n <= b; n += 1)
                        w[n] = d[n]^909522486, x[n] = d[n]^1549556828;
                    c = "SHA-1" === c ? y(x.concat(y(w.concat(f), a + g)), a + m) : v(x.concat(v(w.concat(f), a + g, c)), a + m, c);
                    return l(c, N(s))
                }
            }
            function s(a, c) {
                this.a = a;
                this.b = c
            }
            function J(a, c) {
                var b = [],
                g,
                f = [],
                h = 0,
                l;
                if ("UTF8" === c)
                    for (l = 0; l < a.length; l += 1)
                        for (g = a.charCodeAt(l), f = [], 2048 < g ? (f[0] = 224 |
                                    (g & 61440) >>> 12, f[1] = 128 | (g & 4032) >>> 6, f[2] = 128 | g & 63) : 128 < g ? (f[0] = 192 | (g & 1984) >>> 6, f[1] = 128 | g & 63) : f[0] = g, g = 0; g < f.length; g += 1)
                            b[h >>> 2] |= f[g] << 24 - h % 4 * 8, h += 1;
                else if ("UTF16" === c)
                    for (l = 0; l < a.length; l += 1)
                        b[h >>> 2] |= a.charCodeAt(l) << 16 - h % 4 * 8, h += 2;
                return {
                    value : b,
                    binLen : 8 * h
                }
            }
            function B(a) {
                var c = [],
                b = a.length,
                g,
                f;
                if (0 !== b % 2)
                    throw "String of HEX type must be in byte increments";
                for (g = 0; g < b; g += 2) {
                    f = parseInt(a.substr(g, 2), 16);
                    if (isNaN(f))
                        throw "String of HEX type contains invalid characters";
                    c[g >>> 3] |= f << 24 - g % 8 * 4
                }
                return {
                    value : c,
                    binLen : 4 * b
                }
            }
            function K(a) {
                var c = [],
                b = 0,
                g,
                f,
                h,
                l,
                r;
                if (-1 === a.search(/^[a-zA-Z0-9=+\/]+$/))
                    throw "Invalid character in base-64 string";
                g = a.indexOf("=");
                a = a.replace(/\=/g, "");
                if (-1 !== g && g < a.length)
                    throw "Invalid '=' found in base-64 string";
                for (f = 0; f < a.length; f += 4) {
                    r = a.substr(f, 4);
                    for (h = l = 0; h < r.length; h += 1)
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(r[h]), l |= g << 18 - 6 * h;
                    for (h = 0; h < r.length - 1; h += 1)
                        c[b >> 2] |= (l >>> 16 - 8 * h & 255) << 24 - b % 4 * 8, b += 1
                }
                return {
                    value : c,
                    binLen : 8 * b
                }
            }
            function L(a,
                c) {
                var b = "",
                g = 4 * a.length,
                f,
                h;
                for (f = 0; f < g; f += 1)
                    h = a[f >>> 2] >>> 8 * (3 - f % 4), b += "0123456789abcdef".charAt(h >>> 4 & 15) + "0123456789abcdef".charAt(h & 15);
                return c.outputUpper ? b.toUpperCase() : b
            }
            function M(a, c) {
                var b = "",
                g = 4 * a.length,
                f,
                h,
                l;
                for (f = 0; f < g; f += 3)
                    for (l = (a[f >>> 2] >>> 8 * (3 - f % 4) & 255) << 16 | (a[f + 1 >>> 2] >>> 8 * (3 - (f + 1) % 4) & 255) << 8 | a[f + 2 >>> 2] >>> 8 * (3 - (f + 2) % 4) & 255, h = 0; 4 > h; h += 1)
                        b = 8 * f + 6 * h <= 32 * a.length ? b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(l >>> 6 * (3 - h) & 63) : b + c.b64Pad;
                return b
            }
            function N(a) {
                var c = {
                    outputUpper : !1,
                    b64Pad : "="
                };
                try {
                    a.hasOwnProperty("outputUpper") && (c.outputUpper = a.outputUpper),
                    a.hasOwnProperty("b64Pad") && (c.b64Pad = a.b64Pad)
                } catch (b) {}
                if ("boolean" !== typeof c.outputUpper)
                    throw "Invalid outputUpper formatting option";
                if ("string" !== typeof c.b64Pad)
                    throw "Invalid b64Pad formatting option";
                return c
            }
            function U(a, c) {
                return a << c | a >>> 32 - c
            }
            function u(a, c) {
                return a >>> c | a << 32 - c
            }
            function t(a, c) {
                var b = null,
                b = new s(a.a, a.b);
                return b = 32 >= c ? new s(b.a >>> c | b.b << 32 - c & 4294967295, b.b >>> c | b.a << 32 - c & 4294967295) :
                    new s(b.b >>> c - 32 | b.a << 64 - c & 4294967295, b.a >>> c - 32 | b.b << 64 - c & 4294967295)
            }
            function O(a, c) {
                var b = null;
                return b = 32 >= c ? new s(a.a >>> c, a.b >>> c | a.a << 32 - c & 4294967295) : new s(0, a.a >>> c - 32)
            }
            function V(a, c, b) {
                return a^c^b
            }
            function P(a, c, b) {
                return a & c^~a & b
            }
            function W(a, c, b) {
                return new s(a.a & c.a^~a.a & b.a, a.b & c.b^~a.b & b.b)
            }
            function Q(a, c, b) {
                return a & c^a & b^c & b
            }
            function X(a, c, b) {
                return new s(a.a & c.a^a.a & b.a^c.a & b.a, a.b & c.b^a.b & b.b^c.b & b.b)
            }
            function Y(a) {
                return u(a, 2)^u(a, 13)^u(a, 22)
            }
            function Z(a) {
                var c = t(a, 28),
                b = t(a,
                        34);
                a = t(a, 39);
                return new s(c.a^b.a^a.a, c.b^b.b^a.b)
            }
            function $(a) {
                return u(a, 6)^u(a, 11)^u(a, 25)
            }
            function aa(a) {
                var c = t(a, 14),
                b = t(a, 18);
                a = t(a, 41);
                return new s(c.a^b.a^a.a, c.b^b.b^a.b)
            }
            function ba(a) {
                return u(a, 7)^u(a, 18)^a >>> 3
            }
            function ca(a) {
                var c = t(a, 1),
                b = t(a, 8);
                a = O(a, 7);
                return new s(c.a^b.a^a.a, c.b^b.b^a.b)
            }
            function da(a) {
                return u(a, 17)^u(a, 19)^a >>> 10
            }
            function ea(a) {
                var c = t(a, 19),
                b = t(a, 61);
                a = O(a, 6);
                return new s(c.a^b.a^a.a, c.b^b.b^a.b)
            }
            function R(a, c) {
                var b = (a & 65535) + (c & 65535);
                return ((a >>> 16) + (c >>>
                        16) + (b >>> 16) & 65535) << 16 | b & 65535
            }
            function fa(a, c, b, g) {
                var f = (a & 65535) + (c & 65535) + (b & 65535) + (g & 65535);
                return ((a >>> 16) + (c >>> 16) + (b >>> 16) + (g >>> 16) + (f >>> 16) & 65535) << 16 | f & 65535
            }
            function S(a, c, b, g, f) {
                var h = (a & 65535) + (c & 65535) + (b & 65535) + (g & 65535) + (f & 65535);
                return ((a >>> 16) + (c >>> 16) + (b >>> 16) + (g >>> 16) + (f >>> 16) + (h >>> 16) & 65535) << 16 | h & 65535
            }
            function ga(a, c) {
                var b,
                g,
                f;
                b = (a.b & 65535) + (c.b & 65535);
                g = (a.b >>> 16) + (c.b >>> 16) + (b >>> 16);
                f = (g & 65535) << 16 | b & 65535;
                b = (a.a & 65535) + (c.a & 65535) + (g >>> 16);
                g = (a.a >>> 16) + (c.a >>> 16) + (b >>>
                    16);
                return new s((g & 65535) << 16 | b & 65535, f)
            }
            function ha(a, c, b, g) {
                var f,
                h,
                l;
                f = (a.b & 65535) + (c.b & 65535) + (b.b & 65535) + (g.b & 65535);
                h = (a.b >>> 16) + (c.b >>> 16) + (b.b >>> 16) + (g.b >>> 16) + (f >>> 16);
                l = (h & 65535) << 16 | f & 65535;
                f = (a.a & 65535) + (c.a & 65535) + (b.a & 65535) + (g.a & 65535) + (h >>> 16);
                h = (a.a >>> 16) + (c.a >>> 16) + (b.a >>> 16) + (g.a >>> 16) + (f >>> 16);
                return new s((h & 65535) << 16 | f & 65535, l)
            }
            function ia(a, c, b, g, f) {
                var h,
                l,
                r;
                h = (a.b & 65535) + (c.b & 65535) + (b.b & 65535) + (g.b & 65535) + (f.b & 65535);
                l = (a.b >>> 16) + (c.b >>> 16) + (b.b >>> 16) + (g.b >>> 16) + (f.b >>>
                    16) + (h >>> 16);
                r = (l & 65535) << 16 | h & 65535;
                h = (a.a & 65535) + (c.a & 65535) + (b.a & 65535) + (g.a & 65535) + (f.a & 65535) + (l >>> 16);
                l = (a.a >>> 16) + (c.a >>> 16) + (b.a >>> 16) + (g.a >>> 16) + (f.a >>> 16) + (h >>> 16);
                return new s((l & 65535) << 16 | h & 65535, r)
            }
            function y(a, c) {
                var b = [],
                g,
                f,
                h,
                l,
                r,
                s,
                u = P,
                t = V,
                v = Q,
                d = U,
                n = R,
                p,
                m,
                w = S,
                x,
                q = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                a[c >>> 5] |= 128 << 24 - c % 32;
                a[(c + 65 >>> 9 << 4) + 15] = c;
                x = a.length;
                for (p = 0; p < x; p += 16) {
                    g = q[0];
                    f = q[1];
                    h = q[2];
                    l = q[3];
                    r = q[4];
                    for (m = 0; 80 > m; m += 1)
                        b[m] = 16 > m ? a[m + p] : d(b[m - 3]^b[m - 8]^b[m -
                                    14]^b[m - 16], 1), s = 20 > m ? w(d(g, 5), u(f, h, l), r, 1518500249, b[m]) : 40 > m ? w(d(g, 5), t(f, h, l), r, 1859775393, b[m]) : 60 > m ? w(d(g, 5), v(f, h, l), r, 2400959708, b[m]) : w(d(g, 5), t(f, h, l), r, 3395469782, b[m]), r = l, l = h, h = d(f, 30), f = g, g = s;
                    q[0] = n(g, q[0]);
                    q[1] = n(f, q[1]);
                    q[2] = n(h, q[2]);
                    q[3] = n(l, q[3]);
                    q[4] = n(r, q[4])
                }
                return q
            }
            function v(a, c, b) {
                var g,
                f,
                h,
                l,
                r,
                t,
                u,
                v,
                z,
                d,
                n,
                p,
                m,
                w,
                x,
                q,
                y,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                e,
                A = [],
                B,
                k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
                    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452,
                    2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                d = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
                f = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
                if ("SHA-224" === b || "SHA-256" === b)
                    n = 64, g = (c + 65 >>> 9 << 4) + 15, w = 16, x = 1, e = Number, q = R, y = fa, C = S, D = ba, E = da, F = Y, G = $, I = Q, H = P, d = "SHA-224" === b ? d : f;
                else if ("SHA-384" === b || "SHA-512" === b)
                    n = 80, g = (c + 128 >>> 10 << 5) + 31, w = 32, x = 2, e = s, q = ga, y = ha, C = ia, D = ca, E = ea, F = Z, G = aa, I = X, H = W, k = [new e(k[0],
                            3609767458), new e(k[1], 602891725), new e(k[2], 3964484399), new e(k[3], 2173295548), new e(k[4], 4081628472), new e(k[5], 3053834265), new e(k[6], 2937671579), new e(k[7], 3664609560), new e(k[8], 2734883394), new e(k[9], 1164996542), new e(k[10], 1323610764), new e(k[11], 3590304994), new e(k[12], 4068182383), new e(k[13], 991336113), new e(k[14], 633803317), new e(k[15], 3479774868), new e(k[16], 2666613458), new e(k[17], 944711139), new e(k[18], 2341262773), new e(k[19], 2007800933), new e(k[20], 1495990901), new e(k[21], 1856431235),
                        new e(k[22], 3175218132), new e(k[23], 2198950837), new e(k[24], 3999719339), new e(k[25], 766784016), new e(k[26], 2566594879), new e(k[27], 3203337956), new e(k[28], 1034457026), new e(k[29], 2466948901), new e(k[30], 3758326383), new e(k[31], 168717936), new e(k[32], 1188179964), new e(k[33], 1546045734), new e(k[34], 1522805485), new e(k[35], 2643833823), new e(k[36], 2343527390), new e(k[37], 1014477480), new e(k[38], 1206759142), new e(k[39], 344077627), new e(k[40], 1290863460), new e(k[41], 3158454273), new e(k[42], 3505952657),
                        new e(k[43], 106217008), new e(k[44], 3606008344), new e(k[45], 1432725776), new e(k[46], 1467031594), new e(k[47], 851169720), new e(k[48], 3100823752), new e(k[49], 1363258195), new e(k[50], 3750685593), new e(k[51], 3785050280), new e(k[52], 3318307427), new e(k[53], 3812723403), new e(k[54], 2003034995), new e(k[55], 3602036899), new e(k[56], 1575990012), new e(k[57], 1125592928), new e(k[58], 2716904306), new e(k[59], 442776044), new e(k[60], 593698344), new e(k[61], 3733110249), new e(k[62], 2999351573), new e(k[63], 3815920427), new e(3391569614,
                            3928383900), new e(3515267271, 566280711), new e(3940187606, 3454069534), new e(4118630271, 4000239992), new e(116418474, 1914138554), new e(174292421, 2731055270), new e(289380356, 3203993006), new e(460393269, 320620315), new e(685471733, 587496836), new e(852142971, 1086792851), new e(1017036298, 365543100), new e(1126000580, 2618297676), new e(1288033470, 3409855158), new e(1501505948, 4234509866), new e(1607167915, 987167468), new e(1816402316, 1246189591)], d = "SHA-384" === b ? [new e(3418070365, d[0]), new e(1654270250, d[1]), new e(2438529370,
                                d[2]), new e(355462360, d[3]), new e(1731405415, d[4]), new e(41048885895, d[5]), new e(3675008525, d[6]), new e(1203062813, d[7])] : [new e(f[0], 4089235720), new e(f[1], 2227873595), new e(f[2], 4271175723), new e(f[3], 1595750129), new e(f[4], 2917565137), new e(f[5], 725511199), new e(f[6], 4215389547), new e(f[7], 327033209)];
                else
                    throw "Unexpected error in SHA-2 implementation";
                a[c >>> 5] |= 128 << 24 - c % 32;
                a[g] = c;
                B = a.length;
                for (p = 0; p < B; p += w) {
                    c = d[0];
                    g = d[1];
                    f = d[2];
                    h = d[3];
                    l = d[4];
                    r = d[5];
                    t = d[6];
                    u = d[7];
                    for (m = 0; m < n; m += 1)
                        A[m] = 16 > m ?
                            new e(a[m * x + p], a[m * x + p + 1]) : y(E(A[m - 2]), A[m - 7], D(A[m - 15]), A[m - 16]), v = C(u, G(l), H(l, r, t), k[m], A[m]), z = q(F(c), I(c, g, f)), u = t, t = r, r = l, l = q(h, v), h = f, f = g, g = c, c = q(v, z);
                    d[0] = q(c, d[0]);
                    d[1] = q(g, d[1]);
                    d[2] = q(f, d[2]);
                    d[3] = q(h, d[3]);
                    d[4] = q(l, d[4]);
                    d[5] = q(r, d[5]);
                    d[6] = q(t, d[6]);
                    d[7] = q(u, d[7])
                }
                if ("SHA-224" === b)
                    a = [d[0], d[1], d[2], d[3], d[4], d[5], d[6]];
                else if ("SHA-256" === b)
                    a = d;
                else if ("SHA-384" === b)
                    a = [d[0].a, d[0].b, d[1].a, d[1].b, d[2].a, d[2].b, d[3].a, d[3].b, d[4].a, d[4].b, d[5].a, d[5].b];
                else if ("SHA-512" === b)
                    a = [d[0].a,
                        d[0].b, d[1].a, d[1].b, d[2].a, d[2].b, d[3].a, d[3].b, d[4].a, d[4].b, d[5].a, d[5].b, d[6].a, d[6].b, d[7].a, d[7].b];
                else
                    throw "Unexpected error in SHA-2 implementation";
                return a
            }
            "function" === typeof define && typeof define.amd ? define(function () {
                return z
            }) : "undefined" !== typeof exports ? "undefined" !== typeof module && module.exports ? module.exports = exports = z : exports = z : T.jsSHA = z
        })(this);
        // end of jsSHA library
        try {
            var key = secret; // key is hex
            data = parseInt(data) + parseInt(timeShift);
            var time = leftpad(dec2hex(Math.floor(data / 30)), 16, '0'); // 30 seconds defined here
            var hmacObj = new jsSHA(time, 'HEX');
            var hmac = hmacObj.getHMAC(key, 'HEX', crypt, "HEX"); // sha-1 or sha-256 or sha-512 can be used here
            if (hmac == 'KEY MUST BE IN BYTE INCREMENTS') {
                log("Something is wrong"); // raises error
            } else {
                var offset = hex2dec(hmac.substring(hmac.length - 1));
            }
            var otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec('7fffffff')) + '';
            otp = (otp).substr(otp.length - 8, 8); // 8 digits otp is generated
            return otp;
        } catch (ex) {
            alertObject = alert(ex);
        }
    }
}
function selectImageFromGallery() {
        Device.Media.pickFromGallery({
            type : [SMF.MediaType.image],
            onSuccess : function (e) {
                try {
                    var im = new SMF.Image({
                            imageUri : e.file,
                            onSuccess : function (e) {
                                tempWidth = im.width;
                                tempHeight = im.height;
                                ratio = tempHeight > tempWidth ? tempHeight / 200 : tempWidth / 200;
                                var newImage;
                                im.resize({
                                    width : tempWidth / ratio,
                                    height : tempHeight / ratio,
                                    compressionRate : 1,
                                    onSuccess : function (e) {
                                        newImage = new SMF.Image({
                                                imageUri : e.image,
                                                onSuccess : function (e) {
                                                    newImage.rotate({
                                                        angle : 0,
                                                        compressionRate : 1,
                                                        onSuccess : function (e) {
                                                            if (flagForSelectImage == "IMAGEFORASKMONEY") {
                                                                Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.ImageButtonPhoto.defaultImage = e.image;
                                                                Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.Label11.visible = false;
                                                                Data.dsAskMoneyDataset.Image = e.image;
                                                                Data.dsAskMoneyDataset.commit();
                                                                Data.dsAskMoneyDataset.refresh();
                                                                Data.notify("Data.dsAskMoneyDataset");
                                                            } else if (flagForSelectImage == "IMAGEFORADDFRIEND") {
                                                                aliasImageInsertType = "CAMERA";
                                                                Pages.pgAddNewPerson.conAccount.contContactPicture.imgProfilePicture.image = e.image;
                                                                Pages.pgAddNewPerson.conAccount.contContactPicture.imgProfilePicture.imageFillType = SMF.UI.ImageFillType.stretch;
                                                                Data.dsInsertAliasImage.alias_image = e.image;
                                                                Data.dsInsertAliasImage.commit();
                                                                Data.dsInsertAliasImage.refresh();
                                                                Data.notify("Data.dsInsertAliasImage");
                                                            }
                                                        },
                                                        onError : function (e) {
                                                            alert("Error: " + e.message);
                                                        }
                                                    });
                                                },
                                                onError : function (e) {
                                                    alert("Error: " + e.message);
                                                }
                                            });
                                    },
                                    onError : function (e) {
                                        alert("Error: " + e.message);
                                    }
                                });
                            },
                            onError : function (e) {}
                        });
                } catch (exx) {
                    alertObject = alert(exx)
                };
            },
            onCancel : function (e) {},
            onError : function (e) {}
        });
                                    }
function selectImageFromCamera() {
            SMF.Multimedia.startCamera(SMF.Multimedia.CameraType.rear, SMF.Multimedia.Resolution.large, 1,
            function(){},
            function(e){
                varim=newSMF.Image({
                    imageUri: e.photoUri,
                    onSuccess: function(e){
                        varnewImage;im.resize({
                            width: 200,
                            height: 200,
                            compressionRate: 1,
                            onSuccess: function(e){
                                newImage=newSMF.Image({
                                    imageUri: e.image,
                                    onSuccess: function(e){
                                                newImage.rotate({
                                            angle: 0,
                                            compressionRate: 1,
                                            onSuccess: function(e){
                                                if(flagForSelectImage=="IMAGEFORASKMONEY"){
                                                    Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.ImageButtonPhoto.defaultImage=e.image;Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.Label11.visible=false;Data.dsAskMoneyDataset.Image=e.image;Data.dsAskMoneyDataset.commit();Data.dsAskMoneyDataset.refresh();Data.notify("Data.dsAskMoneyDataset");
                                                        }
                                                    },
                                            onError: function(e){
                        }
                    });
            },
                                    onError: function(e){
    }
                                        });
                                },
                            onError: function(e){
}
            });
                            },
                    onError: function(e){
                            }
                        });
                });
}
function checkTrxNumber() {
    if (Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.rowCount == 0) {
        Pages.pgTransactionHistory.lblRecord.visible = true;
    } else {
        Pages.pgTransactionHistory.lblRecord.visible = false;
        if (!isAndroid) {
            if (Data.ListAllTransactionsByDate_OutDSeta_WLTTransaction.rowCount > 2) {
                Pages.pgTransactionHistory.rptBox.enableScroll = true;
            } else {
                Pages.pgTransactionHistory.rptBox.enableScroll = false;
            }
        }
    }
}
function selectOrderButtons(btn) {
    try {
        for (var i = 0; i < arrOrderButtons.length; i++) {
            if (btn.name == arrOrderButtons[i].name) {
                arrOrderButtons[i].defaultImage = "btn_orange_order.png";
                arrOrderButtons[i].highlightedImage = "btn_orange_order_pressed.png";
            } else {
                arrOrderButtons[i].defaultImage = "btn_black_order.png";
                arrOrderButtons[i].highlightedImage = "btn_black_order_pressed.png";
            }
        }
    } catch (ex) {
        alertObject = alert(ex);
    }
}
var callNotificationServicesForBadgets = false;
function callNotificationServiceForBadge() {
    callNotificationServicesForBadgets = true;
    callNotificationService();
}
function callNotificationService() {
    clearNotificationTable();
    //callNotificationServicesForBadgets = true;
    SMF.Net.ListNotification.run(true);
}
function clearNotificationTable() {
    //Data.ListNotification_OutDSeta_WLTNotificaiton.clear();
    //Data.ListNotification_OutDSeta_WLTNotificaiton.commit();
    //Data.ListNotification_OutDSeta_WLTNotificaiton.refresh();
    Data.ListNotificationDatasetForTrxBadgets.query = 'SELECT "ListNotification_OutDTbla_WLTNotificaiton".* FROM "ListNotification_OutDTbla_WLTNotificaiton" ORDER BY "ListNotification_OutDTbla_WLTNotificaiton"."notification_text", "ListNotification_OutDTbla_WLTNotificaiton"."notification_orderDate" DESC';
    Data.ListNotificationDatasetForTrxBadgets.refresh();
    Data.ListNotificationDatasetForTrxBadgets.clear();
    Data.ListNotificationDatasetForTrxBadgets.commit();
}
function getBadgetForSendMoney() {
    //var notificatonPageLastOpenedDate = "0";
    //if (SMF.restoreVariable('notificatonPageLastOpenedDate') != null) {
    //    notificatonPageLastOpenedDate = SMF.restoreVariable('notificatonPageLastOpenedDate');
    //}
    Data.ListNotificationDatasetForTrxBadgets.refresh();
    Data.ListNotificationDatasetForTrxBadgets.query = 'SELECT * FROM "ListNotification_OutDTbla_WLTNotificaiton" WHERE "ListNotification_OutDTbla_WLTNotificaiton"."a_TransactionType" = "10" AND "ListNotification_OutDTbla_WLTNotificaiton"."a_TransactionStatus" = "8" AND "ListNotification_OutDTbla_WLTNotificaiton"."a_NotificationType" = "2"'; // AND "ListNotification_OutDTbla_WLTNotificaiton"."notification_orderDate" > "' + notificatonPageLastOpenedDate+'"';
    Data.ListNotificationDatasetForTrxBadgets.refresh();
    return Data.ListNotificationDatasetForTrxBadgets.rowCount;
}
function getBadgetForAtmAndQr() {
    //var notificatonPageLastOpenedDate = "0";
    //if (SMF.restoreVariable('notificatonPageLastOpenedDate') != null) {
    //    notificatonPageLastOpenedDate = SMF.restoreVariable('notificatonPageLastOpenedDate');
    //}
    Data.ListNotificationDatasetForTrxBadgets.query = 'SELECT * FROM "ListNotification_OutDTbla_WLTNotificaiton" WHERE ("ListNotification_OutDTbla_WLTNotificaiton"."a_TransactionType" = "1" OR "ListNotification_OutDTbla_WLTNotificaiton"."a_TransactionType" = "2" OR "ListNotification_OutDTbla_WLTNotificaiton"."a_TransactionType" = "3") AND "ListNotification_OutDTbla_WLTNotificaiton"."a_TransactionStatus" = "3" AND "ListNotification_OutDTbla_WLTNotificaiton"."a_NotificationType" = "2" AND "ListNotification_OutDTbla_WLTNotificaiton"."a_TransactionDate" > datetime(\'now\', \'-7 days\')';
    Data.ListNotificationDatasetForTrxBadgets.refresh();
    return Data.ListNotificationDatasetForTrxBadgets.rowCount;
}
function fixFuckingPhoneCharProblemButItShouldBeFixOnServerSide(orjphonetext) {
    if (orjphonetext && orjphonetext.length > 9) {
        return orjphonetext.replace(/ /gi, "").slice(-10).replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2 $3 $4');
    } else {
        return "";
    }
}
function setTabBar() {
    try {
        //alert(Pages.pgDashboard.nvBar.height + " _ ");
        Pages.pgDashboard.conFooter.top = Device.screenHeight - Device.statusBarHeight - Pages.pgDashboard.conFooter.height;
        Pages.pgAskMoney.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgMap.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgReceivedMoneyList.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgSendMoney1.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgSendMoney2.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgSendMoney3.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgSendMoney4.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgSendMoney5.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgSendMoney6.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgTransactionHistory.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgTransactions.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgTransferMoney.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgMyCards.conFooter.top = Pages.pgDashboard.conFooter.top;
        Pages.pgTransactions.contTransactions.top = Pages.pgTransactions.nvBar.height;
        Pages.pgTransactions.contTransactions.height = Pages.pgTransactions.conFooter.top - Pages.pgTransactions.nvBar.height + Pages.pgTransactions.conFooter.imgWallet1.top;
        Pages.pgAskMoney.svMain.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgAskMoney.svMain.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgReceivedMoneyList.rptBox.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgReceivedMoneyList.rptBox.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgSendMoney1.svMain.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgSendMoney1.svMain.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgSendMoney2.svMain.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgSendMoney2.svMain.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgSendMoney3.svMain.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgSendMoney3.svMain.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgSendMoney4.svMain.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgSendMoney4.svMain.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgSendMoney5.svMain.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgSendMoney5.svMain.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgSendMoney6.svMain.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgSendMoney6.svMain.height = Pages.pgTransactions.contTransactions.height;
        Pages.pgTransferMoney.svMain.top = Pages.pgTransferMoney.nvBar.height;
        Pages.pgTransferMoney.svMain.height = Pages.pgTransferMoney.conFooter.top - Pages.pgTransferMoney.nvBar.height + Pages.pgTransferMoney.conFooter.imgWallet111.top;
        Pages.pgTransactionHistory.conFilter.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgTransactionHistory.rptBox.top = Pages.pgTransactionHistory.conFilter.top + Pages.pgTransactionHistory.conFilter.height;
        Pages.pgTransactionHistory.rptBox.height = Pages.pgTransactionHistory.conFooter.top - Pages.pgTransactionHistory.rptBox.top + Pages.pgTransactionHistory.conFooter.imgWallet.top;
        Pages.pgDashboard.conInfo.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgDashboard.ScrollView1.top = Pages.pgDashboard.conInfo.top + Pages.pgDashboard.conInfo.height;
        Pages.pgDashboard.ScrollView1.height = Pages.pgDashboard.conFooter.top - Pages.pgDashboard.ScrollView1.top + Pages.pgDashboard.conFooter.imgWallet.top;
        Pages.pgMyPage.svMenu.top = Pages.pgTransactions.contTransactions.top;
        Pages.pgMyPage.svMenu.height = Device.screenHeight - Device.statusBarHeight - Pages.pgMyPage.svMenu.top;
        //alert(Pages.pgMyPage.svMenu.height + " _ " + Pages.pgMyPage.svMenu.top);
    } catch (exx) {
        alert(exx);
    }
}
function enc(_data_) {
    encData = Cryptology.des3({
            data : _data_,
            masterKey : stringToHex(encpin),
            modeOfOperation : "ecb",
            initializationVector : "",
            paddingType : "pkcs7",
            mode : "encrypt",
            inputFormat : "byte",
            resultFormat : "hex"
        });
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(encData));
}
function dec(_data_) {
    decData = Cryptology.des3({
            data : _data_,
            masterKey : stringToHex(encpin),
            modeOfOperation : "ecb",
            initializationVector : "",
            paddingType : "pkcs7",
            mode : "decrypt",
            inputFormat : 0,
            resultFormat : "byte"
        });
    return decData.toString();
} {}
function updatePagesPlaceHolderFromLanguage() {
    try {
        Pages.pgTransactionHistory.conFilter.conSearch.cont.edtFilter.placeHolder = getTextFromLangVar("pgTransactionHistory_phFilterByName");
        Pages.pgAddNewPerson.conAccount.contNameSurname.edtName.placeHolder = getTextFromLangVar("pgAddNewPerson_phName");
        Pages.pgAddNewPerson.conAccount.contNameSurname.edtSurname.placeHolder = getTextFromLangVar("pgAddNewPerson_phSurname");
        Dialogs.dlgOrderDate.cont.contFirstDate.edtFirstDate.placeHolder = getTextFromLangVar("dlgOrderDate_phFirstDate");
        Dialogs.dlgOrderDate.cont.contSecondDate.edtSecondDate.placeHolder = getTextFromLangVar("dlgOrderDate_phSecondDate");
        Dialogs.dlgMailInput.con.conCardPIN.edtCardPIN.placeHolder = getTextFromLangVar("dlgMailInput_EmailField");
        Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.EditBoxMessage.placeHolder = getTextFromLangVar("pgAskMoney_mesaageInput");
        Dialogs.dlgActivateCard.con.conCardPIN.edtCardPIN.placeHolder = getTextFromLangVar("dlgActivateCard_passField");
        Pages.pgCreateAccount.conAccount.conAccountInfo.edtTCKN.placeHolder = getTextFromLangVar("pgCreateAccount_edtTCKNPlaceHolder");
        Pages.pgCreatePinForAccount.conAccount.conAccountInfo.edtPin.placeHolder = getTextFromLangVar("pgCreateAccount_edtPinPlaceHolder");
        Pages.pgCreatePinForAccount.conAccount.conAccountInfo.edtPinConfirm.placeHolder = getTextFromLangVar("pgCreateAccount_edtPinConfirmPlaceHolder");
        Pages.pgSendMoney3.svMain.contBottom.contTutar.contTInprogress.contAmountEdt.edtAmount.placeHolder = getTextFromLangVar("pgSendMoney3_edtAmountPlaceHolder");
        Pages.pgSendMoney5.svMain.contBottom.contMesaj.contMInprogress.Container1.EditBox1.placeHolder = getTextFromLangVar("pgSendMoney5_EditBox1PlaceHolder");
    } catch (exx) {
        alert(exx);
    }
}
function updatePagesTextsFromLanguage() {
    var updatePagesTextsFromLanguageArray = [];
    try {
        updatePagesTextsFromLanguageArray = [
            [Pages.pgWelcomeScreen.scroll1.con1.lbl1, "pgWelcomeScreen_lbl1"],
            [Pages.pgWelcomeScreen.scroll1.con1.lbl5, "pgWelcomeScreen_lbl5"],
            [Pages.pgWelcomeScreen.scroll1.con2.lbl2, "pgWelcomeScreen_lbl2"],
            [Pages.pgWelcomeScreen.scroll1.con2.lbl6, "pgWelcomeScreen_lbl6"],
            [Pages.pgWelcomeScreen.scroll1.con3.lbl3, "pgWelcomeScreen_lbl3"],
            [Pages.pgWelcomeScreen.scroll1.con3.lbl7, "pgWelcomeScreen_lbl7"],
            [Pages.pgWelcomeScreen.scroll1.con4.lbl4, "pgWelcomeScreen_lbl4"],
            [Pages.pgWelcomeScreen.scroll1.con4.lbl8, "pgWelcomeScreen_lbl8"],
            [Pages.pgWelcomeScreen.btnCreateAccount, "pgWelcomeScreen_btnCreateAccount"],
            [Dialogs.diagReadQR.contMain.lblInfo, "diagReadQR_lblInfo"],
            [Dialogs.diagReadQR.contMain.contRefCode.lbl, "diagReadQR_lbl"],
            [Dialogs.diagReadQR.contMain.contRefCode.lblRefCode, "diagReadQR_lblRefCode"],
            [Dialogs.dlgActivateCard.con.lblInfo, "dlgActivateCard_lblInfo"],
            [Dialogs.dlgActivateCard.con.btnActivateCard, "dlgActivateCard_btnActivateCard"],
            [Dialogs.dlgActivateCard.con.conHeader.Label1, "dlgActivateCard_Label1"],
            [Dialogs.dlgActivateCard.con.conCard.lblCardNum, "dlgActivateCard_lblCardNum"],
            [Dialogs.dlgActivateMyCards.contActivate.lblInfo, "dlgActivateMyCards_lblInfo"],
            [Dialogs.dlgCardActivate.Container1.Container2.Label1, "dlgCardActivate_Label1"],
            [Dialogs.dlgCardApplication.Container1.con.lblInfo1, "dlgCardApplication_lblInfo1"],
            [Dialogs.dlgCardApplication.Container1.con.lblInfo21, "dlgCardApplication_lblInfo21"],
            [Dialogs.dlgCardApplication.Container1.con.btnCardApplication1, "dlgCardApplication_btnCardApplication1"],
            [Dialogs.dlgContactSelect.cont.btn1, "dlgContactSelect_btn1"],
            [Dialogs.dlgContactSelect.cont.btn2, "dlgContactSelect_btn2"],
            [Dialogs.dlgInfo.conSendSMSAgain.lblIInfo, "dlgInfo_lblIInfo"],
            [Dialogs.dlgInfo.conSendSMSAgain.btnActivateCard, "dlgInfo_btnActivateCard"],
            [Dialogs.dlgMailInput.con.lblInfo, "dlgMailInput_lblInfo"],
            [Dialogs.dlgMailInput.con.btnActivateCard, "dlgMailInput_btnActivateCard"],
            [Dialogs.dlgMailInput.con.conHeader.Label1, "dlgMailInput_Label1"],
            [Dialogs.dlgOrder.cont.btnOrderDateDesc, "dlgOrder_btnOrderDateDesc"],
            [Dialogs.dlgOrder.cont.btnOrderDateAsc, "dlgOrder_btnOrderDateAsc"],
            [Dialogs.dlgOrder.cont.btnOrderAmountDesc, "dlgOrder_btnOrderAmountDesc"],
            [Dialogs.dlgOrder.cont.btnOrderAmountAsc, "dlgOrder_btnOrderAmountAsc"],
            [Dialogs.dlgOrderDate.cont.btnCall, "dlgOrderDate_btnCall"],
            [Dialogs.dlgPhotoSelect.cont.btn1, "dlgPhotoSelect_btn1"],
            [Dialogs.dlgPhotoSelect.cont.btn2, "dlgPhotoSelect_btn2"],
            [Dialogs.dlgPhotoSelect2.cont.btnGallery, "dlgPhotoSelect2_btnGallery"],
            [Dialogs.dlgPhotoSelect2.cont.btnFacebook, "dlgPhotoSelect2_btnFacebook"],
            [Dialogs.dlgStatementDate.conSendSMSAgain.btnConfirm, "dlgStatementDate_btnConfirm"],
            [Dialogs.dlgSuccesProcess.con.lblInfo, "dlgSuccesProcess_lblInfo"],
            [Dialogs.dlgSuccesProcess.con.btnCardApplication, "dlgSuccesProcess_btnCardApplication"],
            [Dialogs.dlgSuccesProcess.con.lblInfo2, "dlgSuccesProcess_lblInfo2"],
            [Pages.pgAbout.nvBar.lblHeader, "pgAbout_lblHeader"],
            [Pages.pgActivationOk.conAccount.btnNext, "pgActivationOk_btnNext"],
            [Pages.pgActivationOk.nvBar.lblHeader, "pgActivationOk_lblHeader"],
            [Pages.pgActivationOk.conAccount.lblSuccess, "pgActivationOk_lblSuccess"],
            [Pages.pgActivationOk.conAccount.lblInfo, "pgActivationOk_lblInfo"],
            [Pages.pgAddAndInviteFriend.nvBar.lblHeader, "pgAddAndInviteFriend_lblHeader"],
            [Pages.pgAddAndInviteFriend.conAccount.contPhoneBook.lblPhoneBooks, "pgAddAndInviteFriend_lblPhoneBooks"],
            [Pages.pgAddAndInviteFriend.conAccount.contFacebook.lblFacebook, "pgAddAndInviteFriend_lblFacebook"],
            [Pages.pgAddAndInviteFriend.conAccount.contNewRecord.lblNewContact, "pgAddAndInviteFriend_lblNewContact"],
            [Pages.pgAddAndInviteFriend.conAccount.contInvite.Copy3oflblPhoneBooks, "pgAddAndInviteFriend_Copy3oflblPhoneBooks"],
            [Pages.pgAddNewPerson.nvBar.lblHeader, "pgAddNewPerson_lblHeader"],
            [Pages.pgAddNewPerson.nvBar.btnSave, "pgAddNewPerson_btnSave"],
            [Pages.pgAskMoney.nvBar.lblHeader, "pgAskMoney_lblHeader"],
            [Pages.pgAskMoney.svMain.contTop.contAnimateReceiver.contReceiver.lblBanner, "pgAskMoney_lblBanner"],
            [Pages.pgAskMoney.svMain.contTop.contAnimateAmount.contAmount.lblBannerAmount, "pgAskMoney_lblBannerAmount"],
            [Pages.pgAskMoney.svMain.contMesaj.contMPending.lblMesajBanner, "pgAskMoney_lblMesajBanner"],
            [Pages.pgAskMoney.svMain.contMesaj.contMInprogress.lblAliciBanner31, "pgAskMoney_lblAliciBanner31"],
            [Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.Label11, "pgAskMoney_Label11"],
            [Pages.pgAskMoney.svMain.contMesaj.contMInprogress.Container111.Label21, "pgAskMoney_Label21"],
            [Pages.pgAskMoney.svMain.contTutar.contTPending.lblAmountBanner, "pgAskMoney_lblAmountBanner"],
            [Pages.pgAskMoney.svMain.contAliciSecimi.contASPending1.lblAliciBanner21, "pgAskMoney_lblAliciBanner21"],
            [Pages.pgAskMoney.svMain.contTutar.contTInprogress.lblAB, "pgAskMoney_lblAB"],
            [Pages.pgAskMoney.svMain.contAliciSecimi.contASInprogress.lblAliciBanner, "pgAskMoney_lblAliciBanner"],
            [Pages.pgAskMoney.svMain.contTutar.contTInprogress.ImageButtonAmountOk, "pgAskMoney_ImageButtonAmountOk"],
            [Pages.pgAskMoney.svMain.contBut.AskMoneyButton, "pgAskMoney_AskMoneyButton"],
            [Pages.pgAskMoney.svMain.contTop.contAnimateMessage.contMessage.lblBannerMessage, "pgAskMoney_lblBannerMessage"],
            [Pages.pgAskMoney.svMain.contAliciSecimi.contASInprogress.contTab.c1.lblLeft, "pgAskMoney_lblLeft"],
            [Pages.pgAskMoney.svMain.contAliciSecimi.contASInprogress.contTab.c2.lblRight, "pgAskMoney_lblRight"],
            [Pages.pgCardApprove.nvBar.lblHeader, "pgCardApprove_lblHeader"],
            [Pages.pgCardApprove.svCards.contCard2.lblUstCardDes2, "pgCardApprove_lblUstCardDes2"],
            [Pages.pgCardApprove.svCards.contCard2.lblAltCardDes2, "pgCardApprove_lblAltCardDes2"],
            [Pages.pgCardApprove.contInfo.lblInfo, "pgCardApprove_lblInfo"],
            [Pages.pgCardApprove.svCards.contCard3.lblUstCardDes3, "pgCardApprove_lblUstCardDes3"],
            [Pages.pgCardApprove.svCards.contCard3.lblAltCardDes3, "pgCardApprove_lblAltCardDes3"],
            [Pages.pgCardApprove.svCards.contCard1.lblUstCardDes1, "pgCardApprove_lblUstCardDes1"],
            [Pages.pgCardApprove.svCards.contCard1.lblAltCardDes1, "pgCardApprove_lblAltCardDes1"],
            [Pages.pgCardApprove.contBottom.btnApply, "pgCardApprove_btnApply"],
            [Pages.pgCardApproveDetail.nvBar.lblHeader, "pgCardApproveDetail_lblHeader"],
            [Pages.pgCardApproveDetail.btnApply, "pgCardApproveDetail_btnApply"],
            [Pages.pgCardDetailInfo.nvBar.lblHeader1, "pgCardDetailInfo_lblHeader1"],
            [Pages.pgCardSetting.nvBar.lblHeader1, "pgCardSetting_lblHeader1"],
            [Pages.pgCardSetting.ScrollView1.cont1.contCardDetailInfo1.lblCardDetailInfo1, "pgCardSetting_lblCardDetailInfo1"],
            [Pages.pgCardSetting.ScrollView1.cont1.contStatementDate1.lblStatementDate1, "pgCardSetting_lblStatementDate1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.lblMailTelephoneOrder1, "pgCardSetting_lblMailTelephoneOrder1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.lblQuashiCash1, "pgCardSetting_lblQuashiCash1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contLimit1.lblLimit1, "pgCardSetting_lblLimit1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblCardActive1, "pgCardSetting_lblCardActive1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblCardActiveDetail1, "pgCardSetting_lblCardActiveDetail1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.lblOff1, "pgCardSetting_lblOff1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contMailTelephoneOrder1.lblOn1, "pgCardSetting_lblOn1"],
            [Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.lblOff2, "pgCardSetting_lblOff2"],
            [Pages.pgCardSetting.ScrollView1.cont2.contLimit1.lblOff3, "pgCardSetting_lblOff3"],
            [Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblOff4, "pgCardSetting_lblOff4"],
            [Pages.pgCardSetting.ScrollView1.cont2.contQuashiCash1.lblOn2, "pgCardSetting_lblOn2"],
            [Pages.pgCardSetting.ScrollView1.cont2.contLimit1.lblOn3, "pgCardSetting_lblOn3"],
            [Pages.pgCardSetting.ScrollView1.cont2.contCardActive1.lblOn4, "pgCardSetting_lblOn4"],
            [Pages.pgCardSettingDebitCard.nvBar.lblHeader, "pgCardSettingDebitCard_lblHeader"],
            [Pages.pgCardSettingDebitCard.svMain.btnNext, "pgCardSettingDebitCard_btnNext"],
            [Pages.pgCardSettingDebitCard.svMain.contTop.contAccount.contSelectedAcc.lblAccountText, "pgCardSettingDebitCard_lblAccountText"],
            [Pages.pgCreateAccount.conAccount.btnNext, "pgCreateAccount_btnNext"],
            [Pages.pgCreateAccount.nvBar.lblHeader, "pgCreateAccount_lblHeader"],
            [Pages.pgCreateAccount.conAccount.Label1, "pgCreateAccount_Label1"],
            [Pages.pgCreateAccount.conAccount.lbl1, "pgCreateAccount_lbl1"],
            [Pages.pgCreatePinForAccount.conAccount.btnNext, "pgCreatePinForAccount_btnNext"],
            [Pages.pgCreatePinForAccount.nvBar.lblHeader, "pgCreatePinForAccount_lblHeader"],
            [Pages.pgCreatePinForAccount.conAccount.lbl1, "pgCreatePinForAccount_lbl1"],
            [Pages.pgCreatePinForAccount.conAccount.lbl2, "pgCreatePinForAccount_lbl2"],
            [Pages.pgDashboard.conInfo.lblInfo, "pgDashboard_lblInfo"],
            [Pages.pgDashboard.conInfo.lblAmount, "pgDashboard_lblAmount"],
            [Pages.pgDashboard.ScrollView1.rptBox.lblCardNum, "pgDashboard_lblCardNum"],
            [Pages.pgDashboard.ScrollView1.Container1.lblApply, "pgDashboard_lblApply"],
            [Pages.pgDashboard.ScrollView1.contBasvuru.ImageButton1, "pgDashboard_ImageButton1"],
            [Pages.pgDashboard.ScrollView1.contBasvuru.Label2, "pgDashboard_Label2"],
            [Pages.pgDashboard.ScrollView1.contBasvuru.Label3, "pgDashboard_Label3"],
            [Pages.pgDashboard.ScrollView1.rptBox.lblBalance, "pgDashboard_lblBalance"],
            [Pages.pgDashboard.conTooltip.conInnerTooltip.Container211.Label111, "pgDashboard_Label111"],
            [Pages.pgDashboard.ScrollView1.conYeniKartEkle.lblApply1, "pgDashboard_lblApply1"],
            [Pages.pgDashboard.ScrollView1.rptBox.lblBalanceBanner, "pgDashboard_lblBalanceBanner"],
            [Pages.pgDashboard.tempLblBalance, "pgDashboard_tempLblBalance"],
            [Pages.pgExpressWallet.nvBar.lblHeader, "pgExpressWallet_lblHeader"],
            [Pages.pgExpressWallet.rptBox.lbltL, "pgExpressWallet_lbltL"],
            [Pages.pgExpressWallet.lblRecord, "pgExpressWallet_lblRecord"],
            [Pages.pgHelp.nvBar.lblHeader, "pgHelp_lblHeader"],
            [Pages.pgInviteFriend.nvBar.lblHeader, "pgInviteFriend_lblHeader"],
            [Pages.pgLimitInfo.nvBar.lblHeader, "pgLimitInfo_lblHeader"],
            [Pages.pgLimitInfo.cont.contSended.lblTotalSended, "pgLimitInfo_lblTotalSended"],
            [Pages.pgLimitInfo.cont.contSended.lblTLS, "pgLimitInfo_lblTLS"],
            [Pages.pgLimitInfo.cont.contSended.lblTotalSenderLimit, "pgLimitInfo_lblTotalSenderLimit"],
            [Pages.pgLimitInfo.cont.contReceieved.lblTotalR, "pgLimitInfo_lblTotalR"],
            [Pages.pgLimitInfo.cont.contReceieved.lblTLR, "pgLimitInfo_lblTLR"],
            [Pages.pgLimitInfo.cont.contReceieved.lblTotalReceiveLimit, "pgLimitInfo_lblTotalReceiveLimit"],
            [Pages.pgLimitInfo.contMenu.lblGunlukTab, "pgLimitInfo_lblGunlukTab"],
            [Pages.pgLimitInfo.contMenu.lblAylikTab, "pgLimitInfo_lblAylikTab"],
            [Pages.pgLimitInfo.cont.btnTransHistory, "pgLimitInfo_btnTransHistory"],
            [Pages.pgLimitInfo.cont.contLimits.lblKalanLimitText1, "pgLimitInfo_lblKalanLimitText1"],
            [Pages.pgLimitInfo.cont.contLimits.lblKalanLimitText2, "pgLimitInfo_lblKalanLimitText2"],
            [Pages.pgLimitInfo.cont.Label4, "pgLimitInfo_Label4"],
            [Pages.pgLogin.nvBar.lblHeader, "pgLogin_lblHeader"],
            [Pages.pgLogin.conConfirmation.lblInfo, "pgLogin_lblInfo"],
            [Pages.pgLogin.conConfirmation.CopyoflblInfo, "pgLogin_CopyoflblInfo"],
            [Pages.pgLogin.conConfirmation.btnNotme, "pgLogin_btnNotme"],
            [Pages.pgLogin.conConfirmation.btnForgetPass, "pgLogin_btnForgetPass"],
            [Pages.pgMap.nvBar.lblHeader, "pgMap_lblHeader"],
            [Pages.pgMap.contMain.contMenu.Container2.Label1, "pgMap_Label1"],
            [Pages.pgMap.contMain.contMenu.Container3.Label2, "pgMap_Label2"],
            [Pages.pgMap.contMain.contMenu.Container4.CopyofLabel2, "pgMap_CopyofLabel2"],
            [Pages.pgMap.contMain.contSv.contList.RepeatBox1.Label6, "pgMap_Label6"],
            [Pages.pgMapDetail.nvBar.lblHeader, "pgMapDetail_lblHeader"],
            [Pages.pgMapDetail.scView.conDetailMain.conDetail.conSube.lblSube, "pgMapDetail_lblSube"],
            [Pages.pgMapDetail.scView.conDetailMain.conDetail.conKasa.lblKasa, "pgMapDetail_lblKasa"],
            [Pages.pgMapDetail.scView.conDetailMain.conDetail.conKasa.lblKasaDurumuText, "pgMapDetail_lblKasaDurumuText"],
            [Pages.pgMapDetail.scView.conDetailMain.conDetail.conAdres.lblAdres, "pgMapDetail_lblAdres"],
            [Pages.pgMapDetail.scView.conDetailMain.conDetail.conMesafe.lblMesafe, "pgMapDetail_lblMesafe"],
            [Pages.pgMapDetail.scView.conDetailMain.conDetail.conYolTarifi.ImageButton, "pgMapDetail_ImageButton"],
            [Pages.pgMapDetail.scView.conDetailMain.conDetail.conTelefon.lblTelefon, "pgMapDetail_lblTelefon"],
            [Pages.pgMyCards.nvBar.lblHeader, "pgMyCards_lblHeader"],
            [Pages.pgMyCards.svMenu.conDeclaration.lblDateBanner, "pgMyCards_lblDateBanner"],
            [Pages.pgMyCards.svMenu.conDeclaration.lblDateValue, "pgMyCards_lblDateValue"],
            [Pages.pgMyCards.svMenu.conDeclaration.lblPaymentBanner, "pgMyCards_lblPaymentBanner"],
            [Pages.pgMyCards.svMenu.conDeclaration.lblPaymentValue, "pgMyCards_lblPaymentValue"],
            [Pages.pgMyCards.svMenu.conMenu.conSendMoney.lblSendMoney, "pgMyCards_lblSendMoney"],
            [Pages.pgMyCards.svMenu.conMenu.conRequestMoney.lblRequestMoney, "pgMyCards_lblRequestMoney"],
            [Pages.pgMyCards.svMenu.conMenu.conTransferMoney.lblTransferMoney, "pgMyCards_lblTransferMoney"],
            [Pages.pgMyCards.contAmount.blbBanner, "pgMyCards_blbBanner"],
            [Pages.pgMyCards.svCards.contCard1.lblVirtualCard1, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard2.lblVirtualCard2, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard3.lblVirtualCard3, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard4.lblVirtualCard4, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard5.lblVirtualCard5, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard6.lblVirtualCard6, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard7.lblVirtualCard7, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard8.lblVirtualCard8, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard9.lblVirtualCard9, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyCards.svCards.contCard10.lblVirtualCard10, "pgMyCards_lblVirtualCard"],
            [Pages.pgMyPage.nvBar.lblHeader1, "pgMyPage_lblHeader1"],
            [Pages.pgMyPage.svMenu.cont3.lblINGWallet, "pgMyPage_lblINGWallet"],
            [Pages.pgMyPage.svMenu.cont1.subCont.lblCusName, "pgMyPage_lblCusName"],
            [Pages.pgMyPage.svMenu.cont2.contMyWallet.contHeaderMyWallet.lblOpportunities, "pgMyPage_lblOpportunities"],
            [Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contSummaryInfo.btnSummaryInfo, "pgMyPage_btnSummaryInfo"],
            [Pages.pgMyPage.svMenu.cont2.contSettings.contHeaderSettings.lblHeaderSettings, "pgMyPage_lblHeaderSettings"],
            [Pages.pgMyPage.svMenu.cont2.contSettings.contBodySettings.contCardSettings.btnCardSettings, "pgMyPage_btnCardSettings"],
            [Pages.pgMyPage.svMenu.cont4.contExpressWallet.contHeaderExpressWallet.lblHeaderExpressWallet, "pgMyPage_lblHeaderExpressWallet"],
            [Pages.pgMyPage.svMenu.cont4.contAdvantages.contHeaderAdvantages.lblHeaderAdvantages, "pgMyPage_lblHeaderAdvantages"],
            [Pages.pgMyPage.svMenu.cont5.lblINGWallet1, "pgMyPage_lblINGWallet1"],
            [Pages.pgMyPage.svMenu.cont6.contAbout.contHeaderAbout.lblHeaderAbout, "pgMyPage_lblHeaderAbout"],
            [Pages.pgMyPage.svMenu.cont6.contHelp.contHeaderHelp.lblHeaderHelp, "pgMyPage_lblHeaderHelp"],
            [Pages.pgMyPage.svMenu.cont6.contCallCenter.contHeaderCallCenter.lblHeaderCallCenter, "pgMyPage_lblHeaderCallCenter"],
            [Pages.pgMyPage.svMenu.cont7.btnClose, "pgMyPage_btnClose"],
            [Pages.pgMyPage.svMenu.cont4.contRegistered.contHeaderRegistered.lblHeaderRegistered, "pgMyPage_lblHeaderRegistered"],
            [Pages.pgMyPage.svMenu.cont4.contRegistered.contBodyRegistered.contRegisteredAlias.btnRegisteredAlias, "pgMyPage_btnRegisteredAlias"],
            [Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contWalletLimit.btnWalletLimit, "pgMyPage_btnWalletLimit"],
            [Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contIninalLimit.btnIninalLimit, "pgMyPage_btnIninalLimit"],
            [Pages.pgMyPage.svMenu.cont4.contRegistered.contBodyRegistered.contAddFriend.btnAddFriend, "pgMyPage_btnAddFriend"],
            [Pages.pgMyPage.svMenu.cont4.contRegisteredTrxMenu.contHeaderRegisteredTrxMenu.lblHeaderRegisteredTrxMenu, "pgMyPage_lblHeaderRegisteredTrxMenu"],
            [Pages.pgMyPage.svMenu.cont4.contRegisteredTrxMenu.contBodyRegisteredTrxMenu.contPostdatedTrx.btnPostdatedTrx, "pgMyPage_btnPostdatedTrx"],
            [Pages.pgMyPage.svMenu.cont4.contRegisteredTrxMenu.contBodyRegisteredTrxMenu.contRegularTrx.btnRegularTrx, "pgMyPage_btnRegularTrx"],
            [Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contNotifications.btnNotifications, "pgMyPage_btnNotifications"],
            [Pages.pgNotifications.nvBar.lblHeader, "pgNotifications_lblHeader"],
            [Pages.pgNotifications.contMain.lblRecord, "pgNotifications_lblRecord"],
            [Pages.pgNotifications.contMain.rpBxNotifications.btnTransferMoney, "pgNotifications_btnTransferMoney"],
            [Pages.pgNotifications.contMain.rpBxNotifications.btnWithDraw, "pgNotifications_btnWithDraw"],
            [Pages.pgNotifications.contMain.rpBxNotifications.btnSendMoney, "pgNotifications_btnSendMoney"],
            [Pages.pgOrderedTransaction.nvBar.lblHeader, "pgOrderedTransaction_lblHeader"],
            [Pages.pgOrderedTransaction.conFilter.conMenu.lblLater, "pgOrderedTransaction_lblLater"],
            [Pages.pgOrderedTransaction.conFilter.conMenu.lblOrder, "pgOrderedTransaction_lblOrder"],
            [Pages.pgOrderedTransaction.rptBox.Label4, "pgOrderedTransaction_Label4"],
            [Pages.pgOrderedTransaction.rptBox.Label6, "pgOrderedTransaction_Label6"],
            [Pages.pgOrderedTransaction.rptBox.Label7, "pgOrderedTransaction_Label7"],
            [Pages.pgOrderedTransaction.lblRecord, "pgOrderedTransaction_lblRecord"],
            [Pages.pgPrivacy.nvBar.lblHeader, "pgPrivacy_lblHeader"],
            [Pages.pgPrivacy.conAccount.btnNotAccept, "pgPrivacy_btnNotAccept"],
            [Pages.pgPrivacy.conAccount.btnAccept, "pgPrivacy_btnAccept"],
            [Pages.pgReceivedMoneyList.nvBar.lblHeader, "pgReceivedMoneyList_lblHeader"],
            [Pages.pgReceivedMoneyList.rptBox.lbltL, "pgReceivedMoneyList_lbltL"],
            [Pages.pgSelectAlias.nvBar.lblHeader, "pgSelectAlias_lblHeader"],
            [Pages.pgSelectAlias.RepeatBox1.Label1, "pgSelectAlias_Label1"],
            [Pages.pgSelectAlias.Container1.contTel.ImageButton1, "pgSelectAlias_ImageButton1"],
            [Pages.pgSelectAlias.lblNoData, "pgSelectAlias_lblNoData"],
            [Pages.pgSendMoney1.nvBar.lblHeader, "pgSendMoney1_lblHeader"],
            [Pages.pgSendMoney1.svMain.contBottom.contAliciSecimi.contASPending.lblAliciBanner2, "pgSendMoney1_lblAliciBanner2"],
            [Pages.pgSendMoney1.svMain.contBottom.contTutar.contTPending.Copy3oflblAliciBanner2, "pgSendMoney1_Copy3oflblAliciBanner2"],
            [Pages.pgSendMoney1.svMain.contBottom.contOdemeTuru.contOTPending.Copy2oflblAliciBanner2, "pgSendMoney1_Copy2oflblAliciBanner2"],
            [Pages.pgSendMoney1.svMain.contBottom.contMesaj.contMPending.lblMesajBanner11, "pgSendMoney1_lblMesajBanner11"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.lblInfo, "pgSendMoney1_lblInfo"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard1.lblCardNo1, "pgSendMoney1_lblCardNo1"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard2.lblCardNo2, "pgSendMoney1_lblCardNo2"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard3.lblCardNo3, "pgSendMoney1_lblCardNo3"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard4.lblCardNo4, "pgSendMoney1_lblCardNo4"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard5.lblCardNo5, "pgSendMoney1_lblCardNo5"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard6.lblCardNo6, "pgSendMoney1_lblCardNo6"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard7.lblCardNo7, "pgSendMoney1_lblCardNo7"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard8.lblCardNo8, "pgSendMoney1_lblCardNo8"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard9.lblCardNo9, "pgSendMoney1_lblCardNo9"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.svCards.contCard10.lblCardNo10, "pgSendMoney1_lblCardNo10"],
            [Pages.pgSendMoney1.svMain.contTop.contAnimate.contSender.lblBanner, "pgSendMoney6_lblBanner1"],
            [Pages.pgSendMoney1.svMain.contBottom.contCardSecimi.contCSInprogress.contAmount.blbBanner1, "pgSendMoney1_blbBanner1"],
            [Pages.pgSendMoney2.nvBar.lblHeader, "pgSendMoney1_lblHeader"],
            [Pages.pgSendMoney2.svMain.contBottom.contTutar.contTPending.Copy3oflblAliciBanner2, "pgSendMoney2_Copy3oflblAliciBanner2"],
            [Pages.pgSendMoney2.svMain.contBottom.contOdemeTuru.contOTPending.Copy2oflblAliciBanner2, "pgSendMoney2_Copy2oflblAliciBanner2"],
            [Pages.pgSendMoney2.svMain.contBottom.contMesaj.contMPending.lblMesajBanner11, "pgSendMoney2_lblMesajBanner11"],
            [Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.lblAliciBanner1, "pgSendMoney2_lblAliciBanner1"],
            [Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contInput.contSv.contFaceLogin.imgbtnFacebook, "pgSendMoney2_imgbtnFacebook"],
            [Pages.pgSendMoney2.svMain.contTop.contSender.lblBanner1, "pgSendMoney6_lblBanner1"],
            [Pages.pgSendMoney2.svMain.contTop.contAnimate.contReciever.lblBanner2, "pgSendMoney6_lblBanner11"],
            [Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contTab.c1.lblLeft, "pgSendMoney2_lblLeft"],
            [Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contTab.c2.lblCenter, "pgSendMoney2_lblCenter"],
            [Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contTab.c3.lblCenterRight, "pgSendMoney2_lblCenterRight"],
            [Pages.pgSendMoney2.svMain.contBottom.contAliciSecimi.contASInprogress.contTab.c4.lblRight, "pgSendMoney2_lblRight"],
            [Pages.pgSendMoney3.nvBar.lblHeader, "pgSendMoney1_lblHeader"],
            [Pages.pgSendMoney3.svMain.contBottom.contOdemeTuru.contOTPending.Copy2oflblAliciBanner2, "pgSendMoney3_Copy2oflblAliciBanner2"],
            [Pages.pgSendMoney3.svMain.contBottom.contMesaj.contMPending.lblMesajBanner11, "pgSendMoney3_lblMesajBanner11"],
            [Pages.pgSendMoney3.svMain.contTop.contReciever.lblBanner11, "pgSendMoney6_lblBanner11"],
            [Pages.pgSendMoney3.svMain.contTop.contSender.lblBanner1, "pgSendMoney6_lblBanner1"],
            [Pages.pgSendMoney3.svMain.contBottom.contTutar.contTInprogress.lblInfo, "pgSendMoney3_lblInfo"],
            [Pages.pgSendMoney3.svMain.contBottom.contTutar.contTInprogress.imgbtnDevam, "pgSendMoney3_imgbtnDevam"],
            [Pages.pgSendMoney3.svMain.contTop.contAnimate.contAnimate2.contAmount.lblBanner2, "pgSendMoney6_lblBanner21"],
            [Pages.pgSendMoney4.nvBar.lblHeader, "pgSendMoney1_lblHeader"],
            [Pages.pgSendMoney4.svMain.contBottom.contMesaj.contMPending.lblMesajBanner11, "pgSendMoney4_lblMesajBanner11"],
            [Pages.pgSendMoney4.svMain.contTop.contAmount.lblBanner21, "pgSendMoney6_lblBanner21"],
            [Pages.pgSendMoney4.svMain.contTop.contReciever.lblBanner11, "pgSendMoney6_lblBanner11"],
            [Pages.pgSendMoney4.svMain.contTop.contSender.lblBanner1, "pgSendMoney6_lblBanner1"],
            [Pages.pgSendMoney4.svMain.contBottom.contOdemeTuru.contOTInprogress.lblAliciBanner12, "pgSendMoney4_lblAliciBanner12"],
            [Pages.pgSendMoney4.svMain.contTop.contAnimate.contPaymentType.lblBanner312, "pgSendMoney6_lblBanner31"],
            [Pages.pgSendMoney4.svMain.contBottom.contOdemeTuru.contOTInprogress.Container1.Container2.Label1, "pgSendMoney4_OtherPayments"],
            [Pages.pgSendMoney4.svMain.contBottom.contOdemeTuru.contOTInprogress.Container1.Container3.CopyofLabel1, "pgSendMoney4_Rent"],
            [Pages.pgSendMoney4.svMain.contBottom.contOdemeTuru.contOTInprogress.Container1.Container4.Copy2ofLabel1, "pgSendMoney4_OfficeRent"],
            [Pages.pgSendMoney4.svMain.contBottom.contOdemeTuru.contOTInprogress.Container1.Container5.Copy3ofLabel1, "pgSendMoney4_OtherRents"],
            [Pages.pgSendMoney5.nvBar.lblHeader, "pgSendMoney1_lblHeader"],
            [Pages.pgSendMoney5.svMain.contTop.contPaymentType.lblBanner31, "pgSendMoney6_lblBanner31"],
            [Pages.pgSendMoney5.svMain.contTop.contAmount.lblBanner21, "pgSendMoney6_lblBanner21"],
            [Pages.pgSendMoney5.svMain.contTop.contReciever.lblBanner11, "pgSendMoney6_lblBanner11"],
            [Pages.pgSendMoney5.svMain.contTop.contSender.lblBanner1, "pgSendMoney6_lblBanner1"],
            [Pages.pgSendMoney5.svMain.contBottom.contMesaj.contMInprogress.lblAliciBanner3, "pgSendMoney5_lblAliciBanner3"],
            [Pages.pgSendMoney5.svMain.contTop.contAnimate.contMessage.lblBanner421, "pgSendMoney6_lblBanner42"],
            [Pages.pgSendMoney5.svMain.contBottom.contMesaj.contMInprogress.ImageButton1, "pgSendMoney5_ImageButton1"],
            [Pages.pgSendMoney6.nvBar.lblHeader, "pgSendMoney1_lblHeader"],
            [Pages.pgSendMoney6.svMain.contTop.contMessage.lblBanner42, "pgSendMoney6_lblBanner42"],
            [Pages.pgSendMoney6.svMain.contTop.contPaymentType.lblBanner31, "pgSendMoney6_lblBanner31"],
            [Pages.pgSendMoney6.svMain.contTop.contAmount.lblBanner21, "pgSendMoney6_lblBanner21"],
            [Pages.pgSendMoney6.svMain.contTop.contReciever.lblBanner11, "pgSendMoney6_lblBanner11"],
            [Pages.pgSendMoney6.svMain.contTop.contSender.lblBanner1, "pgSendMoney6_lblBanner1"],
            [Pages.pgSendMoney6.svMain.contBottom.contBottom2.contCVV.contCVVInprogress.Label1, "pgSendMoney6_Label1"],
            [Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contDuzenliCheck.lblBanner, "pgSendMoney6_lblBanner"],
            [Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contCount.lblBanner3, "pgSendMoney6_lblBanner3"],
            [Pages.pgSendMoney6.svMain.contBottom.contOnay.imgbtnOnayla, "pgSendMoney6_imgbtnOnayla"],
            [Pages.pgSendMoney6.svMain.contBottom.contOnay.lblUcret, "pgSendMoney6_lblUcret"],
            [Pages.pgSendMoney6.svMain.contBottom.contOnay.lblInfo, "pgSendMoney6_lblInfo"],
            [Pages.pgSendMoney6.svMain.contBottom.contDevam.imgbtnDevam, "pgSendMoney6_imgbtnDevam"],
            [Pages.pgSendMoney6.svMain.contBottom.contBottom2.contTarih.contCount.lblCount, "pgSendMoney6_lblCount"],
            [Pages.pgSmsOtp.nvBar.lblHeader, "pgSmsOtp_lblHeader"],
            [Pages.pgSmsOtp.conConfirmation.btnNext, "pgSmsOtp_btnNext"],
            [Pages.pgSmsOtp.conConfirmation.conTime.lblTime, "pgSmsOtp_lblTime"],
            [Pages.pgSmsOtp.conConfirmation.lblInfo, "pgSmsOtp_lblInfo"],
            [Pages.pgSmsOtp.conSendSMSAgain.lblIInfo1, "pgSmsOtp_lblIInfo1"],
            [Pages.pgSmsOtp.conSendSMSAgain.btnSendSMSAgain, "pgSmsOtp_btnSendSMSAgain"],
            [Pages.pgSmsOtpNonCustomer.nvBar.lblHeader, "pgSmsOtpNonCustomer_lblHeader"],
            [Pages.pgSmsOtpNonCustomer.conConfirmation.lblInfo, "pgSmsOtpNonCustomer_lblInfo"],
            [Pages.pgSmsOtpNonCustomer.conConfirmation.lblKps, "pgSmsOtpNonCustomer_lblKps"],
            [Pages.pgSmsOtpNonCustomer.conConfirmation.conTime.lblTime, "pgSmsOtpNonCustomer_lblTime"],
            [Pages.pgSmsOtpNonCustomer.conConfirmation.btnNext, "pgSmsOtpNonCustomer_btnNext"],
            [Pages.pgStatementDate.nvBar.lblHeader, "pgStatementDate_lblHeader"],
            [Pages.pgStatementDate.svMain.contTop.contAnimate.contSender.lblBanner, "pgStatementDate_lblBanner"],
            [Pages.pgStatementDate.svMain.contTop.contAnimate.contSender.lblCardName, "pgStatementDate_lblCardName"],
            [Pages.pgStatementDate.svMain.btnNext, "pgStatementDate_btnNext"],
            [Pages.pgTransactionDetail.nvBar.lblNavBar, "pgTransactionDetail_lblNavBar"],
            [Pages.pgTransactionDetail.sv.contMain.contHeader.lblHeader, "pgTransactionDetail_lblHeader"],
            [Pages.pgTransactionDetail.sv.contMain.cont1.lblTextAmount, "pgTransactionDetail_lblTextAmount"],
            [Pages.pgTransactionDetail.sv.contMain.cont1.lblAmount, "pgTransactionDetail_lblAmount"],
            [Pages.pgTransactionDetail.sv.contMain.cont8.lblReceiverInfo8, "pgTransactionDetail_lblReceiverInfo8"],
            [Pages.pgTransactionDetail.sv.contMain.cont8.lblSenderInfo81, "pgTransactionDetail_lblSenderInfo81"],
            [Pages.pgTransactionDetail.sv.contMain.cont2.lblTextReceiver, "pgTransactionDetail_lblTextReceiver"],
            [Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo21, "pgTransactionDetail_lblSenderInfo21"],
            [Pages.pgTransactionDetail.sv.contMain.cont2.lblSenderInfo22, "pgTransactionDetail_lblSenderInfo22"],
            [Pages.pgTransactionDetail.sv.contMain.cont3.lblTextSender, "pgTransactionDetail_lblTextSender"],
            [Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo31, "pgTransactionDetail_lblSenderInfo31"],
            [Pages.pgTransactionDetail.sv.contMain.cont3.lblSenderInfo32, "pgTransactionDetail_lblSenderInfo32"],
            [Pages.pgTransactionDetail.sv.contMain.cont4.lblTextDate, "pgTransactionDetail_lblTextDate"],
            [Pages.pgTransactionDetail.sv.contMain.cont4.lblTrancastionDate, "pgTransactionDetail_lblTrancastionDate"],
            [Pages.pgTransactionDetail.sv.contMain.cont5.lblTextTransRepeat, "pgTransactionDetail_lblTextTransRepeat"],
            [Pages.pgTransactionDetail.sv.contMain.cont5.lblTransactionRepeat, "pgTransactionDetail_lblTransactionRepeat"],
            [Pages.pgTransactionDetail.sv.contMain.cont6.btn1, "pgTransactionDetail_btn1"],
            [Pages.pgTransactionDetail.sv.contMain.cont7.btn2, "pgTransactionDetail_btn2"],
            [Pages.pgTransactionDetail.sv.contMain.cont9.lblTextAmount1, "pgTransactionDetail_lblTextAmount1"],
            [Pages.pgTransactionDetail.sv.contMain.cont9.lblAmount1, "pgTransactionDetail_lblAmount1"],
            [Pages.pgTransactionDetail.sv.contMain.contHeaderWhite.lblHeader1, "pgTransactionDetail_lblHeader1"],
            [Pages.pgTransactionDetail.sv.contMain.cont10.btn3, "pgTransactionDetail_btn3"],
            [Pages.pgTransactionDetail.sv.contMain.cont11.lblTextTransRepeat1, "pgTransactionDetail_lblTextTransRepeat1"],
            [Pages.pgTransactionDetail.sv.contMain.cont11.lblTransactionRepeat1, "pgTransactionDetail_lblTransactionRepeat1"],
            [Pages.pgTransactionDetail.sv.contMain.cont12.lblTextTransRepeat2, "pgTransactionDetail_lblTextTransRepeat2"],
            [Pages.pgTransactionDetail.sv.contMain.cont12.lblTransactionRepeat2, "pgTransactionDetail_lblTransactionRepeat2"],
            [Pages.pgTransactionDetail.sv.contMain.cont13.lblReceiverInfo81, "pgTransactionDetail_lblReceiverInfo81"],
            [Pages.pgTransactionDetail.sv.contMain.cont13.lblSenderInfo811, "pgTransactionDetail_lblSenderInfo811"],
            [Pages.pgTransactionDetail.sv.contMain.contBottomInfo.label1, "pgTransactionDetail_label1"],
            [Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader2, "pgTransactionDetail_lblHeader2"],
            [Pages.pgTransactionDetail.sv.contMain.contHeaderWithIcon.lblHeader3, "pgTransactionDetail_lblHeader3"],
            [Pages.pgTransactionDetail.sv.contMain.cont14.lblTextAmount11, "pgTransactionDetail_lblTextAmount11"],
            [Pages.pgTransactionDetail.sv.contMain.cont14.lblAmount11, "pgTransactionDetail_lblAmount11"],
            [Pages.pgTransactionDetail.sv.contMain.cont14.CopyoflblAmount11, "pgTransactionDetail_CopyoflblAmount11"],
            [Pages.pgTransactionDetail.sv.contMain.cont14.Copy2oflblAmount11, "pgTransactionDetail_Copy2oflblAmount11"],
            [Pages.pgTransactionDetail.sv.contMain.cont15.lblTextAmount111, "pgTransactionDetail_lblTextAmount111"],
            [Pages.pgTransactionDetail.sv.contMain.cont16.lblTextAmount1111, "pgTransactionDetail_lblTextAmount1111"],
            [Pages.pgTransactionDetail.sv.contMain.cont18.lblTextTransRepeat11, "pgTransactionDetail_lblTextTransRepeat11"],
            [Pages.pgTransactionDetail.sv.contMain.cont18.lblTransactionRepeat11, "pgTransactionDetail_lblTransactionRepeat11"],
            [Pages.pgTransactionDetail.sv.contMain.cont19.lblTextAmount19, "pgTransactionDetail_lblTextAmount19"],
            [Pages.pgTransactionDetail.sv.contMain.cont20.lblTextAmount20, "pgTransactionDetail_lblTextAmount20"],
            [Pages.pgTransactionHistory.nvBar.lblHeader, "pgTransactionHistory_lblHeader"],
            [Pages.pgTransactionHistory.rptBox.lbltL, "pgTransactionHistory_lbltL"],
            [Pages.pgTransactionHistory.lblRecord, "pgTransactionHistory_lblRecord"],
            [Pages.pgTransactionHistory.conFilter.conMenu.contWaiting.lblWaiting, "pgTransactionHistory_lblWaiting"],
            [Pages.pgTransactionHistory.conFilter.conMenu.contComing.lblComing, "pgTransactionHistory_lblComing"],
            [Pages.pgTransactionHistory.conFilter.conMenu.contSend.lblSend, "pgTransactionHistory_lblSend"],
            [Pages.pgTransactionHistory.conFilter.conMenu.contAll.lblAll, "pgTransactionHistory_lblAll"],
            [Pages.pgTransactionQR.nvBar.lblHeader, "pgTransactionQR_lblHeader"],
            [Pages.pgTransactionQR.contMain.contReader.contCodeReader.lblInfo, "pgTransactionQR_lblInfo"],
            [Pages.pgTransactionQR.contMain.contReader.contCodeReader.btnLocation, "pgTransactionQR_btnLocation"],
            [Pages.pgTransactionQR.contMain.contReader.btnConfirm, "pgTransactionQR_btnConfirm"],
            [Pages.pgTransactionQR.contMain.contReader.btnReadCode, "pgTransactionQR_btnReadCode"],
            [Pages.pgTransactionQR.contMain.contAnimate.contSender.lblTL, "pgTransactionQR_lblTL"],
            [Pages.pgTransactions.nvBar.lblHeader, "pgTransactions_lblHeader"],
            [Pages.pgTransactions.contTransactions.cont1.contRequestMoney.lblRequestMoney, "pgTransactions_lblRequestMoney"],
            [Pages.pgTransactions.contTransactions.cont1.contSendMoney.lblSendMoney, "pgTransactions_lblSendMoney"],
            [Pages.pgTransactions.contTransactions.cont1.contSendMoney.conMessageSend.lblMessageSend, "pgTransactions_lblMessageSend"],
            [Pages.pgTransactions.contTransactions.cont2.conTransferMoney.lblTransferMoney, "pgTransactions_lblTransferMoney"],
            [Pages.pgTransactions.contTransactions.con3.contQR.lblQR, "pgTransactions_lblQR"],
            [Pages.pgTransactions.contTransactions.con3.contLoadIninal.lblLoadIninal1, "pgTransactions_lblLoadIninal1"],
            [Pages.pgTransactions.contTransactions.cont2.conNewCards.lblNewCards, "pgTransactions_lblNewCards"],
            [Pages.pgTransactions.contTransactions.cont2.conTransferMoney.conMessageTransfer.lblMessageRequest1, "pgTransactions_lblMessageRequest1"],
            [Pages.pgTransactions.contTransactions.con3.contQR.conMessageAtm.lblMessageRequest2, "pgTransactions_lblMessageRequest2"],
            [Pages.pgTransferMoney.nvBar.lblHeader, "pgTransferMoney_lblHeader"],
            [Pages.pgTransferMoney.svMain.contTop.contAnimateReceiver1.contReceiver1.lblBanner1, "pgTransferMoney_lblBanner1"],
            [Pages.pgTransferMoney.svMain.btnTransferMoney, "pgTransferMoney_btnTransferMoney"],
            [Pages.pgTransferMoney.svMain.contTop.CopyofcontAnimateReceiver1.contReceiver111.lblBanner111, "pgTransferMoney_lblBanner111"],
            [Pages.pgTransferMoney.svMain.contOnay.lblUcret11, "pgTransferMoney_lblUcret11"],
            [Pages.pgTransferMoney.svMain.contOnay.imgbtnOnayla11, "pgTransferMoney_imgbtnOnayla11"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.lblInfo, "pgTransferMoney_lblInfo"],
            [Pages.pgTransferMoney.svMain.contTop.contAnimateAmount1.contAmount1.lblBannerAmount1, "pgTransferMoney_lblBannerAmount1"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard1.lblCardNo1, "pgTransferMoney_lblCardNo1"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard2.lblCardNo2, "pgTransferMoney_lblCardNo2"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard3.lblCardNo3, "pgTransferMoney_lblCardNo3"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard4.lblCardNo4, "pgTransferMoney_lblCardNo4"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard5.lblCardNo5, "pgTransferMoney_lblCardNo5"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard6.lblCardNo6, "pgTransferMoney_lblCardNo6"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard7.lblCardNo7, "pgTransferMoney_lblCardNo7"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard8.lblCardNo8, "pgTransferMoney_lblCardNo8"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard9.lblCardNo9, "pgTransferMoney_lblCardNo9"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.svCards.contCard10.lblCardNo10, "pgTransferMoney_lblCardNo10"],
            [Pages.pgTransferMoney.svMain.contCard.contCardSecimi.contCSInprogress.contAmount.lblBanner, "pgTransferMoney_lblBanner"],
            [Pages.pgUsageSummary.nvBar.lblHeader, "pgUsageSummary_lblHeader"],
            [Pages.pgVirtualCardTransferLimit.nvBar.lblHeader, "pgVirtualCardTransferLimit_lblHeader"],
            [Pages.pgVirtualCardTransferLimit.svMain.contTop.contInformation.contMainCardDetail.lblLimitText, "pgVirtualCardTransferLimit_lblLimitText"],
            [Pages.pgVirtualCardTransferLimit.svMain.contTop.contInformation.contMainCardDetail.lblLimit, "pgVirtualCardTransferLimit_lblLimit"],
            [Pages.pgVirtualCardTransferLimit.BtnVirtualLimit, "pgVirtualCardTransferLimit_BtnVirtualLimit"],
            [Pages.pgVirtualCardTransferLimit.svMain.contTop.contInformation.contMainCardDetail.lblAvailableLimitTExt, "pgVirtualCardTransferLimit_lblAvailableLimitTExt"],
            [Pages.pgVirtualCardTransferLimit.svMain.contTop.contInformation.contMainCardDetail.lblAvailableLimit, "pgVirtualCardTransferLimit_lblAvailableLimit"],
            [Pages.pgVirtualCardTransferLimit.svMain.conAmount.lblAmount, "pgVirtualCardTransferLimit_lblAmount"],
            [Pages.pgVirtualCardTransferLimit.svMain.conAmount.lblPoint, "pgVirtualCardTransferLimit_lblPoint"],
            [Pages.pgVirtualCardTransferLimit.svMain.conAmount.lblTL, "pgVirtualCardTransferLimit_lblTL"],
            [Pages.pgVirtualCardTransferLimit.svMain.contStartDate.lblStartDateText, "pgVirtualCardTransferLimit_lblStartDateText"],
            [Pages.pgVirtualCardTransferLimit.svMain.contEndDate.lblEndDateText, "pgVirtualCardTransferLimit_lblEndDateText"],
            [Pages.pgVirtualCardTransferLimit2.nvBar.lblNavBar, "pgVirtualCardTransferLimit2_lblNavBar"],
            [Pages.pgVirtualCardTransferLimit2.sv.contHeader.lblHeader, "pgVirtualCardTransferLimit2_lblHeader"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard1.lblCardNoText, "pgVirtualCardTransferLimit2_lblCardNoText"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard1.lblCardNo, "pgVirtualCardTransferLimit2_lblCardNo"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard2.lblLimitText, "pgVirtualCardTransferLimit2_lblLimitText"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard2.lblLimit, "pgVirtualCardTransferLimit2_lblLimit"],
            [Pages.pgVirtualCardTransferLimit2.sv.contLimitAmount.lblVirtualLimitText, "pgVirtualCardTransferLimit2_lblVirtualLimitText"],
            [Pages.pgVirtualCardTransferLimit2.sv.contLimitAmount.lblVirtualLimit, "pgVirtualCardTransferLimit2_lblVirtualLimit"],
            [Pages.pgVirtualCardTransferLimit2.sv.contStartDate.lblStartDateText, "pgVirtualCardTransferLimit2_lblStartDateText"],
            [Pages.pgVirtualCardTransferLimit2.sv.contStartDate.lblStartDate, "pgVirtualCardTransferLimit2_lblStartDate"],
            [Pages.pgVirtualCardTransferLimit2.sv.contEndDate.lblEndDateText, "pgVirtualCardTransferLimit2_lblEndDateText"],
            [Pages.pgVirtualCardTransferLimit2.sv.contEndDate.lblEndDate, "pgVirtualCardTransferLimit2_lblEndDate"],
            [Pages.pgVirtualCardTransferLimit2.sv.contButton.btnApply, "pgVirtualCardTransferLimit2_btnApply"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard1.lblCardDetailText, "pgVirtualCardTransferLimit2_lblCardDetailText"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard1.lblCardDetail, "pgVirtualCardTransferLimit2_lblCardDetail"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard2.lblAvailableLimitText, "pgVirtualCardTransferLimit2_lblAvailableLimitText"],
            [Pages.pgVirtualCardTransferLimit2.sv.contMainCardDetail.contMainCard2.lblAvailableLimit, "pgVirtualCardTransferLimit2_lblAvailableLimit"],
            [Pages.pgAbout.conAccount.lblAbout, "pgAbout_lblAbout"],
            [Pages.pgHelp.conAccount.lblHelp, "pgHelp_lblHelp"],
            [Pages.pgVirtualCardTransferLimit2.sv.contEmpty2.lblVirtualCard, "pgVirtualCardTransferLimit2_lblVirtualCard"]];
    } catch (exe) {
        //        alert("updatePagesTextsFromLanguage2:"+exe);
    }
    for (var i = 0; i < updatePagesTextsFromLanguageArray.length; ++i) {
        try {
            updatePagesTextsFromLanguageArray[i][0].text = getTextFromLangVar(updatePagesTextsFromLanguageArray[i][1]);
        } catch (exe) {
            //            alert("Problem on loadingLanguageVars\n" + exe);
        }
    } //TODO replace fonk eklenecek
    Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contSummaryInfo.btnSummaryInfo.text = "               " + Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contSummaryInfo.btnSummaryInfo.text;
    Pages.pgMyPage.svMenu.cont2.contSettings.contBodySettings.contCardSettings.btnCardSettings.text = "               " + Pages.pgMyPage.svMenu.cont2.contSettings.contBodySettings.contCardSettings.btnCardSettings.text;
    Pages.pgMyPage.svMenu.cont4.contRegistered.contBodyRegistered.contRegisteredAlias.btnRegisteredAlias.text = "               " + Pages.pgMyPage.svMenu.cont4.contRegistered.contBodyRegistered.contRegisteredAlias.btnRegisteredAlias.text;
    Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contWalletLimit.btnWalletLimit.text = "               " + Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contWalletLimit.btnWalletLimit.text;
    Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contIninalLimit.btnIninalLimit.text = "               " + Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contIninalLimit.btnIninalLimit.text;
    Pages.pgMyPage.svMenu.cont4.contRegistered.contBodyRegistered.contAddFriend.btnAddFriend.text = "               " + Pages.pgMyPage.svMenu.cont4.contRegistered.contBodyRegistered.contAddFriend.btnAddFriend.text;
    Pages.pgMyPage.svMenu.cont4.contRegisteredTrxMenu.contBodyRegisteredTrxMenu.contPostdatedTrx.btnPostdatedTrx.text = "               " + Pages.pgMyPage.svMenu.cont4.contRegisteredTrxMenu.contBodyRegisteredTrxMenu.contPostdatedTrx.btnPostdatedTrx.text;
    Pages.pgMyPage.svMenu.cont4.contRegisteredTrxMenu.contBodyRegisteredTrxMenu.contRegularTrx.btnRegularTrx.text = "               " + Pages.pgMyPage.svMenu.cont4.contRegisteredTrxMenu.contBodyRegisteredTrxMenu.contRegularTrx.btnRegularTrx.text;
    Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contNotifications.btnNotifications.text = "               " + Pages.pgMyPage.svMenu.cont2.contMyWallet.contBodyMyWallet.contNotifications.btnNotifications.text;
    var justName = adSoyad.split(" ", 1);
    Pages.pgLogin.conConfirmation.lblInfo.text = getTextFromLangVar("pgWelcomeScreen_lbl1") + " " + justName + getTextFromLangVar("pgLogin_lblInfo");
}
function isValidateCard(inputCard) {
    try {
        var sum = 0;
        var numdigits = inputCard.length;
        var parity = numdigits % 2;
        for (var i = 0; i < numdigits; i++) {
            var digit = parseInt(inputCard.charAt(i))
                if (i % 2 == parity)
                    digit *= 2;
                if (digit > 9)
                    digit -= 9;
                sum += digit;
        }
        return (sum % 10) == 0;
    } catch (exx) {
        alertObject = alert(exx);
    }
}
function getTextFromLangVar(key) {
    if (lang[langFromReturnedService + "_" + key]) {
        return lang[langFromReturnedService + "_" + key];
    } else {
        return "";
    }
}
/*
function conAnimate(cont, fonk) {
cont.alpha = 0;
cont.top = cont.height;
cont.animate({
property : 'Alpha',
endValue : 100,
motionEase : 3,
duration : "300",
onFinish : function () {}
});
cont.animate({
property : 'Y',
endValue : 0,
motionEase : 3,
duration : "300",
onFinish : function () {
fonk();
}
});
}
/*function conAnimate(cont, fonk) {
cont.alpha = 0;
var firstVal = cont.top;
cont.top = cont.height + cont.top;
cont.visible = true;
cont.animate({
property : 'Alpha',
endValue : 100,
motionEase : 3,
duration : "300",
onFinish : function () {}
});
cont.animate({
property : 'Y',
endValue : firstVal,
motionEase : 3,
duration : "300",
onFinish : function () {
if (fonk)
fonk();
}
});
}*/
function conAnimate(cont, fonk) {
    cont.alpha = 0;
    var firstVal = cont.top;
    cont.top = cont.height + cont.top;
    cont.visible = true;
    cont.animate({
        property : 'Alpha',
        endValue : 100,
        motionEase : 3,
        duration : "300",
        onFinish : function () {}
    });
    cont.animate({
        property : 'Y',
        endValue : firstVal,
        motionEase : 3,
        duration : "300",
        onFinish : function () {
            if (fonk)
                fonk();
        }
    });
}
function getMonthNameFromLang(monthindex) {
    return getTextFromLangVar("global_monthtext" + monthindex);
}
function showNetworkLogsForDebuggingWithMailBecauseClosedByMobinex(str) {
    try {
        SMF.Net.sendMail({
            to : "",
            cc : "",
            bcc : "",
            title : "Mail text",
            body : str,
            attachment : "",
            onSuccess : function () {
                alert("mail success");
            },
            onFailure : function () {
                alert("mail fail");
            }
        });
    } catch (exep) {
        alert("Mail Hata:" + exep);
    }
}
/**Language Functions**/
String.prototype.fixAllEnter = function () {
    var str = this;
    return str.replace(/(\\n)/g, "\n"); //.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g')
};
function langValuesFromOfflineDB() {
    var jobj = getDictFromLocalLangDataset();
    mergeAndSetLangValues(jobj);
}
function langValuesFromServices(returnLanguage) {
    var jobj = getObjFromServicesDataSet();
    clearOldAndCommitNewValuesLangToDs(jobj);
    languageVersion = Data.ListParametricText_OutDSetListParametricTextResult.b_Version;
    SMF.storeVariable('languageVersion', languageVersion, true);
    langFromReturnedService = returnLanguage;
    SMF.storeVariable('langFromReturnedService', langFromReturnedService, true);
    mergeAndSetLangValues(jobj);
}
function getObjFromServicesDataSet() {
    var jobj = {};
    for (var i = 0; i < Data.ListParametricText_OutDSetc_KeyValueOfstringstring.rowCount; i++) {
        Data.ListParametricText_OutDSetc_KeyValueOfstringstring.seek(i);
        jobj[Data.ListParametricText_OutDSetc_KeyValueOfstringstring.c_Key] = Data.ListParametricText_OutDSetc_KeyValueOfstringstring.c_Value.fixAllEnter();
    }
    return jobj;
}
function mergeAndSetLangValues(jobj) {
    appendNewDictToLangArray(jobj, lang);
    updatePagesTextsFromLanguage();
    updatePagesPlaceHolderFromLanguage();
}
function getDictFromLocalLangDataset() {
    var jobj = {};
    for (var i = 0; i < Data.langDs.rowCount; i++) {
        Data.langDs.seek(i);
        jobj[Data.langDs.key] = Data.langDs.value;
    }
    return jobj;
}
function clearOldAndCommitNewValuesLangToDs(jobj) {
    Data.langDs.clear();
    Data.langDs.commit();
    Data.langDs.refresh();
    var keyindex = 0;
    for (var objkey in jobj) {
        if (jobj.hasOwnProperty(objkey)) {
            Data.langDs.add();
            Data.langDs.key = objkey;
            Data.langDs.value = jobj[objkey];
            Data.langDs.seek(keyindex++);
        }
    }
    Data.langDs.commit();
    Data.langDs.refresh();
}
function appendNewDictToLangArray(source, target) {
    for (var key in source) {
        try {
            if (source.hasOwnProperty(key)) {
                var tmptext = source[key];
                if (tmptext.length > 0) {
                    target[key] = source[key];
                }
            }
        } catch (exc) {
            //            alert("Key:"+key);
        }
    }
}
/**Start OF Google Analytic Codes*/
function googleAnalyticScreen(screenName) {
    Google.Analytics.send({
        type : "screen",
        screenName : screenName
    });
}
/**END OF Google Analytic Codes*/
function Global_Events_OnReceivedNotification(e) {
    alert("push geldi");
    try {
         alert("1 "+Notifications.remote.data.payload.aps.ia);
    } catch (edf) {
         alert(edf);
    };
     try {
         alert("2 "+Notifications.remote.data.payload);
    } catch (edf) {
         alert(edf);
    };
     try {
         alert("3 "+Notifications.remote.data.payload.aps);
    } catch (edf) {
         alert(edf);
    };
     try {
         alert("4 "+keys(Notifications.remote.data.payload));
    } catch (edf) {
         alert(edf);
    };
     try {
         alert("5 "+keys(Notifications.remote.data.payload.aps));
    } catch (edf) {
         alert(edf);
    };
    try {
      //   alert("6 "+keys(Notifications.remote.data.alert));
    } catch (edf) {
         alert(edf);
    };
}
/****/
function setKmhInfo(kmhFee) {
    Pages.pgSendMoney6.svMain.contBottom.contOnay.lblInfo.text = getTextFromLangVar("pgSendMoney6_lblInfoKMHPart1") + " " + kmhFee + " " + getTextFromLangVar("pgSendMoney6_lblInfoKMHPart2");
    Pages.pgSendMoney6.svMain.contBottom.contOnay.lblInfo.visible = true;
    //alert("kmh");
}
function fillMyPageUserProfilePicture(fbUserId, updateToService) {
    if (fbUserId && fbUserId.length > 1) {
        var fbProfilePic = "https://graph.facebook.com/" + fbUserId + "/picture?width=300&type=normal&height=300";
        Pages.pgMyPage.svMenu.cont1.subCont.imgProfilePicture.image = fbProfilePic;
        Pages.pgMyPage.svMenu.cont1.subCont.imgProfilePicture.imageFillType = SMF.UI.ImageFillType.stretch;
        if (updateToService) {
            myFacebookId = fbUserId;
            SMF.Net.UpdateFacebookId.run(true);
        }
    } else {
        Pages.pgMyPage.svMenu.cont1.subCont.imgProfilePicture.image = "icon_sendmoney_alici.png";
        Pages.pgMyPage.svMenu.cont1.subCont.imgProfilePicture.imageFillType = SMF.UI.ImageFillType.normal;
    }
}
function addAndInviteFriendFBCallBackForSelectedFriend(selectedFriend) {
    if (selectedFriend) {
        var varFbName = selectedFriend.name;
        var varLastIndex = varFbName.lastIndexOf(" ");
        var lastName = varFbName.slice(varLastIndex);
        aliasImageInsertType = "FACEBOOK";
        contactInformations.contactName = varFbName.slice(0, (varFbName.length - lastName.length)); //e[i].firstName
        contactInformations.contactSurname = lastName.trim();
        contactInformations.contactProfilePic = "https://graph.facebook.com/" + selectedFriend.id + "/picture?width=300&type=normal&height=300";
        aliasFacebookUserId = selectedFriend.id;
        Pages.pgAddNewPerson.conAccount.contContactPicture.ActivityIndicator1.visible = false;
        Pages.pgAddNewPerson.conAccount.contContactPicture.imgProfilePictureBg.touchEnabled = true;
        if (flagForSelectImage == "IMAGEFORFACEBOOK") {
            Pages.pgAddNewPerson.conAccount.contContactPicture.imgProfilePicture.image = contactInformations.contactProfilePic;
            Pages.pgAddNewPerson.conAccount.contContactPicture.imgProfilePicture.imageFillType = SMF.UI.ImageFillType.stretch;
        } else if (flagForSelectImage == "ADDFACEBOOKFRIEND") {
            showPage(Pages.pgAddAndInviteFriend, Pages.pgAddNewPerson, true);
        }
    } else {
        showFacebookError();
    }
}
function getMyDetails(callbackFunction) {
    try {
        _openFBSession(_getMyDetailFromOpenedSession, callbackFunction);
    } catch (exx) {
        callbackFunction();
    }
}
function getSelectedFriendDetailWithFriendPicker(callbackFunction) {
    try {
        _openFBSession(_getSelectedFriendDetailFromOpenedSession, callbackFunction);
    } catch (exx) {
        callbackFunction();
    }
}
function _openFBSession(callbackFunction, callbackFunctionToDelegate) {
    if (Social.Facebook.isSessionActive()) {
        callbackFunction(callbackFunctionToDelegate);
    } else {
        Social.Facebook.openSession({
            onSuccess : function (e) {
                facebookToken = e.data;
                callbackFunction(callbackFunctionToDelegate);
            },
            onError : function (e) {
                callbackFunction();
            },
            permissions : ["basic_info", "xmpp_login", "read_friendlists"]
        });
    }
}
function myFBCallBackForMyDetail(fbuser) {
    if (fbuser) {
        if (isAndroid == true) {
            fillMyPageUserProfilePicture(fbuser.id, true);
        } else {
            fillMyPageUserProfilePicture(fbuser.data.id, true);
        }
    } else {
        showFacebookError();
        //        showObjectContent(fbuser);
    }
    Pages.pgMyPage.svMenu.cont1.subCont.indicator.visible = false;
    Pages.pgMyPage.svMenu.cont1.subCont.touchEnabled = true;
}
function _getMyDetailFromOpenedSession(callbackFunctionToDelegate) {
    Social.Facebook.userDetails({
        onSuccess : function (e) {
            callbackFunctionToDelegate(e);
        },
        onError : function () {
            try {
            callbackFunctionToDelegate();
            } catch (exep) {
                // alert(exep);
            }
        }
    });
}
function _getSelectedFriendDetailFromOpenedSession(callbackFunctionToDelegate) {
    Social.Facebook.showFriendPicker({
        allowMultiSelect : false,
        onSelected : function (e) {
            callbackFunctionToDelegate(e[0]);
        },
        onCancelled : function () {
            //            callbackFunctionToDelegate();
        },
        onError : function (e) {
            callbackFunctionToDelegate();
        }
    });
}
function showFacebookError() {
    alertObject = alert({
            message : getTextFromLangVar("global_facebookLoginError"),
            title : getTextFromLangVar("global_alertTitle1"),
            alpha : 1,
            firstButtonText : getTextFromLangVar("global_alertBtn2"),
            OnFirstButtonPressed : function () {}
        });
}
function keys(obj) {
    var ret = "";
    var k = Object.keys(obj)
        for (var o in k) {
            ret = ret + "," + k[o];
        }
        return ret;
}
/**SEND SMS**/
var serviceInput_sendSMSPhoneAreaCode;
var serviceInput_sendSMSPhonePhoneNumber;
var serviceInput_sendSmsMessage;
function sendSMS(phoneAreaCode, phoneNumber, txt) {
    serviceInput_sendSMSPhoneAreaCode = phoneAreaCode;
    serviceInput_sendSMSPhonePhoneNumber = phoneNumber;
    serviceInput_sendSmsMessage = txt;
    SMF.Net.SendSms.run(true);
}