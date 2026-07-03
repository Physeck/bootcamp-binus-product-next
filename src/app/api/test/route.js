export async function GET() {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");

    const text = await res.text();

    return Response.json({
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        body: text.substring(0, 500),
    });
}