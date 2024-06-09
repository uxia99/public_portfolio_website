"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github_icon.svg";
import LinkedinIcon from "../../../public/linkedin_icon.svg";
import NotionIcon from "../../../public/notion_icon.svg";
import BlogIcon from "../../../public/blog_icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      from: "uxia99@kakao.com",
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // From the request for sending data to the server
    const options = {
      // The method is POST because we are sending date
      method: "POST",
      // Tell the server we're sending JSON data
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent successfully");
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 5000); // 5초 후 메시지 숨김
    } else {
      // 서버 응답 에러 처리
      console.error("Failed to send message:", resData);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h4 className="text-xl font-bold text-white my-2">{"Let's Connect"}</h4>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          {"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
        </p>
        <div className="socials flex flex-row gap-2 mt-3">
          <Link href="https://github.com/uxia99" target="_blank" className="mr-2">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="ml-2 mr-2">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.notion.so/Backend-TIL-Noted-52aad819f3844724929870e35708b7ee?pvs=4" target="_blank" className="mt-0.5 ml-2 mr-2">
            <Image src={NotionIcon} alt="Notion Icon" />
          </Link>
          <Link href="https://xia-it.tistory.com/" target="_blank" className="mt-1 ml-2">
            <Image src={BlogIcon} alt="Blog Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please send any questions"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about.."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {
              // If the email was submitted successfully, show a success message
              emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              )
            }
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
