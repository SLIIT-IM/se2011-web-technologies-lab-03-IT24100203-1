// WELCOME
document.getElementById("welcomeBtn").onclick = function () {
    document.getElementById("welcomeMessage").textContent =
        "Welcome to Campus Tech Store!";
};

// PRODUCT COUNT
let rows = document.getElementById("productTable").rows.length - 1;
document.getElementById("productCount").textContent = rows;

// DISCOUNT
document.getElementById("discountBtn").onclick = function () {
    let price = Number(document.getElementById("priceInput").value);

    if (price > 0) {
        let discount = price * 0.1;
        document.getElementById("discountResult").textContent =
            "Final: Rs." + (price - discount);
    }
};

// OFFERS
document.getElementById("offersBtn").onclick = function () {
    document.getElementById("offersMessage").textContent =
        "Special offers available!";
};

// SEARCH
let products = ["laptop", "headphones", "smart watch", "usb flash drive"];

document.getElementById("searchBtn").onclick = function () {
    let input = document.getElementById("searchInput").value.toLowerCase();

    if (products.includes(input)) {
        document.getElementById("searchResult").textContent = "Found!";
    } else {
        document.getElementById("searchResult").textContent = "Not found";
    }
};

// TASK C
let showProductsBtn = document.getElementById("showProductsBtn");
let productListDisplay = document.getElementById("productListDisplay");
showProductsBtn.onclick = function () {
    productListDisplay.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        productListDisplay.innerHTML += "<li>" + products[i] + "</li>";
    }
};


// TASK D
document.getElementById("contactForm").onsubmit = function (e) {
    e.preventDefault();

    let name = fullname.value.trim();
    let email = email.value.trim();
    let phone = phone.value.trim();
    let msg = message.value.trim();

    let output = document.getElementById("formMessage");

    if (!name || !email || !phone || !msg) {
        output.textContent = "Fill all fields";
        output.style.color = "red";
    } else if (!email.includes("@")) {
        output.textContent = "Invalid email";
        output.style.color = "red";
    } else if (msg.length < 10) {
        output.textContent = "Message too short";
        output.style.color = "red";
    } else {
        output.textContent = "Submitted!";
        output.style.color = "green";
    }
};

// TASK A
let themeButton = document.getElementById("themeBtn");

themeButton.onclick = function () {
    document.body.classList.toggle("dark-mode");
};


// TASK B
function updateClock() {
    let now = new Date();
    document.getElementById("clock").textContent = "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();



// PAGE LOAD
window.onload = function () {
    document.getElementById("welcomeMessage").textContent =
        "Page loaded. Try the buttons!";
};