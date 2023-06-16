let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let pageTitle = document.getElementById("main-title");
  pageTitle.innerText = "Welcome to my homepage!"

  // Part 2
  let pageBody = document.getElementsByTagName("body");
  pageBody[0].style.background = "hsl(305, 100%, 95%)";

  // Part 3
  let favoriteThingsEl = document.getElementById("favorite-things");
  //console.log(favoriteThingsList);
  favoriteThingsEl.removeChild(favoriteThingsEl.lastElementChild);
  console.log(favoriteThingsEl);

  // Part 4
  let specialTitleEl = document.querySelectorAll(".special-title");

  specialTitleEl.forEach(title => {
    title.style.fontSize = "2em";
  })

  // Part 5
  const pastRacesEl = document.getElementById("past-races")
  console.log(pastRacesEl);

  const raceCities = pastRacesEl.querySelectorAll("li");
  console.log(raceCities);

  raceCities.forEach(city =>{
    if (city.textContent.toLowerCase() == "chicago") {
      pastRacesEl.removeChild(city);
    } else {
      console.log("false!");
    }
})

  // Part 6
  let newLi = document.createElement("li");
  newLi.textContent = "Lima";
  pastRacesEl.appendChild(newLi);

  // Part 7
  let blogPostEl = document.createElement("div");
  blogPostEl.classList.add("blog-post", "purple");

  let blogTitleEl = document.createElement("h1");
  blogTitleEl.textContent = "Lima";

  let blogBody = document.createElement("p");
  blogBody.textContent = "I got here by plane!".toUpperCase();

  blogPostEl.append(blogTitleEl, blogBody);

  document.querySelector(".main").append(blogPostEl);

  // Part 8
  let quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", randomQuote(event));

  // Part 9
  const blogPosts = document.querySelectorAll(".blog-post");
  
  blogPosts.forEach(post => {

    post.addEventListener("mouseout", event => {
      post.classList.toggle("purple");
    });

    post.addEventListener("mouseenter", event => {
      post.classList.toggle("red");
    })
  })



});
