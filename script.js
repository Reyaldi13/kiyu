const inventory = [
  { id: 1, name: "Smartphone Samsung Galaxy A14", price: 2500000, stock: 20 },
  { id: 2, name: "Laptop ASUS VivoBook", price: 8000000, stock: 10 },
  { id: 3, name: "Headphone Sony WH-1000XM4", price: 4500000, stock: 15 },
  { id: 4, name: "TV LG 43 inch UHD", price: 5500000, stock: 7 },
  { id: 5, name: "Smartwatch Xiaomi Mi Watch", price: 1500000, stock: 25 },
  { id: 6, name: "Powerbank Anker 20000mAh", price: 500000, stock: 30 },
  { id: 7, name: "Kipas Angin Dyson", price: 5000000, stock: 5 },
  { id: 8, name: "Soundbar Samsung HW-A450", price: 1800000, stock: 8 },
  { id: 9, name: "Kamera Canon EOS 2000D", price: 7000000, stock: 3 },
  { id: 10, name: "Printer Epson EcoTank L3150", price: 2400000, stock: 12 },
  { id: 11, name: "Kulkas Samsung 2 Pintu", price: 6000000, stock: 4 },
  { id: 12, name: "Mesin Cuci LG Front Load", price: 7500000, stock: 6 },
  { id: 13, name: "Kamera GoPro Hero 11", price: 7500000, stock: 7 },
  { id: 14, name: "Projector Epson EH-TW6100", price: 15000000, stock: 2 },
  { id: 15, name: "Smartphone iPhone 13", price: 12000000, stock: 10 },
  { id: 16, name: "Smartphone Xiaomi Redmi Note 11", price: 3500000, stock: 30 },
  { id: 17, name: "Speaker Bluetooth JBL Flip 5", price: 2000000, stock: 18 },
  { id: 18, name: "Kulkas 1 Pintu Sharp", price: 3500000, stock: 8 },
  { id: 19, name: "Tablet Samsung Galaxy Tab A7", price: 5000000, stock: 12 },
  { id: 20, name: "Kamera DSLR Nikon D3500", price: 6000000, stock: 4 },
  { id: 21, name: "Smartphone Oppo Reno 8", price: 4000000, stock: 22 },
  { id: 22, name: "Laptop MacBook Air M1", price: 14000000, stock: 5 },
  { id: 23, name: "Drone DJI Mini 3 Pro", price: 12000000, stock: 3 },
  { id: 24, name: "Tablet Apple iPad Air 2022", price: 8000000, stock: 10 },
  { id: 25, name: "Headphone Bose QuietComfort 45", price: 7000000, stock: 6 },
  { id: 26, name: "Kamera Sony Alpha A6000", price: 8500000, stock: 5 },
  { id: 27, name: "Microwave Panasonic 20L", price: 1800000, stock: 8 },
  { id: 28, name: "Action Camera Insta360 One X2", price: 6000000, stock: 4 },
  { id: 29, name: "Smartwatch Garmin Fenix 6X", price: 7500000, stock: 7 },
  { id: 30, name: "Soundbar Sony HT-S350", price: 2500000, stock: 10 },
  { id: 31, name: "Smartphone Vivo V23", price: 5500000, stock: 12 },
  { id: 32, name: "Laptop Lenovo ThinkPad X1", price: 18000000, stock: 3 },
  { id: 33, name: "Kamera Fujifilm X-T30", price: 14000000, stock: 6 },
  { id: 34, name: "TV Samsung 50 inch 4K", price: 8000000, stock: 5 },
  { id: 35, name: "Kulkas LG 1 Pintu", price: 3200000, stock: 9 },
  { id: 36, name: "Mesin Cuci Samsung Top Load", price: 5000000, stock: 4 },
  { id: 37, name: "Proyektor Anker Nebula Capsule", price: 4500000, stock: 6 },
  { id: 38, name: "Smartwatch Apple Watch SE", price: 5500000, stock: 8 },
  { id: 39, name: "Kamera Sony ZV-1", price: 13000000, stock: 4 },
  { id: 40, name: "Headphone Sennheiser Momentum 3", price: 9000000, stock: 3 },
  { id: 41, name: "Drone DJI Air 2S", price: 20000000, stock: 2 },
  { id: 42, name: "TV Sony 55 inch OLED", price: 23000000, stock: 1 },
  { id: 43, name: "Smartphone Realme GT 2 Pro", price: 9000000, stock: 7 },
  { id: 44, name: "Smartphone Google Pixel 6", price: 8000000, stock: 8 },
  { id: 45, name: "Laptop HP Spectre x360", price: 19000000, stock: 3 },
  { id: 46, name: "Tablet Lenovo Tab P11", price: 4000000, stock: 9 },
  { id: 47, name: "Speaker Marshall Kilburn II", price: 6000000, stock: 5 },
  { id: 48, name: "Kamera Panasonic Lumix GH5", price: 20000000, stock: 2 },
  { id: 49, name: "Powerbank Xiaomi 10000mAh", price: 300000, stock: 20 },
  { id: 50, name: "Smartphone OnePlus 9 Pro", price: 11000000, stock: 5 }
];

// Function to display inventory in the table
function displayInventory(items) {
  const tableBody = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  items.forEach(item => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.stock}</td>
    `;
  });
}

// Function to search items by name
function searchItem() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredItems = inventory.filter(item => item.name.toLowerCase().includes(searchInput));
  displayInventory(filteredItems);
}

// Function to sort items by a specific field
function sortItems(field) {
  const sortedItems = [...inventory].sort((a, b) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  });
  displayInventory(sortedItems);
}

// Initialize the table with the full inventory
displayInventory(inventory);
