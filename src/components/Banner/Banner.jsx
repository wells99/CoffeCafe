import bgimage from "../../assets/coffee-texture.jpg";
import bgimage2 from "../../assets/coffee2.png";
import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

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
              Premium Blend Coffee
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wider leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque,
              esse molestiae eveniet suscipit atque cum delectus saepe iusto
              expedita officia dolorum sunt modi harum! Consectetur nobis non
              architecto debitis.
            </p>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div
                    data-aos="fade-up"
                    className="flex items-center gap-3">
                    <GrSecure
                      className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span>Premium Coffe</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3">
                    <IoFastFood
                      className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span>Hot Coffe</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-offset="0"
                    className="flex items-center gap-3">
                    <GrSecure
                      className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span>Cold Coffe</span>
                  </div>
                </div>
                <div 
                    data-aos="slide-left"
                 
                className="border-l-4 border-primary/50 pl-6 space-y-3">
                  <h1 className="text-2xl font-semibold !font-cursive">Tea Lover</h1>
                  <p className="text-gray-500 text-sm">
                    {""}
                    Much like writing code, brewing the perfect cup of tea
                    requires patience, precision, and a dash
                    of passion to create a conforting blend of flavors.
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
