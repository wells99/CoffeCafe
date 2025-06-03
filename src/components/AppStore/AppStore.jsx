import appStoreImg from "../../assets/app_store.png"
import playStoreImg from "../../assets/play_store.png"
import bgPng from "../../assets/coffee-beans.png"
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
                <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 ">Coffe Cafe is avaliable for Android and IOS</h1>
            </div>

            <div className="flex flex-wrape justify-center sm:justify-start items-center ">
                <a href="#">
                    <img 
                    src={appStoreImg} 
                    alt="imagem" 
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                </a>
                <a href="#">
                    <img 
                    src={playStoreImg} 
                    alt="imagem" 
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                </a>
            </div>
            </div>
        </div>
    </div>
   </>
)
};

export default AppStore;