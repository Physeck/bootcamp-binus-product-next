const BASE_URL = "https://fakestoreapi.com";

/**
 * @param {number} limit - Limit to 5 prod
 */
export async function getProduct(limit = 5) {
    try {
        const res = await fetch(`${BASE_URL}/products?limit=${limit}`,
            {
                next: { revalidate: 60 },
                timeout: 10000
            });

        if (!res.ok) {
            throw new Error(`API returned status ${res.status}`);
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
            throw new Error("Invalid response format");
        }

        return data;
    } catch (error) {
        console.error('getProduct error:', error);
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
                next: { revalidate: 60 },
                timeout: 10000
            });
        if (!res.ok) {
            throw new Error(`Product not found (status ${res.status})`);
        }

        const data = await res.json();
        if (!data || typeof data !== 'object') {
            throw new Error("Invalid response format");
        }

        return data;
    } catch (error) {
        console.error('getProductById error:', error);
        throw error;
    }
}