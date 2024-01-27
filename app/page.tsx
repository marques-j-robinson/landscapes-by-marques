'use client'

import Image from "next/image";
import Link from "next/link";

// TODO get these from database API
const paintings = [
    {filename: "/test.png", title: "test"},
    {filename: "/test2.png", title: "test2"},
    {filename: "/test3.png", title: "test3"},
    {filename: "/test.png", title: "test"},
    {filename: "/test2.png", title: "test2"},
    {filename: "/test3.png", title: "test3"},
]

function Painting({filename, title}) {
    return (
        <a href="#">
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
        </a>
    )
}

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
        {paintings.map(({filename, title}, index) => <Painting key={index} filename={filename} title={title} />)}
    </div>
  );
}
