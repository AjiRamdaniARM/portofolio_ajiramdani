import React from "react";
import { Button, Popup } from 'semantic-ui-react'


const Card = () => {
    const Visi = "Visi"
    return(
      
        // card 1
        <div className="Halaman-Card lg:flex lg:justify-center lg:items-center p-5 ">
            <div className="Relative flex w-96 flex-col rounded-xl bg-clip-border text-gray-700 shadow-xl ">
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialised">
                        <img src="https://img.icons8.com/hands/100/experimental-idea-sharing-hands.png" />
                  Visi
                    </h5>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        <li>Menjadi pengusaha sukses yang perusahaannya dikenal di nasional sampai mancanegara.</li>
                        <li>Bekerja di perusahaan ternama  dan Bekerja sebagai developer</li>
                        <li>Menjadi tenaga kerja yang profesional, bertanggung jawab, dan dapat bekerja sama dalam tim secara efektif.</li>
    </ul>
                </div>
                <div class="p-6 pt-0">
                <button type="button" data-ripple-light="true" className="btn select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>window.my_modal_3.showModal()}>Read More</button>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box ">
    <h3 className="font-bold text-lg">Visi Saya</h3>
    <p className="py-4">
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        <li>Menjadi pengusaha sukses yang perusahaannya dikenal di nasional sampai mancanegara.</li>
                        <li>Bekerja di perusahaan ternama  dan Bekerja sebagai developer</li>
                        <li>Menjadi tenaga kerja yang profesional, bertanggung jawab, dan dapat bekerja sama dalam tim secara efektif.</li>
    </ul>

    </p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>  
  </div>
            </div> &nbsp;&nbsp;&nbsp;
            {/* card 2 */}
            <div className="Relative flex w-96 flex-col rounded-xl bg-clip-border text-gray-700 shadow-xl">
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialised">
                   Misi
                    </h5>
                    <img src="https://img.icons8.com/hands/100/experimental-commercial-hands.png" />
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        <li>Aktif di organisasi untuk belajar bagaimana cara menerapkan manajemen dengan baik.</li>
                        <li>Selalu berpikir kritis terhadap pengembangan diri dan apa yang harus diperbaiki.</li>
                        <li>Memperluas wawasan dan ilmu dibidang teknologi</li>
    </ul>
                </div>
                <div class="p-6 pt-0">
             <button type="button" data-ripple-light="true" className="btn select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={()=>window.my_modal_2.showModal()}>Read More</button>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box ">
    <h3 className="font-bold text-lg">Misi Saya</h3>
    <p className="py-4">
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        <li>Aktif di organisasi untuk belajar bagaimana cara menerapkan manajemen dengan baik.</li>
                        <li>Selalu berpikir kritis terhadap pengembangan diri dan apa yang harus diperbaiki.</li>
                        <li>Memperluas wawasan dan ilmu dibidang teknologi</li>
    </ul>

    </p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>     
  </div>
            </div>

        </div>
    )
}
export default Card;