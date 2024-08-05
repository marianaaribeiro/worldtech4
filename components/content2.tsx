import type { NextPage } from "next";
import HeadingH2Left from "./heading-h2-left";
import styled from "styled-components";
import PersonBadge from "./person-badge";

export type Content2Type = {
  className?: string;
};

const HeadingH2LeftWrapper = styled.div`
  width: 1042px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-549xl);
  box-sizing: border-box;
`;
const BuildTheRight = styled.div`
  height: 38px;
  width: 379px;
  position: relative;
  line-height: 136.02%;
  font-weight: 600;
  display: inline-block;
`;
const BuildTheRightTeamToScaleWrapper = styled.div`
  width: 534px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-136xl);
  box-sizing: border-box;
`;
const FindingTheRight = styled.div`
  width: 534px;
  height: 113px;
  position: relative;
  font-size: var(--short-title-size);
  line-height: 30px;
  color: var(--gray-gray-800);
  text-align: left;
  display: inline-block;
  flex-shrink: 0;
`;
const TeamMemberContent = styled.div`
  width: 534px;
  height: 181px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const Our = styled.span``;
const DeliveryModel = styled.span`
  background: linear-gradient(225deg, #f76680, #57007b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const OurDeliveryModelContainer = styled.div`
  width: 503px;
  height: 69px;
  position: relative;
  line-height: 30px;
  display: inline-block;
  flex-shrink: 0;
`;
const BuildingContentChild = styled.div`
  height: 87px;
  width: 3px;
  position: relative;
  background: linear-gradient(225deg, #f76680, #57007b);
`;
const SimformIsQuick = styled.i`
  height: 87px;
  width: 435px;
  position: relative;
  line-height: 30px;
  display: inline-block;
  font-weight: 300;
  background: linear-gradient(225deg, #f76680, #57007b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex-shrink: 0;
`;
const BuildingContent = styled.div`
  width: 453px;
  height: 87px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
  font-size: var(--font-size-base);
`;
const ModelDescription = styled.div`
  width: 503px;
  height: 176px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const Description = styled.div`
  width: 804px;
  height: 41px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-31xl) 0px 0px;
  box-sizing: border-box;
`;
const Content4 = styled.div`
  height: 242px;
  width: 804px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const MemberDescription = styled.div`
  width: 835px;
  height: 242px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xl) 0px 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--short-title-size);
  color: var(--gray-gray-800);
`;
const TeamMember = styled.div`
  width: 835px;
  height: 433px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const TeamColumn = styled.div`
  height: 453px;
  width: 835px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px 0px;
  box-sizing: border-box;
`;
const MemberCardsChild = styled.div`
  width: 18px;
  position: relative;
  height: 1px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const MemberCardBackgrounds = styled.img`
  height: 473px;
  width: 631px;
  position: relative;
  border-radius: var(--br-3xs);
  object-fit: cover;
`;
const MemberCards = styled.div`
  width: 1634px;
  height: 473px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-149xl);
  z-index: 2;
`;
const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 769.2px;
  height: 1077.4px;
  object-fit: contain;
`;
const BackgroundIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 769.2px;
  height: 1077.4px;
  object-fit: contain;
  z-index: 1;
`;
const BackgroundParent = styled.div`
  height: 1077.4px;
  width: 755px;
  position: absolute;
  margin: 0 !important;
  top: -322px;
  right: -283px;
`;
const FrameChild = styled.img`
  height: 473px;
  width: 643px;
  position: relative;
  border-radius: var(--br-3xs);
  object-fit: cover;
`;
const BuildTheRight1 = styled.div`
  width: 379px;
  height: 38px;
  position: relative;
  line-height: 136.02%;
  font-weight: 600;
  display: inline-block;
`;
const FindingTheRight1 = styled.div`
  width: 534px;
  position: relative;
  line-height: 30px;
  display: inline-block;
  height: 113px;
  flex-shrink: 0;
`;
const OurDeliveryModelContainer1 = styled.div`
  width: 503px;
  position: relative;
  line-height: 30px;
  display: inline-block;
  height: 69px;
  flex-shrink: 0;
