import { createGlobalStyle, css } from 'styled-components';
import theme, { device } from './theme';

const tableCellMixin = css`
  border-right: 1px solid ${theme.palette.grey[400]};
  padding: 2px 8px;

  &:last-child {
    border-right: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  body {
    color: ${theme.palette.text.primary};
    position: relative;
    overflow-x: hidden;
    font-size: ${theme.typography.body1.fontSize};
  }

  html, body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Exo', sans-serif;
  }

  h2, h3, h4, h5, h6 {
    padding-top: 25px;
    
    ${device.laptop} {
      padding-top: 40px; 
    }
  }

  h1, h2, h3 {
    font-weight: 900;
  }

  h4,h5,h6 {
    font-weight: 400;
  } 

  h1 {
    font-size: 1.8rem;

    ${device.laptop} {
      font-size: 3rem; 
    }
  }

  h2 {
    font-size:${theme.typography.h2.fontSize}; 

    ${device.laptop} {
      font-size: ${theme.typography.h2[device.laptop].fontSize}; 
    }
  }

  a {
    color: ${theme.palette.primary.dark};
  }

  p {
    line-height: 1.8;
  }

  .width--full {
    width: 100%;
  }

  .height--full {
    height: 100%;
  }

  blockquote {
    padding: 10px;
    margin-left: 10px;
    position: relative; 
    color: ${theme.typography.blockquote.fontColor};
    line-height: ${theme.typography.blockquote.lineHeight};

    ${theme.breakpoints.up.laptop} {
      margin-left: 30px; 
      padding: 20px;
    }

    p:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: ''; 
      position: absolute; 
      width: 10px; 
      height: 100%; 
      background: ${theme.palette.highlight.main};
      left: -10px;
      top: 0;
    }

    &:after {
      content: ''; 
      position: absolute; 
      top: 0;
      left: 0;
      width: 100%; 
      height: 100%; 
      border: 1px solid ${theme.palette.highlight.main};
      z-index: -1;
    }
  }

  img {
    width: 100%;
  }

  iframe {
    max-width: 100%;
  }

  pre {
    code {
      display: block;
      padding: 0.5rem 1rem;
      overflow: auto;
      border-radius: 0.3rem;
      background: hsl(24, 20%, 95%);

      ${theme.breakpoints.up.tablet} {
        padding: 2rem; 
      }
    }
  }

  .code {
    label {
      font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
      margin-bottom: 0;
    }
  }

  table {
    border: 1px solid ${theme.palette.grey[400]};

    thead {
      border-bottom: 2px solid ${theme.palette.grey[300]};

      th {
        ${tableCellMixin}
      }
    } 

    tbody {
      td { ${tableCellMixin} }
    }
  }
`;

export default GlobalStyles;
