import scroll from "../utils/scroll";

const SidebarLeft = () => {

  const scrolled = scroll()

  return (
    <div className="h-[2100px] w-[130px] absolute top-0 left-0 border-r border-black max-calendar:hidden">
      <div
        className={`${
          scrolled
            ? "mt-32  transform ease-in-out duration-1000 delay-200"
            : "mt-44  transform ease-in-out duration-1000 delay-100"
        } w-full mb-28 flex justify-center items-center flex-col gap-16`}
      >
        <div className="menu_btn w-[100px] h-[40px] bg-black text-md mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          over ons
        </div>
        <div className="menu_btn w-[100px] h-[40px] bg-black text-md mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          contact
        </div>
        <div className="menu_btn w-[100px] h-[40px] bg-black text-md mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          beeld
        </div>
        <div className="menu_btn w-[100px] h-[40px] bg-black text-md mix-blend-darken text-[#ef8b39] rounded-full flex justify-center items-center">
          activiteiten
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft
