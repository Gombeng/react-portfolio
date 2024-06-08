import { tabTitle } from "../utils";
import { Container, Heading, Button } from "../components";
import data from "./../assets/data";

export default function Home() {
  tabTitle("Home | Syahrizal Ardana");
  const { home } = data;

  return (
    <Container className={`gap-8 md:text-left md:flex-row pt-24  `}>
      <div className="max-w-48 md:max-w-52 lg:max-w-64">
        <img src={home.profileImg} alt="profil" className="rounded-full " />
      </div>

      <div className="">
        <Heading className={"text-sm mb-[-3px]"}>{home.name.jpy}</Heading>
        <Heading className={"text-4xl"}>Hi! I'm {home.name.en}</Heading>
        <Heading className={"mb-4"}>
          {home.position} at {home.location}
        </Heading>
        <p className="max-w-xs sm:max-w-sm lg:max-w-md mb-7">{home.desc}</p>

        <a
          href="https://drive.google.com/file/d/1gVoVIf0YCZAW462-UAlz5QbePa0I2j4k/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Download CV</Button>
        </a>
      </div>
    </Container>
  );
}
