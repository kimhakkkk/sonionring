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

    const statusClass = product.status.toLowerCase() === 'available' ? 'available' : 'unavailable';
    const inquiryText = statusClass === 'available'
        ? `<a href="https://t.me/kouch_kimhak" target="_blank" class="inquiry-link">Inquire →</a>`
        : '';

    card.innerHTML = `
        <div class="card-image">
            <span class="condition-badge">${product.condition}</span>
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="card-body">
            <h2>${product.name}</h2>
            <div class="price-row">
                <span class="price">${product.price}</span>
                <span class="price-label">Starting</span>
            </div>
            <ul class="specs">
                ${product.description.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <div class="card-divider"></div>
            <div class="status-row">
                <span class="status-badge ${statusClass}">${product.status}</span>
                ${inquiryText}
            </div>
        </div>
    `;

    container.appendChild(card);
});


// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const headerNav = document.querySelector('.header-nav');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        headerNav.classList.toggle('open');
        menuBtn.classList.toggle('active');
    });

    // Close menu when clicking a link
    headerNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('open');
            menuBtn.classList.remove('active');
        });
    });
}

// Smooth scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
