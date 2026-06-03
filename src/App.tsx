import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Index from "./pages";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TPPilot from "./pages/TPPilot";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/tp-pilot" element={<TPPilot />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Analytics />
  </>
);

export default App;
