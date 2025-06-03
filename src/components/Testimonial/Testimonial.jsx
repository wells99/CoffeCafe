import Slider from "react-slick"


const testimonialData = [
    {
        id: 1,
        name: "Fernanda",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit aliquid ut provident ipsam commodi consequuntur molestiae molestias eligendi blanditiis reiciendis culpa laudantium ipsum optio debitis, modi animi tenetur repellat!",
        img: "https://picsum.photos/id/237/200/300"
    },
    {
        id: 2,
        name: "Josue",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit aliquid ut provident ipsam commodi consequuntur molestiae molestias eligendi blanditiis reiciendis culpa laudantium ipsum optio debitis, modi animi tenetur repellat!",
        img: "https://picsum.photos/id/237/200/300"
    },
    {
        id: 3,
        name: "Renato",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit aliquid ut provident ipsam commodi consequuntur molestiae molestias eligendi blanditiis reiciendis culpa laudantium ipsum optio debitis, modi animi tenetur repellat!",
        img: "https://picsum.photos/id/237/200/300"
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
                        Testimonials
                    </h1>
                </div>
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            testimonialData.map((data, indexd) => {
                                return (
                                    <div className="my-6" key={data.id}>
                                        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                                            <div className="mb-4">
                                                <img
                                                    src={data.img}
                                                    alt={data.name}
                                                    className="rounded-full w-20 h-20" />
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