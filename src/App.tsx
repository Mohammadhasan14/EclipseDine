import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to Our Platform</h1>
          <p className="hero-subtitle">Discover amazing features and services</p>
          <button className="cta-button">Get Started</button>
        </div>
        
        <div className="features-section">
          <h2 className="section-title">Featured Cards</h2>
          <div className="cards-grid">
            <div className="card featured-card">
              <div className="card-icon">🌟</div>
              <h3 className="card-title">Premium Feature</h3>
              <p className="card-description">Access exclusive content and advanced tools</p>
              <button className="card-button">Learn More</button>
            </div>
            <div className="card standard-card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Fast Performance</h3>
              <p className="card-description">Lightning fast loading and smooth interactions</p>
              <button className="card-button">Explore</button>
            </div>
            <div className="card standard-card">
              <div className="card-icon">🔒</div>
              <h3 className="card-title">Secure & Safe</h3>
              <p className="card-description">Your data is protected with enterprise security</p>
              <button className="card-button">Discover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App