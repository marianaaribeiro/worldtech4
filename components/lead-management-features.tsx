import type { NextPage } from "next";
import styled from "styled-components";

export type LeadManagementFeaturesType = {
  className?: string;
  leadGeneration?: string;
  guideHelpsCompaniesIncrea?: string;
};

const Pattern = styled.div`
  width: 21px;
  height: 21px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-deepskyblue-100);
  border: 0px solid var(--color-deepskyblue-400);
  box-sizing: border-box;
`;
const IconWrapper = styled.div`
  height: 32px;
  width: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px 0px;
  box-sizing: border-box;
`;
const LeadGeneration = styled.div`
  width: 221px;
  height: 40px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const GuideHelpsCompanies = styled.div`
  width: 474.7px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
`;
const Content4 = styled.div`
  height: 110px;
  width: 474.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const Text1 = styled.div`
  height: 110px;
  width: 515.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const LeadManagementFeaturesRoot = styled.div`
  width: 561.7px;
  height: 162px;
  border-radius: var(--br-11xl);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-4xl);
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;

const LeadManagementFeatures: NextPage<LeadManagementFeaturesType> = ({
  className = "",
  leadGeneration,
  guideHelpsCompaniesIncrea,
}) => {
  return (
    <LeadManagementFeaturesRoot className={className}>
      <Text1>
        <IconWrapper>
          <Pattern />
        </IconWrapper>
        <Content4>
          <LeadGeneration>{leadGeneration}</LeadGeneration>
          <GuideHelpsCompanies>{guideHelpsCompaniesIncrea}</GuideHelpsCompanies>
        </Content4>
      </Text1>
    </LeadManagementFeaturesRoot>
  );
};

export default LeadManagementFeatures;