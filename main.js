const ul = document.querySelector("ul");
const item__row = ul.querySelector(".item__row");

function makeItem(img_src, string, class_name) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.innerHTML = `<img class="clothes ${class_name}" src="img/${img_src}.png"/>
    <span>${string}</span>`;
  ul.appendChild(itemRow);
}

makeItem("pink_t", "female, large size", "pink shirt");
makeItem("blue_p", "male, small size", "blue pants");
makeItem("yellow_p", "male, large size", "yellow pants");
makeItem("yellow_s", "male, large size", "yellow skirt");
makeItem("blue_s", "female, small size", "blue skirt");
makeItem("blue_t", "male, large size", "blue shirt");
makeItem("yellow_t", "male, large size", "yellow shirt");
makeItem("pink_p", "male, large size", "pink pants");
makeItem("pink_s", "female, small size", "pink skirt");

const t_shirt = document.querySelector("#shirt_btn");
const li = document.querySelectorAll("li");
const color = ["blue", "pink", "yellow"];
t_shirt.addEventListener("click", () => {
  if ($("li").hasClass("shirt")) this.style.display = "none";
});

// const menu = {
//   shirt: function () {

//   },
// };
