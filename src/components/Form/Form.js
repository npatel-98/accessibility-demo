import React from 'react'

function Form() {
    return (
        <div className="container mx-auto">
            <div className="relative z-10 lg:flex">
                <div className=" text-center lg:mb-0 lg:w-1/3 lg:pr-10 lg:text-left mb-6">
                    <h3 className=" text-blue-400 sm:mb-4 font-semibold text-[20px]">Get In Touch</h3>
                    <h4 className=" sm:text-lg sm:leading-9 lg:text-[40px] lg:leading-[50px] font-semibold">Ready To Get Started?</h4>
                    <img src="https://html.plurk.sbthemes.com/assets/images/form-img.png" width={330} height={271} className="mx-auto" alt='form side ' />
                </div>
                <form className=" rounded-3xl bg-slate-100 px-4 py-12 lg:w-2/3 lg:px-8">
                    <div className="grid gap-10 sm:grid-cols-2">
                        <div className="relative">
                            <label for="name" className=" absolute -top-3 bg-slate-100 px-2 text-gray-500 font-semibold left-6">Full Name</label>
                            <input type="text" id='name' name="name" className="w-full rounded-2xl border-2 border-gray-400 bg-transparent p-4 font-normal outline-none transition focus:border-blue-400" />
                        </div>
                        <div className="relative">
                            <label for="email" className=" absolute -top-3 bg-slate-100 px-2 text-gray-500 font-semibold left-6">Email</label>
                            <input type="email" id="email" name="email" className="w-full rounded-2xl border-2 border-gray-400 bg-transparent p-4 font-normal outline-none transition focus:border-blue-400" />
                        </div>
                        <div className="relative">
                            <label for="number" className=" absolute -top-3 bg-slate-100 px-2 text-gray-500 font-semibold left-6">Mobile Number</label>
                            <input type="number" id="number" name="number" className="w-full rounded-2xl border-2 border-gray-400 bg-transparent p-4 font-normal outline-none transition focus:border-blue-400" />
                        </div>
                        <div className="relative">
                            <label for="city" className=" absolute -top-3 bg-slate-100 px-2 text-gray-500 font-semibold left-6">City</label>
                            <input type="text" id="city" name="city" className="w-full rounded-2xl border-2 border-gray-400 bg-transparent p-4 font-normal outline-none transition focus:border-blue-400" />
                        </div>
                    </div>
                    <div className="relative mt-10">
                        <label for="message" className=" absolute -top-3 bg-slate-100 px-2 text-gray-500 font-semibold left-6">Message</label>
                        <input type="text" id="message" name="message" className="w-full rounded-2xl border-2 border-gray-400 bg-transparent p-4 font-normal outline-none transition focus:border-blue-400" />
                    </div>
                    <div className="mt-10 text-center lg:text-right">
                        <button type="button" className=" bg-gray-400 px-12 py-3 rounded-lg text-white hover:text-black" >Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form