/* eslint-disable react-refresh/only-export-components */
// your root page
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";

export const Layout = () => {

  return (
    <div className="overflow-hidden space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0 }}
      >
        <Hero_Section />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: false, amount: 0 }}
      >
        <Contest_Overview />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: false, amount: 0 }}
      >
        <Intership_Overview />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: false, amount: 0 }}
      >
        <Need_Assistance />
      </motion.div>
    </div>
  );
};

export const Hero_Section = () => {
  return (
    <>
    {/*Hero Background Animation  */}
    <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      <header className="context max-w-[1440px] py-24 grid place-content-center m-auto text-center  px-[5%] ">
        <div className="hero-content space-y-2">
          <h3 className="text-lg">
           <span className="text-sky-600">DevConfig</span> presenting
          </h3>
          <h1 className="hero-heading tracking-tight  font-bold leading-tight text-6xl ">
            Contest and <span className=" text-sky-600">Internship</span> Program{" "}
            <br />
            2024
          </h1>
          {/* add google form link in button  */}
          <Button
            variant="bordered"
            radius="full"
            size="lg"
            color="primary"
          >
            Participate
          </Button>
        </div>
      </header>
    </>
  );
};

export const Contest_Overview = () => {
  return (
    <>
      <section className="max-w-[1920px] m-auto py-16 px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-2xl font-semibold">
          <span className="text-sky-600 underline underline-offset-4">
            Overview
          </span>{" "}
          of the DevConfig Contest
        </h2>
        <p className="text-lg">
          Our contest is specifically designed to challenge and showcase the
          skills of the participants. It is divided into three distinct
          challenges, each focusing on key areas of software development.
          <br />
          The most exciting part of the contest is the reward! The top performer
          in each event will be awarded a cash prize of ₹1000. Plus, they will
          have the opportunity to join our enriching Internship Program.
        </p>

        <Button as={NavLink} to={"challanges"} variant="bordered">
          Full details
        </Button>
      </section>
    </>
  );
};
export const Intership_Overview = () => {
  return (
    <>
      <section className="max-w-[1920px] m-auto px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-2xl font-semibold">
          Introducing the DevConfig{" "}
          <span className="text-sky-600 underline underline-offset-4">
            Internship
          </span>{" "}
          Program
        </h2>
        <p className="text-lg">
          The DevConfig Internship Program offers a unique opportunity for the
          top 50 performers in the contest. These top talents will be selected
          based on the quality of their project submissions. We will evaluate
          the projects on several criteria including creativity, functionality,
          and technical execution. The selected participants are offesky a
          3-month internship program with DevConfig.
        </p>

        <Button as={NavLink} to={"/internship"} variant="bordered">
          Know More
        </Button>
      </section>
    </>
  );
};
export const Need_Assistance = () => {
  return (
    <>
      <section className="max-w-[1920px] text-center m-auto py-16 px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-2xl font-semibold">
          Need{" "}
          <span className="text-sky-600 underline underline-offset-4">
            Support
          </span>
          ? We&apos;re Here to Help
        </h2>
        <p className="text-lg">
          At DevConfig, we believe in the power of support and guidance.
          We&apos;re committed to ensuring that your experience with us is
          smooth and enriching. If you have any queries or need assistance at
          any step, please contact us
        </p>

        <Button
          as={NavLink}
          size="lg"
          to="mailto:support.devconfig@gmail.com"
          variant="bordered"
          startContent={<MdMarkEmailUnread />}
        >
          support.devconfig@gmail.com
        </Button>
      </section>
    </>
  );
};
