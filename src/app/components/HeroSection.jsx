"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function() {
  return (
    <section className="md:pt-12 pb-6 xl:pt-24 xl:pb-32 2xl:pt-40 2xl:pb-48">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl xl:text-7xl 2xl:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ikbal Čaušević",
                5000,
                "Web Developer",
                5000,
                "Mobile Developer",
                5000
              ]}
              wrapper="span"
              className="[text-shadow:_0_0_2px_rgb(255_255_255_/_0.8)]"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Student at Faculty of Information Technologies | University "Džemal Bijedić" in Mostar
          </p>
          <div>
            <Link
              href="/#about"
              className="px-7 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:shadow-[0px_0px_20px_2px_rgba(191,_81,_219,_0.3)] text-white font-semibold"
            >
              More About Me
            </Link>
            <a
              href="Ikbal Čaušević - CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white mt-3 scale-y-105 glowing-button-parent"
              download
            >
              <span className="block bg-[#121212] rounded-full px-6 py-2 glowing-button">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center md:mt-4 lg:mt-0"
        >
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            className="relative scale-75 md:scale-100 xl:scale-90 2xl:scale-100 2xl:mb-2"
            style={{
              borderRadius: "10px 40px 0px 20px"
            }}
            width={410}
            height={410}
          />
        </motion.div>
      </div>
    </section>
  );
};
