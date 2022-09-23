import OnlyFooter from '../../components/OnlyFooter'
import Head from "next/head";
import Link from "next/link";
import PortCard from '../../components/Cards/PortCard'
const index = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <Head>
                    <title>Agency MT Portfolio Page</title>
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
                                <Link href={'/portfolio'}>
                                    <a >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Portfolio
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="mt-20">
                    <h3 className="flex  items-center  text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        Portfolios
                    </h3>
                    <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-4 font-bold">
                        Our amazing cases
                    </h1>
                    <p className="text-sm text-accent mt-2">You may be interested in what we can offer you. More services you can find below. <br /> We do everything at a high level.</p>

                </div>
                {/* Navigation Of Portfolio  */}
                <div className="mt-10 inline-block">
                    <button className="border-b-2 pl-1 pr-5 border-primary  mr-5 mt-2 text-start">ALL</button>
                    <button className="border-b-2 mr-5 hover:border-primary mt-2  hover:text-white text-accent pl-1 pr-5 border-accent text-start">UI/UX AND BRAND</button>
                    <button className="border-b-2 mr-5 hover:border-primary mt-2  hover:text-white text-accent pl-1 pr-5 border-accent text-start">APPS</button>
                    <button className="border-b-2 mr-5 hover:border-primary mt-2  hover:text-white text-accent pl-1 pr-5 border-accent text-start">SEO & SMM</button>
                    <button className="border-b-2 mr-5 hover:border-primary mt-2  hover:text-white text-accent pl-1 pr-5 border-accent text-start">WEB</button>
                    <button className="border-b-2 mr-5 hover:border-primary mt-2  hover:text-white text-accent pl-1 pr-5 border-accent text-start">E-COMMARCE</button>
                    <button className="border-b-2 mr-5 hover:border-primary mt-2  hover:text-white text-accent pl-1 pr-5 border-accent text-start">MARKETING</button>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 gap-5">
                    <PortCard />
                    <PortCard />
                    <PortCard />
                    <PortCard />
                    <PortCard />
                    <PortCard />
                </div>
                <button type="submit" className="btn mx-auto block mt-10 btn-outline outline-primary border-primary  text-white btn-md rounded-full px-7">Load More</button>

            </div>


            <OnlyFooter />
        </>
    );
}

export default index;