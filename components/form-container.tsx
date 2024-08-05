import type { NextPage } from "next";
import styled from "styled-components";
import ContactForm from "./contact-form";

export type FormContainerType = {
  className?: string;
};

const FormContainerChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkturquoise-200);
  width: 2200px;
  height: 1054px;
  z-index: 3;
`;
const MacbookAir = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1119px;
  height: 716px;
  object-fit: cover;
  display: none;
  z-index: 4;
`;
const Bg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: var(--card-drop-shadow);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 923px;
  height: 582px;
  display: none;
`;
const Category4Icon = styled.img`
  position: absolute;
  top: 447.3px;
  left: 789.9px;
  width: 75.8px;
  height: 41.1px;
  z-index: 6;
`;
const Bg1 = styled.div`
  width: 197.5px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  height: 41.1px;
  display: none;
`;
const LogoDesign = styled.div`
  height: 16.5px;
  width: 140.2px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Category = styled.div`
  position: absolute;
  top: 447.3px;
  left: 568.1px;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  width: 197.5px;
  height: 41.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  box-sizing: border-box;
  z-index: 2;
`;
const Bg2 = styled.div`
  width: 269px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  height: 41.1px;
  display: none;
`;
const WebDevelopment = styled.div`
  height: 16.5px;
  width: 211.8px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Category1 = styled.div`
  position: absolute;
  top: 447.3px;
  left: 277.6px;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  width: 269px;
  height: 41.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  box-sizing: border-box;
  z-index: 2;
`;
const Bg3 = styled.div`
  width: 198.9px;
  position: relative;
  border-radius: var(--br-10xs);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  height: 41.1px;
  display: none;
`;
const WebDesign = styled.div`
  height: 16.5px;
  width: 137.4px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Category2 = styled.div`
  position: absolute;
  top: 447.3px;
  left: 57.2px;
  border-radius: var(--br-10xs);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  width: 198.9px;
  height: 41.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  z-index: 2;
  color: var(--primary);
`;
const Services = styled.div`
  position: absolute;
  top: 421.9px;
  left: 57.2px;
  font-weight: 500;
  display: inline-block;
  width: 95.9px;
  height: 22px;
  z-index: 6;
`;
const BtnBg = styled.div`
  width: 271.9px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  height: 41.1px;
  display: none;
`;
const SendMessage = styled.div`
  height: 16.5px;
  width: 163.1px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const SendMessageButton = styled.div`
  position: absolute;
  top: 510.9px;
  left: 57.2px;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  width: 271.9px;
  height: 41.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  box-sizing: border-box;
  z-index: 2;
  text-align: center;
  color: var(--white);
`;
const Bg4 = styled.div`
  position: absolute;
  top: 295.5px;
  left: 57.2px;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  width: 808.5px;
  height: 104px;
  z-index: 6;
`;
const Message = styled.div`
  position: absolute;
  top: 270.1px;
  left: 57.2px;
  font-weight: 500;
  display: inline-block;
  width: 100.2px;
  height: 22px;
  z-index: 6;
`;
const Bg5 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  width: 808.5px;
  height: 41.1px;
  display: none;
`;
const EstimateBudget = styled.div`
  position: absolute;
  top: 12.7px;
  left: 35.8px;
  font-weight: 500;
  display: inline-block;
  width: 187.5px;
  height: 16.5px;
  z-index: 7;
`;
const ServiceCategories = styled.div`
  position: absolute;
  top: 206.5px;
  left: 57.2px;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  width: 808.5px;
  height: 41.1px;
  z-index: 6;
  color: var(--body-text);
`;
const Price = styled.div`
  position: absolute;
  top: 181px;
  left: 57.2px;
  font-weight: 500;
  display: inline-block;
  width: 57.2px;
  height: 22px;
  z-index: 6;
`;
const Bg6 = styled.div`
  position: absolute;
  top: 117.4px;
  left: 479.4px;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  width: 386.4px;
  height: 41.1px;
`;
const EmailAddress = styled.div`
  position: absolute;
  top: 93.5px;
  left: 479.4px;
  font-weight: 500;
  display: inline-block;
  width: 161.7px;
  height: 22px;
`;
const Bg7 = styled.div`
  width: 386.4px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  height: 41.1px;
  display: none;
`;
const JhonDoe = styled.div`
  height: 16.5px;
  width: 110.2px;
  position: relative;
  line-height: 16.5px;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Name1 = styled.div`
  position: absolute;
  top: 117.4px;
  left: 57.2px;
  border-radius: var(--br-10xs);
  background-color: var(--background);
  width: 386.4px;
  height: 41.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  box-sizing: border-box;
  z-index: 2;
  color: var(--color-black);
