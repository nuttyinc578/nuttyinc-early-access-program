"use strict";

// GitHub issue form field IDs match the request form's query parameters.
// The browser submits directly to GitHub; nothing is sent or stored here.
const interest = document.querySelector("#interest");
document.querySelectorAll("[data-interest-link]").forEach((link) => {
  link.addEventListener("click", () => {
    if (interest) interest.value = link.dataset.interestLink;
  });
});
