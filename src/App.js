import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard-layout/DashboardLayout";
import Overview from "./pages/Overview";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DashboardLayout />}>
          <Route index element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
