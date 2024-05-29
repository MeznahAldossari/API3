let url = "https://fakestoreapi.com/products";

async function datas() {
  let res = await fetch(url);
  let x = await res.json();
  console.log(x);
  x.forEach((e) => {
    let element = document.createElement("img");
    let h3 = document.createElement("h3");
    let h6 = document.createElement("h6");
    let div = document.createElement("div");
    let mainDive = document.getElementById("div1");

    element.src = e.image;
    h3.innerText = e.title;
    h6.innerText = e.price;

    div.classList.add("div2");
    element.classList.add("img");
    div.appendChild(element);
    div.appendChild(h3);
    div.appendChild(h6);

    mainDive.appendChild(div);
  });
}
datas();
