/**
 * @Copyright 2024 Znonymous
 * @license Apache 2-0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box h-9 w-9 rounded-lg">
              <img
                src="./images/avatar-1.jpg"
                alt="ZF"
                width={40}
                height={40}
                className="img-cover"
              ></img>
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Empowering Innovation with AI
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary 
              href="https://drive.google.com/file/d/11eyQPir0NVAEX9Y9Np84kx3Ctwutk3PU/view?usp=sharing"
              label="Download CV" 
              icon="download" />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-r from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="./images/hero-banner.png"
              alt="Zhafron Firdaus"
              width={650}
              height={800}
              className="w-full"
            ></img>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
