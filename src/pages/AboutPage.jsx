import { User, Link } from "@nextui-org/react";
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
    <div className="min-h-[100vh] px-[5%] md:px-[10%] grid place-content-center">
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
          {userDetails.map((user, index) => (
            <User key={`USD-${index}`} className=" min-w-fit"
              name={user.name}
              description={(
                <div className="text-left">
                  <p>{user.role}</p>
                  {user.socials.map((social, index) => (
                    <Link key={index} className="m-1 " target="_blank" href={social.link} size="md" isExternal >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              )}
              avatarProps={{
                src: user.avatar, size: "lg",
              }}
            />
          ))}
        </div>
      </div>
      <Need_Assistance />
    </div>
  );
};
