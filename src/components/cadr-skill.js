import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CardSkill = () => {
  // content 1 
  const image1 = "https://cdn.dribbble.com/users/6569/screenshots/16471177/media/8bbfe7fd594073dc6271d5d852c7381a.png?resize=400x0";
  const juddul1 = "Visual Studio Code";
  const paragraf1 = "Visual Studio Code adalah perangkat lunak penyunting kode-sumber buatan Microsoft untuk Linux, macOS, dan Windows.";
  const link1 = "https://code.visualstudio.com/";

  // content 2
  const image2 = "https://spin.atomicobject.com/wp-content/uploads/Figma-Image.jpg";
  const juddul2 = "Figma";
  const paragraf2 = "Figma adalah sebuah aplikasi web kolaboratif untuk user interface, dengan fitur-fitur luring tambahan yang tersedia pada aplikasi desktop untuk Windows dan macOS. ";
  const link2 = "https://www.figma.com/";

  // content 3
  const image3 = "https://www.webirinci.com/wp-content/uploads/2022/05/raw-780x470.jpg";
  const juddul3 = "Adobe Photoshop";
  const paragraf3 = "Adobe Photoshop, atau biasa disebut Photoshop, adalah perangkat lunak editor citra buatan Adobe Systems yang dikhususkan untuk pengeditan foto/gambar dan pembuatan efek.";
  const link3 = "https://www.adobe.com/id_id/products/photoshop.html";

  // content 4
  const image4 = "https://idseducation.com/wp-content/uploads/2020/09/33.Plugin-Adobe-Illustrator.jpg";
  const juddul4 = "Adobe Ilustrator";
  const paragraf4 = "Adobe Illustrator adalah program editor grafis vektor terkemuka, dikembangkan dan dipasarkan oleh Adobe Systems. Illustrator CC merupakan versi terkini program ini, generasi kedua puluh untuk produk Illustrator.";
  const link4 = "https://www.adobe.com/id_en/products/illustrator.html?gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH27BPYwzN9-l1VHcCxMxtfbIAwdNcJzfoP7UD3w0ORTj4IVwTLoeRIaAm3YEALw_wcB&sdid=81G55V4T&mv=search&ef_id=Cj0KCQjw4s-kBhDqARIsAN-ipH27BPYwzN9-l1VHcCxMxtfbIAwdNcJzfoP7UD3w0ORTj4IVwTLoeRIaAm3YEALw_wcB:G:s&s_kwcid=AL!3085!3!472466910439!e!!g!!adobe%20illustrator!11350284429!111298123836";

  // content 5
  const image5 = "https://metodeku.com/wp-content/uploads/2022/06/Fungsi-Dari-Adobe-XD.jpg";
  const juddul5 = "Adobe Xd";
  const paragraf5 = "Adobe XD adalah alat desain vektor untuk aplikasi web dan seluler, dikembangkan dan diterbitkan oleh Adobe Inc. Ini tersedia untuk macOS dan Windows, dan ada versi untuk iOS dan Android untuk membantu melihat pratinjau hasil pekerjaan langsung di perangkat seluler.";
  const link5 = "https://helpx.adobe.com/xd/get-started.html";

  // content 6
  const image6 = "https://s1.eestatic.com/2020/02/17/elandroidelibre/el_androide_libre_468215684_179553143_1024x576.jpg";
  const juddul6 = "Microsoft Office";
  const paragraf6 = "Microsoft Office adalah perangkat lunak paket aplikasi perkantoran buatan Microsoft dan dirancang untuk dijalankan di bawah sistem operasi Microsoft Windows dan Mac OS X. Beberapa aplikasi di dalam Microsoft Office yang terkenal adalah Excel, Word, dan PowerPoint.";
  const link6 = "https://www.office.com/?auth=1";

  // content 7 
  const image7 = "https://9to5google.com/wp-content/uploads/sites/4/2022/10/android-studio-logo-1.jpg?quality=82&strip=all";
  const juddul7 = "Android Studio";
  const paragraf7 = "Android Studio adalah Integrated Development Enviroment untuk sistem operasi Android, yang dibangun di atas perangkat lunak JetBrains IntelliJ IDEA dan didesain khusus untuk pengembangan Android. ";
  const link7 = "https://developer.android.com/studio";

  // content 8 
  const image8 = "https://store.sirclo.com/blog/wp-content/uploads/2022/10/Banner-Blog-08-18.jpg";
  const juddul8 = "Canva";
  const paragraf8 = "Canva adalah aplikasi desain grafis yang digunakan untuk membuat grafis media sosial, presentasi, poster, dokumen dan konten visual lainnya. Aplikasi ini juga menyediakan beragam contoh desain untuk digunakan. Canva terdiri dari dua jenis layanan, yakni gratis dan berbayar.";
  const link8 = "https://www.canva.com/";

    return(
        <div className="Card-Skill z-1" id="aplikasi">
            <div className="block p-5 ">
                <h2 className="text-4xl lg:text-5xl  text-blue-500 font-bold text-card1">APLIKASI YANG DIGUNAKAN</h2>
                <p className="text-gray-400"> Aplikasi yang sering saya gunakan untuk membuat project dan mengembangkan project saya </p>
            </div>
            <Carousel 
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
  
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
           >

            {/* Vs Code element */}
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-5 ">
      <img className="rounded-t-lg" src={image1} alt="vscode" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul1}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf1}</p>
        <a href={link1} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
{/* akhir vscode */}


{/* figma element */}
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-5  ">
      <img className="rounded-t-lg" src={image2} alt="figma" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul2}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf2}</p>
        <a href={link2} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  {/* end figma */}

{/* adobe photoshop */}
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-5  ">
      <img className="rounded-t-lg" src={image3} alt="PSD" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul3}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf3}</p>
        <a href={link3} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  {/* end psd */}

  {/* adobe ilustrator */}
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  m-5 ">
      <img className="rounded-t-lg" src={image4} alt="Ilustrator" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul4}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf4}</p>
        <a href={link4} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  {/* end adobe ilustrator */}


  {/* adobe xd */}
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  m-5 ">
      <img className="rounded-t-lg" src={image5} alt="adobe xd" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul5}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf5}</p>
        <a href={link5} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  {/* end xd */}

   {/* ms office */}
   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  m-5 ">
      <img className="rounded-t-lg" src={image6} alt="office" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul6}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf6} </p>
        <a href={link6} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  {/* ms office */}

     {/* android studio */}
     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  m-5 ">
      <img className="rounded-t-lg" src={image7} alt="office" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul7}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf7}</p>
        <a href={link7} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  {/* android studio */}


   {/* canva */}
   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  m-5 ">
      <img className="rounded-t-lg" src={image8} alt="office" />
    <div className="p-5" >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juddul8}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraf8} </p>
        <a href={link8} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  {/* canva */}



</Carousel>
            </div>
    )
}
export default CardSkill;