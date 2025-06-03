// ===== GLOBAL VARIABLES =====
let currentStep = 1;
let selectedDeviceTypes = [];
let selectedCountries = [];
let selectedCities = [];
let selectedDevices = {};
let selectedPlan = 'yearly';
let selectedAddons = [];
let activeFilters = [];
let totalAmount = 0;

// ===== DEVICE DATA =====
const deviceData = [
    { id: 1, name: "Chrome", country: "United Arab Emirates", city: "Dubai", type: "chrome", network: "WiFi", audio: false },
    { id: 2, name: "Chrome", country: "United Arab Emirates", city: "Dubai", type: "chrome", network: "WiFi", audio: false },
    { id: 3, name: "Galaxy S9", country: "United Arab Emirates", city: "Dubai", type: "android", network: "WiFi", audio: false },
    { id: 4, name: "Chrome", country: "Australia", city: "Melbourne", type: "chrome", network: "WiFi", audio: false },
    { id: 5, name: "Firefox", country: "Australia", city: "Melbourne", type: "firefox", network: "WiFi", audio: false },
    { id: 6, name: "Microsoftedge", country: "Australia", city: "Melbourne", type: "microsoftedge", network: "WiFi", audio: false },
    { id: 7, name: "iPhone 11", country: "Australia", city: "Melbourne", type: "ios", network: "WiFi", audio: false },
    { id: 8, name: "SHIELD Android TV", country: "Australia", city: "Melbourne", type: "android", network: "WiFi", audio: false },
    { id: 9, name: "Galaxy S9", country: "Australia", city: "Melbourne", type: "android", network: "WiFi", audio: false },
    { id: 10, name: "Galaxy S7", country: "Australia", city: "Melbourne", type: "android", network: "WiFi", audio: false },
    { id: 11, name: "Fire TV Stick 4K", country: "Australia", city: "Melbourne", type: "amazon", network: "WiFi", audio: false },
    { id: 12, name: "Zebra TC56", country: "Australia", city: "Melbourne", type: "android", network: "WiFi", audio: false },
    { id: 13, name: "Galaxy S9", country: "Australia", city: "Melbourne", type: "android", network: "WiFi", audio: false },
    { id: 14, name: "LG G6", country: "Australia", city: "Melbourne", type: "android", network: "WiFi", audio: false },
    { id: 15, name: "Galaxy A73 5G", country: "Australia", city: "Melbourne", type: "android", network: "WiFi", audio: false },
    { id: 16, name: "Safari", country: "Australia", city: "Sydney", type: "safari", network: "WiFi", audio: false },
    { id: 17, name: "Chrome", country: "Australia", city: "Sydney", type: "chrome", network: "WiFi", audio: false },
    { id: 18, name: "Firefox", country: "Australia", city: "Sydney", type: "firefox", network: "WiFi", audio: false },
    { id: 19, name: "Chrome", country: "Australia", city: "Sydney", type: "chrome", network: "WiFi", audio: false },
    { id: 20, name: "Firefox", country: "Australia", city: "Sydney", type: "firefox", network: "WiFi", audio: false },
    { id: 21, name: "iPhone13 ProMax", country: "Australia", city: "Sydney", type: "ios", network: "WiFi", audio: false },
    { id: 22, name: "Microsoftedge", country: "Australia", city: "Sydney", type: "microsoftedge", network: "WiFi", audio: false },
    { id: 23, name: "Opera", country: "Australia", city: "Sydney", type: "opera", network: "WiFi", audio: false },
    { id: 24, name: "Galaxy Tab S7", country: "Australia", city: "Sydney", type: "android", network: "WiFi", audio: false },
    { id: 25, name: "Galaxy Tab S8+", country: "Australia", city: "Sydney", type: "android", network: "WiFi", audio: false },
    { id: 26, name: "Chrome", country: "Benin", city: "Cotonou", type: "chrome", network: "WiFi", audio: false },
    { id: 27, name: "iPhone 8", country: "Brazil", city: "São Paulo", type: "ios", network: "WiFi", audio: false },
    { id: 28, name: "Firefox", country: "Brazil", city: "São Paulo", type: "firefox", network: "WiFi", audio: false },
    { id: 29, name: "Galaxy A11", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 30, name: "Galaxy Tab A10.1", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 31, name: "Samsung galaxy s10", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 32, name: "Galaxy A30s", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 33, name: "Galaxy A12", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 34, name: "Galaxy S21 5G", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 35, name: "Galaxy A50", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 36, name: "moto g8 play", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 37, name: "Galaxy Tab S5e", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 38, name: "Galaxy A30s", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 39, name: "Samsung galaxy s10", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 40, name: "iPad Air (3rd Gen)", country: "Brazil", city: "São Paulo", type: "ios", network: "WiFi", audio: true },
    { id: 41, name: "iPhone XS", country: "Brazil", city: "São Paulo", type: "ios", network: "WiFi", audio: false },
    { id: 42, name: "Galaxy S21 5G", country: "Brazil", city: "São Paulo", type: "android", network: "WiFi", audio: false },
    { id: 43, name: "Galaxy S21 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 44, name: "Fire TV Stick 4K", country: "Canada", city: "Toronto", type: "amazon", network: "WiFi", audio: false },
    { id: 45, name: "Fire TV Stick 4K", country: "Canada", city: "Toronto", type: "amazon", network: "WiFi", audio: false },
    { id: 46, name: "iPhone 11", country: "Canada", city: "Toronto", type: "ios", network: "WiFi", audio: true },
    { id: 47, name: "Safari", country: "Canada", city: "Toronto", type: "safari", network: "WiFi", audio: false },
    { id: 48, name: "Galaxy S20 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 49, name: "Galaxy S21 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 50, name: "OnePlus 6T", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 51, name: "Pixel 3", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 52, name: "Galaxy A8", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 53, name: "Moto G7", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 54, name: "Galaxy S20 FE 5G", country: "Canada", city: "Toronto", type: "android", network: "WiFi", audio: false },
    { id: 55, name: "iPhone 12", country: "Canada", city: "Toronto", type: "ios", network: "WiFi", audio: false },
    { id: 56, name: "Galaxy S21 5G", country: "Canada", city: "Toronto", type: "android", network: "SIM", audio: false },
    { id: 57, name: "Safari", country: "Czech Republic", city: "Prague", type: "safari", network: "WiFi", audio: false },
    { id: 58, name: "Safari", country: "Czech Republic", city: "Prague", type: "safari", network: "WiFi", audio: false },
    { id: 59, name: "iPhone 11", country: "France", city: "Paris", type: "ios", network: "WiFi", audio: true },
    { id: 60, name: "Galaxy A54", country: "France", city: "Paris", type: "android", network: "WiFi", audio: true },
    { id: 61, name: "Pixel 4", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 62, name: "Galaxy A12", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 63, name: "Samsung J5 (2016)", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 64, name: "Chrome", country: "Germany", city: "Leverkusen", type: "chrome", network: "WiFi", audio: false },
    { id: 65, name: "iPhone 11", country: "Germany", city: "Leverkusen", type: "ios", network: "WiFi", audio: false },
    { id: 66, name: "Galaxy S22", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 67, name: "iPhone 11 Pro", country: "Germany", city: "Leverkusen", type: "ios", network: "WiFi", audio: false },
    { id: 68, name: "Galaxy S21 5G", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 69, name: "Galaxy A53 5G", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 70, name: "Safari", country: "Germany", city: "Leverkusen", type: "safari", network: "WiFi", audio: false },
    { id: 71, name: "Pixel 7a", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 72, name: "Galaxy A33 5G", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 73, name: "Galaxy S23", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 74, name: "Firefox", country: "Germany", city: "Leverkusen", type: "firefox", network: "WiFi", audio: false },
    { id: 75, name: "iPhone 14", country: "Germany", city: "Leverkusen", type: "ios", network: "WiFi", audio: false },
    { id: 76, name: "Galaxy S22 5G", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 77, name: "Galaxy S24", country: "Germany", city: "Leverkusen", type: "android", network: "WiFi", audio: false },
    { id: 78, name: "Chrome", country: "Great Britain", city: "London", type: "chrome", network: "WiFi", audio: false },
    { id: 79, name: "Galaxy S21 5G", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 80, name: "iPhone 11", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
    { id: 81, name: "Galaxy A20", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 82, name: "Galaxy A33 5G", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 83, name: "Pixel 4", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 84, name: "Galaxy A12", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 85, name: "iPhone 6S", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
    { id: 86, name: "iPhone 14", country: "Great Britain", city: "London", type: "ios", network: "WiFi", audio: false },
    { id: 87, name: "Galaxy A51", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 88, name: "Galaxy A52", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 89, name: "Samsung J5 (2016)", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 90, name: "Galaxy A54", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: true },
    { id: 91, name: "iPhone 13", country: "Great Britain", city: "London", type: "ios", network: "SIM", audio: false },
    { id: 92, name: "Pixel 3", country: "Great Britain", city: "London", type: "android", network: "WiFi", audio: false },
    { id: 93, name: "Safari", country: "Great Britain", city: "London", type: "safari", network: "WiFi", audio: false },
    { id: 94, name: "Firefox", country: "Great Britain", city: "London", type: "firefox", network: "WiFi", audio: false },
    { id: 95, name: "Chrome", country: "Hong Kong", city: "Hong Kong", type: "chrome", network: "WiFi", audio: false },
    { id: 96, name: "Safari", country: "Hong Kong", city: "Hong Kong", type: "safari", network: "WiFi", audio: false },
    { id: 97, name: "Firefox", country: "Hong Kong", city: "Hong Kong", type: "firefox", network: "WiFi", audio: false },
    { id: 98, name: "Microsoftedge", country: "Hong Kong", city: "Hong Kong", type: "microsoftedge", network: "WiFi", audio: false },
    { id: 99, name: "Opera", country: "Hong Kong", city: "Hong Kong", type: "opera", network: "WiFi", audio: false },
    { id: 100, name: "iPhone 11", country: "Hong Kong", city: "Hong Kong", type: "ios", network: "WiFi", audio: false },
    { id: 101, name: "Galaxy S21 5G", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 102, name: "iPhone 8", country: "Hong Kong", city: "Hong Kong", type: "ios", network: "WiFi", audio: false },
    { id: 103, name: "Galaxy A12", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 104, name: "Galaxy S9", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 105, name: "Galaxy A13", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 106, name: "Galaxy A54", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 107, name: "Galaxy S23", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 108, name: "Galaxy S24", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 109, name: "Galaxy A35", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 110, name: "iPhone 15", country: "Hong Kong", city: "Hong Kong", type: "ios", network: "WiFi", audio: false },
    { id: 111, name: "Galaxy S22", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 112, name: "iPhone X", country: "Hong Kong", city: "Hong Kong", type: "ios", network: "WiFi", audio: false },
    { id: 113, name: "iPhone 14", country: "Hong Kong", city: "Hong Kong", type: "ios", network: "WiFi", audio: false },
    { id: 114, name: "iPhone 13", country: "Hong Kong", city: "Hong Kong", type: "ios", network: "WiFi", audio: false },
    { id: 115, name: "Galaxy A25 5G", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 116, name: "Galaxy S23+", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 117, name: "Galaxy S24 Ultra", country: "Hong Kong", city: "Hong Kong", type: "android", network: "WiFi", audio: false },
    { id: 118, name: "Chrome", country: "India", city: "Bangalore", type: "chrome", network: "WiFi", audio: false },
    { id: 119, name: "Galaxy S22", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 120, name: "iPhone 13", country: "India", city: "Bangalore", type: "ios", network: "WiFi", audio: false },
    { id: 121, name: "Galaxy A12", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 122, name: "Galaxy A23", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 123, name: "Realme C15", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 124, name: "Mi A1", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 125, name: "Galaxy S20 FE", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 126, name: "Redmi Note 5 Pro", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 127, name: "Galaxy M31s", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 128, name: "Galaxy J7 Nxt", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 129, name: "Galaxy A51", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 130, name: "Redmi 6A", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 131, name: "Galaxy A30s", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 132, name: "Galaxy A12", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 133, name: "Vivo Y55s", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 134, name: "Vivo Y93", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 135, name: "Galaxy A50", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 136, name: "Galaxy J6 Plus", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 137, name: "Safari", country: "India", city: "Bangalore", type: "safari", network: "WiFi", audio: false },
    { id: 138, name: "Redmi Note 11 Pro", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 139, name: "vivo Y21", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 140, name: "Galaxy A16 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 141, name: "Galaxy M52 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 142, name: "Galaxy A72", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 143, name: "Galaxy A73 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 144, name: "iPhone 14 Pro", country: "India", city: "Bangalore", type: "ios", network: "WiFi", audio: false },
    { id: 145, name: "Samsung J6 Plus", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 146, name: "Firefox", country: "India", city: "Bangalore", type: "firefox", network: "WiFi", audio: false },
    { id: 147, name: "Galaxy A54", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: true },
    { id: 148, name: "Galaxy S21 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 149, name: "Galaxy A32", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 150, name: "Galaxy A13", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 151, name: "Galaxy A53 5G", country: "India", city: "Bangalore", type: "android", network: "WiFi", audio: false },
    { id: 152, name: "iPhone 11", country: "Indonesia", city: "Jakarta", type: "ios", network: "WiFi", audio: false },
    { id: 153, name: "Galaxy A12", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
    { id: 154, name: "Chrome", country: "Indonesia", city: "Jakarta", type: "chrome", network: "WiFi", audio: false },
    { id: 155, name: "Y30", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
    { id: 156, name: "Y15s", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
    { id: 157, name: "V11 Pro", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
    { id: 158, name: "Reno2 Z", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
    { id: 159, name: "moto g pure", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
    { id: 160, name: "Moto G22", country: "Indonesia", city: "Jakarta", type: "android", network: "WiFi", audio: false },
    { id: 161, name: "Chrome", country: "Japan", city: "Tokyo", type: "chrome", network: "WiFi", audio: false },
    { id: 162, name: "Galaxy S21 5G", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
    { id: 163, name: "iPhone 11", country: "Japan", city: "Tokyo", type: "ios", network: "WiFi", audio: false },
    { id: 164, name: "Galaxy A12", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
    { id: 165, name: "Aquos Sense 3", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
    { id: 166, name: "Sharp Aquos Sense", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
    { id: 167, name: "Xperia Ace", country: "Japan", city: "Tokyo", type: "android", network: "WiFi", audio: false },
    { id: 168, name: "Safari", country: "Japan", city: "Tokyo", type: "safari", network: "WiFi", audio: false },
    { id: 169, name: "Firefox", country: "Japan", city: "Tokyo", type: "firefox", network: "WiFi", audio: false },
    { id: 170, name: "iPhone 8", country: "Japan", city: "Tokyo", type: "ios", network: "WiFi", audio: false },
    { id: 171, name: "Redmi Note 8", country: "Malaysia", city: "Kuala Lumpur", type: "android", network: "WiFi", audio: false },
    { id: 172, name: "iPhone 11", country: "Malaysia", city: "Kuala Lumpur", type: "ios", network: "WiFi", audio: false },
    { id: 173, name: "Galaxy A12", country: "Malaysia", city: "Kuala Lumpur", type: "android", network: "WiFi", audio: false },
    { id: 174, name: "Chrome", country: "Netherlands", city: "Amsterdam", type: "chrome", network: "WiFi", audio: false },
    { id: 175, name: "Firefox", country: "Netherlands", city: "Amsterdam", type: "firefox", network: "WiFi", audio: false },
    { id: 176, name: "Safari", country: "Netherlands", city: "Amsterdam", type: "safari", network: "WiFi", audio: false },
    { id: 177, name: "iPhone 11", country: "Netherlands", city: "Amsterdam", type: "ios", network: "WiFi", audio: false },
    { id: 178, name: "Galaxy S21 5G", country: "Netherlands", city: "Amsterdam", type: "android", network: "WiFi", audio: false },
    { id: 179, name: "Galaxy A33 5G", country: "Netherlands", city: "Amsterdam", type: "android", network: "WiFi", audio: false },
    { id: 180, name: "Galaxy A54", country: "Netherlands", city: "Amsterdam", type: "android", network: "WiFi", audio: true },
    { id: 181, name: "iPhone 14", country: "Netherlands", city: "Amsterdam", type: "ios", network: "WiFi", audio: false },
    { id: 182, name: "Galaxy S22 5G", country: "Netherlands", city: "Amsterdam", type: "android", network: "WiFi", audio: false },
    { id: 183, name: "Galaxy S23 Ultra", country: "Netherlands", city: "Amsterdam", type: "android", network: "WiFi", audio: false },
    { id: 184, name: "Galaxy S24", country: "Netherlands", city: "Amsterdam", type: "android", network: "WiFi", audio: false },
    { id: 185, name: "Chrome", country: "Nigeria", city: "Lagos", type: "chrome", network: "WiFi", audio: false },
    { id: 186, name: "Galaxy A12", country: "Nigeria", city: "Lagos", type: "android", network: "WiFi", audio: false },
    { id: 187, name: "iPhone 11", country: "Nigeria", city: "Lagos", type: "ios", network: "WiFi", audio: false },
    { id: 188, name: "Chrome", country: "Oman", city: "Muscat", type: "chrome", network: "WiFi", audio: false },
    { id: 189, name: "Galaxy A12", country: "Oman", city: "Muscat", type: "android", network: "WiFi", audio: false },
    { id: 190, name: "iPhone 11", country: "Oman", city: "Muscat", type: "ios", network: "WiFi", audio: false },
    { id: 191, name: "Chrome", country: "Philippines", city: "Manila", type: "chrome", network: "WiFi", audio: false },
    { id: 192, name: "Galaxy A12", country: "Philippines", city: "Manila", type: "android", network: "WiFi", audio: false },
    { id: 193, name: "iPhone 11", country: "Philippines", city: "Manila", type: "ios", network: "WiFi", audio: false },
    { id: 194, name: "Chrome", country: "Singapore", city: "Singapore", type: "chrome", network: "WiFi", audio: false },
    { id: 195, name: "Firefox", country: "Singapore", city: "Singapore", type: "firefox", network: "WiFi", audio: false },
    { id: 196, name: "Safari", country: "Singapore", city: "Singapore", type: "safari", network: "WiFi", audio: false },
    { id: 197, name: "Microsoftedge", country: "Singapore", city: "Singapore", type: "microsoftedge", network: "WiFi", audio: false },
    { id: 198, name: "Opera", country: "Singapore", city: "Singapore", type: "opera", network: "WiFi", audio: false },
    { id: 199, name: "iPhone 11", country: "Singapore", city: "Singapore", type: "ios", network: "WiFi", audio: false },
    { id: 200, name: "Galaxy S21 5G", country: "Singapore", city: "Singapore", type: "android", network: "WiFi", audio: false },
    { id: 201, name: "Galaxy A12", country: "Singapore", city: "Singapore", type: "android", network: "WiFi", audio: false },
    { id: 202, name: "Galaxy A54", country: "Singapore", city: "Singapore", type: "android", network: "WiFi", audio: true },
    { id: 203, name: "iPhone 14", country: "Singapore", city: "Singapore", type: "ios", network: "WiFi", audio: false },
    { id: 204, name: "Galaxy S22 5G", country: "Singapore", city: "Singapore", type: "android", network: "WiFi", audio: false },
    { id: 205, name: "Galaxy S23 Ultra", country: "Singapore", city: "Singapore", type: "android", network: "WiFi", audio: false },
    { id: 206, name: "Galaxy S24", country: "Singapore", city: "Singapore", type: "android", network: "WiFi", audio: false },
    { id: 207, name: "Chrome", country: "South Africa", city: "Johannesburg", type: "chrome", network: "WiFi", audio: false },
    { id: 208, name: "Galaxy A12", country: "South Africa", city: "Johannesburg", type: "android", network: "WiFi", audio: false },
    { id: 209, name: "iPhone 11", country: "South Africa", city: "Johannesburg", type: "ios", network: "WiFi", audio: false },
    { id: 210, name: "Chrome", country: "South Korea", city: "Seoul", type: "chrome", network: "WiFi", audio: false },
    { id: 211, name: "Galaxy S21 5G", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
    { id: 212, name: "iPhone 11", country: "South Korea", city: "Seoul", type: "ios", network: "WiFi", audio: false },
    { id: 213, name: "Galaxy A12", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
    { id: 214, name: "Galaxy S23", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
    { id: 215, name: "Galaxy S24", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
    { id: 216, name: "iPhone 14", country: "South Korea", city: "Seoul", type: "ios", network: "WiFi", audio: false },
    { id: 217, name: "Galaxy S22", country: "South Korea", city: "Seoul", type: "android", network: "WiFi", audio: false },
    { id: 218, name: "Chrome", country: "Taiwan", city: "Taipei", type: "chrome", network: "WiFi", audio: false },
    { id: 219, name: "Galaxy A12", country: "Taiwan", city: "Taipei", type: "android", network: "WiFi", audio: false },
    { id: 220, name: "iPhone 11", country: "Taiwan", city: "Taipei", type: "ios", network: "WiFi", audio: false },
    { id: 221, name: "Chrome", country: "Thailand", city: "Bangkok", type: "chrome", network: "WiFi", audio: false },
    { id: 222, name: "Galaxy A12", country: "Thailand", city: "Bangkok", type: "android", network: "WiFi", audio: false },
    { id: 223, name: "iPhone 11", country: "Thailand", city: "Bangkok", type: "ios", network: "WiFi", audio: false },
    { id: 224, name: "Chrome", country: "Turkey", city: "Istanbul", type: "chrome", network: "WiFi", audio: false },
    { id: 225, name: "Galaxy A12", country: "Turkey", city: "Istanbul", type: "android", network: "WiFi", audio: false },
    { id: 226, name: "iPhone 11", country: "Turkey", city: "Istanbul", type: "ios", network: "WiFi", audio: false },
    { id: 227, name: "Pixel 5", country: "US", city: "Chicago", type: "android", network: "WiFi", audio: false },
    { id: 228, name: "Google Pixel 3a XL", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
    { id: 229, name: "Pixel 4a", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 230, name: "iPad", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 231, name: "Pixel 8", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 232, name: "Galaxy Z Fold 5", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 233, name: "Galaxy S10 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 234, name: "Galaxy S20 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 235, name: "Firefox", country: "US", city: "Sunnyvale", type: "firefox", network: "WiFi", audio: false },
    { id: 236, name: "Chrome", country: "US", city: "Riverside", type: "chrome", network: "WiFi", audio: false },
    { id: 237, name: "Fire TV Stick 4K", country: "US", city: "Sunnyvale", type: "amazon", network: "WiFi", audio: false },
    { id: 238, name: "Galaxy S21 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 239, name: "Pixel 7a", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 240, name: "Google Pixel 3a XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 241, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 242, name: "Galaxy S22 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 243, name: "Pixel 4", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: false },
    { id: 244, name: "Pixel 4 XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 245, name: "iPhone XS Max", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 246, name: "Safari", country: "US", city: "Sunnyvale", type: "safari", network: "WiFi", audio: false },
    { id: 247, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 248, name: "Galaxy S22 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 249, name: "iPad Pro 11in (3rd Gen)", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 250, name: "Galaxy S21 5G", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
    { id: 251, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 252, name: "Chrome", country: "US", city: "Sunnyvale", type: "chrome", network: "WiFi", audio: false },
    { id: 253, name: "Galaxy S24", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: true },
    { id: 254, name: "iPhone 11 Pro Max", country: "US", city: "Chicago", type: "ios", network: "SIM", audio: false },
    { id: 255, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 256, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 257, name: "iPhone 8", country: "US", city: "Newark", type: "ios", network: "WiFi", audio: false },
    { id: 258, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 259, name: "Tab A 10.1", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 260, name: "Opera", country: "US", city: "Chicago", type: "opera", network: "WiFi", audio: false },
    { id: 261, name: "iPhone13 ProMax", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 262, name: "Firefox", country: "US", city: "Sunnyvale", type: "firefox", network: "WiFi", audio: false },
    { id: 263, name: "Fire TV Stick 4K", country: "US", city: "Riverside", type: "amazon", network: "WiFi", audio: false },
    { id: 264, name: "Fire TV Stick 4K", country: "US", city: "Sunnyvale", type: "amazon", network: "WiFi", audio: false },
    { id: 265, name: "Pixel 3", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 266, name: "Fire TV Stick 4K", country: "US", city: "Sunnyvale", type: "amazon", network: "WiFi", audio: false },
    { id: 267, name: "Galaxy Note10 Plus 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 268, name: "Galaxy S7", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 269, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 270, name: "Galaxy S20 FE 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 271, name: "Pixel 5", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 272, name: "Opera", country: "US", city: "Riverside", type: "opera", network: "WiFi", audio: false },
    { id: 273, name: "Galaxy S23 Ultra", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 274, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
    { id: 275, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 276, name: "iPhone 11 Pro", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 277, name: "iPhone 11 Pro", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 278, name: "iPad Pro 11in (3rd Gen)", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 279, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 280, name: "Galaxy A52", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 281, name: "Galaxy S9", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 282, name: "Galaxy S20 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 283, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 284, name: "e5 cruise", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 285, name: "Firefox", country: "US", city: "Palo Alto", type: "firefox", network: "WiFi", audio: false },
    { id: 286, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
    { id: 287, name: "iPhone 14", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 288, name: "Galaxy A40", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 289, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 290, name: "Tab A 10.1", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 291, name: "LG V30", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 292, name: "iPhone 14", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 293, name: "Galaxy S20 FE", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 294, name: "Google Pixel 3a XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 295, name: "iPhone SE 2", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 296, name: "Pixel 2", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 297, name: "Galaxy S23 Ultra", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 298, name: "iPhone XS Max", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 299, name: "Galaxy S9", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
    { id: 300, name: "Galaxy A20", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 301, name: "iPad Pro(12.9in 6th Gen)", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 302, name: "Firefox", country: "US", city: "Sunnyvale", type: "firefox", network: "WiFi", audio: false },
    { id: 303, name: "PH-1", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 304, name: "Pixel 4", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 305, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
    { id: 306, name: "iPhone 8 Plus", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 307, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
    { id: 308, name: "iPhone 13", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 309, name: "Pixel 4 XL", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 310, name: "Chrome", country: "US", city: "Sunnyvale", type: "chrome", network: "WiFi", audio: false },
    { id: 311, name: "Galaxy S20+ 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 312, name: "Galaxy S10", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 313, name: "iPhone13 ProMax", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 314, name: "Firefox", country: "US", city: "Palo Alto", type: "firefox", network: "WiFi", audio: false },
    { id: 315, name: "Safari", country: "US", city: "Newark", type: "safari", network: "WiFi", audio: false },
    { id: 316, name: "Firefox", country: "US", city: "Chicago", type: "firefox", network: "WiFi", audio: false },
    { id: 317, name: "iPhone 11 Pro Max", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 318, name: "Galaxy S24 Ultra", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 319, name: "iPhone 14 Pro", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 320, name: "Pixel 2", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 321, name: "iPhone 11 Pro", country: "US", city: "Riverside", type: "ios", network: "SIM", audio: false },
    { id: 322, name: "Safari", country: "US", city: "Riverside", type: "safari", network: "WiFi", audio: false },
    { id: 323, name: "iPhone 12", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 324, name: "Galaxy A53 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 325, name: "Galaxy S7 Edge", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 326, name: "iPhone X", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 327, name: "Chrome", country: "US", city: "Chicago", type: "chrome", network: "WiFi", audio: false },
    { id: 328, name: "iPhone 6S", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 329, name: "Galaxy S20+ 5G", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
    { id: 330, name: "Galaxy S23", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 331, name: "iPhone XR", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 332, name: "Galaxy S10", country: "US", city: "Riverside", type: "android", network: "SIM", audio: false },
    { id: 333, name: "LG K51", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 334, name: "Firefox", country: "US", city: "Newark", type: "firefox", network: "WiFi", audio: false },
    { id: 335, name: "Galaxy Note 3", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 336, name: "iPhone 11 Pro Max", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 337, name: "Galaxy S20+ 5G", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 338, name: "Microsoftedge", country: "US", city: "Riverside", type: "microsoftedge", network: "WiFi", audio: false },
    { id: 339, name: "Galaxy A10e", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 340, name: "Galaxy S9", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 341, name: "Google Pixel 3a XL", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: true },
    { id: 342, name: "Galaxy S10", country: "US", city: "Sunnyvale", type: "android", network: "WiFi", audio: true },
    { id: 343, name: "Microsoftedge", country: "US", city: "Palo Alto", type: "microsoftedge", network: "WiFi", audio: false },
    { id: 344, name: "Fire TV Stick (Gen 3)", country: "US", city: "Riverside", type: "amazon", network: "WiFi", audio: false },
    { id: 345, name: "moto g pure", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 346, name: "Galaxy A20", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 347, name: "iPhone 8 Plus", country: "US", city: "Riverside", type: "ios", network: "WiFi", audio: false },
    { id: 348, name: "Safari", country: "US", city: "Sunnyvale", type: "safari", network: "WiFi", audio: false },
    { id: 349, name: "Galaxy S23", country: "US", city: "Riverside", type: "android", network: "WiFi", audio: false },
    { id: 350, name: "PlayStation 4", country: "US", city: "Atlanta", type: "playstation", network: "WiFi", audio: false }
];


// ===== COUNTRY DATA =====
const countryData = {
    'Australia': ['Sydney'],
    'US': ['Chicago', 'Newark', 'Palo Alto', 'Riverside', 'Sunnyvale', 'Atlanta'],
    'India': ['Bangalore'],
    'Great Britain': ['London'],
    'Germany': ['Leverkusen'],
    'Japan': ['Tokyo'],
    'Singapore': ['Singapore'],
    'United Arab Emirates': ['Dubai'],
    'Brazil': ['São Paulo'],
    'Canada': ['Toronto'],
    'Czech Republic': ['Prague'],
    'France': ['Paris'],
    'Hong Kong': ['Hong Kong'],
    'Indonesia': ['Jakarta'],
    'Ireland': ['Dublin'],
    'Malaysia': ['Kuala Lumpur'],
    'Netherlands': ['The Hague'],
    'Nigeria': ['Lagos'],
    'Philippines': ['Manila'],
    'South Africa': ['Johannesburg'],
    'South Korea': ['Seoul'],
    'Taiwan': ['Taipei'],
    'Thailand': ['Bangkok'],
    'Turkey': ['Istanbul'],
    'Benin': ['Cotonou']
};

// ===== UTILITY FUNCTIONS =====
function showLoading() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    
    if (field) {
        field.classList.remove('error');
    }
    
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

function clearAllErrors() {
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message.show').forEach(el => el.classList.remove('show'));
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Remove all spaces, dashes, parentheses, and plus signs for validation
    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    // Check if it's empty (optional field) or contains only digits and is reasonable length
    return phone === '' || (/^\d{7,15}$/.test(cleanPhone));
}

// ===== NAVIGATION FUNCTIONS =====
function updateProgressBar() {
    const progress = (currentStep / 7) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNumber = index + 1;
        if (stepNumber <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function nextStep(step) {
    if (validateCurrentStep()) {
        showLoading();
        
        setTimeout(() => {
            hideLoading();
            
            // Hide current step
            document.getElementById(`step${currentStep}`).classList.remove('active');
            
            // Show next step
            document.getElementById(`step${step}`).classList.add('active');
            
            currentStep = step;
            updateProgressBar();
            
            // Trigger step-specific actions
            switch(step) {
                case 3:
                    loadAvailableCountries();
                    break;
                case 4:
                    loadCitySelections();
                    break;
                case 5:
                    loadDevices();
                    break;
                case 6:
                    updatePricingSummary();
                    updateAddonPricing();
                    break;
                case 7:
                    loadFinalSummary();
                    break;
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
    }
}

function prevStep(step) {
    clearAllErrors();
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    
    // Show previous step
    document.getElementById(`step${step}`).classList.add('active');
    
    currentStep = step;
    updateProgressBar();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateCurrentStep() {
    clearAllErrors();
    let isValid = true;
    
    switch(currentStep) {
        case 1:
            isValid = validateStep1();
            break;
        case 2:
            isValid = validateStep2();
            break;
        case 3:
            isValid = validateStep3();
            break;
        case 4:
            isValid = validateStep4();
            break;
        case 5:
            isValid = validateStep5();
            break;
        default:
            isValid = true;
    }
    
    return isValid;
}

// ===== STEP VALIDATION FUNCTIONS =====
function validateStep1() {
    let isValid = true;
    
    const fullName = document.getElementById('fullName').value.trim();
    const businessEmail = document.getElementById('businessEmail').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const organizationName = document.getElementById('organizationName').value.trim();
    
    if (!fullName) {
        showError('fullName', 'Full name is required');
        isValid = false;
    }
    
    if (!businessEmail) {
        showError('businessEmail', 'Business email is required');
        isValid = false;
    } else if (!validateEmail(businessEmail)) {
        showError('businessEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!phoneNumber) {
        showError('phoneNumber', 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(phoneNumber)) {
        showError('phoneNumber', 'Please enter a valid phone number (numbers only, 7-15 digits)');
        isValid = false;
    }
    
    if (!organizationName) {
        showError('organizationName', 'Organization name is required');
        isValid = false;
    }
    
    return isValid;
}

function validateStep2() {
    if (selectedDeviceTypes.length === 0) {
        showError('deviceType', 'Please select at least one device type');
        return false;
    }
    return true;
}

function validateStep3() {
    if (selectedCountries.length === 0) {
        showError('country', 'Please select at least one country');
        return false;
    }
    return true;
}

function validateStep4() {
    if (selectedCities.length === 0) {
        showError('city', 'Please select at least one city');
        return false;
    }
    return true;
}

function validateStep5() {
    if (Object.keys(selectedDevices).length === 0) {
        showError('device', 'Please select at least one device');
        return false;
    }
    return true;
}

// ===== DEVICE TYPE SELECTION =====
function setupDeviceTypeSelection() {
    document.querySelectorAll('.selection-card[data-type]').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return; // Let checkbox handle its own event
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            const deviceType = this.dataset.type;
            
            checkbox.checked = !checkbox.checked;
            toggleDeviceType(deviceType, checkbox.checked);
        });
        
        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            const deviceType = card.dataset.type;
            toggleDeviceType(deviceType, this.checked);
        });
    });
}

function toggleDeviceType(type, isChecked) {
    const card = document.querySelector(`[data-type="${type}"]`);
    
    if (isChecked) {
        if (!selectedDeviceTypes.includes(type)) {
            selectedDeviceTypes.push(type);
        }
        card.classList.add('selected');
    } else {
        selectedDeviceTypes = selectedDeviceTypes.filter(t => t !== type);
        card.classList.remove('selected');
    }
    
    updateDeviceTypeButton();
    clearError('deviceType');
}

function updateDeviceTypeButton() {
    const button = document.getElementById('deviceTypeNext');
    button.disabled = selectedDeviceTypes.length === 0;
}

// ===== COUNTRY SELECTION =====
function loadAvailableCountries() {
    // Get countries that have devices of the selected types
    const availableCountries = [...new Set(
        deviceData
            .filter(device => selectedDeviceTypes.includes(device.type))
            .map(device => device.country)
    )].sort();
    
    const countryGrid = document.getElementById('countryGrid');
    countryGrid.innerHTML = '';
    
    // Create country cards
    availableCountries.forEach(country => {
        const deviceCount = deviceData.filter(device => 
            device.country === country && selectedDeviceTypes.includes(device.type)
        ).length;
        
        const cityCount = countryData[country] ? countryData[country].length : 1;
        
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.dataset.country = country;
        card.innerHTML = `
            <div class="card-icon">
                <i class="fas fa-globe"></i>
            </div>
            <div class="card-content">
                <h3>${country}</h3>
                <p>${cityCount} ${cityCount === 1 ? 'city' : 'cities'}</p>
                <span class="device-count">${deviceCount} devices</span>
            </div>
            <div class="card-checkbox">
                <input type="checkbox" id="country-${country.replace(/\s+/g, '')}" value="${country}">
            </div>
        `;
        
        // Add click event
        card.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return;
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            toggleCountry(country, checkbox.checked);
        });
        
        // Add checkbox event
        card.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            toggleCountry(country, this.checked);
        });
        
        countryGrid.appendChild(card);
    });
    
    // Setup search functionality
    setupCountrySearch();
    
    // Reset selections
    selectedCountries = [];
    updateCountryButton();
}

function toggleCountry(country, isChecked) {
    const card = document.querySelector(`[data-country="${country}"]`);
    
    if (isChecked) {
        if (!selectedCountries.includes(country)) {
            selectedCountries.push(country);
        }
        card.classList.add('selected');
    } else {
        selectedCountries = selectedCountries.filter(c => c !== country);
        card.classList.remove('selected');
    }
    
    updateCountryButton();
    clearError('country');
}

function updateCountryButton() {
    const button = document.getElementById('countryNext');
    button.disabled = selectedCountries.length === 0;
}

function setupCountrySearch() {
    const searchInput = document.getElementById('countrySearch');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('#countryGrid .selection-card');
        
        cards.forEach(card => {
            const countryName = card.querySelector('h3').textContent.toLowerCase();
            if (countryName.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ===== CITY SELECTION =====
function loadCitySelections() {
    const citySelections = document.getElementById('citySelections');
    citySelections.innerHTML = '';
    
    // Clear previous city selections
    selectedCities = [];
    
    // Get countries that actually have devices with selected device types
    const validCountries = selectedCountries.filter(country => 
        deviceData.some(device => 
            device.country === country && 
            selectedDeviceTypes.includes(device.type)
        )
    );
    
    validCountries.forEach(country => {
        // Get cities for this country that have devices of selected types
        const availableCities = [...new Set(
            deviceData
                .filter(device => 
                    device.country === country && 
                    selectedDeviceTypes.includes(device.type)
                )
                .map(device => device.city)
        )].sort();
        
        if (availableCities.length > 0) {
            const citySection = document.createElement('div');
            citySection.className = 'city-section';
            citySection.innerHTML = `
                <h4>${country} Cities</h4>
                <div class="selection-grid">
                    ${availableCities.map(city => {
                        const deviceCount = deviceData.filter(device => 
                            device.country === country && 
                            device.city === city && 
                            selectedDeviceTypes.includes(device.type)
                        ).length;
                        
                        return `
                            <div class="selection-card" data-city="${city}" data-country="${country}">
                                <div class="card-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="card-content">
                                    <h3>${city}</h3>
                                    <p>${country}</p>
                                    <span class="device-count">${deviceCount} devices</span>
                                </div>
                                <div class="card-checkbox">
                                    <input type="checkbox" id="city-${city}-${country.replace(/\s+/g, '')}" value="${city}">
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            
            // Add event listeners to city cards
            citySection.querySelectorAll('.selection-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    if (e.target.type === 'checkbox') return;
                    
                    const checkbox = this.querySelector('input[type="checkbox"]');
                    const city = this.dataset.city;
                    
                    checkbox.checked = !checkbox.checked;
                    toggleCity(city, checkbox.checked);
                });
                
                card.querySelector('input[type="checkbox"]').addEventListener('change', function() {
                    const city = card.dataset.city;
                    toggleCity(city, this.checked);
                });
            });
            
            citySelections.appendChild(citySection);
        }
    });
    
    updateCityButton();
}

function toggleCity(city, isChecked) {
    const card = document.querySelector(`[data-city="${city}"]`);
    
    if (isChecked) {
        if (!selectedCities.includes(city)) {
            selectedCities.push(city);
        }
        card.classList.add('selected');
    } else {
        selectedCities = selectedCities.filter(c => c !== city);
        card.classList.remove('selected');
    }
    
    updateCityButton();
    clearError('city');
}

function updateCityButton() {
    const button = document.getElementById('cityNext');
    button.disabled = selectedCities.length === 0;
}

// ===== DEVICE FILTERING =====
function setupDeviceFilters() {
    document.querySelectorAll('.filter-item').forEach(item => {
        item.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            const filterType = this.dataset.filter;
            
            checkbox.checked = !checkbox.checked;
            toggleFilter(filterType, checkbox.checked);
        });
        
        item.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            const filterType = item.dataset.filter;
            toggleFilter(filterType, this.checked);
        });
    });
}

function toggleFilter(filterType, isActive) {
    const filterItem = document.querySelector(`[data-filter="${filterType}"]`);
    
    if (isActive) {
        if (!activeFilters.includes(filterType)) {
            activeFilters.push(filterType);
        }
        filterItem.classList.add('active');
    } else {
        activeFilters = activeFilters.filter(f => f !== filterType);
        filterItem.classList.remove('active');
    }
    
    loadDevices();
}

// ===== DEVICE SELECTION =====
function loadDevices() {
    let filteredDevices = deviceData.filter(device => 
        selectedDeviceTypes.includes(device.type) && 
        selectedCountries.includes(device.country) &&
        selectedCities.includes(device.city)
    );
    
    // Apply filters
    if (activeFilters.includes('audio')) {
        filteredDevices = filteredDevices.filter(device => device.audio);
    }
    if (activeFilters.includes('wifi')) {
        filteredDevices = filteredDevices.filter(device => device.network === 'WiFi');
    }
    if (activeFilters.includes('sim')) {
        filteredDevices = filteredDevices.filter(device => device.network === 'SIM');
    }
    
    const deviceList = document.getElementById('deviceList');
    deviceList.innerHTML = '';
    
    if (filteredDevices.length === 0) {
        deviceList.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>No devices match your current selection and filters.</p>
                <p>Try adjusting your filters or selection criteria.</p>
            </div>
        `;
        return;
    }
    
    filteredDevices.forEach(device => {
        const isSelected = selectedDevices[device.id] === 1;
        const deviceItem = document.createElement('div');
        deviceItem.className = `device-item ${isSelected ? 'selected' : ''}`;
        deviceItem.innerHTML = `
            <input type="checkbox" class="device-checkbox" id="device-${device.id}" ${isSelected ? 'checked' : ''}>
            <div class="device-info">
                <h4>${device.name}</h4>
                <p>${device.city}, ${device.country}</p>
                <div class="device-tags">
                    <span class="tag ${device.network.toLowerCase()}">${device.network}</span>
                    <span class="tag ${device.audio ? 'audio' : ''}">${device.audio ? 'Audio' : 'No Audio'}</span>
                </div>
            </div>
        `;
        
        // Add click event
        deviceItem.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return;
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            toggleDevice(device.id, checkbox.checked);
        });
        
        // Add checkbox event
        deviceItem.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            toggleDevice(device.id, this.checked);
        });
        
        deviceList.appendChild(deviceItem);
    });
    
    updateDeviceButton();
}

function toggleDevice(deviceId, isSelected) {
    const deviceItem = document.querySelector(`#device-${deviceId}`).closest('.device-item');
    
    if (isSelected) {
        selectedDevices[deviceId] = 1;
        deviceItem.classList.add('selected');
    } else {
        delete selectedDevices[deviceId];
        deviceItem.classList.remove('selected');
    }
    
    updateDeviceButton();
    clearError('device');
}

function updateDeviceButton() {
    const button = document.getElementById('deviceNext');
    button.disabled = Object.keys(selectedDevices).length === 0;
}

// ===== PRICING & PLAN SELECTION =====
function setupPlanSelection() {
    document.querySelectorAll('.plan-card').forEach(card => {
        card.addEventListener('click', function() {
            const plan = this.dataset.plan;
            selectPlan(plan);
        });
    });
}

function selectPlan(plan) {
    selectedPlan = plan;
    
    // Update UI
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-plan="${plan}"]`).classList.add('selected');
    
    updateAddonPricing();
    updatePricingSummary();
}

function setupAddonSelection() {
    document.querySelectorAll('.addon-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.type === 'checkbox') return;
            
            const checkbox = this.querySelector('input[type="checkbox"]');
            const addon = this.dataset.addon;
            
            checkbox.checked = !checkbox.checked;
            toggleAddon(addon, checkbox.checked);
        });
        
        card.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            const addon = card.dataset.addon;
            toggleAddon(addon, this.checked);
        });
    });
}

function toggleAddon(addon, isSelected) {
    const card = document.querySelector(`[data-addon="${addon}"]`);
    
    if (isSelected) {
        if (!selectedAddons.includes(addon)) {
            selectedAddons.push(addon);
        }
        card.classList.add('selected');
    } else {
        selectedAddons = selectedAddons.filter(a => a !== addon);
        card.classList.remove('selected');
    }
    
    updateDiscountDisplay();
    updatePricingSummary();
}

function updateAddonPricing() {
    const automationPrice = document.getElementById('automation-price');
    const experiencePrice = document.getElementById('experience-price');
    const performancePrice = document.getElementById('performance-price');
    
    if (selectedPlan === 'yearly') {
        if (automationPrice) automationPrice.textContent = '$200/device/year';
        if (experiencePrice) experiencePrice.textContent = '$200/device/year';
        if (performancePrice) performancePrice.textContent = '$200/device/year';
    } else {
        if (automationPrice) automationPrice.textContent = '$100/device/month';
        if (experiencePrice) experiencePrice.textContent = '$100/device/month';
        if (performancePrice) performancePrice.textContent = '$100/device/month';
    }
}

function updateDiscountDisplay() {
    const discountDisplay = document.getElementById('discountDisplay');
    const addonCount = selectedAddons.length;
    
    if (!discountDisplay) return;
    
    if (addonCount === 0) {
        discountDisplay.classList.remove('show');
        discountDisplay.innerHTML = '';
    } else if (addonCount === 2) {
        discountDisplay.classList.add('show');
        discountDisplay.innerHTML = '<i class="fas fa-tag"></i> 25% DISCOUNT APPLIED!<br>Two add-ons selected';
    } else if (addonCount === 3) {
        discountDisplay.classList.add('show');
        discountDisplay.innerHTML = '<i class="fas fa-gift"></i> SPECIAL BUNDLE PRICING!<br>All three add-ons selected';
    } else {
        discountDisplay.classList.remove('show');
        discountDisplay.innerHTML = '';
    }
}

function calculateAddonTotal(deviceCount) {
    if (selectedAddons.length === 0) {
        return 0;
    }
    
    const addonCount = selectedAddons.length;
    let addonPricePerDevice = 0;
    
    if (selectedPlan === 'yearly') {
        if (addonCount === 1) {
            addonPricePerDevice = 200;
        } else if (addonCount === 2) {
            addonPricePerDevice = 300; // Discounted price for 2 addons
        } else if (addonCount === 3) {
            addonPricePerDevice = 500; // Special bundle price for 3 addons
        }
    } else { // monthly
        if (addonCount === 1) {
            addonPricePerDevice = 100;
        } else if (addonCount === 2) {
            addonPricePerDevice = 150; // Discounted price for 2 addons
        } else if (addonCount === 3) {
            addonPricePerDevice = 250; // Special bundle price for 3 addons
        }
    }
    
    return deviceCount * addonPricePerDevice;
}

function updatePricingSummary() {
    const deviceCount = Object.keys(selectedDevices).length;
    const devicePrice = selectedPlan === 'monthly' ? 300 : 1500;
    
    let deviceTotal = deviceCount * devicePrice;
    let addonTotal = calculateAddonTotal(deviceCount);
    
    totalAmount = deviceTotal + addonTotal;
    
    // Create addon description for summary
    let addonDescription = '';
    if (selectedAddons.length > 0) {
        const addonNames = {
            'automation': 'Automation+',
            'experience': 'Experience+', 
            'performance': 'Performance+'
        };
        const selectedAddonNames = selectedAddons.map(addon => addonNames[addon]);
        
        let discountNote = '';
        if (selectedAddons.length === 2) {
            discountNote = ' (25% discount applied)';
        } else if (selectedAddons.length === 3) {
            discountNote = ' (special bundle pricing)';
        }
        
        addonDescription = `<p><strong>${selectedAddonNames.join(', ')}</strong> add-ons × <strong>${deviceCount}</strong> devices = <strong>$${addonTotal.toLocaleString()}</strong>${discountNote}</p>`;
    }
    
    const orderDetails = document.getElementById('orderDetails');
    if (orderDetails) {
        orderDetails.innerHTML = `
            <p><strong>Cloud Test Go</strong> - <strong>${deviceCount}</strong> devices × <strong>$${devicePrice}</strong> = <strong>$${deviceTotal.toLocaleString()}</strong></p>
            ${addonDescription}
        `;
    }
    
    const totalAmountElement = document.getElementById('totalAmount');
    if (totalAmountElement) {
        totalAmountElement.textContent = `$${totalAmount.toLocaleString()}`;
    }
}

// ===== HELPER FUNCTION TO GET DEVICE DETAILS =====
function getSelectedDeviceDetails() {
    const selectedDeviceIds = Object.keys(selectedDevices);
    return selectedDeviceIds.map(deviceId => {
        const device = deviceData.find(d => d.id == deviceId);
        return device ? `${device.name} | ${device.country} | ${device.city}` : '';
    }).filter(detail => detail !== '');
}

// ===== FOXYCART INTEGRATION =====
function populateFoxyCartFields() {
    const deviceCount = Object.keys(selectedDevices).length;
    const devicePrice = selectedPlan === 'monthly' ? 300 : 1500;
    const billingCycle = selectedPlan === 'monthly' ? 'monthly' : 'yearly';
    
    // Calculate addon total
    let addonTotal = calculateAddonTotal(deviceCount);
    
    // Main product details
    const mainProductName = `Cloud Test Go - ${billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)} Plan (${deviceCount} ${deviceCount === 1 ? 'device' : 'devices'})`;
    const mainProductPrice = deviceCount * devicePrice;
    const productCode = `cloudtestgo-${billingCycle}-${deviceCount}dev`;
    
    // Populate main product fields
    document.getElementById('fc-name').value = mainProductName;
    document.getElementById('fc-price').value = mainProductPrice.toFixed(2);
    document.getElementById('fc-code').value = productCode;
    document.getElementById('fc-quantity').value = '1';
    
    // Set subscription frequency for recurring billing
    if (selectedPlan === 'monthly') {
        document.getElementById('fc-sub-frequency').value = '1m'; // Monthly subscription
    } else {
        document.getElementById('fc-sub-frequency').value = '1y'; // Yearly subscription
    }
    
    // Customer information
    const fullName = document.getElementById('fullName').value;
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    document.getElementById('fc-customer-first-name').value = firstName;
    document.getElementById('fc-customer-last-name').value = lastName;
    document.getElementById('fc-customer-email').value = document.getElementById('businessEmail').value;
    document.getElementById('fc-customer-phone').value = document.getElementById('phoneNumber').value;
    
    // Order metadata
    document.getElementById('fc-organization').value = document.getElementById('organizationName').value;
    document.getElementById('fc-device-types').value = selectedDeviceTypes.join(', ');
    document.getElementById('fc-selected-countries').value = selectedCountries.join(', ');
    document.getElementById('fc-selected-cities').value = selectedCities.join(', ');
    document.getElementById('fc-device-count').value = deviceCount.toString();
    document.getElementById('fc-billing-cycle').value = billingCycle;
    
    // Updated addon names with + suffix for FoxyCart
    const addonNames = {
        'automation': 'automation+',
        'experience': 'experience+', 
        'performance': 'performance+'
    };
    const selectedAddonNames = selectedAddons.map(addon => addonNames[addon]);
    document.getElementById('fc-selected-addons').value = selectedAddonNames.join(', ');
    
    document.getElementById('fc-active-filters').value = activeFilters.join(', ');
    
    // Store device details in a more readable format for FoxyCart
    const deviceDetails = getSelectedDeviceDetails();
    document.getElementById('fc-selected-devices-json').value = deviceDetails.join('; ');
    
    // Add-ons as second product (if any selected)
    if (selectedAddons.length > 0) {
        const selectedAddonNamesForProduct = selectedAddons.map(addon => {
            const names = {
                'automation': 'Automation+',
                'experience': 'Experience+', 
                'performance': 'Performance+'
            };
            return names[addon];
        });
        const addonProductName = `Add-ons: ${selectedAddonNamesForProduct.join(', ')} - ${billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)} (${deviceCount} ${deviceCount === 1 ? 'device' : 'devices'})`;
        const addonCode = `addons-${selectedAddons.join('-')}-${billingCycle}-${deviceCount}dev`;
        
        document.getElementById('fc-addon-name').value = addonProductName;
        document.getElementById('fc-addon-price').value = addonTotal.toFixed(2);
        document.getElementById('fc-addon-code').value = addonCode;
        document.getElementById('fc-addon-quantity').value = '1';
    } else {
        // Clear addon fields if no addons selected
        document.getElementById('fc-addon-name').value = '';
        document.getElementById('fc-addon-price').value = '';
        document.getElementById('fc-addon-code').value = '';
        document.getElementById('fc-addon-quantity').value = '';
    }
}

// ===== PAYMENT & COMPLETION =====
function proceedToPayment() {
    nextStep(7);
}

function loadFinalSummary() {
    const finalSummary = document.getElementById('finalOrderSummary');
    const deviceCount = Object.keys(selectedDevices).length;
    const devicePrice = selectedPlan === 'monthly' ? 300 : 1500;
    
    // Get selected device details
    const deviceDetails = getSelectedDeviceDetails();
    let deviceDetailsHtml = '';
    if (deviceDetails.length > 0) {
        deviceDetailsHtml = `
            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                ${deviceDetails.map((detail, index) => `<div>Device ${index + 1}: ${detail}</div>`).join('')}
            </div>
        `;
    }
    
    // Create addon description
    let addonSummary = '';
    if (selectedAddons.length > 0) {
        const addonNames = {
            'automation': 'Automation+',
            'experience': 'Experience+', 
            'performance': 'Performance+'
        };
        const selectedAddonNames = selectedAddons.map(addon => addonNames[addon]);
        addonSummary = `<p><strong>Add-ons:</strong> ${selectedAddonNames.join(', ')}</p>`;
    }
    
    finalSummary.innerHTML = `
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1rem;">
            <h4>Contact Information</h4>
            <p><strong>Name:</strong> ${document.getElementById('fullName').value}</p>
            <p><strong>Email:</strong> ${document.getElementById('businessEmail').value}</p>
            <p><strong>Phone:</strong> ${document.getElementById('phoneNumber').value}</p>
            <p><strong>Organization:</strong> ${document.getElementById('organizationName').value}</p>
        </div>
        
        <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1rem;">
            <h4>Cloud Test Go - Order Summary</h4>
            <p><strong>Device Types:</strong> ${selectedDeviceTypes.join(', ')}</p>
            <p><strong>Countries:</strong> ${selectedCountries.join(', ')}</p>
            <p><strong>Cities:</strong> ${selectedCities.join(', ')}</p>
            <p><strong>Selected Devices:</strong> ${deviceCount}${deviceDetailsHtml}</p>
            <p><strong>Plan:</strong> ${selectedPlan === 'yearly' ? 'Yearly' : 'Monthly'} (${devicePrice}/${selectedPlan === 'yearly' ? 'year' : 'month'})</p>
            ${addonSummary}
        </div>
        
        <div style="background: var(--primary-color); color: white; padding: 1.5rem; border-radius: var(--border-radius); text-align: center;">
            <h4>Total Amount: ${totalAmount.toLocaleString()}</h4>
        </div>
    `;
    
    // Populate FoxyCart fields
    populateFoxyCartFields();
}

// ===== ENTER KEY NAVIGATION FIX =====
function setupEnterKeyNavigation() {
    // Prevent Enter from submitting form unless on final step
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && currentStep < 7) {
            e.preventDefault();
            
            // Get the currently focused element
            const focusedElement = document.activeElement;
            
            // If it's an input field in step 1-6, trigger next step
            if (focusedElement && focusedElement.tagName === 'INPUT') {
                if (currentStep === 6) {
                    proceedToPayment();
                } else if (validateCurrentStep()) {
                    nextStep(currentStep + 1);
                }
            }
        }
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize progress bar
    updateProgressBar();
    
    // Setup event listeners
    setupDeviceTypeSelection();
    setupDeviceFilters();
    setupPlanSelection();
    setupAddonSelection();
    
    // Set default plan
    selectPlan('yearly');
    
    // Setup Enter key navigation
    setupEnterKeyNavigation();
    
    // Add form submission handler
    const form = document.getElementById('foxycart-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Only allow submission on step 7
            if (currentStep < 7) {
                e.preventDefault();
                return false;
            }
            
            // Make sure all FoxyCart fields are populated before submission
            populateFoxyCartFields();
            
            return true;
        });
    }
    
    console.log('Purchase Cloud Test Go with FoxyCart initialized successfully!');
});

// ===== WINDOW FUNCTIONS (for HTML onclick events) =====
window.nextStep = nextStep;
window.prevStep = prevStep;
window.proceedToPayment = proceedToPayment;