import type { NextPage } from "next";
import styled from "styled-components";

export type FrameComponentType = {
  className?: string;
};

const WaysAProject = styled.div`
  width: 537px;
  height: 106px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const UniqueAndPowerful = styled.div`
  width: 553px;
  height: 96px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
`;
const Text1 = styled.div`
  width: 553px;
  height: ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const PointIcon = styled.img`
  height: 30px;
  width: 28px;
  position: relative;
`;
const PointBackgroundIcon = styled.img`
  height: 44px;
  width: 58px;
  position: relative;
`;
const Icon = styled.div`
  width: 94px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const CrmSecurity = styled.div`
  width: 179px;
  height: 40px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const CardsAndMake = styled.div`
  width: 299px;
  height: 64px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
`;
const MarketingHubParent = styled.div`
  width: 299px;
  height: 113px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const PointContainer = styled.div`
  height: 167px;
  width: 299px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Icon1 = styled.img`
  width: 66px;
  height: 37px;
  position: relative;
`;
const MarketingHub = styled.div`
  width: 198px;
  height: 40px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const MarketingPoint = styled.div`
  height: 171px;
  width: 299px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl);
`;
const Points = styled.div`
  width: 641px;
  height: 171px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-24xl);
  font-size: var(--font-size-11xl);
`;
const GetStarted = styled.div`
  height: 32px;
  width: 105px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button1 = styled.div`
  width: 183px;
  height: 60px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-20xl);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white);
`;
const Text2 = styled.div`
  width: 641px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-36xl);
`;
const ProjectHighlight = styled.div`
  height: 631px;
  width: 641px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-52xl) 0px 0px;
  box-sizing: border-box;
`;
const BackgroundIcon = styled.img`
  height: 1077.4px;
  width: 769.2px;
  position: absolute;
  margin: 0 !important;
  right: -246.2px;
  bottom: -276.4px;
  object-fit: contain;
`;
const Background = styled.div`
  width: 699px;
  position: relative;
  box-shadow: 40px 48px 105px rgba(106, 106, 106, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  height: 702px;
  display: none;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 2.29px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-98xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 234px;
  height: 234px;
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 20.92px;
  left: 19px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-98xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 196.4px;
  height: 196.4px;
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const Crm = styled.div`
  position: absolute;
  top: 67px;
  left: 43px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 2;
`;
const ActiveDot = styled.div`
  position: absolute;
  top: 654.01px;
  left: 138.21px;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 534px;
  height: 534px;
  transform: rotate(-105deg);
  transform-origin: 0 0;
  z-index: 1;
`;
const Icon2 = styled.img`
  position: absolute;
  top: 81px;
  left: 434px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const Icon3 = styled.img`
  position: absolute;
  top: 252px;
  left: 503px;
  width: 134.6px;
  height: 134.6px;
  z-index: 2;
`;
const Icon4 = styled.img`
  position: absolute;
  top: 418px;
  left: 434px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const Icon5 = styled.img`
  position: absolute;
  top: 499px;
  left: 261px;
  width: 134.6px;
  height: 134.6px;
  z-index: 2;
`;
const Icon6 = styled.img`
  position: absolute;
  top: 418px;
  left: 91px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const Icon7 = styled.img`
  position: absolute;
  top: 251px;
  left: 12px;
  width: 134.6px;
  height: 134.6px;
  z-index: 2;
`;
const Icon8 = styled.img`
  position: absolute;
  top: 81px;
  left: 91px;
  width: 134.6px;
  height: 134.6px;
  z-index: 3;
`;
const ActiveDotParent = styled.div`
  position: absolute;
  top: -214px;
  right: -215.7px;
  width: 654px;
  height: 654px;
`;
const Crm1 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 2;
`;
const RectangleParent = styled.div`
  width: 236.3px;
  height: 236.3px;
  position: relative;
  z-index: 2;
`;
const Image1 = styled.div`
  height: 702px;
  width: 699px;
  box-shadow: 40px 48px 105px rgba(106, 106, 106, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-214xl) var(--padding-212xl) var(--padding-213xl-7);
  box-sizing: border-box;
  z-index: 1;
`;
const Description = styled.div`
  height: 702px;
  width: 699px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  font-size: var(--font-size-49xl);
`;
const DetailContainer = styled.div`
  height: 702px;
  width: 1416px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-57xl);
`;
const DetailContainerWrapperRoot = styled.div`
  width: 1620px;
  height: 1172.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-185xl) var(--padding-451xl-7) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <DetailContainerWrapperRoot className={className}>
      <DetailContainer>
        <ProjectHighlight>
          <Text2>
            <Text1>
              <WaysAProject>
                Ways a project management tool can help your team
              </WaysAProject>
              <UniqueAndPowerful>
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </UniqueAndPowerful>
            </Text1>
            <Points>
              <PointContainer>
                <Icon>
                  <PointIcon alt="" src="/point-icon.svg" />
                  <PointBackgroundIcon alt="" src="/point-background.svg" />
                </Icon>
                <MarketingHubParent>
                  <CrmSecurity>CRM Security</CrmSecurity>
                  <CardsAndMake>
                    cards and make more sales while chatting
                  </CardsAndMake>
                </MarketingHubParent>
              </PointContainer>
              <MarketingPoint>
                <Icon1 alt="" src="/icon.svg" />
                <MarketingHubParent>
                  <MarketingHub>Marketing Hub</MarketingHub>
                  <CardsAndMake>
                    Show off your goods in elegant product cards and mak.
                  </CardsAndMake>
                </MarketingHubParent>
              </MarketingPoint>
            </Points>
            <Button1>
              <GetStarted>Get Started</GetStarted>
            </Button1>
          </Text2>
        </ProjectHighlight>
        <Description>
          <BackgroundIcon alt="" src="/background5@2x.png" />
          <Image1>
            <Background />
            <RectangleParent>
              <FrameChild />
              <FrameItem />
              <Crm>CRM</Crm>
              <ActiveDotParent>
                <ActiveDot />
                <Icon2 alt="" src="/7.svg" />
                <Icon3 alt="" src="/6.svg" />
                <Icon4 alt="" src="/5.svg" />
                <Icon5 alt="" src="/4.svg" />
                <Icon6 alt="" src="/3.svg" />
                <Icon7 alt="" src="/21.svg" />
                <Icon8 alt="" src="/11.svg" />
              </ActiveDotParent>
              <Crm1>
                <FrameChild />
                <FrameItem />
                <Crm>CRM</Crm>
              </Crm1>
            </RectangleParent>
          </Image1>
        </Description>
      </DetailContainer>
    </DetailContainerWrapperRoot>
  );
};

export default FrameComponent;