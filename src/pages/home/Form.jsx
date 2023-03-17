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

        <div className="h-[15vh] text-darkColor flex flex-row justify-evenly items-end p-5">
          <div className="text-start w-1/4 ">
            <label htmlFor="input">Email</label>
            <input
              type="text"
              placeholder="Your email address"
              className=" w-[100%] h-[6vh] mt-2 border-2 outline-none hidden lg:block border-white focus:border-darkColor focus:rounded-lg focus:outline-none px-2 transition-all "
            ></input>
          </div>
          <div className="text-start w-1/4 ">
            <label htmlFor="input">I'm interested in</label>
            <input
              type="text"
              placeholder="Men"
              className=" w-[100%]  h-[6vh] mt-2 border-2 outline-none hidden lg:block border-white focus:border-darkColor focus:rounded-lg focus:outline-none px-2 transition-all "
            ></input>
          </div>
          <button className="bg-darkColor text-white font-semibold text-lg px-8 h-[6vh]">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
