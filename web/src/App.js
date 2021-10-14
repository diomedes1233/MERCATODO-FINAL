import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar/NavBar'
import ProductsList from './components/productsCrud/ProductsList'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container my-4">
        <ProductsList/>
      </div>
    </div>
  );
}

export default App;
