import { tabTitle } from "../../utils";
import { useNavigate } from "react-router-dom";
import Button from "./../../components/Button";
import { Container, Heading } from "../../components";

const Notfound = () => {
  tabTitle("Not Found | Syahrizal Ardana");
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Heading className={"text-2xl sm:text-4xl md:text-6xl mb-8"}>
          -- YOU'VE LOST SOMEWHERE --
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
export default Notfound;
