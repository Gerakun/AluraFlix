import React from "react";
import Home from "./Pages/Home";
import AddVideo from "./Pages/Add-video";
import Page404 from "./Pages/Page404";
import Categoria from "./Pages/Categorias";
import Edit from "./Pages/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GlobalStyle from "./GlobalStyle";
import { ApiProvider } from "./Context/api";


function App() {

    return (
      <Router>
        <GlobalStyle />
        <Header />
        <ApiProvider>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Add-video" element={<AddVideo />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/Categorias" element={<Categoria />} />
            <Route path="/Edit" element={<Edit /> }/>
          </Routes>
        </ApiProvider>
        <Footer />
      </Router>
    );
  }
  
  export default App;
