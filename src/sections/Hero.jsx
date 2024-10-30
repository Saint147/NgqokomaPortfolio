import ScrollAnimation from "react-animate-on-scroll";
import ProfilePicture from "./components/ProfilePicture";
import styles, { layout } from "../styles";
import Button from "./components/Button";

const Hero = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col text-slate-500`}>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" initiallyVisible={true}>
          <p className="text-[1.5rem] animate__animated animate__bounce">Hello Everyone, my name is</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" initiallyVisible={true}>
          <h1 className="font-montserrat font-bold lg:text-[5rem] text-[3.5rem] lg:leading-[5rem] leading-[3.5rem] text-left tracking-tight text-slate-600">
           Ngqokoma
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" initiallyVisible={true}>
          <h1 className="font-montserrat font-bold lg:text-[5rem] text-[3.5rem] lg:leading-[5rem] leading-[3.5rem] tracking-tight text-left">
            Someleze
          </h1>
        </ScrollAnimation>
        {/* <h1 className="font-montserrat font-bold md:text-[2.5rem] text-[2rem] md:leading-[2.6rem] leading-[2rem] text-left tracking-tight text-gradient">
            Web Developer & Designer
        </h1> */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" initiallyVisible={true}>
          <p className="text-left my-3 max-w-[500px] text-slate-400">
            I am a passionate{" "}
            <span className="text-gradient font-bold">Full Stack Developer, QA Engineer and an Analyst</span>{" "}
            dedicated to transforming creative visions and innovations into pixel-perfect
            realities.I believe that only a chance could prove my incopetencies.
           
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" initiallyVisible={true}>
          <div className="flex gap-2 flex-col lg:flex-row my-4">
            <Button
              text="Contact Me"
              link="mailto:somelezengqokoma9@gmail.com"
            />
            <Button
              text="Download CV"
              link="https://drive.google.com"
            />
          </div>
        </ScrollAnimation>
      </div>
      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10`}>
      <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" initiallyVisible={true}>
        <ProfilePicture />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;


