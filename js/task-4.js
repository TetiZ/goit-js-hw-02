"use strict";

function getShippingCost(country) {
  let message = `Shipping to ${country} will cost ${price} credits`;
  let price;
  switch (country) {
    case "China":
      price = 100;
      return message;
      break;

    case "Chile":
      price = 250;
      return message;
      break;

    case "Australia":
      price = 170;
      return message;
      break;

    case "Jamaica":
      price = 120;
      return message;
      break;

    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
