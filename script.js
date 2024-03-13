function updateScrollPercentage() {
  let percentageDisplay = document.getElementById("scroll-percentage");
  // loop is written so that element is created once on page load
  if (!percentageDisplay) {
    percentageDisplay = document.createElement("div");
    percentageDisplay.id = "scroll-percentage";
    document.body.appendChild(percentageDisplay);
  }

  const windowScroll = window.scrollY; // how much the page is scrolled
  const windowHeight = window.innerHeight; // viewport height
  const pageHeight = document.body.scrollHeight - windowHeight; // subtracting windowHeight to find scrollable height
  let scroll = pageHeight > 0 ? (windowScroll / pageHeight) * 100 : 100; // setting scroll percentage to 0 is scroll position is 0
  scroll = Math.min(scroll, 100);
  let scrollPercentage = `${scroll.toFixed(0)}%`; // converting it zero decimal place
  percentageDisplay.textContent = scrollPercentage;
}

window.addEventListener("scroll", updateScrollPercentage);

updateScrollPercentage();
