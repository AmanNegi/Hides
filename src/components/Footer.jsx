const Footer = () => {
  return (
    <>
      <footer className="bg-accentColor text-white pt-16 px-8 text-center ">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FooterItem name="Shipping" />
          <FooterItem name="Payment " />
          <FooterItem name="Returns" />
          <FooterItem name="Terms " />
          <FooterItem name="Store " />
          <FooterItem name="About " />
          <FooterItem name="Careers" />
          <FooterItem name="Corporate " />
          <FooterItem name="Phone" />
        </div>
        <div className="flex flex-row items-center justify-center py-12 text-white opacity-60">
          <i className="fa-regular fa-copyright pr-2"></i>
          <h1>2023 Hides Inc, All rights reserved</h1>
        </div>
      </footer>
    </>
  );
};

function FooterItem({ name, goto = "#", colSpan = 1 }) {
  const span = "row-span-" + colSpan;
  return (
    <a
      className={"hover:text-darkColor hover:font-bold text-center " + span}
      href={goto}
    >
      {name}
    </a>
  );
}

export default Footer;
