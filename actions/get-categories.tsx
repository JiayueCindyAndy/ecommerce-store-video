import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL, {
        headers: {
            'Cache-Control': 'no-store', // Ensures no caching
        },
    });

    return res.json();
};

export default getCategories;