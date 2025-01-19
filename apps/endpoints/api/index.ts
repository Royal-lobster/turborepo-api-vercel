import { add } from "@repo/lib";

export default async function handler(req: Request) {
	const body = await req.json();
	const sum = add(body.a, body.b);
	return new Response(JSON.stringify({ sum }));
}
