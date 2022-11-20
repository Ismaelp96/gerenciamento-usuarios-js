const fields = document.querySelectorAll("#form-user-create [name]");

const user = {};

document
  .getElementById("form-user-create")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    fields.forEach((field, index) => {
      if (field.name == "gender") {
        if (field.checked) {
          user[field.name] = field.value;
        }
      } else {
        user[field.name] = field.value;
      }
    });
  });
