/**
* Creates action(s) that are run when the page is appeared
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.Page
*/
function pgDeveloperNotesAddNew_Self_OnShow(e) {
    SMF.UI.iOS.NavigationBar.backgroundColor = "#FFFFFF";
    var item1 = new SMF.UI.iOS.BarButtonItem({
            title : lang["back"],
            onSelected : function () {
                if (Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text != '') {
                    if (isFromEdit) {
                        replaceNote(noteToBeReplaced);
                        Pages.back();
                    } else {
                        exportToDocuments(Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text);
                        Pages.back();
                    }
                } else {
                    if (isFromEdit) {
                        deleteString = notesDataSource[noteIndex].note.trimLeft() + 'myNoteSeperator||';
                        notesDataSource.splice(noteIndex, 1);
                        Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = notesDataSource;
                        Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
                        deleteNote(deleteString);
                        Pages.back();
                    } else {
                        Pages.back();
                    }
                }
            }
        });
    this.navigationItem.leftBarButtonItems = [item1];
    var item2 = new SMF.UI.iOS.BarButtonItem({
            title : lang["done"],
            onSelected : function () {
                if (Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text != '') {
                    Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.closeKeyboard();
                } else {
                    if (isFromEdit) {
                        Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.closeKeyboard();
                    } else {
                        Pages.back();
                    }
                }
            }
        });
    this.navigationItem.rightBarButtonItems = [item2];
    Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.returnKeyType =  SMF.UI.ReturnKeyType.default;
    Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.focus();
}
/**
* Creates action(s) that are run when the user exits an input to the edit box.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.EditBox
*/
function pgDeveloperNotesAddNew_EditBox1_OnExit(e) {
    this.height = '96%';
}
/**
* Creates action(s) that are run when the user enters an input to the edit box.
* @param {EventArguments} e Returns some attributes about the specified functions
* @this SMF.UI.EditBox
*/
function pgDeveloperNotesAddNew_EditBox1_OnEnter(e) {
    this.height = '54.93%';
}