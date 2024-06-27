import { Divider } from "@nextui-org/react";

export function Footer() {
  return (
    <>
        <Divider/>

      <footer className="text-center text-sm py-4">
        <p>DevConfig 2024, @Copyright reserved.</p>
        <p>
          Designed by{" "}
          <a className="underline underline-offset-4" href="http://www.intagram.com/the_mdazad/">{'Md Azad'}</a>
        </p>
      </footer>
    </>
  );
}
