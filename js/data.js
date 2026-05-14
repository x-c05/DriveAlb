// ===============================
// DriveAlb Data File
// Based on the original DoMakina frontend idea,
// rewritten for HTML, CSS, and Vanilla JavaScript.
// ===============================

// Albanian cities used for seller/listing locations.
// The original project includes an Albanian cities data file.
const ALBANIAN_CITIES = [
  "Bajram Curri",
  "Bajze",
  "Ballsh",
  "Berat",
  "Bilisht",
  "Bulqize",
  "Burrel",
  "Cerrik",
  "Corovode",
  "Delvine",
  "Divjake",
  "Durres",
  "Elbasan",
  "Erseke",
  "Fier",
  "Fierze",
  "Finiq",
  "Fushe-Arrez",
  "Fushe-Kruje",
  "Gjirokaster",
  "Gramsh",
  "Himare",
  "Kamez",
  "Kavaje",
  "Kelcyre",
  "Klos",
  "Konispol",
  "Koplik",
  "Korce",
  "Kraste",
  "Krrabe",
  "Kruje",
  "Krume",
  "Ksamil",
  "Kucove",
  "Kukes",
  "Kurbnesh",
  "Lac",
  "Leskovik",
  "Lezhe",
  "Libohove",
  "Librazhd",
  "Lushnje",
  "Maliq",
  "Mamurras",
  "Manez",
  "Memaliaj",
  "Milot",
  "Orikum",
  "Patos",
  "Peqin",
  "Permet",
  "Peshkopi",
  "Pogradec",
  "Polican",
  "Prrenjas",
  "Puke",
  "Reps",
  "Roskovec",
  "Rreshen",
  "Rrogozhine",
  "Rubik",
  "Sarande",
  "Selenice",
  "Shengjin",
  "Shijak",
  "Shkoder",
  "Sukth",
  "Tepelene",
  "Theth",
  "Tirana",
  "Ulez",
  "Ura Vajgurore",
  "Vau i Dejes",
  "Vithkuq",
  "Vlore",
  "Vore"
].sort();

// Vehicle brands for filters and listing forms.
const CAR_BRANDS = [
  "Audi",
  "BMW",
  "Mercedes-Benz",
  "Volkswagen",
  "Toyota",
  "Range Rover",
  "Ford",
  "Opel",
  "Hyundai",
  "Kia",
  "Nissan",
  "Peugeot",
  "Renault",
  "Fiat",
  "Honda"
];

// Main categories.
const VEHICLE_TYPES = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Coupe",
  "Convertible",
  "Pickup",
  "Van"
];

// Fuel types.
const FUEL_TYPES = [
  "Petrol",
  "Diesel",
  "Hybrid",
  "Electric"
];

// Transmission types.
const TRANSMISSION_TYPES = [
  "Manual",
  "Automatic"
];

// Listing status/types.
const LISTING_TYPES = [
  "Sale",
  "Rent"
];

// Listing approval states similar to the staff validation flow.
const LISTING_APPROVAL_STATUS = [
  "Draft",
  "Pending Review",
  "Approved",
  "Rejected",
  "Published",
  "Archived"
];

// Sample sellers.
const sellers = [
  {
    id: 1,
    name: "Auto Tirana",
    type: "Business Seller",
    city: "Tirana",
    phone: "+355 69 111 2222",
    email: "autotirana@drivealb.com",
    verified: true
  },
  {
    id: 2,
    name: "Premium Rentals Albania",
    type: "Rental Company",
    city: "Durres",
    phone: "+355 68 333 4444",
    email: "rentals@drivealb.com",
    verified: true
  },
  {
    id: 3,
    name: "Private Seller",
    type: "Individual Seller",
    city: "Vlore",
    phone: "+355 67 555 6666",
    email: "seller@drivealb.com",
    verified: false
  }
];

