const stepBlocks = document.querySelectorAll(".stepblock");
const stepInfoLast = document.querySelectorAll(".stepinfolast");

stepBlocks.forEach((block, index) => {
  block.addEventListener("mouseover", () => {
    stepInfoLast[index].style.borderBottom = "3px solid white";
  });
  block.addEventListener("mouseout", () => {
    stepInfoLast[index].style.borderBottom = "3px solid black";
  });
});

// page scrolling

const scrollButton = document.querySelector(".up-button");
const upArrow = document.querySelector(".up-arrow");

scrollButton.addEventListener("mouseover", () => {
  upArrow.style.color = "white";
});

scrollButton.addEventListener("mouseout", () => {
  upArrow.style.color = "black";
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    scrollButton.classList.add("shown");
  } else {
    scrollButton.classList.remove("shown");
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// calculator

const calculator = document.querySelector(".calc");
const buttonCalc = document.querySelector(".calculator");
const closeCalc = document.querySelector(".close-calc");

buttonCalc.addEventListener("click", function () {
  calculator.classList.toggle("hidden");
});

closeCalc.addEventListener("click", function () {
  calculator.classList.toggle("hidden");
});

const basePrice = 1100;
const totallPriceElement = document.querySelector("#calc__total-price");

const inputs = document.querySelectorAll("input");
const district = document.querySelector(".district");

const wallMaterial = document.querySelectorAll('input[name="wall-material"]');
const numberOfStoreys = document.querySelectorAll('input[name="number-of-storeys"]');
const numberOfRooms = document.querySelectorAll('input[name="rooms"]');

const squareInput = document.querySelector(".calc__input-short");
const squareRange = document.querySelector(".calc__range-input");

squareRange.addEventListener("input", () => {
  squareInput.value = squareRange.value;
});

squareInput.addEventListener("input", () => {
  squareRange.value = squareInput.value;
});

inputs.forEach((item) => {
  item.addEventListener("input", calculate);
});

district.addEventListener("change", calculate);

function calculate() {
  const square = +squareInput.value;
  let wallMaterialCost;
  let numberOfStoreysCost;
  let numberOfRoomsCost;
  let districtCost;

  wallMaterial.forEach((item) =>
    item.checked ? (wallMaterialCost = +item.value) : null
  );
  numberOfStoreys.forEach((item) =>
    item.checked ? (numberOfStoreysCost = +item.value) : null
  );
  numberOfRooms.forEach((item) =>
    item.checked ? (numberOfRoomsCost = +item.value) : null
  );
  districtCost = district.value;

  const totalPrice = Math.round(
    basePrice *
      square *
      wallMaterialCost *
      numberOfStoreysCost *
      numberOfRoomsCost *
      districtCost
  );
  totallPriceElement.textContent = totalPrice;
}
calculate()
