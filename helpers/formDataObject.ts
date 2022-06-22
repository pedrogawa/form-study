import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  first_name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Please put a valid Email.")
    .required("Email is required."),
  phone: Yup.string()
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "Please put a valid Phone."
    )
    .required("Phone is required"),
  message: Yup.string()
    .max(256, "Message can only have 256 characters.")
    .required("Message is required."),
  topics: Yup.string().required("Select a topic."),
});
