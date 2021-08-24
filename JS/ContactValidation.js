   //first loads the contents in the web page then validates
   window.addEventListener("DOMContentLoaded", (event) => {

     //Usecase 4: Check whether contact details is Proper using Regex   
     let text=document.querySelector('#fullName');
     text.addEventListener('input',function()
     {
        try{
            (new ContactPerson()).fullName = text.value;
            setTextValue(".text-error","");
        }catch(e){
            setTextValue(".text-error",e);
        }
     });

     let phonetext=document.querySelector('#phoneNumber');
     phonetext.addEventListener('input',function()
     {
        try{
            (new ContactPerson()).phoneNumber = phonetext.value;
            setTextValue(".text-error-phone","");
        }catch(e){
            setTextValue(".text-error-phone",e);
        }
     });

     let ziptext=document.querySelector('#zip');
     ziptext.addEventListener('input',function()
     {
        try{
            (new ContactPerson()).zip = ziptext.value;
            setTextValue(".text-error-zip","");
        }catch(e){
            setTextValue(".text-error-zip",e);
        }
     });
    
    });
 
    const setTextValue=(id,value) =>
    {
    const element=document.querySelector(id);
    element.textContent=value;
    }