import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import cover1 from "../../assets/cover1.webp";
import cover2 from "../../assets/cover.webp";

const Hero = () => {
  return (
    <section className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {[cover1, cover2].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              <img
                src={img}
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl tracking-wide">
                  Women’s Collection
                </h1>

                <p className="mt-4 text-sm md:text-lg max-w-xl">
                  Statement dresses designed to highlight your strength,
                  elegance, and confidence{" "}
                </p>

                <button className="mt-6 px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition cursor-pointer">
                  Shop the Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
