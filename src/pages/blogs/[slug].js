import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

export default function Blog() {
  const [blog, setBlog] = useState(null);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`/api/blogs/${slug}`)
        .then(res => res.json())
        .then(data => setBlog(data.data))
        .catch(error => {
          console.log('Error fetching blog data:', error);
        });
    }
  }, [slug]);

  return (
    <div className='min-h-screen bg-[#FBFAF5] text-[#181A18] dark:bg-[#181A18] dark:text-[#FBFAF5]'>
      <Head>
        {blog && <title>{blog.title}</title>}
      </Head>
      <Layout />
      <div className='container mx-auto px-4'>
        {blog && (
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold my-4'>{blog.title}</h1>
            <p className='text-xl my-4'>{blog.description}</p>
            <div className='my-4 text-xl' dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        )}
      </div>
    </div>
  );
}
