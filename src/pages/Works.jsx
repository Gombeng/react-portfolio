import { Button, Container, Heading } from "../components";
import { tabTitle } from "../utils";
import data from "../assets/data";

const Works = () => {
  tabTitle("Work | Syahrizal Ardana");
  const { works } = data;

  return (
    <Container
      className={"gap-5 md:gap-10 lg:gap-16 pt-32 sm:pt-40 md:pt-40 lg:pt-48"}
    >
      <div>
        <Heading className={"text-4xl md:text-5xl font-semibold"}>
          All of my works
        </Heading>
        <p>*fun facts: Adjust screen size to see different image.</p>
      </div>
      {works.map((work, idx) => (
        <div key={idx} className="flex items-center p-5">
          <div
            className={`p-4 flex gap-5 md:gap-10 flex-col items-center ${
              idx % 2 === 0
                ? " md:flex-row-reverse md:text-right"
                : " md:flex-row md:text-left"
            } `}
          >
            <div>
              {work.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={`Image`}
                  className={`${
                    img.name === "Desktop"
                      ? "max-w-md hidden lg:block"
                      : img.name === "Tablet"
                      ? "max-w-60 hidden md:block lg:hidden"
                      : "max-w-36 md:hidden"
                  }`}
                />
              ))}
            </div>

            <div className="">
              <Heading className="mb-3 max-w-xs text-3xl font-semibold">
                {work.title}
              </Heading>
              <p className="mb-2 max-w-xs">{work.desc}</p>

              <p className="mb-2">Tech Stack:</p>
              <div
                className={`flex gap-3 mb-5 max-w-80 flex-wrap justify-center ${
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {work.techStack.map((tech, idx) => (
                  <img
                    key={idx}
                    alt={tech}
                    title={tech}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
                    width="30"
                    height="30"
                  />
                ))}
              </div>
              <a href={work.demoUrl} target="_blank" rel="noreferrer">
                <Button className={"me-3"}>Demo</Button>
              </a>
              <a href={work.repoUrl} target="_blank" rel="noreferrer">
                <Button>Repo</Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Works;
