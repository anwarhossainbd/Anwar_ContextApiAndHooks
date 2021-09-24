
import './App.css';
import Languages from "./components/languages"
import "bootswatch/dist/materia/bootstrap.min.css";
import ShopContextProvider from "./Context/ShopContext";
import ShowProducts from "./components/ShowProducts";
import Nav from "./components/Nav";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="container mt-5">
        <ShopContextProvider>
            <Nav />
            <ThemeContextProvider>
                <ShowProducts />
            </ThemeContextProvider>
        </ShopContextProvider>

    </div>
  );
}

export default App;
