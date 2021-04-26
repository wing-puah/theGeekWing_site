import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type NavContentProps = {
  isVisible: boolean;
  toggleMenu: VoidFunction;
};

function NavContent<NavContentProps>({ isVisible, toggleMenu }) {
  const styles = useSpring({
    to: {
      height: isVisible ? 500 : 0,
      opacity: isVisible ? 1 : 0,
      width: isVisible ? 1000 : 0,
      position: 'absolute',
      background: 'red',
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return <animated.div style={styles}>Menu content</animated.div>;
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
