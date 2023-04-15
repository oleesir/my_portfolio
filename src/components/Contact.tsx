import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactInputs } from "@/types";
import { contactSchema } from "@/schema/contactSchema";

const Contact = () => {
    const {
        handleSubmit,register,
        formState: { errors, isDirty, isValid }
    } = useForm<ContactInputs>({ resolver: yupResolver(contactSchema) });

    return(
        <div id="contact" className="w-full md:h-screen py-12 md:py-24 flex flex-col items-center bg-[#00535c]">
            <div className="w-full mb-3 px-6 flex flex-col justify-center items-center">
                <p className="text-white md:text-4xl font-extrabold text-2xl mb-2">Contact</p>
                <p className="text-white text-sm md:text-xl">Feel free to Contact me.I will get back to you as soon as possible.</p>
            </div>

            <div className="md:w-[55%]  w-full px-6">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full border bg-[#FFF] rounded-md p-8">
                            <form className="flex flex-col">
                                <div className="mb-4">
                                    <label className="text-gray-700 mb-5">Name</label>
                                    <input type="text" {...register("name")} className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none "/>
                                    <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.name?.message}</span></div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-700 mb-5">Email</label>
                                    <input type="email" {...register("email")}  className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none"/>
                                    <div className="h-1"> <span className="text-xs text-[#FF0303]">{errors.email?.message}</span></div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-700 mb-5">Message</label>
                                    <textarea {...register("message")} className="w-full bg-gray-100 text-gray-500 outline-none h-52 p-5"></textarea>
                                    <div className="h-1"><span className="text-xs text-[#FF0303]"> {errors.message?.message}</span></div>
                                </div>

                                <div className="w-full mt-2 flex items-center">
                                    <button
                                        type="submit"
                                        disabled={!isDirty || !isValid}
                                        className={!isDirty || !isValid ? "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff] focus:outline-none disabled:opacity-25" : "w-full inline-block rounded bg-primary-accent-200 px-5 py-3  text-medium font-medium bg-[#224559] leading-normal text-[#fff]"}>
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contact;