`;
const Name2 = styled.div`
  position: absolute;
  top: 93.5px;
  left: 57.2px;
  font-weight: 500;
  display: inline-block;
  width: 67.3px;
  height: 22px;
  z-index: 6;
`;
const Bg8 = styled.div`
  width: 923px;
  position: relative;
  border-radius: var(--br-8xs) var(--br-8xs) 0px 0px;
  background-color: var(--primary);
  height: 63.6px;
  display: none;
`;
const GeneralEnquires = styled.div`
  height: 21.7px;
  width: 264.7px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Tab = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs) var(--br-8xs) 0px 0px;
  background-color: var(--primary);
  width: 923px;
  height: 63.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  box-sizing: border-box;
  z-index: 2;
  font-size: var(--h4-size);
  color: var(--white);
`;
const Bg9 = styled.div`
  position: absolute;
  top: 50px;
  left: 98px;
  box-shadow: var(--card-drop-shadow);
  border-radius: var(--br-8xs);
  background-color: var(--white);
  width: 923px;
  height: 582px;
  z-index: 5;
  color: var(--dark);
`;
const WriteYourMessage = styled.div`
  position: absolute;
  bottom: 341.3px;
  left: 192.4px;
  font-weight: 500;
  display: inline-block;
  width: 234.7px;
  height: 16.5px;
  z-index: 7;
`;
const VectorIcon = styled.img`
  position: absolute;
  right: 191px;
  bottom: 298.4px;
  width: 17.2px;
  height: 6.4px;
  z-index: 7;
`;
const WhatsYourEmail = styled.div`
  position: absolute;
  top: 180.2px;
  right: 286.9px;
  font-weight: 500;
  display: inline-block;
  width: 218.9px;
  height: 16.5px;
`;
const ContactForm1 = styled.div`
  position: absolute;
  top: 156px;
  left: 973px;
  width: 1119px;
  height: 716px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 4;
`;
const Logo5Icon = styled.img`
  position: absolute;
  top: 683.9px;
  left: 898px;
  width: 79px;
  height: 21.2px;
  overflow: hidden;
  z-index: 5;
`;
const TestimonialHeader = styled.div`
  width: 536px;
  height: 108px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-9xs);
  box-sizing: border-box;
`;
const HaveAProject = styled.div`
  width: 540.2px;
  position: relative;
  line-height: 54px;
  font-weight: 600;
  display: inline-block;
  z-index: 4;
`;
const ItIsA = styled.div`
  width: 688.9px;
  height: 54px;
  position: relative;
  font-size: var(--short-title-size);
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 5;
`;
const TrustedCompanies = styled.div`
  width: 688.9px;
  height: 133px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const EmailUs = styled.div`
  width: 87.9px;
  position: relative;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  z-index: 5;
`;
const Mailexamplecom = styled.div`
  width: 205.5px;
  position: relative;
  line-height: 28px;
  font-weight: 500;
  color: var(--white);
  display: inline-block;
  z-index: 4;
`;
const ContactDetails = styled.div`
  height: 56px;
  width: 205.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CallAnytime = styled.div`
  width: 130.5px;
  position: relative;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  z-index: 5;
`;
const Div = styled.div`
  width: 157.7px;
  position: relative;
  line-height: 28px;
  font-weight: 500;
  color: var(--white);
  display: inline-block;
  z-index: 4;
