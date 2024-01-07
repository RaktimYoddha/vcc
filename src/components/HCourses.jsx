import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const HCourses = () => {
  return (
    <div className="bg-tertiary mt-12 px-52 py-4">
      <div className="mt-10">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Our Courses</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          Explore our diverse range of top-tier Degree and Diploma courses.
        </motion.p>
        <a href="/coursespage">
          <button
            type="submit"
            className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md my-6  shadow-primary"
          >
            Explore More
          </button>
        </a>
      </div>
    </div>
  );
}

export default HCourses