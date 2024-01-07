import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Information = () => {
  return (
    <div className="px-52 pt-24 h-screen">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Important</p>
        <h2 className={styles.sectionHeadText}>Information.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        All the key information will be provided here.
      </motion.p>
    </div>
  );
}

export default Information