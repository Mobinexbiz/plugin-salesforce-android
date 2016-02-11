/**
 * Creates action(s) that are run when an item is loaded onWeakPinError the repeat box.
 * @param {RepeatboxEventArgument} e
 * @this SMF.UI.RepeatBox
 */
function pgDevelopmentNotesAll_RepeatBox1_OnRowRender(e) {
    if (Pages.pgDevelopmentNotesAll.SearchBar1.text.length == 0) {
        Pages.pgDevelopmentNotesAll.RepeatBox1.lblNote.text = notesDataSource[e.rowIndex].note.trimLeft();
    } else {
        if (tmpDataSource.length > 0)
            Pages.pgDevelopmentNotesAll.RepeatBox1.lblNote.text = tmpDataSource[e.rowIndex].trimLeft();
    }
}
/**
 * Creates action(s) that are run when an item is selected on the repeat box.
 * @param {RepeatboxEventArgument} e
 * @this SMF.UI.RepeatBox
 */
function pgDevelopmentNotesAll_RepeatBox1_OnSelectedItem(e) {
    if (Pages.pgDevelopmentNotesAll.SearchBar1.text == '') {
        Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text = notesDataSource[e.rowIndex].note.trimLeft();
        noteToBeReplaced = notesDataSource[e.rowIndex].note;
    } else {
        Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text = tmpDataSource[e.rowIndex].trimLeft();
        noteToBeReplaced = tmpDataSource[e.rowIndex];
    }
    noteIndex = e.rowIndex;
    isFromEdit = true;
    Pages.pgDeveloperNotesAddNew.show(SMF.UI.MotionEase.decelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
    Pages.pgDevelopmentNotesAll.SearchBar1.text = "";
    Pages.pgDevelopmentNotesAll.lblNoSearchResults.visible = false;
    Pages.pgDevelopmentNotesAll.Rectangle1.visible = false;
}
var searchArr = [];
/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.Page
 */
function pgDevelopmentNotesAll_Self_OnShow(e) {
    this.navigationItem.title = lang["comments"];
    this.navigationItem.titleView = {
        type : SMF.UI.TitleViewType.text,
        frame : [0, 0, 320, 44], // left, top, width, height
        text : lang["notes"],
        textColor : "#ffffff",
        backgroundColor : "#000000",
        alignment : SMF.UI.TextAlignment.center
    }
    var item1 = new SMF.UI.iOS.BarButtonItem({
            title : lang["back"],
            onSelected : function () {
                Pages.back();
            }
        });
    this.navigationItem.leftBarButtonItems = [item1];
    var item2 = new SMF.UI.iOS.BarButtonItem({
            title : lang["new"],
            onSelected : function () {
                isFromEdit = false;
                Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text = '';
                Pages.pgDeveloperNotesAddNew.show(SMF.UI.MotionEase.decelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
            }
        });
    this.navigationItem.rightBarButtonItems = [item2];
    setDataSource();
    var itemDelete = new SMF.UI.RepeatboxSwipeItem({
            width : "25%",
            height : "100%",
            left : "75%",
            top : "0%",
            text : lang.deleteNews,
            fontColor : "#F2F2F2",
            pressedFontColor : "#FFFFFF",
            fillColor : "#FF0000",
            onSelected : function (e) {
                noteToBeReplaced = notesDataSource[e.rowIndex].note.trimLeft() + 'myNoteSeperator||';
                notesDataSource.splice(e.rowIndex, 1);
                if (notesDataSource.length == 0) {
                    Pages.pgDevelopmentNotesAll.lblNoNotes.visible = true;
                } else {
                    Pages.pgDevelopmentNotesAll.lblNoNotes.visible = false;
                }
                Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = notesDataSource;
                Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
                deleteNote(noteToBeReplaced);
            }
        });
    var items = [itemDelete];
    Pages.pgDevelopmentNotesAll.RepeatBox1.setSwipeItems(items);
    if (notesDataSource.length == 0) {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = true;
    } else {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = false;
    }
    Pages.pgDevelopmentNotesAll.RepeatBox1.scrollsToTop = true;
    this.SearchBar1.stickToNavigationBar = true;
    this.SearchBar1.setShowsCancel = true;
    this.SearchBar1.tintColor = '#333333';
    searchArr = [];
    for (var note in notesDataSource) {
        var tmpParam = notesDataSource[note];
        searchArr.push(tmpParam.note);
    }
}
function setDataSource() {
    var notesTxtFile = new SMF.IO.File(SMF.IO.applicationDataDirectory, "notes.txt");
    if (notesTxtFile.exists) {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = false;
        var streamReader = new SMF.IO.FileStream(SMF.IO.applicationDataDirectory, "notes.txt", SMF.IO.StreamType.read);
        var spliter = streamReader.readToEnd();
        streamedNotesArray = spliter.split("myNoteSeperator||");
        streamedNotesArray.pop();
        notesDataSource = [];
        var i;
        for (i = 0; i < streamedNotesArray.length; i++) {
            notesObject = {};
            var replacedEnterChar = streamedNotesArray[i].replace('\n', '');
            //var noteDateSpliter = replacedEnterChar.split(",");
            notesObject.note = replacedEnterChar;
            //notesObject.date = noteDateSpliter[1];
            notesDataSource.push(notesObject);
        }
        notesDataSource.reverse();
        Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = notesDataSource;
        Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
    } else {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = true;
    }
}
/**
 * This event triggers when search started. (For Android pressing search icon, Pressing search area for iOS)
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.SearchBar
 */
function pgDevelopmentNotesAll_SearchBar1_OnSearchStart(e) {
    //Pages.pgDevelopmentNotesAll.Rectangle1.visible = true;
}
/**
 * This event triggers when search is cancelled.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.SearchBar
 */
function pgDevelopmentNotesAll_SearchBar1_OnCancel(e) {
    this.text = "";
    Pages.pgDevelopmentNotesAll.lblNoSearchResults.visible = false;
    Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = notesDataSource;
    Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
    Pages.pgDevelopmentNotesAll.Rectangle1.visible = false;
}
/**
 * This event triggers when submit button is pressed on SearchBar.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.SearchBar
 */
function pgDevelopmentNotesAll_SearchBar1_OnSearchSubmit(e) {
    Pages.pgDevelopmentNotesAll.Rectangle1.visible = false;
}
function pgDevelopmentNotesAll_Rectangle1_OnTouchEnded(e) {
    Pages.pgDevelopmentNotesAll.Rectangle1.visible = false;
}
var tmpDataSource;
/**
 * This event triggers when search query is changed.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.SearchBar
 */
function pgDevelopmentNotesAll_SearchBar1_OnTextChange(e) {
    var textStr = this.text.toLowerCase();
    var txtLen = this.text.length;
    if (this.text.length > 0) {
        tmpDataSource = _.filter(searchArr, function (str) {
                return str.toLowerCase().substring(0, txtLen).indexOf(textStr) !== -1;
            });
        Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = tmpDataSource;
        Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
        if (tmpDataSource.length > 0)
            Pages.pgDevelopmentNotesAll.lblNoSearchResults.visible = false;
        else
            Pages.pgDevelopmentNotesAll.lblNoSearchResults.visible = true;
    } else {
        Pages.pgDevelopmentNotesAll.lblNoSearchResults.visible = false;
        Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = notesDataSource;
        Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
    }
}