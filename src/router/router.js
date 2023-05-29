import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTE } from "./routes";
import { HomePage } from "../pages/HomePage/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path={ROUTE.HOME}>
    <>
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.COIN} />
    </>

    // {/* </Route> */}
  )
);
