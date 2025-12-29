// ============================
// Makhan Shah - Menu Data
// (Grouped from the provided PDF menu)
// ============================

const MENU_SECTIONS = [
  {
    key: "family-packs",
    title: "Family Packs",
    items: [
      { name: "SPL. VEG. FAMILY PACK", price: 610, type: "veg", desc: "(Veg Manchuria, Paneer Butter Masala, Veg Biryani, 6 Roti)" },
      { name: "VEG. FAMILY PACK", price: 430, type: "veg", desc: "(Paneer Butter Masala, Veg Fried Rice, 6 Roti)" },
      { name: "SPL. NON-VEG. FAMILY PACK", price: 740, type: "nonveg", desc: "(Chicken 65, Butter Chicken, 6 Roti, Chicken Biryani)" },
      { name: "NON-VEG. FAMILY PACK", price: 540, type: "nonveg", desc: "(Butter Chicken, Chicken Biryani, 6 Roti)" },

      { name: "CHICKEN BIRYANI FAMILY PACK", price: 480, type: "nonveg" },
      { name: "CHICKEN BIRYANI JUMBO", price: 700, type: "nonveg" },
      { name: "MUTTON BIRYANI FAMILY", price: 550, type: "nonveg" },
      { name: "MUTTON BIRYANI JUMBO", price: 790, type: "nonveg" },
      { name: "CHICKEN HANDI BIRYANI", price: 230, type: "nonveg" },
      { name: "MUTTON HANDI BIRYANI", price: 240, type: "nonveg" },
    ]
  },

  {
    key: "noodles-springroll",
    title: "Noodles, Chopsuey & Spring Rolls",
    items: [
      { name: "EGG SOFT NOODLES", price: 120, type: "nonveg" },
      { name: "VEG SOFT NOODLES", price: 110, type: "veg" },
      { name: "MIXED SOFT NOODLES", price: 160, type: "nonveg" },
      { name: "CHICKEN SOFT NOODLES", price: 130, type: "nonveg" },
      { name: "GARLIC NOODLES (VEG)", price: 120, type: "veg" },
      { name: "GARLIC NOODLES (CHICKEN)", price: 130, type: "nonveg" },
      { name: "VEG CRISPY NOODLES", price: 150, type: "veg" },
      { name: "CHICKEN CRISPY NOODLES", price: 170, type: "nonveg" },
      { name: "VEG AMERICAN CHOPSUEY", price: 150, type: "veg" },
      { name: "CHICKEN AMERICAN CHOPSUEY", price: 170, type: "nonveg" },
      { name: "VEG SPRING ROLL", price: 170, type: "veg" },
      { name: "CHICKEN SPRING ROLL", price: 180, type: "nonveg" },
      { name: "EGG SPRING ROLL", price: 190, type: "nonveg" }
    ]
  },

  {
    key: "veg-starters",
    title: "Veg Starters",
    items: [
      { name: "FRENCH FRIES", price: 80, type: "veg" },
      { name: "PEPPER PANEER", price: 180, type: "veg" },
      { name: "PANEER 65", price: 180, type: "veg" },
      { name: "PANEER CHILLY (WET/DRY)", price: 180, type: "veg" },
      { name: "GARLIC PANEER / MANCHURIA", price: 180, type: "veg" },
      { name: "PANEER MAJESTIC / 555", price: 200, type: "veg" },

      { name: "VEG MANCHURIA / GARLIC / GINGER", price: 150, type: "veg" },
      { name: "VEG 65 / CHILLY", price: 150, type: "veg" },
      { name: "LOOSE VEGETABLES", price: 160, type: "veg" },

      { name: "BABY CORN MANCHURIA / GARLIC / GINGER", price: 180, type: "veg" },
      { name: "BABY CORN MAJESTIC / 555", price: 180, type: "veg" },

      { name: "MUSHROOM MANCHURIA / GARLIC / GINGER", price: 180, type: "veg" },
      { name: "CHILLY MUSHROOM", price: 180, type: "veg" },

      { name: "GOBI MANCHURIA / GINGER / GARLIC / 65", price: 160, type: "veg" },
      { name: "ALU MANCHURIA / GINGER / GARLIC / 65", price: 160, type: "veg" },

      { name: "SHANGAI VEG", price: 170, type: "veg" },
      { name: "CRISPY CORN", price: 170, type: "veg" },
      { name: "HONG KONG POTATO", price: 170, type: "veg" }
    ]
  },

  {
    key: "veg-curries",
    title: "Veg Curries & Gravies",
    items: [
      { name: "ALU MUTTER", price: 160, type: "veg" },
      { name: "ALU CHOLE / ALU PALAK", price: 160, type: "veg" },
      { name: "ALU DUM / ALU GOBI", price: 160, type: "veg" },
      { name: "ALU FRY", price: 160, type: "veg" },
      { name: "ALU PANEER MASALA", price: 180, type: "veg" },
      { name: "ALU JEERA / TOMATO", price: 150, type: "veg" },
      { name: "DAL MAKHANI (BLACK)", price: 120, type: "veg" },
      { name: "DAL FRY", price: 110, type: "veg" },
      { name: "PLAIN PALAK", price: 160, type: "veg" },
      { name: "DAL MAHARANI", price: 130, type: "veg" },
      { name: "PANEER BURJEE", price: 180, type: "veg" },
      { name: "PANEER BUTTER MASALA", price: 190, type: "veg" },
      { name: "VEGETABLE KOFTA", price: 170, type: "veg" },
      { name: "PALAK KOFTA", price: 170, type: "veg" },
      { name: "SWEET CORN MASALA", price: 170, type: "veg" },
      { name: "SWEET CORN PALAK", price: 170, type: "veg" },

      { name: "METHI CHAMAN", price: 190, type: "veg" },
      { name: "MUTTER MUSHROOM MASALA", price: 190, type: "veg" },
      { name: "SHAHI PANEER KURMA", price: 190, type: "veg" },
      { name: "PANEER DO PYAZA", price: 190, type: "veg" },
      { name: "GINGER PANEER", price: 190, type: "veg" },
      { name: "PANEER METHI MALAI", price: 190, type: "veg" },
      { name: "PALAK PANEER", price: 190, type: "veg" },
      { name: "KADAI PANEER", price: 190, type: "veg" },
      { name: "KAJU PANEER", price: 200, type: "veg" },
      { name: "KAJU MASALA", price: 210, type: "veg" },
      { name: "PANEER TIKKA MASALA", price: 190, type: "veg" },

      { name: "CAPSICUM MASALA", price: 160, type: "veg" },
      { name: "VEG KHOLAPURI", price: 170, type: "veg" },
      { name: "VEG JAIPURI", price: 170, type: "veg" },
      { name: "MUTTER PANEER", price: 170, type: "veg" },
      { name: "NAVARATAN KURMA", price: 170, type: "veg" },
      { name: "MALAI KOFTA", price: 170, type: "veg" },

      { name: "GOBI MASALA", price: 160, type: "veg" },
      { name: "MIX VEG", price: 160, type: "veg" },
      { name: "GINGER GOBI", price: 160, type: "veg" },
      { name: "CHANA MASALA", price: 160, type: "veg" },

      { name: "VEG SHAHI KURMA", price: 170, type: "veg" },
      { name: "VEG KADAI", price: 170, type: "veg" },
      { name: "TOMATO CHUTNEY", price: 160, type: "veg" },
      { name: "VEG HARYALI", price: 170, type: "veg" },
      { name: "VEG MAKHAN SHAH", price: 190, type: "veg" },

      { name: "BABY CORN MASALA", price: 180, type: "veg" },
      { name: "MUSHROOM MASALA / KADAI", price: 180, type: "veg" },
      { name: "BUTTER MUSHROOM", price: 180, type: "veg" }
    ]
  },

  {
    key: "nonveg-starters",
    title: "Non-Veg Starters (Chicken & Mutton)",
    items: [
      { name: "YOGA CHICKEN", price: 190, type: "nonveg" },
      { name: "MEXICAN CHICKEN", price: 190, type: "nonveg" },
      { name: "CHICKEN MANCHURIA / GINGER", price: 190, type: "nonveg" },
      { name: "CHILLI CHICKEN", price: 190, type: "nonveg" },
      { name: "CHICKEN 65", price: 190, type: "nonveg" },
      { name: "CHICKEN MAJESTIC / 555", price: 200, type: "nonveg" },
      { name: "PEPPER CHICKEN", price: 190, type: "nonveg" },
      { name: "CHICKEN DRUMSTICK", price: 190, type: "nonveg" },
      { name: "HONG KONG CHICKEN", price: 190, type: "nonveg" },
      { name: "SHEZWAN CHICKEN", price: 190, type: "nonveg" },

      { name: "GARLIC MUTTON", price: 210, type: "nonveg" },
      { name: "PEPPER MUTTON", price: 210, type: "nonveg" },
      { name: "MUTTON MANCHURIA", price: 210, type: "nonveg" },
      { name: "MUTTON 65", price: 210, type: "nonveg" },
      { name: "CHILLI MUTTON", price: 210, type: "nonveg" },
      { name: "HONG KONG MUTTON", price: 210, type: "nonveg" },
      { name: "SHEZWAN MUTTON", price: 210, type: "nonveg" }
    ]
  },

  {
    key: "seafood-starters",
    title: "Seafood Starters (Prawns & Fish)",
    items: [
      { name: "GINGER PRAWNS", price: 210, type: "nonveg" },
      { name: "LOOSE PRAWNS", price: 210, type: "nonveg" },
      { name: "PRAWNS MANCHURIA", price: 210, type: "nonveg" },
      { name: "CHILLI PRAWNS", price: 210, type: "nonveg" },
      { name: "PEPPER PRAWNS", price: 210, type: "nonveg" },
      { name: "PRAWNS 65", price: 210, type: "nonveg" },
      { name: "SCHEZWAN PRAWNS", price: 210, type: "nonveg" },
      { name: "GARLIC PRAWNS", price: 210, type: "nonveg" },
      { name: "HONG KONG PRAWNS", price: 210, type: "nonveg" },

      { name: "APOLLO FISH", price: 210, type: "nonveg" },
      { name: "FISH TIKKA", price: 300, type: "nonveg" },
      { name: "SCHEZWAN FISH", price: 210, type: "nonveg" },
      { name: "CHILLY FISH", price: 210, type: "nonveg" },
      { name: "PEPPER FISH", price: 210, type: "nonveg" },
      { name: "FISH MANCHURIA", price: 210, type: "nonveg" },
      { name: "FISH MAJESTIC", price: 210, type: "nonveg" },
      { name: "FISH 555", price: 210, type: "nonveg" },
      { name: "GINGER FISH", price: 210, type: "nonveg" },
      { name: "HONG KONG FISH", price: 210, type: "nonveg" },
      { name: "GARLIC FISH", price: 210, type: "nonveg" }
    ]
  },

  {
    key: "chicken-curries",
    title: "Chicken Curries",
    items: [
      { name: "CHICKEN CURRY", price: 190, type: "nonveg" },
      { name: "CHICKEN MASALA", price: 190, type: "nonveg" },
      { name: "GINGER CHICKEN", price: 210, type: "nonveg" },
      { name: "BUTTER CHICKEN", price: 210, type: "nonveg" },
      { name: "PUNJABI CHICKEN", price: 210, type: "nonveg" },
      { name: "CHICKEN MUGHALI", price: 210, type: "nonveg" },
      { name: "CHICKEN KADAI", price: 210, type: "nonveg" },
      { name: "CHICKEN SAGWALA", price: 210, type: "nonveg" },
      { name: "CHICKEN HARYALI", price: 210, type: "nonveg" },
      { name: "METHI CHICKEN", price: 210, type: "nonveg" },
      { name: "CHICKEN MAKHANWALA", price: 210, type: "nonveg" },
      { name: "CHICKEN SHAHI KURMA", price: 210, type: "nonveg" },
      { name: "CHICKEN AFGANI", price: 210, type: "nonveg" },
      { name: "CHICKEN DO-PYAZA", price: 210, type: "nonveg" },
      { name: "CHICKEN TIKKA MASALA", price: 210, type: "nonveg" },
      { name: "CHICKEN ROGAN JOSH", price: 210, type: "nonveg" },
      { name: "CHICKEN MAKHAN SHAH", price: 210, type: "nonveg" },
      { name: "CHICKEN HYDERABAD", price: 210, type: "nonveg" },
      { name: "ANDHRA CHICKEN", price: 210, type: "nonveg" },
      { name: "ACHARI CHICKEN", price: 210, type: "nonveg" },
      { name: "CHICKEN KOFTA", price: 210, type: "nonveg" },
      { name: "CHICKEN KHOLA PURI", price: 210, type: "nonveg" }
    ]
  },

  {
    key: "mutton-seafood-curries",
    title: "Mutton & Seafood Curries",
    items: [
      { name: "MUTTON CURRY / MASALA", price: 220, type: "nonveg" },
      { name: "MUTTON ROGAN JOSH", price: 220, type: "nonveg" },
      { name: "MUTTON SAGWALA", price: 220, type: "nonveg" },
      { name: "BUTTER MUTTON", price: 220, type: "nonveg" },
      { name: "GINGER MUTTON", price: 220, type: "nonveg" },
      { name: "MUTTON MUGHLAI", price: 220, type: "nonveg" },
      { name: "MUTTON KADAI", price: 220, type: "nonveg" },
      { name: "MUTTON SHAHI KURMA", price: 220, type: "nonveg" },
      { name: "MUTTON HARIYALI", price: 220, type: "nonveg" },
      { name: "ACHARI MUTTON", price: 220, type: "nonveg" },
      { name: "METHI MUTTON", price: 220, type: "nonveg" },
      { name: "MUTTON KHOLAPURI", price: 220, type: "nonveg" },
      { name: "MUTTON AFGAN", price: 220, type: "nonveg" },

      { name: "FISH CURRY", price: 220, type: "nonveg" },
      { name: "FISH MASALA", price: 220, type: "nonveg" },
      { name: "FISH KADI", price: 220, type: "nonveg" },
      { name: "GINGER FISH (CURRY)", price: 220, type: "nonveg" },

      { name: "PRAWNS MASALA", price: 220, type: "nonveg" },
      { name: "KADI PRAWNS", price: 220, type: "nonveg" },
      { name: "GINGER PRAWNS (CURRY)", price: 220, type: "nonveg" }
    ]
  },

  {
    key: "rice",
    title: "Rice",
    items: [
      { name: "CORN FRIED RICE", price: 120, type: "veg" },
      { name: "ZEERA RICE", price: 120, type: "veg" },
      { name: "CURD RICE", price: 80, type: "veg" },
      { name: "VEG FRIED RICE / GINGER / GARLIC", price: 120, type: "veg" },
      { name: "EGG FRIED RICE / GINGER / GARLIC", price: 130, type: "nonveg" },
      { name: "CHICKEN FRIED RICE / GINGER / GARLIC", price: 140, type: "nonveg" },
      { name: "MIXED FRIED RICE (EGG MUTTON CHICKEN)", price: 150, type: "nonveg" },
      { name: "PUNJABI FRIED RICE (VEG)", price: 130, type: "veg" },
      { name: "PUNJABI FRIED RICE (NON-VEG)", price: 150, type: "nonveg" },
      { name: "PLAIN RICE", price: 70, type: "veg" },
      { name: "VEG PULAO", price: 140, type: "veg" },
      { name: "GREEN PEAS PULAO", price: 140, type: "veg" },
      { name: "PANEER PULAO", price: 140, type: "veg" },
      { name: "KAJU PULAO", price: 170, type: "veg" }
    ]
  },

  {
    key: "eggs-raita-drinks",
    title: "Eggs, Raita, Salad & Drinks",
    items: [
      { name: "OMLET", price: 45, type: "nonveg" },
      { name: "EGG BURJEE", price: 120, type: "nonveg" },
      { name: "EGG CURRY", price: 140, type: "nonveg" },
      { name: "EGG KEEMA", price: 140, type: "nonveg" },
      { name: "GINGER EGG", price: 140, type: "nonveg" },
      { name: "EGG 65", price: 160, type: "nonveg" },
      { name: "CHILLY EGG", price: 160, type: "nonveg" },
      { name: "EGG MANCHURIA / GARLIC", price: 160, type: "nonveg" },

      { name: "PLAIN CURD", price: 40, type: "veg" },
      { name: "MIX RAITA", price: 55, type: "veg" },
      { name: "BOONDI RAITA", price: 55, type: "veg" },

      { name: "MASALA PAPAD", price: 45, type: "veg" },
      { name: "FRY PAPAD", price: 25, type: "veg" },
      { name: "ROAST PAPAD", price: 25, type: "veg" },
      { name: "GREEN SALAD", price: 70, type: "veg" },
      { name: "FRUIT SALAD", price: 80, type: "veg" },

      { name: "BUTTER MILK", price: 40, type: "veg" },
      { name: "LASSI", price: 45, type: "veg" },
      { name: "LEMON WATER (SWEET)", price: 35, type: "veg" },
      { name: "SOFT DRINK", price: 15, type: "veg" },
      { name: "MINERAL WATER", price: 20, type: "veg" }
    ]
  },

  {
    key: "biryani-tandoori",
    title: "Biryani & Tandoori Specials",
    items: [
      { name: "CHICKEN BIRYANI", price: 220, type: "nonveg" },
      { name: "MUTTON BIRYANI", price: 230, type: "nonveg" },
      { name: "EGG BIRYANI", price: 150, type: "nonveg" },
      { name: "VEG BIRYANI", price: 140, type: "veg" },
      { name: "SPECIAL CHICKEN BIRYANI", price: 240, type: "nonveg" },
      { name: "SPECIAL MUTTON BIRYANI", price: 250, type: "nonveg" },
      { name: "FISH / PRAWNS BIRYANI", price: 240, type: "nonveg" },
      { name: "PANEER BIRYANI", price: 160, type: "veg" },
      { name: "KAJU BIRYANI", price: 180, type: "veg" },

      { name: "TANDOORI WINGS (6 PCS)", price: 220, type: "nonveg" },
      { name: "CHICKEN SHEEKH KABAB", price: 240, type: "nonveg" },

      { name: "TANDOORI CHICKEN (SMALL)", price: 180, type: "nonveg" },
      { name: "TANDOORI CHICKEN (FULL)", price: 320, type: "nonveg" },

      { name: "QUALMI KABAB (SMALL)", price: 160, type: "nonveg" },
      { name: "QUALMI KABAB (FULL)", price: 270, type: "nonveg" },

      { name: "TANGDI KABAB (SMALL)", price: 160, type: "nonveg" },
      { name: "TANGDI KABAB (FULL)", price: 270, type: "nonveg" },

      { name: "CHICKEN TIKKA (SMALL)", price: 160, type: "nonveg" },
      { name: "CHICKEN TIKKA (FULL)", price: 270, type: "nonveg" },

      { name: "PANEER TIKKA", price: 180, type: "veg" },

      { name: "RESHMI KABAB (SMALL)", price: 160, type: "nonveg" },
      { name: "RESHMI KABAB (FULL)", price: 270, type: "nonveg" },

      { name: "GRILL CHICKEN (SMALL)", price: 160, type: "nonveg" },
      { name: "GRILL CHICKEN (FULL)", price: 280, type: "nonveg" },

      { name: "LASSOONI TIKKA (SMALL)", price: 160, type: "nonveg" },
      { name: "LASSOONI TIKKA (FULL)", price: 280, type: "nonveg" },

      { name: "CHICKEN BANJARA KABAB (SMALL)", price: 160, type: "nonveg" },
      { name: "CHICKEN BANJARA KABAB (FULL)", price: 280, type: "nonveg" },

      { name: "HARIYARI CHICKEN KABAB (SMALL)", price: 160, type: "nonveg" },
      { name: "HARIYARI CHICKEN KABAB (FULL)", price: 280, type: "nonveg" },

      { name: "ACHARI TIKKA (SMALL)", price: 160, type: "nonveg" },
      { name: "ACHARI TIKKA (FULL)", price: 280, type: "nonveg" }
    ]
  },

  {
    key: "breads",
    title: "Breads",
    items: [
      { name: "TANDOORI ROTI", price: 16, type: "veg" },
      { name: "BUTTER ROTI", price: 20, type: "veg" },
      { name: "PLAIN NAAN", price: 30, type: "veg" },
      { name: "BUTTER NAAN", price: 35, type: "veg" },
      { name: "GARLIC NAAN", price: 50, type: "veg" },
      { name: "VEG STUFFED NAAN", price: 50, type: "veg" },
      { name: "KEEMA NAAN", price: 75, type: "nonveg" },
      { name: "KEEMA PARATHA", price: 65, type: "nonveg" },
      { name: "ALU PARATHA", price: 40, type: "veg" },
      { name: "GOBI PARATHA", price: 40, type: "veg" },
      { name: "MOOLI PARATHA", price: 40, type: "veg" },
      { name: "PANEER PARATHA", price: 45, type: "veg" },
      { name: "MASALA KULCHA", price: 45, type: "veg" },
      { name: "LACHA PARATHA", price: 25, type: "veg" },
      { name: "PUDINA PARATHA", price: 30, type: "veg" },
      { name: "RUMALI ROTI", price: 16, type: "veg" }
    ]
  }
];


