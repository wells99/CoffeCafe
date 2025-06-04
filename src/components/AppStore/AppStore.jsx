import appStoreImg from "../../assets/app_store.png"
import playStoreImg from "../../assets/play_store.png"
import bgPng from "../../assets/coffee-beans.png"
import { BsWhatsapp } from "react-icons/bs";

const AppStore = () => {

    const backgroundStyle = {
           backgroundImage: `url(${bgPng})`,
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
           height: "100%",
           width: "100%",
    }
    return (
   <>
    <div style={backgroundStyle} className="py-14">
        <div className="container" data-aos="fade-up">
            <div className="space-y-6 max-w-xl px-auto ">
            <div
             
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 items-center gap-4">
                <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-neutral-400 !font-cursive">Seu <span className="!font-cursive text-amber-700 border-secondary">café</span> já está <span className="!font-cursive text-neutral-200">pronto</span> </h1>
            </div>

            <div className="flex flex-wrape justify-center sm:justify-start items-center ">
                <button className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] lg:w-[300px] 
                bg-green-500 rounded-xl px-2 py-4 flex gap-2 items-center justify-center 
                hover:cursor-pointer hover:bg-green-500/90">
                    <BsWhatsapp />
                    <a href="#" className="min-w-20 w-1/2 text-nowrap text-base">Pedir agora</a>
                </button>

            </div>
            </div>
        </div>
    </div>
   </>
)
};

export default AppStore;