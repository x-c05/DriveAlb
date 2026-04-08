# Use Cases – DriveAlb

## UC-01: Register Account
**Actor:** Buyer / Seller  
**Goal:** Create a new user account  
**Preconditions:** User is not logged in  
**Postconditions:** A new account is created successfully  

**Main Flow:**
1. User opens the registration page.
2. User enters required personal information.
3. User submits the registration form.
4. System validates the entered information.
5. System creates a new account.
6. System confirms successful registration.

**Alternative Flows:**
- If required fields are missing, the system shows an error message.
- If the email is already in use, the system rejects the registration.

---

## UC-02: Login
**Actor:** Buyer / Seller / Admin  
**Goal:** Access the system with valid credentials  
**Preconditions:** User already has an account  
**Postconditions:** User is logged in and redirected to the appropriate page  

**Main Flow:**
1. User opens the login page.
2. User enters email and password.
3. User submits login form.
4. System validates the credentials.
5. System grants access and starts the session.

**Alternative Flows:**
- Invalid email or password results in an error message.
- If credentials are missing, the system asks the user to complete the form.

---

## UC-03: Browse Listings
**Actor:** Buyer  
**Goal:** View all available cars  
**Preconditions:** Listings exist in the system  
**Postconditions:** Buyer sees available car listings  

**Main Flow:**
1. Buyer opens the listings page.
2. System retrieves all active car listings.
3. System displays the list of cars.

---

## UC-04: Search and Filter Listings
**Actor:** Buyer  
**Goal:** Find cars matching specific criteria  
**Preconditions:** Listings exist in the system  
**Postconditions:** Buyer sees filtered results  

**Main Flow:**
1. Buyer enters search keywords or selects filters.
2. System processes the criteria.
3. System displays matching listings.

**Alternative Flows:**
- If no listings match, the system displays a no-results message.

---

## UC-05: View Car Details
**Actor:** Buyer  
**Goal:** See detailed information about a specific car  
**Preconditions:** Selected listing exists  
**Postconditions:** Detailed car information is shown  

**Main Flow:**
1. Buyer selects a car listing.
2. System opens the car details page.
3. System displays description, specifications, price, and images.

---

## UC-06: Contact Seller
**Actor:** Buyer  
**Goal:** Get in touch with the seller  
**Preconditions:** Buyer is viewing a listing  
**Postconditions:** Seller contact request or message is sent/shown  

**Main Flow:**
1. Buyer opens a car details page.
2. Buyer chooses the contact option.
3. System shows seller contact details or message form.
4. Buyer sends message or uses contact information.

---

## UC-07: Create Listing
**Actor:** Seller  
**Goal:** Publish a new car listing  
**Preconditions:** Seller is logged in  
**Postconditions:** New listing is stored and published  

**Main Flow:**
1. Seller opens the create listing page.
2. Seller enters car information.
3. Seller uploads images.
4. Seller submits the form.
5. System validates data.
6. System saves the listing.
7. System confirms successful creation.

**Alternative Flows:**
- Missing required fields cause validation errors.
- Invalid image format is rejected.

---

## UC-08: Edit Listing
**Actor:** Seller  
**Goal:** Update an existing listing  
**Preconditions:** Seller is logged in and owns the listing  
**Postconditions:** Listing information is updated  

**Main Flow:**
1. Seller opens their dashboard.
2. Seller selects a listing to edit.
3. Seller changes listing data.
4. Seller submits changes.
5. System updates the listing.

---

## UC-09: Delete Listing
**Actor:** Seller  
**Goal:** Remove a listing from the platform  
**Preconditions:** Seller is logged in and owns the listing  
**Postconditions:** Listing is removed or hidden  

**Main Flow:**
1. Seller opens their dashboard.
2. Seller selects a listing to delete.
3. System asks for confirmation.
4. Seller confirms deletion.
5. System removes the listing.

---

## UC-10: Manage Users
**Actor:** Admin  
**Goal:** Review and control user accounts  
**Preconditions:** Admin is logged in  
**Postconditions:** Selected user account is updated or restricted  

**Main Flow:**
1. Admin opens the admin dashboard.
2. Admin views the user list.
3. Admin selects a user.
4. Admin performs an action such as view, suspend, or manage.

---

## UC-11: Manage Listings
**Actor:** Admin  
**Goal:** Review and moderate listings  
**Preconditions:** Admin is logged in  
**Postconditions:** Selected listing is kept, edited, or removed  

**Main Flow:**
1. Admin opens listings management.
2. Admin reviews platform listings.
3. Admin selects a suspicious or inappropriate listing.
4. Admin removes or manages the listing.

---

## UC-12: Role-Based Access Control
**Actor:** System  
**Goal:** Restrict features based on role  
**Preconditions:** User is authenticated  
**Postconditions:** User accesses only authorized functions  

**Main Flow:**
1. User logs in.
2. System identifies the user role.
3. System grants access only to permitted pages and actions.