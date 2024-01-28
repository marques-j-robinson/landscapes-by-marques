'use client'

import Image from "next/image";

// TODO get these from database API
const painting = {
    id: 1,
    filename: "/test.png",
    title: "test",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor tincidunt, lacinia ante et, volutpat libero. Fusce vehicula mauris ac purus fringilla, bibendum blandit est venenatis. Aenean non felis id lorem fermentum dapibus. Suspendisse feugiat risus id sollicitudin eleifend. Vestibulum rutrum diam nisi. Fusce ornare velit at faucibus dapibus. Cras pharetra, nibh sit amet interdum tristique, ex velit porta ipsum, eu tincidunt dui quam at ante. Nulla sodales, purus at eleifend gravida, nibh mauris ultrices lectus, id tristique metus massa dictum lacus.",
    dimensions: "18x24",
}

export default function GalleryDetail() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-6">{painting.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Image alt={painting.title} src={painting.filename} width={500} height={500} />
                <div className="mt-6 lg:mt-0">
                    <p><strong>Dimensions</strong></p>
                    <p className="mb-4">{painting.dimensions}</p>
                    <p><strong>Description</strong></p>
                    <p>{painting.description}</p>
                </div>
            </div>
        </>
    )
}
