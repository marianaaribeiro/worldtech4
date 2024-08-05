import type { NextPage } from "next";
import styled from "styled-components";

export type TestimonialsType = {
  className?: string;
};

const LoremIpsumIs = styled.div`
  height: 112px;
  width: 340px;
  position: absolute;
  margin: 0 !important;
  bottom: 400px;
  left: 459px;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
`;
const GroupIcon = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  left: 470.7px;
  z-index: 2;
`;
const GroupIcon1 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  left: 496.2px;
  z-index: 2;
`;
const LoremIpsumIs1 = styled.div`
  height: 112px;
  width: 340px;
  position: absolute;
  margin: 0 !important;
  right: 449px;
  bottom: 400px;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const GroupIcon2 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  right: 495.7px;
  z-index: 4;
`;
const GroupIcon3 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  right: 470.2px;
  z-index: 5;
`;
const LoremIpsumIs2 = styled.div`
  height: 112px;
  width: 340px;
  position: absolute;
  margin: 0 !important;
  right: 925px;
  bottom: 400px;
  line-height: 28px;
  font-weight: 500;
  color: var(--white);
  display: inline-block;
  z-index: 6;
`;
const GroupIcon4 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  left: 1078.3px;
  z-index: 7;
`;
const GroupIcon5 = styled.img`
  height: 30px;
  width: 18.4px;
  position: absolute;
  margin: 0 !important;
  top: 487px;
  right: 1077.8px;
  z-index: 8;
`;
const TestimonialsContainerChild = styled.div`
  width: 2200px;
  position: relative;
  background-color: var(--color-gray-100);
  height: 1054px;
  display: none;
`;
const Testimonial = styled.div`
  width: 116px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.37);
  z-index: 1;
`;
const SeeWhatOthers = styled.p`
  margin: 0;
`;
const SeeWhatOthersContainer = styled.div`
  width: 532px;
  position: relative;
  font-size: var(--header-2-size);
  line-height: 54px;
  font-weight: 600;
  color: var(--primary);
  display: inline-block;
  z-index: 1;
`;
const TestimonialHeader = styled.div`
  width: 532px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const BgIcon = styled.img`
  width: 420px;
  height: 266px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const AvatarIcon = styled.img`
  height: 60px;
  width: 60px;
  position: relative;
  z-index: 1;
`;
const JhonSmith = styled.div`
  width: 123px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 1;
`;
const WebDeveloper = styled.div`
  width: 123px;
  position: relative;
  font-size: var(--short-title-size);
  font-weight: 500;
  color: var(--primary);
  display: inline-block;
  z-index: 1;
`;
const Background = styled.div`
  width: 123px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const Content4 = styled.div`
  height: 58px;
  width: 123px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const Cards = styled.div`
  height: 60px;
  width: 205px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const CardsWrapper = styled.div`
  width: 247px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-23xl);
  box-sizing: border-box;
`;
const TestimonialItems = styled.div`
  height: 346px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const BgIcon1 = styled.img`
  width: 420px;
  position: relative;
  height: 266px;
  object-fit: cover;
  z-index: 2;
`;
const AvatarIcon1 = styled.img`
  width: 60px;
  position: relative;
  height: 60px;
  z-index: 2;
`;
const MdShamimHossain = styled.div`
  width: 224px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const UiuxDesigner = styled.div`
  width: 124px;
  position: relative;
  font-size: var(--short-title-size);
  font-weight: 500;
  color: var(--white);
  display: inline-block;
`;
const MdShamimHossainParent = styled.div`
  width: 224px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const AvatarInner = styled.div`
  height: 58px;
  width: 224px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const Avatar = styled.div`
  height: 60px;
  width: 304px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const AuthorInfo = styled.div`
  width: 346px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-23xl);
  box-sizing: border-box;
`;
const Cards1 = styled.div`
  height: 346px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  color: var(--primary);
`;
const JesicaLirona = styled.div`
  width: 144px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const FrontEndDeveloper = styled.div`
  width: 166px;
  position: relative;
  font-size: var(--short-title-size);
  font-weight: 500;
  color: var(--primary);
  display: inline-block;
