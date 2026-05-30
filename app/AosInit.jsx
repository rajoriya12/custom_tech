// 'use client';

// import { useEffect } from "react";

// export default function AnimationProvider() {

//   useEffect(() => {

//     const elements = document.querySelectorAll(
//       ".animate-left, .animate-right, .animate-up"
//     );

//     const observer = new IntersectionObserver(

//       (entries) => {

//         entries.forEach((entry) => {

//           if (entry.isIntersecting) {
//             entry.target.classList.add("show-animation");
//           }

//         });

//       },

//       {
//         threshold: 0.15,
//       }

//     );

//     elements.forEach((el) => observer.observe(el));

//   }, []);

//   return null;
// }