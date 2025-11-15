import Navbar from "./components/Navbar"


function App() {

  return (
    <div>
      <Navbar />
      <div className="parent">
        {Array(12).fill(null).map((_, index) => {
          return (
            <div className="product-parent">
            <div key={index + 1} className="card">
              <img className="product-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Derbys_Peter_Pan_peanut_butter_sample_blikje%2C_foto3.JPG/250px-Derbys_Peter_Pan_peanut_butter_sample_blikje%2C_foto3.JPG"
                alt="Product Image" />
            </div>
            <p className="product-name">
              Product {index + 1}
            </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
