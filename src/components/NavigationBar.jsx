// eslint-disable-next-line no-unused-vars
import {Dropdown,DropdownTrigger, DropdownMenu,DropdownItem, Button, Link,  Navbar,  NavbarBrand, NavbarMenu, NavbarContent, NavbarItem,NavbarMenuToggle,Image,} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
// icons 
import { BsBag } from "react-icons/bs";
import { GiPodiumWinner } from "react-icons/gi";

export default function NavigationBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <NavLink to="/">
            <Image
              src={""}
              className=" w-12 -rotate-[20deg] hover:-rotate-[360deg] transition-transform duration-[2000]"
            />
          </NavLink>
          <NavLink  to="/" className="font-bold text-inherit">
            _DevConfig
          </NavLink>
        </NavbarBrand>

        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      {/*Menu for Desktop*/}
      <NavbarContent className="hidden space-x-2 sm:flex" justify="center">
        <NavbarItem>
          <Link  color="foreground" Link href="/challanges"  >
            Challanges
          </Link>
        </NavbarItem>
        {/* Dropdown menu : uncomment if need */}
        {/* <NavbarItem >
          <Dropdown>
            <DropdownTrigger>
              <Link color="foreground"
                 endContent={<FiChevronDown />}
              >
                Careers
              </Link>
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
          <Link color="foreground" Link href="/internship"  >
            Internship
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" Link href="/projects" >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" Link href="/about" >
            About us
          </Link>
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
        className={`items-center space-y-2 text-xl justify-center md:hidden sm:flex `}
      >
        <NavbarItem>
          <Link className="text-2xl" color="foreground" Link href="/challanges" >
            Challanges
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-2xl" color="foreground" Link href="/internship" >
            Internship
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-2xl" color="foreground" Link href="/projects" >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-2xl" color="foreground" Link href="/about" >
            About us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button 
            as={NavLink}
            to="/Register"
            color="primary"
            radius="full"
            variant="flat"
          >
            Register Now
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
