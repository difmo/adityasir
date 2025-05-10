import React, { useEffect } from "react";
import md from "../assets/md.jpeg";
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
            <h1 className="text-3xl  font-bold mb-4 text-primary">
              About Vikas Sir,
            </h1>
            <p className="text-xl  text-primary text-justify">
              Vikas Sir is a Gold Medalist in IIT Delhi, M.Tech Programs for
              their outstanding academic performance and having more than 11
              years of experience. He has become a synonym for training Physics
              toppers among the top Schools in Delhi and some National
              Institutes. Throughout the years with continued success in
              teaching, guidance & Motivation he made more than 1000's of
              IITIANS ,NITIANS & Doctors till yet. More than 90% of his students
              had scored more than 90% Marks in PHYSICS in Boards, NEET &
              IIT-JEE continuously under his guidance, since many past years.
              <br />
              <span className="py-6">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vikas
                Sir and his team also likes to teach students online, across the
                Globe. So if you want to Score Good grades in competitive exams
                like NEET or IIT-JEE along with Boards then connect us for a
                guaranteed result & Get One to One Online PHYSICS, CHEMISTRY,
                MATHS & BIOLOGY classes with Vikas Instutite Faculties and make
                your Concepts sharp & fair by clearing yours doubts.
              </span>
            </p>
            <p className="text-2xl text-primary">Thanks.</p>
          </div>
          <div
            className="md:w-1/2 flex justify-center pt-14"
            data-aos="zoom-in"
          >
            <img
              src={md}
              alt="Vikas Sir"
              className="h-96 md:h-[500px] w-full  object-contain rounded-lg "
            />
          </div>
        </div>


     


     
      </div>
    </>
  );
};

export default AboutUs;
