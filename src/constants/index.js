import {
  mobile,
  backend,
  creator,
  web,
} from "../assets";

const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/aboutpage",
    title: "About",
  },
  {
    id: "/coursespage",
    title: "Courses",
  },
  {
    id: "/information",
    title: "Information",
  },
  {
    id: "/registration",
    title: "Admission",
  },
  {
    id: "/contactpage",
    title: "Contact",
  },
];

const services = [
  {
    title: "Great Computer Lab",
    icon: web,
  },
  {
    title: "Great Facilities",
    icon: mobile,
  },
  {
    title: "Fully Qualified",
    icon: backend,
  },
  {
    title: "Flexible Schedule",
    icon: creator,
  },
];

const locationTime = [
  {
    title: "LOCATION : ",
    info1: "Vikash Computer, Station Road, Nechua,",
    info2: "Jabalpur, Gopalganj 841503",
  },
  {
    title: "TIMING : ",
    info1: "Monday - Saturday",
    info2: "10:00 am - 06:00 pm",
  },
];

const courseType = [
  {
    title: "Degree Courses",
    icon: web,
    link: "/degree"
  },
  {
    title: "Diploma Courses",
    icon: mobile,
    link: "/diploma"
  },
];

const degree = [
  {
    course: "Basic Vidhya:- ( course duration-3 month.)",
    info1:
      "VCC offers a basic level course which helps beginners understand fundamentals of computer and basic operations performed by computer. Once you master the basics of computers and all your PC basic knowledge skill, every other thing about improving and advancing your computer education training or IT training courses will become easier.",
    info2: ["Fundamental", "windows 7"],
  },
];

export {  navLinks , services, courseType,  locationTime};
