// JavaScript source code

        // Get values from URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const price = params.get("price");
    const image = params.get("image");
    const desc = params.get("desc");

    // Insert into the page
    document.getElementById("coffeeName").textContent = name;
    document.getElementById("coffeePrice").textContent = "€" + price;
    document.getElementById("coffeeImage").src = image;
    document.getElementById("coffeeDesc").textContent = desc;


    function updatePrice() {
        let basePrice = parseFloat(document.querySelector("input[name='size']:checked").value);
    let toppings = document.querySelectorAll(".top:checked").length * 0.5;
    let qty = parseInt(document.getElementById("qty").innerText);
    let total = (basePrice + toppings) * qty;
    document.getElementById("coffeePrice").innerText = total.toFixed(2);
        }


        document.querySelectorAll("input").forEach(el => {
        el.addEventListener("change", updatePrice);
        });


    function changeQty(num) {
        let qty = parseInt(document.getElementById("qty").innerText);
    qty = Math.max(1, qty + num);
    document.getElementById("qty").innerText = qty;
    updatePrice();
        }

    function placeOrder() {
        alert('Please pick up your order in 10 minutes.');
        }


