

function Navbar() {
  return (
    <div className="sticky top-0 z-50 h-[8vh] flex justify-between items-center px-[2.5rem] bg-white/80">
        <p className="font-bold text-[#5A78F2] text-3xl">QuizCraft</p>

        {/* authentication buttons */}
        <div className="flex gap-[1rem]">
            <button className="px-[1rem] py-[.5rem] hover:text-[#5A78F2] hover:bg-[#F9D264] rounded-lg cursor-pointer transition-all ease-in-out duration-300">Try Quiz</button>
            <button className="px-[1rem] py-[.5rem] hover:text-[#5A78F2] hover:bg-[#F9D264] rounded-lg cursor-pointer transition-all ease-in-out duration-300">Login</button>
            <button className="px-[1rem] py-[.5rem] bg-[#5A78F2] text-white hover:bg-[#5A78F2]/70 rounded-lg cursor-pointer transition-all ease-in-out duration-300">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar