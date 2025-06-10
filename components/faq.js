import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Is The Marketing Masters platform free to try?",
    answer:
      "Yes! We offer a free trial so you can explore all the key features before committing.",
  },
  {
    question: "Can I use this tool for my commercial marketing projects?",
    answer:
      "Absolutely! The Marketing Masters is designed to support both personal and commercial marketing campaigns.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We provide email and chat support during business hours, plus a rich knowledge base for self-service.",
  },
  {
    question: "Is there a cancellation or refund policy?",
    answer:
      "Yes, you can cancel anytime. For subscription plans, refunds are handled on a case-by-case basis within the first 30 days.",
  },
];

export default Faq;
