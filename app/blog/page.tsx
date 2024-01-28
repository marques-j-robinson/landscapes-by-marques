'use client'

import Image from "next/image";
import Link from "next/link";
import PublishedAt from '@/app/ui/date'

// TODO get these from database API
const blogPosts = [
    {id: 1, filename: "/test.png", title: "test", published: "2015/1/15"},
    {id: 2, filename: "/test2.png", title: "test2", published: "2022/4/23"},
    {id: 3, filename: "/test3.png", title: "test3", published: "2021/4/5"},
    {id: 4, filename: "/test.png", title: "test", published: "2020/5/12"},
    {id: 5, filename: "/test2.png", title: "test2", published: "2016/3/19"},
    {id: 6, filename: "/test3.png", title: "test3", published: "2015/4/1"},
]

function Post({post}) {
    const {id, filename, title, published} = post
    return (
        <Link className="border border-black rounded" href={`/blog/${id}`}>
            <div className="relative h-56">
                <Image
                    className="painting object-cover w-full max-h-full"
                    src={filename}
                    alt={title}
                    fill={true}
                    sizes="500px 500px"
                />
            </div>
            <div className="flex flex-row items-center justify-between m-2">
                <p className="text-xl uppercase">{title}</p>
                <PublishedAt dateString={published} />
            </div>
        </Link>
    )
}

export default function Blog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogPosts.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}
