import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SharedLayout from "./sharedLayou/sharedLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<p>home</p>} />
        <Route path="" element={<p>users</p>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
