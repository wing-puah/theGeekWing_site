import Link from 'next/Link';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useWindowSize from 'reactHooks/useWindowSize';

import theme from 'styles/theme';

const navConfig = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/about' },
  { text: 'Contact', url: '/contact' },
];

const NavLink = styled.div`
  position: relative;

  &:before {
    content: '';
    transition: all 0.3s;
    position: absolute;
    left: 0;
    width: 0;
    z-index: -1;
  }

  a {
    color: ${(props) => props.theme.palette.common.white};
  }

  &:hover {
    a {
      text-decoration: none;
    }

    &:before {
      width: 100%;
      height: 100%;
      background: red;
    }
  }
`;

type SingleNavProps = {
  text: string;
  url: string;
  onClick: VoidFunction;
};

function SingleNavLink<SingleNavProps>({ text, url, onClick }) {
  return (
    <NavLink className="mb-5">
      <Link href={url}>
        <a onClick={onClick}>
          <h3 className="my-0 p-2">{text}</h3>
        </a>
      </Link>
    </NavLink>
  );
}

type NavContentProps = {
  isVisible: boolean;
  onClick: VoidFunction;
};

function NavContent<NavContentProps>({ isVisible, onClick }) {
  const { width, height } = useWindowSize();
  const styles = useSpring({
    from: { position: 'fixed', width },
    to: {
      height: isVisible ? height : 0,
      opacity: isVisible ? 0.9 : 0,
      bottom: isVisible ? 0 : -999,
      background: theme.navigation.default,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <animated.div style={styles}>
      <div className="text-center">
        {navConfig.map((singleNav) => (
          <SingleNavLink
            {...singleNav}
            key={singleNav.text}
            onClick={onClick}
          />
        ))}
      </div>
    </animated.div>
  );
}

const Navbar = () => {
  const [hasMenu, toggleMenu] = useState(false);

  const onClick = () => toggleMenu((menuState) => !menuState);

  return (
    <>
      <NavContent isVisible={hasMenu} onClick={onClick} />
      <IconButton onClick={onClick}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Navbar;
