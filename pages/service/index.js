import Head from "next/head";
import Link from "next/link";
import uiUx from '../../Accets/Image/icons/ui-ux.png'
import app from '../../Accets/Image/icons/app.png'
import web from '../../Accets/Image/icons/web.png'
import seo from '../../Accets/Image/icons/seo.png'
import marketing from '../../Accets/Image/icons/marketing.png'
import eCommarce from '../../Accets/Image/icons/e-commarce.png'
import Footer from '../../components/Footer'
import ServiceCard from '../../components/Cards/ServiceCard'
import Brands from "../../components/Brands";
import Video from "../../components/Video";
import Pricing from "../../components/Pricing";
const index = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <Head>
                    <title>Agency MT Service page</title>
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
                                <Link href={'/service'}>
                                    <a >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Service
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="mt-20">
                    <h3 className="flex  items-center  text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        Services
                    </h3>
                    <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-4 font-bold">
                        We offer the best services
                    </h1>
                    <p className="text-sm text-accent mt-2">We always try to implement our creative ideas at the highest level. You can see it by looking at our portfolio.</p>

                </div>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
                    <ServiceCard icon={web} name1={'Web'} name2={'Development'} />
                    <ServiceCard icon={uiUx} name1={'UI/UX And'} name2={' Brand Indentity'} />
                    <ServiceCard icon={app} name1={'App'} name2={'Development'} />
                    <ServiceCard icon={seo} name1={'SEO & SMM'} name2={'Optimization'} />
                    <ServiceCard icon={marketing} name1={'Marketing Strategy'} name2={'Optimization'} />
                    <ServiceCard icon={eCommarce} name1={'E-Commarce Development'} name2={'Optimization'} />
                </section>
                <Brands />
                <Video />
                <div className="lg:mt-32 mt-10">
                    <Pricing />
                </div>

            </div>

            <Footer />
        </>
    );
}

export default index;