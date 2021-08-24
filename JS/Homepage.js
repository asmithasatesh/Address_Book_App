var ContactList
window.addEventListener('DOMContentLoaded', (event) =>
{
  //Usecase 6: Ability to view Employee Payroll details from Local Storage.
    ContactList=getEmployeePayrollFromLocalStorage();
    InjectFRomLOcalStorage();

});

//Usecase 6: Ability to view Employee Payroll details from Local Storage.
InjectFRomLOcalStorage = () => {
    const headerHtml = "<th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
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
        <img id="${ContactList[i]._fullName}" src="../assets/icons/delete-black-18dp.svg" alt="delete" id="icon"/>
        <img id="${ContactList[i]._fullName}" src="../assets/icons/create-black-18dp.svg" alt="create" id="icon"/>
    </td>
  </tr>
    `;
    }
      
    document.querySelector('#display-table').innerHTML = innerHtml;
  }
  //Usecase 6: Get data from Local Storage
  const getEmployeePayrollFromLocalStorage=()=>
  {
      return localStorage.getItem("ContactList") ? JSON.parse(localStorage.getItem("ContactList")) : [];
  }
