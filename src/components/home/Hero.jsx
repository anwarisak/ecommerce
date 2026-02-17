import heroimage from "../../assets/hero.png";
import logo from "../../assets/react.svg";
import { Star, Heart, ChessQueen } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full max-w-5xl mx-auto items-center overflow-x-hidden">
      <div className="md:flex items-center justify-center bg-white-100 p-8 ">
        <div className="">
          <h1 className="text-5xl w-100 font-bold uppercase ">
            Use Fashion Into Your All Colection
          </h1>
          <h4 className="text-2xl font-thin mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            asperiores!
          </h4>
          <button
            className="h-14 w-50 mt-8 bg-black uppercase text-white rounded-full cursor-pointer"
            type="button"
          >
            Shop now
          </button>
        </div>
        <div className="mx-4">
          <img
            className="w-600 h-100 object-cover"
            src={heroimage}
            alt="hero"
          />
        </div>

        <div className="">
          <div className="flex justify-center items-center w-full h-18 md:w-50 rounded-lg shadow-lg gap-0 my-8">
            <Star />
            <p className="text-2xl mx-4 font-light uppercase">Favourite</p>
          </div>
          <div className="flex justify-center items-center w-full h-18 md:w-50  rounded-lg shadow-lg gap-0 my-8">
            <Heart />
            <p className="text-2xl mx-4 font-light uppercase">Popular</p>
          </div>

          <div className="flex flex-col text-center justify-center items-center w-full h-25 md:w-50 md:h-28 rounded-lg shadow-lg">
            <ChessQueen />
            <h5 className="text-lg mx-4 my-2 font-light uppercase">
              LifeStyle
            </h5>
            <p className="text-sm mx-4">our brand follow the proccess</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
