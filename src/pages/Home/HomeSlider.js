import React from "react";
import featureMobileImg from "../../images/slider/nokia_110_feature-removebg-preview.png";
import featureAndroidImg from "../../images/slider/sony_xperia_1_IV-removebg-preview.png";
import featureAppleImg from "../../images/slider/Apple-iPhone-13-Mini-image-removebg-preview.png";

const HomeSlider = () => {
  return (
    <section className="carousel w-full rounded-3xl mt-5">
      <div
        id="slide1"
        className="carousel-item items-center bg-info relative w-full"
      >
        <div>
          <img src={featureMobileImg} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold hidden md:block">Short in budget?</h1>
          <p className="text-xl my-4">
            Looking for a compact Phone as secondary device?
          </p>
          <button className="btn btn-outline hidden md:block">Learn More</button>
        </div>
        <div className="absolute flex right-5 bottom-5 gap-2">
          <a href="#slide3" className="btn btn-circle btn-outline">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-outline">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item items-center bg-info relative w-full"
      >
        <div>
          <img src={featureAndroidImg} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold hidden md:block">Short in budget?</h1>
          <p className="text-xl my-4">
            Looking for a Android Phone device?
          </p>
          <button className="btn btn-outline hidden md:block">Learn More</button>
        </div>
        <div className="absolute flex right-5 bottom-5 gap-2">
          <a href="#slide1" className="btn btn-circle btn-outline">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-outline">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item items-center bg-info relative w-full">
      <div>
          <img src={featureAppleImg} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold hidden md:block">Short in budget?</h1>
          <p className="text-xl my-4">
            Looking for a Used Apple Phone?
          </p>
          <button className="btn btn-outline hidden md:block">Learn More</button>
        </div>
        <div className="absolute flex right-5 bottom-5 gap-2">
          <a href="#slide2" className="btn btn-circle btn-outline">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-outline">
            ❯
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
