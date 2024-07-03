import { User, Link } from "@nextui-org/react";
import { Need_Assistance } from "../layout";
// icons
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const AboutPage = () => {
  return (
    <div className="min-h-[100vh] px-[5%] md:px-[10%] space-y-12 py-16 grid place-content-center">
      <div className="text-center text-4xl font-bold text-sky-600 underline underline-offset-4">
        DevConfig Members
      </div>
      <div className="our_team  text-center flex max-sm:flex-col max-sm:items-start max-sm:w-[230px] max-sm:m-auto gap-6 justify-center ">
        <User
          className=" min-w-fit"
          name="Vikash Kumar"
          description={
            <div className="text-left">
              <p>Founder | Fullstack Developer</p>
              <Link
                className="m-1 "
                target="_blank"
                href="https://www.instagram.com/vikashkrdeveloper/"
                size="md"
                isExternal
              >
                <BsInstagram />
              </Link>
              <Link
                className="m-1 "
                target="_blank"
                href="https://www.linkedin.com/in/vikashkrdeveloper/"
                size="md"
                isExternal
              >
                <BsLinkedin />
              </Link>
              <Link
                className="m-1 "
                target="_blank"
                href="https://twitter.com/vikash2696v"
                size="md"
                isExternal
              >
                <BsTwitter />
              </Link>
              <Link
                className="m-1 "
                target="_blank"
                href="https://github.com/vikashkrdeveloper"
                size="md"
                isExternal
              >
                <BsGithub />
              </Link>
            </div>
          }
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/128849038?v=4",
            size: "lg",
          }}
        />

        <User
          className=" min-w-fit"
          name="Md Azad"
          description={
            <div className="text-left">
              <p>UI/UX Designer | Developer</p>
              <Link
                className="m-1 "
                target="_blank"
                href="https://instagram.com/the_mdazad"
                size="md"
                isExternal
              >
                <BsInstagram />
              </Link>
              <Link
                className="m-1 "
                target="_blank"
                href="https://www.linkedin.com/in/modest-azad/"
                size="md"
                isExternal
              >
                <BsLinkedin />
              </Link>
              <Link
                className="m-1 "
                target="_blank"
                href="https://github.com/modest-azad"
                size="md"
                isExternal
              >
                <BsGithub />
              </Link>
            </div>
          }
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/81636077?v=4",
            size: "lg",
          }}
        />
        <User
          className=" min-w-fit"
          name="Anshu Kumar"
          description={
            <div className="text-left">
              <p>HR | Researcher</p>
              <Link
                className="m-1 "
                target="_blank"
                href="https://instagram.com/"
                size="md"
                isExternal
              >
                <BsInstagram />
              </Link>
              <Link
                className="m-1 "
                target="_blank"
                href="https://linkedin.com/"
                size="md"
                isExternal
              >
                <BsLinkedin />
              </Link>
              <Link
                className="m-1 "
                target="_blank"
                href="https://twitter.com/"
                size="md"
                isExternal
              >
                <BsTwitter />
              </Link>
            </div>
          }
          avatarProps={{
            src: "",
            size: "lg",
          }}
        />
        <User
          className=" min-w-fit"
          name="Uttam Chandra"
          description={
            <div className="text-left">
              <p>Role Unknown</p>
            </div>
          }
          avatarProps={{
            src: "",
            size: "lg",
          }}
        />
      </div>

      <Need_Assistance />
    </div>
  );
};
