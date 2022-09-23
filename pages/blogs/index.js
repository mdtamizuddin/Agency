import Head from "next/head";
import Link from "next/link";
import BlogCard from "../../components/Cards/BlogCard";
import OnlyFooter from "../../components/OnlyFooter";

const Index = () => {
    return (
        <>
            <main className="container mx-auto py-10">
                <Head>
                    <title>Agency MT Blogs page</title>
                </Head>
                <div className="py-2 ">
                    <div className=" text-sm breadcrumbs">
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <a >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/blogs'}>
                                    <a >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Blogs
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="mt-20">
                    <h3 className="flex  items-center  text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        Blogs
                    </h3>
                    <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-4 font-bold">
                        articles & news at crope
                    </h1>
                    <p className="text-sm text-accent mt-2">You may be interested in our technologies. We want to share more <br /> helpful infomation with you about our digital life and methods.</p>

                </div>
                <div className="grid grid-cols-3 gap-6 mt-20">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <button type="submit" className="btn mx-auto block mt-10 btn-outline outline-primary border-primary  text-white btn-md rounded-full px-7">Load More</button>
            </main>
            <OnlyFooter />
        </>
    );
}

export default Index;