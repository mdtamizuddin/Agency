import Logo from "./Logo";

const OnlyFooter = () => {
    return (
        <div>
             <footer className="container mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 grid py-8 border-t mt-20 gap-y-7">
                <div className='flex items-start flex-col'>
                    <Logo />
                    <p className='mt-3 text-accent'>Copyright © 2020 Crope.</p>
                </div>
                <div className='flex items-start flex-col'>
                    <h5 className='font-bold text-mini'>Working Houres</h5>
                    <p className='mt-3 text-accent'>
                        Mon - Fri: 9 am - 6 pm <br />
                        Sat, Sun: Holiday
                    </p>
                </div>
                <div className='flex items-start flex-col'>
                    <h5 className='font-bold text-mini'>Adress</h5>
                    <p className='mt-3 text-accent'>
                        27 Division St, New York, <br /> NY 10002, USA
                    </p>
                </div>
                <div className='flex items-start flex-col'>
                    <h5 className='font-bold text-mini'>Hit us up:</h5>
                    <p className='mt-3 text-accent'>
                        +1 845 631 78 49 <br />
                        info@sitename.com
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default OnlyFooter;