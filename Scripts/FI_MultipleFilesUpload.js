for(i=1;i<=2;i++){
click(span(any("Add Forms","mri-button__label")));
wait(10000,isVisible(div(["upload-header"])));
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/../TestData/10files/");
wait(200000,isVisible(button("Upload")));
focus(span("Upload",_leftOf(span("Cancel"))));
click(span("Upload",_leftOf(span("Cancel"))));
wait(5000);
  //wait(30000,!isVisible(span(["File Upload in Progress"])));
}