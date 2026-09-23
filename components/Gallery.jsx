export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1000",
      title: "Signature Plating"
    },
    {
      url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000",
      title: "Cellar Selections"
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
      title: "Gourmet Dining"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
      title: "Bar & Lounge"
    }
  ];

  return (
    <section id="gallery" style={{ padding: "100px 24px", backgroundColor: "#0b0b0b", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "1150px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#c5a880", marginBottom: "12px" }}>Visual Experience</p>
        <h2 style={{ fontFamily: "serif", fontSize: "42px", color: "#f4f4f0", marginBottom: "48px" }}>The Gallery</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
          {images.map((img, index) => (
            <div 
              key={index} 
              style={{ 
                position: "relative", 
                height: "320px", 
                overflow: "hidden", 
                border: "1px solid #222",
                borderRadius: "2px"
              }}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  transition: "transform 0.7s ease",
                  opacity: "0.85"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                padding: "20px",
                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                textAlign: "left"
              }}>
                <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#f4f4f0", fontFamily: "serif" }}>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}