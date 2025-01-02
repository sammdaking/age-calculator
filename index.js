//inputs value
const birthDay = document.getElementById("day");
const birthMonth = document.getElementById("month");
const birthYear = document.getElementById("year");
//-- result value
const dayResult = document.getElementById("days-input");
const monthResult = document.getElementById("months-input");
const yearResult = document.getElementById("years-input");

const yearRequired = document.querySelector(".year-required");
const dayRequired = document.querySelector(".day-required");
const monhtRequired = document.querySelector(".month-required");
const buttons = document.querySelector(".button");

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

console.log(date);
const thirtyOneDayMonth = [1, 3, 5, 7, 8, 10, 12];
const thirtyDayMonth = [4, 6, 9, 11];
const emtyValidation = () => {
  birthDay.value === ""
    ? dayRequired.classList.add("show")
    : dayRequired.classList.remove("show");

  birthMonth.value === ""
    ? monhtRequired.classList.add("show")
    : monhtRequired.classList.remove("show");

  birthYear.value === ""
    ? yearRequired.classList.add("show")
    : yearRequired.classList.remove("show");
};
const oneToThirtyOneRegex = /^[1-9]$|^[1-2][0-9]$|3[01]$/;
const oneToTwelveRegex = /\b(1[0-2]|[1-9])\b/;
birthMonth.addEventListener("input", function () {
  if (!oneToTwelveRegex.test(birthMonth.value)) {
    birthMonth.value = "";
  }
});

birthYear.addEventListener("input", function () {
  if (birthYear.value > currentYear) {
    birthYear.value = "";
  }
});
console.log(birthDay);
birthDay.addEventListener("input", function () {
  if (!oneToThirtyOneRegex.test(birthDay.value)) {
    birthDay.value = "";
  }
});

buttons.addEventListener("click", () => {
  emtyValidation();
  console.log("first");
  if (
    birthDay.value !== "" &&
    birthMonth.value !== "" &&
    birthYear.value !== ""
  ) {
    // // current  2   birth  5
    // if (birthMonth.value > currentMonth) {
    //   yearResult.innerText = ageYear--;
    //   // current 28 birth 29
    //   if (currentDay < birthDay.value) {
    //     monthResult.innerText = 12 - (birthMonth.value - currentMonth);
    //     dayResult.innerText = 31 - (birthDay.value - currentDay);
    //   } else if ((currentDay = birthDay.value)) {
    //     monthResult.innerText = currentMonth - birthMonth.value;
    //     dayResult.innerText = 31 - (birthDay.value - currentDay);
    //   } else if (currentDay > birthDay.value) {
    //     monthResult.innerText = 12 - (currentMonth - birthMonth.value);
    //     dayResult.innerText = currentMonth - birthMonth.value;
    //   }
    // } else if ((birthMonth.value = currentMonth)) {
    //   // 11 05 2000      12 05 2025
    //   if (currentDay > birthDay.value) {
    //     monthResult.innerText = currentMonth - birthMonth.value;
    //     dayResult.innerText = birthDay.value - currentDay;
    //   } else if ((currentDay = birthDay.value)) {
    //     yearResult.innerText = currentYear - birthYear.value;
    //     monthResult.innerText = currentMonth - birthMonth.value;
    //     dayResult.innerText = currentDay - birthDay.value;
    //   } else if (currentDay < birthDay.value) {
    //     yearResult.innerText = currentYear - birthYear.value - 1;
    //     monthResult.innerText = 12 - 1;
    //     dayResult.innerText = 31 - 1;
    //   }
    // }

    let yearValue = currentYear - birthYear.value;
    yearResult.innerText = yearValue;
    monthResult.innerText = currentMonth - birthMonth.value;
    dayResult.innerText = currentDay - birthDay.value;

    if (birthMonth.value >= currentMonth && birthDay.value > currentDay) {
      console.log("şart");
      yearResult.innerText = yearValue - 1;
      monthResult.innerText = currentMonth - birthMonth.value + 12;
      dayResult.innerText = currentDay - birthDay.value + 31;
      console.log("aa");
    }
    if (birthMonth.value < currentMonth && birthDay.value > currentDay) {
      dayResult.innerText = currentDay - birthDay.value + 31;
    }
  }
});
