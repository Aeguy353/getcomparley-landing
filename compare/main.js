
export default function ComparePage() {
  const products = [
    {
      name: "DEWALT 20V MAX Drill (DCD771C2)",
      price: "$99.00",
      rating: 4.6,
      link: "https://www.amazon.com/dp/B00ET5VMTU?tag=comparely0b-20",
      image: "https://m.media-amazon.com/images/I/71J6w7jNcfL._AC_SL1500_.jpg"
    },
    {
      name: "DEWALT XR Brushless Drill (DCD791D2)",
      price: "$199.00",
      rating: 4.7,
      link: "https://www.amazon.com/dp/B0183RLVSQ?tag=comparely0b-20",
      image: "https://m.media-amazon.com/images/I/81uK5BFbKHL._AC_SL1500_.jpg"
    },
    {
      name: "DEWALT Atomic Compact Drill (DCD708C2)",
      price: "$159.94",
      rating: 4.8,
      link: "https://www.amazon.com/dp/B07QJ97BHQ?tag=comparely0b-20",
      image: "https://m.media-amazon.com/images/I/71PAUeZW+oL._AC_SL1500_.jpg"
    }
  ];

  const container = document.createElement('div');
  container.className = 'p-4 max-w-5xl mx-auto';
  container.innerHTML = `
    <h1 class="text-3xl font-bold mb-4">Compare DEWALT Drills</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${products.map(p => `
        <div class="bg-white rounded shadow p-4">
          <img src="${p.image}" alt="${p.name}" class="mb-4 h-40 w-full object-contain" />
          <h2 class="text-lg font-semibold mb-2">${p.name}</h2>
          <p class="text-gray-700 mb-1">Price: ${p.price}</p>
          <p class="text-gray-700 mb-3">Rating: ${p.rating} stars</p>
          <a href="${p.link}" target="_blank" class="inline-block bg-yellow-500 text-white px-4 py-2 rounded">View on Amazon</a>
        </div>
      `).join('')}
    </div>
  `;
  return container;
}
