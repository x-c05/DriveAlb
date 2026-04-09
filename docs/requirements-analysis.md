# Requirements Analysis — DriveAlb


This document is for DriveAlb car sales platform with four user roles: **Client, Seller, Staff, and Admin**.

---

## 1. User Roles

| Role | Description |
|---|---|
| Client | Browses listings, filters cars, views details, sends inquiries, and submits rental requests. |
| Seller | Creates and manages listings, uploads images, submits listings for verification, and tracks performance. |
| Staff | Reviews and verifies listings, rejects invalid listings, and manages car brands. |
| Admin | Manages users, roles, account status, audit logs, and overall platform activity. |

---

## 2. User Scenarios List

| Scenario ID | User Role | User Scenario |
|---|---|---|
| US-01 | Client | Register an account |
| US-02 | Client | Verify email after registration |
| US-03 | Client | Log in to the platform |
| US-04 | Client | Recover forgotten password |
| US-05 | Client | Browse available car listings |
| US-06 | Client | Search and filter cars |
| US-07 | Client | View detailed car information |
| US-08 | Client | Send an inquiry about a car |
| US-09 | Client | Submit a rental request |
| US-10 | Client | Update personal profile |
| US-11 | Seller | Register as a seller |
| US-12 | Seller | Log in to seller dashboard |
| US-13 | Seller | Create a new car listing |
| US-14 | Seller | Upload images and car information |
| US-15 | Seller | Edit an existing listing |
| US-16 | Seller | Delete an existing listing |
| US-17 | Seller | Submit listing for verification |
| US-18 | Seller | View listing status |
| US-19 | Seller | Re-submit a rejected listing |
| US-20 | Seller | Manage promotions |
| US-21 | Seller | View listing performance and revenue |
| US-22 | Staff | Log in to staff dashboard |
| US-23 | Staff | Review pending listings |
| US-24 | Staff | Approve a listing |
| US-25 | Staff | Reject a listing with a reason |
| US-26 | Staff | Re-review a corrected listing |
| US-27 | Staff | Manage car brands |
| US-28 | Admin | Log in to admin dashboard |
| US-29 | Admin | View all users |
| US-30 | Admin | Manage user accounts |
| US-31 | Admin | Assign or change roles |
| US-32 | Admin | Enable or disable accounts |
| US-33 | Admin | View audit logs |
| US-34 | Admin | Monitor platform-wide activity |

---

## 3. User Scenarios Extended

| Scenario ID | Actor | Goal | Preconditions | Steps | Output |
|---|---|---|---|---|---|
| US-01 | Client | Create a personal account | User is not logged in | 1. Open registration page.<br>2. Enter name, email, password, and required details.<br>3. System validates inputs.<br>4. System creates account in unverified state.<br>5. System sends verification email.<br>6. User opens verification link.<br>7. System marks account as verified. | Verified account is created |
| US-06 | Client | Find a car that matches personal needs | Verified listings exist | 1. Open listings page.<br>2. System displays available cars.<br>3. User enters keywords or filters such as brand, price, type, or sale/rent status.<br>4. System updates results.<br>5. User selects a listing to view details. | Client sees filtered results |
| US-09 | Client | Request to rent a selected car | Client is logged in and car is rentable | 1. Log in.<br>2. Open car details page.<br>3. Click rent request option.<br>4. Enter rental details.<br>5. System validates request.<br>6. System stores request.<br>7. System links request to client and listing. | Rental request is recorded |
| US-13 / US-17 | Seller | Add a new listing and submit it for review | Seller is logged in | 1. Open create listing page.<br>2. Enter car details.<br>3. Upload images.<br>4. Select sale or rent mode.<br>5. Submit listing.<br>6. System stores listing with “Pending Verification” status. | Listing is saved and queued for review |
| US-19 | Seller | Correct a rejected listing and send it again | Listing was previously rejected | 1. Open dashboard.<br>2. View rejected listing.<br>3. Review rejection reason.<br>4. Edit information or images.<br>5. Re-submit listing.<br>6. System changes status to “Pending Verification”. | Listing returns to review queue |
| US-23 / US-24 / US-25 | Staff | Verify or reject submitted listings | Staff is logged in and pending listings exist | 1. Open pending listings page.<br>2. Select a listing.<br>3. Review data, images, and rules compliance.<br>4. Approve listing or reject it with reason.<br>5. System updates listing status. | Listing becomes approved or rejected |
| US-27 | Staff | Maintain the list of car brands | Staff is logged in | 1. Open brand management.<br>2. Add, edit, or remove a brand.<br>3. System validates action.<br>4. System updates brand data. | Brand catalog is updated |
| US-30 / US-31 / US-32 | Admin | Manage platform users and access | Admin is logged in | 1. Open user management.<br>2. View all users.<br>3. Select a user.<br>4. Update role or status.<br>5. Save changes.<br>6. System stores the action in audit logs. | User account is updated successfully |
| US-33 | Admin | Review important platform actions | Admin is logged in | 1. Open audit log page.<br>2. System displays recorded actions.<br>3. Filter or search records.<br>4. Review results. | Admin can track system activity |

