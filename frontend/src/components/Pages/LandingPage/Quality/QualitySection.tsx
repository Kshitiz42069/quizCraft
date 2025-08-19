import { ArrowTrendingUpIcon, BookOpenIcon, TrophyIcon } from "@heroicons/react/24/outline"



function QualitySection() {
  return (
    <div className="bg-[#F3F5FB] p-[5rem] flex flex-col justify-center items-center gap-[1.5rem]">
        <h1 className="text-4xl font-bold">Quality <span className="text-[#C381E4]">Practice Questions</span></h1>
        <p className="text-xl text-gray-500 w-[40rem] text-center">Browse Through our carefully curated collection of GK and GS questions designed to help you excel in competitive examinations.</p>
        {/* cards */}
        <div className="flex justify-center items-stretch my-[2rem] gap-[3rem]">
            <div className="bg-white p-[1.5rem] flex flex-col justify-between gap-[1rem] flex-1 flex-wrap rounded-2xl hover:shadow-[0_4px_20px_0_#C381E4]">
                <p className="flex justify-between"><span className=" text-sm border-[1px] px-2 rounded-2xl text-white bg-[#C381E4]">Science</span><span className="text-sm border-[1px] px-2 rounded-2xl text-green-500">Easy</span></p>
                <p className=" font-bold">Which gas do humans inhale from the air that is essential for survival?</p>
                <p className=" border-[1px] p-2 rounded-xl border-[#5A78F2] text-[#5A78F2] bg-gray-100">Answers: Oxygen (O₂)</p>
            </div>
            <div className="bg-white p-[1.5rem] flex flex-col justify-between  gap-[1rem] flex-1 flex-wrap rounded-2xl hover:shadow-[0_4px_20px_0_#C381E4]">
                <p className="flex justify-between"><span className=" text-sm border-[1px] px-2 rounded-2xl text-white bg-[#C381E4]">History</span><span className="text-sm border-[1px] px-2 rounded-2xl text-orange-500">Medium</span></p>
                <p className=" font-bold">Who was the first woman judge of the Supreme Court of India?</p>
                <p className=" border-[1px] p-2 rounded-xl border-[#5A78F2] text-[#5A78F2] bg-gray-100">Answers: Justice M. Fathima Beevi</p>
            </div>
            <div className="bg-white p-[1.5rem] flex flex-col gap-[1rem] flex-1 flex-wrap rounded-2xl hover:shadow-[0_4px_20px_0_#C381E4]">
                <p className="flex justify-between"><span className=" text-sm border-[1px] px-2 rounded-2xl text-white bg-[#C381E4]">Geography</span><span className="text-sm border-[1px] px-2 rounded-2xl text-red-500">Hard</span></p>
                <p className=" font-bold">Which is the only river in India that flows westwards and forms an estuary, not a delta?</p>
                <p className=" border-[1px] p-2 rounded-xl border-[#5A78F2] text-[#5A78F2] bg-gray-100">Answers: Narmada River</p>
            </div>
        </div>
        {/* quality progress features */}
        <div className="w-full flex justify-around items-center ">
            <div className="flex-1 flex flex-col justify-center items-center gap-[0.5rem]">
                <BookOpenIcon className="w-13 text-[#5A78F2] rounded-full p-2 bg-blue-100"/>
                <p className=" font-bold">Quality Questions</p>
                <p className="text-gray-500">Curated by experts with detailed explanations</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-[0.5rem]">
                <TrophyIcon className="w-13 text-[#5A78F2] rounded-full p-2 bg-blue-100"/>
                <p className=" font-bold">Quality Questions</p>
                <p className="text-gray-500">Curated by experts with detailed explanations</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-[0.5rem]">
                <ArrowTrendingUpIcon className="w-13 text-[#5A78F2] rounded-full p-2 bg-blue-100"/>
                <p className=" font-bold">Quality Questions</p>
                <p className="text-gray-500">Curated by experts with detailed explanations</p>
            </div>
        </div>
    </div>
  )
}

export default QualitySection