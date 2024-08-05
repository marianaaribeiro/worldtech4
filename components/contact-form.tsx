import type { NextPage } from "next";
import styled from "styled-components";

export type ContactFormType = {
  className?: string;
};

const SeeWhatOthers = styled.p`
  margin: 0;
`;
const SeeWhatOthersContainer = styled.div`
  width: 532px;
  position: relative;
  line-height: 54px;
  font-weight: 600;
  display: inline-block;
  z-index: 4;
`;
const SeeWhatOthersContainer1 = styled.div`
  width: 532px;
  position: relative;
  line-height: 54px;
  font-weight: 600;
  display: inline-block;
  z-index: 5;
  margin-top: -108px;
`;
const ContactRoot = styled.div`
  height: 108px;
  width: 532px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--color-black);
  font-family: var(--short-title);
`;

const ContactForm: NextPage<ContactFormType> = ({ className = "" }) => {
  return (
    <ContactRoot className={className}>
      <SeeWhatOthersContainer>
        <SeeWhatOthers>See What Others Have</SeeWhatOthers>
        <SeeWhatOthers>to Say About Us</SeeWhatOthers>
      </SeeWhatOthersContainer>
      <SeeWhatOthersContainer1>
        <SeeWhatOthers>See What Others Have</SeeWhatOthers>
        <SeeWhatOthers>to Say About Us</SeeWhatOthers>
      </SeeWhatOthersContainer1>
    </ContactRoot>
  );
};

export default ContactForm;