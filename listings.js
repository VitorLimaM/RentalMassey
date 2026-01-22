const listings = document.getElementById("listings");

const residences = JSON.parse(localStorage.getItem("residences")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if (residences.length === 0) {
  listings.innerHTML = "<p>No residences available.</p>";
}

residences.forEach(residence => {
  renderCard(residence);
});

function renderCard(residence) {
  const card = document.createElement("div");
  card.className = "card";

  const isFavorite = favorites.some(fav => fav.id === residence.id);

  card.innerHTML = `
    <img src="${residence.image || residence.images?.[0] || 'https://picsum.photos/400/250'}">
    <div class="card-info">
      <h3>${residence.title}</h3>
      <p>${residence.location || residence.description}</p>
      <span>$${residence.price} / night</span>
      <button class="fav-btn">${isFavorite ? "❤️" : "♡"}</button>
    </div>
  `;

  const favBtn = card.querySelector(".fav-btn");

  favBtn.addEventListener("click", () => {
    toggleFavorite(residence, favBtn);
  });

  listings.appendChild(card);
}

function toggleFavorite(residence, button) {
  const exists = favorites.some(item => item.id === residence.id);

  if (exists) {
    favorites = favorites.filter(item => item.id !== residence.id);
    button.textContent = "♡";
  } else {
    favorites.push(residence);
    button.textContent = "❤️";
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}
