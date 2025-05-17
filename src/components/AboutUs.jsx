import React, { useEffect } from "react";
import md from "../assets/mdd.jpeg";
import id from "../assets/id.jpeg";
import fullLogo from "../assets/fullimg.jpeg";
import support from "../assets/support_img.png";
import waps from "../assets/whatsapp2.gif";

import md1 from "../assets/md0.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
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
            <br />
            <br />
            <h1 className="text-3xl  font-bold mb-4 text-[#160575]">
              About Aditya Sir,
            </h1>
            <p className=" text-[#160575] text-justify text-2xl">
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
            <p className="text-xl  text-[#160575] text-justify">
              <span className="py-6">
                His ability to break down complex concepts into relatable,
                easy-to-understand lessons has made him a trusted mentor for
                students aiming for academic excellence in science. Known for
                his engaging and student-centric teaching style, Aditya Sir
                integrates practical experiments, real-world applications, and
                advanced digital tools to make chemistry both accessible and
                fascinating. Whether explaining the chemistry of biological
                processes for NEET aspirants or tackling advanced organic
                chemistry for JEE candidates, he ensures every student grasps
                the subject deeply while developing a genuine interest in the
                field. Aditya Sir fosters an inclusive, supportive learning
                environment where students from diverse backgrounds feel
                encouraged to explore, ask questions, and push their limits. His
                global outreach has earned him a reputation as a mentor who
                bridges educational systems, helping students achieve their
                dreams, whether they aspire to study at top universities or
                pursue careers in medicine, engineering, or research. Beyond the
                classroom, Aditya Sir is committed to staying at the forefront
                of chemistry education, regularly attending international
                workshops and collaborating with educators worldwide to refine
                his teaching methods. His dedication, expertise, and global
                impact make him an exceptional educator who transforms students
                into confident, successful scientists and professional
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

        <div
          className="flex flex-col md:flex-row justify-between gap-6"
          data-aos="fade-up"
        >
          <div
            className="md:w-1/1 flex justify-center pt-14"
            data-aos="zoom-in"
          >
            <img
              src={fullLogo}
              alt="Aditya Sir"
              className="h-96 md:h-[600px] w-full  object-contain rounded-lg "
            />
          </div>
        </div>

        <div className="w-full bg-[#0a0a52] text-white mt-8 p-8 rounded-xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="md:w-1/4 flex justify-center">
            <img
              src={support}
              alt="Chemistry Tutor"
              className="h-48 md:h-60 object-contain"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Book Your Chemistry Home Tuition
            </h2>
            <p className="text-lg">
              With a private home tutor, you can schedule any specific timings
              as per your choice to get the chemistry lessons for yourself.
            </p>
          </div>
          <div className="md:w-1/4 text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2">CALL US NOW</h3>
            <p className="text-xl">+91 9334454757</p>
            <p className="text-xl">+91 9798867171</p>
          </div>
          <a
            href="http://wa.me/919798867171"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 text-green-500 text-5xl"
          >
             <img
              src={waps}
              alt="Chemistry Tutor"
              className="h-32 md:h-40 object-contain"
            />
            {/* <FaWhatsapp /> */}
            
          </a>
        </div>
        {/* Private Home Learning Cards */}
        <div
          className="bg-cover bg-center bg-no-repeat mt-12 py-12 text-center text-white rounded-lg"
          style={{ backgroundImage: "url('https://chemistrytutors.in/assets/img/images/chemistrybg.png')" }}
        >
          <h2 className="text-3xl font-bold mb-4">Private Home Learning With Aditya Sir.</h2>
          <h3 className="text-xl mb-12 font-semibold">The Best Chemistry Teacher is Giving Home-Based Tuition in South Delhi and Gurgaon </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[
              {
                title: "Crack Competitive Exams",
                img: "https://chemistrytutors.in/assets/img/images/examicon.png",
                desc: "With Aditya Sir  teachings, all the topics important for the upcoming competitive exams will be covered."
              },
              {
                title: "Intensive Coaching",
                img: "https://chemistrytutors.in/assets/img/images/coachingicon.png",
                desc: "With intensive coaching and test series, you'll be prepared for the toughest entrance exams."
              },
              {
                title: "Assignment Support",
                img: "https://chemistrytutors.in/assets/img/images/assignmenticon.png",
                desc: "Get exclusive, original assignments with full support from scratch to delivery."
              },
              {
                title: "Weekly Test",
                img: "https://chemistrytutors.in/assets/img/images/testicon.png",
                desc: "Assess growth, identify weak areas, and reinforce strengths with weekly tests."
              },
              {
                title: "Regular Feedback",
                img: "https://chemistrytutors.in/assets/img/images/feedbackicon.png",
                desc: "Parents receive regular updates on student performance for academic success."
              },
              {
                title: "One To One Session",
                img: "https://chemistrytutors.in/assets/img/images/sessionicon.png",
                desc: "Personalized coaching ensures focused and effective chemistry learning."
              },
            ].map((card, index) => (
              <div key={index} className="bg-yellow-100 rounded-xl shadow-md p-6 text-black">
                <img src={card.img} alt={card.title} className="w-14 h-14 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
