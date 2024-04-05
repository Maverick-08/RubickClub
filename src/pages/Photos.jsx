import React, { useState } from "react";
import img1 from "../../public/images/img1.png";
import img2 from "../../public/images/img2.png";
import img3 from "../../public/images/img3.png";
import img4 from "../../public/images/img4.png";
import img5 from "../../public/images/img5.png";
import img6 from "../../public/images/img6.png";
import img7 from "../../public/images/img7.png";
import img8 from "../../public/images/img8.png";
import img9 from "../../public/images/img9.png";
import img10 from "../../public/images/img10.png";

export function Photos() {
  let [imgArray, setImgArray] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ]);

  let [currentImage,setCurrentImage] = useState(imgArray[0]);

  function nextImage() {
    setImgArray(function(imgArray){
        let prevImage = imgArray.shift();
        imgArray.push(prevImage)

        return imgArray;
    });
    setCurrentImage(() => imgArray[0]);
  }

  function prevImage() {
    setImgArray((imgArray) => {
      let nextImage = imgArray.pop();
      imgArray.unshift(nextImage);

      return imgArray;
    });
    setCurrentImage(() => imgArray[0]);
  }
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center flex-col gap-2">
      {/* PAGE HEADING  */}
      <div className="text-sky-500 text-6xl font-medium mt-2">Photos Section</div>

      {/* IMAGE */}
      <div className="shadow-[-1px_0px_16px_7px_#68d391] mt-8 mb-4 p-4 rounded-xl">
        <img
          src={currentImage}
          style={{ height: "530px", width: "520px", borderRadius: "32px" }}
        />
      </div>

      {/* BUTTON  */}
      <div className="w-[15%] text-teal-700 flex flex-row justify-between cursor-pointer">
        <div onClick={prevImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div onClick={nextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
