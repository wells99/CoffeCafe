import Slider from "react-slick"


const testimonialData = [
    {
        id: 1,
        name: "Fernanda",
        text: " Amei a vibe da cafeteria! Super aconchegante e com aquele jeitinho de fazenda que eu adoro. O café é delicioso e o espaço ao ar livre me ganhou. Já quero voltar!",
        img: "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
    },
    {
        id: 2,
        name: "Josue",
        text: "Lugar incrível! Ambiente tranquilo, ótimo pra relaxar e ainda pude levar meu cachorro comigo. Adoro espaços pet friendly assim. O atendimento foi ótimo e o café, sensacional!",
        img: "https://picsum.photos/id/237/200/300"
    },
    {
        id: 3,
        name: "Renato",
        text: "Curti demais a cafeteria! Me lembrou os cafés que visitei nas viagens pelo sul. Clima agradável, vista bonita e aquele cheirinho bom de café fresco. Perfeito pra um papo descontraído com os amigos. Com certeza vou voltar!",
        img: "https://fastly.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY"
    },

]



const Testimonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]

    }
    return (
        <div className="py-14 mb-10">
            <div className="container">

                <div data-aos="fade-up" className="text-center mb-10">
                    <h1 className="text-4xl font-bold !font-cursive text-gray-800">
                        Avaliações
                    </h1>
                </div>
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            testimonialData.map((data, indexd) => {
                                return (
                                    <div className="my-6" key={data.id}>
                                        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                                            <div className="mb-4 flex">
                                                <img
                                                    src={data.img}
                                                    alt={data.name}
                                                    className="rounded-full w-20 h-20 object-cover " />
                                                     <p className="text-black/20 text-9xl !font-serif absolute top-0 left-40 sm:left-30 md:left-50 lg:left-70 w-full">
                                                    ,,
                                                </p>
                                            </div>


                                            <div className="flex flex-col items-center gap-4">
                                                <div className="space-y-3">
                                                    <p className="text-xs text-gray-500">
                                                        {data.text}
                                                    </p>
                                                    <h1 className="text-xl font-bold text-black/60 !font-cursive">
                                                        {data.name}
                                                    </h1>
                                                </div>
                                               
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial