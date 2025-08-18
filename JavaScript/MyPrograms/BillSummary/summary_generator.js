const fs = require("fs");

function getInput() {
  const input = fs.readFileSync('file.txt', "utf-8").trim().split("\n");
  const n = parseInt(input[0]);
  const orders = input.slice(1, n + 1).map(line => {
    const [customer, item, quantityStr, priceStr] = line.trim().split(" ");
    return {
      customer,
      item,
      quantity: parseInt(quantityStr),
      price: parseFloat(priceStr),
    };
  });
  return { orders };
}

function generateBillSummary(orders) {
    // Implement logic here
    const customerMap = new Map()
    for (const {customer, item, quantity, price} of orders) {
        if (quantity > 0 && price > 0) {
            const normalizedName = customer.toLowerCase().replace(customer[0].toLowerCase(), customer[0].toUpperCase());
            // const totalPrice = (quantity * price * 1.0).toFixed(2);      DON'T  bcz toFixed() return a String!!!
    
            if (!customerMap.has(normalizedName)) customerMap.set(normalizedName, 0);
            customerMap.set(normalizedName, (customerMap.get(normalizedName) + quantity * price))
        }
    }

    const sortedCustomers = [...customerMap.keys()].sort()
    for (const customer of sortedCustomers) {
        const withTax = customerMap.get(customer) * 1.05
        console.log(`${customer} - Rs.${withTax.toFixed(2)}`);
    }
}

const {orders} = getInput()
generateBillSummary(orders)