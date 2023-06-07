for(i=1;i<=200;i++){
click(span(any("Add Forms","mri-button__label")));
wait(5000);
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/../TestData/10files/");
wait(5000);
click(span(0, _in(button("Upload"))));
wait(10000);
}