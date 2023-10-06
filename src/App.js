import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TaizoinSalesFAQsPageAne from "./pages/TaizoinSalesFAQsPageAne";
import TaizoinSalesFAQsPageSow from "./pages/TaizoinSalesFAQsPageSow";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/taizoin-sales-faqs-page-sowmiya-gunasekaran":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TaizoinSalesFAQsPageAne />} />
      <Route
        path="/taizoin-sales-faqs-page-sowmiya-gunasekaran"
        element={<TaizoinSalesFAQsPageSow />}
      />
    </Routes>
  );
}
export default App;
