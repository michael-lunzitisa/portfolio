import React from "react";
import avatar from "../assets/avatar.jpeg";
const About = () => {
    return ( 
        <div className="h-[50vh] bg-[#313444] py-5">
            <div className="flex">
            <div className="w-52">
                <img src={avatar} alt="" />
            </div>
            <div className="max-w-2xl">
            <h2>About</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Accusamus, explicabo maiores! Nam, laborum. Eligendi, quae fuga 
               dolore explicabo quis voluptatem placeat odio perspiciatis expedita 
               autem eum possimus, dicta sed cupiditate?</p>
               </div>
            </div>
            

        </div>
     );
}
 
export default About;