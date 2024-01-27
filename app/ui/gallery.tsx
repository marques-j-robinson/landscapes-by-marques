'use client'

import Image from "next/image";

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
            <p className="text-center text-xl pt-2 uppercase">{title}</p>
        </a>
    )
}

export default function Gallery() {
    return (
        <>
            <main className="container mx-auto px-4">
                <div className="grid grid-cols-3 gap-8">
                    {paintings.map(({filename, title}, index) => <Painting key={index} filename={filename} title={title} />)}
                </div>
            </main>
        </>
    )
}