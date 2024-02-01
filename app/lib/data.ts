export async function fetchGallery() {
    try {
        // TODO replace api url to handle in production
        const res = await fetch("http://127.0.0.1:8000/api/gallery/");
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error('Fetch Error:', error);
        throw new Error('Failed to fetch gallery.');
    }
}

export async function fetchPainting(id) {
    try {
        // TODO replace api url to handle in production
        const res = await fetch(`http://127.0.0.1:8000/api/gallery/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error('Fetch Error:', error);
        throw new Error('Failed to fetch gallery.');
    }
}
