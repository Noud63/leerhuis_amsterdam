import scroll from "../utils/scroll";

const SidebarLeft = () => {

  const scrolled = scroll()

  return (
    <div className="w-[150px] max-calendar:hidden overflow-visible relative">
      <div className="w-full absolute h-auto top-0 border-r border-black">
        <div
          className={`${
            scrolled
              ? "mt-32 transform ease-in-out duration-1000"
              : "mt-44 transform ease-in-out duration-1000"
          } w-full mb-28 flex justify-start items-center flex-col gap-16`}
        >
          <div className="w-[100px] flex justify-center">
            <button
              type="button"
              className="w-[190px] bg-slate-800 p-1 text-[#000] rounded-full cursor-pointer"
            >
              <div className="bg-black rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
                over ons
              </div>
            </button>
          </div>

          <div className="w-[100px] flex justify-center">
            <button
              type="button"
              className="w-[190px] bg-black p-1 text-[#000] rounded-full cursor-pointer"
            >
              <div className="bg-[#000] rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
                contact
              </div>
            </button>
          </div>

          <div className="w-[100px] flex justify-center">
            <button
              type="button"
              className="w-[190px] bg-black p-1 text-[#000] rounded-full cursor-pointer"
            >
              <div className="bg-[#000] rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
                activiteit
              </div>
            </button>
          </div>

          <div className="w-[100px] flex justify-center">
            <button
              type="button"
              className="w-[190px] bg-black p-1 text-[#000] rounded-full cursor-pointer"
            >
              <div className="bg-[#000] rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
                archief
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft
