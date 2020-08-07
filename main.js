const shirt_btn = document.querySelector("#shirt_btn");
const pants_btn = document.querySelector("#pants_btn");
const skirt_btn = document.querySelector("#skirt_btn");
const blue_btn = document.querySelector("#blue_btn");
const yellow_btn = document.querySelector("#yellow_btn");
const pink_btn = document.querySelector("#pink_btn");

function makeItem(img_src, string, class_name) {
  const ul = document.querySelector("ul");
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

shirt_btn.addEventListener("click", () => {
  showItem("shirt");
});
pants_btn.addEventListener("click", () => {
  showItem("pants");
});
skirt_btn.addEventListener("click", () => {
  showItem("skirt");
});
blue_btn.addEventListener("click", () => {
  showItem("blue");
});
yellow_btn.addEventListener("click", () => {
  showItem("yellow");
});
pink_btn.addEventListener("click", () => {
  showItem("pink");
});

function showItem(category) {
  const li = document.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    if (li[i].style.display === "none") li[i].style.display = "block";
  }
  Array.from(document.querySelectorAll(`.clothes:not(.${category})`)).forEach(
    function (element) {
      if (element) element.parentNode.style.display = "none";
    }
  );
}
