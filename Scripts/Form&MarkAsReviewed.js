var pageno = parseInt(getText(byXPath('(//*[@id="pagePredict"]/div[1]/p/span[3]//button)[last()]')));
var pageno = parseInt(getText(byXPath('(//*[//*[@id="rootdiv"]/div/div/div[2]/div/div/div[2]/div[3]/button[1]/span//button)[last()]')));
if (i < pageno) {
        var ind = i + 1;
        click(byXPath('(//*[@id="pagePredict"]/div[1]/p/span[3]//button)[' + ind + ']'));
        click(byXPath('(//*[@id="rootdiv"]/div/div/div[2]/div/div/div[2]/div[3]/button[1]//button)[' + ind + ']'));
         wait(3000);