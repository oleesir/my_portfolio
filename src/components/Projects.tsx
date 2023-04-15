import React from "react";
import Image from "next/image";


const Projects = () => {
    return(
        <div id="projects" className="w-full md:h-screen flex flex-col items-center py-24 bg-[#F4F9F9]">
            <div className="w-full flex items-center justify-center">
                <p className="text-black md:text-4xl font-extrabold text-2xl mb-10">Projects</p>
            </div>

            <div className="max-w-[1240px] m-auto px-6">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="col-span-1">
                        <div className="h-32 md:h-full  w-full relative cursor-pointer">
                            <Image src="/eco.png" alt="bg_img"  layout='fill'
                                   objectFit='contain' />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <div className="w-full flex flex-col pt-2">
                            <p className="text-black md:text-2xl mb-3 font-extrabold">Lorem ipsum</p>
                            <p className="text-gray-600 text-sm md:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            </p>
                        </div>

                    </div>
                </div>

                <div className="w-full md:grid grid-cols-3 gap-4 mb-10">
                    <div className="col-span-1">
                        <div className="h-32 md:h-full w-full relative cursor-pointer">
                            <Image src="/eco.png" alt="bg_img"  layout='fill'
                                   objectFit='contain' />
                        </div>
                    </div>

                    <div className=" md:col-span-2">
                        <div className="w-full flex flex-col pt-2">
                            <p className="text-black md:text-2xl mb-3 font-extrabold">Lorem ipsum</p>
                            <p className="text-gray-600 text-sm md:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:grid grid-cols-3 gap-4 mb-10">
                    <div className="col-span-1">
                        <div className="h-32 md:h-full w-full relative cursor-pointer">
                            <Image src="/eco.png" alt="bg_img"  layout='fill'
                                   objectFit='contain' />
                        </div>
                    </div>

                    <div className=" md:col-span-2">
                        <div className="w-full flex flex-col pt-2">
                            <p className="text-black md:text-2xl mb-3 font-extrabold">Lorem ipsum</p>
                            <p className="text-gray-600 text-sm md:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;