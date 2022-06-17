// write your code here

const BASE_URL = "http://localhost:3000/ramens/";

const ramenMenu = document.getElementById("ramen-menu");
// const ramenDetails = document.getElementById("ramen-detail");

function getRamens() {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((ramenData) => {
      ramenData.forEach((ramen) => {
        const ramenImages = document.createElement("img");
        ramenImages.src = ramen.image;
        ramenImages.alt = ramen.name;
        ramenImages.dataset.id = ramen.id;
        ramenMenu.append(ramenImages);

        //onClicking ramen name
        ramenImages.addEventListener("click", () => {
          loadRamens(ramen.id);
        });
      });
    })
    .catch((error) => {
      throw error;
    });
}

function loadRamens(id) {
  fetch(BASE_URL + id)
    .then((response) => response.json())
    .then((ramenData) => {
      let ramenImage = document.querySelector(".detail-image");
      ramenImage.src = ramenData.image;

      let ramenName = document.querySelector(".name");
      ramenName.innerHTML = ramenData.name;

      let ramenRestaurant = document.querySelector(".restaurant");
      ramenRestaurant.innerHTML = ramenData.restaurant;

      let ramenRating = document.getElementById("rating-display");
      ramenRating.innerHTML = ramenData.rating;

      let ramenComment = document.getElementById("comment-display");
      ramenComment.innerHTML = ramenData.comment;
    })
    .catch((error) => {
      throw error;
    });
}

function addRamen() {
  //on submitting new-ramen form
  const newRamenForm = document.getElementById("new-ramen");
  newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ramenImages = document.createElement("img");

    let ramenImage = document.querySelector("#new-image").value;
    ramenImages.src = ramenImage;

    let ramenName = document.querySelector("#new-name").value;
    ramenImages.alt = ramenName;

    // ramenImages.dataset.id = ramen.id;
    ramenMenu.append(ramenImages);

    //onClicking ramen images
    ramenImages.addEventListener("click", () => {
      let newRamenRating = document.querySelector("#new-rating").value;
      let ramenRating = document.getElementById("rating-display");
      ramenRating.innerHTML = newRamenRating;

      let newRamenRestaurant = document.querySelector("#new-restaurant").value;
      let ramenRestaurant = document.querySelector(".restaurant");
      ramenRestaurant.innerHTML = newRamenRestaurant;

      let newRamenName = document.querySelector("#new-name").value;
      let ramenName = document.querySelector(".name");
      ramenName.innerHTML = newRamenName;

      let newRamenImage = document.querySelector("#new-image").value;
      let ramenImage = document.querySelector(".detail-image");
      ramenImage.src = newRamenImage;

      let newRamenComment = document.querySelector("#new-comment").value;
      let ramenComment = document.getElementById("comment-display");
      ramenComment.innerHTML = newRamenComment;
    });

    // newRamenForm.reset(); //reset input field
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getRamens();
  loadRamens("2");
  addRamen();
});
