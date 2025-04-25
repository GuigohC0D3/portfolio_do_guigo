import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaInstagram } from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";
import Counter from "../../components/counter/Counter";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#d8eefe] text-[#094067] flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 items-center gap-12">
        {/* Texto à esquerda */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-[#5f6c7b]">
            Software Developer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Hello I'm <span className="text-[#3da9fc]">Guigo</span>
          </h1>
          <p className="text-[#5f6c7b] mt-4 max-w-md mx-auto md:mx-0">
            I create elegant and functional web applications using modern
            technologies. Let's build something amazing together!
          </p>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start flex-wrap">
            <a
              href="/cv-guigo.pdf"
              download
              className="flex items-center gap-2 px-6 py-2 border border-[#3da9fc] text-[#3da9fc] rounded-full hover:bg-[#3da9fc] hover:text-white transition"
            >
              <FaDownload /> Download CV
            </a>
            <a
              href="https://github.com/GuigohC0D3"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl hover:text-[#3da9fc] transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-ancheschi-werneck-pereira/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-[#3da9fc] transition" />
            </a>
            <a
              href="https://www.instagram.com/awdev_studio/?next=%2F"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-xl hover:text-[#3da9fc] transition" />
            </a>
          </div>
        </motion.div>

        {/* Foto à direita */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-60 h-60 mx-auto"
        >
          <img
            src={profileImg}
            alt="Perfil"
            className="w-full h-full object-cover rounded-full border-4 border-[#ef4565]"
          />
        </motion.div>
      </div>

      {/* Estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 w-full px-6"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-3xl font-bold">
              <Counter to={12} duration={2} />
            </h2>
            <p className="text-sm text-[#5f6c7b]">Anos de experiência</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              <Counter to={26} duration={2.5} />
            </h2>
            <p className="text-sm text-[#5f6c7b]">Projetos finalizados</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              <Counter to={8} duration={2} />
            </h2>
            <p className="text-sm text-[#5f6c7b]">Tecnologias dominadas</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              <Counter to={500} duration={2.6} />
            </h2>
            <p className="text-sm text-[#5f6c7b]">Commits de código</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
