import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Criação de sites e aplicações web funcionais, responsivas e modernas.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Experiências digitais elegantes com foco em usabilidade e acessibilidade.",
  },
  {
    id: "03",
    title: "Logo Design",
    description: "Identidade visual marcante e profissional para sua marca.",
  },
  {
    id: "04",
    title: "SEO",
    description:
      "Melhoria do posicionamento orgânico do seu site nos motores de busca.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#d8eefe] text-[#094067] py-20 px-6 h-[calc(100vh-64px)]"
    >
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white shadow-md rounded-lg p-6 relative transition duration-300 hover:shadow-xl"
          >
            <div className="text-3xl font-bold text-[#094067] opacity-60">
              {service.id}
            </div>
            <h3 className="text-2xl font-bold text-[#3da9fc] my-2 group-hover:text-[#094067] transition">
              {service.title}
            </h3>
            <p className="text-[#5f6c7b] mb-8">{service.description}</p>

            {/* Botão com seta animada */}
            <div
              className="absolute right-6 bottom-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#094067] border border-[#094067] 
              group-hover:bg-[#3da9fc] group-hover:text-white transition-all duration-300"
            >
              <FaArrowRight className="text-sm transform rotate-[45deg] group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
