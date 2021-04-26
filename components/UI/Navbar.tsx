import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/web/parallax';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type NavContentProps = {
  isVisible: boolean;
  toggleMenu: VoidFunction;
};

function NavContent<NavContentProps>({ isVisible, toggleMenu }) {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Scroll down</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <p>Scroll up</p>
      </ParallaxLayer>
    </Parallax>
  );
}

const Navbar = () => {
  const [hasMenu, toggleMenu] = useState(false);

  const onClick = () => toggleMenu((menuState) => !menuState);

  return (
    <>
      <NavContent isVisible={hasMenu} toggleMenu={toggleMenu} />
      <IconButton onClick={onClick}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Navbar;
