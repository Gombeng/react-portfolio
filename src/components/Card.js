import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { color, device } from "../utils/Utils";

const Card = ({ img, title, desc, demoUrl, repoUrl, ...rest }) => {
  return (
    <CardContainer {...rest}>
      <div className="img left">
        <img src={img} alt="project" />
      </div>
      <div className="right">
        <div className="text">
          <h4 className="title mb-half">{title}</h4>
          <p className="desc">{desc}</p>
        </div>

        <div className="btn">
          <Button
            as="a"
            color={color.bg}
            bgColor={color.textSec}
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            title="Demo"
          />
          <Button
            as="a"
            className="ml-1"
            color={color.bg}
            bgColor={color.textSec}
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            title="Repo"
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  text-align: center;
  min-height: 60vh;

  &:not(:last-child) {
    margin-bottom: -2rem;
  }

  @media ${device.laptop} {
    &:not(:last-child) {
      margin-bottom: 8rem;
    }
  }

  .img {
    width: 100%;
    border-radius: 0.3rem;
    background-color: #d0d6f9;
    margin: 0 auto;

    img {
      padding: 0.3rem;
      border-radius: 0.3rem;
      width: 100%;
    }

    @media ${device.laptop} {
      width: 50%;
    }
  }

  .text {
    padding: 1rem 0;

    .desc {
      max-width: 480px;
      margin: 0 auto;
    }
  }

  .btn {
    margin-top: 1.5rem;

    .ml-1 {
      margin-left: 1rem;
    }
  }
`;
