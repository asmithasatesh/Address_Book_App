var ContactList;
window.addEventListener('DOMContentLoaded', (event) =>
{
  //Usecase 6: Ability to view Employee Payroll details from Local Storage.
    ContactList=getEmployeePayrollFromLocalStorage();
    InjectFRomLOcalStorage();
    localStorage.removeItem("editContact");
});

//Usecase 7: Ability to view Employee Payroll details from Local Storage.
InjectFRomLOcalStorage = () => {
    var headerHtml = "<th>fullName</th><th>Address</th><th>city</th><th>state</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    let innerHtml = `${headerHtml}`;
    if(ContactList.length == 0) return;
    for (let i=0;i< ContactList.length;i++)
    {
  innerHtml=`${innerHtml}
  <tr>
    <td>${ContactList[i]._fullName}</td>
    <td>${ContactList[i]._address}</td>
    <td>${ContactList[i]._city}</td>
    <td>${ContactList[i]._state}</td>
    <td>${ContactList[i]._zip}</td>
    <td>${ContactList[i]._phoneNumber}</td>
    <td>
        <img id="${ContactList[i]._id}" src="../assets/icons/delete-black-18dp.svg" onclick="remove(this)" alt="delete" id="icon"/>
        <img id="${ContactList[i]._id}" src="../assets/icons/create-black-18dp.svg" onclick="update(this)" alt="create" id="icon"/>
    </td>
  </tr>
    `;
    }
      
    document.querySelector('#display-table').innerHTML = innerHtml;
  }
  //Usecase 7: Get data from Local Storage
  var getEmployeePayrollFromLocalStorage=()=>
  {
      return localStorage.getItem("ContactList") ? JSON.parse(localStorage.getItem("ContactList")) : [];
  }

//Usecase 8: Remove employee from Local Storage
var remove= (node) =>
{
  let employeePayrollData=ContactList.find(empData => empData._id == node.id);
  if(!employeePayrollData) return ;
  var index= ContactList.map(empData => empData._id)
  .indexOf(employeePayrollData._id);
  ContactList.splice(index,1);
  localStorage.setItem("ContactList",JSON.stringify(ContactList));
  InjectFRomLOcalStorage();
}

var update=(node)=>{
  let contactData = ContactList.find(contact=>contact._id == node.id);
  if(!contactData)return;
  localStorage.setItem('editContact',JSON.stringify(contactData));
  window.location.replace(site_properties.add_contact_page);
}