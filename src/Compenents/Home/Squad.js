import React from 'react'

export default function Squad() {
    return (
        <div>
            <div className="lg:px-24 px-8 py-7">
                <h1 className="text-xl lg:text-4xl md:text-xl font-bold text-center mb-5">
                    Plugin Squad
                </h1>
                <p className="text-center text-base lg:text-xl font-light mb-5">
                    Squad di PLUGIN ada 4, masing-masing punya fokus dan tujuan tersendiri, dibuatnya squad ini agar teman-teman PLUGIN bisa menentukan akan konsentrasi dimana
                </p>

                <div className="flex flex-wrap py-8">
                    <div className="w-full lg:w-1/2 md:w-full shadow-xl rounded-lg px-8 py-5 mb-8 flex flex-wrap">
                        <div className="w-5/12 flex justify-center my-auto">
                            <div className="mx-auto hidden lg:block md:hidden">
                                <img src="https://res.cloudinary.com/zada/image/upload/v1631450461/Vector_aasbxd.png" alt="" width="100" height="60" />
                            </div>
                        </div>
                        <div className="lg:w-7/12 md:w-full">
                            <h1 className="text-xl text-center lg:text-left md:text-center mb-5">
                                Squad Web Dev
                            </h1>
                            <div className="w-16 h-12 mx-auto block lg:hidden md:block">
                                <img src="https://res.cloudinary.com/zada/image/upload/v1631450461/Vector_aasbxd.png" alt="" />
                            </div>
                            <p className="text-center lg:text-left md:text-center text-base font-light">
                                Squad yang berfokus dalam membahas teknologi seputar pengembangan website baik penjelasan, tools yang digunakan, serta ruang lingkup website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
