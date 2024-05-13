import "./App.css";
import "./assets/fonts/Jersey15-Regular.ttf";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
          {/*<Route path="blogs" element={<Blogs />} /> */}
          <Route path="./pages/Contact" element={<Contact/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
