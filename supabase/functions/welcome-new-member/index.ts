import { serve } from "https://deno.land/std@0.181.0/http/server.ts"

serve(async (req) => {
  // Log basic request info
  console.log("Request received:", {
    method: req.method,
    url: req.url,
    headers: Object.fromEntries(req.headers.entries())
  });

  try {
    // Log the raw request body
    const rawBody = await req.text();
    console.log("Raw request body:", rawBody);

    // Try to parse as JSON if possible
    let jsonBody;
    try {
      jsonBody = JSON.parse(rawBody);
      console.log("Parsed JSON body:", jsonBody);
    } catch (e) {
      console.log("Could not parse body as JSON:", e);
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: "Request logged successfully" 
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});
