import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import footerBG from "../../assets/coffee-footer.jpg"
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

const bgImage = {
    backgroundImage: `url(${footerBG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
}
const Footer = () => {
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
                        <div className="py-8 px-4">
                            <div className="text-xl font-semibold sm:text-left mb-3">
                                <h1>Footer Links</h1>
                                <ul>
                                    {
                                        footerLinks.map((data,index) => {
                                            <li key={index} className="space-y-3">
                                                <a href={data.link} className="inline-block hover:scale-105 dration-200">
                                                    {data.tittle}
                                                </a>
                                            </li>
                                        })}
                                </ul>
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