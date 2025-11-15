// import { Repeat2 } from "lucide-react";

// const FlipCard = ({ front, back }) => {
//   return (
//     <div className="group w-full h-36 [perspective:1000px]">
//       <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

//         {/* FRONT */}
//         <div className="absolute w-full h-full bg-white border border-sky-200 text-sky-700 rounded-xl flex items-center justify-center text-lg font-semibold backface-hidden shadow-md">
//           {front}

//           {/* Bottom-left flip arrow - FRONT */}
//           <div
//             className="absolute bottom-2 left-2 text-sky-400 group-hover:text-sky-600
//                        transition duration-500 ease-in-out transform origin-center
//                        group-hover:rotate-180"
//             aria-hidden="true"
//           >
//             <Repeat2 size={20} />
//           </div>
//         </div>

//         {/* BACK */}
//         <div className="absolute w-full h-full bg-sky-50 text-sky-800 rounded-xl flex items-center justify-center text-lg font-semibold [transform:rotateY(180deg)] backface-hidden shadow-md">
//           {back}

//           {/* Bottom-left flip arrow - BACK */}
//           <div
//             className="absolute bottom-2 left-2 text-sky-500 group-hover:text-sky-700
//                        transition duration-500 ease-in-out transform origin-center
//                        rotate-180 group-hover:rotate-[360deg]"
//             aria-hidden="true"
//           >
//             <Repeat2 size={20} />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FlipCard;







import { Repeat2 } from "lucide-react";

const FlipCard = ({ front, back }) => {
  return (
    <div className="group w-full h-36 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT */}
        <div className="absolute w-full h-full bg-white dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-sky-400 rounded-xl flex items-center justify-center text-lg font-semibold backface-hidden shadow-md">
          {front}

          {/* Bottom-left flip arrow - FRONT */}
          <div
            className="absolute bottom-2 left-2 text-sky-400 dark:text-sky-500 group-hover:text-sky-600 dark:group-hover:text-sky-300
                       transition duration-500 ease-in-out transform origin-center
                       group-hover:rotate-180"
            aria-hidden="true"
          >
            <Repeat2 size={20} />
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full bg-sky-50 dark:bg-slate-700 text-sky-800 dark:text-sky-300 rounded-xl flex items-center justify-center text-lg font-semibold [transform:rotateY(180deg)] backface-hidden shadow-md">
          {back}

          {/* Bottom-left flip arrow - BACK */}
          <div
            className="absolute bottom-2 left-2 text-sky-500 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300
                       transition duration-500 ease-in-out transform origin-center
                       rotate-180 group-hover:rotate-[360deg]"
            aria-hidden="true"
          >
            <Repeat2 size={20} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;