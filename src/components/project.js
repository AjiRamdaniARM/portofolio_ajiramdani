import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";

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
const Project = () => {
    const link1 = "https://play.google.com/store/apps/details?id=com.itclovers.aplikasi&hl=id&gl=US";
	const link2 = "https://www.figma.com/proto/n9ivtIyjE7V9pvuMHSA1ng/Untitled?page-id=14%3A8&type=design&node-id=14-9&viewport=3043%2C-1931%2C1.72&scaling=scale-down&starting-point-node-id=112%3A516";
  const link3 =" https://www.mediafire.com/file/xwjzltaqvhgpusk/nasa_kita.apk/file";
  const link4 =" https://github.com/AjiRamdaniARM/Remake-web-SubaArch";
    return(
        <div id="project" className="Project-halaman m-1">
            <div className="block p-5 ">
                <h2 className="text-4xl lg:text-5xl  text-orange-500 font-bold text-card1">PROJECT YANG DIBUAT</h2>
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
		   

       {/* project pertama */}
<a href={link1}>
<Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[23rem] items-end justify-center overflow-hidden text-center"
    >
        
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://drive.google.com/uc?export=view&id=1cylcZzBXe0MIOFywTTba5_5qCtfpzkW1')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Project Aplikasi Android Itc Lovers Flutter
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
         ARI Dev
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="Itc Lovers"
          className="border-2 border-white"
          src="https://drive.google.com/uc?export=view&id=1z6IfnRG-MDHt12kStEieG2yq2ykKF1Ar"
        />
      </CardBody>
    </Card>
    </a>
{/* akhir project 1 */}


{/* project kedua */}
<a href={link2} >	
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[23rem] items-end justify-center overflow-hidden text-center "
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://drive.google.com/uc?export=view&id=1MuUIwN-cAcPXP63FqRcEXwhQv0TL02ow')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Project Design UI/UX Aplikasi BTB ONLINE
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          ARI Dev
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="BTB INDONESIA "
          className="border-2 border-white"
          src="https://drive.google.com/uc?export=view&id=1upPZ8PLpt-lS8bPm3c6RbtS5_8GfOj1u"
        />
      </CardBody>
    </Card>
</a>
{/* akhir project kedua */}


{/* project ketiga */}
<a href={link3} >
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[23rem] items-end justify-center overflow-hidden text-center "
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://drive.google.com/uc?export=view&id=1wyL01S8RBjaFr1NChwvV7V_iPvGIkqPW')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
         Project Aplikasi Android Nasa Kita Flutter
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
        ARI Dev
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="NASA KITA"
          className="border-2 border-white"
          src="https://drive.google.com/uc?export=view&id=1CcIEuxK8Lgy6r-rrTKmygfcVCqc-7YWP"
        />
      </CardBody>
    </Card></a>
    {/* akhir project ketiga */}


    {/* project keempat */}
<a href={link4} >
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[23rem] items-end justify-center overflow-hidden text-center "
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://drive.google.com/uc?export=view&id=1MWaKHhV8E6DO_pps7q0JrqznnOA3iQw6')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
         Project Remake Aplikasi Website SubaArch
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
        ARI Dev
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="SUBA ARCH"
          className="border-2 border-white"
          src="https://drive.google.com/uc?export=view&id=1hU1fCdNgBncdbvdBHX0QBNCNx5wAsy42"
        />
      </CardBody>
    </Card></a>
    {/* akhir project keempat */}

    {/* <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[23rem] items-end justify-center overflow-hidden text-center "
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Candice Wu
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="candice wu"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </CardBody>
    </Card> */}

    {/* <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[23rem] items-end justify-center overflow-hidden text-center mb-1"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Candice Wu
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="candice wu"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </CardBody>
    </Card> */}
           </Carousel>
        </div>
    )
}
export default Project;