const products = [
    {
        name: "Acer Aspire Lite AL14-32P-392P",
        price: "$350",
        condition: "Brand New",
        image: "Laptop.jpg",
        description: [
            "Processor: Intel Core 3-N355",
            "RAM: 8 GB DDR5",
            "Storage: 512GB PCIe NVMe SSD",
            "Display: WUXGA IPS",
            "Connectivity: Wi-Fi 6 + Bluetooth"
        ],
        status: "Available"
    },

    {
        name: "Huawei MatePad SE 11",
        price: "$120",
        condition: "Brand New",
        image: "Tablet1.jpg",
        description: [
            "Model: AGS6-W09",
            "Color: Nebula Gray",
            "Storage: 128GB",
            "RAM: 4GB"
        ],
        status: "Available"
    },

    {
        name: "Huawei MatePad AI Edition",
        price: "$350",
        condition: "Brand New",
        image: "Tablet2.jpg",
        description: [
            "Model: xxxx",
            "Color: xxxx",
            "Storage: xxxx",
            "RAM: xxGB"
        ],
        status: "Unavailable"
    }
];


// Find the container in HTML
const container = document.getElementById("product-container");


// Create a card for every product
products.forEach(product => {

    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <h2>${product.name}</h2>

        <h3>${product.price}</h3>

        <p>Condition: ${product.condition}</p>

        <ul>
            ${product.description.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <p class="status">${product.status}</p>
    `;

    container.appendChild(card);
});
