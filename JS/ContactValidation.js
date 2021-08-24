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

    // Usecase 5: Create Contact object on Submit
    const save=()=>
    {
      try
      {

        let ContactData=onSubmit();
        createAndUpdateStorage(ContactData);
      }
      catch(e)
      {
        return;
      }
    }
 
    //Usecase 5: Storing contact object in local storage
     function createAndUpdateStorage(ContactData)
     {
     let ContactList=JSON.parse(localStorage.getItem("ContactList"));
     if(ContactList!=undefined)
     {
        ContactList.push(ContactData);
     }
     else{
        ContactList=[ContactData];
     }
     alert(ContactList.toString());
     localStorage.setItem("ContactList",JSON.stringify(ContactList));
     }
 
    //Usecase 5: Validate Name phone number and zip code
    const onSubmit=() =>
    {
      let ContactData=new ContactPerson();
      try
      {
        ContactData.fullName=getInputValueById("#fullName");
      }
      catch(e)
      {
        setTextValue(".text-error",e);
        throw e;
      }
 
      ContactData.state=getInputValueById('#State');
      ContactData.city=getInputValueById('#city');
      ContactData.address=getInputValueById("#address");
      try
      {
        ContactData.zip=getInputValueById('#zip');
        setTextValue(".text-error-zip","");
      }
      catch(e)
      {
        setTextValue(".text-error-zip",e);
      }
      try
      {
        ContactData.phoneNumber=getInputValueById('#phoneNumber');
        setTextValue(".text-error-phone","");
      }
      catch(e)
      {
        setTextValue(".text-error-phone",e);
      }
      
      alert(ContactData.toString());
      return ContactData;
    }
    
 
    const getInputValueById=(id) =>
    {
      let value=document.querySelector(id).value;
      return value;
    }

 