export default function Story() {
  return (
    <section id="story" style={{ padding: "100px 24px", backgroundColor: "#0b0b0b" }}>
      <div style={{ maxWidth: "1150px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "center" }}>
        
        {/* Inline style controls width and height directly */}
        <div style={{ width: "100%", maxWidth: "520px", height: "400px", border: "1px solid #222", overflow: "hidden", position: "relative" }}>
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
            alt="Elegant restaurant interior lighting and table settings" 
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: "0.9" }}
          />
        </div>

        <div style={{ flex: "1", minWidth: "280px" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#c5a880", marginBottom: "16px" }}>Our Philosophy</p>
          <h2 style={{ fontFamily: "serif", fontSize: "42px", color: "#f4f4f0", lineHeight: "1.2", marginBottom: "20px" }}>
            A Table Worth Remembering
          </h2>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: "1.7", fontWeight: "300" }}>
            Founded in the heart of the culinary district, L'ÉTOILE redefines luxury dining through an uncompromising commitment to pristine seasonality, French technique, and sensory storytelling.
          </p>
        </div>

      </div>
    </section>
  );
}