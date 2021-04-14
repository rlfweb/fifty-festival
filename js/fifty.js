// make a function called makeMarquee
function makeMarquee() {
  const title = "FIFTY Music Festival — November 10–12, Desert Valley";
  // make a new empty array with 50 spaces in it
  // then we fill it with the text from our title (50 times)
  // then join together with em-dash separating them
  const marqueeText = new Array(50).fill(title).join("   ----   ");
  // querySelector and querySelectorAll are the same as $ in jQuery
  const marquee = document.querySelector(".marquee span");
  // using innerHTML lets us change the content inside an element
  marquee.innerHTML = marqueeText;
}

// run the makeMarquee function
makeMarquee();
