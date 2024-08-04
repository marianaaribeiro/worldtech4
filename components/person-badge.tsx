import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type PersonBadgeType = {
  className?: string;
  ellipse185?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const PersonBadgeChild = styled.img`
  width: 41px;
  position: relative;
  border-radius: 50%;
  height: 41px;
  object-fit: cover;
`;
const JeewaMarkram = styled.div`
  width: 121px;
  height: 19px;
  position: relative;
  display: inline-block;
`;
const Ceo = styled.div`
  width: 28px;
  height: 16px;
  position: relative;
  font-size: var(--font-size-smi);
  color: var(--gray-gray-600);
  display: inline-block;
`;
const PersonDetails = styled.div`
  height: 40px;
  width: 121px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
`;
const PersonBadgeRoot = styled.div<{
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
}>`width: 627px;
  height: 41px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--gray-gray-900);
  font-family: var(--paragraphs-para-1);
  width: ${(p) => p.propWidth}
  padding: ${(p) => p.propPadding}
`;

const PersonBadge: NextPage<PersonBadgeType> = ({
  className = "",
  propWidth,
  propPadding,
  ellipse185,
}) => {
  return (
    <PersonBadgeRoot
      propWidth={propWidth}
      propPadding={propPadding}
      className={className}
    >
      <PersonBadgeChild alt="" src={ellipse185} />
      <PersonDetails>
        <JeewaMarkram>Jeewa markram</JeewaMarkram>
        <Ceo>CEO</Ceo>
      </PersonDetails>
    </PersonBadgeRoot>
  );
};

export default PersonBadge;
