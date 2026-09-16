const button =
document.queryselector("botton");
const order =
document.queryselector(".order");
button.addEventListener("
click", function () {
    order.innerHTML = '
      <h2>Your Order</h2>
      <p>Crisp chips & Tomato
Sauce-#5000</P>
    <h3>Total: #5000</h3>
    ';
});.