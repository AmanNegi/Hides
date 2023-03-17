const Form = () => {
  return (
    <>
      <section className="bg-lightColor text-center py-28 px-10">
        <h1 className="text-4xl font-extrabold text-darkColor">
          JOIN THE CREW!!
        </h1>
        <p className="text-darkColor font-extralight">
          {"Extra rs. 500 off on purchase of rs.2500 for all new email subscribers!".toUpperCase()}
        </p>
        <div className="h-[4vh]"></div>

        <div className="text-darkColor flex flex-col lg:flex-row justify-evenly items-center lg:items-end p-5 ">
          <div className="text-start w-[100%] lg:w-[30vw]">
            <label htmlFor="input">Email</label>
            <input
              type="text"
              placeholder="Your email address"
              className="bg-white w-[100%] h-[6vh] mt-2 border-2 outline-none border-white focus:border-darkColor focus:rounded-lg focus:outline-none px-2 transition-all "
            ></input>
          </div>
          <div className="w-0 h-[2vh] lg:w-[2vw] lg:h-0"></div>
          <div className="text-start w-[100%] lg:w-[30vw]">
            <label htmlFor="input" className="text-sm lg:text-base">
              I'm interested in
            </label>
            <input
              type="text"
              placeholder="Men"
              className="bg-white w-[100%] h-[6vh] mt-2 border-2 outline-none border-white focus:border-darkColor focus:rounded-lg focus:outline-none px-2 transition-all "
            ></input>
          </div>
          <div className="h-5"></div>
          <button className="bg-darkColor text-white font-semibold text-lg px-8 h-[6vh]">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
