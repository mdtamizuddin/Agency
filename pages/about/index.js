import Head from "next/head";
import Link from "next/link";
import Brands from "../../components/Brands";
import Footer from "../../components/Footer";
import Video from "../../components/Video";

const index = () => {
    return (
        <>
            <main className="container mx-auto py-10">
                <Head>
                    <title>Agency MT About page</title>
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
                                <Link href={'/about'}>
                                    <a >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        About
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="">
                        <h3 className="flex  items-center  text-accent uppercase text-sm">
                            <div className="sm-row mr-4"></div>
                            about US
                        </h3>
                        <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-5 font-bold">
                            Wa are creative <br /> & strong team
                        </h1>
                        <p className="font-light text-accent mt-3 poppins">Our creative and professional agency has been  <br /> developing products for 15 years. We are special.</p>
                        <p className="mt-2 text-base text-accent">We’ve got a lot of awards for our work and develop applications  that became <br /> popular in the world. We try not to miss important details in each area.</p>
                    </div>
                    <div className="flex items-end justify-center">
                        <div className="border-2 border-primary h-56 w-56 rounded-full flex flex-col items-center justify-center">
                            <h1 className="text-6xl mb-2">15</h1>
                            <p>Awards Wining</p>
                        </div>
                    </div>
                </section>

                <section className="mt-10 lg:mt-20  flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex items-center justify-center">
                        <div className="border-2 border-primary h-56 w-56 rounded-full flex flex-col items-center justify-center">
                            <h1 className="text-6xl mb-2">9</h1>
                            <p>Years Experiance</p>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col">

                        <h1 className="lg:text-3xl header-head md:text-3xl text-2xl  mt-5 font-bold">
                            How our working day starts
                        </h1>
                        <p className="font-light w-[80%] text-accent mt-3 poppins">Every morning in our company begins with hot coffee and a stand-up. Discussion is an important thing in the development process.
                        </p>
                        <p className="mt-2 w-[70%] text-base text-accent">Thus new ideas and ingenious solutions are born. Then we get to work with renewed vigor and inspiration. We are never bored. </p>
                    </div>

                </section>

                <section className="mt-10 lg:mt-20 lg:grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="p-4 flex flex-col">

                        <h1 className="lg:text-3xl header-head md:text-3xl text-2xl  mt-5 font-bold">
                            Individual approach
                        </h1>
                        <p className="font-light w-[80%] text-accent mt-3 poppins">Every morning in our company begins with hot coffee and a stand-up.
                        </p>
                        <p className="mt-2 w-[70%] text-base text-accent">Discussion is an important thing in the development process. Thus new ideas and ingenious solutions are born. Then we get to work with renewed vigor and inspiration. We are never bored. </p>
                    </div>
                    <div className="flex items-center justify-center mt-10 lg:mt-0">
                        <div className="border-2 border-primary h-56 w-56 rounded-full flex flex-col items-center justify-center">
                            <h1 className="text-6xl mb-2">254</h1>
                            <p>Successful Project</p>
                        </div>
                    </div>
                </section>
                <Brands />
                <Video />

            </main>

            <Footer />
        </>
    );
}

export default index;