import {User,Link} from "@nextui-org/react";
import { Need_Assistance } from "../layout";
// icons
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const AboutPage = () => {
  const userDetails = [
    {
      name: "Vikash Kumar",
      role: "Fullstack Developer",
      socials: [
        {
          icon: <BsInstagram />,
          link: "https://www.instagram.com/vikashkrdeveloper/"
        },
        {
          icon: <BsLinkedin />,
          link: "https://www.linkedin.com/in/vikashkrdeveloper/"
        },
        {
          icon: <BsTwitter />,
          link: "https://twitter.com/vikash2696v"
        },
        {
          icon: <BsGithub />,
          link: "https://github.com/vikashkrdeveloper",
        },
      ],
      avatar: "https://avatars.githubusercontent.com/u/128849038?v=4"
    },
    {
      name: "Md Azad",
      role: "UI/UX Designer | Developer",
      socials: [
        {
          icon: <BsInstagram />,
          link: "https://instagram.com/the_mdazad"
        },
        {
          icon: <BsLinkedin />,
          link: "https://www.linkedin.com/in/modest-azad/"
        },
        {
          icon: <BsGithub />,
          link: "",
        },
      ],
      avatar: "https://avatars.githubusercontent.com/u/81636077?v=4"
    },
    {
      name: "Anshu Kumar",
      role: "HR | Researcher",
      socials: [
        {
          icon: <BsInstagram />,
          link: ""
        },
        {
          icon: <BsLinkedin />,
          link: ""
        },
        {
          icon: <BsTwitter />,
          link: ""
        },
        {
          icon: <BsGithub />,
          link: ""
        },
      ],
      avatar: ""
    },
    {
      name: "Uttam Chandra",
      role: "Role Unknown",
      socials: [],
      avatar: ""
    },
  ]
  return (
    <div className="min-h-[100vh] px-[5%] md:px-[10%] space-y-12 py-16 grid place-content-center">
      <div className="text-center text-4xl font-bold text-sky-600 underline underline-offset-4">
        DevConfig Members
      </div>
      <Divider />

      <div className="our_team  text-center">
        <h2 className="text-2xl font-semibold">
          Our{" "}
          <span className="text-sky-600 underline underline-offset-4">
            Team
          </span>
          
        </h2>
        <p>
           ensuring that your experience with us is
          smooth and enriching. If you have any queries or need assistance at
          any step, please contact us
        </p>

    <div className="my-8  flex max-sm:flex-col gap-6 justify-center ">
      
    
      <User  className=" min-w-fit" 
      name="Vikash Kumar"
      description={(
        <div className="text-left">
        <p>Fullstack Developer</p>
        <Link className="m-1 " target="_blank" href="" size="md" isExternal >
          <BsInstagram/>
        </Link>
        <Link className="m-1 " target="_blank" href="" size="md" isExternal >
        <BsLinkedin/>
        </Link>
        <Link className="m-1 " target="_blank" href="" size="md" isExternal >
        <BsTwitter />
        </Link>
        <Link className="m-1 " target="_blank" href="https://github.com/modest-azad" size="md" isExternal >
        <BsGithub />
        </Link>
        </div>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/128849038?v=4", size:"lg",
      }}
    />
    
      <User  className=" min-w-fit" 
      name="Md Azad"
      description={(
        <div className="text-left">
        <p>UI/UX Designer | Developer</p>
        <Link className="m-1 "  target="_blank" href="https://instagram.com/the_mdazad" size="md" isExternal >
          <BsInstagram/>
        </Link>
        <Link className="m-1 " target="_blank" href="https://www.linkedin.com/in/modest-azad/" size="md" isExternal >
        <BsLinkedin/>
        </Link>
        
        <Link className="m-1 " target="_blank" href="https://github.com/modest-azad" size="md" isExternal >
        <BsGithub />
        </Link>
        </div>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/81636077?v=4", size:"lg",
      }}
    />
      <User  className=" min-w-fit" 
      name="Anshu Kumar"
      description={(
        <div className="text-left">
        <p>HR | Researcher</p>
        <Link className="m-1 " target="_blank" href="https://instagram.com/" size="md" isExternal >
          <BsInstagram/>
        </Link>
        <Link className="m-1 " target="_blank" href="https://linkedin.com/" size="md" isExternal >
        <BsLinkedin/>
        </Link>
        <Link className="m-1 " target="_blank" href="https://twitter.com/" size="md" isExternal >
        <BsTwitter />
        </Link>
        </div>
      )}
      avatarProps={{
        src: "", size:"lg",
      }}
    />
      <User  className=" min-w-fit" 
      name="Uttam Chandra"
      description={(
        <div className="text-left">
        <p>Role Unknown</p>
       
        </div>
      )}
      avatarProps={{
        src: "", size:"lg",
      }}
    />
    
     
    </div>
        
      </div>
      <Need_Assistance />
    </div>
  );
};
