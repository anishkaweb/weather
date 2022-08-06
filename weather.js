const temperatefield = document.querySelector(".weather1");
const cityfield = document.querySelector(".weather2 p");
const datefield = document.querySelector(".weather2 span");
const emojifield = document.querySelector(".weather3 img");
const weatherfield = document.querySelector(".weather3 span");
const searchfield = document.querySelector(".search");
const formfield = document.querySelector("form");

let target = "Delhi";
const fetchdata = async (target) => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=1cefe9cf73304f77ba4190043222907&q=${target}`;

  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);

  const {
    current: {
      temp_c,
      condition: { text, icon },
    },
    location: { name, localtime },
  } = data;

  updatedom(temp_c, name, icon, text, localtime);
  } catch (error) {
    alert("City not found")
  }
};

function updatedom(temperate, city, emoji, text, time) {
  temperatefield.innerText = `${temperate}°C`;
  cityfield.innerText = city;

  emojifield.src = emoji;
  weatherfield.innerText = text;

  const nowtime=time.split(" ")[1];
const nowdate=time.split(" ")[0];
// console.log(nowtime);
// console.log(nowdate);
const nowday=new Date(nowdate).getDay()
// console.log(convert(nowday));
datefield.innerText=`${nowtime} - ${convert(nowday)}   ${nowdate}`
}

fetchdata(target);

function convert(num) {
  switch (num) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      break;
  }
}
const search=(e)=>{
  e.preventDefault()
  target=searchfield.value;
  // console.log(target);
  fetchdata(target)
  formfield.reset();
return false;

}
formfield.addEventListener("submit",search)


