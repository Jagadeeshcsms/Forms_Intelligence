var arr = getText(span("review-form-change-count")).split('/');
var docno = parseInt(arr[1]);
log(docno);
for (i = 1; i < docno; i++) {
    click(span("review-form-change-next"));
    wait(2000);
    click(button("Mark as reviewed"));
  	wait(2000);
}