import { gql, useQuery } from "@apollo/client";
import { Disclosure, Transition } from "@headlessui/react";
import ReactMarkdown from "react-markdown";

import { IconImage } from "../IconImage";

import { QuestionIcon } from "../../assets/icons/QuestionIcon";
import { MinusCircleIcon } from "../../assets/icons/MinusCircleIcon";
import { PlusCircleIcon } from "../../assets/icons/PlusCircleIcon";

import "./styles.scss";

const GET_FAQ = gql`
  query GetFAQ {
    faqs(orderBy: publishedAt_ASC) {
      titulo
      conteudo
      id
    }
  }
`;

export function FAQSection() {
  const { data } = useQuery(GET_FAQ);

  return (
    <section className="section__container faq">
      <div className="section__content faq__content">
        <IconImage Icon={QuestionIcon} />

        <h2>Perguntas frequentes</h2>
        <span className="faq__subtitle">
          Tudo o que você precisa saber sobre o produto e faturamento.
        </span>

        <div className="faq__accordions">
          {data?.faqs?.map(({ id, titulo, conteudo }) => (
            <div key={id} className="faq__accordions-item">
              <Disclosure>
                {({ open: isOpen }) => (
                  <>
                    <Disclosure.Button className="faq__accordions-item-title">
                      <span>{titulo}</span>
                      {isOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform opacity-0"
                      enterTo="transform opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform opacity-100"
                      leaveTo="transform opacity-0"
                    >
                      <Disclosure.Panel className="faq__accordions-item-content">
                        <ReactMarkdown>{conteudo}</ReactMarkdown>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
