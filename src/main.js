// 동적으로 옷 리스트 추가

const ul = document.querySelector("ul");
const item__row = ul.querySelector(".item__row");

const itemRow = document.createElement("li");
itemRow.setAttribute("class", "item__row");
itemRow.innerHTML = `<img class="clothes" src="img/pink_t.png" alt="pink T-shirt" />
<span>female, large size</span>`;
ul.appendChild(itemRow);
