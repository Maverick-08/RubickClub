import React from "react";
import { Navbar } from "../components/Navbar";
import clubLogo from "../../public/images/clubLogo.png";
import manit from "../../public/images/Manit.png";
import { Link } from "react-router-dom";

export function Home() {
  let mainTagline = "Elevate Your Experience";
  let mainArray = mainTagline.split(" ");

  let subTagline = "Dive into the Vibrant World of MANIT's Cultural Club!";
  let subArray = subTagline.split(" ");
  return (
    <div>
      <div className="w-full bg-black">
        <Navbar page={"Home"} />

        <div className="mt-16 flex justify-center items-center ">
          <div className="w-[80%]  grid grid-cols-3 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <img src={clubLogo} className="col-span-1" />
            <div className="col-span-2 flex flex-col text-center justify-center items-center gap-2">
              <div className="text-slate-400 text-6xl cursor-pointer">
                {mainArray.map((word) => (
                  <span className="hover:text-sky-500 mr-2">{word}</span>
                ))}
              </div>

              <div className="text-3xl text-slate-500 cursor-pointer">
                {subArray.map((word) => (
                  <span className="hover:text-sky-300 mr-2">{word}</span>
                ))}
              </div>

              <div className="w-[80%] mt-8 text-2xl text-sky-400 animate-pulse duration-1000">
                Embark on a journey of cultural exploration and celebration with
                our vibrant college cultural club! Immerse yourself in a diverse
                community of artists, performers, and enthusiasts dedicated to
                showcasing the rich tapestry of global traditions.{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-16 p-16 flex justify-center items-center">
          <div className="w-[80%] grid grid-cols-4 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-8">
            <div className="col-span-1 flex justify-center items-center">
              <img src={manit} style={{ height: "200px", width: "180px" }} />
            </div>
            <div className="col-span-3 flex justify-center items-center flex-col gap-16">
              <div className="text-6xl text-teal-200 text-center !">
                Connect With Us
              </div>

              <div className="w-[80%] flex flex-row justify-around items-center cursor-pointer">
                <div>
                  <Link to="/Photos" className="px-3 py-2 bg-sky-400 text-black text-xl rounded-lg">
                    Photos Gallery
                  </Link>
                </div>

                <div>
                  <Link to="/Photos" className="px-3 py-2 bg-sky-400 text-black text-xl rounded-lg">
                    Videos Gallery
                  </Link>
                </div>
              </div>
              <div className="text-sky-300 w-[70%] flex justify-around items-center text-xl cursor-pointer">
                <div className="flex flex-row gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  X
                </div>
                <div className="flex flex-row gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  Instagram
                </div>
                <div className="flex flex-row gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  LinkedIn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
