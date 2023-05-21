import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SharedLayout from "./sharedLayout/SharedLayout";
import TweetsPage from "../pages/TweetsPage";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
