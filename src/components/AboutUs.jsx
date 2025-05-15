import React, { useEffect } from "react";
import md from "../assets/md.jpeg";
import id from "../assets/id.jpeg";
import md1 from "../assets/md0.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const topFeatures = [
    { icon: "👨‍🏫", title: " QUALIFIED FACULTY" },
    { icon: "📚", title: "STUDY MATERIAL" },

    { icon: "📋", title: "DOUBT SESSION" },

    { icon: "🕒", title: "PERIODIC TEST" },
    { icon: "📈", title: "RESULT" },
  ];

  const courses = [
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "BOARDS",
    "CUET",
    "NEET",
    "IIT-JEE",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div
          className="flex flex-col md:flex-row justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="md:w-1/2 px-12">
          <br/>
            <br/>
            <h1 className="text-3xl  font-bold mb-4 text-primary">
              About Aditya Sir,
            </h1>
            <p className=" text-primary text-justify text-2xl">
              Aditya Sir, Chemistry Educator Aditya Sir is a distinguished and
              passionate chemistry educator with over 15 years of experience,
              renowned for empowering students worldwide to excel in science and
              competitive examinations. He holds a Ph.D. in Chemistry from the
              prestigious Delhi University, where he developed a profound
              understanding of chemical sciences, equipping him to inspire and
              guide students at all levels with clarity and expertise. Aditya
              Sir specializes in teaching a diverse range of curricula,
              including the IB Board, IGCSE, ISC, and Indian boards, catering to
              global students with tailored, high-impact instruction. His
              expertise extends to preparing students for highly competitive
              exams such as IIT JEE Main and Advanced, NEET, and other entrance
              tests, where his students consistently achieve top ranks and
              secure admissions into premier institutions. 
            </p>
          </div>
          <div
            className="md:w-1/2 flex justify-center pt-14"
            data-aos="zoom-in"
          >
            <img
              src={md}
              alt="Aditya Sir"
              className="h-96 md:h-[600px] w-full  object-cover rounded-lg"
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="md:w-1/2 px-12">
            <p className="text-xl  text-primary text-justify">
              <span className="py-6">
              His ability to break
              down complex concepts into relatable, easy-to-understand lessons
              has made him a trusted mentor for students aiming for academic
              excellence in science. Known for his engaging and student-centric
              teaching style, Aditya Sir integrates practical experiments,
              real-world applications, and advanced digital tools to make
              chemistry both accessible and fascinating.
               Whether explaining the chemistry of biological processes for NEET aspirants or tackling advanced organic chemistry for JEE candidates, he ensures every student grasps the subject deeply while developing a genuine interest in the field. Aditya Sir fosters an inclusive, supportive learning environment where students from diverse backgrounds feel encouraged to explore, ask questions, and push their limits. His global outreach has earned him a reputation as a mentor who bridges educational systems, helping students achieve their dreams, whether they aspire to study at top universities or pursue careers in medicine, engineering, or research. Beyond the classroom, Aditya Sir is committed to staying at the forefront of chemistry education, regularly attending international workshops and collaborating with educators worldwide to refine his teaching methods. His dedication, expertise, and global impact make him an exceptional educator who transforms students into confident, successful scientists and professional
              </span>
            </p>
          </div>
          <div
            className="md:w-1/2 flex justify-center pt-14"
            data-aos="zoom-in"
          >
            <img
              src={id}
              alt="Aditya Sir"
                
              className="h-96 md:h-[600px] w-full  object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
