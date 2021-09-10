import React from 'react'

export default function About() {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="lg:w-5/12 md:w-1/2 sm:w-full flex justify-center lg:py-24 md:py-14 sm:py-8 py-8">
                    <div className="w-64 h-64 lg:h-80 md:h-80 sm:h-64 lg:w-80 md:w-80 sm:w-64 border border-blue-400 rounded-xl ml-4"></div>
                    <img className="rounded-xl z-10 absolute ml-7 mt-5 w-64 h-64 lg:h-80 md:h-80 sm:h-64 lg:w-80 md:w-80 sm:w-64" src="https://res.cloudinary.com/zada/image/upload/v1631285993/lp1AKIUV3yo_h0fkkn.png" alt="" />
                </div>
                <div className="lg:w-7/12 md:w-1/2 sm:w-full lg:pr-40 md:pr-20 sm:pr-16 px-8 lg:px-0 md:px-5 sm:px-16 lg:py-24 md:py-14 sm:py-8 py-8">
                    <h1 className="lg:text-4xl md:text-xl sm:text-sm font-bold mb-6">Tentang Plugin</h1>
                    <p className="font-normal md:text-sm sm:text-xs">PLUGIN adalah suatu organisasi atau komunitas studi linux dan pengembangan aplikasi di Politeknik Harapan Bersama Tegal. Kami mempunyai tujuan untuk mengenalkan dan mengOpen Source kan mahasiswa dan masyarakat umum dengan berbagai kegiatan yang nantinya bisa membuka wawasan serta mindset OpenSource guna untuk mengurangi angka pembajakan Software di Indonesia</p>
                </div>
            </div>
        </div>
    )
}
