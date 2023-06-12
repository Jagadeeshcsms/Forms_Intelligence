for(i=1;i<=2;i++){
click(span(any("Add Forms","mri-button__label")));
wait(40000);
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/../TestData/10files/");
wait(40000);
click(span(0, _in(button("Upload"))));
wait(20000);
}