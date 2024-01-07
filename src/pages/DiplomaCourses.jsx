import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";


const DiplomaCourses = () => {
  return (
    <div className="bg-primary pt-24 px-44 min-h-screen">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>Diploma Courses</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-8 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We Provide Diploma courses as mentioned below
      </motion.p>
      <table class=" w-full ">
        <tbody className=" w-full ">
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                Basic Vidhya:- ( course duration-3 montd.)
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                DCA (Diploma in Computer Applications):- Duration-6 montd.
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                D.T.P (Diploma in Desktop Publishing):- Course duration-3 montd
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                D.T.P (Diploma in Desktop Publishing):- Course duration-6 montd
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                ADDTP :-(Advance Diploma in Desktop Publishing):- Course
                duration-9 montd
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                ADFA (Advance Diploma in Financial Accounting):-Duration-9
                montd.
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                ADCA (Advance Diploma in Computer Applications):- Duration-12
                montd.
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                AComputer Teacher Training Course:-Duration-12 Montd.
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                DHT(Diploma in Hardware Technology) :- Duration:-6montd
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                AComputer Teacher Training Course:-Duration-12 Montd.
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">
                Laptop Repairing Course -3 montd
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="p-4 text-white font-medium">AutoCAd
              </h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DiplomaCourses