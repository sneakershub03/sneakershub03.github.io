   //Show the hidden html elements
   cardImgs.forEach((cardImg) => {
    cardImg.style.visibility = "visible";
  });
  cardTitleSpans.forEach((cardTitleSpan) => {
    cardTitleSpan.style.visibility = "visible";
  });
  cardDescSpans.forEach((cardDescSpan) => {
    cardDescSpan.style.visibility = "visible";
  });
  mediaIcons.forEach((mediaIcon) => {
    mediaIcon.style.visibility = "visible";
  });


//Execute renderCard on setTimeout
setTimeout(() => {
  renderCard();
}, 4000);

//Execute renderCard after the page loaded
//window.addEventListener("load", () => {
  //renderCard();
//});

  