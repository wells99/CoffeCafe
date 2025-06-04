import { FaCoffee } from "react-icons/fa"
import Logo from "../../assets/logo.png"
const Navbar = () => {

    const menus = [
        {
            id: 1,
            name: "Inicio",
            link: "/#"
        },
        {
            id: 2,
            name: "Serviços",
            link: "/#services"
        },
        {
            id: 3,
            name: "Sobre",
            link: "/#about"
        },
    ]
    return (
        <div className="bg-gradient-to-r w-full from-secondary to-primary/90 text-white">
            <div className="container py-2">
                <div className="flex justify-between items-center gap-4">
                    <div data-aos="fade-down" data-aos-once="true">
                        <a href="#" className="font-bold text-2xl sm:text-3xl 
                        flex justify-center items-center gap-2
                         tracking-wider !font-cursive">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-14" />
                            Orvalho Café</a>
                    </div>

                    <div 
                    data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-delay="300"
                    className="flex justify-between items-center gap-4">
                        <ul className="hidden sm:flex items-center gap-4">
                            {menus.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} 
                                    className="inline-block text-xl 
                                    py-4 px-4 text-white/70 hover:text-white duration-200">
                                        {data.name}
                                    </a>

                                </li>
                            ))}
                        </ul>
                        <button className="bg-primary/70 px-4 py-2 rounded-full 
                        hover:scale-105 duration-200 cursor-pointer 
                        flex items-center gap-3">
                            Pedir
                            <FaCoffee  className="text-xl"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar