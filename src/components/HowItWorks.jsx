import React from 'react';

const HowItWorks = () => {
    return (
        <>
            <section className="bg-white text-center pt-12">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                    <div className="flex flex-col space-y-4 space-y-reverse">
                        <h1 className="order-last text-lg text-black">The service we provide to you.</h1>
                        <h2 className="text-8xl font-bold text-black sm:text-6xl">How it works?</h2>
                    </div>
                    <p className="mx-auto mt-6 max-w-xl text-base text-black">
                        STK stickers are stick-on covers for your debit & credit cards, metro cards, and gift cards. Just pick a design, receive them in the mail, and stick it on your cards 😊
                    </p>
                </div>
            </section>
            <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-black">
                                        How it works:
                                    </h2>
                                    <p className="mt-4 text-lg text-black">
                                        it's simple really, take the cover off, stick and show off! 
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                                            href="/products">
                                            See our products
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <video
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="src\assets\How it works.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-black">
                                        High quality
                                    </h2>
                                    <p className="mt-4 text-lg text-black">
                                        99% of our cutomers like our products.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                                            href="/products">
                                            See our products
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img
                                    alt="Inbox user interface"
                                    loading="lazy"
                                    width="647"
                                    height="486"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgHKex0y4JIk9eHv21zDrBemqC5s2kOZ8cA&s"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowItWorks;
