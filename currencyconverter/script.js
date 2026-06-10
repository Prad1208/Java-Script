const base_url="https://v6.exchangerate-api.com/v6/9b1c8e7a0c8b2e5f1d9b3c4/latest/USD";
const dropdowns =document.querySelectorAll(".dropdown");

let i=0;
for(let select of dropdowns){
    for(currcode in countryList){
   let newOption=document.createElement("option");
   newOption.innerText=currcode;
   newOption.value=currcode;
   select.append(newOption);
}
}