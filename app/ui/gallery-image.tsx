import Image from 'next/image';
import Link from 'next/link';

export default function GalleryImage({id, filename, title}) {
    return (
        <Link
            href={`/gallery/${id}`}>
            <div className="relative h-56">
                <Image
                    className="painting object-cover w-full max-h-full"
                    src={filename}
                    alt={title}
                    fill={true}
                    sizes="500px 500px"
                />
            </div>
            <p className="text-center text-xl my-2 uppercase">{title}</p>
        </Link>
    )
}
