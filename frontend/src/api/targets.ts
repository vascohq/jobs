import monthlyTargets from "../data/monthlyTargets.json";

export const runtime = "edge";

export async function GET() {
  try {
    return new Response(JSON.stringify(monthlyTargets));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
