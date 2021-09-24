
import './App.css';
import Languages from "./components/languages"
import "bootswatch/dist/materia/bootstrap.min.css";
import ShopContextProvider from "./Context/ShopContext";
import ShowProducts from "./components/ShowProducts";

function App() {
  return (
    <div className="container mt-5">
        <ShopContextProvider>
            <ShowProducts />
        </ShopContextProvider>

    </div>
  );
}

export default App;
