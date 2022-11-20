// const inputName = document.getElementById("exampleInputName");
// const form = document.getElementById("form-user-create");
// const inputBirth = document.getElementById("exampleInputBirth");
// const inputCountry = document.getElementById("exampleInputCountry");
// const inputEmail = document.getElementById("exampleInputEmail");
// const inputPassoword = document.getElementById("exampleInputPassword");
// const photoFile = document.getElementById("exampleInputFile");
// const admin = document.getElementById("exampleInputAdmin");

// console.log(inputName);

const fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach((field, index) => {
  if (field.name == "gender") {
    if (field.checked) {
      console.log("sim", field);
    }
  } else {
    console.log("Não");
  }
});
