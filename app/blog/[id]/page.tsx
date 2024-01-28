'use client'

import Image from "next/image";
import PublishedAt from '@/app/ui/date'

// TODO get these from database API
const post = {
    id: 1,
    filename: "/test.png",
    title: "test",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor tincidunt, lacinia ante et, volutpat libero. Fusce vehicula mauris ac purus fringilla, bibendum blandit est venenatis. Aenean non felis id lorem fermentum dapibus. Suspendisse feugiat risus id sollicitudin eleifend. Vestibulum rutrum diam nisi. Fusce ornare velit at faucibus dapibus. Cras pharetra, nibh sit amet interdum tristique, ex velit porta ipsum, eu tincidunt dui quam at ante. Nulla sodales, purus at eleifend gravida, nibh mauris ultrices lectus, id tristique metus massa dictum lacus.",
    published: "2015/1/15",
}

export default function BlogPost() {
    return (
        <>
            <div className="flex flex-col mb-6">
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <PublishedAt dateString={post.published} />
            </div>
            <div className="relative w-full h-56 mb-6">
                <Image className="object-cover" alt={post.title} src={post.filename} fill={true} sizes="100px 100px"/>
            </div>
            <p>{post.description}</p>
        </>
    )
}