`;
const Background1 = styled.div`
  width: 166px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const CardInfo = styled.div`
  height: 58px;
  width: 166px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const Background2 = styled.div`
  height: 60px;
  width: 246px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const BackgroundWrapper = styled.div`
  width: 288px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-23xl);
  box-sizing: border-box;
`;
const TestimonialsRow = styled.div`
  height: 346px;
  width: 1372px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-37xl);
`;
const TestimonialCards = styled.div`
  width: 1498px;
  height: 346px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-107xl);
  box-sizing: border-box;
  font-size: var(--h4-size);
`;
const TestimonialsContainer = styled.div`
  height: 1054px;
  width: 2200px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-224xl) var(--padding-274xl) var(--padding-242xl);
  box-sizing: border-box;
  gap: var(--gap-45xl);
  color: var(--white);
`;
const Footer = styled.div`
  height: 1054px;
  width: 2200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const TestimonialsRoot = styled.div`
  width: 2200px;
  height: 1185px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-112xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--short-title-size);
  color: var(--dark);
  font-family: var(--short-title);
`;

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <TestimonialsRoot className={className}>
      <Footer>
        <LoremIpsumIs>
          Lorem Ipsum is a simply dummy text of an the printing and type
          settings for has been the industry's standard dumy text the ever since
          unknown printer.
        </LoremIpsumIs>
        <GroupIcon alt="" src="/group.svg" />
        <GroupIcon1 alt="" src="/group1.svg" />
        <LoremIpsumIs1>
          Lorem Ipsum is a simply dummy text of an the printing and type
          settings for has been the industry's standard dumy text the ever since
          unknown printer.
        </LoremIpsumIs1>
        <GroupIcon2 alt="" src="/group.svg" />
        <GroupIcon3 alt="" src="/group1.svg" />
        <LoremIpsumIs2>
          Lorem Ipsum is a simply dummy text of an the printing and type
          settings for has been the industry's standard dumy text the ever since
          unknown printer.
        </LoremIpsumIs2>
        <GroupIcon4 alt="" src="/group2.svg" />
        <GroupIcon5 alt="" src="/group3.svg" />
        <TestimonialsContainer>
          <TestimonialsContainerChild />
          <TestimonialHeader>
            <Testimonial>Testimonial</Testimonial>
            <SeeWhatOthersContainer>
              <SeeWhatOthers>See What Others Have</SeeWhatOthers>
              <SeeWhatOthers>to Say About Us</SeeWhatOthers>
            </SeeWhatOthersContainer>
          </TestimonialHeader>
          <TestimonialCards>
            <TestimonialsRow>
              <TestimonialItems>
                <BgIcon alt="" src="/bg@2x.png" />
                <CardsWrapper>
                  <Cards>
                    <AvatarIcon alt="" src="/avatar.svg" />
                    <Content4>
                      <Background>
                        <JhonSmith>Jhon Smith</JhonSmith>
                        <WebDeveloper>Web Developer</WebDeveloper>
                      </Background>
                    </Content4>
                  </Cards>
                </CardsWrapper>
              </TestimonialItems>
              <Cards1>
                <BgIcon1 alt="" src="/bg1@2x.png" />
                <AuthorInfo>
                  <Avatar>
                    <AvatarIcon1 alt="" src="/avatar1.svg" />
                    <AvatarInner>
                      <MdShamimHossainParent>
                        <MdShamimHossain>Md Shamim Hossain</MdShamimHossain>
                        <UiuxDesigner>UI/UX Designer</UiuxDesigner>
                      </MdShamimHossainParent>
                    </AvatarInner>
                  </Avatar>
                </AuthorInfo>
              </Cards1>
              <TestimonialItems>
                <BgIcon1 alt="" src="/bg@2x.png" />
                <BackgroundWrapper>
                  <Background2>
                    <AvatarIcon1 alt="" src="/avatar2.svg" />
                    <CardInfo>
                      <Background1>
                        <JesicaLirona>Jesica Lirona</JesicaLirona>
                        <FrontEndDeveloper>
                          Front End Developer
                        </FrontEndDeveloper>
                      </Background1>
                    </CardInfo>
                  </Background2>
                </BackgroundWrapper>
              </TestimonialItems>
            </TestimonialsRow>
          </TestimonialCards>
        </TestimonialsContainer>
      </Footer>
    </TestimonialsRoot>
  );
};

export default Testimonials;
