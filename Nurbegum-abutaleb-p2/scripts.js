
const countryArray = [];

const countryForm = document.getElementById("country-form");
const countryNameInput = document.getElementById("country-name");
const countryCategoryInput = document.getElementById("country-category");
const countryList = document.getElementById("countries");

function addCountry(event) {
  event.preventDefault();
  const countryName = countryNameInput.value.trim();
  const countryCategory = countryCategoryInput.value;

  if (countryName === "") {
    alert("Please enter a country name.");
    return;
  }

  countryArray.push({ name: countryName, category: countryCategory });

  countryForm.reset();

  displayCountries();
}

function displayCountries() {
  countryList.innerHTML = "";
  countryArray.forEach((country, index) => {
    const li = document.createElement("li");
    li.textContent = `${country.name} (${country.category})`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "15px";
    deleteButton.addEventListener("click", () => deleteCountry(index));
    li.appendChild(deleteButton);

    countryList.appendChild(li);
  });
}
function deleteCountry(index) {
  countryArray.splice(index, 1);
  displayCountries();
}
countryForm.addEventListener("submit", addCountries);