"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {"Hello, I'm"}
              {""}
              {/* 작은따옴표로 에러 발생해서 {""} 사이에 문자열 입력 */}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Ujeong Jang", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {"As a passionate Software Developer, I blend deep technical expertise with a keen eye for design to create impactful web solutions."}
          </p>
          <div>
            <a href="https://open.kakao.com/o/s72Dtwqg" target="_blank">
              <button className="px-6 py-2.5 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Kakao Talk
              </button>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-2">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[400px] h-[300px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/images/mac_xia_blur2.png"
              alt="Mac Xia"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={250}
              className="blur-edge"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
