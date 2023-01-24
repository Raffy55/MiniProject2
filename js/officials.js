// start of navbar
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", ()=>{
sidebar.classList.toggle("open");
});
// end of navbar


//start of officials-page
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addOfficial);

let officialEntries = JSON.parse(localStorage.getItem("allEntries"));

function addOfficial() {
    let n = localStorage.getItem("idValueOfficials"); //new
    if (officialEntries == null) officialEntries = []; //use [] to save objects in an array
    
    //get/declare input value
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let position = document.querySelector("#position").value;
    n = ++n; //for id, auto increment will add 1 for every new entry

    //put all values in one object 
    let officialDetails = {
        firstNameObj: firstName,
        lastNameObj: lastName,
        positionObj: position,
        id: n //new
    }; 
    
    //to save in local or session storage
    localStorage.setItem("addDetails", JSON.stringify(officialDetails)); //object
    localStorage.setItem("idValueOfficials", n) //save id value

    //push object to array
    officialEntries.push(officialDetails);

    //to update all entries in localstorage (array of objects)
    localStorage.setItem("allEntries", JSON.stringify(officialEntries));

    window.setTimeout(function () {
        window.location.reload();
    }, 0.001);

    //for display
    let currentOfficials = document.querySelector("#currentOfficials");
    let officialRow = document.createElement('tr');
    officialRow.id = officialDetails.id; //assign an id to the parentNode 

    let firstNameData = document.createElement('td');
    firstNameData.textContent = officialDetails.firstNameObj;

    let lastNameData = document.createElement('td');
    lastNameData.textContent = officialDetails.lastNameObj;

    let positionData = document.createElement('td');
    positionData.textContent = officialDetails.positionObj;

    let delData = document.createElement('td');
    delData.innerHTML = "<button onClick='delFunction()' class='delBtn'>Delete</button>"

    currentOfficials.appendChild(officialRow);
    officialRow.appendChild(firstNameData);
    officialRow.appendChild(lastNameData);
    officialRow.appendChild(position);
    officialRow.appendChild(delData);
}

function delFunction() {
    let confirmAction = confirm("Are you sure you want to delete this record?")

    if (confirmAction) {
        let td = event.target.parentNode;
        let tr = td.parentNode;
    
        taskID = tr.id;
        // console.log(taskID)
    
        tr.remove();

        officialEntries = officialEntries.filter((obj) => obj.id != taskID);

        //!= value only 9 != "9" : false
        //!== value and data type 9 !== "9" true
    
        console.log(officialEntries)
    
        localStorage.setItem("allEntries", JSON.stringify(officialEntries));
    }
}

//to gather all existing data from localstorage 
let retrieveData = localStorage.getItem("allEntries");
let officialEntries2 = JSON.parse(retrieveData); //convert to object

//loop 
for (let i in officialEntries2) {
    let currentOfficials = document.querySelector("#currentOfficials");
    let officialRow = document.createElement('tr');
    officialRow.id = officialEntries2[i].id;

    let firstNameData = document.createElement('td');
    firstNameData.textContent = officialEntries2[i].firstNameObj;

    let lastNameData = document.createElement('td');
    lastNameData.textContent = officialEntries2[i].lastNameObj;

    let positionData = document.createElement('td');
    positionData.textContent = officialEntries2[i].positionObj;

    let delData = document.createElement('td');
    delData.innerHTML = "<button onClick='delFunction()'>Delete</button>"

    currentOfficials.appendChild(officialRow);
    officialRow.appendChild(firstNameData);
    officialRow.appendChild(lastNameData);
    officialRow.appendChild(positionData)
    officialRow.appendChild(delData);
}

//end of officials-page