---

## 4. Use Cases

### UC-01 — Register Account

| Field | Description |
|---|---|
| Use Case ID | UC-01 |
| Use Case Name | Register Account |
| Primary Actor | Client / Seller |
| Goal | Create a new platform account |
| Preconditions | User is not logged in |
| Postconditions | Account is created and marked unverified until email confirmation |
| Main Flow | 1. User opens registration page.<br>2. User enters required information.<br>3. User submits the form.<br>4. System validates the data.<br>5. System stores the account.<br>6. System sends email verification link. |
| Alternative Flows | A1. Email already exists → system shows error.<br>A2. Password is too weak → system shows validation error.<br>A3. Required fields are missing → submission is blocked. |

### UC-02 — Log In

| Field | Description |
|---|---|
| Use Case ID | UC-02 |
| Use Case Name | Log In |
| Primary Actor | Client / Seller / Staff / Admin |
| Goal | Access the system according to role |
| Preconditions | User has a registered account |
| Postconditions | User is authenticated and redirected to homepage or dashboard |
| Main Flow | 1. User opens login page.<br>2. User enters email and password.<br>3. User submits credentials.<br>4. System validates them.<br>5. System creates authenticated session/token.<br>6. System redirects based on role. |
| Alternative Flows | A1. Incorrect password → login error.<br>A2. Account disabled → access denied.<br>A3. Email not verified → verification required. |

### UC-03 — Browse and Filter Cars

| Field | Description |
|---|---|
| Use Case ID | UC-03 |
| Use Case Name | Browse and Filter Cars |
| Primary Actor | Client |
| Goal | Find relevant cars from available listings |
| Preconditions | Approved listings exist |
| Postconditions | Matching results are displayed |
| Main Flow | 1. Client opens listings page.<br>2. System shows approved listings.<br>3. Client enters search or filter criteria.<br>4. System applies criteria.<br>5. System shows matching results.<br>6. Client selects a car to view details. |
| Alternative Flows | A1. No result matches the criteria → system shows empty-state message. |

### UC-04 — View Car Details

| Field | Description |
|---|---|
| Use Case ID | UC-04 |
| Use Case Name | View Car Details |
| Primary Actor | Client |
| Goal | Read complete information about a car |
| Preconditions | Listing is approved and visible |
| Postconditions | Client sees listing details |
| Main Flow | 1. Client selects a car.<br>2. System retrieves listing information.<br>3. System displays title, images, brand, model, price, description, and availability. |
| Alternative Flows | A1. Listing is unavailable or removed → system shows not-found message. |

### UC-05 — Submit Rental Request

