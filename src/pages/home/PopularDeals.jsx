import { products } from "../../utils/data";

const PopularDeals = () => {
  return (
    <>
      <section className=" bg-lightColor p-10">
        <h1 className="text-4xl font-bold text-darkColor">Popular Deals</h1>
        <div className="container m-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5">
          {products.map((e, index) => {
            return <GridItem key={index} {...e} />;
          })}
        </div>
      </section>
    </>
  );
};

function GridItem({ name, image }) {
  return (
    <article>
      <div className="bg-accentColor p-2">
        <h1 className="text-xl font-bold text-white">{name.toUpperCase()}</h1>
      </div>
      {/* Image Section */}
      <div className="relative h-[50vh] bg-amber-200">
        <img
          className="absolute h-[100%] w-[100%] inset-0 object-contain bg-white"
          src={image}
          alt="image"
        />
        <div className="absolute right-0 bottom-0 w-[20%] bg-darkColor p-3 hover:bg-accentColor">
          <h1 className="text-white text-center text-lg font-bold">ADD</h1>
        </div>
      </div>

      <div className="bg-lightColor">
        <h1 className="text-darkColor font-black text-2xl p-2">$1999</h1>
      </div>
    </article>
  );
}

export default PopularDeals;
