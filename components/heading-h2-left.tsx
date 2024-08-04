import type { NextPage } from "next";
import styled from "styled-components";

export type HeadingH2LeftType = {
  className?: string;
};

const DecoLine = styled.div`
  height: 5px;
  width: 69px;
  position: relative;
  background: linear-gradient(225deg, #66ddf7, #57007b);
`;
const DecoLineWrapper = styled.div`
  width: 271.5px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-183xl-5);
  box-sizing: border-box;
`;
const UmPoucoSobre = styled.p`
  margin: 0;
`;
const EquipeProfissional = styled.b``;
const LeadingCompaniesTrustContainer = styled.div`
  width: 474px;
  height: 108px;
  position: relative;
  line-height: 55px;
  display: inline-block;
  flex-shrink: 0;
`;
const HeadingH2LeftRoot = styled.div`
  height: 133px;
  width: 474px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: center;
  font-size: var(--headings-headings-h2-size);
  color: var(--gray-gray-900);
  font-family: var(--paragraphs-para-1);
`;

const HeadingH2Left: NextPage<HeadingH2LeftType> = ({ className = "" }) => {
  return (
    <HeadingH2LeftRoot className={className}>
      <DecoLineWrapper>
        <DecoLine />
      </DecoLineWrapper>
      <LeadingCompaniesTrustContainer>
        <UmPoucoSobre>Um pouco sobre a nossa</UmPoucoSobre>
        <UmPoucoSobre>
          <EquipeProfissional>Equipe Profissional</EquipeProfissional>
        </UmPoucoSobre>
      </LeadingCompaniesTrustContainer>
    </HeadingH2LeftRoot>
  );
};

export default HeadingH2Left;
