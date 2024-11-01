import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import root from "~/routes/root.routes";
import claims from "~/routes/claims.routes";
import auth from "~/routes/auth.routes";

const app = new Hono();

app.use("/api/*", cors());

app.route("", root);
app.route("/api/claims", claims);
app.route("/api/auth", auth);

serve({ fetch: app.fetch, port: 8080 });
