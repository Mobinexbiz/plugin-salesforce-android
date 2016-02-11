/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.Page
 */
function Page1_Self_OnShow(e) {
    this.Container1.animate({
        property : 'X',
        endValue : '-100%',
        motionEase : SMF.UI.MotionEase.plain,
        duration : 3000,
        onFinish : function () {
            Pages.pgBlog.show();
        }
    });
}