import Layout from '../../components/Layout';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    ['link', 'image', 'video'],
    ['clean'],
];

export default function Create() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [slug, setSlug] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            title,
            description,
            slug,
            content
        };

        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.error(error);
        }

        alert('Post created successfully!')
    };

    return (
        <div className='min-h-screen bg-[#FBFAF5] text-[#181A18] dark:bg-[#181A18] dark:text-[#FBFAF5]'>
            <Head>
                <title>Create Blog</title>
            </Head>
            <Layout />
            <form className='container mx-auto' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row mb-6 items-center justify-between'>
                    <div className='flex flex-col md:flex-row md:space-x-4'>
                        <div className='flex flex-col'>
                            <label className='font-bold' htmlFor="title">Title</label>
                            <input className='bg-[#bfb896] text-[#181A18] rounded-lg border-2 focus:outline-[#ebe0a9] px-2' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className='flex flex-col'>
                            <label className='font-bold' htmlFor="tags">Slug</label>
                            <input className='bg-[#bfb896] text-[#181A18] rounded-lg border-2 focus:outline-[#ebe0a9] px-2' type="text" name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
                        </div>

                        <div className='flex flex-col'>
                            <label className='font-bold' htmlFor="tags">Description</label>
                            <input className='bg-[#bfb896] text-[#181A18] rounded-lg border-2 focus:outline-[#ebe0a9] px-2' type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>

                    <button className="bg-[#181A18] text-[#FBFAF5] px-2 py-2 rounded-md border-2 border-white duration-300 dark:hover:bg-[#FBFAF5] dark:hover:text-[#181A18]" type="submit">Save</button>
                </div>

                {typeof window !== 'undefined' && (
                    <ReactQuill value={content} onChange={setContent} modules={{ toolbar: toolbarOptions }} />
                )}


            </form>
        </div>
    )
}