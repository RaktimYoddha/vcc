import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const DegreeCourses = () => {
  return (
    <div className="bg-primary pt-24 px-44 min-h-screen">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>Degree Courses</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-8 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We Provide Degree courses as mentioned below
      </motion.p>
      <table class=" w-full ">
        <tbody className=" w-full ">
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                B.Tech. (Computer Science & Engineering)
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                B.Tech. (Information Technology)
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">B.B.A</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">B.C.A.
              </h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DegreeCourses