| Field | Description |
|---|---|
| Use Case ID | UC-05 |
| Use Case Name | Submit Rental Request |
| Primary Actor | Client |
| Goal | Send a request to rent a car |
| Preconditions | Client is logged in and listing is rentable |
| Postconditions | Rental request is stored |
| Main Flow | 1. Client opens car details page.<br>2. Client clicks rental request button.<br>3. Client enters required request details.<br>4. Client submits request.<br>5. System validates information.<br>6. System stores request.<br>7. System notifies seller or records request for review. |
| Alternative Flows | A1. User is not logged in → redirect to login.<br>A2. Listing is not rentable → request blocked.<br>A3. Required fields missing → validation errors shown. |

### UC-06 — Create Listing

| Field | Description |
|---|---|
| Use Case ID | UC-06 |
| Use Case Name | Create Listing |
| Primary Actor | Seller |
| Goal | Add a new car listing |
| Preconditions | Seller is logged in |
| Postconditions | Listing is created with pending verification status |
| Main Flow | 1. Seller opens create listing page.<br>2. Seller enters car details.<br>3. Seller uploads images.<br>4. Seller selects sale or rent mode.<br>5. Seller submits listing.<br>6. System validates input.<br>7. System stores listing as pending verification. |
| Alternative Flows | A1. Missing fields → submission rejected.<br>A2. Unsupported image format → upload error shown. |

### UC-07 — Verify Listing

| Field | Description |
|---|---|
| Use Case ID | UC-07 |
| Use Case Name | Verify Listing |
| Primary Actor | Staff |
| Goal | Approve or reject a seller listing |
| Preconditions | Staff is logged in and pending listings exist |
| Postconditions | Listing is approved or rejected |
| Main Flow | 1. Staff opens pending listings.<br>2. Staff selects a listing.<br>3. System displays submitted details.<br>4. Staff reviews content.<br>5. Staff approves listing or rejects it with reason.<br>6. System updates listing status.<br>7. System records the action. |
| Alternative Flows | A1. Listing data is incomplete → reject listing.<br>A2. Listing violates platform rules → reject with explanation. |

### UC-08 — Manage Users

| Field | Description |
|---|---|
| Use Case ID | UC-08 |
| Use Case Name | Manage Users |
| Primary Actor | Admin |
| Goal | Control user accounts and roles |
| Preconditions | Admin is logged in |
| Postconditions | Selected user information, role, or status is updated |
| Main Flow | 1. Admin opens user management.<br>2. System displays all users.<br>3. Admin selects a user.<br>4. Admin changes role or status.<br>5. Admin saves changes.<br>6. System updates the user record.<br>7. System stores action in audit log. |
| Alternative Flows | A1. Invalid role assignment → action blocked.<br>A2. Selected user no longer exists → system shows error. |

---

## 5. Functional Requirements

| Requirement ID | Functional Requirement |
|---|---|
| FR-01 | The system shall allow users to register accounts by entering required personal information. |
| FR-02 | The system shall send an email verification link after successful registration. |
| FR-03 | The system shall allow only verified users to log in. |
| FR-04 | The system shall authenticate users with email and password credentials. |
| FR-05 | The system shall support role-based access for Client, Seller, Staff, and Admin users. |
| FR-06 | The system shall allow users to recover forgotten passwords through email-based reset functionality. |
| FR-07 | The system shall display approved car listings to clients. |
| FR-08 | The system shall allow clients to search listings using keywords. |
| FR-09 | The system shall allow clients to filter listings by brand, price, type, and availability. |
| FR-10 | The system shall display detailed information for a selected car listing. |
| FR-11 | The system shall allow clients to submit inquiries for a selected car listing. |
| FR-12 | The system shall allow clients to submit rental requests for rentable vehicles. |
| FR-13 | The system shall allow sellers to create new car listings. |
| FR-14 | The system shall allow sellers to upload one or more images for each listing. |
| FR-15 | The system shall allow sellers to edit their own listings. |
| FR-16 | The system shall allow sellers to delete their own listings. |
| FR-17 | The system shall assign a “Pending Verification” status to newly submitted or re-submitted listings. |
| FR-18 | The system shall allow staff users to review pending listings. |
| FR-19 | The system shall allow staff users to approve listings. |
| FR-20 | The system shall allow staff users to reject listings and provide a rejection reason. |
| FR-21 | The system shall allow sellers to view the verification status of their listings. |
| FR-22 | The system shall allow sellers to re-submit corrected rejected listings. |
| FR-23 | The system shall allow staff users to manage car brands. |
| FR-24 | The system shall allow admins to view all user accounts. |
| FR-25 | The system shall allow admins to update user roles. |
| FR-26 | The system shall allow admins to enable or disable user accounts. |
| FR-27 | The system shall record critical platform actions in an audit log. |
| FR-28 | The system shall allow admins to view audit logs. |
| FR-29 | The system shall allow sellers to view listing performance or revenue-related information. |
| FR-30 | The system shall allow sellers to manage promotional options for listings. |

