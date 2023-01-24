
document.write("hello")


const submitForm = (e) => {
  e.preventDefault()

  let n = localStorage.getItem("idValue");

  const regFormData = JSON.parse(localStorage.getItem("regForm")) == null ? [] : JSON.parse(localStorage.getItem("regForm"))
  console.log(regFormData)
  
  function getValueById(idString) {
    return document.querySelector(idString).value;
  }

  n = ++n;

  const name = `${getValueById("#inputFirstname")} ${getValueById("#inputMiddlename")} ${getValueById("#inputLastname")} ${getValueById("#inputSuffix")}`;
  console.log(name)



 


  const formData = {
    name,
    alias: getValueById("#inputAlias"),
    age: getValueById("#inputAge"),
    birthdate: getValueById("#inputBirthdate"),
    lotNumber: getValueById("#inputLotNumber"),
    barangay: getValueById("#inputBarangay"),
    municipality: getValueById("#inputMunicipality"),
    province: getValueById("#inputProvince"),
    zip: getValueById("#inputZIP"),
    email: getValueById("#inputEmailaddress"),
    contact: getValueById("#inputContactnumber"),
    governmentId: getValueById("#govId"),
    idPicture: getValueById("#idPicture"),
    emergencyContactName: getValueById("#inputEmergencyContactName"),
    emergencyContactNum: getValueById("#inputEmergencyContactnumber"),
    id: n



  }
  regFormData.push(formData)



  localStorage.setItem("regForm", JSON.stringify(regFormData))
  localStorage.setItem("idValue", n)
  console.log(JSON.stringify(regFormData))

  
  alert("Your registration has been sent to admin for approval.");
  // document.getElementById("regForm").reset();
  window.location.href = "index.html"

}
document.querySelector("#regForm").addEventListener("submit", submitForm)


// const submitForm = () => {
//   let firstName = document.querySelector("#inputFirstname").value;
//   let middleName = document.querySelector("#inputMiddlename").value;
//   let lastName = document.querySelector("#inputLastname").value;

//   localStorage.setItem("name1", firstName);
//   localStorage.setItem("name2", middlename);
//   localStorage.setItem("name3", lastName);

// }
// console.log(submitForm)


function backsite() {
  window.location.href = "index.html"
}








