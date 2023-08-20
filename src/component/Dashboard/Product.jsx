import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import carrier from './../../assests/carrer.jpg'
  import resume from './../../assests/resume.jpg'
  import web from './../../assests/team2.jpg'
   
  export default function Product() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3">

      <Card className="mt-10 m-5">
        <CardHeader color="blue-gray">
          <img
            src={carrier}
            alt="card" 
            className="h-96 w-full"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center italic font-medium">
            Update About Opening in Tech Company
          </Typography>
          <Typography className="mt-5 font-serif text-center">
            Provide a Knowledge regarding Opening in Tech Company and provide a link & detail about position.
          </Typography>
        </CardBody>
    
      </Card>


      <Card className="mt-10 m-5">
        <CardHeader color="blue-gray" className="">
          <img
            src={resume}
            alt="card"
            className="h-96 w-full"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center italic font-medium">
           Attractive Resume
          </Typography>
          <Typography className="mt-5 font-serif text-center">
          Crafting compelling resumes that stand out. Download your professionally designed PDF resume here: [Resume PDF Download Link]          </Typography>
        </CardBody>
    
      </Card>
      <Card className="mt-10 m-5">
        <CardHeader color="blue-gray" className="">
          <img
            src={web}
            alt="card"
            className="h-96 w-full"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center italic font-medium">
            Design and Development a Website
          </Typography>
          <Typography className="mt-5 font-serif text-center">
          Unlock your vision with Our Company's tailored Design and Development Service. From captivating websites to user-friendly apps, we craft seamless user experiences while staying at the forefront of innovation. Partner with us to turn your ideas into impactful realities.          </Typography>
        </CardBody>
    
      </Card>
      </div>
    );
  }