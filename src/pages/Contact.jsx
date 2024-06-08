// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";
// import Button from "../../components/Button";
// import { color, device, tabTitle } from "../../utils";
// import { BgImageContact } from "../../assets";
// import { ClipLoader } from "react-spinners";

// export default function Contact() {
//   tabTitle("Contact | Syahrizal Ardana");

//   const [loading, setLoading] = useState(false);

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_mz5p7v8",
//         "template_9j7j9wg",
//         form.current,
//         "TSrqJgWyQXrCKyvqy"
//       )
//       .then(
//         (result) => {
//           // console.log(result.text);
//           window.location.reload(false);
//           setLoading(false);
//           window.alert("Message Sent :)");
//         },
//         (error) => {
//           // console.log(error.text);
//           setLoading(false);
//           window.alert("Message not Sent :(");
//         }
//       );
//   };

//   return (
//     <Container>
//       <h5 className="mb-2 abs">02 _ MAIL ME A GOOD NEWS</h5>

//       <div>
//         <form ref={form} onSubmit={sendEmail}>
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="from_name"
//             placeholder="Your name..."
//             required
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             name="from_email"
//             placeholder="ur_email@gmail.com"
//             required
//           />

//           <label>Message</label>
//           <textarea
//             name="message"
//             placeholder="Words you wanna say..."
//             required
//           />
//           {loading ? (
//             <ClipLoader className="mt-1" color="#fff" size={32} />
//           ) : (
//             <Button
//               className="mt-1"
//               title="Send"
//               type="submit"
//               color={color.bg}
//               bgColor={color.textSec}
//             />
//           )}
//         </form>
//       </div>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding-top: 10vh;

//   width: 100%;
//   min-height: 100vh;
//   background-image: url(${BgImageContact});
//   background-repeat: no-repeat;
//   background-position: fixed;
//   background-size: cover;

//   p {
//     max-width: 400px;
//   }

//   form {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     justify-content: center;
//     max-width: 300px;

//     label {
//       margin: 1rem 0 0.5rem;
//     }

//     input,
//     textarea {
//       all: unset;
//       border-radius: 0.3rem;
//       padding: 1em;
//       background-color: ${color.bg};
//       border: 1px solid ${color.textOne};

//       width: 250px;
//       @media ${device.tablet} {
//         width: 400px;
//       }
//     }
//   }

//   .abs {
//     @media ${device.tablet} {
//       position: fixed;
//       top: 35%;
//       left: 5%;
//       writing-mode: tb-rl;
//     }
//   }
// `;

import { useNavigate } from "react-router-dom";
import { Button, Container, Heading } from "../components";
import { tabTitle } from "../utils";

export default function Contact() {
  tabTitle("Contact | Syahrizal Ardana");
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
}
