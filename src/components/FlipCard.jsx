const FlipCard = ({ front, back }) => {
  return (
    <div className="group w-full h-36 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute w-full h-full bg-white border border-sky-200 text-sky-700 rounded-xl flex items-center justify-center text-lg font-semibold backface-hidden shadow-md">
          {front}
        </div>
        {/* Back */}
        <div className="absolute w-full h-full bg-sky-50 text-sky-800 rounded-xl flex items-center justify-center text-lg font-semibold [transform:rotateY(180deg)] backface-hidden shadow-md">
          {back}
        </div>
      </div>
    </div>
  );
};
export default FlipCard;