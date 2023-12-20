import React from 'react'
import { styles } from "../styles";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Habout = () => {
  return (
    <div className="bg-tertiary flex justify-center items-center">
      <div className="mt-10">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Brief Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          Vikash Computer Center (VCC) is a computer training institute where
          most career oriented courses are available. It has been committed to
          the best IT education and has been continuously scaling new height's
          in the field of Information Technology since it's inception in 2008.
          <br />
          <br />
          <div className='flex items-center justify-between'>
            <div>
              WORK TIMING :<br /> Monday - saturday <br />10:00 am - 06:00 pm
            </div>
            <div>
              LOCATION :<br /> More Station Road, Nechua, jabalpu <br />Gopalganj-841504
            </div>
          </div>
        </motion.p>
        <button
          type="submit"
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md my-6  shadow-primary"
        >
          About Us
        </button>
      </div>
    </div>
  );
}

export default Habout