for(i=1;i<=2;i++){
click(span(any("Add Forms","mri-button__label")));
wait(10000,isVisible(div(["upload-header"])));
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/../TestData/10files/");
wait(200000,isVisible(button(["Upload"])));
click(button(["Upload"]));
wait(10000,isVisible(span(["File Upload in Progress"])));
}