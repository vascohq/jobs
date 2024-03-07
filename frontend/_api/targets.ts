import monthlyTargets from "../src/data/monthlyTargets.json";

export const runtime = "edge";

export async function GET() {
  try {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // Cache the data for 1 hour,
      // and allow it to become stale while
      // revalidating in the background for another 10
      // Completely arbitrary values, the data never changes ;-)
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    });

    return new Response(JSON.stringify(monthlyTargets), { headers });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
