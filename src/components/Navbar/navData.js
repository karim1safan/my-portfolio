import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { AiFillCodepenCircle } from "react-icons/ai";
import { PiCertificateBold } from "react-icons/pi";

export const navData = [
  {
    id: 1,
    icon: FaHome ,
    ref: "#home",
  },
  {
    id: 2,
    icon: FaUser,
    ref: "#about",
  },
  {
    id: 3,
    icon: RiServiceLine,
    ref: "#services",
  },
  {
    id: 4,
    icon: BiBook,
    ref: "#skills",
  },
  {
    id: 5,
    icon: AiFillCodepenCircle,
    ref: "#projects",
  },
  {
    id: 6,
    icon: PiCertificateBold,
    ref: "#certifications",
  },
  {
    id: 7,
    icon: BiMessageSquareDetail,
    ref: "#contact",
  },
];
