import type { NextPage } from "next";
import styled from "styled-components";

export type FrameComponent6Type = {
  className?: string;
};

const DiveIntoThe = styled.div`
  width: 201px;
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
`;
const CardsContainEverything = styled.div`
  width: 645px;
  position: relative;
  font-size: var(--header-2-size);
  line-height: 54px;
  font-weight: 600;
  color: var(--dark);
  display: inline-block;
`;
const DetailsCards = styled.div`
  width: 645px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const WeDesign = styled.div`
  width: 645px;
  height: 84px;
  position: relative;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
`;
const CheckIcon = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  z-index: 3;
`;
const CheckIcon1 = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
`;
const CheckIcon2 = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
`;
const CheckList = styled.div`
  height: 104px;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const BestkitCardsAre = styled.div`
  width: 422px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  z-index: 3;
`;
const EverySinglePart = styled.div`
  width: 538px;
  position: relative;
  font-weight: 500;
  display: inline-block;
`;
const OpenAnyCard = styled.div`
  width: 510px;
  position: relative;
  font-weight: 500;
  display: inline-block;
`;
const CheckmarkList = styled.div`
  height: 106px;
  width: 538px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const CheckListParent = styled.div`
  width: 570px;
  height: 106px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  color: var(--dark);
`;
const WeDesignBuildBrandCampaParent = styled.div`
  width: 645px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-mini);
  box-sizing: border-box;
  gap: var(--gap-6xl);
  color: var(--body-text);
`;
const BtnBg = styled.div`
  width: 173px;
  position: relative;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  height: 55px;
  display: none;
`;
const LearnMore = styled.div`
  width: 92px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  z-index: 1;
`;
const VectorIcon = styled.img`
  width: 7.1px;
  height: 12px;
  position: relative;
  z-index: 1;
`;
const VectorWrapper = styled.div`
  height: 16px;
  width: 7.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const LearnMoreButton = styled.div`
  width: 173px;
  height: 55px;
  border-radius: var(--br-10xs);
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-8xs-6) var(--padding-mini)
    var(--padding-11xl);
  box-sizing: border-box;
  gap: var(--gap-20xl-3);
  text-align: center;
  color: var(--white);
`;
const EvenMoreNestedCards = styled.div`
  width: 645px;
  height: 421px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const EvenMoreNestedCardsWrapper = styled.div`
  height: 446px;
  width: 645px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-6xl);
  box-sizing: border-box;
`;
const LeftSideIcon = styled.img`
  height: 472px;
  width: 784px;
  position: relative;
  object-fit: cover;
`;
const FrameParent = styled.div`
  height: 472px;
  width: 1778px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-330xl);
`;
const WtsInnerRoot = styled.div`
  width: 1940px;
  height: 617px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-143xl) var(--padding-126xl) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--short-title-size);
  color: var(--primary);
  font-family: var(--short-title);
`;

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <WtsInnerRoot className={className}>
      <FrameParent>
        <EvenMoreNestedCardsWrapper>
          <EvenMoreNestedCards>
            <DetailsCards>
              <DiveIntoThe>DIVE INTO THE DETAILS</DiveIntoThe>
              <CardsContainEverything>
                Cards Contain Everything You Need
              </CardsContainEverything>
            </DetailsCards>
            <WeDesignBuildBrandCampaParent>
              <WeDesign>{`We design & build brand, campaigns & digital projects for business large & small with customer experiences. Due to its fo widespread use as filler text for layouts, non-readability is of great importance human perception.`}</WeDesign>
              <CheckListParent>
                <CheckList>
                  <CheckIcon alt="" src="/check.svg" />
                  <CheckIcon1 alt="" src="/check.svg" />
                  <CheckIcon2 alt="" src="/check.svg" />
                </CheckList>
                <CheckmarkList>
                  <BestkitCardsAre>
                    Bestkit cards are your portal to more organized work
                  </BestkitCardsAre>
                  <EverySinglePart>
                    Every single part of your task can be managed, tracked, and
                    shared
                  </EverySinglePart>
                  <OpenAnyCard>
                    Open any card to uncover of checklists, due dates,
                    attachments
                  </OpenAnyCard>
                </CheckmarkList>
              </CheckListParent>
            </WeDesignBuildBrandCampaParent>
            <LearnMoreButton>
              <BtnBg />
              <LearnMore>Learn More</LearnMore>
              <VectorWrapper>
                <VectorIcon alt="" src="/vector.svg" />
              </VectorWrapper>
            </LearnMoreButton>
          </EvenMoreNestedCards>
        </EvenMoreNestedCardsWrapper>
        <LeftSideIcon alt="" src="/left-side@2x.png" />
      </FrameParent>
    </WtsInnerRoot>
  );
};

export default FrameComponent6;
