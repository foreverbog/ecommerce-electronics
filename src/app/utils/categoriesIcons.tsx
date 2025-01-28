import {
  FaTv,
  FaLaptop,
  FaMobileAlt,
  FaGamepad,
  FaHeadphones,
  FaPlug,
} from "react-icons/fa";
import { Category } from "../types/category";

export const categories: Category[] = [
  { name: "Tv", icon: FaTv },
  { name: "Audio", icon: FaHeadphones },
  { name: "Laptop", icon: FaLaptop },
  { name: "Mobile", icon: FaMobileAlt },
  { name: "Gaming", icon: FaGamepad },
  { name: "Appliances", icon: FaPlug },
];
