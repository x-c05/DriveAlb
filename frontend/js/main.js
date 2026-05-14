// ===============================
// DriveAlb Main Homepage Logic
// Based on the original DoMakina marketplace idea,
// rewritten for HTML, CSS, and Vanilla JavaScript.
// ===============================

const featuredContainer = document.getElementById("featuredCars");
const totalListingsElement = document.getElementById("totalListings");
const sellerCountElement = document.getElementById("sellerCount");
const cityCountElement = document.getElementById("cityCount");

// ===============================
// Load Featured / Promoted Cars
// ===============================

function loadFeaturedCars() {
  if (!featuredContainer) return;

  const featuredCars = cars
    .filter(car => car.featured && car.approvalStatus === "Published")
    .slice(0, 3);

  featuredContainer.innerHTML = featuredCars.length
    ? featuredCars
        .map(car => {
          return carCard(car).replace(
            'href="details.html',
            'href="pages/details.html'
          );
        })
        .join("")
    : `<p class="empty-message">No featured vehicles available.</p>`;
}

// ===============================
// Quick Search from Homepage
// ===============================

function goToSearch() {
  const searchInput = document.getElementById("homeSearch");
  const statusInput = document.getElementById("homeStatus");

  const keyword = searchInput ? searchInput.value.trim() : "";
  const listingType = statusInput ? statusInput.value : "";

  const params = new URLSearchParams();

  if (keyword) {
    params.set("q", keyword);
  }

  if (listingType) {
    params.set("status", listingType);
  }

  window.location.href = `pages/listings.html?${params.toString()}`;
}

// ===============================
// Homepage Statistics
// ===============================

function loadHomepageStats() {
  if (totalListingsElement && typeof platformStats !== "undefined") {
    totalListingsElement.textContent = `${platformStats.publishedListings}+`;
  }

  if (sellerCountElement && typeof platformStats !== "undefined") {
    sellerCountElement.textContent = `${platformStats.sellers}+`;
  }

  if (cityCountElement && typeof platformStats !== "undefined") {
    cityCountElement.textContent = `${platformStats.cities}+`;
  }
}

// ===============================
// Navbar Active Link
// ===============================

function setActiveNavLink() {
  const links = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active-link");
    }
  });
}

// ===============================
// Initialize Homepage
// ===============================

loadFeaturedCars();
loadHomepageStats();
setActiveNavLink();