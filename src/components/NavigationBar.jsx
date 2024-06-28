// eslint-disable-next-line no-unused-vars
import { Button, Link, Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import { NavLink } from "react-router-dom";


export default function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>

          <NavLink to={"/"} className="font-bold text-inherit">
            _DevConfig
          </NavLink>
        </NavbarBrand>

        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      {/*Menu for Desktop*/}
      <NavbarContent className="hidden space-x-2 sm:flex" justify="center">
        <NavbarItem>
          <NavLink color="foreground" to={"/challanges"}  >
            Challanges
          </NavLink>
        </NavbarItem>
        {/* Dropdown menu : uncomment if need */}
        {/* <NavbarItem >
          <Dropdown>
            <DropdownTrigger>
              <NavLink color="foreground"
                 endContent={<FiChevronDown />}
              >
                Careers
              </NavLink>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="new" startContent={<PiBagDuotone />}>Jobs</DropdownItem>
              <DropdownItem key="new" startContent={<PiLaptopDuotone />}>Intenships</DropdownItem>
              <DropdownItem key="CheckResult" className="text-danger" color="danger">
                Check Certificate
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </NavbarItem> */}
        <NavbarItem>
          <NavLink color="foreground" to={"/internship"}  >
            Internship
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={"/projects"}>
            Projects
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={"/about"} >
            About us
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <Button color="primary"
            as={NavLink}
            to="/Login"

            radius="md"
            variant="flat"
          >
            Register Now {"🎉"}
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/*Menu for Mobile*/}
      <NavbarMenu
        className={`items-center bg-transparent  space-y-4 text-xl justify-center md:hidden sm:flex `}
      >
        <NavbarItem>
          <NavLink className="text-2xl text-white/60" color="foreground" to={"/challanges"} >
            Challanges
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink className="text-2xl text-white/60" color="foreground" to={"/internship"} >
            Internship
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className="text-2xl text-white/60" color="foreground" to={"/projects"}>
            Projects
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className="text-2xl  text-white/60" color="foreground" to={"/about"} >
            About us
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={NavLink}
            to="/Register"
            color="primary"
            radius="full"
            variant="flat"
            size="lg"
          >
            Register Now
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
