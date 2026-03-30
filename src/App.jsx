import "./index.css";

const destinations = [
  {
    name: "Kedarnath",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    desc: "A sacred Himalayan temple surrounded by breathtaking mountains.",
  },
  {
    name: "Badrinath",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
    desc: "One of the holiest pilgrimage destinations in India.",
  },
  {
    name: "Nainital",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80",
    desc: "A peaceful lake town perfect for families and weekend getaways.",
  },
  {
    name: "Rishikesh",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    desc: "Famous for river rafting, yoga retreats, and spiritual vibes.",
  },
  {
    name: "Auli",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    desc: "A scenic hill destination known for snow and mountain views.",
  },
  {
    name: "Chopta",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    desc: "A hidden gem and gateway to Tungnath and Chandrashila trek.",
  },
];

const categories = [
  "Spiritual Trips",
  "Adventure Travel",
  "Weekend Escapes",
  "Family Tours",
  "Nature Retreats",
];

function App() {
  return (
    <div className="app">
    
      <header className="navbar">
        <h2>Explore Uttarakhand</h2>
        <nav>
          <a href="#destinations">Destinations</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#tips">Travel Tips</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

   
      <section className="hero">
        <div className="overlay">
          <h1>Discover the Beauty of Uttarakhand</h1>
          <p>
            Explore temples, mountains, lakes, and unforgettable travel
            experiences across the land of gods.
          </p>
          <div className="hero-buttons">
            <a href="#destinations" className="btn primary">Explore Destinations</a>
            <a href="#itinerary" className="btn secondary">Plan Your Trip</a>
          </div>
        </div>
      </section>

     
      <section className="section">
        <h2>Trip Categories</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              {cat}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="destinations">
        <h2>Popular Destinations</h2>
        <div className="grid">
          {destinations.map((place, index) => (
            <div className="card" key={index}>
              <img src={place.image} alt={place.name} />
              <div className="card-content">
                <h3>{place.name}</h3>
                <p>{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="section itinerary" id="itinerary">
        <h2>Featured 3-Day Spiritual Itinerary</h2>
        <div className="itinerary-box">
          <div>
            <h3>Day 1</h3>
            <p>Haridwar + Rishikesh sightseeing and Ganga Aarti</p>
          </div>
          <div>
            <h3>Day 2</h3>
            <p>Rudraprayag + Chopta scenic journey and local stay</p>
          </div>
          <div>
            <h3>Day 3</h3>
            <p>Tungnath / Kartik Swami temple trek and return</p>
          </div>
        </div>
      </section>

     
      <section className="section">
        <h2>Why Visit Uttarakhand?</h2>
        <div className="why-grid">
          <div className="why-card">🏔 Scenic Mountain Views</div>
          <div className="why-card">🛕 Sacred Pilgrimage Sites</div>
          <div className="why-card">🥾 Adventure & Trekking</div>
          <div className="why-card">🌿 Peaceful Nature Escapes</div>
        </div>
      </section>

  
      <section className="section tips" id="tips">
        <h2>Travel Tips</h2>
        <div className="tips-box">
          <p><strong>Best Time:</strong> March to June and September to November</p>
          <p><strong>Ideal Budget:</strong> ₹5,000 – ₹15,000 depending on trip style</p>
          <p><strong>Pack:</strong> Warm clothes, trekking shoes, medicines, ID proof</p>
          <p><strong>Advice:</strong> Check road/weather updates before hilly travel</p>
        </div>
      </section>

    
      <section className="section contact" id="contact">
        <h2>Plan Your Uttarakhand Journey</h2>
        <p>Need help choosing the perfect destination? Reach out below.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <select>
            <option>Select Destination</option>
            <option>Kedarnath</option>
            <option>Badrinath</option>
            <option>Nainital</option>
            <option>Rishikesh</option>
            <option>Auli</option>
            <option>Chopta</option>
          </select>
          <textarea placeholder="Write your travel interest..." rows="4"></textarea>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

     
      <footer className="footer">
        <p>© 2026 Explore Uttarakhand | Designed for Tourism Discovery</p>
      </footer>
    </div>
  );
}

export default App;