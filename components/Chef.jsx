export default function Chef() {
  return (
    <section id="chef" style={{ padding: "100px 24px", backgroundColor: "#0b0b0b", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "1150px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "center" }}>
        
        <div style={{ flex: "1", minWidth: "280px" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#c5a880", marginBottom: "16px" }}>Culinary Leadership</p>
          <h2 style={{ fontFamily: "serif", fontSize: "42px", color: "#f4f4f0", lineHeight: "1.2", marginBottom: "12px" }}>
            The Mind Behind the Menu
          </h2>
          <h3 style={{ fontFamily: "serif", fontSize: "20px", color: "#c5a880", marginBottom: "16px" }}>Chef Jean-Luc Moreau</h3>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: "1.7", fontWeight: "300" }}>
            With over two decades of experience in Michelin-starred institutions across Paris and Tokyo, Chef Moreau brings a rigorous devotion to French technique married with unexpected global ingredients.
          </p>
        </div>

        {/* Inline style controls width and height directly */}
        <div style={{ width: "100%", maxWidth: "520px", height: "400px", border: "1px solid #222", overflow: "hidden", position: "relative" }}>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200" 
            alt="Chef preparing fine dining dish under warm copper lighting" 
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: "0.9" }}
          />
        </div>

      </div>
    </section>
  );
}