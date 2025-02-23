import { serve } from "https://deno.land/std@0.181.0/http/server.ts"

// Log when the function is loaded
console.log("Edge function loaded and ready");

serve(async (req) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Webhook triggered`);
  
  try {
    // Log raw request
    const rawBody = await req.text();
    console.log(`[${timestamp}] Raw request body:`, rawBody);

    // Try to parse JSON
    let payload;
    try {
      payload = JSON.parse(rawBody);
      console.log(`[${timestamp}] Parsed payload:`, payload);
    } catch (e) {
      console.log(`[${timestamp}] Failed to parse JSON:`, e);
    }

    return new Response(JSON.stringify({ 
      success: true,
      timestamp,
      message: "Request processed" 
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(`[${timestamp}] Error:`, error);
    return new Response(JSON.stringify({ 
      error: error.message,
      timestamp 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});
