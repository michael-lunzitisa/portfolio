import React from "react";
import avatar from "../assets/avatar.png";
const About = () => {
  return (
    <div className=" bg-[#242532] py-11">
      <div className="flex justify-center max-w-5xl mx-auto">
        <div className="mt-32">
          <h2 className="text-titleColor text-[45px] font-bold border-titleColor border-b-2 ">
            About
          </h2>
        </div>
        <div className="max-w-2xl px-10 py-9 w-auto">
          <p className="text-white">
            I'am a Front-End Developper located in Kinshasa. I have a serious
            passion for UI, animations and creating intuitive, dynamic user
            experiences.Well-orgased person, problem solver, independent
            empmoyee with high attention to detail? Fan of soccer, outdoor
            activities, TV series.
            <br />
            <br />
            Adipiscing leo dictumst itaque. Urna bibendum, temporibus, ante
            deleniti fermentum mi impedit! Voluptas donec hendrerit! Natoque,
            ultrices voluptas quidem, risus corrupti nonummy congue dolores
            ipsam veniam suscipit. Temporibus? Consequatur cupiditate rhoncus
            taciti, voluptatem sapiente quae, eros! Architecto impedit nec
            sociosqu arcu fusce, ex minus accumsan recusandae tristique quod
            aliquam,
          </p>
          <button className="text-white mt-8 bg-titleColor hover:bg-[#FEB633] px-[40px] py-[15px] rounded-md">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
