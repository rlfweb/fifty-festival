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
circles.forEach(function (circle, index) {
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
