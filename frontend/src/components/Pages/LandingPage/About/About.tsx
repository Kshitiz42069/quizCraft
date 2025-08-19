import { ArrowDownLeftIcon, BookmarkSquareIcon, BookOpenIcon, UsersIcon } from "@heroicons/react/24/outline"


function About() {
  return (
    <div className="w-full flex flex-col gap-[4rem] items-center p-[4rem]  bg-gradient-to-br from-[#6479EF] via-[#C180E4] to-[#C0BDEB]">
        <h1 className="text-5xl text-white font-bold">About <span className=" text-[#F9D264]">QuizCraft</span></h1>
        <p className="text-xl text-center text-white w-[50rem]">QuizCraft was born from a simple belief: every competitive exam aspirant deserves access to high-quality General Knowledge and General Studies practice materials. We're committed to making exam preparation more accessible, effective, and engaging for students across India.</p>
        {/* cards */}
        <div className=" grid grid-cols-2 gap-8 items-stretch px-20">
            <div className="flex justify-items-start items-start gap-[1rem] bg-gradient-to-bl from-white/50 via-[#C1B9EA] to-white/30 px-[1rem] py-[1.5rem] rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <ArrowDownLeftIcon className="w-20 h-10 text-[#5A78F2] rounded-xl p-2 bg-blue-100"/>
                <p className="flex flex-col"><span className="text-2xl font-bold">Our Mission</span><span className="text-lg text-gray-500">To democratize competitive exam preparation by providing quality GK and GS practice materials to every aspirant, regardless of their background.</span></p>
            </div>
            <div className="flex justify-items-start items-start gap-[1rem] bg-gradient-to-bl from-white/50 via-[#C1B9EA] to-white/30 px-[1rem] py-[1.5rem] rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <UsersIcon className="w-20 h-10 text-[#5A78F2] rounded-xl p-2 bg-blue-100"/>
                <p className="flex flex-col"><span className="text-2xl font-bold">Our Community</span><span className="text-lg text-gray-500">Serving over 50,000+ aspirants across India who trust QuizCraft for their daily practice and exam preparation needs.</span></p>
            </div>
            <div className="flex justify-items-start items-start gap-[1rem] bg-gradient-to-bl from-white/50 via-[#C1B9EA] to-white/30 px-[1rem] py-[1.5rem] rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <BookmarkSquareIcon className="w-20 h-10 text-[#5A78F2] rounded-xl p-2 bg-blue-100"/>
                <p className="flex flex-col"><span className="text-2xl font-bold">Our Success</span><span className="text-lg text-gray-500">Proud to have contributed to 5,000+ successful selections in various competitive exams across different sectors.</span></p>
            </div>
            <div className="flex justify-items-start items-start gap-[1rem] bg-gradient-to-bl from-white/50 via-[#C1B9EA] to-white/30 px-[1rem] py-[1.5rem] rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
                <BookOpenIcon className="w-20 h-10 text-[#5A78F2] rounded-xl p-2 bg-blue-100"/>
                <p className="flex flex-col"><span className="text-2xl font-bold">Our Content</span><span className="text-lg text-gray-500">Curated by experts with extensive experience in competitive exams, ensuring relevant and up-to-date question quality.</span></p>
            </div>
        </div>
    </div>
  )
}

export default About