// ====== KEEP YOUR MENU_SECTIONS ARRAY ABOVE THIS LINE ======
// (Use the same MENU_SECTIONS you already have)

// ============================
// UI Logic (Section Buttons + Dropdowns)
// ============================

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const yearEl = document.getElementById("year");

const sectionButtons = document.getElementById("sectionButtons");
const dropdownWrap = document.getElementById("dropdownWrap");

const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

let activeFilter = "all";
let searchTerm = "";
let openSectionKey = null; // one dropdown open at a time

function formatINR(n){ return `₹${Number(n).toFixed(0)}`; }

function matchesFilter(item){
  if(activeFilter === "all") return true;
  if(activeFilter === "veg") return item.type === "veg";
  if(activeFilter === "nonveg") return item.type === "nonveg";
  return true;
}

function matchesSearch(item){
  if(!searchTerm) return true;
  const hay = `${item.name} ${item.desc || ""}`.toLowerCase();
  return hay.includes(searchTerm.toLowerCase());
}

function visibleItems(section){
  return section.items.filter(it => matchesFilter(it) && matchesSearch(it));
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSectionButtons(){
  sectionButtons.innerHTML = "";

  MENU_SECTIONS.forEach(sec => {
    const count = visibleItems(sec).length;
    if(count === 0) return;

    const btn = document.createElement("button");
    btn.className = "sbtn" + (openSectionKey === sec.key ? " active" : "");
    btn.type = "button";
    btn.textContent = `${sec.title} (${count})`;

    btn.addEventListener("click", () => {
      openSectionKey = (openSectionKey === sec.key) ? null : sec.key;
      renderAll();
    });

    sectionButtons.appendChild(btn);
  });
}

function renderDropdowns(){
  dropdownWrap.innerHTML = "";

  if(!openSectionKey){
    dropdownWrap.innerHTML = `
      <div class="dropdown open">
        <div class="dropdown-head">
          <h3>Select a section above</h3>
          <div class="chev">↓</div>
        </div>
        <div class="dropdown-body" style="display:block">
          Tap any section button to view its items in a dropdown.
        </div>
      </div>
    `;
    return;
  }

  const section = MENU_SECTIONS.find(s => s.key === openSectionKey);
  const items = visibleItems(section);

  const box = document.createElement("div");
  box.className = "dropdown open";

  const head = document.createElement("div");
  head.className = "dropdown-head";
  head.innerHTML = `
    <h3>${escapeHtml(section.title)}</h3>
    <div class="chev">✕</div>
  `;
  head.addEventListener("click", () => {
    openSectionKey = null;
    renderAll();
  });

  const body = document.createElement("div");
  body.className = "dropdown-body";

  if(items.length === 0){
    body.innerHTML = `<div class="muted">No items found for current filters/search.</div>`;
  } else {
    items.forEach(it => {
      const row = document.createElement("div");
      row.className = "item";
      row.innerHTML = `
        <div class="item-left">
          <div class="item-name">${escapeHtml(it.name)}</div>
          ${it.desc ? `<div class="item-desc">${escapeHtml(it.desc)}</div>` : ""}
          <span class="tag ${it.type}">${it.type === "veg" ? "VEG" : "NON-VEG"}</span>
        </div>
        <div class="item-price">${formatINR(it.price)}</div>
      `;
      body.appendChild(row);
    });
  }

  box.appendChild(head);
  box.appendChild(body);
  dropdownWrap.appendChild(box);
}

function setupFilters(){
  document.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;

      if(openSectionKey){
        const sec = MENU_SECTIONS.find(s => s.key === openSectionKey);
        if(sec && visibleItems(sec).length === 0) openSectionKey = null;
      }
      renderAll();
    });
  });
}

