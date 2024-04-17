import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import City from "./components/City";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:9000/cities";
function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCites = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCites();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />

          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<City cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="cities"
              element={<City cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="countries" element={<p>List of countries</p>}></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
