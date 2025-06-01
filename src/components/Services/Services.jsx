import img2 from "../../assets/coffee2.png"
const Services = () => {
    const serviceData = [
        {id:1,
            img:img2,
            name:"Expresso",
            description:"lorem ipsum dolor site amet lorem ipsum dolor site amet lorem ipsum dolor site amet",
            aosDelay:"100"
        },
        {id:2,
            img:img2,
            name:"Americano",
            description:"lorem ipsum dolor site amet lorem ipsum dolor site amet lorem ipsum dolor site amet",
            aosDelay:"300"
        },
        {id:3,
            img:img2,
            name:"Cappucino",
            description:"lorem ipsum dolor site m ipsum dol m ipsum m ipsum dol m ipsum dol amet lorem ipsum dolor s dol amet lorem ipsum dolor site amet lorem ipsum dolor site amet",
            aosDelay:"500"
        },
    ]
    return (
        <>
        <span id="services"></span>
        <div className="py-10">
            <div className="container overflow-hidden">
                <div className="text-center mb-20 ">
                    <h1 className="text-4xl font-bold !font-cursive text-gray-800">
                        Best Coffe For You
                    </h1>
                </div>

                {/* Services card section */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
                    {serviceData.map((data,index) => {
                        return (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={index} 
                            className=" rounded-2xl bg-white hover:bg-primary hover:text-white 
                            shadow-xl  duration-200 max-w-[300px] group relative ">
                                {/* imagem */}
                                <div className="h-[122px] ">
                                    <img 
                                    src={data.img} 
                                    alt={data.name}
                                    className="max-w-[200px] rounded-2xl block mx-auto 
                                    transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300" />
                                </div>
                                {/* texto */}
                                <div className="p-4 text-center">
                                    <h1 className="text-xl font-bold">{data.name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2"
                                    >{data.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </div>
        </>
    )
}

export default Services