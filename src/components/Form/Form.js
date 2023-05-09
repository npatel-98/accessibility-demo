import React from 'react'

function Form() {
    return (
        <section id='support' className=' py-16'>
            {/* title */}
            <div className='container mx-auto'>
                <div className='mx-auto mb-10 max-w-[690px] text-center'>
                    <h2 className='mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight'>Let's Stay Connected</h2>
                    <p className='text-base text-slate-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
                        ante in maximus.</p>
                </div>
            </div>
            {/* Form */}
            <div className='container mx-auto'>
                <div className='mx-auto w-full max-w-[925px] rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card sm:px-10'>
                    <form>
                        <div className='-mx-[22px] flex flex-wrap'>
                            <div className='w-full px-[22px] md:w-1/2'>
                                <div className='mb-8 relative'>
                                    <label for="name" className=" absolute -top-3 bg-white px-2 text-gray-500 font-semibold left-6">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                        class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-blue-400 " />
                                </div>
                            </div>
                            <div className='w-full px-[22px] md:w-1/2'>
                                <div className='mb-8 relative'>
                                    <label for="company" className=" absolute -top-3 bg-white px-2 text-gray-500 font-semibold left-6">Comapy Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company" placeholder="Comapy (optioanl)" class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-blue-400" />
                                </div>
                            </div>
                            <div className='w-full px-[22px] md:w-1/2'>
                                <div className='mb-8 relative'>
                                    <label for="email" className=" absolute -top-3 bg-white px-2 text-gray-500 font-semibold left-6">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email" placeholder="Enter Your email" class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-blue-400" />
                                </div>
                            </div>
                            <div className='w-full px-[22px] md:w-1/2'>
                                <div className='mb-8 relative'>
                                    <label for="phone" className=" absolute -top-3 bg-white px-2 text-gray-500 font-semibold left-6">Phone Number</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone" placeholder="Enter ypur Phone Number" class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-blue-400" />
                                </div>
                            </div>
                            <div class="w-full px-[22px]">
                                <div class="mb-8 relative">
                                    <label for="message" className=" absolute -top-3 bg-white px-2 text-gray-500 font-semibold left-6">Message</label>
                                    <textarea rows="6" name="message" id="message" placeholder="Tell us about yourself" class="w-full rounded border border-stroke bg-white py-4 px-[30px] text-base text-body outline-none focus:border-blue-400"></textarea>
                                </div>
                            </div>
                            <div class="w-full px-[22px]">
                                <div class="text-center">
                                    <p class="mb-5 text-center text-base text-body">
                                        By clicking contact us button, you agree our terms and
                                        policy,
                                    </p>
                                    <button type="submit" class="inline-block rounded-md bg-indigo-400 py-[14px] px-11 text-base font-medium text-white hover:bg-indigo-300 focus:border-blue-400">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form