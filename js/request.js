
//practice
let formjs = JSON.parse(localStorage.getItem("regForm")) || [];
(localStorage.getItem("regForm")) || [];
    console.log("number of arrays: " + formjs.length)
    formjs.forEach(function(formjs, index) {
        console.log("[" + index + "]: " + formjs.id)
    });
    
    for (i = 0; i < formjs.length; i++) {
        console.log(formjs[i])
    }
    

// let requestData = JSON.parse(JSON.stringify(formjs));

// localStorage.setItem("requestData", JSON.stringify(formjs));

// console.log(formjs)

// for (i = 0; i < formjs.length; i++) {
//     // console.log(formjs[i])
// }


// for (i = 0; i < localStorage.length; i++)   {
//     console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
// }


if (formjs) {
    var output = document.querySelector('#results');
    output.innerHTML = "" ;
    formjs.forEach(data => {
        output.innerHTML += `
            <table class="card">
                <tr>
                    <th>Name: </th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th>Birthdate: </th>
                    <td>${data.birthdate}</td>
                </tr>
                <tr>
                    <th>Lot No.: </th>
                    <td>${data.lotNumber}</td>
                </tr>
                <tr>
                    <th>Barangay: </th>
                    <td>${data.barangay}</td>
                </tr>
                <tr>
                    <th>Phone Number: </th>
                    <td>${data.contact}</td>
                </tr>
                <tr class="buttons"> 
                    <td><button onclick="acceptBtn()" class="acceptBtn">Accept</button></td>
                    <td><button onclick= "declineBtn()" class="declineBtn">Decline</button></td>
                </tr>
                
            </table>
        `;
    });
}




function declineBtn() {
    let confirmAction = confirm("Are you sure you want to decline the request?")
        
    if (confirmAction) {
        alert("Request Declined");

        let table = document.querySelector('.card');
        let tr = table;
    
        officialID = tr.id;
    
        tr.remove();

    }
}

function acceptBtn () {
    let confirmAction = confirm("Are you sure you want to accept the request?")

    if (confirmAction) {
        alert("Request Accepted")

        let table = document.querySelector('.card');
        let tr = table;
    
        officialID = tr.id;
    
        tr.remove();

//         let retrieveData = localStorage.getItem("regForm");
//         let requestEntries = JSON.parse(retrieveData); //convert to object

// //loop 
// for (let i in requestEntries) {
//     let recordTable = document.querySelector("#recordTable");
//     let recordTableRow = document.createElement('tr');
//     recordTableRow.id = requestEntries[i].id;

//     let nameData = document.createElement('td');
//     nameData.textContent = requestEntries[i].name;

//     let birthdateData = document.createElement('td');
//     birthdateData.textContent = requestEntries[i].birthdate;

//     let lotNumberData = document.createElement('td');
//     lotNumberData.textContent = requestEntries[i].lotNumber;

//     let barangayData = document.createElement('td');
//     barangayData.textContent = requestEntries[i].barangay;

//     let contactData = document.createElement('td');
//     contactData.textContent = requestEntries[i].contact;

//     let delData = document.createElement('td');
//     delData.innerHTML = "<button onClick='delFunction()'>Delete</button>"

//     recordTable.appendChild(recordTableRow);
//     recordTableRow.appendChild(nameData);
//     recordTableRow.appendChild(birthdateData);
//     recordTableRow.appendChild(lotNumberData);
//     recordTableRow.appendChild(barangayData);
//     recordTableRow.appendChild(contactData);

//     recordTableRow.appendChild(delData);

// }

//     const newRegForm = JSON.parse(localStorage.getItem("regForm"));

//     const acceptedRequest = { 
//         newName: requestEntries[i].name,
//         newBirthdate: requestEntries[i].birthdate,
//         newLotNumber: requestEntries[i].lotNumber,
//         newBarangay: requestEntries[i].barangay,
//         newContact: requestEntries[i].contact
//     }
    

//     localStorage.setItem("newRecordList", JSON.stringify(acceptedRequest));
//     console.log(acceptedRequest)


    }
}
















// let retrieveData = localStorage.getItem("regForm");
// let requestEntries = JSON.parse(retrieveData); //convert to object

// //loop 
// for (let i in requestEntries) {

// console.log(requestEntries[i].id)

// const newRegForm = JSON.parse(localStorage.getItem("regForm"));


// const acceptedRequest = { 
//     newName: requestEntries[i].name,
//     newBirthdate: requestEntries[i].birthdate,
//     newLotNumber: requestEntries[i].lotNumber,
//     newBarangay: requestEntries[i].barangay,
//     newContact: requestEntries[i].contact,
//     newID: requestEntries[i].id
// }


// localStorage.setItem("newRecordList", JSON.stringify(acceptedRequest));


// retrieveData.push(acceptedRequest);
// lo

// localStorage.setItem("allAccepted", JSON.stringify(acceptedRequest) )

// console.log(acceptedRequest)


// }

