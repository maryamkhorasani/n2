/// date part  \\\
function showDate() {
  let date = new Date();
  let hour = date.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let minut = date.getMinutes();
  minut = minut < 10 ? "0" + minut : minut;
  let second = date.getSeconds();
  second = second < 10 ? "0" + second : second;
  let time = `${second} : ${minut} : ${hour}`;
  document.querySelector("#time").innerHTML = time;
  setTimeout("showDate()", 1000);
}
showDate();

function showDay() {
  const date = new Date();
  const option = {
    weekday: "long",
  };
  const data = Intl.DateTimeFormat("fa-IR", option).format(date);
  console.log(data);
  const day = (document.querySelector("#day").innerHTML = data);
}
showDay();
