"use client";
import React from "react";
import Header from "../Header/Header";

const redirectingData = [
  {
    title: "Hey!",
    link: "/gallery",
    image: "Image placeholder ",
  },
  {
    title: "Hey!",
    link: "/faq",
    image: "Image placeholder", 
  },
  {
    title: "Hey!",
    link: "/humans",
    image: "Image placeholder", 
  },
];

interface RedirectCardsProps {
  title: string;
  link: string;
  image: string;
}

const RedirectingCard = ({ title, link, image }: RedirectCardsProps) => {
  return (
    <a href={link} className="block">
      <div
        className="rounded-[22px] flex flex-col items-center justify-center p-[16px] shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 neon-card"
        style={{
          background: "rgba(7, 190, 210, 0.1)",
          border: "2px solid rgba(61, 214, 31, 0.8)",
          boxShadow:
            "0 0 15px rgba(61, 214, 31, 0.8), 0 0 30px rgba(61, 214, 31, 0.5)",
        }}
      >
        <div className="w-24 sm:w-36 lg:w-48 rounded-full bg-gray-300 flex items-center justify-center text-center text-white font-semibold">
          <span>{image}</span> 
        </div>
        <div
          className="text-white text-base sm:text-xl lg:text-[40px] font-bold mt-4 neon-text"
          style={{
            textShadow:
              "0 0 10px rgba(61, 214, 31, 0.8), 0 0 20px rgba(61, 214, 31, 0.6)",
          }}
        >
          {title} 
        </div>
      </div>
    </a>
  );
};

const YetToBeDisclosed: React.FC = () => {
  return (
    <div className="relative  flex items-center justify-center px-4 sm:px-8 py-16 lg:py-20">
      <div
        className="relative w-full max-w-[900px] mx-auto border-2 sm:border-4 border-dashed rounded-lg p-4 sm:p-8 lg:p-12 neon-border"
        style={{
          borderColor: "rgba(61, 214, 31, 0.8)",
          boxShadow:
            "0 0 10px rgba(61, 214, 31, 0.8), 0 0 20px rgba(61, 214, 31, 0.6)",
        }}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="w-full flex justify-center">
            <h2 className="text-[1.5rem] md:text-[2em] font-bold text-center my-[2rem] md:my-[4rem] text-[#e9e4e0]">
              <Header text="Yet to disclose" />
            </h2>
          </div>
          <div className="text-supporting-mediumGray text-sm sm:text-base lg:text-[24px] font-medium text-center leading-snug">
            These details are not yet disclosed, so stay sharp.
          </div>
          <div className="text-white text-lg sm:text-xl lg:text-[32px] font-bold">
            Meanwhile,
          </div>
          <div className="text-supporting-mediumGray text-sm sm:text-base lg:text-[24px] mb-6 lg:mb-10 font-medium text-center">
            Why don&apos;t you check these out!
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-[44px]">
            {redirectingData.map((data, _id) => (
              <RedirectingCard
                key={_id}
                title={data.title}
                link={data.link}
                image={data.image}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes gradientChange {
          0% {
            background: linear-gradient(45deg, #00ff00, #66ff33);
          }
          25% {
            background: linear-gradient(45deg, #66ff33, #33cc33);
          }
          50% {
            background: linear-gradient(45deg, #33cc33, #009900);
          }
          75% {
            background: linear-gradient(45deg, #009900, #66ff33);
          }
          100% {
            background: linear-gradient(45deg, #66ff33, #00ff00);
          }
        }

        .neon-card {
          animation: gradientChange 5s ease-in-out infinite, pulse 2s infinite;
        }

        .neon-text:hover {
          color: #3dd61f;
          text-shadow: 0 0 15px rgba(61, 214, 31, 0.8), 0 0 30px rgba(61, 214, 31, 0.6);
        }

        @media (max-width: 640px) {
          .neon-card {
            width: 120px; /* Adjust width for mobile */
            height: 120px; /* Adjust height for mobile */
          }

          .neon-card div {
            width: 60px; /* Adjust image placeholder size for mobile */
            height: 60px;
            font-size: 10px; /* Adjust font size for mobile */
          }

          .neon-text {
            font-size: 12px; /* Adjust text size for mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default YetToBeDisclosed;
