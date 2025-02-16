import { Outlet } from "react-router-dom";
import HeaderPage from "./pages/HeaderPage";
import FooterPage from "./pages/FooterPage";

const App = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  )
}
export default App;