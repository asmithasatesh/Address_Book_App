   //Variable to check whether page is for create or update
   let isUpdate = false;
   let contactObj = {};
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

     checkForUpdate();
    
    });
      
  //Checks whether updation is needed
  var checkForUpdate=()=>{
    var contactJSON = localStorage.getItem('editContact');
    isUpdate=contactJSON?true:false;
    if(!isUpdate)return;
    contactObj=JSON.parse(contactJSON);
    setForm();
     }
    var setValue=(id,value)=>{
      var element = document.querySelector(id);
      element.value=value;
    }
  //Set Updated values
    var setForm=()=>{
      setValue('#fullName',contactObj._fullName);
        setValue('#phoneNumber',contactObj._phoneNumber);
        setValue('#address',contactObj._address);
        setValue('#city',contactObj._city);
        setValue('#state',contactObj._state);
        setValue('#zip',contactObj._zip);    
      }

    var setTextValue = (id, value) => {
    var attribute = document.querySelector(id);
    attribute.textContent = value;
    }

  var getInputValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
  };
  //Usecase 8-Saves the data to local
  var save = (event) => {
    event.preventDefault();
    event.stopPropagation();
      try {
        setEmployeePayrollObject();
        createorUpdateLocal();
        resetForm();
        window.location.replace(site_properties.home_page);
      } 
      catch (e) {
        alert(e);
      }
    }
    var setEmployeePayrollObject=()=>{
      contactObj.fullName=getInputValue("fullName");
      contactObj.phoneNumber = getInputValue("phoneNumber");
      contactObj.address = getInputValue("address");
      contactObj.city = getInputValue("city");
      contactObj.state = getInputValue("state");
      contactObj.zip = getInputValue("zip");
    }

  //Usecase 6-create or update local storage
  var createorUpdateLocal = () => {

      let addressList = JSON.parse(localStorage.getItem("ContactList"));
      if(addressList){
        let contactData = addressList.find(contact=>contact._id == contactObj._id);
        if(!contactData){
          addressList.push(createNewContact());
        }else{
          var index = addressList.map(contact=>contact._id).indexOf(contactData._id);
          addressList.splice(index,1,createNewContact(contactData._id));
        }
      }else{
        addressList = [createNewContact()];
      }
      //JSON to String
      localStorage.setItem("ContactList", JSON.stringify(addressList));
    };

    //Check whether id is present 
    var createNewContact=(id)=>{
      let contactData = new ContactPerson();
      if(!id)contactData.id = createContactId();
      else contactData.id = id;
      setContact(contactData);
      return contactData;
    }

    //Create ID
    var createContactId=()=>{
      let contactId = localStorage.getItem("ContactId");
      contactId = !contactId? 1:(parseInt(contactId)+1).toString();
      localStorage.setItem("ContactId",contactId);
      return contactId;
    }
    var setContact = (contact)=>{
      try {
        contact.fullName = contactObj.fullName;
        contact.phoneNumber = contactObj.phoneNumber;
        contact.address=contactObj.address;
        contact.city=contactObj.city;
        contact.state=contactObj.state;
        contact.zip=contactObj.zip;
     }catch(e){
         alert(e);
     }
    };

  //Reset form once submitted
  var resetForm=()=>{
      setValue('#fullName','');
      setValue('#phoneNumber','');
      setValue('#address','');
      setTextValue('.text-error','');
      setTextValue('.text-error-phone','');
      setTextValue('.text-error-zip','');
      setValue('#city','');
      setValue('#state','');
  }

 