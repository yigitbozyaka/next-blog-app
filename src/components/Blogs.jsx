import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.data))
    }, [])

    return (
        <>
            {blogs?.map(blog => (
                <Link key={blog._id} href={`/blogs/${blog.slug}`} className="w-1/3 flex flex-col space-y-4">
                    <Image
                        className='rounded-xl block mx-auto brightness-75'
                        src="/test.jpg"
                        alt="blog image"
                        width={380}
                        height={200}
                    />

                    <div className="max-w-[380px] block mx-auto text-left">
                        <h3 className="text-xl font-bold">{blog.title}</h3>
                        <p className="text-lg text-gray-500 dark:text-gray-400">{blog.description}</p>
                    </div>

                </Link>
            ))}
        </>
    )
}
