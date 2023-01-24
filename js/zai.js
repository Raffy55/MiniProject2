

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});


// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  }else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
  }
}



// start of officials-page

// DOM Elements
const officialsForm = document.getElementById("officialsForm");
const officialsContainer = document.querySelector(".officials");
const firstNameInput = officialsForm["firstName"];
const lastNameInput = officialsForm["lastName"];
const committeeInput = officialsForm["committee"];
const positionInput = officialsForm["position"];

//JSON.parse - to convert string into JS object || [] - to save objects in an array
const officials = JSON.parse(localStorage.getItem("officials")) || [];

//add new items in array || .push - push object to array
const addOfficial = (firstName, lastName, committee, position) => {
  officials.push({
    firstName,
    lastName,
    committee,
    position
  });

  //to save in localstorage || JSON.stringify - to convert JS object into string 
  localStorage.setItem("officials", JSON.stringify(officials));

  return { firstName, lastName, committee, position };
};

const createOfficialElement = ({ firstName, lastName, committee, position }) => {
  
  // Create elements
  const table = document.getElementById("officialsList").insertRow(-1);
  const row = document.createElement('tr');
  const officialFirstName = row.insertCell(0);
  const officialLastName = row.insertCell(1);
  const officialCommittee = row.insertCell(2);
  const officialPosition = row.insertCell(3);
  // const officialBtns = document.createElement("span");
  // const officialEditBtn = row.insertCell(4);
  const officialDelBtn = row.insertCell(4);



  officialFirstName.innerText = firstName;
  officialLastName.innerText =  lastName;
  officialCommittee.innerText = committee;
  officialPosition.innerText = position;
  // officialBtns.innerText 
  // officialEditBtn.innerHTML = "<button onclick='editBtnFunction()'>Edit</button>"
  officialDelBtn.innerHTML = "<button onclick='delBtnFunction()'>Delete</button>";

  //add to the DOM
  table.append(officialFirstName, officialLastName, officialCommittee, officialPosition, officialDelBtn);
  officialsContainer.appendChild(row);

  //can't add empty input
  officialsContainer.style.display = officials.length === 0 ? "none" : "column";
};

officialsContainer.style.display = officials.length === 0 ? "none" : "column";

officials.forEach(createOfficialElement);

officialsForm.onsubmit = e => {
  e.preventDefault();

  const newOfficial = addOfficial(
    firstNameInput.value,
    lastNameInput.value,
    committeeInput.value,
    positionInput.value
  );


  createOfficialElement(newOfficial);

  firstNameInput.value = "";
  lastNameInput.value = "";
  committeeInput.value = "";
  positionInput.value = "";
};


//delBtn 
function delBtnFunction() {
  let td = event.target.parentNode;
  let tr = td.parentNode;

  offID = tr.id;

  tr.remove();

  offEntries2 = offEntries2.filter((obj) => obj.id != offID);

  // localStorage.removeItem(tr)
}





