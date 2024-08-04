import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type PointsContentType = {
  className?: string;
  oSeuLogotipoPersonalizado?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
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
const Details = styled.div`
  height: 29px;
  width: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
  box-sizing: border-box;
`;
const OSeuLogotipo = styled.div<{
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
}>`height: 40px;
  width: 411px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  white-space: pre-wrap;
  display: inline-block;
  display: ${(p) => p.propDisplay}
  min-width: ${(p) => p.propMinWidth}
`;
const Content2 = styled.div`
  height: 40px;
  width: 411px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text1 = styled.div`
  height: 40px;
  width: 452px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const PointsContentRoot = styled.div`
  width: 498px;
  height: 92px;
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

const PointsContent: NextPage<PointsContentType> = ({
  className = "",
  propHeight,
  oSeuLogotipoPersonalizado,
  propDisplay,
  propMinWidth,
}) => {
  return (
    <PointsContentRoot className={className}>
      <Text1>
        <Details>
          <Pattern />
        </Details>
        <Content2>
          <OSeuLogotipo propDisplay={propDisplay} propMinWidth={propMinWidth}>
            {oSeuLogotipoPersonalizado}
          </OSeuLogotipo>
        </Content2>
      </Text1>
    </PointsContentRoot>
  );
};

export default PointsContent;
