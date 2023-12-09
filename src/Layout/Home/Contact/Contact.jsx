import React from 'react';

const Contact = () => {
    return (
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl lg:max-w-5xl mx-auto">
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Contact Me
                    </h1>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                        Love to talk about how we can help you.
                    </p>
                </div>

                <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                        <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Fill in the form
                        </h2>

                        <form>
                            <div class="grid gap-4">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label for="hs-firstname-contacts-1" class="sr-only">First Name</label>
                                        <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="First Name" />
                                    </div>

                                    <div>
                                        <label for="hs-lastname-contacts-1" class="sr-only">Last Name</label>
                                        <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div>
                                    <label for="hs-email-contacts-1" class="sr-only">Email</label>
                                    <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email" />
                                </div>

                                <div>
                                    <label for="hs-phone-number-1" class="sr-only">Phone Number</label>
                                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Phone Number" />
                                </div>

                                <div>
                                    <label for="hs-about-contacts-1" class="sr-only">Details</label>
                                    <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Details"></textarea>
                                </div>
                            </div>

                            <div class="mt-4 grid">
                                <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send inquiry</button>
                            </div>

                            <div class="mt-3 text-center">
                                <p class="text-sm text-gray-500">
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;