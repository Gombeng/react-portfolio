import { useNavigate } from "react-router-dom";

import { tabTitle } from "../utils";
import { Button, Container, Heading } from "../components";

export const Services = () => {
  tabTitle("Services | Syahrizal Ardana");
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Heading className={"text-2xl sm:text-4xl md:text-6xl mb-2"}>
          -- PAGE UNDER CONSTRUCTION --
        </Heading>
        <Heading className={"text-xl sm:text-4xl md:text-6xl mb-8"}>
          -- WILL BE FINISH SOON! --
        </Heading>

        <Button
          onClick={() => {
            navigate("/");
            console.log("click");
          }}
        >
          Go Back Home
        </Button>
      </div>
    </Container>
  );
};
