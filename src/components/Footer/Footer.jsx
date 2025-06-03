import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import footerBG from "../../assets/coffee-footer.jpg"


const bgImage = {
    backgroundImage: `url(${footerBG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
}
const Footer = () => {
    const footerLinks = [
    {
        tittle: "Home",
        link: "/#",
    },
    {
        tittle: "About",
        link: "/#about",
    },
    {
        tittle: "Contact",
        link: "/#contact",
    },
    {
        tittle: "Blog",
        link: "/#blog",
    },
]
    return (
        <div style={bgImage} className="text-white">
            <div className="bg-black/40 min-h-[400px]">
                <div className="container grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-8 px-4">
                        <a href="#"
                        className="font-semibold tracking-widest text-2xl sm:text-3xl !font-cursive">
                            {" "}
                            Coffe Cafe
                        </a>
                        <p className="pt-4">
                            {" "}
                            Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
                        </p>
                        <a 
                        href="https://youtube.com/" 
                        target="_blank"
                        className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
                        >
                            Visite nosso canal do Youtube
                        </a>
                    </div>


                    {/* footer links */}

                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                       {/* Primeira coluna */}
                        <div className="py-8 px-4">
                            <div className="text-xl sm:text-left mb-3">
                                <h1 className="font-semibold">Footer Links</h1>
                                <ul>
                                    {footerLinks.map((data,index) => (
                                            <li key={index} className="space-y-3">
                                                <a href={data.link} className="inline-block hover:scale-105 dration-200 hover:text-secondary ">
                                                    {data.tittle}
                                                </a>
                                            </li>
                                    ))}
                                </ul>
                            </div>

                            {/* endereços */}
                        </div>
                          {/* Segunda coluna footer */}
                        <div className="py-8 px-4">
                            <div className="text-xl  sm:text-left mb-3">
                                <h1 className="font-semibold">Quick Links</h1>
                                <ul>
                                    {footerLinks.map((data,index) => (
                                            <li key={index} className="space-y-3">
                                                <a href={data.link} className="inline-block hover:scale-105 dration-200 hover:text-secondary">
                                                    {data.tittle}
                                                </a>
                                            </li>
                                    ))}
                                </ul>
                            </div>

                            {/* endereços */}
                        </div>

                         {/* Emdereços */}
                          <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <div className="text-xl  sm:text-left mb-3">
                                <h1 className="font-semibold">Endereço</h1>
                               <div className="mb-3">
                                <p >Fortaleza-CE</p>
                                <p>(85) 91234.1234</p>
                                <div className="space-x-3 mt-6">
                                    <a href="#">
                                        <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                                    </a>
                                    <a href="#">
                                        <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                                    </a>
                                </div>
                               </div>
                            </div>

                            {/* endereços */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer