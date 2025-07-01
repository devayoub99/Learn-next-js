export async function GET(request) {
  console.log("request", request);

  // return a text
  return new Response("Hello world!");

  // return a JSON
  // return Response.json({ message: "Hello world!" });
}
