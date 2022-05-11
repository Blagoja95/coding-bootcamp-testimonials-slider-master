import React from "react";
import users from "../users.js";
import imgTanya from "../images/image-tanya.jpg";
import imgJohn from "../images/image-john.jpg";

const imgs = [imgTanya, imgJohn];
const Testimonials = ({ position }) => {
  const testimonials = users.map((user, index) => {
    return (
      <div className="testimonial" key={index}>
        <img
          className="testimonial__img"
          src={imgs[index]}
          alt={`${user.name} pictre`}
        />
        <div className="testimonial__inner">
          <blockquote className="testimonial__quote">{user.quote}</blockquote>
          <div className="user-box">
            <h1 className="name">{user.name}</h1>
            <p className="title">{user.title}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div>{testimonials[position]}</div>;
};

export default Testimonials;
