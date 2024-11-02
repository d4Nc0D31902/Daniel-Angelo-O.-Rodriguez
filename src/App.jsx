import React from "react";
import Typing from "react-typing-effect";
import { useMediaQuery } from "react-responsive";
import { Button } from "antd";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";

const App = () => {
  const isNotSmallScreen = useMediaQuery({ minWidth: 768 });
  const items = [
    { src: "./src/assets/mongodb.png", alt: "MongoDB logo", text: "MongoDB" },
    {
      src: "./src/assets/express.png",
      alt: "ExpressJS logo",
      text: "ExpressJS",
    },
    { src: "./src/assets/react.png", alt: "ReactJS logo", text: "ReactJS" },
    { src: "./src/assets/node.png", alt: "NodeJS logo", text: "NodeJS" },
    { src: "./src/assets/php.png", alt: "PHP logo", text: "PHP" },
    { src: "./src/assets/laravel.png", alt: "Laravel logo", text: "Laravel" },
    { src: "./src/assets/html.png", alt: "HTML logo", text: "HTML" },
    { src: "./src/assets/css.png", alt: "CSS logo", text: "CSS" },
    {
      src: "./src/assets/javascript.png",
      alt: "JavaScript logo",
      text: "JavaScript",
    },
    {
      src: "./src/assets/typescript.png",
      alt: "TypeScript logo",
      text: "TypeScript",
    },
    {
      src: "./src/assets/vite.png",
      alt: "Vite logo",
      text: "Vite",
    },
    {
      src: "./src/assets/figma.png",
      alt: "Figma logo",
      text: "Figma",
    },
  ];
  return (
    <div className="h-screen bg-gradient-to-r from-black to-gray-600 p-5">
      <div className="grid md:grid-cols-4 md:grid-rows-4 p-2 h-[100%] gap-2 sm:grid-cols-2 sm:grid-rows-3">
        {/* Profile Pic */}
        <div className="bg-white md:col-span-1 md:row-span-4 rounded-lg flex justify-center items-center shadow-2xl sm:col-span-1 sm:row-span-2">
          <img
            src="./src/assets/dan1.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Description */}
        <div className="bg-white md:col-span-2 md:row-span-2 rounded-lg p-4 flex flex-col justify-center items-start shadow-lg space-y-4">
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
              <p className="mt-2 text-gray-700 text-xs">
                a passionate developer with a love for coding. I thrive on
                tackling new challenges and continuously expanding my skills in
                the ever-evolving tech landscape.
              </p>
            )}
          </div>

          <div className="w-full h-[20%] flex flex-col sm:flex-row items-center justify-center gap-4">
            {isNotSmallScreen ? (
              <>
                <Button
                  type="primary"
                  icon={<MailOutlined />}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=danielrodri1902@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base px-4 py-2"
                >
                  Contact Me
                </Button>

                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  href="./src/assets/Resume.pdf"
                  download
                  className="flex items-center gap-2 text-sm sm:text-base px-4 py-2"
                  style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
                >
                  Download Resume
                </Button>
              </>
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
                  href="./src/assets/Resume.pdf"
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
        <div className="bg-white shadow-lg md:col-span-1 md:row-span-2 rounded-lg p-2 flex justify-center flex-col gap-2 items-center">
          <a
            href="https://www.facebook.com/danielangelo.rodriguez.2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-5 justify-center p-2 tems-center"
          >
            <img src="./src/assets/facebook.png" />
            <p className="flex items-center">Facebook</p>
          </a>
          <a
            href="https://www.facebook.com/danielangelo.rodriguez.2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-5 justify-center p-2 tems-center"
          >
            <img src="./src/assets/insta.png" />
            <p className="flex items-center">Instagram</p>
          </a>
          <a
            href="https://github.com/d4Nc0D31902"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-8 justify-center p-2 tems-center"
          >
            <img src="./src/assets/github.png" />
            <p className="flex items-center">Github</p>
          </a>
          <a
            href="https://www.tiktok.com/@daniel.angelo.rod?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 shadow-md rounded-lg w-[80%] h-[20%] flex gap-8 justify-center p-2 tems-center"
          >
            <img src="./src/assets/tik-tok.png" />
            <p className="flex items-center">Tiktok</p>
          </a>
        </div>

        {/* Marquee */}
        <div className="bg-white shadow-lg md:col-span-1 md:row-span-2 rounded-lg p-2 flex justify-center items-center overflow-hidden relative">
          <div className="marquee gap-y-5">
            <div className="flex flex-col space-y-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="p-2 w-[250px] rounded-lg flex items-center gap-10 border-2 shadow-md"
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
        <div className="md:col-span-2 md:row-span-2 rounded-lg p-4 flex justify-center items-center gap-4 flex-wrap overflow-auto bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          {Array(4)
            .fill()
            .map((_, index) => {
              const images = [
                "./src/assets/tup.png",
                "./src/assets/rcgi.png",
                "./src/assets/mii.png",
                "./src/assets/jicus.jfif",
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
                    rel="noopener noreferrer" // Adding rel attribute for security
                  >
                    <img
                      src={images[index]}
                      alt={imageNames[index]}
                      className="object-cover rounded-lg w-64 h-32 shadow-2 border-2"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

export default App;
