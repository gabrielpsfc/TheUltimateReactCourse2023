import { Link } from "react-router-dom";
import PagesNav from "../components/PagesNav";
import AppNav from "../components/AppNav";
function Homepage() {
  return (
    <div>
      <PagesNav />
      <AppNav />
      <h1 className="test">WorldWise</h1>

      <Link to="/app">Go to de app</Link>
    </div>
  );
}

export default Homepage;
