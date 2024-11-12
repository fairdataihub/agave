import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/v1/users", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.get("/secret", (c) => {
  const secretValue = process.env.SV || "no secret";

  return c.text(`Hello ${secretValue}!`);
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
