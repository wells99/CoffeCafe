import img2 from "../../assets/coffee2.png"
const Services = () => {
    const serviceData = [
        {id:1,
            img:img2,
            name:"Expresso",
            description:"um cuidado artesanal: grãos frescos, moídos na hora, transformam-se em pó finíssimo. Compactado com precisão, ele encontra a água quente sob alta pressão, que, em segundos, extrai a alma do café. O resultado é um néctar concentrado, de sabor intenso e uma crema aveludada, essência pura em cada gota.",
            aosDelay:"100"
        },
        {id:2,
            img:img2,
            name:"Americano",
            description:"a essência do espresso com a leveza da água quente. Cuidadosamente preparado, o café concentrado recebe a água na temperatura ideal, em um fluxo suave que realça seus sabores. É uma bebida pura e convidativa, onde a força do café encontra a delicadeza da diluição, entregando uma experiência saborosa e equilibrada.",
            aosDelay:"300"
        },
        {id:3,
            img:img2,
            name:"Cappucino",
            description:"Um cappuccino é a fusão de um espresso intenso com a suavidade do leite vaporizado, coroado por uma espuma aveludada. Com precisão, o café, rico e aromático, recebe o leite transformado em seda líquida, criando camadas que dançam harmoniosamente. O resultado é uma bebida que conforta, unindo força e delicadeza em cada gole.",
            aosDelay:"500"
        },
    ]
    return (
        <>
        <span id="services"></span>
        <div className="py-10">
            <div className="container overflow-hidden">
                <div data-aos="fade-up" className="text-center mb-20 ">
                    <h1 className="text-4xl font-bold !font-cursive text-gray-800">
                       Campeões de vendas
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
                            shadow-xl  duration-200 max-w-[300px] group relative cursor-pointer">
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