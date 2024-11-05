import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/seceret", (c) => {
  return c.text("Hello seceret!");
});

app.get("/:name", (c) => {
  return c.text(`Hello ${c.req.param("name")}!`);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
