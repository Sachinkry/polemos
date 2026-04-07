import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv, type Plugin } from "vite"
import contactHandler from "./api/contact"

const localApiPlugin = (mode: string): Plugin => ({
  name: "local-api",
  configResolved() {
    Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  },
  configureServer(server) {
    server.middlewares.use("/api/contact", async (req, res) => {
      if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Method not allowed" }));
        return;
      }

      const chunks: Buffer[] = [];

      for await (const chunk of req) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }

      const rawBody = Buffer.concat(chunks).toString("utf8");

      try {
        const apiResponse = {
          setHeader: (name: string, value: string) => res.setHeader(name, value),
          status: (code: number) => {
            res.statusCode = code;
            return apiResponse;
          },
          json: (body: unknown) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(body));
          },
          end: () => res.end(),
        };

        await contactHandler(
          {
            method: req.method,
            body: rawBody ? JSON.parse(rawBody) : {},
          },
          apiResponse,
        );
      } catch {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Local API error" }));
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [localApiPlugin(mode), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
