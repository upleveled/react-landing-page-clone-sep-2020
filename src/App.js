/** @jsx jsx */
/** @jsxFrag React.Fragment */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/core';

import logo from './images/logo-new.png';
import flagAndArrow from './images/flag-and-arrow.png';
import banner from './images/banner.png';
import triangle from './images/Triangle.svg';

const centeredContainerStyles = css`
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const headerStyles = css`
  width: 100%;
  background: white;
  padding: 15px 0;
  position: fixed;
  top: 0;
  font-size: 13px;
`;

const headerInnerStyles = css`
  ${centeredContainerStyles};
  display: flex;
  justify-content: space-between;
`;

const navStyles = css`
  display: flex;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: #4a4a4a;
    transition: color 0.2s;
    line-height: 31px;

    &:hover {
      color: #009cbd;
    }
  }
`;

const logoStyles = css`
  height: 25px;
`;

const signUpButtonStyles = css`
  border: 2px solid #ff6384;
  border-radius: 40px;
  color: #ff6384;
  padding: 4px 10px;
  background-color: #fff;
  transition: background-color color 0.2s;

  &:hover {
    color: #fff;
    background-color: #ff6384;
  }
`;

const internationalDropdownButtonStyle = css`
  margin-left: 16px;
  margin-right: -35px;
  border: 0;
  background: transparent;
`;

const sectionStyle = css`
  > div {
    ${centeredContainerStyles}
  }

  h1 {
    color: #272727;
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 36px;
    }
  }
`;

const firstSectionStyle = css`
  ${sectionStyle};
  margin-top: -50px;

  > div {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-top: -104px;
    color: #4a4a4a;
  }

  @media (max-width: 767px) {
    height: 500px;
    padding-top: 200px;
    padding-bottom: 200px;

    img {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0.3;
      z-index: -1;
    }
  }
`;

const bannerImageStyle = css`
  width: 627px;
`;

const secondSectionStyle = css`
  ${sectionStyle};
  min-height: 400px;
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-size: 22.5%;
  display: flex;
  align-items: center;

  > div {
    text-align: center;
  }

  @media (min-width: 800px) {
    min-height: 720px;
  }

  @media (min-width: 1400px) {
    min-height: 1009px;
  }
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <div css={headerInnerStyles}>
          <a href="#a">
            <img css={logoStyles} src={logo} alt="UpDiagram Logo" />
          </a>

          <nav css={navStyles}>
            <a href="#a">Features</a>
            <a href="#a">Templates</a>
            <a href="#a">Contact Us</a>
            <a href="#a">Blog</a>
            <a href="#a">Pricing</a>
            <a href="#a">Sign In</a>

            <button css={signUpButtonStyles}>Sign Up</button>

            <button css={internationalDropdownButtonStyle}>
              <img alt="" src={flagAndArrow} />
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section css={firstSectionStyle}>
          <div>
            <div>
              <h1>Transform Ideas Into Action</h1>
              <p>
                Visualize product roadmaps, project plans, and reports for
                effective team collaboration and putting into action that impact
              </p>
              <input placeholder="Enter your email" type="email" />
              <button>Get Started - Free Forever</button>
              <button>Watch Video</button>
            </div>

            <img css={bannerImageStyle} src={banner} alt="" />
          </div>
        </section>

        <section css={secondSectionStyle}>
          <div>
            <h1>Creative Visualization</h1>
            <p>Different views for different roles and context</p>

            <button>Grid</button>
            <button>Timeline</button>
            <button>Board</button>
            <button>Mind Map</button>
            <button>Calendar</button>

            <img alt="" />
          </div>
        </section>

        <section css={sectionStyle}>
          <div>
            <h1>Make Your Life Easier</h1>
            <p>Get started fast with suitable templates for every team.</p>

            <a href="#a">
              <img src="" alt="" />
              <h2>Talk show - Event management</h2>
              <p>
                The Marketing department is responsible for running events.
                Particularly, They mainly organize the seminar and talk show to
                provide knowledge for audiences.
              </p>
            </a>

            <a href="#a">
              <img src="" alt="" />
              <h2>Event Marketing</h2>
              <p>
                Event Marketing has always been considered as an opportunity to
                build relationships, earn the trust of partners or customers and
                generate reputation.
              </p>
            </a>

            <a href="#a">
              <img src="" alt="" />
              <h2>Human Resource</h2>
              <p>
                The Human Resource Department has always faced the pressure to
                do recruitment. For the large scale of the company, the labor
                force is the inevitable issue.
              </p>
            </a>

            <a href="#a">
              <img src="" alt="" />
              <h2>Bug & Issue Tracker</h2>
              <p>
                When It comes to the IT industry, Bug and Issue are inevitable
                in every project. The team of IT need to determine the solution
                and tool to manage and minimize the potential Bugs and Issues.
              </p>
            </a>

            <a href="#a">View all case studies</a>
          </div>
        </section>

        <section css={sectionStyle}>
          <div>
            <h1>Single Place</h1>
            <p>Your love Apps can be integrated into UpDiagram.com</p>
            <img alt="" />
          </div>
        </section>

        <section css={sectionStyle}>
          <div>
            <h1>Let inspire your team to take action</h1>
            <input placeholder="Enter your email" type="email" />
            <button>Get Started - Free Forever</button>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div>
            <h2>Products</h2>
            <a href="#a">Templates</a>
            <a href="#a">Pricing</a>
          </div>
          <div>
            <h2>Company</h2>
            <a href="#a">About</a>
            <a href="#a">Contact Us</a>
          </div>
          <div>
            <h2>Resources</h2>
            <a href="#a">Blog</a>
            <a href="#a">Testimonials</a>
          </div>
          <div>
            <h2>Social networks</h2>
            <a href="#a">
              <img alt="Facebook" />
            </a>
            <a href="#a">
              <img alt="Instagram" />
            </a>
            <a href="#a">
              <img alt="Twitter" />
            </a>
          </div>
        </div>
        <div>
          <img css={logoStyles} src={logo} alt="UpDiagram Logo" />
          Copyrights © 2019 UpDiagram. All rights reserved.
          <br />
          <a href="#a">Terms of Policy and Service</a>
        </div>
      </footer>
    </>
  );
}

export default App;
