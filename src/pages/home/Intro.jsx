import one from "../../assets/1.png";
import two from "../../assets/2.png";

const Intro = () => {
  return (
    <>
      {/* First part image section: 86vh */}
      <section className="relative h-[86vh] w-[100%]`">
        <div className=" h-[100%] w-[100%]">
          <img
            className="absolute inset-0 h-[100%] w-[100%] object-cover "
            src={one}
            alt="Image Here"
          />
          <div className="absolute inset-0 h-[100%] w-[100%] object-cover bg-gradient-to-br from-transparent to-[#000000be] " />
          <div className="absolute right-[2%] bottom-[10%]">
            <h1 className="text-5xl font-bold text-white text-end">
              STEP OUT AND
              <br /> MAKE A DIFFERENCE
            </h1>

            <p className="text-[#ffffffba] font-extralight">{description}</p>
          </div>
        </div>
      </section>

      {/* Second part image section: 100vh */}

      <section className="relative h-[100vh] w-[100%]">
        <div className="absolute h-[100%] w-[100%] bg-cyan-900">
          <img
            className="absolute inset-0 h-[100%] w-[100%] object-cover "
            src={two}
            alt="Image Here"
          />
          {/* <div className="absolute inset-0 h-[100%] w-[100%] object-cover bg-gradient-to-tl from-transparent to-[#000000be] " /> */}
          <div className="absolute left-10 top-10">
            <h1 className="w-1/3 text-5xl font-bold text-accentColor text-start ">
              Once you know what failure feels like, determination chases
              success.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
const description =
  "“Age is no barrier. It’s a limitation you put on your mind.” —Jackie Joyner-Kersee";
