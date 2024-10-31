import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.get("/", (context) => {
  return context.text("Hello Hono!");
});

serve({ fetch: app.fetch, port: 8080 });
console.log("Server is running on http://localhost:8080");
