const BASE_URL = "https://fakestoreapi.com";

/**
 * @param {number} limit - Limit to 5 prod
 */
export async function getProduct(limit = 5) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products?limit=7`,
            {
                next: { revalidate: 60 }
            });

        if (!res.ok) {
            throw new Error("Failed to fetch products!");
        }

        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * @param {string|number} id - Product id
 */
export async function getProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}/products/${id}`,
            {
                next: { revalidate: 60 }
            });
        if (!res.ok) {
            throw new Error("Failed to fetch products!");
        }

        return await res.json();
    } catch (error) {
        console.log("Error : ", error);
        return null;
    }
}