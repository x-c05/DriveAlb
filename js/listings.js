const carsContainer = document.getElementById("carsContainer");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const statusFilter = document.getElementById("statusFilter");
const typeFilter = document.getElementById("typeFilter");

const brands = [...new Set(cars.map(car => car.brand))];

const resultsCount = document.getElementById("resultsCount");

brands.forEach(brand => {
  const option = document.createElement("option");
  option.value = brand;
  option.textContent = brand;
  brandFilter.appendChild(option);
});

const params = new URLSearchParams(window.location.search);

searchInput.value = params.get("q") || "";
statusFilter.value = params.get("status") || "";

function renderCars() {
  const search = searchInput.value.toLowerCase();
  const brand = brandFilter.value;
  const status = statusFilter.value;
  const type = typeFilter.value;

  const filtered = cars.filter(car => {
    const matchesSearch =
      car.brand.toLowerCase().includes(search) ||
      car.model.toLowerCase().includes(search) ||
      car.city.toLowerCase().includes(search);

    const matchesBrand = !brand || car.brand === brand;

    if (resultsCount) {
    resultsCount.textContent = `${filtered.length} vehicle(s) found`;
    }


    // In DriveAlb data.js, cars use "listingType", for example:
    // listingType: "Sale" or listingType: "Rent"
    const matchesStatus = !status || car.listingType === status;

    const matchesType = !type || car.type === type;

    // Only show listings approved by staff/admin.
    const isPublished = car.approvalStatus === "Published";

    return (
      matchesSearch &&
      matchesBrand &&
      matchesStatus &&
      matchesType &&
      isPublished
    );
  });

  carsContainer.innerHTML = filtered.length
    ? filtered.map(carCard).join("")
    : `<p class="empty-message">No vehicles matched your filters.</p>`;
}

function clearFilters() {
  searchInput.value = "";
  brandFilter.value = "";
  statusFilter.value = "";
  typeFilter.value = "";

  renderCars();
}

[searchInput, brandFilter, statusFilter, typeFilter].forEach(input => {
  input.addEventListener("input", renderCars);
  input.addEventListener("change", renderCars);
});

renderCars();