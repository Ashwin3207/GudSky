import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

export default function Home() {
  const [carouselImages, setCarouselImages] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
  }, [API_BASE_URL]);

  return (
    <div className="pt-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Carousel */}
      <section className="my-8 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-blue-100">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows>
          {carouselImages.map((img, idx) => (
            <div key={idx}>
              <img src={img.url} alt={`slide-${idx}`} className="h-[300px] w-full object-cover" />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "25+", label: "Research Projects" },
            { value: "1000+", label: "Students Trained" },
            { value: "10+", label: "Collaborating Institutions" },
            { value: "15", label: "Ongoing Courses" },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl shadow-md bg-white hover:bg-blue-100 transition-all duration-300">
              <h3 className="text-5xl font-extrabold text-blue-700 mb-2">{item.value}</h3>
              <p className="text-gray-600 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
