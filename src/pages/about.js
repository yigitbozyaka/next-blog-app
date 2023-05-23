import Layout from "../components/Layout"
import Head from "next/head"

export default function About()
{
    return (
        <div className="min-h-screen bg-[#FBFAF5] text-[#181A18] dark:bg-[#181A18] dark:text-[#FBFAF5]">
            <Head>
                <title>About</title>
            </Head>
            <Layout/>

            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold my-4">About</h1>
                    <p className="text-xl my-4">Hello I'm Nur.</p>
                </div>
            </div>
        </div>
    )
}