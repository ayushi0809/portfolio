import React , {useState, useRef} from "react";

const Form = () => {
    const [name, setName] = useState("")
    const [emal, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const formRef = useRef(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleMessageChange = (event) => {
        setMsg(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        setEmail("");
        setMsg("");
        formRef.current.submit();
      };
  return (
    <div
      id="contact"
      className="w-full md:mt-56"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex flex-col justify-center items-center">
            <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          </div>
          <div>
          <p className="py-6">Submit the form below to get in touch with me</p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <form
            ref={formRef}
            action="https://getform.io/f/9ea888f1-8cfb-4b29-81bd-970313e6065a"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value = {name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value = {emal}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
            type = "text"
              name="message"
              value={msg}
              onChange={handleMessageChange}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;