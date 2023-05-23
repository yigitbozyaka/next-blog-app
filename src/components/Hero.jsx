import Blogs from "./Blogs"

export default function Hero() {
    return (
        <div className="container mx-auto mt-20 text-center">
            <h2 className="text-2xl font-bold underline underline-offset-4">All Blogs</h2>
            <div className="py-8 flex flex-col flex-wrap md:flex-row gap-16 items-center justify-center">
                <Blogs />
            </div>
        </div>
    )
}