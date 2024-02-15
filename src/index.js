import { fetchData } from "./fetchData.js";

const list = document.getElementById("list");
const arrow = document.createElement("span");
arrow.className = "arrow";

const SERVER_URL = "http://localhost:3000/services";

const p = await fetchData(SERVER_URL);
p.sort((a, b) => a.sorthead - b.sorthead && a.head - b.head);

p.map((item) => {
  const itemList = document.createElement("div");
  itemList.className = "item";
  itemList.id = item.id;
  itemList.innerHTML = `<div>${item.name} - ${item.price}</div>`;

  const contentItem = document.createElement("div");
  contentItem.className = "content";

  itemList.append(contentItem);

  if (item.head === null) {
    list.append(itemList);
  }

  if (item.head !== null) {
    const parent = document.getElementById(item.head);
    !parent.classList.contains("parent") && parent.classList.add("parent");

    itemList.className = "child";
    parent.childNodes[1].append(itemList);
  }
});

// console.log(p);

// const arrow = document.querySelectorAll(".arrow");
const parentItems = document.querySelectorAll(".parent");

parentItems.forEach((item) => {
  item.childNodes[0].classList.add("arrow");

  item.childNodes[0].addEventListener("click", (e) => {
    e.target.classList.toggle("arrow--active");
    item.childNodes[1].classList.toggle("visible");
  });
});
