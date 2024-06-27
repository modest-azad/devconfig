export const Internship = () => {
  return (
    <>
      <section className="max-w-[1920px] m-auto py-16 px-[5%] md:px-[10%] space-y-12  md:grid grid-cols-2 gap-4">
        <div className="col-span-2 text-center text-4xl mb-16 font-bold text-sky-600 underline underline-offset-4">
          DevConfig Internship Program
        </div>

        <div className="over-view space-y-2 col-span-2">
         
          <p>
            The DevConfig Internship Program offers a unique opportunity for the
            <span className="underline underline-offset-4"> top 50 performers</span> in the contest. These top talents will be selected
            based on the quality of their project submissions. We will evaluate
            the projects on several criteria including creativity,
            functionality, and technical execution. <br /> The selected
            participants will be offered a <span className="underline underline-offset-4"> 3-month internship program </span> with
            DevConfig.
          </p>
        </div>
        <div className="over-view space-y-2">
          <h2 className="text-xl font-semibold">
            <span className="text-sky-600 ">What you will do?</span>
          </h2>
          <p className="text-justify">
            During the 3-month internship, participants will be exposed to
            various aspects of software designing and development, including but not limited
            to coding, debugging, software design, and project management. They
            will have a chance to work with experienced mentors from the
            industry, who will guide them through their learning journey, answer
            their queries, and provide valuable insights.
          </p>
        </div>
        <div className="over-view space-y-2">
          <h2 className="text-xl font-semibold">
            <span className="text-sky-600 ">Future Benefits</span>
          </h2>
          <p className="text-justify">
            Interns will also have the opportunity to work on live projects.
            This hands-on experience with real-world projects will enable them
            to understand the nuances of software development, including
            problem-solving, teamwork, meeting deadlines, and handling project
            deliveries. This, in turn, will prepare them to tackle challenges
            they may face in their future jobs.
          </p>
        </div>
      </section>
    </>
  );
};
