// MARQUEE TEXT
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

// A function to generate some randomness
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ANIMATION OF CIRCLES
// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

// grab all the .circles from the html
const circles = document.querySelectorAll(".circle");

// circles return us an array so we need to loop through it
// inside of the forEach we get access to each individual element
// along with its index number within the array
circles.forEach((circle, index) => {
  // in here we get access to each one as a 'circle'
  circle.animate(
    [
      // keyframes
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" },
    ],
    {
      // timing options
      // we use index to create a staggered animation delay
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity,
    }
  );
});

// ANIMATION OF SQUIGGLES

const squiggles = document.querySelectorAll(".squiggle");

squiggles.forEach((squiggle, index) => {
  // want a random number between 0 and 45
  const randomNumber = random(0, 45);
  console.log(randomNumber);
  // create a bit of randomness for animation delay

  squiggle.animate(
    [
      // keyframes
      { transform: "rotate(0deg)" },
      // join randomNumber into our rotate property
      { transform: `rotate(${randomNumber}deg)` },
      { transform: "rotate(0deg)" },
    ],
    {
      // timing options
      // we use index to create a staggered animation delay
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity,
    }
  );
});

// FADE IN SINGERS' NAMES AND SHAPES WHEN SECTION ENTERS VIEWPORT

// Adds a class of 'in-viewport', when a section enters the view
// and removes the class when the section exist the viewport
inView(".section")
  .on("enter", (section) => {
    section.classList.add("in-viewport");
  })
  .on("exit", (section) => {
    section.classList.remove("in-viewport");
  });

// set the class to add only once we have scrolled 20% into the viewport
inView.threshold(0.2);

// select all sections and loop through them
const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  // in seach section we want to grab singers' names and shapes
  const singers = section.querySelectorAll(".lineup li");
  const shapes = section.querySelectorAll(".shape");
  // for both of these want to add transition delay effects
  singers.forEach((singer, index) => {
    const delay = index * 100;
    singer.style.transitionDelay = delay + "ms";
  });

  // make sure shapes only fade in after singers' names
  shapes.forEach((shape, index) => {
    const delay = (singers.length + index) * 100;
    shape.style.transitionDelay = delay + "ms";
  });
});

// SMOOTH SCROLL EFFECT FOR ARROW LINKS
// addEventListener is the same as jquery's .on()
const scrollLinks = document.querySelectorAll(".js-scroll");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // prevents it defaulting to a sudden move to the section - same as jquery 'return false'
    event.preventDefault();
    // grab href attribute from our link
    const href = link.getAttribute("href");
    // scroll into view smoothly
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});