function setupSearch(){
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value.trim();
    if(openSectionKey){
      const sec = MENU_SECTIONS.find(s => s.key === openSectionKey);
      if(sec && visibleItems(sec).length === 0) openSectionKey = null;
    }
    renderAll();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    renderAll();
    searchInput.focus();
  });
}

function setupMobileNav(){
  if(!navToggle || !navMobile) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMobile.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderAll(){
  if(sectionButtons && dropdownWrap){
    renderSectionButtons();
    renderDropdowns();
  }
}

// ============================
// Testimonials slider
// ============================
function setupTestimonials(){
  const wrap = document.getElementById("testimonials");
  const prev = document.getElementById("tPrev");
  const next = document.getElementById("tNext");
  if(!wrap || !prev || !next) return;

  const cards = Array.from(wrap.querySelectorAll(".tcard"));
  if(cards.length === 0) return;

  let idx = cards.findIndex(c => c.classList.contains("active"));
  if(idx < 0) idx = 0;

  function show(i){
    cards.forEach(c => c.classList.remove("active"));
    cards[i].classList.add("active");
  }

  prev.addEventListener("click", () => {
    idx = (idx - 1 + cards.length) % cards.length;
    show(idx);
  });

  next.addEventListener("click", () => {
    idx = (idx + 1) % cards.length;
    show(idx);
  });

  // auto rotate
  setInterval(() => {
    idx = (idx + 1) % cards.length;
    show(idx);
  }, 5000);
}

// ============================
// Reservation -> WhatsApp
// ============================
function setupReservation(){
  const form = document.getElementById("reserveForm");
  if(!form) return;

  // CHANGE THIS NUMBER to your real WhatsApp number (with country code, no +)
  const WHATSAPP_NUMBER = "910000000000";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rName").value.trim();
    const phone = document.getElementById("rPhone").value.trim();
    const guests = document.getElementById("rGuests").value;
    const date = document.getElementById("rDate").value;
    const time = document.getElementById("rTime").value;

    const msg =
      `Table Reservation%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Guests: ${encodeURIComponent(guests)}%0A` +
      `Date: ${encodeURIComponent(date)}%0A` +
      `Time: ${encodeURIComponent(time)}%0A%0A` +
      `Please confirm reservation.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank", "noopener");
  });
}

// Init
if(yearEl) yearEl.textContent = new Date().getFullYear();
setupFilters();
setupSearch();
setupMobileNav();
setupTestimonials();
setupReservation();
renderAll();
