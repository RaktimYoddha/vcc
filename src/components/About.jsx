import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, locationTime } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, info1, info2 }) => (
  <Tilt className="xs:w-[500px] w-full mb-3">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full  p-[1px] rounded-[20px] shadow-primary"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[220px] flex justify-evenly  flex-col"
      >
        <h3 className="text-white text-[20px] font-bold ">
          {title}
        </h3>
        <h3 className="text-white text-[16px] font-bold ">
          {info1}
        </h3>
        <h3 className="text-white text-[16px] font-bold">
          {info2}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const PropCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Us</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        Vikash Computer Center (VCC) is a computer training institute where most
        career oriented courses are available. It has been committed to the best
        IT education and has been continuously scaling new height's in the field
        of Information Technology since it's inception in 2008.
      </motion.p>
      <div className="w-full flex">
        <div className="w-1/2 mt-20 flex flex-col">
          {locationTime.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <div className="w-1/2 mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3051836332565!2d92.66167067525687!3d23.73649417867985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d932e6aa49045%3A0xd107cfbea6e4cdbc!2sMizoram%20University!5e0!3m2!1sen!2sin!4v1700895415885!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-[20px]"
          ></iframe>
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] mt-24"
      >
        We offer exceptional computer classes featuring top-tier instructors and
        meticulously crafted courses tailored for students. Our comprehensive
        facilities cater to all student needs.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <PropCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
