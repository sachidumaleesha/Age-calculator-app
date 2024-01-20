import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f0f0f0] flex justify-center items-center h-screen w-full">
      <div className="bg-white max-w-[700px] w-full rounded-2xl rounded-br-[150px] p-10 m-20 flex flex-col gap-4">

        {/* First */}
        <div className="flex gap-5">
          <div>
            <p className="font-mono font-semibold text-lg uppercase tracking-widest text-[#716f6f]">Day</p>
            <input type="text" className="border rounded-md w-32 h-12 mt-2 p-4 text-3xl font-bold focus:outline-[#854dff]" placeholder="DD"/>
          </div>
          <div>
            <p className="font-mono font-semibold text-lg uppercase tracking-widest text-[#716f6f]">Month</p>
            <input type="text" className="border rounded-md w-32 h-12 mt-2 p-4 text-3xl font-bold focus:outline-[#854dff]" placeholder="MM"/>
          </div>
          <div>
            <p className="font-mono font-semibold text-lg uppercase tracking-widest text-[#716f6f]">Year</p>
            <input type="text" className="border rounded-md w-32 h-12 mt-2 p-4 text-3xl font-bold focus:outline-[#854dff]" placeholder="YYYY"/>
          </div>
        </div>

        {/* Middle */}
        <div className="flex justify-between items-center">
          <hr className="grow"/>
          <Image src='/assets/images/icon-arrow.svg' width={70} height={70} alt="icon-arrow" className="bg-[#854dff] rounded-full p-5"/>
          <hr className="grow md:hidden"/>
        </div>

        {/* Last */}
        <div>
          <div className="flex items-center gap-2">
            <p className="text-7xl font-bold italic text-[#854dff]">--</p>
            <p className="text-7xl font-bold italic">years</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-7xl font-bold italic text-[#854dff]">--</p>
            <p className="text-7xl font-bold italic">months</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-7xl font-bold italic text-[#854dff]">--</p>
            <p className="text-7xl font-bold italic">days</p>
          </div>
        </div>
      </div>
    </main>
  );
}
