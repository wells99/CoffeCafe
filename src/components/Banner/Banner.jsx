import bgimage from "../../assets/coffee-texture.jpg";
import bgimage2 from "../../assets/coffee2.png";
import { MdWorkspacePremium } from "react-icons/md";
import { BsFillCupHotFill } from "react-icons/bs";
import { MdSevereCold } from "react-icons/md";




const Banner = () => {
  const bgImagep = {
    backgroundImage: `url(${bgimage})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    
    <>
    <span id="about"></span>
    <div style={bgImagep} className="overflow-hidden">
      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="zoom-in">
            <img
              src={bgimage2}
              alt="banner"
              className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold !font-cursive">
              Café Premium
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wider leading-5">
             Selecionamos carinhosamente nossos grãos, trazendo uma sensação única: deslumbrante aos olhos, um sabor inebriante ao paladar e um aroma que te envolve,  preparando cada xicara com amor e carinho o seu café quentinho.
            </p>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div
                    data-aos="fade-up"
                    className="flex items-center gap-3">
                    <MdWorkspacePremium
                      className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100 " />
                    <span>Premium Coffe</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3">
                    <BsFillCupHotFill
                      className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200 " />
                    <span>Hot Coffe</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-offset="0"
                    className="flex items-center gap-3">
                    <MdSevereCold
                      className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100 " />
                    <span>Cold Coffe</span>
                  </div>
                </div>
                <div 
                    data-aos="slide-left"
                 
                className="border-l-4 border-primary/50 pl-6 space-y-3">
                  <h1 className="text-2xl font-semibold !font-cursive">Aos amantes de Chá</h1>
                  <p className="text-gray-500 text-sm">
                    {""}
                   Nossos chás são escolhidos para oferecer um momento de sabor e tranquilidade, seja um chá preto encorpado para despertar ou uma infusão suave para relaxar.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
