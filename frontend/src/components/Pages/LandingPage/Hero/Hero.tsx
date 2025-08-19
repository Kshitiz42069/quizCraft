

function Hero() {
  return (
    <div className="w-full h-[92vh] flex gap-[4rem] items-center p-[1rem]  bg-gradient-to-br from-[#6479EF] via-[#C180E4] to-[#C0BDEB]">
        {/* left */}
        <div className="w-1/2 py-[2rem]">
            <h1 className="text-6xl text-white font-bold">Master Competetive Exams with</h1>
            <h1 className="text-6xl text-[#F9D264] font-bold">AI-Powered GK & GS Practice</h1>
            <p className="text-white text-2xl font-light mr-[1rem] my-[2rem] tracking-wide">
                Boost your general knowledge and general studies preparation with personalized quizzes, real-time performance tracking, and adaptive learning for all competetive exams.
            </p>
            {/* buttons */}
            <div className="flex gap-[2rem]">
                <button className="hero-button hover:scale-105 ease-in-out transition duration-300">Start Free practice</button>
                <button className="hero-button hover:scale-105 ease-in-out transition duration-300">View Demo Quiz</button>
            </div>
            {/* stats */}
            <div className="text-2xl text-white flex justify-around my-[3rem]">
                <p>10K+ <span>Active Users</span></p>
                <p>50K+ <span>Questions</span></p>
                <p>95% <span>Success Rates</span></p>
            </div>
        </div>
        {/* right */}
        <div className="relative w-[50%] bg-gradient-to-bl from-white/50 via-[#C1B9EA] to-white/30 flex flex-col justify-center items-center py-[2rem] rounded-2xl">
            {/* Sample Question */}
            <div className="flex flex-col gap-[1rem]">
                <p className="text-xl font-bold text-center">Today's Challenge</p>
                <p className="text-md font-light text-center">General Knowledge Quiz</p>
                <div className=" bg-[#E5DDF4] flex flex-col justify-start p-[1rem] w-[40rem] rounded-2xl">
                    <p className="text-xl my-[1rem]">Which Indian state has the longest coastline?</p>
                    <label className=" p-[0.3rem] hover:bg-white/50 rounded-xl flex gap-[0.5rem]"><input  type="radio" name="coastline" value={"Gujrat"} />Gujrat</label>
                    <label className=" p-[0.3rem] hover:bg-white/50 rounded-xl flex gap-[0.5rem]"><input type="radio" name="coastline" value={"Tamil Nadu"} />Tamil Nadu</label>
                    <label className=" p-[0.3rem] hover:bg-white/50 rounded-xl flex gap-[0.5rem]"><input type="radio" name="coastline" value={"Maharashtra"} />Maharashtra</label>
                    <label className=" p-[0.3rem] hover:bg-white/50 rounded-xl flex gap-[0.5rem]"><input type="radio" name="coastline" value={"Kerala"} />Kerala</label>
                </div>
                <div className="flex justify-between text-blue-700">
                    <p>Question 1 of 20</p>
                    <p>Score 800/1000</p>
                </div>
            </div>
            {/* floating elements */}
            <div className="absolute top-[-20px] right-[-10px] floatY">
                <p className="bg-white/90 px-[2rem] py-[0.8rem] rounded-xl">AI Genrated</p>
            </div>
            <div className="absolute bottom-0 left-0 floatY">
                <p className="bg-white/90 px-[2rem] py-[0.8rem] rounded-xl">Performance Tracking</p>
            </div>
        </div>
    </div>
  )
}

export default Hero