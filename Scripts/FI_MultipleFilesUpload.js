for(i=1;i<=2;i++){
click(span(any("Add Forms","mri-button__label")));
wait(10000);
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/../TestData/10files/");
wait(30000);
click(span(0, _in(button("Upload"))));
wait(10000);
}