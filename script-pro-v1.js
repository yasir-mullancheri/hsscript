// ============================================
// ORDER CONFIGURATION
// ============================================

const ORDER_CONFIG = {
    // ========== CUSTOMER INFORMATION ==========
    customer: {
        fullName: "John Smith",
        email: "john.smith@company.com",
        phone: "+1-555-123-4567",
        company: "Abc Corporation"
    },
    
    // ========== PRODUCT INFORMATION ==========
    product: {
        name: "CloudTest Lite - Premium Package",
        code: "CTL-PREMIUM-2024"
    },
    
    // ========== ORDER ITEMS ==========
    items: [
        {
            name: "CloudTest Lite - Base Package",
            description: "5 devices included",
            price: 245,
            details: [
                "Android devices",
                "iOS devices", 
                "5 countries"
            ]
        },
        {
            name: "Premium Support",
            description: "24/7 assistance",
            price: 150,
            details: [
                "Phone support",
                "Email support",
                "Priority tickets"
            ]
        },
        {
            name: "Advanced Analytics",
            description: "Enhanced reporting",
            price: 100,
            details: [
                "Custom dashboards",
                "Export capabilities"
            ]
        }
    ]
};

// ============================================
// CORE
// ============================================

function calculateTotal() {
    return ORDER_CONFIG.items.reduce((total, item) => total + item.price, 0);
}

function displayCustomerInfo() {
    const customerInfoContainer = document.getElementById('receiptCustomerInfo');
    if (!customerInfoContainer) return;
    
    const { fullName, email, phone, company } = ORDER_CONFIG.customer;
    
    customerInfoContainer.innerHTML = `
        <div class="customer-info-grid">
            <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${fullName}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${email}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">${phone}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">${company}</div>
            </div>
        </div>
    `;
}

function displayOrderItems() {
    const orderItemsContainer = document.getElementById('receiptOrderItems');
    if (!orderItemsContainer) return;
    
    let itemsHTML = '';
    
    ORDER_CONFIG.items.forEach(item => {
        const detailsHTML = item.details && item.details.length > 0
            ? `<div class="item-details">
                ${item.details.map(detail => `<div class="item-detail">${detail}</div>`).join('')}
               </div>`
            : '';
        
        itemsHTML += `
            <div class="item-row">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    ${detailsHTML}
                </div>
                <div class="item-price">$${item.price.toLocaleString()}</div>
            </div>
        `;
    });
    
    orderItemsContainer.innerHTML = itemsHTML;
}

function displayTotal() {
    const totalElement = document.getElementById('receiptTotal');
    if (!totalElement) return;
    
    const total = calculateTotal();
    totalElement.textContent = total.toLocaleString();
}

function populateFoxyCartFields() {
    const total = calculateTotal();
    const { fullName, email, phone, company } = ORDER_CONFIG.customer;
    
    // Split name into first and last
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Main product details
    document.getElementById('fc-name').value = ORDER_CONFIG.product.name;
    document.getElementById('fc-price').value = total.toFixed(2);
    document.getElementById('fc-code').value = ORDER_CONFIG.product.code;
    
    // Customer information
    document.getElementById('fc-customer-first-name').value = firstName;
    document.getElementById('fc-customer-last-name').value = lastName;
    document.getElementById('fc-customer-email').value = email;
    document.getElementById('fc-customer-phone').value = phone;
    document.getElementById('fc-customer-company').value = company;
    
    // Billing information (same as customer)
    document.getElementById('fc-billing-first-name').value = firstName;
    document.getElementById('fc-billing-last-name').value = lastName;
    document.getElementById('fc-billing-company').value = company;
    document.getElementById('fc-billing-phone').value = phone;
    
    // Order details as custom field
    const orderDetailsText = ORDER_CONFIG.items.map(item => 
        `${item.name}: $${item.price}`
    ).join('; ');
    document.getElementById('fc-order-details').value = orderDetailsText;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Display all information
    displayCustomerInfo();
    displayOrderItems();
    displayTotal();
    
    // Populate FoxyCart fields
    populateFoxyCartFields();
    
    // Form submission handler
    const form = document.getElementById('foxycart-form');
    if (form) {
        form.addEventListener('submit', function() {
            // Ensure fields are populated before submission
            populateFoxyCartFields();
            return true;
        });
    }
    
    console.log('Static Order Receipt initialized successfully!');
    console.log('Total Amount: $' + calculateTotal());
});