`;
const RightBlockDescriptionChild = styled.div`
  width: 3px;
  position: relative;
  background: linear-gradient(225deg, #f76680, #57007b);
  height: 87px;
`;
const SimformIsQuick1 = styled.i`
  width: 435px;
  position: relative;
  line-height: 30px;
  display: inline-block;
  font-weight: 300;
  background: linear-gradient(225deg, #f76680, #57007b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 87px;
  flex-shrink: 0;
`;
const RightBlockDescription = styled.div`
  width: 453px;
  height: 87px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const RightModelDescription = styled.div`
  width: 453px;
  height: 153px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
  font-size: var(--font-size-base);
`;
const RightDescription = styled.div`
  width: 503px;
  height: 242px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const SecondMemberSubtitle = styled.div`
  width: 534px;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--short-title-size);
  color: var(--gray-gray-800);
`;
const SecondMemberInfo = styled.div`
  width: 534px;
  height: 433px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const SecondColumnContent = styled.div`
  height: 453px;
  width: 534px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px 0px;
  box-sizing: border-box;
`;
const RectangleParent = styled.div`
  height: 473px;
  width: 1634px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-149xl);
  z-index: 2;
`;
const TeamColumns = styled.div`
  width: 1634px;
  height: 473px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const BuildTheRightTeamToScaleContainer = styled.div`
  width: 767px;
  height: 58px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-xl) var(--padding-369xl);
  box-sizing: border-box;
  text-align: center;
  color: var(--gray-gray-900);
`;
const FindingTheRightTalentIsNoWrapper = styled.div`
  width: 767px;
  height: 113px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-214xl);
  box-sizing: border-box;
  font-size: var(--short-title-size);
`;
const OurDeliveryModelHelpsYouCWrapper = styled.div`
  width: 736px;
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-214xl);
  box-sizing: border-box;
  font-size: var(--short-title-size);
`;
const SimpleContent = styled.div`
  height: 87px;
  width: 453px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini);
`;
const SimpleContentWrapper = styled.div`
  width: 686px;
  height: 92px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs) var(--padding-214xl);
  box-sizing: border-box;
`;
const CardDescription = styled.div`
  width: 736px;
  height: 242px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  font-size: var(--font-size-base);
`;
const TeamCardInfo = styled.div`
  width: 767px;
  height: 433px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const TeamCardContent = styled.div`
  height: 453px;
  width: 767px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px 0px;
  box-sizing: border-box;
`;
const CardBorderIcon = styled.img`
  height: 473px;
  width: 677px;
  position: relative;
  border-radius: var(--br-3xs);
  object-fit: cover;
`;
const MemberCard = styled.div`
  width: 1627px;
  height: 473px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-164xl);
  z-index: 2;
  text-align: left;
  color: var(--gray-gray-800);
`;
const FeatureContainer = styled.div`
  width: 1634px;
  height: 1609px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-76xl);
  font-size: var(--headings-headings-h3-size);
`;
const InnerContent = styled.div`
  height: 1864px;
  width: 1634px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-103xl);
`;
const InnerContentWrapperRoot = styled.div`
  width: 1917px;
  height: 2030px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-264xl) var(--padding-147xl) 0px;
  box-sizing: border-box;
  text-align: center;
  font-size: var(--headings-headings-h2-size);
  color: var(--gray-gray-900);
  font-family: var(--paragraphs-para-1);
`;

