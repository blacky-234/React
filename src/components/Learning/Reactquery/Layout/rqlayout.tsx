import { Outlet } from "react-router-dom";
import{NavbarReactquery} from "../NavbarReactQuery"

function Layout() {
  return (
    <>
      <NavbarReactquery />
      <div style={{ padding: "20px" }}>
        <Outlet /> {/* this is where child routes render */}
      </div>
    </>
  );
}

export default Layout;