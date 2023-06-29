var pageno = parseInt(getText(byXPath('(//div[@class="k-pager-numbers"]//button)[last()]')));
log(pageno);
for (i = 1; i <= pageno; i++) {
    var ChkNo = parseInt(_eval("ds$('table tbody tr').find('td:contains(\"Uploaded\")').length"));
    log(ChkNo);
  	wait(2000);
    for (k = 1; k <= ChkNo; k++) {
        click(byXPath('(//td[contains(text(),"Uploaded")]//parent::tr//input[@type="checkbox"])[' + k + ']'));
      wait(2000);
    }
    if (i < pageno) {
        var ind = i + 1;
        click(byXPath('(//div[@class="k-pager-numbers"]//button)[' + ind + ']'));
        wait(10000);
    }
}