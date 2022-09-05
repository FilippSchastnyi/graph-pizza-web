import {Route, Routes} from "react-router-dom";
import Pizzas from "./pages/Pizzas/Pizzas";
import Deserts from "./pages/Deserts/Deserts";
import Snacks from "./pages/Snacks/Snacks";
import Drinks from "./pages/Drinks/Drinks";
import React from "react";
import Layout from "./components/common/Layout";
import Hero from "./pages/Hero/Hero";

const AppRoutes = () =>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Hero/>}/>
      <Route path="/pizzas" element={<Pizzas/>}/>
      <Route path="/desserts" element={<Deserts/>}/>
      <Route path="/snacks" element={<Snacks/>}/>
      <Route path="/drinks" element={<Drinks/>}/>
    </Route>
  </Routes>

export default AppRoutes

