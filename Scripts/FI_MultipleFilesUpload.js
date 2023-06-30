for(i=1;i<=2;i++){
click(span(any("Add Forms","mri-button__label")));
wait(10000,,isVisible(span(["Upload form"])));
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/../TestData/10files/");
wait(200000,isVisible(span(0, _in(button("Upload")))));
click(span(0, _in(button("Upload"))));
wait(2000);
}