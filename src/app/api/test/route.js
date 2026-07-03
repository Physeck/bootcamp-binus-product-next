export async function GET() {
    try {
        const res = await fetch("https://fakestoreapi.com/products?limit=5", {
            cache: "no-store",
        });

        return Response.json({
            ok: res.ok,
            status: res.status,
            data: await res.json(),
        });
    } catch (err) {
        return Response.json(
            {
                error: err.message,
                stack: err.stack,
            },
            { status: 500 }
        );
    }
}