import heroimage from "../../assets/hero.png";
import logo from "../../assets/react.svg";
import { Star, Heart, ChessQueen } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full max-w-5xl mx-auto overflow-x-hidden">
      <div className="md:flex items-center justify-center bg-white p-8">
        <div>
          <h1 className="text-5xl max-w-md font-bold uppercase">
            Use Fashion Into Your All Collection
          </h1>

          <h4 className="text-2xl font-thin mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>

          <button className="h-14 px-8 mt-8 bg-black uppercase text-white rounded-full">
            Shop now
          </button>
        </div>

        <div className="mx-4">
          <img
            className="max-w-full h-auto object-cover"
            src={heroimage}
            alt="hero"
          />
        </div>

        <div>
          <div className="flex items-center w-full md:w-48 h-16 rounded-lg shadow-lg my-8">
            <Star />
            <p className="text-2xl mx-4 font-light uppercase">Favourite</p>
          </div>

          <div className="flex items-center w-full md:w-48 h-16 rounded-lg shadow-lg my-8">
            <Heart />
            <p className="text-2xl mx-4 font-light uppercase">Popular</p>
          </div>

          <div className="flex flex-col items-center text-center w-full md:w-48 h-24 rounded-lg shadow-lg">
            <ChessQueen />
            <h5 className="text-lg my-2 font-light uppercase">Lifestyle</h5>
            <p className="text-sm">Our brand follows the process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
