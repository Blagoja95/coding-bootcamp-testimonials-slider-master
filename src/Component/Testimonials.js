import React from "react";
import users from "../users.js";
import imgTanya from "../images/image-tanya.jpg";
import imgJohn from "../images/image-john.jpg";

const imgs = [imgTanya, imgJohn];
const Testimonials = ({ position }) => {
  const testimonials = users.map((user, index) => {
    return (
      <div className=" testimonial flex flex-col items-center" key={index}>
        <img
          className="w-64 rounded-lg drop-shadow-lg"
          src={imgs[index]}
          alt={`${user.name} pictre`}
        />
        <div className="testimonial__inner mt-16">
          <p className="quote text-center text-Grayish-Blue font-light bg-quote bg-no-repeat ">
            {user.quote}
          </p>
          <div className="user-box flex flex-col items-center gap-0.5 mt-6">
            <h1 className="text-Dark-Blue font-bold text-base">{user.name}</h1>
            <p className="text-Grayish-Blue text-sm">{user.title}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div>{testimonials[position]}</div>;
};

export default Testimonials;
