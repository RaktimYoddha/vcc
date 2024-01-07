import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";


const HRegister = () => {
  return (
    <div className="bg-tertiary mt-12 px-52 py-4">
      <div className="mt-10">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Register as our student</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          Enroll with us to access top-tier faculties and courses.
        </motion.p>
        <a href="/registration">
          <button
            type="submit"
            className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md my-6  shadow-primary"
          >
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default HRegister