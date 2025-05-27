
function performSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    const mockData = [
        { name: "Samsung 65" 4K TV", price: "$599", store: "Walmart" },
        { name: "LG Refrigerator", price: "$899", store: "Home Depot" },
        { name: "Apple AirPods Pro", price: "$199", store: "Target" },
        { name: "Ryobi Drill Kit", price: "$89", store: "Lowe's" },
        { name: "HP Laptop", price: "$429", store: "Amazon" }
    ];

    const filtered = mockData.filter(item => item.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
    } else {
        resultsDiv.innerHTML = filtered.map(item => 
            `<div><strong>${item.name}</strong><br>Price: ${item.price}<br>Store: ${item.store}</div><br>`
        ).join('');
    }
}
