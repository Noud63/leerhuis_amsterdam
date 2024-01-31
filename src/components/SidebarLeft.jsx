import scroll from "../utils/scroll";

const SidebarLeft = () => {

  const scrolled = scroll()

  return (
    <div className="h-[2000px] w-[130px] absolute top-0 left-0 border-r border-black max-calendar:hidden">
      <div
        className={`${
          scrolled
            ? "mt-36 transform ease-in-out duration-1000 delay-200"
            : "mt-44 transform ease-in-out duration-1000 delay-100"
        } w-full mb-28 flex justify-center items-center flex-col gap-16`}
      >
        <div className="w-[100px] flex justify-center">
          <button
            type="button"
            className="w-[190px] bg-black p-1 text-[#000] rounded-full"
          >
            <div className="bg-[#000] rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
              over ons
            </div>
          </button>
        </div>

        <div className="w-[100px] flex justify-center">
          <button
            type="button"
            className="w-[190px] bg-black p-1 text-[#000] rounded-full"
          >
            <div className="bg-[#000] rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
              contact
            </div>
          </button>
        </div>

        <div className="w-[100px] flex justify-center">
          <button
            type="button"
            className="w-[190px] bg-black p-1 text-[#000] rounded-full"
          >
            <div className="bg-[#000] rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
              beeld
            </div>
          </button>
        </div>

        <div className="w-[100px] flex justify-center">
          <button
            type="button"
            className="w-[190px] bg-black p-1 text-[#000] rounded-full"
          >
            <div className="bg-[#000] rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53]">
              activiteit
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}

export default SidebarLeft
