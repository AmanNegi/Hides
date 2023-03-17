function NavBar() {
  return (
    <>
      <section className=" h-[8vh] w-[100%] bg-white shadow-sm flex flex-row justify-evenly items-center px-2">
        <TopBarLink name="Men" />
        <TopBarLink name="Women" />
        <TopBarLink name="Casuals" />
        <TopBarLink name="Basketball" />
        <TopBarLink name="New Arrival" />
      </section>
    </>
  );
}

function TopBarLink({ name, goTo }) {
  return (
    <a href="#" className="hover:text-accentColor text-[#00000084] p-4 font-bold">
      {name.toUpperCase()}
    </a>
  );
}

export default NavBar;
