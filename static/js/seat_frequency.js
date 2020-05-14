/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("theatre").classList.toggle("show");
}
//Implementing search Feature
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("theatre");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
//Button Dropdown Text
var theatres = ["JCube Hall 1", "JCube Hall 2", "JCube Hall 3", "JCube Hall 4", "JCube Hall 5",
  "JCube Hall 6", "JCube IMAX", "Jewel Dreamers", "Jewel Hall 1", "Jewel Hall 2", "Jewel Hall 3",
  "Jewel Hall 4", "Jewel Hall 5", "Jewel Hall 6", "Jewel Hall 7", "Jewel IMAX",
  "Jewel Lumiere One", "Jewel Lumiere Two", "Lido Hall 1", "Lido Hall 10", "Lido Hall 2",
  "Lido Hall 3", "Lido Hall 4", "Lido Hall 5", "Lido Hall 6", "Lido Hall 7", "Lido Hall 8",
  "Lido Hall 9", "Lido IMAX", "nex Hall 1", "nex Hall 2", "nex Hall 3", "nex Hall 4",
  "nex Hall 5", "nex Hall 6", "nex Hall 7", "nex Hall 8", "nex premiere 1", "nex premiere 2",
  "Paya Lebar Quarter Hall 1", "Paya Lebar Quarter Hall 2", "Paya Lebar Quarter Hall 3",
  "Paya Lebar Quarter Hall 4", "Paya Lebar Quarter Hall 5", "Paya Lebar Quarter Hall 6",
  "Paya Lebar Quarter Hall 7", "Paya Lebar Quarter Hall 8", "Paya Lebar Quarter Hall 9",
  "Paya Lebar Quarter IMAX", "Paya Lebar Quarter Lumiere One", "Paya Lebar Quarter Lumiere Two",
  "Seletar Hall 1", "Seletar Hall 2", "Seletar Hall 3", "Seletar Hall 4", "Seletar Hall 5",
  "Seletar Hall 6", "Seletar Hall 7", "Seletar Hall 8", "Waterway Point Hall 1",
  "Waterway Point Hall 10", "Waterway Point Hall 2", "Waterway Point Hall 3",
  "Waterway Point Hall 4", "Waterway Point Hall 5", "Waterway Point Hall 6",
  "Waterway Point Hall 7", "Waterway Point Hall 8", "Waterway Point Hall 9",
  "Waterway Point IMAX"
];
var ul = document.querySelector("#theatre");
for (var i = 0; i < theatres.length; i++) {
  var topping = theatres[i];
  var aItem = document.createElement("a");
  aItem.textContent = topping;
  aItem.href = "/frequencycharts/" + topping;
  ul.appendChild(aItem);
}