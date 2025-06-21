import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

export default function Home() {
  const [carouselImages, setCarouselImages] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Animated Counters
  const stats = [
    { label: "Research Projects", target: 25 },
    { label: "Students Trained", target: 1000 },
    { label: "Collaborating Institutions", target: 10 },
    { label: "Ongoing Courses", target: 15 },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/carousel`);
        setCarouselImages(res.data);
      } catch (error) {
        console.error("Failed to fetch carousel images", error);
      }
    };

    fetchImages();

    const intervals = stats.map((stat, idx) =>
      setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[idx] < stat.target) {
            updated[idx] += Math.ceil(stat.target / 50);
            if (updated[idx] > stat.target) updated[idx] = stat.target;
          }
          return updated;
        });
      }, 40)
    );

    return () => intervals.forEach(clearInterval);
  }, [API_BASE_URL]);

  return (
    <div className="pt-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Carousel */}
      <section className="my-8 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-blue-100">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows
          interval={4000}
          transitionTime={700}
        >
          {carouselImages.map((img, idx) => (
            <div key={idx}>
              
              <img
                src={img.url}
                alt={`slide-${idx}`}
                loading="lazy"   //added lazy loading
                className="h-[280px] sm:h-[320px] md:h-[360px] w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Stats with Animated Numbers */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-md bg-white hover:bg-blue-100 transition-all duration-300"
            >
              <h3 className="text-5xl font-extrabold text-blue-700 mb-2">
                {counts[idx]}
              </h3>
              <p className="text-gray-600 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>Gudsky Research Foundation</strong>, our mission is to ignite a research revolution by nurturing the next generation of innovators, scientists, and thought leaders.
            We are committed to transforming how students engage with science and technology—
            shifting from rote learning to research-driven, hands-on exploration.
          </p>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-12">Our Goal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Train & Empower",
                points: [
                  "Train 1,000+ students",
                  "Focus on AI, Robotics, Emerging Tech",
                  "Hands-on R&D Experience"
                ]
              },
              {
                title: "Promote Research",
                points: [
                  "Support 100+ publications",
                  "UG/PG student research",
                  "Industry-aligned outcomes"
                ]
              },
              {
                title: "Build Global Network",
                points: [
                  "Partner with 50+ institutions",
                  "Connect 100+ colleges",
                  "Mentors & industry experts"
                ]
              }
            ].map((goal, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-blue-100 transition duration-300 text-left"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-4">{goal.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {goal.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-10">Our Research Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              "Artificial Intelligence & Machine Learning",
              "Robotics & Embedded Systems",
              "IoT & Smart Devices",
              "Cognitive Computing & Human-Computer Interaction",
              "Computer Vision & Image Processing",
              "Sustainable Tech & AgriTech Innovation",
              "Data Science & Predictive Modelling"
            ].map((title, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">
                  Advancing innovation through real-world applications, hands-on research, and interdisciplinary exploration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
