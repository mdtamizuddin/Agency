import PricingCard from "./Cards/PricingCard";

const Pricing = () => {
    return (
        <div className="py-10 flex lg:flex-row flex-col items-center justify-center">
            <PricingCard name={'Basic'} plans={prices.price1} />
            <PricingCard mid={true} name={'Corporate'} plans={prices.price2} />
            <PricingCard name={'Business'} plans={prices.price3} />
        </div>
    );
}

export default Pricing;

const prices = {
    price1: [
        " Customized Store Design",
        " jQuery Rotating Banner",
        " Interactive Menu",
        " Inquiry Form",
        "Responsive Design"
    ],
    price2: [
        "Basic plan",
        " Design prototyping",
        " Mobile Menu",
        " Competitor analysis",
        "Offer Pop-Up Windows"
    ],
    price3: [
        "Corporatre plan",
        "Subscription Pages",
        "Unlimited Web Space",
        "FREE Site Building Tools",
        "24/7 Support"
    ]
}