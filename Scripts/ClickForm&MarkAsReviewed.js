var arr = getText(span("review-form-change-count")).split('/');
var docno = parseInt(arr[1]);
log(docno);
for (i = 1; i < docno; i++) {
  	wait(1000)
    click(span("review-form-change-next"));
    wait(1000)
    click(button("Mark as reviewed"));
    wait(3000)
}