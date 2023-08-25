import { Route, Routes as RouterRoutes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />;
      <Route path="/:category/:id" element={<Detail />} />;
      <Route path="/:category" element={<Catalog />} />;
      <Route path="/" exact element={<Home />} />;
    </RouterRoutes>
  );
};

export default Routes;
