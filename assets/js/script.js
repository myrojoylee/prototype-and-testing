let allData, zipCode;
const submitBtn = document.querySelector("#submit");
const userZipCode = document.querySelector("#search-zipcode");

submitBtn.addEventListener("click", function () {
  console.log(Number(userZipCode.value));
  zipCode = Number(userZipCode.value);
  fetchMasterData(zipCode);
});

function fetchMasterData(zipCode) {
  let postalURL = `https://api.openbrewerydb.org/v1/breweries?by_postal=${zipCode}`;

  fetch(postalURL)
    .then((response) => response.json())
    .then((allData) => console.log(allData));
}

$(function () {
  $("#size").selectmenu();
  $("#salutation").selectmenu();
});

/**
 * datepicker function
 */
$(function () {
  $("#datepicker").datepicker();
  const value = $("#datepicker").val();
  console.log(value);
});

// userZipCode = document.querySelector("#search-zipcode").value;
