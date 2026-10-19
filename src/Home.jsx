import CourseRoadmap from "./Development/CourseRoadmap";
import Hero from "./Home/Hero";
import LearningCategories from "./Home/LearningCategories";

import Navbar from "./Home/Navbar";
import ProgrammingLanguages from "./Languages/ProgrammingLanguages";


export default function Home() {
  return (
    <>
    <Navbar/>
    
    <LearningCategories/>
    <Hero/>
    <CourseRoadmap/>
    <ProgrammingLanguages/>
    
    </>
  );
}