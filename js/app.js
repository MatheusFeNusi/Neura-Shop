/* ============================================================
   AISLE — app.js
   Independent product discovery for electric scooters & electric bikes.
   Curation + affiliate links. Data in products.json
   (plus embedded fallback so the files work from file:// too).
   ============================================================ */

/* ---------- Embedded fallback (mirror of products.json) ---------- */
var STORE_FALLBACK = {"marca":"E-Ride Deals","categorias":[{"slug":"scooters-eletricos","nome":"Electric Scooters","icone":"caixa","descricao":"Electric scooters for every rider — with live price and real rating per listing."},{"slug":"bicicletas-eletricas","nome":"Electric Bikes","icone":"caixa","descricao":"Electric bikes and e-bike kits — with live price and real rating per listing."}],"produtos":[{"id":"ww-1991948","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://pxunbqwpiauhzpugcgwm.supabase.co/storage/v1/object/sign/Matheus%20Nunes/JANSNO%20X60%20Electric%20Bike%2048V%2023AH%20Battery%20750W*2%20Dual%20Motors%20Recommended%20Top%20Speed%2025KM/img1%20(1).png?token=eyJraWQiOiI0NjVjODZhMS0xMjdhLTQ1ZjktYjNlMC1hMTFlOWU2MWMxYmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJNYXRoZXVzIE51bmVzL0pBTlNOTyBYNjAgRWxlY3RyaWMgQmlrZSA0OFYgMjNBSCBCYXR0ZXJ5IDc1MFcqMiBEdWFsIE1vdG9ycyBSZWNvbW1lbmRlZCBUb3AgU3BlZWQgMjVLTS9pbWcxICgxKS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkwNTA3NDQzLCJleHAiOjIwNzQzMzE0NDN9._cWTCZqEP5RW6pn3uS0zliFisDH7t0Qeh063pMV7ZJHwgWB-IeBmM73vbOHnZbDi94iZcs72dSDn14-h_pEILw","nome":"WQ-W4 Pro Electric Scooter 36V 10Ah Battery 350W Motor Recommended Top Speed 25KM/H 8.5inch Tires 25KM/H Top Speed 25-30KM Max Mileage Range 120KG Max Load Folding E-Scooter XIAOMI M365","fotos":[],"icone":"caixa","marca":"WQ-W4","preco":259.99,"specs":[{"valor":"WQ-W4","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"36V","rotulo":"Voltage"},{"valor":"10Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"8.5inch","rotulo":"Size"},{"valor":"4.91 / 5","rotulo":"Rating"},{"valor":"152","rotulo":"Reviews"},{"valor":"US$ 259.99","rotulo":"Price"},{"valor":"US$ 579.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":"https://www.youtube.com/results?search_query=WQ-W4%20WQ-W4%20Pro%20Electric%20Scooter","rating":0,"banners":[],"comissao":3,"destaque":true,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"🛴 【36V 10Ah Removable Lithium Battery】\nEnjoy long-distance rides with the high-capacity 36V 10Ah lithium battery. The removable design makes charging simple and convenient at home, work, or wherever you have access to power. Under optimal riding conditions, it provides reliable energy for extended daily commutes.\n\n🛴 【350W High-Torque Motor】\nExperience responsive acceleration with the powerful 350W motor system. Engineered to deliver impressive torque, this electric scooter easily navigates steep inclines, city streets, and rugged paths with smooth, consistent power output.\n\n🛴 【Extended Riding Range & Smart Power】\nThe 36V 10Ah battery system is optimized for maximum efficiency, offering up to 25KM per full charge. Intelligent energy management balances throttle control and pedal/power assist for longer trips.\n\n🛴 【All-Terrain Design & Robust Frame】\nBuilt with a durable, high-strength frame paired with 8.5inch tires for maximum stability and traction. Designed to cushion shocks on uneven pavement, gravel, and dirt roads. Supports a maximum payload capacity of 120KG Max Load.\n\n🛴 【Dual Disc Brakes & Night Safety Lighting】\nFeatures high-precision front and rear disc brakes for strong, predictable stopping power. Integrated ultra-bright LED headlights and rear brake lights ensure maximum visibility during night commutes.\n\n🛴 【Quick Assembly & Warranty Support】\nArrives 85%–90% pre-assembled with setup tools and clear instructions included. Backed by dedicated customer support and standard warranty coverage for total peace of mind.","avaliacoes":0,"product_id":"WW-1991948","url_afiliado":"https://usa.banggood.com/custlink/Dmmlr1DHPT","lojas_compare":[{"nome":"Amazon","preco":422}],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":579.99,"disponibilidade":"em_estoque"},{"id":"ww-2045406","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/EA/93/4937c181-91f2-4e3c-a718-b496da873f7e.jpg.webp","nome":"ENGWE Y400 Electric Scooter 13.5Ah 48V 500W (PEAK 740W) Recommended Top Speed 25KM/H 10 Inches Folding Electric Scooter 50km Mileage Max Load 120Kg","fotos":[],"icone":"caixa","marca":"ENGWE","preco":774.99,"specs":[{"valor":"ENGWE","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"13.5Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"10 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 774.99","rotulo":"Price"},{"valor":"US$ 999.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2045406","url_afiliado":"https://usa.banggood.com/custlink/3mmoc1GPND","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":999.99,"disponibilidade":"em_estoque"},{"id":"ww-2046216","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/77/80/38a89463-11f9-47fb-8968-81025d279e4e.jpg.webp","nome":"Freeboy J30 MAX Electric Scooter 60V 38Ah, 6000W Dual Motor, 90-100km Range, 150kg Load","fotos":[],"icone":"caixa","marca":"Freeboy","preco":1899,"specs":[{"valor":"Freeboy","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"60V","rotulo":"Voltage"},{"valor":"38Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 1874.99","rotulo":"Price"},{"valor":"US$ 2599.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2046216","url_afiliado":"https://usa.banggood.com/custlink/mvKjJ1vENz","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":2599.99,"disponibilidade":"em_estoque"},{"id":"ww-2046220","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/03/22/ba66df9d-0503-4d03-ade5-79f1ae00af0d.jpg.webp","nome":"Freeboy J05 MAX Electric Scooter 15Ah 36V 500W Motor Recommended Top Speed 25KM/H 10 Inches Tire Electric Scooter 35-40km Mileage Max Load 150Kg","fotos":[],"icone":"caixa","marca":"Freeboy","preco":579.99,"specs":[{"valor":"Freeboy","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"36V","rotulo":"Voltage"},{"valor":"15Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"10 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 554.99","rotulo":"Price"},{"valor":"US$ 899.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2046220","url_afiliado":"https://usa.banggood.com/custlink/3GvlJwvFZE","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":899.99,"disponibilidade":"em_estoque"},{"id":"ww-2046221","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D6/09/7b3b9a83-0221-4968-baa1-24745f482579.jpg.webp","nome":"Freeboy J01 Electric Scooter 15Ah 48V 800W Motor Recommended Top Speed 25KM/H 10 Inches Tire Electric Scooter 50-55km Mileage Max Load 150Kg","fotos":[],"icone":"caixa","marca":"Freeboy","preco":664.99,"specs":[{"valor":"Freeboy","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"15Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"10 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 664.99","rotulo":"Price"},{"valor":"US$ 999.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2046221","url_afiliado":"https://usa.banggood.com/custlink/m3voWfm5IJ","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":999.99,"disponibilidade":"em_estoque"},{"id":"ww-2046192","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/84/D4/6fe93727-cabc-4d4c-8286-436aaf7b6816.jpg.webp","nome":"Freeboy H8 Electric Scooter 28Ah 60V 3000W*2 Dual Motor Recommended Top Speed 25KM/H 11 Inches Tire Electric Scooter 80-90km Mileage Max Load 150Kg","fotos":[],"icone":"caixa","marca":"Freeboy","preco":1734.99,"specs":[{"valor":"Freeboy","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"60V","rotulo":"Voltage"},{"valor":"28Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 1734.99","rotulo":"Price"},{"valor":"US$ 2199.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2046192","url_afiliado":"https://usa.banggood.com/custlink/m3voWfm5IJ","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":2199.99,"disponibilidade":"em_estoque"},{"id":"ww-2046206","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/4F/4E/12ac2449-7073-44cc-8758-0bb5ea4c6412.jpg.webp","nome":"Freeboy J15 MAX Electric Scooter 18Ah 48V 1600W Motor Recommended Top Speed 25KM/H 11 Inches Tire Electric Scooter 45-50km Mileage Max Load 150Kg","fotos":[],"icone":"caixa","marca":"Freeboy","preco":914.99,"specs":[{"valor":"Freeboy","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"18Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 914.99","rotulo":"Price"},{"valor":"US$ 1299.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2046206","url_afiliado":"https://usa.banggood.com/custlink/vvDOW7GH95","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":1299.99,"disponibilidade":"em_estoque"},{"id":"ww-2046213","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/52/0D/c26a4d93-4327-4f1a-8d94-b0cb1883c70d.jpg.webp","nome":"Freeboy H9 Electric Scooter 30Ah 60V 3000W*2 Dual Motor Recommended Top Speed 25KM/H 11 Inches Tire Electric Scooter 80-90km Mileage Max Load 150Kg","icone":"caixa","marca":"Freeboy","preco":1914.99,"specs":[{"valor":"Freeboy","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"60V","rotulo":"Voltage"},{"valor":"30Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 1914.99","rotulo":"Price"},{"valor":"US$ 2599.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"rating":0,"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2046213","url_afiliado":"https://usa.banggood.com/US-DIRECT-Freeboy-H9-Electric-Scooter-30Ah-60V-3000W+2-Dual-Motor-Recommended-Top-Speed-25KM-or-H-11-Inches-Tire-Electric-Scooter-80-90km-Mileage-Max-Load-150Kg-p-2046213.html?cur_warehouse=USA&ID=6287830&rmmds=CategorySportsPop&trace_id=ca331790339563550","merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":2599.99,"disponibilidade":"em_estoque"},{"id":"ww-2055760","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/18/99/f3937ed6-0aab-4a6b-bb7b-0232b1af5048.png.webp","nome":"GOKEEP F5 Electric Scooter 20Ah 52V 1000W Recommended Top Speed 25KM/H 11 Inches Folding Electric Scooter 43km Mileage Max Load 120Kg","fotos":[],"icone":"caixa","marca":"GOKEEP","preco":659,"specs":[{"valor":"GOKEEP","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"52V","rotulo":"Voltage"},{"valor":"20Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 634.00","rotulo":"Price"},{"valor":"US$ 1599.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2055760","url_afiliado":"https://usa.banggood.com/custlink/DKvaCfmH8S","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":1599.99,"disponibilidade":"em_estoque"},{"id":"ww-2054347","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6D/67/e6fb89ee-2b58-4ae3-b129-42385a1fea86.png.webp","nome":"GOKEEP F4 Electric Scooter 48V 15.6AH 250W(Peak 1000W) Motor Top Speed 25KM/H 10Inch Tire 40KM Mileage 120kg Max Load","fotos":[],"icone":"caixa","marca":"GOKEEP","preco":599,"specs":[{"valor":"GOKEEP","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"15.6Ah","rotulo":"Battery"},{"valor":"10Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 574.00","rotulo":"Price"},{"valor":"US$ 1399.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2054347","url_afiliado":"https://usa.banggood.com/custlink/D3GOruDIDh","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":1399.99,"disponibilidade":"em_estoque"},{"id":"ww-2018649","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/B1/1E/5f0634a0-0094-4be2-987b-2f133d17308c.jpg.webp","nome":"BOYUEDA S5 Electric Scooter 38Ah 60V 3000W*2 Dual Motor Recommended Top Speed 25KM/H 11in Folding Moped Electric Scooter 100-120KM Mileage Electric Scooter Max Load 200Kg","fotos":[],"icone":"caixa","marca":"BOYUEDA","preco":1274,"specs":[{"valor":"BOYUEDA","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"60V","rotulo":"Voltage"},{"valor":"38Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"4.70 / 5","rotulo":"Rating"},{"valor":"10","rotulo":"Reviews"},{"valor":"US$ 1274.00","rotulo":"Price"},{"valor":"US$ 1299.00","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":4.7,"banners":[],"comissao":3,"destaque":true,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.7 out of 5 from 10 reviews.","avaliacoes":10,"product_id":"WW-2018649","url_afiliado":"https://usa.banggood.com/custlink/3KmoWu3HZl","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":1299,"disponibilidade":"em_estoque"},{"id":"ww-1978710","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/61/BA/da06e22a-84c0-4c60-b992-f8d93b320814.jpg.webp","nome":"BOYUEDA S3-11 Electric Scooter With Seat 38Ah 6000W Recommended Top Speed 25KM/H 60V Oil Brake 11 Inch Electric Scooter 150-200Kg Max Load 100Km Range EU Direct USA Direct","fotos":[],"icone":"caixa","marca":"BOYUEDA","preco":1174.99,"specs":[{"valor":"BOYUEDA","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"60V","rotulo":"Voltage"},{"valor":"38Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11 Inch","rotulo":"Size"},{"valor":"4.93 / 5","rotulo":"Rating"},{"valor":"490","rotulo":"Reviews"},{"valor":"US$ 1174.99","rotulo":"Price"},{"valor":"US$ 1199.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":4.93,"banners":[],"comissao":3,"destaque":true,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.9 out of 5 from 490 reviews.","avaliacoes":490,"product_id":"WW-1978710","url_afiliado":"https://usa.banggood.com/custlink/KGGLc1DHS4","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":1199.99,"disponibilidade":"em_estoque"},{"id":"ww-2013564","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/84/A2/b7df137d-a6d2-4312-b35a-af8c342f92be.jpg.webp","nome":"TOURSOR X8P Electric Scooter 60V 38.8AH Battery 4000W*2 Dual Motors Recommended Top Speed 25KM/H 14inch Off-Road Tires 110KM Max Mileage 200KG Max Load Folding E-Scooter","fotos":[],"icone":"caixa","marca":"TOURSOR","preco":1544.99,"specs":[{"valor":"TOURSOR","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"60V","rotulo":"Voltage"},{"valor":"38.8Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"14inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 1544.99","rotulo":"Price"},{"valor":"US$ 3049.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2013564","url_afiliado":"https://usa.banggood.com/custlink/G3mocw3F9n","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":3049.99,"disponibilidade":"em_estoque"},{"id":"ww-2045347","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/6D/42/6cb06fd4-c480-40c2-ba80-91ff7bff5b3c.png.webp","nome":"GOKEEP F5 Electric Scooter 20Ah 52V 1000W Recommended Top Speed 25KM/H 11 Inches Folding Electric Scooter 43km Mileage Max Load 120Kg","fotos":[],"icone":"caixa","marca":"GOKEEP","preco":569.49,"specs":[{"valor":"GOKEEP","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"52V","rotulo":"Voltage"},{"valor":"20Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11 Inch","rotulo":"Size"},{"valor":"4.82 / 5","rotulo":"Rating"},{"valor":"17","rotulo":"Reviews"},{"valor":"US$ 569.49","rotulo":"Price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":4.82,"banners":[],"comissao":3,"destaque":true,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.8 out of 5 from 17 reviews.","avaliacoes":17,"product_id":"WW-2045347","url_afiliado":"https://usa.banggood.com/custlink/DvDOc7D58u","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":null,"disponibilidade":"em_estoque"},{"id":"ww-1999979","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A6/7A/03860811-decf-4bd3-beaa-97afe2005d91.jpg.webp","nome":"COASTA L9pro Electric Scooter 36V 20Ah 350W*2 Dual Motors Recommended Top Speed 25KM/H 8.5inch 40KM Mileage 120KG Payload Folding E-Scooter","fotos":[],"icone":"caixa","marca":"COASTA","preco":544.99,"specs":[{"valor":"COASTA","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"36V","rotulo":"Voltage"},{"valor":"20Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"8.5inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 544.99","rotulo":"Price"},{"valor":"US$ 1029.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-1999979","url_afiliado":"https://usa.banggood.com/custlink/GK3OW7DtOd","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":1029.99,"disponibilidade":"em_estoque"},{"id":"ww-2023774","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/50/FD/a0b2af1b-81de-4348-aa89-ea1610f235c1.jpg.webp","nome":"BOYUEDA Q7Pro Max Electric Scooter 52V 28Ah 1600W*2 Dual Motor Recommended Top Speed 25KM/H 10inch Folding Moped Electric Scooter 90-110KM Mileage Electric Scooter Max Load 200Kg EU DIRECT","icone":"caixa","marca":"BOYUEDA","preco":874,"specs":[{"valor":"BOYUEDA","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"52V","rotulo":"Voltage"},{"valor":"28Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"10inch","rotulo":"Size"},{"valor":"4.50 / 5","rotulo":"Rating"},{"valor":"2","rotulo":"Reviews"},{"valor":"US$ 874.00","rotulo":"Price"},{"valor":"US$ 899.00","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"rating":4.5,"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 4.5 out of 5 from 2 reviews.","avaliacoes":2,"product_id":"WW-2023774","url_afiliado":"https://usa.banggood.com/EU-DIRECT-BOYUEDA-Q7Pro-Max-Electric-Scooter-52V-28Ah-1600W+2-Dual-Motor-Recommended-Top-Speed-25KM-or-H-10inch-Folding-Moped-Electric-Scooter-90-110KM-Mileage-Electric-Scooter-Max-Load-200Kg-EU-DIRECT-p-2023774.html?cur_warehouse=USA&ID=6297321&rmmds=CategorySportsPop&trace_id=ca331790339563550","merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":899,"disponibilidade":"em_estoque"},{"id":"ww-2041807","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/56/1E/7b75670d-d8aa-47ca-9bc2-4179e34c7c75.jpg.webp","nome":"OOTD T10 Electric Scooter 48V 18AH Battery 900W Motor Recommended Top Speed 25KM/H 11inches Tires 80KM Max Mileage 120KG Max Load Folding E-Scooter","fotos":[],"icone":"caixa","marca":"OOTD","preco":569.99,"specs":[{"valor":"OOTD","rotulo":"Brand"},{"valor":"Electric Scooters","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"18Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"11inch","rotulo":"Size"},{"valor":"5.00 / 5","rotulo":"Rating"},{"valor":"3","rotulo":"Reviews"},{"valor":"US$ 564.99","rotulo":"Price"},{"valor":"US$ 1379.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":5,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"scooters-eletricos","descricao":"An electric scooter curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout. Rated 5.0 out of 5 from 3 reviews.","avaliacoes":3,"product_id":"WW-2041807","url_afiliado":"https://usa.banggood.com/custlink/KmKlr735or","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Scooters","preco_anterior":1379.99,"disponibilidade":"em_estoque"},{"id":"ww-2043357","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/E0/60/1ff07ec5-e5d7-4f1e-a4d5-eb462956a277.jpg.webp","nome":"Shengmilo S600 Electric Bike 48V 17.5AH SamsungBattery 1000W*2 Dual Motors Recommended Top Speed 25KM/H 26inch Tires 90KM Max Mileage 150KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"Shengmilo","preco":1974.99,"specs":[{"valor":"Shengmilo","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"17.5Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"26inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 1974.99","rotulo":"Price"},{"valor":"US$ 2879.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2043357","url_afiliado":"https://usa.banggood.com/custlink/vKKjJ7mFl9","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":2879.99,"disponibilidade":"em_estoque"},{"id":"ww-2041055","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/07/ce371e96-d096-426a-b867-cebdfe389d21.jpg.webp","nome":"SINOHON EM200 Electric Bike 48V 12.5AH Battery 500W Recommended Top Speed 25KM/H Motor 26 Inch Electric Bicycle 65-85 KM Mileage Range Max Load 150KG SINOHON EM200","fotos":[],"icone":"caixa","marca":"SINOHON","preco":474,"specs":[{"valor":"SINOHON","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"12.5Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"26 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 474.00","rotulo":"Price"},{"valor":"US$ 499.00","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2041055","url_afiliado":"https://usa.banggood.com/custlink/v3vOJ1G5oj","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":499,"disponibilidade":"em_estoque"},{"id":"ww-2041062","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/95/AB/a255f6b7-7971-4514-b936-7e1423365173.jpg.webp","nome":"SINOHON EM200D Electric Bike 36V 10.4AH Battery 500W Motor Recommended Top Speed 25KM/H 26 Inch Electric Bicycle 40-60 KM Mileage Range Max Load 150KG SINOHON EM200D","icone":"caixa","marca":"SINOHON","preco":374,"specs":[{"valor":"SINOHON","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"36V","rotulo":"Voltage"},{"valor":"10.4Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"26 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 374.00","rotulo":"Price"},{"valor":"US$ 399.00","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"rating":0,"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2041062","url_afiliado":"https://usa.banggood.com/US-DIRECT-SINOHON-EM200D-Electric-Bike-36V-10_4AH-Battery-500W-Motor-Recommended-Top-Speed-25KM-or-H-26-Inch-Electric-Bicycle-40-60-KM-Mileage-Range-Max-Load-150KG-SINOHON-EM200D-p-2041062.html?cur_warehouse=USA&ID=6287832&rmmds=CategorySportsPop&trace_id=12f11790339822238","merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":399,"disponibilidade":"em_estoque"},{"id":"ww-2041052","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/01/37/9cfbbe18-4256-402f-97d2-d614083feccc.jpg.webp","nome":"SINOHON EM200G Electric Bike 48V 15.6AH Battery 500W Motor Recommended Top Speed 25KM/H 26 Inch Electric Bicycle 40-60 KM Mileage Range Max Load 150KG SINOHON EM200G","fotos":[],"icone":"caixa","marca":"SINOHON","preco":464,"specs":[{"valor":"SINOHON","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"15.6Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"26 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 464.00","rotulo":"Price"},{"valor":"US$ 489.00","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2041052","url_afiliado":"https://usa.banggood.com/custlink/mKKOrfGVo0","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":489,"disponibilidade":"em_estoque"},{"id":"ww-2041060","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/90/51/bd123c5b-4dd5-48bd-872a-ef58e35c8691.jpg.webp","nome":"SINOHON EM200 Electric Bike 48V 12.5AH Battery 500W Motor Recommended Top Speed 25KM/H 26 Inch Electric Bicycle 40-60 KM Mileage Range Max Load 150KG SINOHON EM200","fotos":[],"icone":"caixa","marca":"SINOHON","preco":464,"specs":[{"valor":"SINOHON","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"12.5Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"26 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 464.00","rotulo":"Price"},{"valor":"US$ 489.00","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2041060","url_afiliado":"https://usa.banggood.com/custlink/vmDjWf3Fa2","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":489,"disponibilidade":"em_estoque"},{"id":"ww-2045222","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/B7/4B/7ad2886d-36b6-4e88-9893-d11aff34e6df.png.webp","nome":"URLIFE E20 Electric Bike 48V 13AH 500W(Peak 1000W) Motor Recommended Top Speed 25KM/H 20inch Tire 130KM Max Mileage 120KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"URLIFE","preco":674.99,"specs":[{"valor":"URLIFE","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"13Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"1","rotulo":"Reviews"},{"valor":"US$ 674.99","rotulo":"Price"},{"valor":"US$ 699.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2045222","url_afiliado":"https://usa.banggood.com/custlink/3GDjWTvPjb","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":699.99,"disponibilidade":"em_estoque"},{"id":"ww-2045223","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3A/16/dcd30b54-8f4e-4b5f-adc9-efbf2fb8d737.png.webp","nome":"URLIFE T2 Electric Bike 48V 15.6AH 250W(Peak 1500W) Motor Recommended Top Speed 25KM/H 20inch Fat Tire 160KM Max Mileage 120KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"URLIFE","preco":974.99,"specs":[{"valor":"URLIFE","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"15.6Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"1","rotulo":"Reviews"},{"valor":"US$ 974.99","rotulo":"Price"},{"valor":"US$ 999.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2045223","url_afiliado":"https://usa.banggood.com/custlink/3D3jcfKPo7","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":999.99,"disponibilidade":"em_estoque"},{"id":"ww-2045356","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/2E/32/8e8167be-ef75-49d3-8b67-1c69ad699530.jpg.webp","nome":"JANSNO X90 Electric Bike 48V 14Ah Battery 48V 750W Motor Recommended Top Speed 25KM/H 16inch Tires 45KM Max Mileage 150KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"JANSNO","preco":904.99,"specs":[{"valor":"JANSNO","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"14Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"16inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 904.99","rotulo":"Price"},{"valor":"US$ 2079.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2045356","url_afiliado":"https://usa.banggood.com/custlink/vm3jW7GFgP","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":2079.99,"disponibilidade":"em_estoque"},{"id":"ww-2011522","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/FA/9D/38cc3e02-d314-4d48-ab45-156b6791e18e.jpg.webp","nome":"DRVETION AT20 Electric Bike 48V 15Ah Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Tires 45KM Max Mileage Range 150KG Max Load Folding Electric Bicycle","fotos":[],"icone":"caixa","marca":"DRVETION","preco":959.99,"specs":[{"valor":"DRVETION","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"15Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"4.0inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 959.99","rotulo":"Price"},{"valor":"US$ 1979.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2011522","url_afiliado":"https://usa.banggood.com/custlink/3GDlCf3t4D","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":1979.99,"disponibilidade":"em_estoque"},{"id":"ww-2011529","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/E6/C2/4fb9f810-cfcd-4619-aef8-a6e926ae8ac5.jpg.webp","nome":"DRVETION CT20 Electric Bike 48V 20AH Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Fat Tires 80-110KM Max Mileage 150KG Max Load Folding Electric Bicycle","icone":"caixa","marca":"DRVETION","preco":959.99,"specs":[{"valor":"DRVETION","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"20Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"4.0inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 959.99","rotulo":"Price"},{"valor":"US$ 2189.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"rating":0,"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2011529","url_afiliado":"https://usa.banggood.com/USA-DIRECT-DRVETION-CT20-Electric-Bike-48V-20AH-Battery-750W-Motor-Recommended-Top-Speed-25KM-or-H-20+4_0inch-Fat-Tires-80-110KM-Max-Mileage-150KG-Max-Load-Folding-Electric-Bicycle-p-2011529.html?cur_warehouse=USA&rmmds=CategorySportsPop&trace_id=12f11790339822238","merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":2189.99,"disponibilidade":"em_estoque"},{"id":"ww-2032208","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/4D/14/8c020b34-2f06-4b2c-9bc4-31e58b926dda.jpg.webp","nome":"JANSNO X70 Electric Bike 48V 14AH+20AH Dual Batteries 750W Motor Recommended Top Speed 25KM/H 20inches Tires 120KM Max Mileage 150KG Max Load Electric Bicycle","icone":"caixa","marca":"JANSNO","preco":1094.99,"specs":[{"valor":"JANSNO","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"14Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"1","rotulo":"Reviews"},{"valor":"US$ 1094.99","rotulo":"Price"},{"valor":"US$ 2459.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"rating":0,"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2032208","url_afiliado":"https://usa.banggood.com/EU-Direct-JANSNO-X70-Electric-Bike-48V-14AH+20AH-Dual-Batteries-750W-Motor-Recommended-Top-Speed-25KM-or-H-20inches-Tires-120KM-Max-Mileage-150KG-Max-Load-Electric-Bicycle-p-2032208.html?cur_warehouse=USA&ID=6287836&rmmds=CategorySportsPop&trace_id=12f11790339822238","merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":2459.99,"disponibilidade":"em_estoque"},{"id":"ww-2043606","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/DF/32/4a2582a4-c05d-47f9-9b9d-036d8179a9e1.jpg.webp","nome":"GIDUCTON EC100 Electric Bike 48V 12AH 750W Motor Recommended Top Speed 25KM/H 20inch Tire 50KM Max Mileage 120KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"GIDUCTON","preco":514.99,"specs":[{"valor":"GIDUCTON","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"12Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 514.99","rotulo":"Price"},{"valor":"US$ 1099.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2043606","url_afiliado":"https://usa.banggood.com/custlink/KmKaC7v509","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":1099.99,"disponibilidade":"em_estoque"},{"id":"ww-2043832","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/E1/4A/9489430c-2be4-45e2-9d4b-4f621bb340fc.jpg.webp","nome":"PAMILA E3 Electric Bike 15.6Ah 48V 1000W Mid Motor Recommended Top Speed 25KM/H 20*3.0 Inches Tire Electric Bike 50-60km Mileage Max Load 150Kg","fotos":[],"icone":"caixa","marca":"PAMILA","preco":699,"specs":[{"valor":"PAMILA","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"15.6Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"3.0 Inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 674.99","rotulo":"Price"},{"valor":"US$ 1599.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2043832","url_afiliado":"https://usa.banggood.com/custlink/mGKlC7vFgo","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":1599.99,"disponibilidade":"em_estoque"},{"id":"ww-2043360","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/23/A5/16c22e39-b655-4cbe-ad0f-864fc2523f5e.jpg.webp","nome":"Shengmilo S900 Electric Bike 60V 30AH Battery 1500W Motor Recommended Top Speed 25KM/H 20*4.0inch Tires 90KM Max Mileage 150KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"Shengmilo","preco":1509,"specs":[{"valor":"Shengmilo","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"60V","rotulo":"Voltage"},{"valor":"30Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"4.0inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 1504.99","rotulo":"Price"},{"valor":"US$ 3579.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2043360","url_afiliado":"https://usa.banggood.com/custlink/mGDaJuK5g0","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":3579.99,"disponibilidade":"em_estoque"},{"id":"ww-2011521","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/02/83/8d450649-3443-4a4b-9df9-8655c0750daa.jpg.webp","nome":"DRVETION AT20 Electric Bike 48V 20Ah Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Tires 90-120KM Max Mileage 150KG Max Load Folding Electric Bicycle","fotos":[],"icone":"caixa","marca":"DRVETION","preco":959.99,"specs":[{"valor":"DRVETION","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"20Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"4.0inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 969.99","rotulo":"Price"},{"valor":"US$ 2129.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2011521","url_afiliado":"https://usa.banggood.com/custlink/3DDLWfDHnk","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":2129.99,"disponibilidade":"em_estoque"},{"id":"ww-2027575","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FB/4E/2c2fff18-ada7-45ba-ae77-4eb56860d616.jpg.webp","nome":"HAPPYRUN HR-G50 Electric Bike 48V 18Ah Battery 750W Motor Recommended Top Speed 25KM/H 20inch Tires 110KM Mileage 120KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"HAPPYRUN","preco":1034.99,"specs":[{"valor":"HAPPYRUN","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"18Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 1034.99","rotulo":"Price"},{"valor":"US$ 1959.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2027575","url_afiliado":"https://usa.banggood.com/custlink/GDGaJuGtNa","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":1959.99,"disponibilidade":"em_estoque"},{"id":"ww-2046538","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A2/05/5b8e91ac-8039-436b-9591-30796a318c0a.jpg.webp","nome":"QUNT BK20 Electric Bike 48V 18AH Battery 500W Motor Recommended Top Speed 25KM/H 20inch Tires 110KM Max Range 120KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"QUNT","preco":679,"specs":[{"valor":"QUNT","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"18Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 674.99","rotulo":"Price"},{"valor":"US$ 1519.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2046538","url_afiliado":"https://usa.banggood.com/custlink/3DGLC7vtBz","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":1519.99,"disponibilidade":"em_estoque"},{"id":"ww-2011528","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/B3/FF/781d0b54-4f2e-4664-9ff6-5f1ccd6b193a.jpg.webp","nome":"DRVETION CT20 Electric Bike 48V 15AH Battery 750W Motor Recommended Top Speed 25KM/H 20*4.0inch Fat Tires 40-80KM Max Mileage 150KG Max Load Folding Electric Bicycle","fotos":[],"icone":"caixa","marca":"DRVETION","preco":999.99,"specs":[{"valor":"DRVETION","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"15Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"4.0inch","rotulo":"Size"},{"valor":"0","rotulo":"Reviews"},{"valor":"US$ 999.99","rotulo":"Price"},{"valor":"US$ 2029.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2011528","url_afiliado":"https://usa.banggood.com/custlink/DvmocT3Pn5","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":2029.99,"disponibilidade":"em_estoque"},{"id":"ww-1998730","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/01/16/0b88a404-b786-4aad-932c-6c11100064cc.jpg.webp","nome":"RANDRIDE YX80M-2 48V 20Ah 2*1000W Recommended Top Speed 25KM/H 26*4.0 Inch Electric Bike 40-90KM Max Range Max Load 200KG","fotos":[],"icone":"caixa","marca":"RANDRIDE","preco":1399,"specs":[{"valor":"RANDRIDE","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"20Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"4.0 Inch","rotulo":"Size"},{"valor":"3","rotulo":"Reviews"},{"valor":"US$ 1374.00","rotulo":"Price"},{"valor":"US$ 1399.00","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-1998730","url_afiliado":"https://usa.banggood.com/custlink/mDDlrfDPbp","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":1399,"disponibilidade":"em_estoque"},{"id":"ww-2021488","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/81/4F/04d021db-d0cb-430a-beb7-f8fa6ddc9ca4.jpg.webp","nome":"SINOHON A20 Electric Bike 48V 22AH 1000W Motor Recommended Top Speed 25KM/H 20inch 80KM Max Mileage 150KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"SINOHON","preco":899,"specs":[{"valor":"SINOHON","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"22Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"28","rotulo":"Reviews"},{"valor":"US$ 899.00","rotulo":"Price"},{"valor":"In stock","rotulo":"Availability"}],"video":null,"rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"An electric bike curated from the retailer catalog with live price and real ratings. Sold by the retailer, where the final price is confirmed at checkout.","avaliacoes":0,"product_id":"WW-2021488","url_afiliado":"https://usa.banggood.com/custlink/3mKOc7mHNY","lojas_compare":[],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":null,"disponibilidade":"em_estoque"},{"id":"ww-2032209","faq":[{"a":"No. E-Ride Deals is an independent product discovery platform: the button takes you to the retailer's page, where the item is sold and processed by that retailer.","p":"Does E-Ride Deals sell this product?"},{"a":"Directly from the current retailer listing. Confirm price, rating and availability on the retailer page before buying.","p":"Where do the price and rating come from?"},{"a":"If you buy through the button, this independent product discovery site may receive a small commission from the retailer, at no additional cost to you. Coupons and discounts are applied by the retailer on its official page.","p":"Does E-Ride Deals earn a commission?"}],"img":"https://pxunbqwpiauhzpugcgwm.supabase.co/storage/v1/object/sign/Matheus%20Nunes/JANSNO%20X60%20Electric%20Bike%2048V%2023AH%20Battery%20750W*2%20Dual%20Motors%20Recommended%20Top%20Speed%2025KM/Captura%20de%20tela%202026-09-26%20205352.png?token=eyJraWQiOiI0NjVjODZhMS0xMjdhLTQ1ZjktYjNlMC1hMTFlOWU2MWMxYmUiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJNYXRoZXVzIE51bmVzL0pBTlNOTyBYNjAgRWxlY3RyaWMgQmlrZSA0OFYgMjNBSCBCYXR0ZXJ5IDc1MFcqMiBEdWFsIE1vdG9ycyBSZWNvbW1lbmRlZCBUb3AgU3BlZWQgMjVLTS9DYXB0dXJhIGRlIHRlbGEgMjAyNi0wOS0yNiAyMDUzNTIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MDQ2Njk4MSwiZXhwIjoyMDQyNzU0OTgxfQ.heVuYMAKTJ6gCl3Y91mCaUy53XclyWYonzvKB9CfPFaiUHZOALsJbYLH8aFScNKf-uDPqQJcrnurJCMiWFDP1Q","nome":"JANSNO X60 Electric Bike 48V 23AH Battery 750W*2 Dual Motors Recommended Top Speed 25KM/H 20inches Tires 80KM Max Mileage 150KG Max Load Electric Bicycle","fotos":[],"icone":"caixa","marca":"JANSNO","preco":1134.99,"specs":[{"valor":"JANSNO","rotulo":"Brand"},{"valor":"Electric Bikes","rotulo":"Category"},{"valor":"New","rotulo":"Condition"},{"valor":"48V","rotulo":"Voltage"},{"valor":"23Ah","rotulo":"Battery"},{"valor":"25KM/H","rotulo":"Top speed"},{"valor":"20inch","rotulo":"Size"},{"valor":"1","rotulo":"Reviews"},{"valor":"US$ 1134.99","rotulo":"Price"},{"valor":"US$ 2629.99","rotulo":"List price"},{"valor":"In stock","rotulo":"Availability"}],"video":"https://youtu.be/iKgb_lJxmCg","rating":0,"banners":[],"comissao":3,"destaque":false,"merchant":"partner-store","categoria":"bicicletas-eletricas","descricao":"🚲 【48V 23Ah Removable Lithium Battery】\nEnjoy long-distance rides with the high-capacity 48V 23Ah lithium battery. The removable design makes charging simple and convenient at home, work, or wherever you have access to power. Under optimal riding conditions, it provides reliable energy for extended daily commutes.\n\n🚲 【750W*2 High-Torque Motor】\nExperience responsive acceleration with the powerful 750W*2 motor system. Engineered to deliver impressive torque, this electric bike easily navigates steep inclines, city streets, and rugged paths with smooth, consistent power output.\n\n🚲 【Extended Riding Range & Smart Power】\nThe 48V 23Ah battery system is optimized for maximum efficiency, offering up to 25KM per full charge. Intelligent energy management balances throttle control and pedal/power assist for longer trips.\n\n🚲 【All-Terrain Design & Robust Frame】\nBuilt with a durable, high-strength frame paired with 20inch tires for maximum stability and traction. Designed to cushion shocks on uneven pavement, gravel, and dirt roads. Supports a maximum payload capacity of 150KG Max Load.\n\n🚲 【Dual Disc Brakes & Night Safety Lighting】\nFeatures high-precision front and rear disc brakes for strong, predictable stopping power. Integrated ultra-bright LED headlights and rear brake lights ensure maximum visibility during night commutes.\n\n🚲 【Quick Assembly & Warranty Support】\nArrives 85%–90% pre-assembled with setup tools and clear instructions included. Backed by dedicated customer support and standard warranty coverage for total peace of mind.","avaliacoes":0,"product_id":"WW-2032209","url_afiliado":"https://usa.banggood.com/custlink/vG3LJwv3e0","lojas_compare":[{"nome":"Amazon","preco":1203.09},{"nome":"Walmart","preco":1237.14},{"nome":"Aliexpress","preco":1293.89}],"merchant_nome":"Partner store","categoria_nome":"Electric Bikes","preco_anterior":2629.99,"disponibilidade":"em_estoque"}]};

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
/* Acima de 40% o "preco de lista" do feed e quase sempre inflado — o site
   mostra so o preco atual (Google Ads: preco enganoso). Espelha build.js. */
var DESCONTO_MAX = 40;
function pctVisivel(a, b) {
  var d = pctDesc(a, b);
  return (d != null && d <= DESCONTO_MAX) ? d : null;
}
/* Unidades do publico dos EUA: imperial primeiro, metrico em parenteses. */
function miTxt(km) { return Math.round(Number(km) * 0.621371) + " mi (" + num(km) + " km)"; }
function mphTxt(v) { return Math.round(Number(v) * 0.621371) + " mph (" + num(v) + " km/h)"; }
function lbsTxt(k) { return Math.round(Number(k) * 2.20462) + " lbs (" + num(k) + " kg)"; }
function rangeFabTxt(af) {
  if (!af) return "";
  if (af.ate && af.ate !== af.de) return Math.round(af.de * 0.621371) + "-" + Math.round(af.ate * 0.621371) + " mi (" + af.de + "-" + af.ate + " km)";
  return miTxt(af.de);
}
function esc(s) {
  return String(s || "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function slugify(s) {
  return String(s || "").toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
function slugProduto(p) {
  var marca = slugify(p.marca || "");
  var stop = /^(electric|e|scooter|bike|with|and|for|the|of|to|in|on|recommended|top|max|range|battery|motor|speed|tires|inch|folding|load|mileage|dual|single|brushless|watt|ah|kmh|km|model|version|new|usa|plus|pro|black|color|option|v)$/;
  var palavras = String(p.nome || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  var parts = [];
  var count = 0;
  palavras.forEach(function (w) {
    if (count >= 4) return;
    if (w === marca || stop.test(w)) return;
    parts.push(w);
    count++;
  });
  if (!parts.length) parts = palavras.slice(0, 3);
  var nome = [marca].concat(parts).filter(Boolean).join("-") || slugify(p.id || "product");
  return nome.slice(0, 64) || slugify(p.id || "product");
}
function urlProduto(p) {
  return "/products/" + (SLUG_FINAL[p.id] || slugProduto(p)) + "/";
}
var SLUG_FINAL = {};
function computarSlugs(produtos) {
  SLUG_FINAL = {};
  var cont = {};
  produtos.forEach(function (p) { var b = slugProduto(p); cont[b] = (cont[b] || 0) + 1; });
  var usados = {};
  produtos.forEach(function (p) {
    var b = slugProduto(p);
    var fin = b;
    if (cont[b] > 1) {
      var suf = String(p.product_id || p.id || "").replace(/[^a-zA-Z0-9]/g, "").slice(-4).toLowerCase();
      fin = b + "-" + suf;
      var i = 2;
      while (usados[fin]) fin = b + "-" + suf + "-" + (i++);
    }
    usados[fin] = true;
    SLUG_FINAL[p.id] = fin;
  });
}
function produtoDoSeed() {
  var el = document.getElementById("produto-seed");
  if (!el) return null;
  try { return JSON.parse(el.textContent); } catch (e) { return null; }
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

/* A nota do retailer e opcional no admin: sem nota nao mostra estrelas nem 0.0 */
function temNota(p) {
  var r = Number(p && p.rating);
  return isFinite(r) && r > 0;
}
function estrelasCard(p) {
  if (!temNota(p)) return "";
  return '<div class="rating">' + starsHTML(Number(p.rating)) + ' <span class="reviews">' + Number(p.rating).toFixed(1) + " (" + num(p.avaliacoes) + ")</span></div>";
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
function galeriaProduto(prod) {
  var gal = [];
  var add = function (u) {
    if (u && /^https?:\/\//i.test(String(u).trim()) && gal.indexOf(u.trim()) === -1) gal.push(u.trim());
  };
  add(prod.img);
  (prod.fotos || []).forEach(add);
  return gal;
}
function imgProd(prod, variant) {
  var gal = galeriaProduto(prod);
  var v = variant == null ? 0 : variant;
  if (gal[v]) return gal[v];
  if (gal.length) return gal[0];
  return svgProduto(prod, variant);
}

/* ---------- Price comparison: other well-known retailers ---------- */
/* Precos de referencia e sem link: o admin cadastra a URL de cada loja
   depois (ReviewData.lojasCompare). O render fica em renderComparar(). */

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

/* ---------- Preco ao vivo nas paginas estaticas ----------
   Categoria, cluster, cards e o "bottom line" do review sao HTML gerado no
   build: quando o admin mudava um preco, eles continuavam mostrando o valor
   antigo ate o proximo deploy. Aqui o cliente reescreve so os precos, usando
   os mesmos dados e as mesmas funcoes do build, para a tela bater com o admin
   assim que o dado chega. */
function syncPrecosEstaticos(pProduto) {
  if (!PRODUTOS || !PRODUTOS.length) return;
  var porId = {};
  PRODUTOS.forEach(function (p) { if (p && p.id != null) porId[String(p.id)] = p; });

  /* Tabelas "side by side" da categoria e dos clusters: colunas de preco e a
     marcacao de melhor valor. */
  if (window.ReviewData && ReviewData.syncComparativo) {
    var tabelas = document.querySelectorAll("table.cmp-table");
    for (var t = 0; t < tabelas.length; t++) ReviewData.syncComparativo(tabelas[t], porId);
  }

  /* Cards das listas: mesmo markup do cardHTML do build. */
  var cards = document.querySelectorAll(".pcard[data-pid]");
  for (var c = 0; c < cards.length; c++) {
    var card = cards[c];
    var p = porId[card.getAttribute("data-pid")];
    if (!p) continue;
    var pct = pctVisivel(p.preco, p.preco_anterior);
    var box = card.querySelector(".price");
    if (box) {
      box.innerHTML =
        (pct != null ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
        '<span class="now">' + fmt(p.preco) + "</span>" +
        (pct != null ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "");
    }
    var badge = card.querySelector(".media .badge");
    if (badge) {
      if (pct != null) badge.textContent = "-" + pct + "%";
      else if (badge.parentNode) badge.parentNode.removeChild(badge);
    }
  }

  /* Resumo "from X to Y (median Z)" da pagina de categoria. */
  var resumos = document.querySelectorAll("[data-preco-resumo]");
  if (resumos.length) {
    var linha = resumos[0].closest ? resumos[0].closest("[data-cat-slug]") : null;
    var cat = linha ? linha.getAttribute("data-cat-slug") : null;
    var vs = PRODUTOS
      .filter(function (x) { return Number(x.preco) > 0 && (!cat || x.categoria === cat); })
      .map(function (x) { return Number(x.preco); })
      .sort(function (a, b) { return a - b; });
    if (vs.length) {
      var mapa = { min: fmt(vs[0]), max: fmt(vs[vs.length - 1]), med: fmt(vs[Math.floor(vs.length / 2)]) };
      for (var r = 0; r < resumos.length; r++) {
        var chave = resumos[r].getAttribute("data-preco-resumo");
        if (mapa[chave]) resumos[r].textContent = mapa[chave];
      }
    }
  }

  /* "Bottom line" do review: bloco estatico dentro do header do build. */
  var bl = document.querySelector(".review-bottom-line");
  if (bl && pProduto && window.ReviewData && ReviewData.htmlBottomLine) {
    var dentroHero = bl.parentNode && bl.parentNode.id === "review-hero";
    if (!dentroHero) {
      var holder = document.createElement("div");
      holder.innerHTML = ReviewData.htmlBottomLine(pProduto, PRODUTOS);
      var novo = holder.firstElementChild;
      if (novo) bl.parentNode.replaceChild(novo, bl);
    }
  }
}

function renderComparar(p) {
  var alvo = $("#comparar-tabela");
  if (!alvo) return;
  /* So loja com preco real e verificado (ReviewData.lojasCompare ja filtra).
     Sem nenhuma: a secao inteira some, para nao prometer comparacao que nao
     existe. */
  var lojas = window.ReviewData ? ReviewData.lojasCompare(p) : [];
  var sec = alvo.closest(".comparar-sec") || document.querySelector(".comparar-sec");
  if (!lojas.length) { if (sec) sec.style.display = "none"; alvo.innerHTML = ""; return; }
  if (sec) sec.style.display = "";
  var img = imgProd(p, 0);
  alvo.innerHTML = '<div class="comparar">' + lojas.map(function (l) {
    var precoHTML = '<small class="comparar-preco">' + fmt(Number(l.preco)) + "</small>";
    /* Sem link: o card da loja nao redireciona para o retailer. */
    return '<div class="comparar-loja">' +
      '<img class="comparar-thumb" src="' + img + '" alt="" loading="lazy"/>' +
      '<span class="comparar-loja-nome">' + esc(l.nome) + precoHTML +
      '<small class="comparar-cta">Verified price</small></span></div>';
  }).join("") + "</div>";
}

/* ---------- Product card ---------- */
function cardHTML(p) {
  var pct = pctVisivel(p.preco, p.preco_anterior);
  var esgotado = p.disponibilidade === "esgotado";
  var badge = pct != null ? '<span class="badge">-' + pct + "%</span>" : "";
  var btn = esgotado
    ? '<button class="btn-buy buy-out" disabled>Currently unavailable</button>'
    : '<button class="btn-buy" onclick="abrirOferta(\'' + p.id + '\')">View deal</button>';
  var hasRating = p.rating != null && isFinite(p.rating) && p.rating > 0 && p.avaliacoes > 0;
  var ratingHTML = hasRating
    ? '<div class="rating">' + starsHTML(p.rating) + ' <span class="reviews">' + Number(p.rating).toFixed(1) + ' (' + num(p.avaliacoes) + ')</span></div>'
    : '';
  return '<article class="pcard">' +
    '<a class="media" href="' + urlProduto(p) + '">' + badge +
    '<img src="' + imgProd(p, 0) + '" alt="' + esc(p.nome) + '" loading="lazy"/>' +
    "</a>" +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="' + urlProduto(p) + '">' + esc(p.nome) + "</a>" +
    ratingHTML +
    '<div class="price">' +
    (pctDesc(p.preco, p.preco_anterior) != null ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (pctDesc(p.preco, p.preco_anterior) != null ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
    "</div>" +
    '<div class="merchant"><a href="store.html?loja=' + encodeURIComponent(p.merchant) + '">' + esc(p.merchant_nome) + "</a></div>" +
    btn +
    "</div></article>";
}

/* ---------- SEO: per-product meta description + JSON-LD ---------- */
function setMetaDescricao(p, rev) {
  var metaDesc = $('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  if (!rev || !window.ReviewData) {
    metaDesc.content = p.descricao + " Explore this product on E-Ride Deals — compare prices, ratings and specs, then check the price and buy directly at the retailer.";
    return;
  }
  var marca = (p.nome || "").split(/\s+(?=[A-Z])/)[0];
  metaDesc.content = marca + " " + (ReviewData.fatos(p).isBike ? "e-bike" : "e-scooter") +
    ": specs, price and a spec-based score of " + rev.score.toFixed(1) + "/10. " + ReviewData.pros(p, PRODUTOS)[0] +
    " Score calculated from listing specs and price — we have not physically tested this product.";
}

function injetarSchema(p) {
  var antigo = document.getElementById("ld-product");
  if (antigo) antigo.remove();
  var dados = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.nome,
    "description": p.descricao,
    "image": imgProd(p, 0),
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

/* ---------- Review page: hero + verdict, derivados por produto ---------- */
function renderReview(p) {
  if (!window.ReviewData) return;
  var slot = $("#review-verdict-slot");
  var hero = $("#review-hero");
  if (!slot && !hero) return;

  var todos = PRODUTOS || [];
  var n = ReviewData.notas(p, todos);
  var v = ReviewData.veredito(n);
  var mes = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

  if (hero) {
    hero.innerHTML =
      '<div class="review-badge-tag">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
        "SPECS &amp; PRICE ANALYSIS" +
      "</div>" +
      '<h1 class="review-page-title" id="review-title">' + esc(ReviewData.h1(p, PRODUTOS)) + "</h1>" +
      ReviewData.specline(p) +
      '<div class="review-author-meta">' +
        '<span class="author-item"><strong>Compiled by</strong> E-Ride Deals from the retailer listing</span>' +
        '<span class="sep">&bull;</span>' +
        '<span class="author-item"><strong>Updated</strong> ' + esc(mes) + "</span>" +
        '<span class="sep">&bull;</span>' +
        '<span class="author-item"><strong>Verdict</strong> <span class="verdict-pill ' + v.classe + '">' + esc(v.rotulo.toUpperCase()) + "</span></span>" +
      "</div>" +
      ReviewData.htmlMetodologia() +
      '<div class="review-score-banner">' +
        ReviewData.htmlScoreBanner(p, todos) +
        ReviewData.htmlPremio(p, todos) +
        ReviewData.htmlSelos(p) +
      "</div>" +
      ReviewData.htmlBottomLine(p, todos);
  }
  if (slot) slot.innerHTML = ReviewData.htmlVeredito(p, todos);

  /* "Who is this for?" e a tabela de alternativas: os mesmos blocos que o
     build grava, para quem navega sem recarregar a pagina. O placeholder vem
     do HTML; so e criado quando falta (product.html, que nao tem template). */
  var criaSlot = function (id, depoisDe) {
    var el = document.getElementById(id);
    if (el) return el;
    var pai = depoisDe && depoisDe.parentNode;
    if (!pai) return null;
    el = document.createElement("div");
    el.id = id;
    pai.insertBefore(el, depoisDe.nextSibling);
    return el;
  };
  var pq = criaSlot("para-quem-slot", slot);
  if (pq) pq.innerHTML = ReviewData.htmlParaQuem(p, todos);
  /* Âncora do bloco de alternativas e a SECAO de comparacao, nao o
     #comparar-tabela: o renderComparar() remove a secao inteira quando o
     produto nao tem loja com preco, e um slot criado dentro dela sumiria junto. */
  var secComparar = document.querySelector(".comparar-sec");
  var alt = criaSlot("alt-slot", secComparar);
  if (alt) alt.innerHTML = ReviewData.htmlAlternativas(p, todos, { urlOf: urlProduto });

  var key = $("#key-specs");
  if (key) {
    var f = n.fatos;
    var items = [
      f.watt != null ? [f.isBike ? "Motor" : "Peak motor", f.watt + "W"] : null,
      f.wh != null ? ["Battery", f.volt + "V " + f.ah + "Ah · " + fmt(f.wh) + "Wh"] : null,
      f.alcance != null ? ["Estimated range (calculated)", "~" + miTxt(f.alcance)] : null,
      f.alcanceFab ? ["Manufacturer range (as listed)", rangeFabTxt(f.alcanceFab)] : null,
      f.vel != null ? ["Top speed", mphTxt(f.vel)] : null,
      f.pneu != null ? [f.isBike ? "Wheel size" : "Tire size", f.pneu + "″"] : null,
      f.carga != null ? ["Max load", lbsTxt(f.carga)] : null
    ].filter(Boolean);
    key.innerHTML = items.map(function (it) {
      return '<div class="key-spec"><span class="key-spec-label">' + esc(it[0]) + '</span><span class="key-spec-value">' + esc(it[1]) + "</span></div>";
    }).join("");
  }

  document.title = ReviewData.titulo(p, todos) + " | E-Ride Deals";
  setMetaDescricao(p, n);
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

/* Clique de saida para o retailer (afiliado). Registra o evento
   outbound_click no Google tag antes de navegar.

   GOOGLE ADS CONVERSAO: para contar esse clique como conversao, crie a acao
   de conversao no Google Ads, pegue o LABEL e adicione ao payload abaixo:
     gtag('event', 'conversion', { send_to: 'AW-11103748612/SEU_LABEL' });
   (descomente a linha indicada em registrarSaidaAfiliado). */
var _ultimaSaida = { id: null, ts: 0 };
function registrarSaidaAfiliado(p) {
  if (typeof window.gtag !== "function" || !p) return;
  /* Dedupe: o listener delegado (capture) e o handler do botao disparam para o
     mesmo clique; deduplica por produto numa janela curta. */
  var agora = Date.now();
  if (_ultimaSaida.id === p.id && agora - _ultimaSaida.ts < 600) return;
  _ultimaSaida = { id: p.id, ts: agora };
  try {
    window.gtag("event", "outbound_click", {
      product_id: p.id,
      product_name: p.nome,
      retailer: p.merchant_nome || p.merchant,
      price: p.preco,
      page_type: (document.body && document.body.dataset.page) || "",
      transport_type: "beacon"
    });
    /* GOOGLE ADS: cole o conversion label aqui para marcar o clique como conversao:
       window.gtag("event", "conversion", { send_to: "AW-11103748612/LABEL" }); */
  } catch (e) {}
}

function irAoParceiro(p) {
  if (p.disponibilidade === "esgotado") { toast("This item is currently unavailable at the retailer."); return; }
  registrarSaidaAfiliado(p);
  toast("Opening " + p.merchant_nome + " — the current price and deal are confirmed at checkout.");
  setTimeout(function () { window.open(p.url_afiliado, "_blank", "noopener"); }, 500);
}

/* Listener delegado: qualquer link/botao com data-outbound que leve ao
   retailer dispara o mesmo evento antes de navegar, sem alterar o link. */
if (typeof document !== "undefined") {
  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("[data-outbound]") : null;
    if (!el) return;
    registrarSaidaAfiliado(window.NS_CURRENT_PRODUCT);
  }, true);
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
    '<img class="brand-logo" src="img/logo.png" alt="E-Ride Deals logo"/>' +
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
  var slot = $("#app-header") || $(".site-header");
  if (!slot) return;
  var newHeader = h.firstElementChild || h;
  slot.parentNode.replaceChild(newHeader, slot);
  anexarBusca();
  var mb = $("#menu-btn"), links = $("#hdr-links");
  if (mb && links) {
    mb.addEventListener("click", function () { links.classList.toggle("open"); });
  }
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
      '<span class="brand"><img class="brand-logo" src="img/logo.png" alt="E-Ride Deals logo"/></span>' +
    "<p>Independent product discovery and curation for electric scooters and electric bikes. We research and organize products, deals and coupons from partner retailers — purchases are completed directly with the retailer, never with us.</p>" +
    "</div>" +
    '<div class="foot-col"><h4>Explore</h4><ul>' + catLinks + "</ul></div>" +
    '<div class="foot-col"><h4>Company</h4><ul>' +
    '<li><a href="about.html">About E-Ride Deals</a></li>' +
    '<li><a href="about.html#how-it-works">How it works</a></li>' +
    '<li><a href="store.html">Retailers we track</a></li>' +
    '<li><a href="contact/">Contact</a></li>' +
    "</ul></div>" +
    '<div class="foot-col"><h4>Transparency</h4>' +
    '<div class="foot-disclose">Some links on this site are affiliate links, meaning we may earn a commission from qualifying purchases, at no additional cost to you.</div>' +
    '<ul class="foot-legal">' +
    '<li><a href="affiliate-disclosure/">Affiliate disclosure</a></li>' +
    '<li><a href="privacy/">Privacy &amp; cookies</a></li>' +
    '<li><a href="terms/">Terms of use</a></li>' +
    '<li><a href="contact/">Contact</a></li>' +
    "</ul></div>" +
    "</div>" +
    '<div class="foot-bottom"><span>© 2026 ' + esc(nomeMarca()) + ' — independent product discovery for electric scooters &amp; electric bikes. We do not sell or ship products; purchases are completed at the retailer.</span></div>' +
    "</div></footer>";
  var slot = $("#app-footer") || $(".site-footer");
  if (!slot) return;
  var newFooter = f.firstElementChild || f;
  slot.parentNode.replaceChild(newFooter, slot);
}
/* O rodape pode ser desenhado antes dos dados chegarem (o boot monta o
   chrome primeiro): usa o fallback embutido enquanto DADOS for null. */
function nomeMarca() {
  var d = DADOS || STORE_FALLBACK || {};
  var m = d.marca;
  if (m && typeof m === "object") return m.nome || "E-Ride Deals";
  return String(m || "E-Ride Deals");
}

/* ---------- Load data (Supabase -> products.json -> fallback) ---------- */
function supaHeaders(token) {
  var k = (window.SUPA_CONFIG && SUPA_CONFIG.url) ? SUPA_CONFIG.anon : "";
  var h = { "apikey": k };
  h["Authorization"] = "Bearer " + (token || k);
  return h;
}

function carregarDoSupabase() {
  return supabaseUmaVez().catch(function () {
    /* Sem retry o site caia silenciosamente no HTML do build sempre que a
       primeira chamada falhasse (4G ruim, ad blocker, Supabase instavel) e o
       visitante via um preco antigo sem saber. Uma segunda tentativa resolve. */
    return new Promise(function (r) { setTimeout(r, 900); }).then(supabaseUmaVez);
  });
}

function supabaseUmaVez() {
  var url = (window.SUPA_CONFIG && SUPA_CONFIG.url) ? SUPA_CONFIG.url : null;
  if (!url) return Promise.reject(new Error("sem-supabase"));
  var base = url + "/rest/v1/produtos?select=id,dados";
  function getPagina(offset) {
    return fetchComTimeout(base, {
      headers: Object.assign(supaHeaders(), { "Range-Unit": "items", "Range": offset + "-" + (offset + 999) })
    }, 4000).then(function (r) {
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
    return { "marca": "E-Ride Deals", "categorias": categorias, "produtos": produtos };
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
    /* Assina o produto inteiro: qualquer campo que o admin edite (nome,
       descricao, specs, faq, nota, preco, cupom, imagens, banners, video)
       invalida o cache. Antes so olhava cupom/preco/imagem, e uma edicao no
       admin ficava invisivel no site. */
    var s = JSON.stringify(d.produtos[i]);
    for (var j = 0; j < s.length; j++) { h ^= s.charCodeAt(j); h = Math.imul(h, 16777619); }
  }
  return String(d.produtos.length) + ":" + h;
}
function assinaProduto(p) {
  return assinaDados({ produtos: p ? [p] : [] });
}
function renderPaginaAtual() {
  var page = document.body && document.body.dataset.page;
  try {
    if (page === "home") initHome();
    else if (page === "categoria") initCategoria();
    else if (page === "produto") initProduto();
    else if (page === "loja") initLoja();
    else if (page === "admin") initAdmin();
    /* Categoria e cluster sao paginas estaticas: nao ha grade para montar,
       mas os precos precisam acompanhar o admin (syncPrecosEstaticos). */
    else if (page === "cluster" || page === "cat-static") syncPrecosEstaticos();
  } catch (e) {
    /* Um produto com dado ruim nao pode derrubar a pagina inteira (o header e o
       rodape ja foram renderizados acima): mostra o aviso e segue. */
    if (window.console && console.error) console.error("[app] falha ao montar a pagina " + page + ":", e);
  }
}

/* Header e rodape tem de existir mesmo sem rede: na pagina de produto o seed do
   build ja traz dados, e antes de esperar o Supabase nao pode ficar tudo vazio.
   Cada parte e desenhada por conta propria: se o chrome falhar, os produtos
   ainda tem de aparecer. */
function garantirEstrutura() {
  if (typeof document === "undefined") return;
  try {
    var h = document.getElementById("app-header");
    if (h && !h.firstElementChild) renderHeader();
  } catch (e) { if (window.console) console.error("[app] header:", e); }
  try {
    var f = document.getElementById("app-footer");
    if (f && !f.firstElementChild) renderFooter();
  } catch (e) { if (window.console) console.error("[app] rodape:", e); }
}

function hidratarSeedProduto() {
  if (typeof document === "undefined") return false;
  if (!document.body || document.body.dataset.page !== "produto") return false;
  if (PRODUTOS && PRODUTOS.length) return false;
  var el = document.getElementById("produto-seed");
  if (!el) return false;
  var p = null;
  try { p = JSON.parse(el.textContent); } catch (e) { return false; }
  if (!p || !p.id) return false;
  PRODUTOS = [p];
  CATEGORIAS = CATEGORIAS || [];
  DADOS = { marca: "E-Ride Deals", categorias: CATEGORIAS, produtos: PRODUTOS };
  computarSlugs(PRODUTOS);
  /* O slug da URL e o canonico: com o produto sozinho na lista o calculo de
     colisao nao acontece e o link do card sairia sem o sufixo (-5760). */
  var naUrl = location.pathname.match(/^\/products\/([^/]+)\/?$/);
  if (naUrl) SLUG_FINAL[p.id] = decodeURIComponent(naUrl[1]);
  garantirEstrutura();
  initProduto();
  return true;
}

function aplicarDados(d) {
  DADOS = d;
  PRODUTOS = DADOS.produtos;
  CATEGORIAS = DADOS.categorias || [];
  computarSlugs(PRODUTOS);
  renderHeader();
  renderFooter();
  if (typeof document !== "undefined") renderPaginaAtual();
}

function fetchComTimeout(url, opts, ms) {
  var ctrl = new AbortController();
  var to = setTimeout(function () { ctrl.abort(); }, ms || 10000);
  opts = opts || {};
  opts.signal = ctrl.signal;
  return fetch(url, opts).then(function (r) { clearTimeout(to); return r; }, function (e) { clearTimeout(to); throw e; });
}

var CACHE_TTL_MS = 30 * 60 * 1000;
function carregarDados() {
  var seedUsado = hidratarSeedProduto();
  var semente = seedUsado ? PRODUTOS[0] : null;
  if (!PRODUTOS || !PRODUTOS.length) {
    aplicarDados(STORE_FALLBACK);
  }
  var carregarRede = function () {
    return carregarDoSupabase()
      .catch(function () {
        return fetchComTimeout("products.json", {}, 5000)
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
    if (!c || assinaDados(d) !== assinaDados(c.dados)) {
      aplicarDados(d);
      return d;
    }
    /* O admin manda: se o produto ao vivo for diferente do seed gravado no
       HTML do build, re-renderiza mesmo com o cache em dia. */
    if (semente) {
      var aoVivo = d.produtos.filter(function (x) { return x.id === semente.id; })[0];
      if (aoVivo && assinaProduto(aoVivo) !== assinaProduto(semente)) aplicarDados(d);
    }
    return d;
  };
  return cacheLe().then(function (c) {
    if (c && c.dados && c.dados.produtos && c.dados.produtos.length) {
      if (!seedUsado) aplicarDados(c.dados);
      return carregarRede().then(function (d) { return aplicarSeMudou(d, c); }).catch(function () { return c.dados; });
    }
    return carregarRede().then(function (d) {
      aplicarDados(d);
      return d;
    });
  }).catch(function () {
    return carregarRede().then(function (d) {
      aplicarDados(d);
      return d;
    }).catch(function () {
      if (!PRODUTOS || !PRODUTOS.length) aplicarDados(STORE_FALLBACK);
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
    /* Sem nota no admin a ordenacao por avaliacoes fica arbitraria: usa o
       desconto como criterio e so desempata pelo preco. */
    var comNota = PRODUTOS.filter(function (p) { return Number(p.avaliacoes) > 0; }).length;
    var populares = PRODUTOS.slice()
      .sort(function (a, b) {
        if (comNota) {
          var d = (Number(b.avaliacoes) || 0) - (Number(a.avaliacoes) || 0);
          if (d) return d;
        }
        var da = pctDesc(a.preco, a.preco_anterior) || 0;
        var db = pctDesc(b.preco, b.preco_anterior) || 0;
        if (db !== da) return db - da;
        return (Number(a.preco) || 0) - (Number(b.preco) || 0);
      })
      .slice(0, 15);
    pop.innerHTML = populares.map(cardHTML).join("");
  }

  var feat = $("#destaques-grid");
  if (feat) {
    var destaques = PRODUTOS
      .filter(function (p) { return p.destaque || pctDesc(p.preco, p.preco_anterior) != null; })
      .sort(function (a, b) {
        var fa = a.destaque ? 1 : 0, fb = b.destaque ? 1 : 0;
        if (fa !== fb) return fb - fa;
        var da = pctDesc(a.preco, a.preco_anterior) || 0;
        var db = pctDesc(b.preco, b.preco_anterior) || 0;
        if (db !== da) return db - da;
        return (Number(a.avaliacoes) || 0) - (Number(b.avaliacoes) || 0);
      })
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
  var seed = produtoDoSeed();
  var p = null;
  var m = location.pathname.match(/^\/products\/([^/]+)\/?$/);
  if (id) {
    p = PRODUTOS.find(function (x) { return x.id === id; }) || seed;
  } else if (m) {
    var slug = decodeURIComponent(m[1]);
    /* O dado ao vivo (admin) tem precedencia sobre o seed do build: sem isso a
       pagina continuava mostrando o preco antigo mesmo com o admin alterado. */
    p = PRODUTOS.find(function (x) { return (SLUG_FINAL[x.id] || slugProduto(x)) === slug; });
    if (!p) p = seed;
  } else {
    p = seed;
  }
  /* /product.html?id=... e uma URL antiga: a canonica e /products/<slug>/.
     Redireciona (com replace, para nao poluir o historico) para o SEO e
     para o visitante nao cair em uma pagina sem o HTML gerado. */
  if (id && p && !seed && location.pathname.replace(/^\/+/, "").indexOf("product.html") === 0) {
    location.replace(urlProduto(p) + location.hash);
    return;
  }
  if (!p) {
    var main = $("main");
    if (main) main.innerHTML = '<div class="container"><div class="empty" style="margin-top:60px"><h3>Product not found</h3><p>The link you followed may be out of date.</p></div></div>';
    return;
  }

  window.NS_CURRENT_PRODUCT = p;
  var pct = pctVisivel(p.preco, p.preco_anterior);
  var disp = ROTULOS_DISP[p.disponibilidade] || ROTULOS_DISP.em_estoque;
  var esgotado = p.disponibilidade === "esgotado";

  var crumb = $("#crumb");
  if (crumb) {
    crumb.innerHTML =
      '<a href="index.html">Home</a><span class="sep">›</span>' +
      '<a href="catalog.html?cat=' + p.categoria + '">' + esc(p.categoria_nome) + "</a>" +
      '<span class="sep">›</span><span>' + esc(p.marca) + "</span>";
  }

  renderReview(p);

  var mainImg = $("#foto-main");
  var thumbs = $("#fotos-thumb");
  var gal = galeriaProduto(p);
  var variantes = gal.length ? gal.map(function (_, i) { return i; }) : [0, 1, 2, 3];
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

  var descEl = $("#pg-descricao");
  if (descEl && p.descricao) descEl.innerHTML = window.ReviewData ? ReviewData.htmlDescricao(p.descricao) : descricaoHTML(p.descricao);
  setMetaDescricao(p, window.ReviewData ? ReviewData.notas(p, PRODUTOS) : null);
  if (window.ReviewData) injetarSchemaReview(p);
  if (!seed) injetarSchema(p);
  var chipCat = $("#pg-categoria");
  if (chipCat) {
    chipCat.textContent = p.categoria_nome;
    chipCat.href = "catalog.html?cat=" + p.categoria;
    chipCat.classList.add("cat");
  }
  var chipDisp = $("#pg-disponibilidade");
  chipDisp.className = "chip " + disp[1];
  chipDisp.innerHTML = '<span data-dot></span>' + disp[0];

  var elRating = $("#pg-rating");
  if (elRating) {
    elRating.innerHTML = temNota(p)
      ? starsHTML(Number(p.rating)) + ' <strong>' + Number(p.rating).toFixed(1) + "</strong> out of 5 <span class=\"count\">(" + num(p.avaliacoes) + " ratings)</span>"
      : "";
    elRating.hidden = !temNota(p);
  }
  var elMerchant = $("#pg-merchant");
  if (elMerchant) elMerchant.innerHTML = "Available at <span class=\"merchant-chip\">" + esc(p.merchant_nome) + "</span>";
  var elMarca = $("#pg-marca");
  if (elMarca) elMarca.textContent = "Brand: " + p.marca;
  var elSku = $("#pg-produto-id");
  if (elSku) elSku.textContent = "Partner SKU: " + p.product_id;

var precoHTML = "";
/* So mostra "Was/Save" quando o preco e mesmo menor que o anterior: com preco
   acima (erro de digitacao no admin) o bloco virava "Was 1.599,99 / Save -4.994". */
if (pct != null) {
  precoHTML =
    '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" +
    '<div class="row"><span class="now">' + fmt(p.preco) + "</span>" +
    '<span class="pct">-' + pct + '%</span>' +
    '<span class="save">You save ' + fmt(p.preco_anterior - p.preco) + "</span></div>";
} else {
  precoHTML = '<div class="row"><span class="now">' + fmt(p.preco) + "</span></div>";
}
  var dataPreco = new Date().toISOString().slice(0, 10);
  $("#preco-bloco").innerHTML = precoHTML +
    '<div class="cash">Price at ' + esc(p.merchant_nome) + " as of " + dataPreco + ". Prices may change — the final price is confirmed at checkout.</div>";

  /* O aviso de afiliado canonico esta no card-warn e no rodape; nao repetimos aqui. */

  // Clone-replace interactive buttons so stale listeners don't stack on background re-render
  var btn = $("#btn-comprar");
  if (btn) {
    var btnClone = btn.cloneNode(true);
    btn.parentNode.replaceChild(btnClone, btn);
    btn = btnClone;
  }
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
  if (boxCupom && !boxCupom.classList.contains("show")) {
    boxCupom.hidden = true;
    boxCupom.classList.remove("show");
    var codEl = $("#cupom-codigo");
    if (codEl) { codEl.textContent = ""; codEl.removeAttribute("data-codigo"); codEl.classList.remove("show"); }
  }

  var btnPar = $("#btn-parceiro");
  if (btnPar) {
    var btnParClone = btnPar.cloneNode(true);
    btnPar.parentNode.replaceChild(btnParClone, btnPar);
    btnPar = btnParClone;
    btnPar.textContent = "See product at " + esc(p.merchant_nome) + " \u2197";
    if (p.url_afiliado) btnPar.href = p.url_afiliado;
    btnPar.addEventListener("click", function (ev) { if (ev && ev.preventDefault) ev.preventDefault(); irAoParceiro(p); });
    if (temCupom) btnPar.classList.add("hide");
    else btnPar.classList.remove("hide");
  }
  var parceiroNome = $("#parceiro-nome");
  if (parceiroNome) parceiroNome.textContent = p.merchant_nome;

  var codBtn = $("#cupom-codigo");
  if (codBtn) {
    var codBtnClone = codBtn.cloneNode(true);
    codBtn.parentNode.replaceChild(codBtnClone, codBtn);
    codBtn = codBtnClone;
    codBtn.addEventListener("click", function () {
      var codigo = codBtn.getAttribute("data-codigo");
      if (codigo) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(codigo).then(function () { toast("Coupon copied — apply it at checkout."); }, function () { toast("Coupon " + codigo.toUpperCase() + " — copy it manually."); });
        } else { _copiarFallback(codigo); toast("Coupon copied — apply it at checkout."); }
      }
    });
  }

  var specsEl = $("#specs-tabela");
  if (specsEl) {
    /* Tabela sem repetir o que os key-specs ja mostram */
    var rf = window.ReviewData ? ReviewData.fatos(p) : null;
    var listaSpecs = window.ReviewData ? ReviewData.specsVisiveis(p.specs, rf) : (p.specs || []);
    specsEl.innerHTML = (listaSpecs && listaSpecs.length)
      ? listaSpecs.map(function (s) {
          return "<tr><th>" + esc(s.rotulo) + "</th><td>" + esc(s.valor) + "</td></tr>";
        }).join("")
      : "<tr><th>Condition</th><td>New</td></tr>";
  }

  /* ---------- CTAs de cupom repetidos (veredito, specs, reviews) ----------
     Sao botoes ESTATICOS no HTML, entao nao usam cloneNode: o guard
     data-bound evita listener duplicado se initProduto rodar de novo. */
  var temCupomCta = !!p.cupom && !esgotado;
  var ctas = document.querySelectorAll(".js-reveal-cupom, .js-ir-parceiro");
  for (var c = 0; c < ctas.length; c++) {
    if (ctas[c].getAttribute("data-bound")) continue;
    ctas[c].setAttribute("data-bound", "1");
    ctas[c].addEventListener("click", function () {
      if (temCupomCta) { revelarCupom(p); return; }
      irAoParceiro(p);
    });
  }
  if (!temCupomCta && !esgotado) {
    /* sem cupom: o CTA vira "Check price at <loja>". O data-bound NAO e
       limpo de proposito — o listener ja decide a acao pela variavel
       temCupomCta, e limpar aqui permitiria um segundo listener. */
    for (var c2 = 0; c2 < ctas.length; c2++) {
      if (ctas[c2].classList.contains("js-reveal-cupom")) {
        ctas[c2].className = "btn-buy-big js-ir-parceiro";
        ctas[c2].textContent = "Check price at " + esc(p.merchant_nome);
      }
    }
  }
  if (esgotado) {
    for (var c3 = 0; c3 < ctas.length; c3++) {
      if (ctas[c3].classList.contains("js-reveal-cupom")) {
        ctas[c3].className = "btn-buy-big";
        ctas[c3].textContent = "Currently unavailable";
        ctas[c3].disabled = true;
      }
    }
  }

  renderSimilares(p);

  // Replace faq container to clear any stacked listener from previous render
  var faqOld = $("#faq-lista");
  var faq = faqOld;
  if (faqOld) {
    var faqClone = faqOld.cloneNode(false);
    faqOld.parentNode.replaceChild(faqClone, faqOld);
    faq = faqClone;
  }
  var genericas = window.ReviewData ? ReviewData.faq() : [
    { p: "Where do the price and rating come from?", a: "Straight from the current retailer listing. Confirm the price, rating and availability on the retailer's page before you buy." },
    { p: "Is the displayed price final?", a: "No. The price shown is a reference point collected from the retailer listing and it does change. Confirm the final price on the retailer's page before completing your order." },
    { p: "Who handles shipping and returns?", a: "Shipping, delivery dates and return policies are set by the retailer. Review those terms on the retailer's product page." }
  ];
  if (faq) {
    faq.innerHTML = genericas.map(function (f) {
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
  }

  var rel = $("#relacionados-grid");
  if (rel) {
    var relacionados = PRODUTOS.filter(function (x) { return x.id !== p.id; })
      .sort(function (a, b) {
        var sameA = a.categoria === p.categoria ? 0 : 1;
        var sameB = b.categoria === p.categoria ? 0 : 1;
        return sameA - sameB || b.rating - a.rating;
      })
      .slice(0, 4);
    rel.innerHTML = relacionados.map(cardHTML).join("");
  }

  renderComparar(p);
  renderBanners(p);
  renderVideo(p);
  renderReviews(p);

  /* O HTML do build tem o preco antigo; sincroniza com o dado do admin. */
  syncPrecosEstaticos(p);

  document.title = window.ReviewData ? ReviewData.titulo(p, PRODUTOS) + " | E-Ride Deals" : p.nome + " · E-Ride Deals";
}

/* ---------- Article + Review JSON-LD para a página de review ---------- */
function injetarSchemaReview(p) {
  if (!window.ReviewData) return;
  var antigo = document.getElementById("ld-review");
  if (antigo) antigo.remove();
  var todos = PRODUTOS || [];
  var n = ReviewData.notas(p, todos);
  var v = ReviewData.veredito(n);
  var r = ReviewData.ressalvas(p);
  var url = location.origin + urlProduto(p);

  var article = {
    "@type": "Article",
    "headline": ReviewData.titulo(p, todos),
    "name": ReviewData.h1(p, todos),
    "description": n.lede,
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "datePublished": (document.querySelector('meta[property="article:published_time"]') || {}).content || undefined,
    "dateModified": (document.querySelector('meta[property="article:modified_time"]') || {}).content || undefined,
    "author": { "@type": "Organization", "name": "E-Ride Deals" },
    "publisher": {
      "@type": "Organization",
      "name": "E-Ride Deals",
      "logo": { "@type": "ImageObject", "url": location.origin + "/img/logo.png" }
    },
    "about": { "@type": "Product", "name": p.nome, "sku": p.product_id }
    /* Sem no Review/reviewRating: a pontuacao e calculada de specs, nao e uma
       avaliacao de uso. Emitir schema de Review para nota calculada viola as
       diretrizes de review snippet do Google. */
  };

  var s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = "ld-review";
  s.textContent = JSON.stringify(article);
  document.head.appendChild(s);
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
  if (!alvo) return;
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

/* ---------- Video (abre a busca no YouTube) ---------- */
function videoSearchURL(p) {
  if (window.ReviewData) return ReviewData.videoBusca(p);
  var nome = String((p && p.nome) || "").trim();
  if (!nome) return (p && p.video) || "";
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(nome);
}

function renderVideo(p) {
  var row = $("#video-row");
  var btn = $("#btn-video");
  if (!row || !btn) return;
  var url = videoSearchURL(p);
  if (!url) { row.hidden = true; return; }
  row.hidden = false;
  var ext = btn.querySelector(".video-ext");
  if (ext) ext.textContent = "↗";
  var lbl = btn.querySelector(".video-label");
  if (lbl) lbl.textContent = window.ReviewData ? ReviewData.videoRotulo(p) : "Search this product on YouTube";
  btn.onclick = function () { window.open(url, "_blank", "noopener"); };
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
    (temNota(p) ? '<span class="reviews-score">' + Number(p.rating).toFixed(1) + "</span>" +
      '<span class="reviews-stars">' + starsHTML(Number(p.rating)) + "</span>" : "") +
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
        (r.nota != null && Number(r.nota) > 0 ? '<span class="review-nota">' + starsHTML(Number(r.nota)) + "</span>" : "") +
        "</div>" +
        '<p class="review-texto">' + esc(r.texto) + "</p>" +
        "</div>";
    }).join("") +
    "</div>";
}

function osCardHTML(p) {
  var esgotado = p.disponibilidade === "esgotado";
  var pct = pctVisivel(p.preco, p.preco_anterior);
  return '<article class="pcard">' +
    '<a class="media" href="' + urlProduto(p) + '">' +
    (pct != null ? '<span class="badge">-' + pct + "%</span>" : "") +
    '<img src="' + imgProd(p, 1) + '" alt="' + esc(p.nome) + '" loading="lazy"/></a>' +
    '<div class="body">' +
    '<span class="p-brand">' + esc(p.marca) + "</span>" +
    '<a class="p-name" href="' + urlProduto(p) + '">' + esc(p.nome) + "</a>" +
    estrelasCard(p) +
    '<div class="price">' +
    (pct != null ? '<span class="was">Was: ' + fmt(p.preco_anterior) + "</span>" : "") +
    '<span class="now">' + fmt(p.preco) + "</span>" +
    (pct != null ? '<span class="save">Save ' + fmt(p.preco_anterior - p.preco) + "</span>" : "") +
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
    garantirEstrutura();
    carregarDados();
    garantirEstrutura();
  });
}