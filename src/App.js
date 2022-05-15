import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard-layout/DashboardLayout";
import Blank from "./pages/Blank";
import Overview from "./pages/Overview";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="orders" element={<Blank />} />
          <Route path="pending-orders" element={<Blank />} />
          <Route path="reconcilled-orders" element={<Blank />} />
          <Route path="merchant-profile" element={<Blank />} />
          <Route path="reconcilled-payments" element={<Blank />} />
          <Route path="unreconcilled-payments" element={<Blank />} />
          <Route path="manual-settlement" element={<Blank />} />
          <Route path="payments" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
