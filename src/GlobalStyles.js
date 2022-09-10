import { createGlobalStyle } from 'styled-components';
import { device } from './utils/Device';
import { color, fontfamily } from './utils/GlobalVar';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	    transition: 0.6s all ease;
    }

    body {
        color: ${color.textOne};
        font-family: ${fontfamily.barlow};
        min-height: 100vh;
        
        @media ${device.mobilemax} { 
            text-align: center;
        }
    }
    
    a {
        text-decoration: none;   
    }
    
    h1,
    h2,
    h3,
    h4,
    .subheading-1 {
        font-weight: 400;
        font-family: ${fontfamily.bellefair};
    }

    h5, 
    .subheading-2,
    .nav-text {
        color: ${color.textSec};
        font-weight: 400;
        font-family: ${fontfamily.barlowCond};
    }

    h1 {
        font-size: 80px;
        margin: 16px 0;
        font-weight: 400;

        @media ${device.tablet} { 
            font-size: 150px;
        }
    }

    h2 {
        font-size: 100px;
    }

    h3 {
        font-size: 26px;

        @media ${device.tablet} { 
            font-size: 36px;
        }

        @media ${device.laptop} { 
        font-size: 56px;
        }
    }

    h4 {
        font-size: 24px;
        
        @media ${device.tablet} { 
            font-size: 28px;
        }

        @media ${device.laptop} { 
        font-size: 32px;
            font-size: 28px;
        }
    }

    h5 {
        font-size: 16px;
        letter-spacing: 4.75px;

        @media ${device.tablet} { 
            font-size: 20px;
        }

        @media ${device.laptop} { 
            font-size: 28px;
        }
    }

    p {
        color: ${color.textSec};
        font-size: 15px;
        line-height: 25px;
        letter-spacing: .1px;
        
        @media ${device.tablet} { 
            font-size: 16px;
            letter-spacing: .09px;
        }

        @media ${device.laptop} { 
            font-size: 18px;
            letter-spacing: .02px;
        }
    }

    .subheading-1 {
        font-size: 28px;
    }

    .subheading-2 {
        font-size: 14px;
        letter-spacing: 2.35px;
    }

    a.link{
        font-size: 16px;
        letter-spacing: 2.7px;
        color: ${color.textSec};

        @media ${device.tablet} { 
            font-size: 14px;
        }

        &:hover,
        &.active{
            color: ${color.textOne};
        }
    }

    .font-bellefair {
        font-family: ${fontfamily.bellefair};
    }

    .mb-half {
        margin-bottom: .5rem;
    }

    .mb-1 {
        margin-bottom: 1rem;
    }

    .mr-half {
        margin-right: .5rem;
    }

    .mr-1 {
        margin-right: 1rem;
    }

`;

export default GlobalStyle;
