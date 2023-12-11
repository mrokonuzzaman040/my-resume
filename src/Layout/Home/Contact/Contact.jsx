import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";


const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });


    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "PortfolioSite",
                    from_email: form.email,
                    to_email: "rjrupom221@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl lg:max-w-5xl mx-auto">
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-black">
                        Contact us
                    </h1>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                        We'd love to talk about how we can help you.
                    </p>
                </div>

                <div class="mt-12 grid items-center">
                    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                        <h2 class="mb-8 text-xl font-semibold text-balck">
                            Fill in the form
                        </h2>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='mt-12 flex flex-col gap-8'
                        >
                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your good name?"
                                    className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your Message</span>
                                <textarea
                                    rows={7}
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder='How can I help you?'
                                    className='bg-tertiary bg-gra py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <button
                                type='submit'
                                className='bg-tertiary bg-indigo-400 py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;