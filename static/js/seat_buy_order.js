var movies = ["1917", "A Moment of Happiness  (M)", "A Shaun The Sheep Movie: Farmageddon",
  "All's Well End's Well 2020 (M)", "An Easy Girl (F)", "Bad Boys For Life",
  "Bernie The Dolphin 2", "Cats", "Champions", "Darbar (T)", "Dark Waters", "Disney's Frozen 2",
  "Disney's Frozen Sing-A-Long", "Disney`s Frozen 2 Sing-A-Long", "Distinction", "Dolittle",
  "Enter The Fat Dragon (M)", "Innocent Witness", "Intelligent Lives", "IP MAN 4: THE FINALE (M)",
  "Jojo Rabbit", "Judy", "Jumanji: The Next Level", "Kumanthong (VIETNAMESE)",
  "My Brother Chases Dinosaurs", "Official Secrets", "Only Cloud Knows (M)", "Perfect Nanny (F)",
  "Playing With Fire", "Primal", "Richard Jewell", "Secret Zoo (K)",
  "Sheep Without A Shepherd (M)", "Someone, Somewhere (F)", "Spies In Disguise",
  "Star Wars: The Rise Of Skywalker", "Start Up (K)", "The Aeronauts", "The Farewell",
  "The Grand Grandmaster (M)", "The Grudge", "The Peanut Butter Falcon", "The Wolf Hour",
  "Underwater"
];
/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
function myFunction(name) {
  document.getElementById(name).classList.toggle("show");
}
//ADDING OPTIONS FROM ARRAY
function filterFunction(name) {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById(name);
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
var ul = document.querySelector("#movieName");
for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];
  var aItem = document.createElement("a");
  aItem.textContent = movie;
  aItem.href = "/seat-buy-order/" + movie;
  ul.appendChild(aItem);
}
movies = Object.keys(data);
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(name) {
  document.getElementById(name).classList.toggle("show");
}
//ADDING OPTIONS FROM ARRAY FOR OTHERS [OPTIONS]
var selectedHall, selectedHallNo, selectedDate, selectedTime;
var movieDict, hallDict, hallNoDict, dateDict;
var hallUl = document.getElementById("hallOptions"); //select this id
movieDict = data[movie]; //contains data for that movie
var hallArr = Object.keys(movieDict);
//CREATE OPTIONS FOR THE HALL BASED ON MOVIE
for (var i = 0; i < hallArr.length; i++) {
  var hallEl = hallArr[i];
  var hallItem = document.createElement("option");
  hallItem.textContent = hallEl;
  hallItem.value = hallEl;
  hallUl.appendChild(hallItem); //add options
}
//storing the selectedHall as a variable and then filtering months
var allOptions;
var hallNoUl = document.getElementById("hallNoOptions");
var dateUl = document.getElementById("dateOptions");
var timeUl = document.getElementById("timeOptions");
// function resetHallNo(){
//   hallNoUl.innerHTML="";  //remove all child nodes before adding new ones
// }
function setHallNo() {
  hallNoUl.innerHTML = "";
  dateUl.innerHTML = "";
  timeUl.innerHTML = "";
  selectedHall = hallUl.value;
  hallDict = movieDict[selectedHall];
  var hallNoArr = Object.keys(hallDict);
  for (var i = 0; i < hallNoArr.length; i++) {
    var hallNoEl = hallNoArr[i];
    var hallNoItem = document.createElement("option");
    hallNoItem.textContent = hallNoEl;
    hallNoItem.value = hallNoEl;
    hallNoUl.appendChild(hallNoItem);
  }
}

function setDates() {
  dateUl = document.getElementById("dateOptions");
  dateUl.innerHTML = "";
  timeUl.innerHTML = "";
  var hallNoUl = document.getElementById("hallNoOptions");
  selectedHallNo = hallNoUl.value;
  dateDict = hallDict[selectedHallNo];
  var dateArr = Object.keys(dateDict);
  for (var i = 0; i < dateArr.length; i++) {
    var el = dateArr[i];
    var item = document.createElement("option");
    item.textContent = el;
    item.value = el;
    dateUl.appendChild(item);
  }
}

function setTimes() {
  timeUl = document.getElementById("timeOptions");
  timeUl.innerHTML = "";
  var dateUl = document.getElementById("dateOptions");
  selectedDate = dateUl.value;
  timeArr = dateDict[selectedDate];
  for (var i = 0; i < timeArr.length; i++) {
    var el = timeArr[i];
    var item = document.createElement("option");
    item.textContent = el;
    item.value = el;
    timeUl.appendChild(item);
  }
}

function getTimes() {
  selectedTime = document.getElementById("timeOptions").value;
}
//end
//SHOW SEAT MAP WHEN BUTTON GO IS CLICKED
var goButton = document.querySelector("#Go");
goButton.addEventListener("click", function(e) {
  // alert(movie);
  e.preventDefault;
  allOptions = movieName + "/" + selectedHall + "/" + selectedHallNo + "/" + selectedDate + "/" +
    selectedTime;
  window.location.replace("/seat-buy-order/" + allOptions);
})
