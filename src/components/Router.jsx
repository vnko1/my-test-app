import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SharedLayout from "./sharedLayout/SharedLayout";
import UsersPage from "../pages/UsersPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<h1>home</h1>} />
        <Route path="tweets" element={<UsersPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
