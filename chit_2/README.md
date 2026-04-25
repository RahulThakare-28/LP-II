# Problem Statement (chit-2)
Write a JavaScript Program to get the user registration data and push to local storage with AJAX POST method and data list in new page. Use HTML, CSS, and Bootstrap for web page development.
                        **AND**
Install Google App Engine. Create Hello World app and other 
simple web applications using the Google Cloud platform

# 📌 Experiment Title
User Registration System using JavaScript, AJAX (POST), and LocalStorage with Bootstrap UI

---

# 🎯 Aim
To design and implement a user registration web application that:
- Collects user data through a form
- Sends data using AJAX POST method
- Stores data in browser localStorage
- Displays stored data on a new page

---

# 🧰 Technologies Used
- HTML5 → Structure of web page
- CSS3 → Basic styling
- Bootstrap 5 (CDN) → Responsive UI design
- JavaScript → Logic and data handling
- AJAX (Fetch API) → Sending POST request
- LocalStorage → Client-side data storage

---

# 🌐 Bootstrap CDN Used
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

---

# 🏗️ System Architecture (Simple Flow)

User Input Form  
      ↓  
JavaScript collects data  
      ↓  
AJAX POST (fetch API)  
      ↓  
Store in localStorage  
      ↓  
Redirect to Display Page  
      ↓  
Fetch data from localStorage  
      ↓  
Display in Table  

---

# 📄 Page Description

## 🔹 1. Registration Page (index.html)

### ✔ Features:
- Input fields:
  - Name
  - Email
  - Password
- Submit button
- Bootstrap form design

### ✔ Working:
1. User fills form
2. On submit:
   - Prevent page reload
   - Collect data using JavaScript
3. Create user object
4. Send data using AJAX POST
5. Store data in localStorage
6. Redirect to display page

---

## 🔹 2. Display Page (display.html)

### ✔ Features:
- Table to show user data
- Bootstrap table styling

### ✔ Working:
1. Retrieve data from localStorage
2. Convert JSON to object
3. Loop through data
4. Insert rows dynamically into table

---

# ⚙️ Key Concepts Explained

## 🔸 1. What is LocalStorage?
- A browser storage mechanism
- Stores data in key-value format
- Data persists even after page reload

Example:
localStorage.setItem("users", JSON.stringify(data))

---

## 🔸 2. What is AJAX?
- Asynchronous JavaScript and XML
- Used to send/receive data without reloading page

---

## 🔸 3. Fetch API (AJAX POST)

Used to send data to server:

fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
})

---

## 🔸 4. JSON Conversion

- JSON.stringify() → Object to string
- JSON.parse() → String to object

---

# 📊 Data Handling Logic

Step 1: Get form input values  
Step 2: Store in object  
Step 3: Send via fetch (POST)  
Step 4: Save in localStorage  
Step 5: Retrieve data on new page  
Step 6: Display in table  

---

# 🎨 Bootstrap Components Used
- Form controls → input, button
- Grid system → layout
- Table → data display
- Utility classes → spacing, colors

---

# ✅ Features of the System
- Responsive design
- Client-side data storage
- Dynamic data display
- Simple and efficient UI
- No backend required

---

# ⚠️ Limitations
- Data stored only in browser
- Not secure for sensitive data (passwords)
- No database connectivity

---

# 📌 Output
- User registration form page
- Data stored in localStorage
- Display page showing list of users in table

---

# 🧪 Result
The program successfully:
- Collected user input
- Sent data using AJAX POST
- Stored data in localStorage
- Displayed data dynamically in table format

---

# 📚 Viva Questions

## ❓ What is localStorage?
LocalStorage is a browser storage that stores data permanently as key-value pairs.

---

## ❓ Difference between sessionStorage and localStorage?
- localStorage → permanent
- sessionStorage → cleared after tab close

---

## ❓ What is AJAX?
A technique to send/receive data asynchronously without reloading the page.

---

## ❓ What is Fetch API?
A modern JavaScript method to make HTTP requests (GET, POST, etc.)

---

## ❓ Why JSON is used?
To transfer data in structured format between client and server.

---

## ❓ How to delete data?
Data deletion can be performed using the DELETE HTTP method in AJAX.
In client-side storage like localStorage, data is deleted by:

1. Retrieving stored data
2. Removing the required item using array methods
3. Updating localStorage

---

# 🎯 Conclusion
This experiment demonstrates how frontend technologies can be used to build a simple registration system with data storage and asynchronous communication without using a backend server.

---