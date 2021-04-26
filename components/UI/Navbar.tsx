import {
  Alignment,
  Navbar as BpNavbar,
  NavbarGroup,
  Button,
} from '@blueprintjs/core';

const NavContent = () => {};

const Navbar = () => {
  return (
    <BpNavbar>
      <NavbarGroup align={Alignment.LEFT}>
        <Button className="bp3-minimal" icon="home" text="Home" />
      </NavbarGroup>
    </BpNavbar>
  );
};

export default Navbar;
