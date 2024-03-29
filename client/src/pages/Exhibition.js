import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap, Power3 } from "gsap";
import Navigation from "../components/Navigation";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/" />
      <LandingComponent />
    </motion.div>
  );
}

function LandingComponent() {
  // gsap anim
  let title1 = useRef(null);
  let title2 = useRef(null);
  let title3 = useRef(null);
  let subtitle1 = useRef(null);
  let subtitle2 = useRef(null);
  let subtitle3 = useRef(null);

  useEffect(() => {
    gsap.to(title1, 2, {
      delay: 0,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(title2, 2, {
      delay: 0.2,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(title3, 2, {
      delay: 0.4,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  const text1EnterAnim = () => {
    gsap.to(subtitle1, 1, {
      delay: 0.2,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  };

  const text1ExitAnim = () => {
    gsap.to(subtitle1, 1, {
      delay: 0.2,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
  };

  const text2EnterAnim = () => {
    gsap.to(subtitle2, 1, {
      delay: 0.2,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  };

  const text2ExitAnim = () => {
    gsap.to(subtitle2, 1, {
      delay: 0.2,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
  };
  const text3EnterAnim = () => {
    gsap.to(subtitle3, 1, {
      delay: 0.2,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  };

  const text3ExitAnim = () => {
    gsap.to(subtitle3, 1, {
      delay: 0.2,
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex h-screen w-full max-w-screen-2xl">
        <div className="row-end flex flex-grow justify-end lg:justify-between mb-40 items-end pr-5 2xl:pr-0">
          <div className="hidden lg:flex max-w-screen-sm text-lg">
            <p
              className="absolute bottom-40 text-4xl opacity-0 text-gray-600"
              ref={(el) => {
                subtitle1 = el;
              }}
            >
              รู้จักที่มาที่ไปของนพลักษณ์ <br />
              และทำความเข้าใจว่าทำไมเราถึงต้องเรียนรู้เกี่ยวกับมัน
            </p>
            <p
              className="absolute bottom-40 text-4xl opacity-0 text-gray-600"
              ref={(el) => {
                subtitle2 = el;
              }}
            >
              เลือกการ์ดที่ตรงกับคุณมากที่สุดเพื่อนำไปสู่ลักษณ์นั้น <br />
              ยังไงก็ตามเราแนะนำให้อ่านมากกว่าหนึ่งลักษณ์ <br />
              เพราะแบบทดสอบไม่ใช่ตัวตัดสินทุกอย่าง <br />
            </p>
            <p
              className="absolute bottom-40 text-4xl opacity-0 text-gray-600"
              ref={(el) => {
                subtitle3 = el;
              }}
            >
              ต่อจากนี้จะเป็นการพูดคุยระหว่างเราที่ยาวสักหน่อย <br />
              เมื่อเข้าใจลักษณ์ของตัวเองแล้วอย่าลืมมาแลกเปลี่ยนกันหน้านี้นะครับ
            </p>
          </div>
          <div className="flex flex-col font-medium text-right text-3xl space-y-8">
            <Link
              to="/Exhibition/Stereotype"
              onMouseEnter={() => {
                text1EnterAnim();
              }}
              onMouseLeave={() => {
                text1ExitAnim();
              }}
              ref={(el) => {
                title1 = el;
              }}
              className="opacity-0 text-gray-800 hover:text-gray-500 duration-300"
            >
              รู้จักกับนพลักษณ์
            </Link>
            <Link
              to="/Exhibition/Analysis"
              onMouseEnter={() => {
                text2EnterAnim();
              }}
              onMouseLeave={() => {
                text2ExitAnim();
              }}
              ref={(el) => {
                title2 = el;
              }}
              className="opacity-0 text-gray-800 hover:text-gray-500 duration-300"
            >
              แบบทดสอบนพลักษณ์
            </Link>
            <Link
              to="/Problem/"
              onMouseEnter={() => {
                text3EnterAnim();
              }}
              onMouseLeave={() => {
                text3ExitAnim();
              }}
              ref={(el) => {
                title3 = el;
              }}
              className="opacity-0 text-gray-800 hover:text-gray-500 duration-300"
            >
              การแก้ปัญหาด้วยนพลักษณ์
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Exhibition() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="flex justify-center items-center h-screen w-full">
//         <div className="text-center text-gray-800">
//           <h1 className="font-medium text-2xl">Cicada Exhibition</h1>
//           <h6 className="">มดนอนตะแคงเรียกมดตาย</h6>
//           <br />
//           <Link
//             to="/Exhibition/Enneagram"
//             className="cursor-pointer hover:underline"
//           >
//             Enneagram
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Exhibition;
