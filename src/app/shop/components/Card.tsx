const Card = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-zinc-700 rounded-lg h-44 ${className}`}>
      <div className="p-4">
        <h3 className="text-white font-bold text-xl">Card title</h3>
        <p className="text-white">Some text</p>
      </div>
    </div>
  );
};

export default Card;
