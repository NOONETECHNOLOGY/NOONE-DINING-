export default function Reviews() {
  const reviews = [
    {
     quote: "NOONE DINING delivers an absolute masterclass in modern French gastronomy. Every single course is a revelation.",
      source: "The Michelin Guide"
    },
    {
      quote: "An uncompromising commitment to pristine seasonality and sensory storytelling. Unforgettable.",
      source: "Culinary Quarterly"
    },
    {
      quote: "Chef Moreau has created a sanctuary of luxury dining that instantly anchors itself among the world's finest.",
      source: "Global Restaurant Awards"
    }
  ];

  return (
    <section id="reviews" style={{ padding: "100px 24px", backgroundColor: "#0b0b0b", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#c5a880", marginBottom: "12px" }}>Accolades & Press</p>
        <h2 style={{ fontFamily: "serif", fontSize: "42px", color: "#f4f4f0", marginBottom: "64px" }}>Critical Acclaim</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          {reviews.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: "#121212", 
                border: "1px solid #222", 
                padding: "40px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "left"
              }}
            >
              <p style={{ fontFamily: "serif", fontStyle: "italic", fontSize: "16px", color: "#ccc", lineHeight: "1.8", marginBottom: "24px" }}>
                "{item.quote}"
              </p>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#c5a880", textTransform: "uppercase" }}>
                — {item.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}