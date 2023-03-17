import logo from "../assets/logo.svg";


function TopBar() {
  return (
    <>
      <section className="fixed top-0 z-[1] h-[8vh] w-[100%] bg-accentColor flex flex-row items-center px-2">
        <img src={logo} className="h-[6vh]" alt="Logo Here" />
        {/*  Search Bar */}
        <div className="flex flex-[2]"></div>
        <input
          type="text"
          placeholder="Search"
          className="h-[6vh] w-1/2 border-2 outline-none hidden lg:block border-white focus:border-darkColor focus:rounded-lg focus:outline-none px-2 transition-all "
        ></input>
        <div className="flex flex-1"></div>
        {/*  About and Profile */}
        <TopBarLink name="About" />
        <TopBarLink name="Profile" />
        {/*  Cart */}
        <i className="fas fa-shopping-cart text-2xl p-4 text-white opacity-60 hover:opacity-100"></i>
      </section>
    </>
  );
}

function TopBarLink({ name, goTo }) {
  return (
    <a href="#" className="text-white hover:opacity-100 opacity-60 p-4">
      {name}
    </a>
  );
}

export default TopBar;
