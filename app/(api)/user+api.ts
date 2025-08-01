import { neon } from "@neondatabase/serverless";

export async function Post(request: Request) {
  try {
    const sql = neon(`${process.env.DaTABASE_URL}`);
    const { name, email, clerkId } = await request.json();
    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const response =
      await sql`insert into users (name, email, clerk_id) values (${name}, ${email}, ${clerkId}) returning *`;
    return new Response(JSON.stringify({ data: response }));
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
