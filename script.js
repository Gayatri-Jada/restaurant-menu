function generateOrderId() {
    return "ORD" + Math.floor(Math.random() * 100000);
}

function payNow() {
    document.getElementById("paymentSuccess").style.display = "block";
    document.getElementById("orderId").innerText =
        "Your Order ID: " + generateOrderId();
}

function generateOrderId() {
    return "ORD" + Math.floor(Math.random() * 100000);
}

function payNow() {
    document.querySelector(".menu-container").style.display = "none";
    document.querySelector(".total-section").style.display = "none";

    document.getElementById("paymentSuccess").style.display = "block";
    document.getElementById("orderId").innerText =
        "Your Order ID: " + generateOrderId();
}
