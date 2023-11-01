import { APIRoute } from "astro";

export const hello: APIRoute = async ({ request }) => {
  return new Response("Hello HTMX!!", { status: 200 });
};
