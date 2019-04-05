const mealCost = document.querySelector(".mealCost");

const serviceCharge = document.querySelector(".serviceCharge");

const tip = document.querySelector(".tip");

const total = document.querySelector(".total");

const submit = document.querySelector(".submitButton");

submit.addEventListener("click", submitHandleClick);

function submitHandleClick(e){
    e.preventDefault()
   console.log(mealCost.value);
   console.log(serviceCharge.value);
   console.log(tip.value);
   total.innerHTML = "£" + (parseInt(mealCost.value) + parseInt(serviceCharge.value) + parseInt(tip.value))
}

