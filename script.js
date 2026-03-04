function generateOrderId() {
    return "ORD" + Math.floor(Math.random() * 100000);
}

function payNow() {
    document.getElementById("paymentSuccess").style.display = "block";
    document.getElementById("orderId").innerText =
        "Your Order ID: " + generateOrderId();
}
