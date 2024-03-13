function updateScrollPercentage() {
  let percentageDisplay = document.getElementById("scroll-percentage");
  if (!percentageDisplay) {
    percentageDisplay = document.createElement("div");
    percentageDisplay.id = "scroll-percentage";
    percentageDisplay.className = "scroll-percentage"; // Use the class
    document.body.appendChild(percentageDisplay);
  }

  const windowScroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const pageHeight = document.body.scrollHeight - windowHeight;
  const scroll = pageHeight > 0 ? (windowScroll / pageHeight) * 100 : 0;
  const scrollPercentage = `${scroll.toFixed(0)}%`;
  // Now update the text content of the existing or newly created element
  percentageDisplay.textContent = scrollPercentage;
}

// Add scroll event listener to update the scroll percentage
window.addEventListener("scroll", updateScrollPercentage);

// Call once on initial load
updateScrollPercentage();
