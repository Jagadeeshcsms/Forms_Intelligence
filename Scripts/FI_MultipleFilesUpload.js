for(i=1;i<=2;i++){
click(span(any("Add Forms","mri-button__label")));  
wait(5000); 
setBulkFiles2(byXPath('//*[@type="file"]'),"{ds}/../Scripts/10files/");
wait(120000);
//click(span(0, _in(button("Upload"))));
//wait(2000);
}