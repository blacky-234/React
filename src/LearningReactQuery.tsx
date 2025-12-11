import { Route, Routes } from "react-router-dom";
import { RQSuperHeros } from "./components/Learning/Reactquery/RQSuperHeros.page";
import { SuperHeros } from "./components/Learning/Reactquery/SuperHeros.page";
import { HomePage } from "./components/Learning/Reactquery/Home.page";
import Layout  from "./components/Learning/Reactquery/Layout/rqlayout";
function LearningRQuery() {
  return (
    <Routes>
      {/* Layout route */}
      <Route path="/" element={<Layout />}> /* this is the parent route */
        <Route index element={<HomePage />} />
        <Route path="superheros" element={<SuperHeros />} />
        <Route path="rqsuperheros" element={<RQSuperHeros />} />
      </Route>
      {/* Optional: 404 page */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default LearningRQuery;