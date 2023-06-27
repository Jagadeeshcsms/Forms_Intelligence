for(i=1;i<=1;i++){
click(span(any("Add Forms","mri-button__label")));  
wait(5000); 
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/10files/");
wait(2500000);
takeHtmlSnapshot();
click(span(0, _in(button("Upload"))));
wait(20000);
}