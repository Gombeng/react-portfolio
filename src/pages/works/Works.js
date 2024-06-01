import React from "react";
import Card from "../../components/Card";
import styled from "styled-components";
import { BgImageWorkD } from "../../assets";
import { device, tabTitle } from "../../utils/Utils";
import { data } from "./../../assets/data";

const Works = () => {
  tabTitle("Work | Syahrizal Ardana");
  const { works } = data;

  return (
    <Container>
      <h5 className="abs mb-2">01 _ RECENT WORKS</h5>
      <div className="mb-2 project">
        <div className=" bg-slate-200">
          <h1 className="red">Hello world!</h1>
        </div>
        {/* {works.map((work) => (
          <Card
            className="mb-2"
            img={work.img}
            title={work.title}
            desc={work.desc}
            demoUrl={work.demoUrl}
            repoUrl={work.repoUrl === null ? "Not found" : work.repoUrl}
          />
        ))} */}
      </div>
    </Container>
  );
};

export default Works;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10%;
  padding-top: 20vh;
  min-height: 100vh;
  color: black;
  background-color: #9c9c9c;
  ${"" /* background-image: url(${BgImageWorkD}); */}
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .abs {
    @media ${device.tablet} {
      position: fixed;
      top: 35%;
      left: 5%;
      writing-mode: tb-rl;
    }
  }
`;
