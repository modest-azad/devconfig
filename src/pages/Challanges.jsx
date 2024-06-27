import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

export const Challanges = () => {
  return (
    <>
      <section className="max-w-[1920px] m-auto py-16 px-[5%] md:px-[10%] space-y-12">
        <div className="text-center text-4xl mb-16 font-bold text-blue-600 underline underline-offset-4">
          DevConfig Contests
        </div>

        <div className="over-view space-y-2">
          <h2 className="text-2xl font-semibold">
            <span className="text-blue-600 ">Introduction</span>
          </h2>
          <p>
            Our contest is specifically designed to challenge and showcase the
            skills of the participants. It is divided into three distinct
            challenges, each focusing on key areas of software development.
            <br />
            The most exciting part of the contest is the reward! The top
            performer in each event will be awarded a cash prize of ₹1000. Plus,
            they will have the opportunity to join our enriching Internship
            Program.
          </p>

          <ul>
            <li type="disc">Frontend Development Challenge</li>
            <li type="disc">Backend Development Challenge</li>
            <li type="disc">UI/UX Design Challenge</li>
          </ul>
        </div>
        <div className=" space-y-2">
        <h3>
            <span className="text-2xl text-blue-600 ">
              How Can You Participate?
            </span>{" "}
          </h3>
          <p>
            The journey from registration to participation involves a few
            critical steps. The first step is to complete the registration form.
            Following this, you will receive a link to download the problem
            statements for all three events. These problem statements will form
            the basis of the challenges you need to overcome. Once you have
            downloaded the problem statements, the next step is to work on them
            and create your solutions. Remember, your solutions will be
            evaluated based on creativity, functionality, and technical
            execution. So, make sure to give your best! After you have prepared
            your solutions, you need to submit them before the given deadline.
            Please note that late submissions may not be accepted, so keep an
            eye on the dates.
          </p>
          <Button
            as={NavLink}
            to={"PasteGoogleFormLink"}
            variant="bordered"
            size="md"
            startContent={<FaDownload />}
          >
            Problem Statement
          </Button>
        </div>

        <div className="user_benefits">
          <h3>
            <span className="text-2xl text-blue-600 ">Benefits and Reward</span>{" "}
          </h3>
          <p>
            The most exciting part of the contest is the reward. The top
            performer in each event will be awarded a cash prize of ₹1000. Plus,
            they will have the opportunity to join our enriching{" "}
            <NavLink to={"Intership"} className="underline underline-offset-4">
              Internship Program
            </NavLink>
            .
          </p>
        </div>
        <div className="How_to_participate">
          <h3>
            <span className="text-2xl text-blue-600 ">
              How Can You Participate?
            </span>{" "}
          </h3>
          <p>
            Participation in the DevConfig contest is a straightforward process.
            It begins with completing a registration form. Post-registration,
            you will receive a link to download the problem statements for all
            three events. You can then work on these problem statements and
            submit your solutions by the given deadline.
          </p>
        </div>

        <div className="important_dates text-center">
          <h3 className="text-2xl font-semibold text-blue-600 ">
            Important Dates to Remember
          </h3>
          <p>
            Keep these crucial dates in mind to ensure you don&apos;t miss out
            on this fantastic opportunity.
          </p>

          <ul className="my-4">
            <li>Registration Start: Insert Date</li>
            <li>Registration End: Insert Date</li>
            <li>Problem Statement Release Date: Insert Date</li>
            <li>Submission Deadline: Insert Date</li>
            <li> Winner Announcement Date: Insert Date</li>
          </ul>

          <Button
            as={NavLink}
            to={"PasteGoogleFormLink"}
            variant="flat"
            color="danger"
          >
            Registration Form
          </Button>
        </div>
      </section>
    </>
  );
};
