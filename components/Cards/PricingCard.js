const PricingCard = ({ mid, name, plans }) => {
    return (
        <div className={`w-[380px] relative h-[690px] ${mid ? 'bg-neutral mx-2' : 'bg-black'}  shadow-sm shadow-gray-900 rounded-lg`}>
            {mid ? (
                <div className="bg-red-500 flex flex-col justify-center w-full h-[240px] mt-[-40px]">
                    <h3 className="text-center pt-4 text-[28px] poppins font-bold">{name}</h3>
                    <h1 className="flex items-start justify-center mt-4">
                        <span className="text-2xl">$</span>
                        <span className="text-7xl px-2 font-bold mulish">777</span>
                        <span className="text-2xl">.99</span>
                    </h1>
                    <h5 className="text-center mt-3 text-xl">Per Month</h5>
                </div>
            )
                :
                (
                    <div className=" w-full h-[200px] pt-5">
                        <h3 className="text-center pt-4 text-[28px] poppins font-bold">{name}</h3>
                        <h1 className="flex items-start mulish justify-center mt-4">
                            <span className="text-2xl">$</span>
                            <span className="text-7xl px-2 font-bold ">777</span>
                            <span className="text-2xl">.99</span>
                        </h1>
                        <h5 className="text-center mt-3 text-xl ">Per Month</h5>
                    </div>
                )
            }

            <ul className="text-center mt-16">
                {
                    plans.map(p => (
                        <li key={p} className="text-xl mb-5 text-gray-200"> {p}</li>
                    ))
                }
            </ul>

            <button type="submit" className="btn mx-auto block mt-20 btn-outline outline-primary border-primary  text-white btn-md rounded-full px-7">Send Message</button>
        </div>
    );
}

export default PricingCard;