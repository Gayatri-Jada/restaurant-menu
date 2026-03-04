alert("JS Connected");

function generateOrderId() {
    return "ORD" + Math.floor(Math.random() * 100000);
}

function generateOrderId() {
    return "ORD" + Math.floor(Math.random() * 100000);
}

function payNow() {
    alert("Payment Successful!");

    const orderId = "ORD" + Math.floor(Math.random() * 100000);

    document.getElementById("orderId").innerText =
        "Your Order ID: " + orderId;

    document.getElementById("paymentSuccess").style.display = "block";
}

