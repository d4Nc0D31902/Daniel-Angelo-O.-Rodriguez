import React, { useState, useRef, useEffect } from "react";
import { Button, Tooltip } from "antd";
import {
  MailOutlined,
  DownloadOutlined,
  SoundOutlined,
  MutedOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import Typing from "react-typing-effect";

const Portfolio = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const audioRef = useRef(null);
  const isNotSmallScreen = window.innerWidth > 768;
  const [neonAnimationSpeed, setNeonAnimationSpeed] = useState(1.5);
  const toggleAudio = () => {
    if (isMuted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [audioRef, volume]);

  const items = [
    { src: "../images/mongodb.png", alt: "MongoDB logo", text: "MongoDB" },
    { src: "../images/express.png", alt: "ExpressJS logo", text: "ExpressJS" },
    { src: "../images/react.png", alt: "ReactJS logo", text: "ReactJS" },
    { src: "../images/node.png", alt: "NodeJS logo", text: "NodeJS" },
    { src: "../images/php.png", alt: "PHP logo", text: "PHP" },
    { src: "../images/laravel.png", alt: "Laravel logo", text: "Laravel" },
    { src: "../images/html.png", alt: "HTML logo", text: "HTML" },
    { src: "../images/css.png", alt: "CSS logo", text: "CSS" },
    {
      src: "../images/javascript.png",
      alt: "JavaScript logo",
      text: "JavaScript",
    },
    {
      src: "../images/typescript.png",
      alt: "TypeScript logo",
      text: "TypeScript",
    },
    { src: "../images/vite.png", alt: "Vite logo", text: "Vite" },
    { src: "../images/figma.png", alt: "Figma logo", text: "Figma" },
  ];

  return (
    <div
      className={`h-screen ${
        isDarkTheme
          ? "bg-gradient-to-r from-black to-gray-800"
          : "bg-gradient-to-r from-white to-gray-600"
      } p-5`}
    >
      <audio ref={audioRef} src="../mp3/bgmusic.mp3" autoPlay loop />
      <div className="grid md:grid-cols-4 md:grid-rows-4 p-2 h-[100%] gap-2 sm:grid-cols-2 sm:grid-rows-3">
        {/* Theme Toggle Button */}

        {/* Profile Pic */}
        <div
          className={`bg-white md:col-span-1 md:row-span-4 rounded-lg flex justify-center items-center shadow-2xl sm:col-span-1 sm:row-span-2 relative group neon-border ${
            isDarkTheme ? "bg-black" : "bg-white"
          }`}
        >
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`absolute top-5 right-5 p-2 rounded-full shadow-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
              isDarkTheme ? "bg-gray-300 text-black" : "bg-black text-white"
            }`}
          >
            {isDarkTheme ? <SunOutlined /> : <MoonOutlined />}
          </button>

          <img
            src="../images/dan1.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Container for Button and Slider */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center gap-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Speaker/Mute Button */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full shadow-md hover:bg-gray-200 ${
                isDarkTheme ? "bg-gray-300" : "bg-white"
              }`}
            >
              {isMuted ? <MutedOutlined /> : <SoundOutlined />}
            </button>

            {/* Volume Slider */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className={`w-full h-1 rounded-full cursor-pointer ${
                isDarkTheme ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
          </div>
        </div>

        {/* Description */}
        <div
          className={`md:col-span-2 md:row-span-2 rounded-lg p-4 flex flex-col justify-center items-start shadow-lg space-y-4 ${
            isDarkTheme ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="w-full h-full">
            <h4 className="text-2xl font-bold">
              Hi👋 I'm Daniel Angelo O. Rodriguez,
            </h4>

            {isNotSmallScreen ? (
              <Typing
                text={[
                  "a passionate developer with a love for coding. I thrive on tackling new challenges and continuously expanding my skills in the ever-evolving tech landscape. With a curious mind and a strong desire to learn, I'm always exploring innovative solutions and embracing the latest technologies. Whether I'm building applications or collaborating with others, I aim to make a positive impact through my work.",
                ]}
                speed={40}
                eraseSpeed={10}
                eraseDelay={2000}
                typingDelay={500}
              />
            ) : (
              <p
                className={`mt-2 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-700"
                } text-xs`}
              >
                a passionate developer with a love for coding. I thrive on
                tackling new challenges and continuously expanding my skills in
                the ever-evolving tech landscape.
              </p>
            )}
          </div>

          <div className="w-full h-[20%] flex flex-col sm:flex-row items-center justify-center gap-4">
            {isNotSmallScreen ? (
              <div className="flex justify-between w-full">
                <Tooltip title="Contact Me">
                  <Button
                    type="primary"
                    icon={<MailOutlined />}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=danielrodri1902@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-full p-2"
                    size="large"
                  />
                </Tooltip>

                <Tooltip title="Download Resume">
                  <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    href="../images/Resume.pdf"
                    download
                    className="flex items-center justify-center rounded-full p-2"
                    style={{
                      backgroundColor: "#52c41a",
                      borderColor: "#52c41a",
                    }}
                    size="large"
                  />
                </Tooltip>
              </div>
            ) : (
              <>
                <Button
                  type="primary"
                  icon={<MailOutlined />}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=danielrodri1902@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full p-2"
                  size="large"
                />

                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  href="../images/Resume.pdf"
                  download
                  className="flex items-center justify-center rounded-full p-2"
                  style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
                  size="large"
                />
              </>
            )}
          </div>
        </div>

        {/* Socials */}
        <div
          className={`shadow-lg md:col-span-1 md:row-span-2 rounded-lg p-2 flex justify-center flex-col gap-2 items-center ${
            isDarkTheme ? "bg-black" : "bg-white"
          }`}
        >
          <a
            href="https://www.facebook.com/danielangelo.rodriguez.2002/"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-5 justify-center p-2 tems-center ${
              isDarkTheme ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <img src="../images/facebook.png" />
            <p className="flex items-center">Facebook</p>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-5 justify-center p-2 tems-center ${
              isDarkTheme ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <img src="../images/insta.png" />
            <p className="flex items-center">Instagram</p>
          </a>
          <a
            href="https://github.com/d4Nc0D31902"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-5 justify-center p-2 tems-center ${
              isDarkTheme ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <img src="../images/github.png" />
            <p className="flex items-center">Github</p>
          </a>
          <a
            href="https://www.tiktok.com/@daniel.angelo.rod?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-5 justify-center p-2 tems-center ${
              isDarkTheme ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <img src="../images/tik-tok.png" />
            <p className="flex items-center">Tiktok</p>
          </a>
        </div>

        {/* Marquee */}
        <div
          className={` shadow-lg md:col-span-1 md:row-span-2 rounded-lg p-2 flex justify-center items-center overflow-hidden relative ${
            isDarkTheme ? "bg-black" : "bg-white"
          }`}
        >
          <div className="marquee gap-y-5">
            <div className="flex flex-col space-y-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`p-2 w-[250px] rounded-lg flex items-center gap-10 border-2 shadow-md ${
                    isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-10 w-10 mr-2"
                  />
                  <p className="text-md">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Works */}
        <div
          className={`md:col-span-2 md:row-span-2 rounded-lg p-4 flex justify-center items-center gap-4 flex-wrap overflow-auto ${
            isDarkTheme ? "bg-black" : "bg-white"
          } shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          {Array(4)
            .fill()
            .map((_, index) => {
              const images = [
                "../images/tup.png",
                "../images/rcgi.png",
                "../images/mii.png",
                "../images/jicus.jfif",
              ];

              const imageNames = [
                "TUP-T Scheduler",
                "RCGI On-Boarding",
                "Meatworld International Inc. LMS",
                "Jicus Trading Management System",
              ];

              const links = [
                "https://tupt-scheduler.org",
                "https://rcgi-onboarding.onrender.com",
                "https://meatworld-frontend.onrender.com",
                "/jicus-trading-system",
              ];

              return (
                <div
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="relative group overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <a
                    href={links[index]}
                    className="block w-full h-full"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    <img
                      src={images[index]}
                      alt={imageNames[index]}
                      className="object-cover rounded-lg w-64 h-32 shadow-2 border-2"
                    />
                    <div
                      className={`absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isDarkTheme ? "bg-opacity-70" : "bg-opacity-30"
                      }`}
                    >
                      <span className="text-white text-lg font-semibold text-wrap text-center">
                        {imageNames[index]}{" "}
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