`;
const ContactDetails1 = styled.div`
  height: 56px;
  width: 157.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ContactInfo = styled.div`
  width: 448.5px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-66xl-3);
  font-size: var(--short-title-size);
`;
const TrustedCompaniesParent = styled.div`
  width: 688.9px;
  height: 223px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
`;
const TrustedBy = styled.div`
  width: 133.9px;
  height: 18.6px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
  z-index: 4;
`;
const Logo1Icon = styled.img`
  height: 30.1px;
  width: 96.7px;
  position: relative;
  z-index: 4;
`;
const Logo3Icon = styled.img`
  width: 101px;
  height: 21.2px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 4;
`;
const Company = styled.div`
  height: 25.2px;
  width: 106.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-7xs-5) var(--padding-9xs) 0px;
  box-sizing: border-box;
`;
const TrustedCompanies1 = styled.div`
  height: 25.2px;
  width: 101px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xs);
  box-sizing: border-box;
`;
const LogoContainer = styled.div`
  height: 30.1px;
  width: 500.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-79xl-1);
`;
const ClientLogos = styled.div`
  width: 506.4px;
  height: 30.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
  box-sizing: border-box;
`;
const ProjectContent = styled.div`
  width: 506.4px;
  height: 70.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl-4);
  font-size: var(--short-title-size);
  color: var(--dark);
`;
const FrameParent = styled.div`
  width: 688.9px;
  height: 363.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-51xl);
`;
const EmailInput = styled.div`
  position: absolute;
  top: 159px;
  left: 288px;
  width: 688.9px;
  height: 550.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-60xl);
  font-size: var(--header-2-size);
  color: var(--color-black);
`;
const FormContainerRoot = styled.div`
  width: 2200px;
  height: 1054px;
  position: relative;
  text-align: left;
  font-size: var(--short-title-size);
  color: var(--body-text);
  font-family: var(--short-title);
`;

const FormContainer: NextPage<FormContainerType> = ({ className = "" }) => {
  return (
    <FormContainerRoot className={className}>
      <FormContainerChild data-scroll-to="rectangle" />
      <ContactForm1>
        <MacbookAir alt="" src="/macbook-air-1@2x.png" />
        <Bg9>
          <Bg />
          <Category4Icon alt="" src="/category-4.svg" />
          <Category>
            <Bg1 />
            <LogoDesign>Logo Design</LogoDesign>
          </Category>
          <Category1>
            <Bg2 />
            <WebDevelopment>Web Development</WebDevelopment>
          </Category1>
          <Category2>
            <Bg3 />
            <WebDesign>Web Design</WebDesign>
          </Category2>
          <Services>Services</Services>
          <SendMessageButton>
            <BtnBg />
            <SendMessage>Send Message</SendMessage>
          </SendMessageButton>
          <Bg4 />
          <Message>Message</Message>
          <ServiceCategories>
            <Bg5 />
            <EstimateBudget>Estimate budget</EstimateBudget>
          </ServiceCategories>
          <Price>Price</Price>
          <Bg6 />
          <EmailAddress>Email address</EmailAddress>
          <Name1>
            <Bg7 />
            <JhonDoe>Jhon Doe</JhonDoe>
          </Name1>
          <Name2>Name</Name2>
          <Tab>
            <Bg8 />
            <GeneralEnquires>General Enquires</GeneralEnquires>
          </Tab>
        </Bg9>
        <WriteYourMessage>Write your message</WriteYourMessage>
        <VectorIcon alt="" src="/vector1.svg" />
        <WhatsYourEmail>What’s your email?</WhatsYourEmail>
      </ContactForm1>
      <Logo5Icon alt="" src="/logo-5.svg" />
      <EmailInput>
        <TestimonialHeader>
          <ContactForm />
        </TestimonialHeader>
        <FrameParent>
          <TrustedCompaniesParent>
            <TrustedCompanies>
              <HaveAProject>Have a Project in Mind?</HaveAProject>
              <ItIsA>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </ItIsA>
            </TrustedCompanies>
            <ContactInfo>
              <ContactDetails>
                <EmailUs>Email us</EmailUs>
                <Mailexamplecom>mail@example.com</Mailexamplecom>
              </ContactDetails>
              <ContactDetails1>
                <CallAnytime>Call anytime</CallAnytime>
                <Div>(555) 389 - 277</Div>
              </ContactDetails1>
            </ContactInfo>
          </TrustedCompaniesParent>
          <ProjectContent>
            <TrustedBy>Trusted By</TrustedBy>
            <ClientLogos>
              <LogoContainer>
                <Logo1Icon alt="" src="/logo-11.svg" />
                <Company>
                  <Logo3Icon alt="" src="/logo-3.svg" />
                </Company>
                <TrustedCompanies1>
                  <Logo3Icon alt="" src="/logo-4.svg" />
                </TrustedCompanies1>
              </LogoContainer>
            </ClientLogos>
          </ProjectContent>
        </FrameParent>
      </EmailInput>
    </FormContainerRoot>
  );
};

export default FormContainer;
