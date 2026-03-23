 import jenariva from "./assets/jenariva.png";
import jenarivaApp from "./assets/jenarivaApp.jpg";
import StackIcon from "tech-stack-icons";
 const MyProjects = [
    {
      image:jenariva,
      name:"Jenariva Resort Web-Base",
      description:`Jenariva Resort Reservation System is a web-based system that
                  helps customers book cottages, rooms, events, and services
                  online. Instead of using manual reservation, the system allows
                  users to check availability and send booking requests through
                  the website. It also has an admin dashboard where the resort
                  staff can manage bookings and monitor reservations easily.
                  This system was created to make the reservation process
                  faster, more organized, and more convenient for both customers
                  and the resort.`,
      link:"https://jenariva.online",
      stack:[
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="light"
          name="react"
        />
      ),
      label: "React.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="light"
          name="tailwindcss"
        />
      ),
      label: "Tailwind",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="light"
          name="nodejs"
        />
      ),
      label: "Node.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="dark"
          name="expressjs"
        />
      ),
      label: "Express.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="light"
          name="postman"
        />
      ),
      label: " PostMan",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="dark"
          name="shadcnui"
        />
      ),
      label: "Shadcn ui",
    },

    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="dark"
          name="mongodb"
        />
      ),
      label: "MongoDB",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="dark"
          name="cloudinary"
        />
      ),
      label: "Cloudinary",
    },
  ]
    },
    {
      image:jenarivaApp,
      name:"Jenariva Resort Mobile App",
      description:`Jenariva Resort Reservation System is a Mobile App base integrated system that
                  helps customers book events, and services
                  online. Instead of using manual reservation, the system allows
                  users to check availability and send booking requests through out
                  the App.`,
      stack:[
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="light"
          name="kotlin"
        />
      ),
      label: "Kotlin",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="light"
          name="nodejs"
        />
      ),
      label: "Node.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="dark"
          name="expressjs"
        />
      ),
      label: "Express.js",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="light"
          name="postman"
        />
      ),
      label: " PostMan",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="dark"
          name="mongodb"
        />
      ),
      label: "MongoDB",
    },
    {
      icons: (
        <StackIcon
          className=" h-[20px] w-[20px]"
          variant="dark"
          name="cloudinary"
        />
      ),
      label: "Cloudinary",
    },
  ]
    }
  ]

  export default MyProjects