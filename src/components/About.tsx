import React from "react";
import Image from "next/image";

const About = () => {
    return(
        <div id="about" className="w-full h-screen flex flex-col  justify-center py-24 bg-[#00535c]">
            <div className="w-full flex items-center justify-center">
                <p className="text-white md:text-4xl font-extrabold text-2xl mb-10">About</p>
            </div>
            <div className="md:max-w-[1240px] md:m-auto md:grid md:grid-cols-3 gap-8 grid-cols-1 justify-center px-6 ">
                <div className="col-span-2">
                    <p className="text-white md:text-xl text-sm mb-5">
                        Solution-driven Software developer adept at contributing to a highly collaborative work environment,
                        finding solutions and determining customer satisfaction. Proven experience developing consumer-focused
                        websites using HTML, CSS, Reactjs,Nextjs and TypeScript. Built products for desktop and mobile app users
                        over 2+ years, meeting highest standards for web design, user experience, best practices and speed. Designed
                        and developed web applications across multiple APIs, third-party integrations and databases.
                    </p>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <Image src="/passport.jpeg" alt="bg_img" width={300} quality="100" height={300} />
                </div>
            </div>
        </div>
    )
}

export default About;