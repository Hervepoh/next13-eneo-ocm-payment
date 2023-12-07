import Image from "next/image";
import React from "react";
import Search from "./Search";
// import category from "@/data/category";

function Hero({ userInput }: any) {
    return (
        <div className="text-center">
            <div>
                <Image
                    src="/bg-pay-2.png"
                    priority={false}
                    alt="hero-image"
                    width={500}
                    height={150}
                    className="w-full opacity-20 absolute mt-[-50px] z-10"
                />
                <div className="mt-[70px] z-20">
                    <h2 className="text-[55px] text-red-600 tracking-widest font-semibold  z-20">
                        POSTPAID
                    </h2>
                    <h2 className="text-[20px]  z-20">ENEO-OCM POSTPAID PAYMENTS 2022-2023</h2>
                </div>
                <Search userInput={userInput} />
                
                {/* <div className="mt-5 flex flex-col justify-center  items-center">
                    <h2>Or Browse the region</h2>
                    <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3">
                        {
                            category.map(
                                (item, index) => (
                                    <div key={index} className='border-[1px]  w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-600 shadow-lg hover:scale-110  cursor-pointer transition-all'>
                                        <Image src={item.icon} alt={item.name} width={30} height={30} />
                                    </div>
                                )
                            )
                        }
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Hero;
