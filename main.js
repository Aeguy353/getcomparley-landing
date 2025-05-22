const drills = [
  {
    model: "DEWALT DCD777C2",
    volts: "20V MAX",
    torque: "500 in-lbs",
    speed: "0-500 / 0-1750 RPM",
    weight: "2.6 lbs",
    price: "$99",
  },
  {
    model: "DEWALT DCD708C2 (Atomic)",
    volts: "20V MAX",
    torque: "575 in-lbs",
    speed: "0-450 / 0-1650 RPM",
    weight: "2.4 lbs",
    price: "$129",
  },
  {
    model: "DEWALT DCD791D2",
    volts: "20V MAX XR",
    torque: "620 in-lbs",
    speed: "0-550 / 0-2000 RPM",
    weight: "3.4 lbs",
    price: "$159",
  },
];

const root = document.getElementById("root");
const table = document.createElement("table");
table.className = "w-full text-sm border border-gray-300 bg-white shadow";

const headers = ["Model", "Volts", "Torque", "Speed", "Weight", "Price"];
const thead = document.createElement("thead");
thead.innerHTML = `<tr class="bg-gray-200">${headers.map(h => `<th class="p-2 border">${h}</th>`).join('')}</tr>`;
table.appendChild(thead);

const tbody = document.createElement("tbody");
drills.forEach(d => {
  const row = `<tr>${headers.map(h => `<td class="p-2 border">${d[h.toLowerCase()]}</td>`).join('')}</tr>`;
  tbody.innerHTML += row;
});

table.appendChild(tbody);
root.appendChild(table);