---

## 6. Non-Functional Requirements

| Requirement ID | Category | Non-Functional Requirement |
|---|---|---|
| NFR-01 | Product / User Interface | The user interface shall be accessible through modern web browsers on desktop and mobile devices. |
| NFR-02 | Product / User Interface | The system shall present a consistent interface design across all pages. |
| NFR-03 | Product / Usability | The system shall display validation errors clearly when a user submits invalid input. |
| NFR-04 | Product / Performance | The system shall return search and filter results within 3 seconds under normal operating conditions. |
| NFR-05 | Product / Security | The system shall protect passwords using secure hashing algorithms. |
| NFR-06 | Product / Security | The system shall restrict protected resources to authenticated and authorized users only. |
| NFR-07 | Product / Data Handling | The system shall store uploaded images in a secure and organized manner. |
| NFR-08 | Product / Accountability | The system shall preserve audit records for administrative review. |
| NFR-09 | Organizational / Architecture | The system shall be implemented using a separated frontend and backend architecture. |
| NFR-10 | Organizational / Architecture | The backend shall expose structured API endpoints for communication with the frontend. |
| NFR-11 | Organizational / Process | The project source code shall be version-controlled using Git and hosted in a GitHub repository. |
| NFR-12 | Organizational / Maintainability | The system shall support maintainable code organization using modules such as routes, controllers, services, and models. |
| NFR-13 | Organizational / Maintenance | The system shall support basic monitoring and maintenance by logging server-side errors. |
| NFR-14 | Organizational / Deployment | The system shall be deployable in a standard web hosting or server environment. |
| NFR-15 | Availability | The system shall be available to users except during planned maintenance. |
| NFR-16 | Reliability / Security | The system shall prevent unauthorized changes to listings, users, and audit records. |
| NFR-17 | Reliability | The system shall validate all required form inputs before data is stored. |
| NFR-18 | Reliability / Error Handling | The system shall handle invalid requests gracefully without exposing internal implementation details. |

---

## 7. Optional Domain Requirements

| Requirement ID | Domain Requirement |
|---|---|
| DR-01 | The system shall distinguish between cars listed for sale and cars listed for rent. |
| DR-02 | The system shall allow rental requests only for listings marked as rentable. |
| DR-03 | The system shall make a listing visible to clients only after staff approval. |
| DR-04 | The system shall associate each listing with exactly one seller account. |
| DR-05 | The system shall maintain car-brand data as a controlled catalog to ensure consistent listing classification. |

---

## 8. Traceability Summary

| Source | Related Requirements |
|---|---|
| Registration / Login / Password Recovery Use Cases | FR-01 to FR-06 |
| Browse / Filter / View / Inquiry / Rental Use Cases | FR-07 to FR-12 |
| Seller Listing Management Use Cases | FR-13 to FR-17, FR-21, FR-22, FR-29, FR-30 |
| Staff Verification / Brand Management Use Cases | FR-18 to FR-23 |
| Admin User Management / Audit Log Use Cases | FR-24 to FR-28 |

