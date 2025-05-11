import { useGSAP } from "@gsap/react";
import React, { use, useState } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  let [show, setShow] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 70,
      duration: 2,
      ease: "power2.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      y: 100,
      duration: 2,
      delay: -1.9,
      ease: "power2.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.99) {
          document.querySelector(".svgs").remove();
          setShow(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!show) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: -1,
      ease: "power2.inOut",
    });
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.2,
      duration: 2,
      delay: -1,
      ease: "power2.inOut",
    });
    gsap.to(".bg",{
      rotate:0,
      scale:1.2,
      duration:2,
      delay: -0.8,
      ease: "power2.inOut",
    })
    gsap.to(".girl",{
      rotate:0,
      scale:0.75,
      transformOrigin: "50%",
      x:"-50%",
      duration:2,
      delay: -0.8,
      ease: "power2.inOut",
    })

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xmove = (e.clientX / window.innerWidth - 0.5) * 40;
      const ymove = (e.clientY / window.innerWidth - 0.5) * 40;
      console.log(xmove);
      gsap.to(".imgdiv .textdiv", {
        x: `${xmove * 0.4}%`,
        y: `${ymove * 0.4}%`,
      });
      gsap.to(".imgdiv .sky", {
        x: xmove * 0.4,
        y: ymove * 0.4,
      });
      gsap.to(".imgdiv .bg", {
        x: xmove * 0.8,
        y: ymove * 0.8,
      });
    });
  }, [show]);

  return (
    <>
      <div className="svgs flex items-center justify-center fixed top-0 left-0 z-20 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMinYMin slice">
          <defs>
            <mask id="mask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#mask)"
          />
        </svg>
      </div>
      {show && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black ">
            <div className="navbar absolute top-0 left-0 w-full px-10 py-6 z-10">
              <div className="logo flex gap-8 ">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-12 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                </div>
                <div className="text-4xl -mt-3 leading-none">ROCKSTAR</div>
              </div>
            </div>
            <div className="imgdiv relative w-full overflow-hidden h-screen">
              <img
                className="sky scale-[1.5] rotate-[-10deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="textdiv absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-8">
                <h1 className="text-[8rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[8rem] leading-none ml-20">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute girl z-9 left-1/2 -translate-x-1/2 translate-y-[10vh] scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
              <img
                className="absolute left-1/2 -translate-x-1/6 bottom-0 scale-[0.2] z-100"
                src="./logo18.png"
                alt=""
              />
            </div>
            <div className="btmbar absolute overflow-hidden bottom-0 left-0 py-6 px-7 z-10 w-full bg-gradient-to-t from-black to-transparent ">
              <div className="flex gap-4">
                <i className=" ri-arrow-down-fill"></i>
                <h3 className="font-[Arial]">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.4] "
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="content w-full h-screen bg-black flex justify-center items-center">
            <div className="contbox flex w-full h-[80%]">
              <div className="lbox relative w-1/2 h-full ">
                <img
                  className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rbox py-25 w-[35%] ">
                <h1 className="text-5xl">Still Running</h1>
                <p className="font-[Monospace] mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quos, cumque unde esse consectetur autem a temporibus
                  aliquam earum omnis veritatis distinctio asperiores vero
                  deserunt!
                </p>
                <p className="font-[Monospace] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis cupiditate incidunt at cumque earum nihil!
                </p>
                <p className="font-[Monospace] mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis cupiditate incidunt at cumque earum nihil Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Corporis
                  cupiditate incidunt at cumque earum nihil!!
                </p>
                <button className="bg-amber-600 px-10 py-5 mt-10">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
