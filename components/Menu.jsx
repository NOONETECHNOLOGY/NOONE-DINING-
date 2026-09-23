'use client';
import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const menuItems = [
    {
      name: "Truffle Butter Risotto",
      description: "Acquerello carnaroli rice, 24-month Parmigiano Reggiano, black winter truffle.",
      price: "$32",
      category: "STARTERS"
    },
    {
      name: "Pan-Seared Chilean Sea Bass",
      description: "Sunchoke purée, chanterelle mushrooms, verjus reduction.",
      price: "$54",
      category: "SEAFOOD"
    },
    {
      name: "A5 Miyazaki Wagyu Striploin",
      description: "Smoked pomme purée, charred baby leeks, bone marrow jus.",
      price: "$145",
      category: "STEAKS"
    },
    {
      name: "Valrhona Dark Chocolate Soufflé",
      description: "Madagascan vanilla bean crème anglaise, house-made pistachio gelato.",
      price: "$22",
      category: "DESSERTS"
    }
  ];

  const categories = ['ALL', 'STARTERS', 'SEAFOOD', 'STEAKS', 'DESSERTS'];

  const filteredItems = activeCategory === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" style={{ padding: "100px 24px", backgroundColor: "#0b0b0b" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#c5a880", marginBottom: "12px" }}>
          Gastronomy
        </p>
        <h2 style={{ fontFamily: "serif", fontSize: "42px", color: "#f4f4f0", fontWeight: "300", marginBottom: "36px" }}>
          The Seasonal Menu
        </h2>

        {/* Category Filter Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "60px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? "#c5a880" : "transparent",
                color: activeCategory === cat ? "#000" : "#bbb",
                border: "1px solid",
                borderColor: activeCategory === cat ? "#c5a880" : "#333",
                padding: "8px 18px",
                fontSize: "11px",
                letterSpacing: "0.2em",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: activeCategory === cat ? "500" : "400"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", textAlign: "left" }}>
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                borderBottom: "1px solid #1c1c1c", 
                paddingBottom: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              {/* Top Row: Name and Price aligned on opposite sides */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px" }}>
                <h3 style={{ fontFamily: "serif", fontSize: "22px", color: "#f4f4f0", fontWeight: "400", margin: 0 }}>
                  {item.name}
                </h3>
                <span style={{ fontFamily: "serif", fontSize: "20px", color: "#c5a880", fontWeight: "400", whiteSpace: "nowrap" }}>
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: "13px", color: "#888", fontWeight: "300", lineHeight: "1.6", margin: 0, maxWidth: "75%" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}