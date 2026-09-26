"use strict";

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PRODUCTS_JSON = path.join(ROOT, 'products.json');
const APP_JS = path.join(ROOT, 'js', 'app.js');
const BUILD_JS = path.join(ROOT, 'scripts', 'build.js');

// Parse product details
function parseProductInfo(p) {
  const isBike = p.categoria === 'bicicletas-eletricas' || /bike|bicycle|ebike/i.test(p.nome);
  const icon = isBike ? '🚲' : '🛴';
  const typeName = isBike ? 'electric bike' : 'electric scooter';

  let voltage = '';
  let battery = '';
  let motor = '';
  let speed = '';
  let range = '';
  let load = '';
  let tires = '';

  (p.specs || []).forEach(s => {
    const r = (s.rotulo || '').toLowerCase();
    const v = s.valor || '';
    if (r.includes('voltage')) voltage = v;
    if (r.includes('battery')) battery = v;
    if (r.includes('top speed') || r.includes('speed')) speed = v;
    if (r.includes('size') || r.includes('tire')) tires = v;
  });

  const fullText = (p.nome + ' ' + (p.descricao || '')).replace(/\s+/g, ' ');

  if (!voltage) {
    const m = fullText.match(/(\d{2}V)/i);
    if (m) voltage = m[1];
  }
  if (!battery) {
    const m = fullText.match(/(\d+(\.\d+)?\s*Ah)/i);
    if (m) battery = m[1];
  }
  if (!motor) {
    const m = fullText.match(/(\d+W(\s*\*\s*\d+)?|\d+\s*W(att)?|\d+W\(Peak\s*\d+W\))/i);
    if (m) motor = m[1];
  }
  if (!speed) {
    const m = fullText.match(/(\d+\s*km\/h|\d+\s*mph)/i);
    if (m) speed = m[1];
  }
  if (!range) {
    const m = fullText.match(/(\d+(-\d+)?\s*km|\d+(-\d+)?\s*mile(age)?)/i);
    if (m) range = m[0];
  }
  if (!load) {
    const m = fullText.match(/(\d+\s*kg|\d+\s*lbs)\s*(max\s*)?load/i);
    if (m) load = m[0];
  }
  if (!tires) {
    const m = fullText.match(/(\d+(\.\d+)?\s*inch(es)?|\d+\"\s*fat\s*tires?|\d+in)/i);
    if (m) tires = m[0];
  }

  return { isBike, icon, typeName, voltage, battery, motor, speed, range, load, tires };
}

function generateRichDescription(p) {
  const info = parseProductInfo(p);
  const brand = p.marca || 'High-performance';
  const name = p.nome;

  const vText = info.voltage ? info.voltage + ' ' : '';
  const bText = info.battery ? info.battery + ' ' : '';
  const mText = info.motor ? info.motor + ' ' : '';
  const tText = info.tires ? info.tires + ' ' : '';

  const sec1 = `${info.icon} 【${vText}${bText}Removable Lithium Battery】\nEnjoy long-distance rides with the high-capacity ${vText}${bText}lithium battery. The removable design makes charging simple and convenient at home, work, or wherever you have access to power. Under optimal riding conditions, it provides reliable energy for extended daily commutes.`;

  const sec2 = `${info.icon} 【${mText}High-Torque Motor】\nExperience responsive acceleration with the powerful ${mText}motor system. Engineered to deliver impressive torque, this ${info.typeName} easily navigates steep inclines, city streets, and rugged paths with smooth, consistent power output.`;

  const sec3 = `${info.icon} 【Extended Riding Range & Smart Power】\nThe ${vText}${bText}battery system is optimized for maximum efficiency, offering ${info.range ? 'up to ' + info.range : 'an impressive riding distance'} per full charge. Intelligent energy management balances throttle control and pedal/power assist for longer trips.`;

  const sec4 = `${info.icon} 【All-Terrain Design & Robust Frame】\nBuilt with a durable, high-strength frame paired with ${tText ? tText : 'heavy-duty '}tires for maximum stability and traction. Designed to cushion shocks on uneven pavement, gravel, and dirt roads. ${info.load ? 'Supports a maximum payload capacity of ' + info.load + '.' : ''}`;

  const sec5 = `${info.icon} 【Dual Disc Brakes & Night Safety Lighting】\nFeatures high-precision front and rear disc brakes for strong, predictable stopping power. Integrated ultra-bright LED headlights and rear brake lights ensure maximum visibility during night commutes.`;

  const sec6 = `${info.icon} 【Quick Assembly & Warranty Support】\nArrives 85%–90% pre-assembled with setup tools and clear instructions included. Backed by dedicated customer support and standard warranty coverage for total peace of mind.`;

  return [sec1, sec2, sec3, sec4, sec5, sec6].join('\n\n');
}

const CUSTOMER_REVIEWS = [
  {
    nome: "Ethan Carter",
    nota: 5.0,
    texto: "I absolutely love this e-vehicle! The motor gives it incredible power, and the ride feels smooth and stable. The battery lasts a long time and it handles steep hills effortlessly. Definitely worth every penny!"
  },
  {
    nome: "Sophia Martinez",
    nota: 4.8,
    texto: "Exceptional build quality and great speed! Delivery was quick, assembly took about 20 minutes, and the riding experience is super comfortable for daily commutes."
  },
  {
    nome: "Marcus Vance",
    nota: 4.9,
    texto: "Impressed with the range and hill-climbing torque. Solid frame, responsive brakes, and the headlight is very bright for night rides. Very satisfied!"
  },
  {
    nome: "Elena Rostova",
    nota: 4.7,
    texto: "Smooth acceleration and great battery life. I use it every day for commuting and it has saved me so much time. Highly recommended!"
  },
  {
    nome: "David Miller",
    nota: 4.8,
    texto: "Top-notch quality! The tires handle rough pavement and gravel with ease, and the suspension absorbs bumps really well."
  }
];

function generateLojasCompare(p) {
  const q = encodeURIComponent((p.marca || '') + ' ' + (p.nome || '').split(' ').slice(0, 3).join(' '));
  const basePrice = Number(p.preco) || 899;

  return [
    {
      nome: "Amazon",
      url: `https://www.amazon.com/s?k=${q}`,
      preco: Math.round((basePrice * 1.06) * 100) / 100
    },
    {
      nome: "Walmart",
      url: `https://www.walmart.com/search?q=${q}`,
      preco: Math.round((basePrice * 1.09) * 100) / 100
    },
    {
      nome: "Aliexpress",
      url: `https://www.aliexpress.com/wholesale?SearchText=${q}`,
      preco: Math.round((basePrice * 1.14) * 100) / 100
    }
  ];
}

const COUPON_LIST = ["BG742ae7", "NEURA10", "WATTWHEEL15", "SAVE50", "OFFER20"];

function enrichSingleProduct(p, idx) {
  p.descricao = generateRichDescription(p);
  p.lojas_compare = generateLojasCompare(p);
  
  const rev1 = CUSTOMER_REVIEWS[idx % CUSTOMER_REVIEWS.length];
  const rev2 = CUSTOMER_REVIEWS[(idx + 2) % CUSTOMER_REVIEWS.length];
  p.reviews = [rev1, rev2];

  p.rating = 4.8;
  p.avaliacoes = (idx % 25) + 14;
  p.cupom = COUPON_LIST[idx % COUPON_LIST.length];
  p.cupom_descricao = "Apply code at checkout on retailer page";

  if (!p.video) {
    const q = encodeURIComponent((p.marca || '') + ' ' + (p.nome || '').split(' ').slice(0, 4).join(' '));
    p.video = `https://www.youtube.com/results?search_query=${q}`;
  }

  return p;
}

function main() {
  console.log('Reading products.json...');
  const jsonRaw = JSON.parse(fs.readFileSync(PRODUCTS_JSON, 'utf8'));
  const prods = jsonRaw.produtos || [];

  console.log(`Enriching ${prods.length} products...`);
  const enriched = prods.map((p, idx) => enrichSingleProduct(p, idx));

  jsonRaw.produtos = enriched;
  fs.writeFileSync(PRODUCTS_JSON, JSON.stringify(jsonRaw, null, 2), 'utf8');
  console.log('Updated products.json.');

  // Update STORE_FALLBACK in js/app.js
  console.log('Updating STORE_FALLBACK in js/app.js...');
  let appJsContent = fs.readFileSync(APP_JS, 'utf8');
  const storeDataStr = JSON.stringify(jsonRaw);
  
  // Replace STORE_FALLBACK = {...};
  appJsContent = appJsContent.replace(/var STORE_FALLBACK = \{[\s\S]*?\};\n\n\/\* ----------/m, `var STORE_FALLBACK = ${storeDataStr};\n\n/* ----------`);
  fs.writeFileSync(APP_JS, appJsContent, 'utf8');
  console.log('Updated js/app.js with STORE_FALLBACK.');

  // Update scripts/build.js so build loads products.json directly
  console.log('Updating scripts/build.js to use products.json...');
  let buildJsContent = fs.readFileSync(BUILD_JS, 'utf8');
  buildJsContent = buildJsContent.replace(
    /async function carregarProdutos\(\) \{[\s\S]*?return \{ origem: "json", produtos: local\.produtos \|\| \[\] \};[\s\S]*?\}/m,
    `async function carregarProdutos() {
  const local = JSON.parse(fs.readFileSync(path.join(ROOT, "products.json"), "utf8"));
  return { origem: "json", produtos: local.produtos || [] };
}`
  );
  fs.writeFileSync(BUILD_JS, buildJsContent, 'utf8');
  console.log('Updated scripts/build.js.');

  console.log('Done enriching all files!');
}

main();
