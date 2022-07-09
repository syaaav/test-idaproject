import CardImg from "../polaroid.png";
import DeleteImg from "../delete.png";

function handleSubmit(name, def, price) {
  const el = document.createElement("div");
  el.classList.add("card");
  document.querySelector(".catalog_cards").appendChild(el);

  const elImg = document.createElement("div");
  elImg.classList.add("card_img");
  const img = document.createElement("img");
  img.src = CardImg;
  elImg.appendChild(img);
  el.appendChild(elImg);

  const elTitle = document.createElement("div");
  elTitle.classList.add("card_title");
  elTitle.textContent = document.getElementById(name).value;
  el.appendChild(elTitle);

  const elDef = document.createElement("div");
  elDef.classList.add("card_def");
  elDef.textContent = document.getElementById(def).value;
  el.appendChild(elDef);

  const elPrice = document.createElement("div");
  elPrice.classList.add("card_price");
  elPrice.textContent = `${document
    .getElementById(price)
    .value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} руб.`;
  el.appendChild(elPrice);

  const iconDel = document.createElement("input");
  iconDel.setAttribute("type", "image");
  iconDel.classList.add("delete");
  iconDel.src = DeleteImg;
  el.appendChild(iconDel);
}

export default handleSubmit;
