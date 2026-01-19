const listings = document.getElementById("listings");
const residences = JSON.parse(localStorage.getItem("residences")) || [];

residences.forEach(res => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${res.images[0] || 'https://picsum.photos/400/250'}">
    <div class="card-info">
      <h3>${res.title}</h3>
      <p>${res.description}</p>
      <span>$${res.price} / night</span>
    </div>
  `;

  listings.appendChild(card);
});
