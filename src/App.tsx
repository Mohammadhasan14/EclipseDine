import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="App">
      <div className="branding-section">
        <img src="/images/bg-shop-img.jpeg" alt="" className="top-section-bg" />
        <Navbar />
        <div className="content-section">
          <div className="title-badge"></div>
        </div>
      </div>
    </div>
  )
}

export default App
