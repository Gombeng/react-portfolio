import styled from "styled-components";
import Button from "../../components/Button";
import { BgImageHome } from "../../assets";
import { device, tabTitle, color } from "../../utils/Utils";
import { data } from "./../../assets/data";

export default function Home() {
  tabTitle("Home | Syahrizal Ardana");
  const { home } = data;

  return (
    <Container>
      <div className="left">
        <img src={home.profileImg} alt="profil" />
      </div>

      <div className="right">
        <h5 className="mb-half">{home.name.jpy}</h5>
        <h3 className="mb-half">Hi! I'm {home.name.en}</h3>
        <h5 style={{ marginBottom: "1rem" }}>
          {home.position} at {home.location}
        </h5>
        <p style={{ marginBottom: "2.5rem" }}>{home.desc}</p>

        <Button
          title="Download CV"
          color={color.bg}
          bgColor={color.textSec}
          as="a"
          href="https://drive.google.com/file/d/1gVoVIf0YCZAW462-UAlz5QbePa0I2j4k/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 8%;
  min-height: 100vh;
  background-image: url(${BgImageHome});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;

  p {
    max-width: 400px;
  }

  img {
    width: 8rem;
    margin-bottom: 1rem;
    @media ${device.tablet} {
      width: 15rem;
      margin-bottom: 0;
      margin-right: 3rem;
    }
  }

  @media ${device.tablet} {
    background-position: center;
    flex-direction: row;
  }
`;
