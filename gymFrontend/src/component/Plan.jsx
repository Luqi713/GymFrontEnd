import React from 'react';

const cardClasses = 'w-64 md:w-80 h-96 bg-white dark:bg-black shadow-lg rounded-lg p-4 m-2';
const textClasses = 'text-zinc-600 dark:text-zinc-400';
const buttonClasses = 'bg-red-500 text-white p-2 rounded-lg';

const PricingCard = ({ title, features, price }) => {
    return (
        <div className={cardClasses}>
            <h2 className="text-lg font-bold text-black dark:text-white">{title}</h2>
            {features.map((feature, index) => (
                <p key={index} className={`${textClasses} my-2`}>{feature}</p>
            ))}
            <p className="text-2xl font-bold text-red-500 dark:text-red-400 my-4">{price}</p>
            <button className={buttonClasses}>Choose Plan</button>
        </div>
    );
};

const Pricing = () => {
    return (
        <>
        <center><h2 id='price' className="text-3xl text-red-500 font-bold mb-8">Prices & Plan</h2></center>
        <div className="flex flex-col md:flex-row justify-center items-center bg-zinc-100 dark:bg-zinc-800 p-4">
            <PricingCard
                title="Basic Plan"
                features={["Access to gym equipment", "Locker room access"]}
                price="$29.99/month"
            />
            <PricingCard
                title="Premium Plan"
                features={["Access to gym equipment", "Locker room access", "Group fitness classes"]}
                price="$49.99/month"
            />
            <PricingCard
                title="Ultimate Plan"
                features={["Access to gym equipment", "Locker room access", "Group fitness classes", "Personal trainer sessions"]}
                price="$79.99/month"
            />
        </div>
        </>
    );
};

export default Pricing;
