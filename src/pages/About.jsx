import { Need_Assistance } from "../layout";
export const About = () => {
  return (
    <div className="h-[100vh] grid place-content-center">
      <div className="our_team  text-center">
        <h2 className="text-2xl font-semibold">
          Our{" "}
          <span className="text-blue-600 underline underline-offset-4">
            Team
          </span>
          
        </h2>
        <p>
           ensuring that your experience with us is
          smooth and enriching. If you have any queries or need assistance at
          any step, please contact us
        </p>
      </div>

      <Need_Assistance />
    </div>
  );
};
