var open = document.getElementById("open-nav");
var nav1 = document.querySelector(".nav1");
var nav = document.querySelector(".nav-cont");
var flag = 0;
var h1=document.querySelector("h1")
var nav1_img=document.querySelector(".nav1-img")
open.addEventListener("click", function () {
    if (flag === 0) {
        nav1.style.top = "0";
        nav.style.display = "none";
        nav1.style.position = "fixed";
        nav1.style.zIndex="99"
        open.style.zIndex="99"
        open.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        open.style.position="fixed"
        open.style.top="1%"
        open.style.right="1%"
        flag = 1;
    } else {
        nav.style.display = "flex";
        open.style.position="absolute"
  
        nav1.style.top = "-100%";
        open.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        flag = 0;
    }
});

var nav1Cont = document.querySelector(".nav1-cont");
var nav1Img = document.querySelector(".nav1-img");
var image1 = [
    "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    // Add more image URLs here
];

var anchorTags = nav1Cont.querySelectorAll("a");

// Add event listeners to anchor tags
anchorTags.forEach(function (anchor, index) {
    anchor.addEventListener("mouseover", function () {
        // Clear existing image
        nav1Img.innerHTML = "";

        // Display the corresponding image
        var img = document.createElement("img");
        img.src = image1[index];
        img.alt = "Image";
        nav1Img.appendChild(img);
    });
});
nav1Img.innerHTML = "";

var images1 = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1676654936496-67e5bc9e7235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
   "https://plus.unsplash.com/premium_photo-1677094766116-aa0f8742d36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
   "https://plus.unsplash.com/premium_photo-1677170014571-b8c2dceed49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1612662227564-982c079252bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1603178455924-ef33372953bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
   "https://plus.unsplash.com/premium_photo-1678116083971-d578dcb0e590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmbG93ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://plus.unsplash.com/premium_photo-1672130977483-7cd2bb76b477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxmbG93ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxmbG93ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
   // Add more image URLs here
];

var imagesDiv = document.querySelector(".images");

// Loop through the array of image URLs and create img elements
images1.forEach(function(imageUrl) {
    var img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Image";
    img.width = 200; // Set the width of the image
    img.height = 350; // Set the height of the image
    imagesDiv.appendChild(img);
});

var tl = gsap.timeline();

// Animate the image to move upwards
tl.from(".img", {
    y: 150,         // Move the image up by 100 pixels
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".img",
        scroller: "body",
        start: "top 30%",
        scrub: true    // Add scrub property for smoother animation
    }
});
var imagesContainer = document.querySelector(".images-wrapper");
var images = document.querySelectorAll(".images img");
var isScrolling = 0;

imagesContainer.addEventListener("scroll", function () {
    if (!isScrolling) {
        isScrolling = true;

        images.forEach(img => {
            img.style.transition = "transform 0.3s ease";
            img.style.transform = "skewY(6deg)";
            img.style.transform = "skewX(-6deg)";

        });

        clearTimeout(timeout);
        var timeout = setTimeout(function () {
            images.forEach(img => {
                img.style.transition = "transform 0.5s ease";
                img.style.transform = "none";
            });
            isScrolling = 0;
        }, 100);
    }
});



gsap.registerPlugin(ScrollTrigger);

gsap.to(".div2-img", {
    y: -30,        
   opacity:1,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".div2-img",
        start: "top 80%",
        scroller: "body",
        scrub: true,   
    
    },
});
