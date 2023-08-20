import React from "react";

const Cards = () => {
    return ( 
        /* we would have oe parent div and three siblings div */
        <div className="grid lg:grid-cols-6 gap-4 p-4">
            <div className="
                    lg:col-span-2
                    col-span-1
                    bg-white
                    flex
                    justify-center
                    w-full
                    border 
                    p-4
                    rounded-lg
                "
            >
                <div className="flex flex-col pb-4 w-full">
                    <p className="text-2xl font-bold">$7,846</p>
                    <p className="text-gray-500">Daily Revenue</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg">+18%</span>
                </p>
            </div>
            <div className="
                    lg:col-span-2
                    col-span-1
                    bg-white
                    flex
                    justify-center
                    w-full
                    border 
                    p-4
                    rounded-lg
                "
            >
                <div className="flex flex-col pb-4 w-full">
                    <p className="text-2xl font-bold">$1,437876</p>
                    <p className="text-gray-500">YTD Revenue</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg">+22%</span>
                </p>
            </div>
            <div className="
                    lg:col-span-2
                    col-span-1
                    bg-white
                    flex
                    justify-center
                    w-full
                    border 
                    p-4
                    rounded-lg
                "
            >
                <div className="flex flex-col pb-4 w-full">
                    <p className="text-2xl font-bold">$11,437</p>
                    <p className="text-gray-500">Customers</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg">+16%</span>
                </p>
            </div>
        </div>
     );
}
 
export default Cards;