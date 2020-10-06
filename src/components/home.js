import React from "react";

import "./home.css";
import Product from "./SUBCOMPONENTS/product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className ="home-row">
            {/* PRODUCTS */}
            <Product
            id="12321341"
            title="Womens Purses and Handbags Ladies Designer Satchel Tote Bag Shoulder Bags"
            price={350}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/910zU0vyBrL._AC_UY395_.jpg"
          />
          <Product
            id="49538094"
            title="Women White Shoulder Bag"
            price={400}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71bdgYfofhL._UX500_.jpg"
          />
        </div>

        <div className ="home-row">
            {/* PRODUCTS */}
            <Product
            id="4903850"
            title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
            price={29000}
            rating={4}
            image="https://www.91-img.com/pictures/139167-v3-oneplus-nord-256gb-mobile-phone-large-1.jpg?tr=h-330,c-at_max,q-60"
          />
          <Product
            id="23445930"
            title="Infinity (JBL) Glide 500 Wireless Headphones with 20 Hours Playtime (Quick Charge), Deep Bass and Dual Equalizer (Mystic Blue)"
            price={1699}
            rating={5}
            image="data:image/jpeg;base64,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Flk7FoSKEcK5jityxWN0xEMQkkkc7qRhtTSgzqNBWtScgKEnIrHarNJZ5TFNG5j25OjeKEg1B7Qc6OFQdQV1l3E1ju11JmH6w88vmpC94C2QnY7MHjShHz71FSAA9U1Gw7e/ipqy3qx7cM2R946HjwKD3d1+PhAawZBrgBidhLnuxF7ho45MH2W02lLVerpY2x0cXUaCXHESWtLS8ZVxvBAJ3MFOGWw3UyZ1IellNfViaX0rvIaaDiaKxeS3NwRR9oHRt/wmurK7g+QGjRrk0nXUKbMZdt9c7yC5FPneJJKhjT1nbvqt2F/HRvhW6rPA1jQxgDWtAAaNAAlngaxoYxoa1ooGtFABwAWRc7ltsmhERY0REQEREBERAREQEREBERAREQEREBfHNBFCKjcdF9RBE23kxYpf2lks7zvdFGT40qow83d2VxeiMruDpA38IdTyXUot3RpXXdFns4LYIY4gdcDWtr2kZnvX287qgtDcE8McrRoJGNdQ7xUZHiFuIsHMDm+uytfRI+yr6fhLqKRsfJmxRfs7JZ2He2KMHxpVSyLd0fGNAFAABuGi+oiwEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q=="
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={59899}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className ="home-row">
            {/* PRODUCTS */}
            <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
            
        </div>
      </div>
    </div>
  );
}

export default Home;
