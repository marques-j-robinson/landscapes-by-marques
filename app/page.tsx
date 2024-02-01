import GalleryImage from '@/app/ui/gallery-image';
import { fetchGallery } from '@/app/lib/data';

export default async function Page() {
    const gallery = await fetchGallery()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery ? (
                gallery.map(({id, image, title}) => (
                    <GalleryImage
                        key={id}
                        id={id}
                        filename={image}
                        title={title}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
