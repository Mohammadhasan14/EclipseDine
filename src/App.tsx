import Navbar from "./components/Navbar"


function App() {

  return (
    <div>
      <Navbar />
      <div className="parent">
        {Array(12).fill(null).map((_, index) => {
          return (
            <div key={index + 1} className="card">
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
