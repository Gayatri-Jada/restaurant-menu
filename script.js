let page = 0;

function nextPage(){
if(page<4) page++;
document.getElementById("container").style.transform="translateX(-"+page*100+"vw)";
}

function prevPage(){
if(page>0) page--;
document.getElementById("container").style.transform="translateX(-"+page*100+"vw)";
}

let cart = {};
let menuPrices = {};

function createMenu(section, items){
let div = document.getElementById(section);

items.forEach(item=>{
cart[item[0]] = 0;
menuPrices[item[0]] = item[1];

div.innerHTML += `
<div class="card">
<div>
<b>${item[0]}</b><br>₹${item[1]}
</div>
<div>
<button onclick="update('${item[0]}',-1)">-</button>
<span id="${item[0]}">0</span>
<button onclick="update('${item[0]}',1)">+</button>
</div>
</div>`;
});
}

function update(name, change){
cart[name]+=change;
if(cart[name]<0) cart[name]=0;
document.getElementById(name).innerText=cart[name];
generateBill();
}

function generateBill(){
let total=0;
let billHTML="";

for(let item in cart){
if(cart[item]>0){
let price = menuPrices[item];
let itemTotal = price * cart[item];
total += itemTotal;
billHTML += item+" x "+cart[item]+" = ₹"+itemTotal+"<br>";
}
}

document.getElementById("bill").innerHTML=billHTML;
document.getElementById("total").innerText=total;
}

createMenu("starters",[
["Gobi 65",120],
["Paneer Tikka",150],
["Chicken 65",170],
["Fish Fry",210]
]);

createMenu("maincourse",[
["Veg Meals",180],
["Chicken Biryani",220],
["Mutton Biryani",260],
["Curd Rice",120]
]);

createMenu("desserts",[
["Gulab Jamun",90],
["Ice Cream",100]
]);