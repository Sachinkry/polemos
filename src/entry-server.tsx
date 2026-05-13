import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { getSeoConfig, listPrerenderRoutes, type SeoConfig } from "./lib/seoConfig";

export type RenderResult = {
  html: string;
  seo: SeoConfig;
};

export const render = (url: string): RenderResult => {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, seo: getSeoConfig(url) };
};

export const routes = (): string[] => listPrerenderRoutes();
