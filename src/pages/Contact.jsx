import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button, Container, InputField, Alerts } from "../components";
import { tabTitle } from "../utils";

export default function Contact() {
  tabTitle("Contact | Syahrizal Ardana");
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alertProps, setAlertProps] = useState({
    type: "",
    title: "",
    message: "",
  });
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleClose = () => {
    setAlertProps({ type: "", title: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.fullname.trim()) {
      errors.fullname = "Full name is required";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }
    if (!formValues.message.trim()) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_m36iowf",
        "template_9j7j9wg",
        e.target,
        "GMd4KvIdPndXVCOkx"
      );
      setAlertProps({
        type: "success",
        title: "Message Sent!",
        message: "Your message has been sent! We will reply soon, thanks!",
      });
      setFormValues({
        fullname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setAlertProps({
        type: "error",
        title: "Server Error!",
        message:
          "An error occurred while sending your message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setAlertProps({ type: "", title: "", message: "" });
      }, 5000);
    }
  };

  const fieldProps = [
    {
      label: "Full Name",
      name: "fullname",
      type: "text",
      value: formValues.fullname,
      onChange: handleChange,
      disabled: isLoading,
      errors: formErrors,
      placeholder: "Full Name...",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: formValues.email,
      onChange: handleChange,
      disabled: isLoading,
      errors: formErrors,
      placeholder: "Email...",
    },
    {
      label: "Messages",
      name: "message",
      type: "textarea",
      value: formValues.message,
      onChange: handleChange,
      disabled: isLoading,
      errors: formErrors,
      placeholder: "Messages...",
    },
  ];

  return (
    <Container className={"pt-20 sm:pt-24 md:pt-36 lg:pt-40"}>
      <Alerts onClose={handleClose} {...alertProps} />
      <div className="">
        <form
          onSubmit={sendEmail}
          className="space-y-4 rounded-md w-60 md:w-72 lg:w-80"
        >
          {fieldProps.map((field, idx) => (
            <InputField key={idx} {...field} />
          ))}

          {isLoading ? (
            "Sending..."
          ) : (
            <Button className={`cursor-pointer`}>Send Message</Button>
          )}
        </form>
      </div>
    </Container>
  );
}
