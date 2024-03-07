import monthlyTargets from "../src/data/monthlyTargets.json";

export const runtime = "edge";

export async function GET() {
  try {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    });

    return new Response(JSON.stringify(monthlyTargets), { headers });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
