// Add a class to the navbar to toggle its position
window.addEventListener("resize", function () {
  var navbar = document.querySelector(".navbar");
  if (window.innerWidth < 768) {
    navbar.classList.add("bottom-fixed");
  } else {
    navbar.classList.remove("bottom-fixed");
  }
});

// Initial check on page load
window.addEventListener("load", function () {
  if (window.innerWidth < 768) {
    document.querySelector(".navbar").classList.add("bottom-fixed");
  } else {
    document.querySelector(".navbar").classList.remove("bottom-fixed");
  }
});

var numberOfImg = document.querySelectorAll(".post-detail").length;

for (var i = 0; i < numberOfImg; i++) {
  var textContent = document.querySelectorAll(".post-detail")[i].innerHTML;

  // Slice the content to display only a certain number of characters
  var slicedContent = textContent.slice(0, 200) + "..."; // Adjust the number of characters as needed

  // Update the content of the current element
  document.querySelectorAll(".post-detail")[i].innerHTML = slicedContent;
}

var lastImageNumber = document.querySelectorAll(".img-setting").length;
document.querySelectorAll(".img-setting")[lastImageNumber - 1].style.padding =
  "10px 0px 120px 0px";

document.querySelectorAll(".story-container img")[0].style.marginLeft = "20px";

// Define the media query
var mq = window.matchMedia("(max-width: 768px)");
// Function to handle changes in screen size
function handleScreenSizeChange(mq) {
  if (mq.matches) {
    // Apply specific settings when the screen size is 768px or wider
    document.querySelectorAll(".img-setting")[0].style.marginTop = 0;
  }
}
// Call the handler initially to apply settings based on the current screen size
handleScreenSizeChange(mq);
// Add a listener for changes in screen size
mq.addListener(handleScreenSizeChange);
