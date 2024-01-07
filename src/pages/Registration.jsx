import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../styles/footer.css"



const Registration = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;

      setForm({
        ...form,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "JavaScript Mastery",
            from_email: form.email,
            to_email: "sujata@jsmastery.pro",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

  return (
    <div className="bg-primary flex flex-col">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="p-32 flex flex-col gap-8"
      >
        <p className="text-white text-2xl mb-4">
          Fill this form to register to our institute
        </p>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name here"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">
            Father's / Guardian's Name
          </span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your father's / guardian's name here"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <div className="flex flex-row gap-10">
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">Address</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your Locality / House / Street No."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">City</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your City/ Village name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        </div>
        <div className="flex flex-row gap-10">
          <label className="flex w-1/3 flex-col">
            <span className="text-white font-medium mb-4">State</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your State"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex w-1/4 flex-col">
            <span className="text-white font-medium mb-4">Pincode</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your State"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex w-2/3 flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        </div>
        <div className="flex flex-row gap-10">
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">Date of Birth</span>
            <input
              type="date"
              name="email"
              onChange={handleChange}
              placeholder="Enter your Locality / House / Street No."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">Gender</span>
            <select
              id="sex"
              class="form-control browser-default custom-select bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unspesified">Unspecified</option>
            </select>
          </label>
        </div>
        <div className="flex flex-row gap-10">
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">Age in Years</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your Age in Years"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">Adhar Number</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your Adhar Number"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        </div>
        <div className="flex flex-row gap-10">
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">
              Phone with STD Code
            </span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your Phone with STD Code"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex w-1/2 flex-col">
            <span className="text-white font-medium mb-4">Mobile Number</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your Mobile Number"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        </div>

        <table class=" w-full ">
          <tbody className=" w-full ">
            <tr className="border">
              <th className="w-1/3 ">
                <label className="flex  flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    Examination
                  </span>
                </label>
              </th>
              <td className="w-5/6">
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    Board / University
                  </span>
                </label>
              </td>
              <td className="w-1/6">
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    Year of Passing
                  </span>
                </label>
              </td>
              <td className="w-1/6">
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    Marks Obtained
                  </span>
                </label>
              </td>
              <td className="w-1/6">
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    Percentage(%) of marks
                  </span>
                </label>
              </td>
            </tr>
            <tr>
              <th>
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">Matric</span>
                </label>
              </th>
              <td>
                <label className="flex flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter Your Board / University"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Year"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Marks"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="%age"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <th>
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    10+2 or its equivalent
                  </span>
                </label>
              </th>
              <td>
                <label className="flex flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter Your Board / University"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Year"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Marks"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="%age"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
            </tr>
            <tr>
              <th>
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    Graduation
                  </span>
                </label>
              </th>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter Your Board / University"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Year"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Marks"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="%age"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
            </tr>
            <tr className="">
              <th>
                <label className="flex flex-col p-2">
                  <span className="text-white font-medium mb-4">
                    Any other Examination/ Course
                  </span>
                </label>
              </th>
              <td>
                <label className="flex flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter Your Board / University"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Year"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex  flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Marks"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
              <td>
                <label className="flex flex-col p-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="%age"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
              </td>
            </tr>
          </tbody>
        </table>

      

        <p>&nbsp; &nbsp;Pay Rs 500/- and register as our student</p>
        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          Pay and Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
