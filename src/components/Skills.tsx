import React from "react";


const Skills = () => {
    return(
        <div id="skills" className="w-full h-screen flex flex-col items-center bg-[#fff] py-24">

            <div className="w-full flex items-center md:mb-20 mb-10 justify-center">
                <p className="text-black md:text-4xl font-extrabold text-2xl mb-10">Skills</p>
            </div>
                <div className="md:w-[60%] w-full  px-6 ">
                    <div className="flex flex-col w-full mb-5">
                        <p className="mb-4 md:text-xl text-lg">HTML/CSS</p>
                        <div className="w-[100%] bg-[#ddd] rounded-full">
                            <div className="bg-[#002a2e] w-[80%] md:py-[8px] py-[5px] rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mb-5">
                        <p className="mb-4 md:text-xl text-lg">Reactjs</p>
                        <div className="w-[100%] bg-[#ddd] rounded-full">
                            <div className="bg-[#002a2e] w-[90%] md:py-[8px] py-[5px] rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mb-5">
                        <p className="mb-4 md:text-xl text-lg">Nodejs</p>
                        <div className="w-[100%] bg-[#ddd] rounded-full">
                            <div className="bg-[#002a2e] w-[60%] md:py-[8px] py-[5px] rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mb-5">
                        <p className="mb-4 md:text-xl text-lg">JavaScript</p>
                        <div className="w-[100%] bg-[#ddd] rounded-full">
                            <div className="bg-[#002a2e] w-[85%] md:py-[8px] py-[5px] rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mb-5">
                        <p className="mb-4 md:text-xl text-lg">TypeScript</p>
                        <div className="w-[100%] bg-[#ddd] rounded-full">
                            <div className="bg-[#002a2e] w-[85%] md:py-[8px] py-[5px] rounded-full"></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills;