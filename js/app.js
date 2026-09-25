/* ============================================================
   AISLE — app.js
   Independent product discovery for electric scooters & electric bikes.
   Curation + affiliate links. Data in products.json
   (plus embedded fallback so the files work from file:// too).
   ============================================================ */

/* ---------- Embedded fallback (mirror of products.json) ---------- */
var STORE_FALLBACK = {"marca":"WattWheel","categorias":[{"slug":"scooters-eletricos","nome":"Electric Scooters","icone":"caixa","descricao":"Electric scooters for every rider — with live price and real rating per listing."},{"slug":"bicicletas-eletricas","nome":"Electric Bikes","icone":"caixa","descricao":"Electric bikes and e-bike kits — with live price and real rating per listing."},{"slug":"baterias-e-motor","nome":"Batteries & Motors","icone":"barra","descricao":"Batteries, motors and controllers for e-scooters and e-bikes — with live price and real rating per listing."},{"slug":"carregadores","nome":"Chargers","icone":"carregador","descricao":"Chargers and adapters for your e-scooter or e-bike — with live price and real rating per listing."},{"slug":"pneus-e-rodas","nome":"Tires & Wheels","icone":"caixa","descricao":"Tires, tubes and wheels for e-scooters and e-bikes — with live price and real rating per listing."},{"slug":"freios-e-parachoques","nome":"Brakes & Fenders","icone":"caixa","descricao":"Brakes, fenders and safety gear for your ride — with live price and real rating per listing."},{"slug":"luzes-e-visibilidade","nome":"Lights & Visibility","icone":"lampada","descricao":"Lights and reflectors for safer commutes — with live price and real rating per listing."},{"slug":"capacetes-e-protecao","nome":"Helmets & Protection","icone":"fone","descricao":"Helmets and protective gear for riders — with live price and real rating per listing."},{"slug":"acessorios","nome":"Accessories","icone":"caixa","descricao":"Accessories and upgrades for e-scooters and e-bikes — with live price and real rating per listing."},{"slug":"pecas-de-reposicao","nome":"Spare Parts","icone":"caixa","descricao":"Spare parts and replacement components for e-mobility — with live price and real rating per listing."}],"produtos":[{"id":"ww-1991948","nome":"WQ-W4 Pro Electric Scooter 36V 10Ah Battery 350W Motor Recommended Top Speed 25KM/H 8.5inch Tires 25KM/H Top Speed 25-30KM Max Mileage Range 120KG Max Load Folding E-Scooter XIAOMI M365","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.9 out of 5 from 152 reviews.","marca":"WQ-W4","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-1991948","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":259.99,"preco_anterior":579.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-WQ-W4-Pro-Electric-Scooter-36V-10Ah-Battery-350W-Motor-Recommended-Top-Speed-25KM-or-H-8_5inch-Tires-25KM-or-H-Top-Speed-25-30KM-Max-Mileage-Range-120KG-Max-Load-Folding-E-Scooter-XIAOMI-M365-p-1991948.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":4.91,"avaliacoes":152,"destaque":true,"specs":[{"rotulo":"Brand","valor":"WQ-W4"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"36V"},{"rotulo":"Battery","valor":"10Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"8.5inch"},{"rotulo":"Rating","valor":"4.91 / 5"},{"rotulo":"Reviews","valor":"152"},{"rotulo":"Price","valor":"US$ 259.99"},{"rotulo":"List price","valor":"US$ 579.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/01/84/333cba17-3eee-4061-85d4-ae198e6fa72f.jpg.webp"},{"id":"ww-2045406","nome":"ENGWE Y400 Electric Scooter 13.5Ah 48V 500W (PEAK 740W) Recommended Top Speed 25KM/H 10 Inches Folding Electric Scooter 50km Mileage Max Load 120Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"ENGWE","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2045406","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":774.99,"preco_anterior":999.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-DIRECT-ENGWE-Y400-Electric-Scooter-13_5Ah-48V-500W-(PEAK-740W)-Recommended-Top-Speed-25KM-or-H-10-Inches-Folding-Electric-Scooter-50km-Mileage-Max-Load-120Kg-p-2045406.html?cur_warehouse=USA&ID=6290823&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"ENGWE"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"13.5Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"10 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 774.99"},{"rotulo":"List price","valor":"US$ 999.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/EA/93/4937c181-91f2-4e3c-a718-b496da873f7e.jpg.webp"},{"id":"ww-2046216","nome":"Freeboy J30 MAX Electric Scooter 38Ah 60V 3000W*2 Dual Motor Recommended Top Speed 25KM/H 11 Inches Tire Electric Scooter 90-100km Mileage Max Load 150Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Freeboy","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2046216","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":1874.99,"preco_anterior":2599.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-Freeboy-J30-MAX-Electric-Scooter-38Ah-60V-3000W+2-Dual-Motor-Recommended-Top-Speed-25KM-or-H-11-Inches-Tire-Electric-Scooter-90-100km-Mileage-Max-Load-150Kg-p-2046216.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Freeboy"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"60V"},{"rotulo":"Battery","valor":"38Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 1874.99"},{"rotulo":"List price","valor":"US$ 2599.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/77/80/38a89463-11f9-47fb-8968-81025d279e4e.jpg.webp"},{"id":"ww-2046220","nome":"Freeboy J05 MAX Electric Scooter 15Ah 36V 500W Motor Recommended Top Speed 25KM/H 10 Inches Tire Electric Scooter 35-40km Mileage Max Load 150Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Freeboy","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2046220","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":554.99,"preco_anterior":899.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-Freeboy-J05-MAX-Electric-Scooter-15Ah-36V-500W-Motor-Recommended-Top-Speed-25KM-or-H-10-Inches-Tire-Electric-Scooter-35-40km-Mileage-Max-Load-150Kg-p-2046220.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Freeboy"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"36V"},{"rotulo":"Battery","valor":"15Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"10 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 554.99"},{"rotulo":"List price","valor":"US$ 899.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/03/22/ba66df9d-0503-4d03-ade5-79f1ae00af0d.jpg.webp"},{"id":"ww-2046221","nome":"Freeboy J01 Electric Scooter 15Ah 48V 800W Motor Recommended Top Speed 25KM/H 10 Inches Tire Electric Scooter 50-55km Mileage Max Load 150Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Freeboy","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2046221","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":664.99,"preco_anterior":999.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-Freeboy-J01-Electric-Scooter-15Ah-48V-800W-Motor-Recommended-Top-Speed-25KM-or-H-10-Inches-Tire-Electric-Scooter-50-55km-Mileage-Max-Load-150Kg-p-2046221.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Freeboy"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"15Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"10 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 664.99"},{"rotulo":"List price","valor":"US$ 999.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D6/09/7b3b9a83-0221-4968-baa1-24745f482579.jpg.webp"},{"id":"ww-2046192","nome":"Freeboy H8 Electric Scooter 28Ah 60V 3000W*2 Dual Motor Recommended Top Speed 25KM/H 11 Inches Tire Electric Scooter 80-90km Mileage Max Load 150Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Freeboy","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2046192","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":1734.99,"preco_anterior":2199.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-Freeboy-H8-Electric-Scooter-28Ah-60V-3000W+2-Dual-Motor-Recommended-Top-Speed-25KM-or-H-11-Inches-Tire-Electric-Scooter-80-90km-Mileage-Max-Load-150Kg-p-2046192.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Freeboy"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"60V"},{"rotulo":"Battery","valor":"28Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 1734.99"},{"rotulo":"List price","valor":"US$ 2199.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/84/D4/6fe93727-cabc-4d4c-8286-436aaf7b6816.jpg.webp"},{"id":"ww-2046206","nome":"Freeboy J15 MAX Electric Scooter 18Ah 48V 1600W Motor Recommended Top Speed 25KM/H 11 Inches Tire Electric Scooter 45-50km Mileage Max Load 150Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Freeboy","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2046206","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":914.99,"preco_anterior":1299.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-Freeboy-J15-MAX-Electric-Scooter-18Ah-48V-1600W-Motor-Recommended-Top-Speed-25KM-or-H-11-Inches-Tire-Electric-Scooter-45-50km-Mileage-Max-Load-150Kg-p-2046206.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Freeboy"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"18Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 914.99"},{"rotulo":"List price","valor":"US$ 1299.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/4F/4E/12ac2449-7073-44cc-8758-0bb5ea4c6412.jpg.webp"},{"id":"ww-2046213","nome":"Freeboy H9 Electric Scooter 30Ah 60V 3000W*2 Dual Motor Recommended Top Speed 25KM/H 11 Inches Tire Electric Scooter 80-90km Mileage Max Load 150Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Freeboy","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2046213","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":1914.99,"preco_anterior":2599.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-Freeboy-H9-Electric-Scooter-30Ah-60V-3000W+2-Dual-Motor-Recommended-Top-Speed-25KM-or-H-11-Inches-Tire-Electric-Scooter-80-90km-Mileage-Max-Load-150Kg-p-2046213.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Freeboy"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"60V"},{"rotulo":"Battery","valor":"30Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 1914.99"},{"rotulo":"List price","valor":"US$ 2599.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/52/0D/c26a4d93-4327-4f1a-8d94-b0cb1883c70d.jpg.webp"},{"id":"ww-2055760","nome":"GOKEEP F5 Electric Scooter 20Ah 52V 1000W Recommended Top Speed 25KM/H 11 Inches Folding Electric Scooter 43km Mileage Max Load 120Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"GOKEEP","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2055760","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":634,"preco_anterior":1599.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/Local-Warehouse-GOKEEP-F5-Electric-Scooter-20Ah-52V-1000W-Recommended-Top-Speed-25KM-or-H-11-Inches-Folding-Electric-Scooter-43km-Mileage-Max-Load-120Kg-p-2055760.html?cur_warehouse=USA&ID=6287842&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"GOKEEP"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"52V"},{"rotulo":"Battery","valor":"20Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 634.00"},{"rotulo":"List price","valor":"US$ 1599.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/18/99/f3937ed6-0aab-4a6b-bb7b-0232b1af5048.png.webp"},{"id":"ww-2054347","nome":"GOKEEP F4 Electric Scooter 48V 15.6AH 250W(Peak 1000W) Motor Top Speed 25KM/H 10Inch Tire 40KM Mileage 120kg Max Load","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"GOKEEP","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2054347","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":574,"preco_anterior":1399.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-GOKEEP-F4-Electric-Scooter-48V-15_6AH-250W(Peak-1000W)-Motor-Top-Speed-25KM-or-H-10Inch-Tire-40KM-Mileage-120kg-Max-Load-p-2054347.html?cur_warehouse=USA&ID=6287837&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"GOKEEP"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"15.6Ah"},{"rotulo":"Size","valor":"10Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 574.00"},{"rotulo":"List price","valor":"US$ 1399.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6D/67/e6fb89ee-2b58-4ae3-b129-42385a1fea86.png.webp"},{"id":"ww-2018649","nome":"BOYUEDA S5 Electric Scooter 38Ah 60V 3000W*2 Dual Motor Recommended Top Speed 25KM/H 11in Folding Moped Electric Scooter 100-120KM Mileage Electric Scooter Max Load 200Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.7 out of 5 from 10 reviews.","marca":"BOYUEDA","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2018649","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":1274,"preco_anterior":1299,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-BOYUEDA-S5-Electric-Scooter-38Ah-60V-3000W+2-Dual-Motor-Recommended-Top-Speed-25KM-or-H-11in-Folding-Moped-Electric-Scooter-100-120KM-Mileage-Electric-Scooter-Max-Load-200Kg-p-2018649.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":4.7,"avaliacoes":10,"destaque":true,"specs":[{"rotulo":"Brand","valor":"BOYUEDA"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"60V"},{"rotulo":"Battery","valor":"38Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Rating","valor":"4.70 / 5"},{"rotulo":"Reviews","valor":"10"},{"rotulo":"Price","valor":"US$ 1274.00"},{"rotulo":"List price","valor":"US$ 1299.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/B1/1E/5f0634a0-0094-4be2-987b-2f133d17308c.jpg.webp"},{"id":"ww-1978710","nome":"BOYUEDA S3-11 Electric Scooter With Seat 38Ah 6000W Recommended Top Speed 25KM/H 60V Oil Brake 11 Inch Electric Scooter 150-200Kg Max Load 100Km Range EU Direct USA Direct","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.9 out of 5 from 490 reviews.","marca":"BOYUEDA","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-1978710","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":1174.99,"preco_anterior":1199.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-BOYUEDA-S3-11-Electric-Scooter-With-Seat-38Ah-6000W-Recommended-Top-Speed-25KM-or-H-60V-Oil-Brake-11-Inch-Electric-Scooter-150-200Kg-Max-Load-100Km-Range-EU-Direct-USA-Direct-p-1978710.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":4.93,"avaliacoes":490,"destaque":true,"specs":[{"rotulo":"Brand","valor":"BOYUEDA"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"60V"},{"rotulo":"Battery","valor":"38Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11 Inch"},{"rotulo":"Rating","valor":"4.93 / 5"},{"rotulo":"Reviews","valor":"490"},{"rotulo":"Price","valor":"US$ 1174.99"},{"rotulo":"List price","valor":"US$ 1199.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/61/BA/da06e22a-84c0-4c60-b992-f8d93b320814.jpg.webp"},{"id":"ww-2013564","nome":"TOURSOR X8P Electric Scooter 60V 38.8AH Battery 4000W*2 Dual Motors Recommended Top Speed 25KM/H 14inch Off-Road Tires 110KM Max Mileage 200KG Max Load Folding E-Scooter","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"TOURSOR","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2013564","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":1544.99,"preco_anterior":3049.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-Direct-TOURSOR-X8P-Electric-Scooter-60V-38_8AH-Battery-4000W+2-Dual-Motors-Recommended-Top-Speed-25KM-or-H-14inch-Off-Road-Tires-110KM-Max-Mileage-200KG-Max-Load-Folding-E-Scooter-p-2013564.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"TOURSOR"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"60V"},{"rotulo":"Battery","valor":"38.8Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"14inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 1544.99"},{"rotulo":"List price","valor":"US$ 3049.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/84/A2/b7df137d-a6d2-4312-b35a-af8c342f92be.jpg.webp"},{"id":"ww-2045347","nome":"GOKEEP F5 Electric Scooter 20Ah 52V 1000W Recommended Top Speed 25KM/H 11 Inches Folding Electric Scooter 43km Mileage Max Load 120Kg","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.8 out of 5 from 17 reviews.","marca":"GOKEEP","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2045347","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":569.49,"preco_anterior":null,"comissao":3,"url_afiliado":"https://usa.banggood.com/Local-Warehouse-GOKEEP-F5-Electric-Scooter-20Ah-52V-1000W-Recommended-Top-Speed-25KM-or-H-11-Inches-Folding-Electric-Scooter-43km-Mileage-Max-Load-120Kg-p-2045347.html?cur_warehouse=USA&ID=6290823&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":4.82,"avaliacoes":17,"destaque":true,"specs":[{"rotulo":"Brand","valor":"GOKEEP"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"52V"},{"rotulo":"Battery","valor":"20Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11 Inch"},{"rotulo":"Rating","valor":"4.82 / 5"},{"rotulo":"Reviews","valor":"17"},{"rotulo":"Price","valor":"US$ 569.49"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/6D/42/6cb06fd4-c480-40c2-ba80-91ff7bff5b3c.png.webp"},{"id":"ww-1999979","nome":"COASTA L9pro Electric Scooter 36V 20Ah 350W*2 Dual Motors Recommended Top Speed 25KM/H 8.5inch 40KM Mileage 120KG Payload Folding E-Scooter","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"COASTA","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-1999979","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":544.99,"preco_anterior":1029.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-Direct-COASTA-L9pro-Electric-Scooter-36V-20Ah-350W+2-Dual-Motors-Recommended-Top-Speed-25KM-or-H-8_5inch-40KM-Mileage-120KG-Payload-Folding-E-Scooter-p-1999979.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"COASTA"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"36V"},{"rotulo":"Battery","valor":"20Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"8.5inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 544.99"},{"rotulo":"List price","valor":"US$ 1029.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A6/7A/03860811-decf-4bd3-beaa-97afe2005d91.jpg.webp"},{"id":"ww-2023774","nome":"BOYUEDA Q7Pro Max Electric Scooter 52V 28Ah 1600W*2 Dual Motor Recommended Top Speed 25KM/H 10inch Folding Moped Electric Scooter 90-110KM Mileage Electric Scooter Max Load 200Kg EU DIRECT","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.5 out of 5 from 2 reviews.","marca":"BOYUEDA","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2023774","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":874,"preco_anterior":899,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-BOYUEDA-Q7Pro-Max-Electric-Scooter-52V-28Ah-1600W+2-Dual-Motor-Recommended-Top-Speed-25KM-or-H-10inch-Folding-Moped-Electric-Scooter-90-110KM-Mileage-Electric-Scooter-Max-Load-200Kg-EU-DIRECT-p-2023774.html?cur_warehouse=USA&ID=6297321&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":4.5,"avaliacoes":2,"destaque":false,"specs":[{"rotulo":"Brand","valor":"BOYUEDA"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"52V"},{"rotulo":"Battery","valor":"28Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"10inch"},{"rotulo":"Rating","valor":"4.50 / 5"},{"rotulo":"Reviews","valor":"2"},{"rotulo":"Price","valor":"US$ 874.00"},{"rotulo":"List price","valor":"US$ 899.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/50/FD/a0b2af1b-81de-4348-aa89-ea1610f235c1.jpg.webp"},{"id":"ww-2041807","nome":"OOTD T10 Electric Scooter 48V 18AH Battery 900W Motor Recommended Top Speed 25KM/H 11inches Tires 80KM Max Mileage 120KG Max Load Folding E-Scooter","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 5.0 out of 5 from 3 reviews.","marca":"OOTD","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2041807","categoria":"scooters-eletricos","categoria_nome":"Electric Scooters","preco":564.99,"preco_anterior":1379.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/UK-or-USA-Direct-OOTD-T10-Electric-Scooter-48V-18AH-Battery-900W-Motor-Recommended-Top-Speed-25KM-or-H-11inches-Tires-80KM-Max-Mileage-120KG-Max-Load-Folding-E-Scooter-p-2041807.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=ca331790339563550","icone":"caixa","disponibilidade":"em_estoque","rating":5,"avaliacoes":3,"destaque":false,"specs":[{"rotulo":"Brand","valor":"OOTD"},{"rotulo":"Category","valor":"Electric Scooters"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"18Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"11inch"},{"rotulo":"Rating","valor":"5.00 / 5"},{"rotulo":"Reviews","valor":"3"},{"rotulo":"Price","valor":"US$ 564.99"},{"rotulo":"List price","valor":"US$ 1379.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/56/1E/7b75670d-d8aa-47ca-9bc2-4179e34c7c75.jpg.webp"},{"id":"ww-2043357","nome":"Shengmilo S600 Electric Bike 48V 17.5AH SamsungBattery 1000W*2 Dual Motors Recommended Top Speed 25KM/H 26inch Tires 90KM Max Mileage 150KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Shengmilo","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2043357","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":1974.99,"preco_anterior":2879.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-Direct-Shengmilo-S600-Electric-Bike-48V-17_5AH-SamsungBattery-1000W+2-Dual-Motors-Recommended-Top-Speed-25KM-or-H-26inch-Tires-90KM-Max-Mileage-150KG-Max-Load-Electric-Bicycle-p-2043357.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Shengmilo"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"17.5Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"26inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 1974.99"},{"rotulo":"List price","valor":"US$ 2879.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/E0/60/1ff07ec5-e5d7-4f1e-a4d5-eb462956a277.jpg.webp"},{"id":"ww-2041055","nome":"SINOHON EM200 Electric Bike 48V 12.5AH Battery 500W Recommended Top Speed 25KM/H Motor 26 Inch Electric Bicycle 65-85 KM Mileage Range Max Load 150KG SINOHON EM200","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"SINOHON","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2041055","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":474,"preco_anterior":499,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-SINOHON-EM200-Electric-Bike-48V-12_5AH-Battery-500W-Recommended-Top-Speed-25KM-or-H-Motor-26-Inch-Electric-Bicycle-65-85-KM-Mileage-Range-Max-Load-150KG-SINOHON-EM200-p-2041055.html?cur_warehouse=USA&ID=6287832&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"SINOHON"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"12.5Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"26 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 474.00"},{"rotulo":"List price","valor":"US$ 499.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/07/ce371e96-d096-426a-b867-cebdfe389d21.jpg.webp"},{"id":"ww-2041062","nome":"SINOHON EM200D Electric Bike 36V 10.4AH Battery 500W Motor Recommended Top Speed 25KM/H 26 Inch Electric Bicycle 40-60 KM Mileage Range Max Load 150KG SINOHON EM200D","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"SINOHON","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2041062","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":374,"preco_anterior":399,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-SINOHON-EM200D-Electric-Bike-36V-10_4AH-Battery-500W-Motor-Recommended-Top-Speed-25KM-or-H-26-Inch-Electric-Bicycle-40-60-KM-Mileage-Range-Max-Load-150KG-SINOHON-EM200D-p-2041062.html?cur_warehouse=USA&ID=6287832&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"SINOHON"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"36V"},{"rotulo":"Battery","valor":"10.4Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"26 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 374.00"},{"rotulo":"List price","valor":"US$ 399.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/95/AB/a255f6b7-7971-4514-b936-7e1423365173.jpg.webp"},{"id":"ww-2041052","nome":"SINOHON EM200G Electric Bike 48V 15.6AH Battery 500W Motor Recommended Top Speed 25KM/H 26 Inch Electric Bicycle 40-60 KM Mileage Range Max Load 150KG SINOHON EM200G","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"SINOHON","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2041052","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":464,"preco_anterior":489,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-SINOHON-EM200G-Electric-Bike-48V-15_6AH-Battery-500W-Motor-Recommended-Top-Speed-25KM-or-H-26-Inch-Electric-Bicycle-40-60-KM-Mileage-Range-Max-Load-150KG-SINOHON-EM200G-p-2041052.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"SINOHON"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"15.6Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"26 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 464.00"},{"rotulo":"List price","valor":"US$ 489.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/01/37/9cfbbe18-4256-402f-97d2-d614083feccc.jpg.webp"},{"id":"ww-2041060","nome":"SINOHON EM200 Electric Bike 48V 12.5AH Battery 500W Motor Recommended Top Speed 25KM/H 26 Inch Electric Bicycle 40-60 KM Mileage Range Max Load 150KG SINOHON EM200","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"SINOHON","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2041060","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":464,"preco_anterior":489,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-SINOHON-EM200-Electric-Bike-48V-12_5AH-Battery-500W-Motor-Recommended-Top-Speed-25KM-or-H-26-Inch-Electric-Bicycle-40-60-KM-Mileage-Range-Max-Load-150KG-SINOHON-EM200-p-2041060.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"SINOHON"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"12.5Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"26 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 464.00"},{"rotulo":"List price","valor":"US$ 489.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/90/51/bd123c5b-4dd5-48bd-872a-ef58e35c8691.jpg.webp"},{"id":"ww-2045222","nome":"URLIFE E20 Electric Bike 48V 13AH 500W(Peak 1000W) Motor Recommended Top Speed 25KM/H 20inch Tire 130KM Max Mileage 120KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"URLIFE","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2045222","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":674.99,"preco_anterior":699.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-URLIFE-E20-Electric-Bike-48V-13AH-500W(Peak-1000W)-Motor-Recommended-Top-Speed-25KM-or-H-20inch-Tire-130KM-Max-Mileage-120KG-Max-Load-Electric-Bicycle-p-2045222.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":1,"destaque":false,"specs":[{"rotulo":"Brand","valor":"URLIFE"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"13Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"1"},{"rotulo":"Price","valor":"US$ 674.99"},{"rotulo":"List price","valor":"US$ 699.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/B7/4B/7ad2886d-36b6-4e88-9893-d11aff34e6df.png.webp"},{"id":"ww-2045223","nome":"URLIFE T2 Electric Bike 48V 15.6AH 250W(Peak 1500W) Motor Recommended Top Speed 25KM/H 20inch Fat Tire 160KM Max Mileage 120KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"URLIFE","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2045223","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":974.99,"preco_anterior":999.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-URLIFE-T2-Electric-Bike-48V-15_6AH-250W(Peak-1500W)-Motor-Recommended-Top-Speed-25KM-or-H-20inch-Fat-Tire-160KM-Max-Mileage-120KG-Max-Load-Electric-Bicycle-p-2045223.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":1,"destaque":false,"specs":[{"rotulo":"Brand","valor":"URLIFE"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"15.6Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"1"},{"rotulo":"Price","valor":"US$ 974.99"},{"rotulo":"List price","valor":"US$ 999.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3A/16/dcd30b54-8f4e-4b5f-adc9-efbf2fb8d737.png.webp"},{"id":"ww-2045356","nome":"JANSNO X90 Electric Bike 48V 14Ah Battery 48V 750W Motor Recommended Top Speed 25KM/H 16inch Tires 45KM Max Mileage 150KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"JANSNO","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2045356","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":904.99,"preco_anterior":2079.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-JANSNO-X90-Electric-Bike-48V-14Ah-Battery-48V-750W-Motor-Recommended-Top-Speed-25KM-or-H-16inch-Tires-45KM-Max-Mileage-150KG-Max-Load-Electric-Bicycle-p-2045356.html?cur_warehouse=USA&ID=6287837&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"JANSNO"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"14Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"16inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 904.99"},{"rotulo":"List price","valor":"US$ 2079.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/2E/32/8e8167be-ef75-49d3-8b67-1c69ad699530.jpg.webp"},{"id":"ww-2011522","nome":"DRVETION AT20 Electric Bike 48V 15Ah Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Tires 45KM Max Mileage Range 150KG Max Load Folding Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"DRVETION","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2011522","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":959.99,"preco_anterior":1979.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-DIRECT-DRVETION-AT20-Electric-Bike-48V-15Ah-Battery-750W-Motor-Recommended-Top-Speed-25KM-or-H-20+4_0inch-Tires-45KM-Max-Mileage-Range-150KG-Max-Load-Folding-Electric-Bicycle-p-2011522.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"DRVETION"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"15Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"4.0inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 959.99"},{"rotulo":"List price","valor":"US$ 1979.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/FA/9D/38cc3e02-d314-4d48-ab45-156b6791e18e.jpg.webp"},{"id":"ww-2011529","nome":"DRVETION CT20 Electric Bike 48V 20AH Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Fat Tires 80-110KM Max Mileage 150KG Max Load Folding Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"DRVETION","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2011529","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":959.99,"preco_anterior":2189.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-DIRECT-DRVETION-CT20-Electric-Bike-48V-20AH-Battery-750W-Motor-Recommended-Top-Speed-25KM-or-H-20+4_0inch-Fat-Tires-80-110KM-Max-Mileage-150KG-Max-Load-Folding-Electric-Bicycle-p-2011529.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"DRVETION"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"20Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"4.0inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 959.99"},{"rotulo":"List price","valor":"US$ 2189.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/E6/C2/4fb9f810-cfcd-4619-aef8-a6e926ae8ac5.jpg.webp"},{"id":"ww-2032208","nome":"JANSNO X70 Electric Bike 48V 14AH+20AH Dual Batteries 750W Motor Recommended Top Speed 25KM/H 20inches Tires 120KM Max Mileage 150KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"JANSNO","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2032208","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":1094.99,"preco_anterior":2459.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-Direct-JANSNO-X70-Electric-Bike-48V-14AH+20AH-Dual-Batteries-750W-Motor-Recommended-Top-Speed-25KM-or-H-20inches-Tires-120KM-Max-Mileage-150KG-Max-Load-Electric-Bicycle-p-2032208.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":1,"destaque":false,"specs":[{"rotulo":"Brand","valor":"JANSNO"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"14Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"1"},{"rotulo":"Price","valor":"US$ 1094.99"},{"rotulo":"List price","valor":"US$ 2459.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/4D/14/8c020b34-2f06-4b2c-9bc4-31e58b926dda.jpg.webp"},{"id":"ww-2043606","nome":"GIDUCTON EC100 Electric Bike 48V 12AH 750W Motor Recommended Top Speed 25KM/H 20inch Tire 50KM Max Mileage 120KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"GIDUCTON","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2043606","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":514.99,"preco_anterior":1099.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-DIRECT-GIDUCTON-EC100-Electric-Bike-48V-12AH-750W-Motor-Recommended-Top-Speed-25KM-or-H-20inch-Tire-50KM-Max-Mileage-120KG-Max-Load-Electric-Bicycle-p-2043606.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"GIDUCTON"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"12Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 514.99"},{"rotulo":"List price","valor":"US$ 1099.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/DF/32/4a2582a4-c05d-47f9-9b9d-036d8179a9e1.jpg.webp"},{"id":"ww-2043832","nome":"PAMILA E3 Electric Bike 15.6Ah 48V 1000W Mid Motor Recommended Top Speed 25KM/H 20*3.0 Inches Tire Electric Bike 50-60km Mileage Max Load 150Kg","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"PAMILA","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2043832","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":674.99,"preco_anterior":1599.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/US-DIRECT-PAMILA-E3-Electric-Bike-15_6Ah-48V-1000W-Mid-Motor-Recommended-Top-Speed-25KM-or-H-20+3_0-Inches-Tire-Electric-Bike-50-60km-Mileage-Max-Load-150Kg-p-2043832.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"PAMILA"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"15.6Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"3.0 Inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 674.99"},{"rotulo":"List price","valor":"US$ 1599.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/E1/4A/9489430c-2be4-45e2-9d4b-4f621bb340fc.jpg.webp"},{"id":"ww-2043360","nome":"Shengmilo S900 Electric Bike 60V 30AH Battery 1500W Motor Recommended Top Speed 25KM/H 20*4.0inch Tires 90KM Max Mileage 150KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"Shengmilo","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2043360","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":1504.99,"preco_anterior":3579.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-Direct-Shengmilo-S900-Electric-Bike-60V-30AH-Battery-1500W-Motor-Recommended-Top-Speed-25KM-or-H-20+4_0inch-Tires-90KM-Max-Mileage-150KG-Max-Load-Electric-Bicycle-p-2043360.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"Shengmilo"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"60V"},{"rotulo":"Battery","valor":"30Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"4.0inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 1504.99"},{"rotulo":"List price","valor":"US$ 3579.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/23/A5/16c22e39-b655-4cbe-ad0f-864fc2523f5e.jpg.webp"},{"id":"ww-2011521","nome":"DRVETION AT20 Electric Bike 48V 20Ah Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Tires 90-120KM Max Mileage 150KG Max Load Folding Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"DRVETION","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2011521","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":969.99,"preco_anterior":2129.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-DIRECT-DRVETION-AT20-Electric-Bike-48V-20Ah-Battery-750W-Motor-Recommended-Top-Speed-25KM-or-H-20+4_0inch-Tires-90-120KM-Max-Mileage-150KG-Max-Load-Folding-Electric-Bicycle-p-2011521.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"DRVETION"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"20Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"4.0inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 969.99"},{"rotulo":"List price","valor":"US$ 2129.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/02/83/8d450649-3443-4a4b-9df9-8655c0750daa.jpg.webp"},{"id":"ww-2027575","nome":"HAPPYRUN HR-G50 Electric Bike 48V 18Ah Battery 750W Motor Recommended Top Speed 25KM/H 20inch Tires 110KM Mileage 120KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"HAPPYRUN","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2027575","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":1034.99,"preco_anterior":1959.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-DIRECT-HAPPYRUN-HR-G50-Electric-Bike-48V-18Ah-Battery-750W-Motor-Recommended-Top-Speed-25KM-or-H-20inch-Tires-110KM-Mileage-120KG-Max-Load-Electric-Bicycle-p-2027575.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"HAPPYRUN"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"18Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 1034.99"},{"rotulo":"List price","valor":"US$ 1959.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FB/4E/2c2fff18-ada7-45ba-ae77-4eb56860d616.jpg.webp"},{"id":"ww-2046538","nome":"QUNT BK20 Electric Bike 48V 18AH Battery 500W Motor Recommended Top Speed 25KM/H 20inch Tires 110KM Max Range 120KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"QUNT","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2046538","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":674.99,"preco_anterior":1519.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-Drect-QUNT-BK20-Electric-Bike-48V-18AH-Battery-500W-Motor-Recommended-Top-Speed-25KM-or-H-20inch-Tires-110KM-Max-Range-120KG-Max-Load-Electric-Bicycle-p-2046538.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"QUNT"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"18Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 674.99"},{"rotulo":"List price","valor":"US$ 1519.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A2/05/5b8e91ac-8039-436b-9591-30796a318c0a.jpg.webp"},{"id":"ww-2011528","nome":"DRVETION CT20 Electric Bike 48V 15AH Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Fat Tires 40-80KM Max Mileage 150KG Max Load Folding Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"DRVETION","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2011528","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":999.99,"preco_anterior":2029.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/USA-DIRECT-DRVETION-CT20-Electric-Bike-48V-15AH-Battery-750W-Motor-Recommended-Top-Speed-25KM-or-H-20+4_0inch-Fat-Tires-40-80KM-Max-Mileage-150KG-Max-Load-Folding-Electric-Bicycle-p-2011528.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":0,"destaque":false,"specs":[{"rotulo":"Brand","valor":"DRVETION"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"15Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"4.0inch"},{"rotulo":"Reviews","valor":"0"},{"rotulo":"Price","valor":"US$ 999.99"},{"rotulo":"List price","valor":"US$ 2029.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/B3/FF/781d0b54-4f2e-4664-9ff6-5f1ccd6b193a.jpg.webp"},{"id":"ww-1998730","nome":"RANDRIDE YX80M-2 48V 20Ah 2*1000W Recommended Top Speed 25KM/H 26*4.0 Inch Electric Bike 40-90KM Max Range Max Load 200KG","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"RANDRIDE","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-1998730","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":1374,"preco_anterior":1399,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-RANDRIDE-YX80M-2-48V-20Ah-2+1000W-Recommended-Top-Speed-25KM-or-H-26+4_0-Inch-Electric-Bike-40-90KM-Max-Range-Max-Load-200KG-p-1998730.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":3,"destaque":false,"specs":[{"rotulo":"Brand","valor":"RANDRIDE"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"20Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"4.0 Inch"},{"rotulo":"Reviews","valor":"3"},{"rotulo":"Price","valor":"US$ 1374.00"},{"rotulo":"List price","valor":"US$ 1399.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/01/16/0b88a404-b786-4aad-932c-6c11100064cc.jpg.webp"},{"id":"ww-2021488","nome":"SINOHON A20 Electric Bike 48V 22AH 1000W Motor Recommended Top Speed 25KM/H 20inch 80KM Max Mileage 150KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"SINOHON","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2021488","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":899,"preco_anterior":null,"comissao":3,"url_afiliado":"https://usa.banggood.com/EU-DIRECT-SINOHON-A20-Electric-Bike-48V-22AH-1000W-Motor-Recommended-Top-Speed-25KM-or-H-20inch-80KM-Max-Mileage-150KG-Max-Load-Electric-Bicycle-p-2021488.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":28,"destaque":false,"specs":[{"rotulo":"Brand","valor":"SINOHON"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"22Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"28"},{"rotulo":"Price","valor":"US$ 899.00"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/81/4F/04d021db-d0cb-430a-beb7-f8fa6ddc9ca4.jpg.webp"},{"id":"ww-2032209","nome":"JANSNO X60 Electric Bike 48V 23AH Battery 750W*2 Dual Motors Recommended Top Speed 25KM/H 20inches Tires 80KM Max Mileage 150KG Max Load Electric Bicycle","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","marca":"JANSNO","merchant":"partner-store","merchant_nome":"Partner store","product_id":"WW-2032209","categoria":"bicicletas-eletricas","categoria_nome":"Electric Bikes","preco":1134.99,"preco_anterior":2629.99,"comissao":3,"url_afiliado":"https://usa.banggood.com/JANSNO-X60-Electric-Bike-48V-23AH-Battery-750W+2-Dual-Motors-Recommended-Top-Speed-25KM-or-H-20inches-Tires-80KM-Max-Mileage-150KG-Max-Load-Electric-Bicycle-p-2032209.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=12f11790339822238","icone":"caixa","disponibilidade":"em_estoque","rating":null,"avaliacoes":1,"destaque":false,"specs":[{"rotulo":"Brand","valor":"JANSNO"},{"rotulo":"Category","valor":"Electric Bikes"},{"rotulo":"Condition","valor":"New"},{"rotulo":"Voltage","valor":"48V"},{"rotulo":"Battery","valor":"23Ah"},{"rotulo":"Top speed","valor":"25KM/H"},{"rotulo":"Size","valor":"20inch"},{"rotulo":"Reviews","valor":"1"},{"rotulo":"Price","valor":"US$ 1134.99"},{"rotulo":"List price","valor":"US$ 2629.99"},{"rotulo":"Availability","valor":"In stock"}],"faq":[{"p":"Does WattWheel sell this product?","a":"No. WattWheel is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer."},{"p":"Where do the price and rating come from?","a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying."},{"p":"Does WattWheel earn a commission?","a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page."}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A4/B2/552f6e0d-8e77-416e-8582-84f66c97b66e.jpg.webp"}]};

/* ---------- State ---------- */
var DADOS = null;
var PRODUTOS = [];
var CATEGORIAS = [];

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

/* ---------- Utilities ---------- */
function fmt(n) {
  return (n == null) ? "" : n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
function num(n) {
  return (n == null) ? "" : n.toLocaleString("en-US");
}
function pctDesc(a, b) {
  if (!a || !b || a >= b) return null;
  return Math.round((1 - a / b) * 100);
}
function esc(s) {
  return String(s || "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function starsHTML(rating) {
  var full = Math.floor(rating);
  var frac = rating - full;
  var half = (frac >= 0.25 && frac < 0.75);
  var out = "";
  for (var i = 0; i < full; i++) out += "\u2605";
  if (half) out += '<span class="half">\u2605</span>';
  for (var j = full + (half ? 1 : 0); j < 5; j++) out += '<span class="half">\u2605</span>';
  return '<span class="stars">' + out + "</span>";
}

var ROTULOS_DISP = {
  em_estoque: ["In stock", "stock"],
  poucas_unidades: ["Only a few left", "soon"],
  esgotado: ["Currently unavailable", "out"]
};

var SCHEMA_DISP = {
  em_estoque: "https://schema.org/InStock",
  poucas_unidades: "https://schema.org/LimitedAvailability",
  esgotado: "https://schema.org/OutOfStock"
};

/* ---------- Neutral product icons (light-gray line art) ---------- */
var ICON_STROKE = 'fill="none" stroke="#98a0a8" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"';
var ICON_STROKE_SOFT = 'fill="none" stroke="#aab1b9" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"';

function iconeSVG(icone, soft) {
  var s = soft ? ICON_STROKE_SOFT : ICON_STROKE;
  switch (icone) {
    case "fone":
      return '<path d="M150 360 v-60 a150 150 0 0 1 300 0 v60" ' + s + '/>' +
        '<rect x="130" y="330" width="90" height="120" rx="45" ' + s + '/>' +
        '<rect x="380" y="330" width="90" height="120" rx="45" ' + s + '/>';
    case "caixa":
      return '<rect x="185" y="150" width="230" height="300" rx="34" ' + s + '/>' +
        '<circle cx="300" cy="300" r="92" ' + s + '/>' +
        '<circle cx="300" cy="300" r="30" ' + s + '/>';
    case "barra":
      return '<rect x="110" y="190" width="380" height="120" rx="22" ' + s + '/>' +
        '<circle cx="300" cy="400" r="58" ' + s + '/>';
    case "relogio":
      return '<rect x="252" y="70" width="96" height="150" rx="20" ' + s + '/>' +
        '<rect x="252" y="380" width="96" height="150" rx="20" ' + s + '/>' +
        '<rect x="215" y="215" width="170" height="170" rx="48" ' + s + '/>' +
        '<circle cx="300" cy="300" r="52" ' + s + '/>';
    case "lampada":
      return '<circle cx="300" cy="280" r="105" ' + s + '/>' +
        '<rect x="265" y="385" width="70" height="95" rx="12" ' + s + '/>' +
        '<path d="M270 270 L300 240 M330 270 L300 240 M300 240 v40" ' + s + '/>';
    case "tomada":
      return '<rect x="190" y="165" width="220" height="270" rx="36" ' + s + '/>' +
        '<circle cx="345" cy="250" r="24" ' + s + '/>' +
        '<circle cx="345" cy="350" r="24" ' + s + '/>';
    case "aspirador":
      return '<rect x="175" y="255" width="250" height="130" rx="65" ' + s + '/>' +
        '<ellipse cx="300" cy="225" rx="60" ry="45" ' + s + '/>' +
        '<circle cx="300" cy="225" r="20" fill="#c2c8cf" stroke="none"/>';
    case "camera":
      return '<rect x="168" y="205" width="264" height="180" rx="32" ' + s + '/>' +
        '<circle cx="300" cy="295" r="78" ' + s + '/>' +
        '<circle cx="300" cy="295" r="34" fill="#c2c8cf" stroke="none"/>' +
        '<rect x="262" y="75" width="76" height="130" rx="16" ' + s + '/>';
    case "teclado":
      var keys = "";
      for (var r = 0; r < 4; r++) {
        for (var c = 0; c < 8; c++) {
          keys += '<rect x="' + (150 + c * 36) + '" y="' + (205 + r * 38) + '" width="26" height="26" rx="7" ' + s + '/>';
        }
      }
      return '<rect x="128" y="175" width="344" height="235" rx="28" ' + s + '/>' + keys;
    case "carregador":
      return '<rect x="215" y="215" width="170" height="170" rx="85" ' + s + '/>' +
        '<polygon points="315,190 245,320 298,320 288,410 358,282 305,282" fill="#c2c8cf" stroke="none"/>';
    default:
      return '<rect x="150" y="150" width="300" height="300" rx="60" ' + s + '/>' +
        '<circle cx="300" cy="300" r="80" ' + s + '/>';
  }
}

/* ---------- Neutral placeholder image (no gradient, no color) ---------- */
var PH_BG = ["#edf0f2", "#e7ebee", "#eef0f2", "#e9edf1"];
var PH_ROT = [-6, 5, 9, -3];

function svgProduto(prod, variant) {
  if (prod.img && /^https?:\/\//i.test(String(prod.img))) { return prod.img; }
  var v = variant || 0;
  var bg = PH_BG[v % 4], rot = PH_ROT[v % 4];
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">' +
    '<rect width="600" height="600" fill="' + bg + '"/>' +
    '<circle cx="300" cy="470" r="150" fill="rgba(20,28,36,0.05)"/>' +
    '<ellipse cx="300" cy="465" rx="180" ry="24" fill="rgba(20,28,36,0.08)"/>' +
    '<g transform="translate(300,300) rotate(' + rot + ') translate(-300,-300) translate(0,-24)">' +
    iconeSVG(prod.icone) +
    "</g></svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function imgProd(prod, variant) {
  var v = variant || 0;
  var fotos = (prod.fotos && prod.fotos.length) ? prod.fotos : null;
  if (fotos) {
    if (fotos[v] && /^https?:\/\//i.test(String(fotos[v]))) return fotos[v];
    for (var i = 0; i < fotos.length; i++) {
      if (fotos[i] && /^https?:\/\//i.test(String(fotos[i]))) return fotos[i];
    }
  } else if (prod.img && /^https?:\/\//i.test(String(prod.img))) {
    return prod.img;
  }
  return svgProduto(prod, variant);
}

/* ---------- Price comparison: other well-known retailers ---------- */
/* External search URLs only — we never invent prices for other stores. */
var LOJAS_COMPARE = [
  { nome: "Amazon", chave: "amazon", url: "https://www.amazon.com/s?k=" },
  { nome: "Walmart", chave: "walmart", url: "https://www.walmart.com/search?q=" },
  { nome: "eBay", chave: "ebay", url: "https://www.ebay.com/sch/i.html?_nkw=" },
  { nome: "Best Buy", chave: "bestbuy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=" },
  { nome: "Target", chave: "target", url: "https://www.target.com/s?searchTerm=" },
  { nome: "AliExpress", chave: "aliexpress", url: "https://www.aliexpress.com/wholesale?SearchText=" }
];

function chaveBuscaProduto(p) {
  var w = [];
  if (p.marca) w.push(p.marca);
  var m = String(p.nome || "").split(/\s+/);
  for (var i = 0; i < m.length && w.length < 4; i++) {
    var t = m[i].replace(/[^a-zA-Z0-9\-\.]/g, "");
    var menor = String(t).toLowerCase();
    if (!t) continue;
    if (/^(electric|e-?scooter|e-?bike|with|and|for|the|of|to|in|on|recommended|top|max|range|battery|motor|speed|tires|inch|folding|load|mileage|hi|cm)$/.test(menor)) {
      if (w.length === 0) continue;
      break;
    }
    w.push(t);
  }
  return w.join(" ").slice(0, 60);
}

/* ---------- Product description -> structured HTML ---------- */
function descricaoHTML(t) {
  if (!t) return "";
  var linhas = String(t).split(/\n+/);
  var blocos = [];
  var emojis = "🚲⚡🔋🛴🛹🚀💪🌲🛡🔐⚙🖥🔧📶👌🏆🎯🔥🚦🔒";
  for (var i = 0; i < linhas.length; i++) {
    var l = linhas[i].trim();
    if (!l) continue;
    var m = l.match(/^([\u{1F000}-\u{1FAFF}]|[\u2600-\u27BF])?\s*【([^】]+)】\s*(.*)$/u);
    if (m && m[2]) {
      var titulo = (m[1] || "") + " " + m[2];
      var corpo = m[3];
      var j = i + 1;
      var extra = [];
      while (j < linhas.length) {
        var lj = linhas[j].trim();
        if (!lj) break;
        var mj = lj.match(/^[\u{1F000}-\u{1FAFF}]?\s*【[^】]+】/u);
        if (mj) break;
        extra.push(lj);
        j++;
      }
      if (extra.length) corpo += (corpo ? " " : "") + extra.join(" ");
      i = j - 1;
      blocos.push('<div class="d-item">' +
        '<span class="d-titulo">' + esc(titulo) + "</span>" +
        (corpo ? '<span class="d-corpo">' + esc(corpo) + "</span>" : "") +
        "</div>");
    } else {
      blocos.push("<p>" + esc(l) + "</p>");
    }
  }
  return blocos.join("");
}

function renderComparar(p) {
  var alvo = $("#comparar-tabela");
  if (!alvo) return;
  var q = encodeURIComponent(chaveBuscaProduto(p));
  var lojas = (p.lojas_compare && p.lojas_compare.length) ? p.lojas_compare : LOJAS_COMPARE;
  var img = imgProd(p, 0);
  var precos = lojas
    .map(function (l) { return Number(l.preco); })
    .filter(function (x) { return isFinite(x); });
  var melhor = precos.length ? Math.min.apply(null, precos) : null;

  alvo.innerHTML = '<div class="comparar">' + lojas.map(function (l) {
    var temPreco = l.preco != null && isFinite(Number(l.preco));
    var precoN = temPreco ? Number(l.preco) : null;
    var marcaBest = temPreco && melhor != null && precoN === melhor;
    var precoHTML = temPreco
      ? '<small class="comparar-preco">' + fmt(precoN) + (marcaBest ? '<span class="comparar-best">Lowest</span>' : "") + "</small>"
      : "";
    return '<a class="comparar-loja" href="' + l.url + q + '" target="_blank" rel="noopener nofollow">' +
      '<img class="comparar-thumb" src="' + img + '" alt="" loading="lazy"/>' +
      '<span class="comparar-loja-nome">' + esc(l.nome) + precoHTML + '<small class="comparar-cta">Check prices ↗</small></span></a>';
  }).join("") + "</div>";
}

/* ---------- Product card ---------- */
function cardHTML(p) {
  var pct = pctDesc(p.preco, p.preco_anterior);
  var esgotado = p.disponibilidade === "esgotado";
  var badge = pct != null ? '<span class="badge">-' + pct + "%</span>" : "";
  var btn = esgotado
    ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>'
    : '<button class="btn-buy" onclick="abrirOferta(\'' + p.id + '\')">View deal</button>';
  return '<article class="pcard">' +
    '<a class="media" href="product.html?id=' + p.id + '">' + badge +
    '<img src="' + imgProd(p, 0) + '" alt="' + esc(p.nome) + '" loading="lazy"/>' +
    "</a>" +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="product.html?id=' + p.id + '">' + esc(p.nome) + "</a>" +
    '<div class="rating">' + starsHTML(p.rating) + ' <span class="reviews">' + p.rating.toFixed(1) + " (" + num(p.avaliacoes) + ")</span></div>" +
    '<div class="price">' +
    (p.preco_anterior ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (p.preco_anterior ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
    "</div>" +
    '<div class="merchant"><a href="store.html?loja=' + encodeURIComponent(p.merchant) + '">' + esc(p.merchant_nome) + "</a></div>" +
    btn +
    "</div></article>";
}

/* ---------- SEO: per-product meta description + JSON-LD ---------- */
function setMetaDescricao(p) {
  var metaDesc = $('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = p.descricao + " Explore this product on WattWheel — compare prices, ratings and specs, then check the price and buy directly at the retailer.";
}

function injetarSchema(p) {
  var antigo = document.getElementById("ld-product");
  if (antigo) antigo.remove();
  var dados = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.nome,
    "description": p.descricao,
    "brand": { "@type": "Brand", "name": p.marca },
    "sku": p.product_id,
    "offers": {
      "@type": "Offer",
      "url": p.url_afiliado,
      "priceCurrency": "USD",
      "price": p.preco.toFixed(2),
      "itemCondition": "https://schema.org/NewCondition",
      "availability": SCHEMA_DISP[p.disponibilidade] || "https://schema.org/Unavailable",
      "seller": { "@type": "Organization", "name": p.merchant_nome }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": p.rating.toFixed(1),
      "reviewCount": p.avaliacoes
    }
  };
  var s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = "ld-product";
  s.textContent = JSON.stringify(dados);
  document.head.appendChild(s);
}

/* ---------- Buy action (reveal coupon first, then redirect) ---------- */
function revelarCupom(p) {
  if (p.disponibilidade === "esgotado") { toast("This item is currently unavailable at the retailer."); return; }
  var box = $("#cupom-box");
  if (!box || !p.cupom) { irAoParceiro(p); return; }
  var cod = $("#cupom-codigo");
  if (cod) {
    cod.textContent = String(p.cupom).toUpperCase();
    cod.setAttribute("data-codigo", String(p.cupom));
    cod.classList.add("show");
  }
  var nota = $("#cupom-nota");
  if (nota) nota.textContent = (p.cupom_descricao ? p.cupom_descricao + " — " : "") + "Copy the code and paste it at checkout on the retailer's page.";
  var btnCupom = $("#btn-comprar-cupom");
  if (btnCupom) btnCupom.addEventListener("click", function () { irAoParceiro(p); });
  var btnComprar = $("#btn-comprar");
  if (btnComprar) btnComprar.classList.add("hide");
  box.hidden = false;
  box.classList.add("show");
  copiarCupom(p);
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function copiarCupom(p) {
  var cod = $("#cupom-codigo");
  if (!cod) return;
  var texto = String(p.cupom);
  function ok() { toast("Coupon " + texto.toUpperCase() + " copied — apply it at checkout."); }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto).then(ok, function () { _copiarFallback(texto); ok(); });
  } else {
    _copiarFallback(texto); ok();
  }
}
function _copiarFallback(texto) {
  var ta = document.createElement("textarea");
  ta.value = texto;
  ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  ta.remove();
}

function irAoParceiro(p) {
  if (p.disponibilidade === "esgotado") { toast("This item is currently unavailable at the retailer."); return; }
  toast("Opening " + p.merchant_nome + " — the current price and deal are confirmed at checkout.");
  setTimeout(function () { window.open(p.url_afiliado, "_blank", "noopener"); }, 500);
}

function abrirOferta(id) {
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) return;
  if (p.cupom) { revelarCupom(p); return; }
  irAoParceiro(p);
}

function toast(msg) {
  var t = $("#toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(function () { t.classList.add("show"); });
  clearTimeout(t._to);
  t._to = setTimeout(function () { t.classList.remove("show"); }, 2600);
}

/* ---------- Header ---------- */
function renderHeader() {
  var catsHTML = '<a href="index.html">Home</a>';
  CATEGORIAS.forEach(function (c) {
    catsHTML += '<a href="catalog.html?cat=' + c.slug + '">' + esc(c.nome) + "</a>";
  });
  var h = document.createElement("div");
  h.innerHTML =
    '<header class="site-header">' +
    '<div class="container">' +
    '<div class="hdr-top">' +
    '<a class="brand" href="index.html">' +
    '<img class="brand-logo" src="img/logo.png" alt="WattWheel logo"/>' +
    '<span><span class="brand-name">WattWheel</span><span class="brand-tag">discover curated e-scooter &amp; e-bike gear</span></span>' +
    '</a>' +
    '<form class="search-box" id="busca-form" role="search">' +
    '<label class="visually-hidden" for="busca-input">Search products</label>' +
    '<input id="busca-input" type="search" placeholder="Search gear… (e.g. e-scooter, e-bike, battery, charger, motor, tire)" autocomplete="off"/>' +
    '<button class="search-btn" type="submit" aria-label="Search">' + iconLupa() + "</button>" +
    '<div class="sugest" id="busca-sugest"></div>' +
    "</form>" +
    '<nav class="hdr-links" id="hdr-links">' +
    '<a class="ofertas" href="catalog.html?ofertas=1">Deals</a>' +
    '<a href="about.html">About</a>' +
    '<a class="hdr-admin" href="admin.html">Admin</a>' +
    "</nav>" +
    '<button class="menu-btn" id="menu-btn" aria-label="Menu">\u2630</button>' +
    "</div>" +
    '<nav class="cats">' + catsHTML + "</nav>" +
    "</div>" +
    "</header>";
  var slot = $("#app-header");
  if (!slot) return;
  slot.parentNode.insertBefore(h.firstElementChild || h, slot);
  slot.parentNode.removeChild(slot);
  anexarBusca();
  var mb = $("#menu-btn"), links = $("#hdr-links");
  if (mb) mb.addEventListener("click", function () { links.classList.toggle("open"); });
}

function iconLupa() {
  return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
}

/* ---------- Search with suggestions (works for header + hero) ---------- */
function anexarBusca() {
  var qp = new URLSearchParams(location.search);
  $$("#busca-form, #hbusca-form").forEach(function (form) {
    var input = form.querySelector('input[type="search"]');
    var sugest = form.querySelector(".sugest");
    if (!form || !input) return;
    if (qp.get("busca")) input.value = qp.get("busca");

    var sugerir = function () {
      var t = input.value.trim().toLowerCase();
      if (!t) { sugest.classList.remove("open"); return; }
      var hits = PRODUTOS
        .filter(function (p) {
          return (p.nome + " " + p.marca + " " + p.categoria_nome).toLowerCase().indexOf(t) > -1;
        })
        .slice(0, 6);
      var html;
      if (!hits.length) html = '<div class="s-empty">No products found. Try another search.</div>';
      else html = hits.map(function (p) {
        return '<a href="product.html?id=' + p.id + '">' +
          '<span class="thumb"><img src="' + imgProd(p, 0) + '" alt=""/></span>' +
          '<span class="s-name">' + esc(p.nome) + "</span>" +
          '<span class="s-price">' + fmt(p.preco) + "</span></a>";
      }).join("");
      sugest.innerHTML = html;
      sugest.classList.add("open");
    };
    input.addEventListener("input", sugerir);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = input.value.trim();
      if (!t) return;
      sugest.classList.remove("open");
      location.href = "catalog.html?busca=" + encodeURIComponent(t);
    });
  });
  document.addEventListener("click", function (e) {
    $$(".sugest").forEach(function (s) {
      if (!s.contains(e.target)) s.classList.remove("open");
    });
  });
}

/* ---------- Footer ---------- */
function renderFooter() {
  var catLinks = "";
  CATEGORIAS.forEach(function (c) {
    catLinks += '<li><a href="catalog.html?cat=' + c.slug + '">' + esc(c.nome) + "</a></li>";
  });
  var f = document.createElement("div");
  f.innerHTML =
    '<footer class="site-footer">' +
    '<div class="container">' +
    '<div class="foot-top">' +
    '<div class="foot-brand">' +
    '<span class="brand"><img class="brand-logo" src="img/logo.png" alt="WattWheel logo"/><span><span class="brand-name">WattWheel</span></span></span>' +
    "<p>Independent product discovery and curation for electric scooters and electric bikes. We research and organize products, deals and coupons from partner retailers — purchases are completed directly with the retailer, never with us.</p>" +
    "</div>" +
    '<div class="foot-col"><h4>Explore</h4><ul>' + catLinks + "</ul></div>" +
    '<div class="foot-col"><h4>Company</h4><ul>' +
    '<li><a href="about.html">About WattWheel</a></li>' +
    '<li><a href="about.html#how-it-works">How it works</a></li>' +
    '<li><a href="store.html">Retailers we track</a></li>' +
    '<li><a href="about.html#contact">Contact</a></li>' +
    "</ul></div>" +
    '<div class="foot-col"><h4>Transparency</h4>' +
    '<div class="foot-disclose">WattWheel is an independent product discovery website. Some links may be affiliate links, meaning we may earn a commission from qualifying purchases, at no additional cost to you.</div>' +
    '<ul class="foot-legal">' +
    '<li><a href="about.html#disclosure">Affiliate disclosure</a></li>' +
    '<li><a href="about.html#privacy">Privacy policy</a></li>' +
    '<li><a href="about.html#terms">Terms of use</a></li>' +
    '<li><a href="about.html#cookies">Cookie policy</a></li>' +
    "</ul></div>" +
    "</div>" +
    '<div class="foot-bottom"><span>© 2026 ' + esc((DADOS.marca && DADOS.marca.nome) ? DADOS.marca.nome : String(DADOS.marca || "WattWheel")) + ' — independent product discovery for electric scooters &amp; electric bikes. All products and retailers shown in this demo are fictional.</span><span>Built to validate the independent product curation model for e-mobility gear.</span></div>' +
    "</div></footer>";
  var slot = $("#app-footer");
  if (!slot) return;
  slot.parentNode.insertBefore(f.firstElementChild || f, slot);
  slot.parentNode.removeChild(slot);
}

/* ---------- Load data (Supabase -> products.json -> fallback) ---------- */
function supaHeaders(token) {
  var k = (window.SUPA_CONFIG && SUPA_CONFIG.url) ? SUPA_CONFIG.anon : "";
  var h = { "apikey": k };
  h["Authorization"] = "Bearer " + (token || k);
  return h;
}

function carregarDoSupabase() {
  var url = (window.SUPA_CONFIG && SUPA_CONFIG.url) ? SUPA_CONFIG.url : null;
  if (!url) return Promise.reject(new Error("sem-supabase"));
  var base = url + "/rest/v1/produtos?select=id,dados";
  function getPagina(offset) {
    return fetch(base, {
      headers: Object.assign(supaHeaders(), { "Range-Unit": "items", "Range": offset + "-" + (offset + 999) })
    }).then(function (r) {
      if (!r.ok) throw new Error("supa " + r.status);
      return r.json();
    });
  }
  return getPagina(0).then(function (primeira) {
    if (primeira.length === 0) return [];
    if (primeira.length < 1000) return primeira;
    var paginas = [];
    for (var o = 1000; o <= 6000; o += 1000) paginas.push(o);
    var todas = paginas.map(getPagina);
    return Promise.all(todas).then(function (outras) {
      var rows = primeira.slice();
      outras.forEach(function (r) { if (r.length) rows = rows.concat(r); });
      return rows;
    });
  }).then(function (rows) {
    var produtos = [];
    for (var i = 0; i < rows.length; i++) produtos.push(rows[i].dados);
    var cats = {};
    var CAT_ICONE = { "scooters-eletricos": "caixa", "bicicletas-eletricas": "caixa", "baterias-e-motor": "barra", "carregadores": "carregador", "pneus-e-rodas": "caixa", "freios-e-parachoques": "caixa", "luzes-e-visibilidade": "lampada", "capacetes-e-protecao": "fone", "acessorios": "caixa", "pecas-de-reposicao": "caixa" };
    produtos.forEach(function (p) {
      if (!p || !p.categoria) return;
      if (!cats[p.categoria]) {
        cats[p.categoria] = {
          slug: p.categoria,
          nome: p.categoria_nome || p.categoria,
          icone: (p.icone || CAT_ICONE[p.categoria] || "loja"),
          descricao: (p.categoria_nome || p.categoria) + " curated from our partner retailers — compare prices and check the latest deals."
        };
      }
    });
    var categorias = Object.keys(cats).map(function (k) { return cats[k]; });
    return { "marca": "WattWheel", "categorias": categorias, "produtos": produtos };
  });
}

function saneiaProdutos_(produtos) {
  for (var _a = 0; _a < produtos.length; _a++) {
    var _p = produtos[_a];
    var _r = Number(_p.rating);
    var _av = Number(_p.avaliacoes);
    var _pc = Number(_p.preco);
    if (isFinite(_r)) _p.rating = _r;
    if (isFinite(_av)) _p.avaliacoes = _av;
    if (isFinite(_pc)) _p.preco = _pc;
    if (_p.preco_anterior != null && isFinite(Number(_p.preco_anterior))) _p.preco_anterior = Number(_p.preco_anterior);
  }
  return produtos;
}

/* ---------- IndexedDB cache (paint instantaneo + refresh em background) ---------- */
var CACHE_DB = "nshop-cache", CACHE_STORE = "dados", CACHE_KEY = "catalogo-v1";
function idbAbre() {
  return new Promise(function (resolve, reject) {
    if (!(window.indexedDB)) { reject(new Error("no-idb")); return; }
    var req = indexedDB.open(CACHE_DB, 1);
    req.onupgradeneeded = function (e) {
      var db = e.target.result;
      if (!db.objectStoreNames.contains(CACHE_STORE)) db.createObjectStore(CACHE_STORE);
    };
    req.onsuccess = function () { resolve(req.result); };
    req.onerror = function () { reject(req.error); };
  });
}
function cacheLe() {
  return idbAbre().then(function (db) {
    return new Promise(function (resolve) {
      var tx = db.transaction(CACHE_STORE, "readonly");
      var got = tx.objectStore(CACHE_STORE).get(CACHE_KEY);
      got.onsuccess = function () { db.close(); resolve(got.result || null); };
      got.onerror = function () { db.close(); resolve(null); };
    });
  }).catch(function () { return null; });
}
function cacheGrava(dados) {
  return idbAbre().then(function (db) {
    return new Promise(function (resolve) {
      var tx = db.transaction(CACHE_STORE, "readwrite");
      tx.objectStore(CACHE_STORE).put(dados, CACHE_KEY);
      tx.oncomplete = function () { db.close(); resolve(); };
      tx.onerror = function () { db.close(); resolve(); };
    });
  }).catch(function () {});
}
function assinaDados(d) {
  if (!d || !d.produtos || !d.produtos.length) return "0";
  var h = 2166136261;
  for (var i = 0; i < d.produtos.length; i++) {
    var p = d.produtos[i];
    var s = String(p.id) + "|" + String(p.cupom || "") + "|" +
      (p.lojas_compare ? p.lojas_compare.map(function (l) { return l.nome + "@" + (l.preco != null ? l.preco : ""); }).join(",") : "") + "|" +
      String(p.preco != null ? p.preco : "");
    for (var j = 0; j < s.length; j++) { h ^= s.charCodeAt(j); h = Math.imul(h, 16777619); }
  }
  return String(d.produtos.length) + ":" + h;
}
function aplicarDados(d) {
  DADOS = d;
  PRODUTOS = DADOS.produtos;
  CATEGORIAS = DADOS.categorias || [];
  renderHeader();
  renderFooter();
  if (typeof document !== "undefined") {
    var page = document.body && document.body.dataset.page;
    if (page === "home") initHome();
    else if (page === "categoria") initCategoria();
    else if (page === "produto") initProduto();
    else if (page === "loja") initLoja();
    else if (page === "admin") initAdmin();
  }
}

var CACHE_TTL_MS = 30 * 60 * 1000;
function carregarDados() {
  var carregarRede = function () {
    return carregarDoSupabase()
      .catch(function () {
        return fetch("products.json")
          .then(function (r) { if (!r.ok) throw new Error("http"); return r.json(); });
      })
      .then(function (d) {
        if (!d.produtos) d.produtos = [];
        saneiaProdutos_(d.produtos);
        cacheGrava({ dados: d, ts: Date.now() });
        return d;
      });
  };
  var aplicarSeMudou = function (d, c) {
    if (!c || assinaDados(d) !== assinaDados(c.dados)) aplicarDados(d);
    return d;
  };
  return cacheLe().then(function (c) {
    if (c && c.dados && c.dados.produtos && c.dados.produtos.length) {
      if ((Date.now() - (c.ts || 0)) < CACHE_TTL_MS) {
        aplicarDados(c.dados);
        return carregarRede().then(function (d) { return aplicarSeMudou(d, c); });
      }
      return carregarRede();
    }
    return carregarRede();
  }).catch(function () {
    return cacheLe().then(function (c) {
      if (c && c.dados && c.dados.produtos && c.dados.produtos.length) {
        aplicarDados(c.dados);
        return c.dados;
      }
      aplicarDados(STORE_FALLBACK);
      return STORE_FALLBACK;
    });
  });
}

/* ============================================================
   PAGE: HOME
   ============================================================ */

function initHome() {
  var deals = $("#deals-grid");
  if (deals) {
    var comDesconto = PRODUTOS.filter(function (p) { return p.preco_anterior != null && p.preco_anterior > p.preco; })
      .sort(function (a, b) { return pctDesc(b.preco, b.preco_anterior) - pctDesc(a.preco, a.preco_anterior); })
      .slice(0, 15);
    deals.innerHTML = comDesconto.map(cardHTML).join("");
  }

  var pop = $("#populares-grid");
  if (pop) {
    var populares = PRODUTOS.slice()
      .sort(function (a, b) { return b.avaliacoes - a.avaliacoes; })
      .slice(0, 15);
    pop.innerHTML = populares.map(cardHTML).join("");
  }

  var feat = $("#destaques-grid");
  if (feat) {
    var destaques = PRODUTOS
      .filter(function (p) { return p.destaque || p.preco_anterior != null; })
      .sort(function (a, b) { return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0) || b.avaliacoes - a.avaliacoes; })
      .slice(0, 10);
    feat.innerHTML = destaques.map(cardHTML).join("");
  }

  renderPopSearches();
}

function renderPopSearches() {
  var el = $("#pop-searches");
  if (!el) return;
  var contagem = {};
  PRODUTOS.forEach(function (p) {
    var m = p.marca || "Unknown brand";
    if (/sem marca/i.test(m)) return;
    contagem[m] = (contagem[m] || 0) + 1;
  });
  var marcas = Object.keys(contagem).sort(function (a, b) { return contagem[b] - contagem[a]; }).slice(0, 4);
  var sugestoes = CATEGORIAS.slice(0, 4).map(function (c) { return { t: c.nome, q: c.slug }; })
    .concat(marcas.map(function (m) { return { t: m, q: m }; }));
  el.innerHTML = '<span class="pop-label">Popular:</span> ' +
    sugestoes.map(function (s) {
      return '<a href="catalog.html?busca=' + encodeURIComponent(s.q) + '">' + esc(s.t) + "</a>";
    }).join("");
  el.style.display = "";
}

/* ============================================================
   PAGE: CATALOG
   ============================================================ */
var CAT_STATE = { cat: null, ofertas: false, busca: "", ordena: "rel", min: null, max: null, notaMin: 0, soDisponiveis: false, soOfertas: false, marcas: [], lojas: [], descMin: 0, pag: 1 };
var CAT_POR_PAGINA = 24;

function produtosFiltrados() {
  var s = CAT_STATE;
  var marcas = s.marcas.length ? s.marcas.map(function (m) { return m.toLowerCase(); }) : [];
  var lojas = s.lojas.length ? s.lojas.map(function (x) { return x.toLowerCase(); }) : [];
  var lista = PRODUTOS.filter(function (p) {
    if (s.cat && p.categoria !== s.cat) return false;
    if (s.ofertas && p.preco_anterior == null) return false;
    if (s.busca) {
      var t = (p.nome + " " + p.marca + " " + p.categoria_nome).toLowerCase();
      if (t.indexOf(s.busca) === -1) return false;
    }
    if (s.min != null && p.preco < s.min) return false;
    if (s.max != null && p.preco > s.max) return false;
    if (p.rating < s.notaMin) return false;
    if (s.soDisponiveis && p.disponibilidade === "esgotado") return false;
    if (s.soOfertas && p.preco_anterior == null) return false;
    if (marcas.length) {
      var mTxt = String(p.marca || "").trim();
      var passa = (marcas.indexOf("__none__") > -1 && !mTxt) || marcas.indexOf(mTxt.toLowerCase()) > -1;
      if (!passa) return false;
    }
    if (lojas.length && lojas.indexOf(String(p.merchant || "").toLowerCase()) === -1) return false;
    if (s.descMin && pctDesc(p.preco, p.preco_anterior) < s.descMin) return false;
    return true;
  });
  switch (s.ordena) {
    case "menor": lista.sort(function (a, b) { return a.preco - b.preco; }); break;
    case "maior": lista.sort(function (a, b) { return b.preco - a.preco; }); break;
    case "nota": lista.sort(function (a, b) { return b.rating - a.rating; }); break;
    case "pop": lista.sort(function (a, b) { return b.avaliacoes - a.avaliacoes; }); break;
    case "desc": lista.sort(function (a, b) { return (pctDesc(b.preco, b.preco_anterior) || -1) - (pctDesc(a.preco, a.preco_anterior) || -1); }); break;
    default: lista.sort(function (a, b) { return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0) || b.avaliacoes - a.avaliacoes; });
  }
  return lista;
}

function opcoesMarcaLoja() {
  var lojas = {}, marcas = {};
  PRODUTOS.forEach(function (p) {
    if (p.merchant) lojas[p.merchant.toLowerCase()] = { nome: p.merchant_nome || p.merchant, v: p.merchant };
    if (p.marca) marcas[p.marca.toLowerCase()] = { nome: p.marca, v: p.marca, n: (marcas[p.marca.toLowerCase()] || { n: 0 }).n + 1 };
    else marcas["{sem}"] = { nome: "No brand", v: "__none__", n: (marcas["{sem}"] || { n: 0 }).n + 1 };
  });
  var topMarcas = Object.keys(marcas).map(function (k) { return marcas[k]; })
    .sort(function (a, b) { return b.n - a.n; })
    .filter(function (m, i) { return i < 12; });
  return {
    marcas: topMarcas,
    lojas: Object.keys(lojas).map(function (k) { return lojas[k]; })
      .sort(function (a, b) { return a.nome.localeCompare(b.nome); })
  };
}

function initCategoria() {
  var qp = new URLSearchParams(location.search);
  var catSlug = qp.get("cat") || null;
  var ofertas = qp.get("ofertas") === "1";
  var busca = (qp.get("busca") || "").trim().toLowerCase();
  var sortParam = qp.get("ordenar") || null;

  var cat = CATEGORIAS.find(function (c) { return c.slug === catSlug; }) || null;

  CAT_STATE.cat = cat ? cat.slug : null;
  CAT_STATE.ofertas = ofertas;
  CAT_STATE.busca = busca;
  CAT_STATE.pag = 1;
  if (sortParam && ["menor", "maior", "nota", "pop", "desc"].indexOf(sortParam) > -1) CAT_STATE.ordena = sortParam;

  var head = $("#cat-head");
  if (head) {
    var kicker = ofertas ? "Best deals" : (cat ? cat.nome : "Curated catalog");
    var titulo = ofertas ? "Best deals right now" : (cat ? cat.nome : (busca ? "Results for \u201c" + esc(busca) + "\u201d" : "Explore all curated gear"));
    var desc = ofertas ? "The best deals currently in our curated catalog — prices come from retailer listings. Check the price and buy directly at the retailer." : (cat ? cat.descricao : "Browse electric scooter and e-bike gear curated from our partner retailers — compare prices, brands and ratings, then check the price and buy directly at the retailer.");
    head.innerHTML = '<p class="kicker">' + kicker + "</p><h1>" + titulo + "</h1><p>" + desc + "</p>";
  }

  var fCat = $("#filtro-cat");
  if (fCat) {
    fCat.innerHTML = '<label><input type="radio" name="rcat" value="" ' + (!cat ? "checked" : "") + "/> All categories</label>" +
      CATEGORIAS.map(function (c) {
        return '<label><input type="radio" name="rcat" value="' + c.slug + '" ' + (cat && cat.slug === c.slug ? "checked" : "") + "/> " + esc(c.nome) + "</label>";
      }).join("");
  }

  var opcoes = opcoesMarcaLoja();
  var fMarca = $("#filtro-marca");
  if (fMarca) {
    fMarca.innerHTML = opcoes.marcas.map(function (m) {
      return '<label class="chk"><input type="checkbox" name="marca" value="' + esc(m.v) + '"/><span>' + esc(m.nome) + " (" + m.n + ")</span></label>";
    }).join("");
  }
  var fLoja = $("#filtro-loja");
  if (fLoja) {
    fLoja.innerHTML = opcoes.lojas.map(function (l) {
      return '<label class="chk"><input type="checkbox" name="loja" value="' + esc(l.v) + '"/><span>' + esc(l.nome) + "</span></label>";
    }).join("");
  }

  var fRend = $("#filtro-rend");
  if (fRend) {
    fRend.innerHTML =
      '<label class="chk"><input type="checkbox" name="rmin" value="4"><span>Rating 4.0 &amp; up</span></label>' +
      '<label class="chk"><input type="checkbox" name="rmin" value="4.5"><span>Rating 4.5 &amp; up</span></label>';
  }

  var fDisp = $("#filtro-disp");
  if (fDisp) {
    fDisp.innerHTML =
      '<label class="chk"><input type="checkbox" name="sdisp" value="1"><span>In stock only</span></label>' +
      '<label class="chk"><input type="checkbox" name="sofertas" value="1"><span>On sale only</span></label>';
  }

  $$(".cats a").forEach(function (a) {
    if (cat && a.getAttribute("href").indexOf("cat=" + cat.slug) > -1) a.classList.add("active");
    if (ofertas && a.className.indexOf("ofertas") > -1) a.classList.add("active");
  });

  var sel = $("#ordenar");
  if (sel) {
    if (CAT_STATE.ordena) sel.value = CAT_STATE.ordena;
    sel.addEventListener("change", function () { CAT_STATE.ordena = sel.value; CAT_STATE.pag = 1; renderLista(); });
  }

  $("#filtros-form").addEventListener("change", aplicarFiltros);
  $("#filtros-form").addEventListener("input", aplicarFiltros);

  var tgl = $("#filtros-toggle");
  if (tgl) tgl.addEventListener("click", function () {
    var f = $("#filtros");
    f.classList.toggle("open");
    tgl.textContent = f.classList.contains("open") ? "Hide filters" : "Show filters";
  });

  renderLista();
}

function aplicarFiltros() {
  var s = CAT_STATE;
  var rcat = document.querySelector('input[name="rcat"]:checked');
  if (rcat) s.cat = rcat.value || null;
  s.min = $("#fmin").value === "" ? null : Number($("#fmin").value);
  s.max = $("#fmax").value === "" ? null : Number($("#fmax").value);
  var rmin = document.querySelector('input[name="rmin"]:checked');
  s.notaMin = rmin ? Number(rmin.value) : 0;
  s.soDisponiveis = !!document.querySelector('input[name="sdisp"]:checked');
  s.soOfertas = !!document.querySelector('input[name="sofertas"]:checked');
  s.marcas = $$('#filtro-marca input[name="marca"]:checked').map(function (i) { return i.value; });
  s.lojas = $$('#filtro-loja input[name="loja"]:checked').map(function (i) { return i.value; });
  var desc = document.querySelector('input[name="desc"]:checked');
  s.descMin = desc ? Number(desc.value) : 0;
  s.pag = 1;
  renderLista();
}

function renderPager() {
  var el = $("#cat-pager");
  if (!el) return;
  var lista = produtosFiltrados();
  var paginas = Math.ceil(lista.length / CAT_POR_PAGINA);
  if (paginas <= 1) { el.innerHTML = ""; return; }
  var html = '<span class="pager-info">Page ' + CAT_STATE.pag + " of " + paginas + "</span>";
  var prev = 0;
  var ultimoFoiDot = false;
  for (var i = 1; i <= paginas; i++) {
    if (i !== 1 && i !== paginas && Math.abs(i - CAT_STATE.pag) > 2) {
      if (!ultimoFoiDot) { html += '<span class="pager-dots">…</span>'; ultimoFoiDot = true; }
      prev = i;
      continue;
    }
    html += '<button class="pager-btn' + (i === CAT_STATE.pag ? " on" : "") + '" data-p="' + i + '">' + i + "</button>";
    ultimoFoiDot = false;
    prev = i;
  }
  el.innerHTML = html;
  $$(".pager-btn", el).forEach(function (b) {
    b.addEventListener("click", function () {
      CAT_STATE.pag = Number(b.dataset.p);
      renderLista();
    });
  });
}

function renderLista() {
  var lista = produtosFiltrados();
  var grid = $("#cat-grid");
  var count = $("#cat-count");
  if (count) count.textContent = lista.length + " " + (lista.length === 1 ? "product" : "products");
  if (!lista.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><h3>No products found</h3><p>Try adjusting your filters or search terms.</p></div>';
    renderPager();
    return;
  }
  var ini = (CAT_STATE.pag - 1) * CAT_POR_PAGINA;
  var pagina = lista.slice(ini, ini + CAT_POR_PAGINA);
  grid.innerHTML = pagina.map(cardHTML).join("");
  renderPager();
}

/* ============================================================
   PAGE: PRODUCT
   ============================================================ */
function initProduto() {
  var id = new URLSearchParams(location.search).get("id");
  var p = PRODUTOS.find(function (x) { return x.id === id; });
  if (!p) {
    var main = $("main");
    if (main) main.innerHTML = '<div class="container"><div class="empty" style="margin-top:60px"><h3>Product not found</h3><p>The link you followed may be out of date.</p></div></div>';
    return;
  }

  var pct = pctDesc(p.preco, p.preco_anterior);
  var disp = ROTULOS_DISP[p.disponibilidade] || ROTULOS_DISP.em_estoque;
  var esgotado = p.disponibilidade === "esgotado";

  var crumb = $("#crumb");
  if (crumb) {
    crumb.innerHTML =
      '<a href="index.html">Home</a><span class="sep">›</span>' +
      '<a href="catalog.html?cat=' + p.categoria + '">' + esc(p.categoria_nome) + "</a>" +
      '<span class="sep">›</span><span>' + esc(p.marca) + "</span>";
  }

  var mainImg = $("#foto-main");
  var thumbs = $("#fotos-thumb");
  var fotosReais = (p.fotos && p.fotos.length) ? p.fotos : null;
  var variantes = fotosReais ? fotosReais.map(function (_, i) { return i; }) : [0, 1, 2, 3];
  mainImg.src = imgProd(p, 0);
  mainImg.alt = p.nome;
  thumbs.innerHTML = variantes.map(function (v, i) {
    return '<button data-v="' + v + '" class="' + (i === 0 ? "on" : "") + '"><img src="' + imgProd(p, v) + '" alt="View ' + (i + 1) + '"/></button>';
  }).join("");
  thumbs.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    mainImg.src = imgProd(p, Number(b.dataset.v));
    $$("button", thumbs).forEach(function (x) { x.classList.remove("on"); });
    b.classList.add("on");
  });

  $("#pg-titulo").textContent = p.nome;
  var descEl = $("#pg-descricao");
  if (descEl && p.descricao) descEl.innerHTML = descricaoHTML(p.descricao);
  setMetaDescricao(p);
  injetarSchema(p);
  var chipCat = $("#pg-categoria");
  if (chipCat) {
    chipCat.textContent = p.categoria_nome;
    chipCat.href = "catalog.html?cat=" + p.categoria;
    chipCat.classList.add("cat");
  }
  var chipDisp = $("#pg-disponibilidade");
  chipDisp.className = "chip " + disp[1];
  chipDisp.innerHTML = '<span data-dot></span>' + disp[0];

  $("#pg-rating").innerHTML = starsHTML(p.rating) + ' <strong>' + p.rating.toFixed(1) + "</strong> out of 5 <span class=\"count\">(" + num(p.avaliacoes) + " ratings)</span>";
  $("#pg-merchant").innerHTML = "Available at <span class=\"merchant-chip\">" + esc(p.merchant_nome) + "</span>";
  $("#pg-marca").textContent = "Brand: " + p.marca;
  $("#pg-produto-id").textContent = "Partner SKU: " + p.product_id;

  var precoHTML = "";
  if (p.preco_anterior) {
    precoHTML =
      '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" +
      '<div class="row"><span class="now">' + fmt(p.preco) + "</span>" +
      '<span class="pct">-' + pct + '%</span>' +
      '<span class="save">You save ' + fmt(p.preco_anterior - p.preco) + "</span></div>";
  } else {
    precoHTML = '<div class="row"><span class="now">' + fmt(p.preco) + "</span></div>";
  }
  $("#preco-bloco").innerHTML = precoHTML + '<div class="cash">Reference price from the retailer\'s listing — the final price is confirmed at checkout.</div>';

  if (p.comissao) {
    $("#comissao-note").innerHTML = "<strong>Transparency:</strong> WattWheel is an affiliate — we may earn a commission on qualifying purchases made through this link, at no additional cost to you.";
  }

  var btn = $("#btn-comprar");
  btn.disabled = false;
  btn.classList.remove("hide");
  var temCupom = p.cupom && !esgotado;
  btn.innerHTML = esgotado ? "Currently unavailable" : (temCupom ? "Reveal coupon" : "Check price at " + esc(p.merchant_nome));
  btn.disabled = esgotado;
  btn.addEventListener("click", function () {
    if (temCupom) { revelarCupom(p); return; }
    irAoParceiro(p);
  });

  var boxCupom = $("#cupom-box");
  if (boxCupom) {
    boxCupom.hidden = true;
    boxCupom.classList.remove("show");
    var codEl = $("#cupom-codigo");
    if (codEl) { codEl.textContent = ""; codEl.removeAttribute("data-codigo"); codEl.classList.remove("show"); }
  }

  var btnPar = $("#btn-parceiro");
  if (btnPar) {
    btnPar.textContent = "See product at " + esc(p.merchant_nome) + " \u2197";
    btnPar.addEventListener("click", function () { irAoParceiro(p); });
    if (temCupom) btnPar.classList.add("hide");
    else btnPar.classList.remove("hide");
  }
  var parceiroNome = $("#parceiro-nome");
  if (parceiroNome) parceiroNome.textContent = p.merchant_nome;

  var codBtn = $("#cupom-codigo");
  if (codBtn) codBtn.addEventListener("click", function () {
    var codigo = codBtn.getAttribute("data-codigo");
    if (codigo) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codigo).then(function () { toast("Coupon copied — apply it at checkout."); }, function () { toast("Coupon " + codigo.toUpperCase() + " — copy it manually."); });
      } else { _copiarFallback(codigo); toast("Coupon copied — apply it at checkout."); }
    }
  });

  $("#specs-tabela").innerHTML = p.specs.map(function (s) {
    return "<tr><th>" + esc(s.rotulo) + "</th><td>" + esc(s.valor) + "</td></tr>";
  }).join("");

  renderSimilares(p);

  var faq = $("#faq-lista");
  var genericas = [
    { p: "Does WattWheel sell this item?", a: "No. WattWheel is an independent product discovery platform — the button takes you to the retailer, where your purchase is completed. WattWheel never sells, prices or processes payment." },
    { p: "Is the displayed price final?", a: "Prices shown are references collected from retailer listings and can change. Please confirm the price on the retailer's page before completing your order." },
    { p: "Who handles shipping and returns?", a: "Shipping, delivery dates and return policies are set by the retailer. Review those terms on the retailer's product page." }
  ];
  faq.innerHTML = p.faq.concat(genericas).map(function (f) {
    return '<div class="faq-item"><button class="faq-q" type="button">' + esc(f.p) +
      '<span class="chev">\u25BC</span></button><div class="faq-a">' + esc(f.a) + "</div></div>";
  }).join("");
  faq.addEventListener("click", function (e) {
    var b = e.target.closest(".faq-q");
    if (!b) return;
    var item = b.parentNode;
    var estavaAberto = item.classList.contains("open");
    $$(".faq-item", faq).forEach(function (x) { x.classList.remove("open"); });
    if (!estavaAberto) item.classList.add("open");
  });

  var rel = $("#relacionados-grid");
  var relacionados = PRODUTOS.filter(function (x) { return x.id !== p.id; })
    .sort(function (a, b) {
      var sameA = a.categoria === p.categoria ? 0 : 1;
      var sameB = b.categoria === p.categoria ? 0 : 1;
      return sameA - sameB || b.rating - a.rating;
    })
    .slice(0, 4);
  rel.innerHTML = relacionados.map(cardHTML).join("");

  renderComparar(p);
  renderBanners(p);
  renderVideo(p);
  renderReviews(p);

  document.title = p.nome + " · WattWheel";
}

function renderSimilares(principal) {
  var sim = PRODUTOS.filter(function (x) {
    return x.id !== principal.id && x.categoria === principal.categoria;
  }).slice(0, 3);
  if (sim.length < 2) {
    PRODUTOS.forEach(function (x) {
      if (sim.length >= 2) return;
      if (x.id !== principal.id && sim.indexOf(x) === -1) sim.push(x);
    });
  }
  var alvo = $("#similares");
  if (sim.length) {
    alvo.style.display = "";
    $("#similares-grid").innerHTML = sim.map(osCardHTML).join("");

    var labels = principal.specs.map(function (s) { return s.rotulo; });
    var rowsSel = labels.filter(function (r) {
      return sim.some(function (x) { return x.specs.some(function (s) { return s.rotulo === r; }); });
    }).slice(0, 5);

    var headRow = "<tr><th>Feature</th><th>This product</th>" +
      sim.map(function (x) { return "<th>" + esc(x.nome.split(" ").slice(0, 3).join(" ")) + "</th>"; }).join("") + "</tr>";
    var bodyRows = rowsSel.map(function (r) {
      var val = function (x) {
        var v = x.specs.find(function (s) { return s.rotulo === r; });
        return v ? esc(v.valor) : "<span style='color:#aab1b9'>—</span>";
      };
      return "<tr><td class=\"spec-k\">" + esc(r) + "</td><td>" + val(principal) + "</td>" +
        sim.map(function (x) { return "<td>" + val(x) + "</td>"; }).join("") + "</tr>";
    }).join("");
    $("#compara-tabela").innerHTML = headRow + bodyRows;
  } else {
    alvo.style.display = "none";
  }
}

/* ---------- Banners (stacked) ---------- */
function renderBanners(p) {
  var sec = $("#pg-banner-sec");
  var alvo = $("#pg-banner-carousel");
  if (!sec || !alvo) return;
  var banners = (p.banners && p.banners.length) ? p.banners : null;
  if (!banners) { sec.hidden = true; return; }
  sec.hidden = false;
  alvo.innerHTML =
    '<div class="pg-banner-stack">' +
    banners.map(function (url, i) {
      return '<div class="pg-banner-item"><img src="' + esc(url) + '" alt="Banner ' + (i + 1) + '" loading="lazy"/></div>';
    }).join("") +
    "</div>";
}

/* ---------- Video (popup embed) ---------- */
function videoEmbedURL(url) {
  if (!url) return "";
  var raw = String(url).trim();
  var m = raw.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  if (m) return "https://www.youtube.com/embed/" + m[1] + "?rel=0&autoplay=1";
  return raw;
}

function renderVideo(p) {
  var row = $("#video-row");
  var btn = $("#btn-video");
  var modal = $("#modal-video");
  var frame = $("#modal-video-frame");
  if (!row || !btn || !modal || !frame) return;
  if (!p.video) { row.hidden = true; return; }
  row.hidden = false;
  btn.onclick = function () {
    frame.innerHTML = '<iframe src="' + esc(videoEmbedURL(p.video)) + '" title="Product video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };
}

function initModalVideo() {
  var modal = $("#modal-video");
  if (modal) {
    $$("[data-fechar]", modal).forEach(function (el) {
      el.addEventListener("click", function () { fecharModalVideo(); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") fecharModalVideo();
    });
  }
}

function fecharModalVideo() {
  var modal = $("#modal-video");
  var frame = $("#modal-video-frame");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  if (frame) frame.innerHTML = "";
}

/* ---------- Customer reviews ---------- */
function renderReviews(p) {
  var sec = $("#reviews-sec");
  var alvo = $("#reviews-lista");
  if (!sec || !alvo) return;
  var reviews = (p.reviews && p.reviews.length) ? p.reviews : null;
  if (!reviews) { sec.style.display = "none"; return; }
  sec.style.display = "";
  alvo.innerHTML =
    '<div class="reviews-summary">' +
    '<span class="reviews-score">' + (p.rating != null ? p.rating.toFixed(1) : "—") + "</span>" +
    '<span class="reviews-stars">' + starsHTML(p.rating != null ? p.rating : 5) + "</span>" +
    '<span class="reviews-count">' + num(p.avaliacoes) + " reviews</span>" +
    "</div>" +
    '<div class="reviews-lista">' +
    reviews.map(function (r) {
      var avatar = r.foto
        ? '<span class="review-avatar foto"><img src="' + esc(r.foto) + '" alt="" loading="lazy" onerror="this.parentNode.className=\'review-avatar\'"/></span>'
        : '<span class="review-avatar">' + esc(String(r.nome || "C").charAt(0).toUpperCase()) + "</span>";
      return '<div class="review-item">' +
        '<div class="review-head">' +
        avatar +
        '<span class="review-nome">' + esc(r.nome) + "</span>" +
        '<span class="review-nota">' + starsHTML(r.nota != null ? r.nota : 5) + "</span>" +
        "</div>" +
        '<p class="review-texto">' + esc(r.texto) + "</p>" +
        "</div>";
    }).join("") +
    "</div>";
}

function osCardHTML(p) {
  var esgotado = p.disponibilidade === "esgotado";
  return '<article class="pcard">' +
    '<a class="media" href="product.html?id=' + p.id + '">' +
    (pctDesc(p.preco, p.preco_anterior) != null ? '<span class="badge">-' + pctDesc(p.preco, p.preco_anterior) + "%</span>" : "") +
    '<img src="' + imgProd(p, 1) + '" alt="' + esc(p.nome) + '" loading="lazy"/></a>' +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="product.html?id=' + p.id + '">' + esc(p.nome) + "</a>" +
    '<div class="rating">' + starsHTML(p.rating) + " <span class=\"reviews\">" + p.rating.toFixed(1) + " (" + num(p.avaliacoes) + ")</span></div>" +
    '<div class="price">' +
    (p.preco_anterior ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (p.preco_anterior ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
    "</div>" +
    '<div class="merchant"><a href="store.html?loja=' + encodeURIComponent(p.merchant) + '">' + esc(p.merchant_nome) + "</a></div>" +
    (esgotado ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>' : '<button class="btn-buy" onclick="abrirOferta(\'' + p.id + '\')">View deal</button>') +
    "</div></article>";
}

/* ============================================================
   PAGE: STORE (loja)
   ============================================================ */
var LOJA_STATE = { loja: null, ordena: "menor", pag: 1 };
var LOJA_POR_PAGINA = 24;

function initLoja() {
  var qp = new URLSearchParams(location.search);
  var lojaParam = qp.get("loja") || "";

  var loja = null;
  PRODUTOS.forEach(function (p) {
    if ((p.merchant && p.merchant.toLowerCase() === lojaParam.toLowerCase()) ||
        (p.merchant_nome && p.merchant_nome.toLowerCase() === lojaParam.toLowerCase())) {
      loja = { merchant: p.merchant, nome: p.merchant_nome };
    }
  });

  var sel = $("#loja-ordenar");
  if (sel) sel.addEventListener("change", function () { LOJA_STATE.ordena = sel.value; LOJA_STATE.pag = 1; renderLoja(loja); });

  if (!loja) { renderLojaOverview(); return; }

  LOJA_STATE.loja = loja.merchant;
  var nomeEl = $("#loja-nome");
  var head = $("#loja-head");
  var produtos = PRODUTOS.filter(function (p) { return p.merchant === loja.merchant; });
  var menor = Math.min.apply(null, produtos.map(function (p) { return p.preco; }));
  var menorPct = 0;
  produtos.forEach(function (p) { var d = pctDesc(p.preco, p.preco_anterior); if (d != null && d > menorPct) menorPct = d; });
  if (nomeEl) nomeEl.textContent = loja.nome;
  if (head) {
    head.innerHTML =
      '<p class="kicker">Retailer profile · buy directly at the retailer</p>' +
      '<h1>' + esc(loja.nome) + "</h1>" +
      "<p>" + produtos.length + " curated offer" + (produtos.length === 1 ? "" : "s") + " · prices from " + fmt(menor) +
      (menorPct ? " · biggest discount " + menorPct + "%" : "") + ". Buying through our links supports the curation at no additional cost to you.</p>";
  }
  renderLoja(loja);
}

function renderLoja(loja) {
  var produtos = PRODUTOS.filter(function (p) { return p.merchant === loja.merchant; });
  switch (LOJA_STATE.ordena) {
    case "menor": produtos.sort(function (a, b) { return a.preco - b.preco; }); break;
    case "maior": produtos.sort(function (a, b) { return b.preco - a.preco; }); break;
    case "nota": produtos.sort(function (a, b) { return b.rating - a.rating; }); break;
    case "pop": produtos.sort(function (a, b) { return b.avaliacoes - a.avaliacoes; }); break;
    case "desc": produtos.sort(function (a, b) { return (pctDesc(b.preco, b.preco_anterior) || -1) - (pctDesc(a.preco, a.preco_anterior) || -1); }); break;
    default: produtos.sort(function (a, b) { return a.preco - b.preco; });
  }
  var grid = $("#loja-grid");
  var count = $("#loja-count");
  var pager = $("#loja-pager");
  if (count) count.textContent = produtos.length + " " + (produtos.length === 1 ? "offer" : "offers") + " from " + esc(loja.nome);
  if (!produtos.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><h3>No offers found</h3><p>Try another store.</p></div>';
    if (pager) pager.innerHTML = "";
    return;
  }
  var paginas = Math.ceil(produtos.length / LOJA_POR_PAGINA);
  if (LOJA_STATE.pag > paginas) LOJA_STATE.pag = 1;
  var ini = (LOJA_STATE.pag - 1) * LOJA_POR_PAGINA;
  grid.innerHTML = produtos.slice(ini, ini + LOJA_POR_PAGINA).map(cardHTML).join("");
  if (pager) {
    pager.innerHTML = paginas <= 1 ? "" : '<span class="pager-info">Page ' + LOJA_STATE.pag + " of " + paginas + "</span>";
    for (var i = 1; i <= paginas; i++) {
      pager.innerHTML += '<button class="pager-btn' + (i === LOJA_STATE.pag ? " on" : "") + '" data-p="' + i + '">' + i + "</button>";
    }
    $$(".pager-btn", pager).forEach(function (b) {
      b.addEventListener("click", function () {
        LOJA_STATE.pag = Number(b.dataset.p);
        renderLoja(loja);
      });
    });
  }
}

function renderLojaOverview() {
  var lojas = {};
  PRODUTOS.forEach(function (p) {
    if (!p.merchant) return;
    var k = p.merchant.toLowerCase();
    if (!lojas[k]) lojas[k] = { merchant: p.merchant, nome: p.merchant_nome || p.merchant, qtd: 0, menor: Infinity };
    lojas[k].qtd++;
    if (p.preco < lojas[k].menor) lojas[k].menor = p.preco;
  });
  var itens = Object.keys(lojas).sort(function (a, b) { return lojas[b].qtd - lojas[a].qtd; });
  var head = $("#loja-head");
  if (head) {
    head.innerHTML = '<p class="kicker">Retailers we track</p><h1>All partner retailers</h1>' +
      "<p>Every retailer whose products we curate. Pick one to browse its catalog with prices, ratings and deals.</p>";
  }
  var grid = $("#loja-grid");
  var count = $("#loja-count");
  var pager = $("#loja-pager");
  var nomeEl = $("#loja-nome");
  if (nomeEl) nomeEl.textContent = "All partner retailers";
  if (count) count.textContent = itens.length + " " + (itens.length === 1 ? "store" : "stores");
  if (pager) pager.innerHTML = "";
  if (grid) {
    grid.innerHTML = itens.length
      ? '<div class="store-grid">' + itens.map(function (k) {
          var l = lojas[k];
          var iniciais = String(l.nome).split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
          return '<a class="store-card big" href="store.html?loja=' + encodeURIComponent(l.merchant) + '">' +
            '<span class="store-logo">' + esc(iniciais) + "</span>" +
            '<span class="store-meta"><strong>' + esc(l.nome) + "</strong>" +
            "<span>" + l.qtd + " offer" + (l.qtd === 1 ? "" : "s") + " · from " + fmt(l.menor) + "</span>" +
            "</span><span class=\"store-link\">View store ›</span></a>";
        }).join("") + "</div>"
      : '<div class="empty" style="grid-column:1/-1"><h3>No stores found</h3><p>Store profiles appear here when offers are loaded.</p></div>';
  }
}

/* ---------- Boot ---------- */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    initModalVideo();
    carregarDados();
  });
}