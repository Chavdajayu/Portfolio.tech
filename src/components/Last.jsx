import React from "react";
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";
import img5 from "../image/5.jpg";
import img6 from "../image/6.jpg";
import img7 from "../image/7.jpg";
import img8 from "../image/8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const rotations = [-6, 4, -3, 5, -4, 6, -2, 3];

const Last = () => {
  return (
    <section className="w-full bg-black py-6 flex justify-center overflow-x-hidden">

      {/* ================= MOBILE ================= */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-2 lg:hidden">

        {/* First 6 images (normal grid) */}
        {images.slice(0, 6).map((img, i) => (
          <div
            key={i}
            className="flex justify-center"
            style={{ transform: `rotate(${rotations[i]}deg)` }}
          >
            <MobileCard img={img} />
          </div>
        ))}

        {/* Last row (centered 2 images) */}
        <div className="col-span-3 flex justify-center gap-6">
          {images.slice(6).map((img, i) => (
            <div
              key={i}
              style={{ transform: `rotate(${rotations[i + 6]}deg)` }}
            >
              <MobileCard img={img} />
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="hidden lg:flex justify-center">
        <div className="relative flex items-center -space-x-10">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative transition hover:-translate-y-2 hover:scale-105"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
            >
              <div className="w-[180px] h-[260px] border-4 border-white bg-black overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

/* ================= CARD ================= */
const MobileCard = ({ img }) => (
  <div className="w-[110px] sm:w-[130px] h-[170px] sm:h-[200px] border-4 border-white bg-black overflow-hidden shadow-xl">
    <img
      src={img}
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export default Last;
