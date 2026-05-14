const detailsContainer = document.getElementById("carDetails");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const car = cars.find(item => item.id === id);

if (!car) {
  detailsContainer.innerHTML = `
    <section class="page-header">
      <div>
        <h1>Vehicle not found</h1>
        <p>The vehicle you are looking for does not exist or has been removed.</p>
      </div>

      <a class="btn" href="listings.html">Back to Listings</a>
    </section>
  `;
} else {
  const priceLabel =
    car.listingType === "Rent"
      ? `€${car.price}/day`
      : `€${car.price.toLocaleString()}`;

  const listingLabel =
    car.listingType === "Rent" ? "For Rent" : "For Sale";

  const mainAction =
    car.listingType === "Rent" ? "Rent This Car" : "Contact Seller";

  detailsContainer.innerHTML = `
    <section class="details-layout">
      <div class="details-image">
        <span>🚗</span>
      </div>

      <div class="details-content">
        <div class="card-top">
          <span class="badge">${listingLabel}</span>
          ${car.promoted ? `<span class="badge promoted">Promoted</span>` : ""}
        </div>

        <h1>${car.brand} ${car.model}</h1>

        <p class="details-description">
          ${car.description}
        </p>

        <p class="price">${priceLabel}</p>

        <div class="details-info-grid">
          <div>
            <strong>Brand</strong>
            <span>${car.brand}</span>
          </div>

          <div>
            <strong>Model</strong>
            <span>${car.model}</span>
          </div>

          <div>
            <strong>Year</strong>
            <span>${car.year}</span>
          </div>

          <div>
            <strong>Type</strong>
            <span>${car.type}</span>
          </div>

          <div>
            <strong>Fuel</strong>
            <span>${car.fuel}</span>
          </div>

          <div>
            <strong>Transmission</strong>
            <span>${car.transmission}</span>
          </div>

          <div>
            <strong>Mileage</strong>
            <span>${car.mileage.toLocaleString()} km</span>
          </div>

          <div>
            <strong>Engine</strong>
            <span>${car.engine}</span>
          </div>

          <div>
            <strong>Color</strong>
            <span>${car.color}</span>
          </div>

          <div>
            <strong>City</strong>
            <span>${car.city}</span>
          </div>

          <div>
            <strong>Status</strong>
            <span>${car.approvalStatus}</span>
          </div>

          <div>
            <strong>Listing Type</strong>
            <span>${listingLabel}</span>
          </div>
        </div>

        <div class="seller-box">
          <h3>Seller Information</h3>
          <p><strong>Seller:</strong> ${car.sellerName}</p>
          <p><strong>Location:</strong> ${car.city}</p>
        </div>

        <div class="hero-buttons">
          <button class="btn" onclick="handleMainAction('${car.listingType}')">
            ${mainAction}
          </button>

          <button class="btn btn-outline" onclick="sendInquiry()">
            Send Inquiry
          </button>

          <a class="btn btn-outline" href="listings.html">
            Back to Listings
          </a>
        </div>
      </div>
    </section>
  `;
}

function handleMainAction(listingType) {
  if (listingType === "Rent") {
    alert("Rental request created successfully. A seller will review your request.");
  } else {
    alert("Seller contact request created successfully.");
  }
}

function sendInquiry() {
  alert("Your inquiry has been sent to the seller.");
}