'use client'

import Image from "next/image";
import Link from "next/link";

// TODO get these from database API
const paintings = [
    {id: 1, filename: "/test.png", title: "test"},
    {id: 2, filename: "/test2.png", title: "test2"},
    {id: 3, filename: "/test3.png", title: "test3"},
    {id: 4, filename: "/test.png", title: "test"},
    {id: 5, filename: "/test2.png", title: "test2"},
    {id: 6, filename: "/test3.png", title: "test3"},
]

function Painting({id, filename, title}) {
    return (
        <Link href={`/gallery/${id}`}>
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

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
        {paintings.map(({id, filename, title}) => <Painting key={id} id={id} filename={filename} title={title} />)}
    </div>
  );
}