const Content2: NextPage<Content2Type> = ({ className = "" }) => {
  return (
    <InnerContentWrapperRoot className={className}>
      <InnerContent>
        <HeadingH2LeftWrapper>
          <HeadingH2Left />
        </HeadingH2LeftWrapper>
        <FeatureContainer>
          <MemberCards>
            <TeamColumn>
              <TeamMember>
                <TeamMemberContent>
                  <BuildTheRightTeamToScaleWrapper>
                    <BuildTheRight>Build the right team to scale</BuildTheRight>
                  </BuildTheRightTeamToScaleWrapper>
                  <FindingTheRight>
                    Finding the right talent is not easy. We help you find the
                    talent that suits your needs, follows your processes, and
                    sticks with you long term (not the case with freelancers
                  </FindingTheRight>
                </TeamMemberContent>
                <MemberDescription>
                  <Content4>
                    <ModelDescription>
                      <OurDeliveryModelContainer>
                        <Our>{`Our `}</Our>
                        <DeliveryModel>delivery model</DeliveryModel>
                        <Our>
                          {" "}
                          helps you cut costs and deliver within budget.
                        </Our>
                      </OurDeliveryModelContainer>
                      <BuildingContent>
                        <BuildingContentChild />
                        <SimformIsQuick>
                          "Simform is quick to identify larger problem with the
                          Software so we decided to expand our scope to build
                          new modules"
                        </SimformIsQuick>
                      </BuildingContent>
                    </ModelDescription>
                    <Description>
                      <PersonBadge
                        propWidth="754px"
                        propPadding="0px 291px"
                        ellipse185="/ellipse-185@2x.png"
                      />
                    </Description>
                  </Content4>
                </MemberDescription>
              </TeamMember>
            </TeamColumn>
            <MemberCardsChild />
            <MemberCardBackgrounds
              alt=""
              src="/member-card-backgrounds@2x.png"
            />
          </MemberCards>
          <TeamColumns>
            <BackgroundParent>
              <BackgroundIcon alt="" src="/background7@2x.png" />
              <BackgroundIcon1 alt="" src="/background7@2x.png" />
            </BackgroundParent>
            <RectangleParent>
              <FrameChild alt="" src="/rectangle-18@2x.png" />
              <SecondColumnContent>
                <SecondMemberInfo>
                  <BuildTheRight1>Build the right team to scale</BuildTheRight1>
                  <SecondMemberSubtitle>
                    <FindingTheRight1>
                      Finding the right talent is not easy. We help you find the
                      talent that suits your needs, follows your processes, and
                      sticks with you long term (not the case with freelancers
                    </FindingTheRight1>
                    <RightDescription>
                      <OurDeliveryModelContainer1>
                        <Our>{`Our `}</Our>
                        <DeliveryModel>delivery model</DeliveryModel>
                        <Our>
                          {" "}
                          helps you cut costs and deliver within budget.
                        </Our>
                      </OurDeliveryModelContainer1>
                      <RightModelDescription>
                        <RightBlockDescription>
                          <RightBlockDescriptionChild />
                          <SimformIsQuick1>
                            "Simform is quick to identify larger problem with
                            the Software so we decided to expand our scope to
                            build new modules"
                          </SimformIsQuick1>
                        </RightBlockDescription>
                        <PersonBadge
                          propWidth="172px"
                          propPadding="unset"
                          ellipse185="/ellipse-1851@2x.png"
                        />
                      </RightModelDescription>
                    </RightDescription>
                  </SecondMemberSubtitle>
                </SecondMemberInfo>
              </SecondColumnContent>
            </RectangleParent>
          </TeamColumns>
          <MemberCard>
            <TeamCardContent>
              <TeamCardInfo>
                <BuildTheRightTeamToScaleContainer>
                  <BuildTheRight>Build the right team to scale</BuildTheRight>
                </BuildTheRightTeamToScaleContainer>
                <FindingTheRightTalentIsNoWrapper>
                  <FindingTheRight1>
                    Finding the right talent is not easy. We help you find the
                    talent that suits your needs, follows your processes, and
                    sticks with you long term (not the case with freelancers
                  </FindingTheRight1>
                </FindingTheRightTalentIsNoWrapper>
                <CardDescription>
                  <OurDeliveryModelHelpsYouCWrapper>
                    <OurDeliveryModelContainer1>
                      <Our>{`Our `}</Our>
                      <DeliveryModel>delivery model</DeliveryModel>
                      <Our> helps you cut costs and deliver within budget.</Our>
                    </OurDeliveryModelContainer1>
                  </OurDeliveryModelHelpsYouCWrapper>
                  <SimpleContentWrapper>
                    <SimpleContent>
                      <RightBlockDescriptionChild />
                      <SimformIsQuick1>
                        "Simform is quick to identify larger problem with the
                        Software so we decided to expand our scope to build new
                        modules"
                      </SimformIsQuick1>
                    </SimpleContent>
                  </SimpleContentWrapper>
                  <PersonBadge ellipse185="/ellipse-1852@2x.png" />
                </CardDescription>
              </TeamCardInfo>
            </TeamCardContent>
            <CardBorderIcon alt="" src="/card-border@2x.png" />
          </MemberCard>
        </FeatureContainer>
      </InnerContent>
    </InnerContentWrapperRoot>
  );
};

export default Content2;
