
import abstractImage from "../../assets/bg_abstract.png";
const Explore = () => {
    return (<>
<div className="relative  h-[30vh] w-[100%]">
        <img
          className="absolute inset-0 h-[100%] w-[100%] object-cover"
          src={abstractImage}
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 text-center">
          <h1 className="text-white text-2xl font-bold pt-5">EXPLORE MORE</h1>
          <i class="text-3xl text-white fa-solid fa-caret-down"></i>
        </div>
      </div>


    </>  );
}
 
export default Explore;