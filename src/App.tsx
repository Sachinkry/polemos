import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Index from "./pages";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Analytics />
  </>
);

export default App;
