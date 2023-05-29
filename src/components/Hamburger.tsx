const Hamburger = () => {
  return (
    <button className="flex items-center justify-center w-6 h-6 bg-transparent">
      <div className="flex flex-col justify-between w-5 h-[14px]">
        <span className="w-full h-[2px] bg-white rounded-lg"></span>
        <span className="w-full h-[2px] bg-white rounded-lg"></span>
        <span className="w-full h-[2px] bg-white rounded-lg"></span>
      </div>
    </button>
  );
};

export default Hamburger;