// Main vehicle data.
const cars = [
  {
    id: 1,
    brand: "BMW",
    model: "X5",
    year: 2020,
    price: 42000,
    listingType: "Sale",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: 85000,
    engine: "3.0",
    color: "Black",
    city: "Tirana",
    sellerId: 1,
    sellerName: "Auto Tirana",
    approvalStatus: "Published",
    promoted: true,
    featured: true,
    image: "assets/images/bmw-x5.jpg",
    description:
      "BMW X5 in excellent condition, automatic transmission, full service history, comfortable interior, and strong performance."
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2019,
    price: 120,
    listingType: "Rent",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: 70000,
    engine: "2.0",
    color: "White",
    city: "Durres",
    sellerId: 2,
    sellerName: "Premium Rentals Albania",
    approvalStatus: "Published",
    promoted: true,
    featured: true,
    image: "assets/images/mercedes-c-class.jpg",
    description:
      "Mercedes-Benz C-Class available for rent. Comfortable, clean, and suitable for business trips or travel."
  },
  {
    id: 3,
    brand: "Audi",
    model: "A4",
    year: 2018,
    price: 23500,
    listingType: "Sale",
    type: "Sedan",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: 110000,
    engine: "2.0",
    color: "Grey",
    city: "Vlore",
    sellerId: 3,
    sellerName: "Private Seller",
    approvalStatus: "Published",
    promoted: false,
    featured: true,
    image: "assets/images/audi-a4.jpg",
    description:
      "Audi A4 with diesel engine, automatic transmission, clean documents, and well-maintained body condition."
  },
  {
    id: 4,
    brand: "Volkswagen",
    model: "Golf 7",
    year: 2017,
    price: 14500,
    listingType: "Sale",
    type: "Hatchback",
    fuel: "Diesel",
    transmission: "Manual",
    mileage: 130000,
    engine: "1.6",
    color: "Blue",
    city: "Shkoder",
    sellerId: 1,
    sellerName: "Auto Tirana",
    approvalStatus: "Published",
    promoted: false,
    featured: false,
    image: "assets/images/vw-golf-7.jpg",
    description:
      "Volkswagen Golf 7, economical diesel engine, manual transmission, suitable for daily city driving."
  },
  {
    id: 5,
    brand: "Range Rover",
    model: "Evoque",
    year: 2021,
    price: 180,
    listingType: "Rent",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: 55000,
    engine: "2.0",
    color: "Red",
    city: "Tirana",
    sellerId: 2,
    sellerName: "Premium Rentals Albania",
    approvalStatus: "Published",
    promoted: true,
    featured: true,
    image: "assets/images/range-rover-evoque.jpg",
    description:
      "Range Rover Evoque available for rent. Luxury SUV with premium comfort and modern features."
  },
  {
    id: 6,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 26000,
    listingType: "Sale",
    type: "Sedan",
    fuel: "Hybrid",
    transmission: "Automatic",
    mileage: 35000,
    engine: "1.8",
    color: "Silver",
    city: "Elbasan",
    sellerId: 1,
    sellerName: "Auto Tirana",
    approvalStatus: "Pending Review",
    promoted: false,
    featured: false,
    image: "assets/images/toyota-corolla.jpg",
    description:
      "Toyota Corolla Hybrid with low fuel consumption, automatic transmission, and modern safety features."
  }
];

// Simple platform statistics for homepage/admin dashboard.
const platformStats = {
  totalListings: cars.length,
  publishedListings: cars.filter(car => car.approvalStatus === "Published").length,
  pendingListings: cars.filter(car => car.approvalStatus === "Pending Review").length,
  promotedListings: cars.filter(car => car.promoted).length,
  sellers: sellers.length,
  cities: ALBANIAN_CITIES.length
};

// Reusable card function for listing pages.
function carCard(car) {
  const priceLabel =
    car.listingType === "Rent"
      ? `€${car.price}/day`
      : `€${car.price.toLocaleString()}`;

  const statusLabel =
    car.listingType === "Rent" ? "For Rent" : "For Sale";

  return `
    <article class="car-card">
      <div class="car-image">
        <span>🚗</span>
      </div>

      <div class="car-content">
        <div class="card-top">
          <span class="badge">${statusLabel}</span>
          ${car.promoted ? `<span class="badge promoted">Promoted</span>` : ""}
        </div>

        <h3>${car.brand} ${car.model}</h3>

        <p>${car.description.substring(0, 95)}...</p>

        <div class="car-meta">
          <span>${car.year}</span>
          <span>${car.type}</span>
          <span>${car.fuel}</span>
          <span>${car.transmission}</span>
          <span>${car.city}</span>
        </div>

        <p class="price">${priceLabel}</p>

        <a class="btn full" href="details.html?id=${car.id}">
          View Details
        </a>
      </div>
    </article>
  `;
}