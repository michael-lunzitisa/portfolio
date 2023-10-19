import React from "react";
import avatar from "../assets/avatar.jpeg";
const About = () => {
  return (
    <div className="h-[60vh] bg-[#313444] py-11">
      <div className="flex justify-center max-w-5xl mx-auto">
        <div className="w-52">
          <img src={avatar} alt="" />
        </div>
        <div className="max-w-2xl px-10 py-9 w-auto">
          <h2 className="text-titleColor text-[1.5rem]">About</h2>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            explicabo maiores! Nam, laborum. Eligendi, quae fuga dolore
            explicabo quis voluptatem placeat odio perspiciatis expedita autem
            eum possimus, dicta sed cupiditate?
            <br />
            Adipiscing leo dictumst itaque. Urna bibendum, temporibus, ante
            deleniti fermentum mi impedit! Voluptas donec hendrerit! Natoque,
            ultrices voluptas quidem, risus corrupti nonummy congue dolores
            ipsam veniam suscipit. Temporibus? Consequatur cupiditate rhoncus
            taciti, voluptatem sapiente quae, eros! Architecto impedit nec
            sociosqu arcu fusce, ex minus accumsan recusandae tristique quod
            aliquam,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
