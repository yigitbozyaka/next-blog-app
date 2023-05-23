import Head from 'next/head'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Admin() {
    const { data: session, status } = useSession();
    console.log(session)
    const router = useRouter();

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        }
    }, [status])

    useEffect(() => {
        fetch('/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.data))
    }, [])

    const handleAddBlog = () => {
        router.push('/blog/create');
    }

    const handleDeleteBlog = (slug) => {
        fetch(`/api/blogs/delete/${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data.data) {
                    const updatedBlogs = blogs.filter(blog => blog.slug !== slug);
                    setBlogs(updatedBlogs);
                }
            })
    }


    if (status === 'authenticated') {
        return (
            <div className='min-h-screen bg-[#FBFAF5] text-[#181A18] dark:bg-[#181A18] dark:text-[#FBFAF5]'>
                <Head>
                    <title>Admin</title>
                </Head>
                <Layout />

                <div className='container mx-auto mt-10'>
                    <div className='flex flex-row justify-evenly items-center'>
                        <h4 className='text-xl font-bold'>Blogs</h4>
                        <button onClick={handleAddBlog} className='bg-[#181A18] text-[#FBFAF5] px-2 py-2 rounded-md border-2 border-white duration-300 dark:hover:bg-[#FBFAF5] dark:hover:text-[#181A18]'>Add Blog</button>
                    </div>

                    <div className='container mx-auto flex items-center justify-center mt-16'>
                        <table className='table-auto'>
                            <thead>
                                <tr>
                                    <th className='py-3 border-2 border-[#181A18] dark:border-[#FBFAF5]'>Title</th>
                                    <th className='py-3 border-2 border-[#181A18] dark:border-[#FBFAF5]'>Date</th>
                                    <th className='py-3 border-2 border-[#181A18] dark:border-[#FBFAF5]'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map(blog => (
                                    <tr key={blog._id}>
                                        <td className='px-4 border-2 border-[#181A18] dark:border-[#FBFAF5]'>{blog.title}</td>
                                        <td className='px-4 border-2 border-[#181A18] dark:border-[#FBFAF5]'>{blog.date}</td>
                                        <td className='px-4 space-x-2 border-2 border-[#181A18] dark:border-[#FBFAF5]'>
                                            <button className='bg-[#181A18] text-[#FBFAF5] px-2 py-1 my-1 rounded-md border-2 border-white duration-300 dark:hover:bg-[#FBFAF5] dark:hover:text-[#181A18]'>Edit</button>
                                            <button onClick={handleDeleteBlog} className='bg-[#181A18] text-[#FBFAF5] px-2 py-1 my-1 rounded-md border-2 border-white duration-300 dark:hover:bg-[#FBFAF5] dark:hover:text-[#181A18]'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    return <div>Loading...</div>;
}