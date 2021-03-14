function printInformation(){
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const selectedGender = document.getElementById("gender")
  const gender = selectedGender.options[selectedGender.selectedIndex].text;
  const selectedPosition = document.getElementById("position");
  const position = selectedPosition.options[selectedPosition.selectedIndex].text;
  let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
  for (let checkbox of markedCheckbox) {
    let h3 = document.createElement("h3");
    h3.innerHTML = `It is so cool that you llik ${checkbox.value}`;
    document.getElementById("hobby").appendChild(h3);
  };
  let table = document.querySelector(".table")
  var row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = position;
  cell4.innerHTML = gender;
  for (let checkbox of markedCheckbox) {
    cell5.innerHTML = checkbox.value;
  };
};

document.getElementById("myBtn").addEventListener("click", printInformation);