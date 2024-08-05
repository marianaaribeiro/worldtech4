import type { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";
import PointsContent from "./points-content";
import { useRouter } from "next/router";

export type FrameComponent14Type = {
  className?: string;
};

const SellServe = styled.div`
  width: 418px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const BoostEnrolmentAndManage = styled.p`
  margin: 0;
`;
const BoostEnrolmentAndContainer = styled.div`
  width: 447px;
  height: 64px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  display: inline-block;
  z-index: 2;
`;
const FormHeading = styled.div`
  height: 126px;
  width: 447px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const YourBusinessEmail = styled.div`
  width: 255px;
  height: 32px;
  position: relative;
  line-height: 160%;
  display: inline-block;
  z-index: 2;
`;
const EmailChild = styled.div`
  width: 366px;
  position: relative;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  height: 77px;
  display: none;
`;
const Email = styled.div`
  width: 320.6px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Email1 = styled.div`
  height: 77px;
  width: 366px;
  border-radius: var(--br-8xs);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) var(--padding-mini-4) var(--padding-3xl)
    var(--padding-12xl);
  box-sizing: border-box;
  z-index: 2;
`;
const TryNow = styled.div`
  height: 32px;
  width: 76px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button1 = styled.div`
  height: 76px;
  width: 182px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkturquoise-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) var(--padding-34xl);
  box-sizing: border-box;
  z-index: 2;
  color: var(--color-darkslategray-100);
`;
const EmailField = styled.div`
  width: 557px;
  height: 77px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  color: var(--color-gray-400);
`;
const EmailInput = styled.div`
  height: 127px;
  width: 557px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  font-size: var(--font-size-xl);
`;
const InnerItem = styled.div`
  height: 127px;
  width: 1401px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-378xl);
`;
const InnerItemWrapper = styled.div`
  width: 1427.4px;
  height: 154.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-7xl-4) var(--padding-8xl-9) 0px;
  box-sizing: border-box;
`;
const Background = styled.div`
  width: 1414.5px;
  position: relative;
  box-shadow: 40px 48px 105px #ebebeb;
  backdrop-filter: blur(62px);
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  height: 848.9px;
  display: none;
`;
const MenuIcon = styled.img`
  height: 736.4px;
  width: 114.9px;
  position: relative;
  z-index: 1;
`;
const Dashboard = styled.div`
  width: 146.4px;
  height: 37px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const DashboardLink = styled.div`
  height: 42.7px;
  width: 146.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-7) 0px 0px;
  box-sizing: border-box;
`;
const Background1 = styled.div`
  width: 385.1px;
  position: relative;
  border-radius: var(--br-7xl);
  background-color: var(--white);
  border: 0.6px solid var(--white);
  box-sizing: border-box;
  height: 43.1px;
  display: none;
`;
const SearchIcon = styled.img`
  width: 16px;
  height: 15.4px;
  position: relative;
  z-index: 1;
`;
const SearchIconContainer = styled.div`
  height: 18px;
  width: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-6) 0px 0px;
  box-sizing: border-box;
`;
const SearchHere = styled.div`
  height: 18.2px;
  width: 82.3px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Search = styled.div`
  height: 43.1px;
  width: 385.1px;
  border-radius: var(--br-7xl);
  background-color: var(--white);
  border: 0.6px solid var(--white);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs-5) var(--padding-10xl) var(--padding-sm-4);
  gap: var(--gap-2xs-9);
  z-index: 1;
  font-size: var(--font-size-xs-4);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const DashboardLinkParent = styled.div`
  width: 573.8px;
  height: 43.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-23xl-3);
`;
const Background2 = styled.div`
  width: 754.6px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 420.8px;
  display: none;
`;
const CrmAnalyticalReport = styled.div`
  height: 31px;
  width: 251.7px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Pattern = styled.div`
  width: 12.2px;
  height: 11.5px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-lightskyblue);
  z-index: 1;
`;
const PatternWrapper = styled.div`
  height: 20.1px;
  width: 12.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs-6) 0px 0px;
  box-sizing: border-box;
`;
const Income = styled.div`
  height: 23.9px;
  width: 53.2px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const FrameParent = styled.div`
  width: 72.4px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const LegendValue = styled.div`
  height: 28.7px;
  width: 80.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-8) var(--padding-4xs-2) 0px 0px;
  box-sizing: border-box;
`;
const ExpensesChartIcon = styled.div`
  width: 12.2px;
  height: 11.5px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-hotpink);
  z-index: 1;
`;
const Expenses = styled.div`
  height: 23.9px;
  width: 71.4px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const IncomeValue = styled.div`
  width: 93.8px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs-2);
`;
const MenuIcon1 = styled.div`
  height: 29.6px;
  width: 93.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-7) 0px 0px;
  box-sizing: border-box;
`;
const Btn = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 12.62px;
  background-color: var(--color-gray-500);
  border: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
`;
const Monthly = styled.div`
  height: 23.9px;
  width: 59.3px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const KeyboardArrowDownIcon = styled.img`
  width: 18.3px;
  height: 17.2px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Dropdown = styled.div`
  height: 23.8px;
  width: 18.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-6) 0px 0px;
  box-sizing: border-box;
`;
const AllTime = styled.div`
  height: 38.3px;
  width: 132.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-8) var(--padding-base-4) var(--padding-3xs-6)
    var(--padding-lg-3);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-xl-1);
  z-index: 1;
`;
const MenuIcon2 = styled.img`
  width: 5.6px;
  height: 21px;
  position: relative;
  z-index: 1;
`;
const ExpenseIcon = styled.div`
  height: 29.6px;
  width: 5.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs-6) 0px 0px;
  box-sizing: border-box;
`;
const ExpensesValue = styled.div`
  height: 38.3px;
  width: 157.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi-3);
`;
const ReportData = styled.div`
  height: 38.3px;
  width: 376.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl-3);
  text-align: center;
  font-size: var(--font-size-mini-3);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const CrmAnalyticalReportParent = styled.div`
  height: 38.3px;
  width: 674.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-27xl-7);
`;
const ReportContent = styled.div`
  width: 676.3px;
  height: 38.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-6);
  box-sizing: border-box;
`;
const K = styled.div`
  width: 27.8px;
  height: 21px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const K1 = styled.div`
  width: 25.4px;
  height: 21px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const K2 = styled.div`
  width: 26.6px;
  height: 21px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Div = styled.div`
  height: 23.9px;
  width: 9.7px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const LegendLabel = styled.div`
  width: 11.3px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs-6) 0px 0px;
  box-sizing: border-box;
`;
const MonthLabels = styled.div`
  height: 253.4px;
  width: 28.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-36xl-5);
`;
const Line = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const Line1 = styled.div`
  position: absolute;
  top: 154px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const Line2 = styled.div`
  position: absolute;
  top: 77.5px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const Line3 = styled.div`
  position: absolute;
  top: 230.5px;
  left: 0px;
  border-top: 0.8px solid var(--color-lightsteelblue);
  box-sizing: border-box;
  width: 619px;
  height: 0.8px;
  opacity: 0.3;
  z-index: 1;
`;
const PatternIcon = styled.img`
  position: absolute;
  top: 47.8px;
  left: 0px;
  width: 618.2px;
  height: 182.7px;
  z-index: 2;
`;
const PatternIcon1 = styled.img`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 618.2px;
  height: 229.5px;
  z-index: 3;
`;
const HoverIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 489.8px;
  width: 61.1px;
  height: 230.5px;
  z-index: 4;
`;
const LineParent = styled.div`
  width: 618.2px;
  height: 231.3px;
  position: relative;
`;
const FrameWrapper = styled.div`
  height: 239.1px;
  width: 618.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs-8);
  box-sizing: border-box;
`;
const MonthLabelsParent = styled.div`
  width: 672.8px;
  height: 253.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-7xl-1);
`;
const Jan = styled.div`
  height: 23.9px;
  width: 27.8px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Feb = styled.div`
  width: 29px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Months = styled.div`
  height: 23.9px;
  width: 33.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs-2) 0px 0px;
  box-sizing: border-box;
`;
const Mar = styled.div`
  height: 23.9px;
  width: 29px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Apr = styled.div`
  width: 27.8px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Months1 = styled.div`
  height: 23.9px;
  width: 30.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs-6) 0px 0px;
  box-sizing: border-box;
`;
const May = styled.div`
  width: 31.5px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Months2 = styled.div`
  height: 23.9px;
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs-5) 0px 0px;
  box-sizing: border-box;
`;
const Jul = styled.div`
  width: 23px;
  height: 23.9px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Months3 = styled.div`
  height: 23.9px;
  width: 25.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs-8) 0px 0px;
  box-sizing: border-box;
`;
const Aug = styled.div`
  height: 23.9px;
  width: 30.3px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const LegendItems = styled.div`
  height: 23.9px;
  width: 598.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-32xl-1);
`;
const ChartDates = styled.div`
  width: 608.6px;
  height: 23.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-2xs-5) 0px 0px;
  box-sizing: border-box;
  text-align: center;
`;
const ActivityChart = styled.div`
  width: 672.8px;
  height: 286.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xs-6);
  text-align: right;
  font-size: var(--font-size-mini-3);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const ReportContent1 = styled.div`
  width: 754.6px;
  height: 420.8px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl-6) var(--padding-18xl) var(--padding-16xl-4);
  box-sizing: border-box;
  gap: var(--gap-10xl-6);
  z-index: 1;
  font-size: var(--font-size-2xl);
`;
const Navigation1 = styled.div`
  width: 754.6px;
  height: 487.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Background3 = styled.div`
  width: 364.2px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 201.1px;
  display: none;
`;
const TskReport = styled.div`
  height: 31px;
  width: 116.2px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Menus = styled.div`
  height: 21px;
  width: 5.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs-6) 0px 0px;
  box-sizing: border-box;
`;
const FirstTwo = styled.div`
  width: 286.4px;
  height: 32.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-88xl-9);
`;
const Pattern1 = styled.div`
  position: absolute;
  top: 0px;
  left: 262.7px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern2 = styled.div`
  position: absolute;
  top: 34.3px;
  left: 262.7px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 43.2px;
  z-index: 1;
`;
const Pattern3 = styled.div`
  position: absolute;
  top: 0px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern4 = styled.div`
  position: absolute;
  top: 52.1px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 25.4px;
  z-index: 1;
`;
const Pattern5 = styled.div`
  position: absolute;
  top: 0px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern6 = styled.div`
  position: absolute;
  top: 17.8px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 59.7px;
  z-index: 1;
`;
const Pattern7 = styled.div`
  position: absolute;
  top: 0px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern8 = styled.div`
  position: absolute;
  top: 25.4px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 52.1px;
  z-index: 1;
`;
const Pattern9 = styled.div`
  position: absolute;
  top: 0px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern10 = styled.div`
  position: absolute;
  top: 34.3px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 43.2px;
  z-index: 1;
`;
const Pattern11 = styled.div`
  position: absolute;
  top: 0px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern12 = styled.div`
  position: absolute;
  top: 14px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 63.5px;
  z-index: 1;
`;
const Pattern13 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-mistyrose);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern14 = styled.div`
  position: absolute;
  top: 45.8px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-mediumslateblue-200);
  width: 21.4px;
  height: 31.8px;
  z-index: 1;
`;
const Chart = styled.div`
  width: 284.1px;
  height: 77.5px;
  position: relative;
  z-index: 1;
`;
const Div1 = styled.div`
  height: 201.1px;
  width: 364.2px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-17xl) var(--padding-19xl-6) var(--padding-3xl-6);
  box-sizing: border-box;
  gap: var(--gap-15xl);
  z-index: 1;
`;
const Background4 = styled.div`
  width: 365.4px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 201.1px;
  display: none;
`;
const RevenueGraph = styled.div`
  height: 31px;
  width: 174.2px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const RevenueGraphParent = styled.div`
  width: 287.7px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-88xl-9);
`;
const Pattern15 = styled.div`
  position: absolute;
  top: 0px;
  left: 262.8px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern16 = styled.div`
  position: absolute;
  top: 38.3px;
  left: 262.8px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 39.2px;
  z-index: 1;
`;
const Pattern17 = styled.div`
  position: absolute;
  top: 0px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern18 = styled.div`
  position: absolute;
  top: 54.6px;
  left: 219px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 23px;
  z-index: 1;
`;
const Pattern19 = styled.div`
  position: absolute;
  top: 0px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern20 = styled.div`
  position: absolute;
  top: 23px;
  left: 175.2px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 54.5px;
  z-index: 1;
`;
const Pattern21 = styled.div`
  position: absolute;
  top: 0px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern22 = styled.div`
  position: absolute;
  top: 29.7px;
  left: 131.4px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 47.8px;
  z-index: 1;
`;
const Pattern23 = styled.div`
  position: absolute;
  top: 0px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern24 = styled.div`
  position: absolute;
  top: 38.3px;
  left: 87.6px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 39.2px;
  z-index: 1;
`;
const Pattern25 = styled.div`
  position: absolute;
  top: 0px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern26 = styled.div`
  position: absolute;
  top: 19.2px;
  left: 43.8px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 58.3px;
  z-index: 1;
`;
const Pattern27 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-lightblue);
  width: 21.4px;
  height: 77.5px;
`;
const Pattern28 = styled.div`
  position: absolute;
  top: 48.8px;
  left: 0px;
  border-radius: 16.83px;
  background-color: var(--color-deepskyblue-200);
  width: 21.4px;
  height: 28.7px;
  z-index: 1;
`;
const Div2 = styled.div`
  height: 201.1px;
  width: 365.4px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-17xl) var(--padding-19xl-6) var(--padding-3xl-6);
  box-sizing: border-box;
  gap: var(--gap-15xl);
  z-index: 1;
`;
const ReportItem = styled.div`
  width: 755px;
  height: 201.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl-4);
  font-size: var(--font-size-2xl);
`;
const MenuContent = styled.div`
  height: 736.2px;
  width: 755px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-28xl-2);
`;
const NotifyIcon = styled.img`
  height: 43.1px;
  width: 45.9px;
  position: relative;
  z-index: 1;
`;
const ImageIcon = styled.img`
  height: 43.1px;
  width: 45.9px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const NotifyParent = styled.div`
  height: 43.1px;
  width: 104.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi-3);
`;
const InnerContentInner = styled.div`
  width: 123.4px;
  height: 43.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-lgi-3) 0px 0px;
  box-sizing: border-box;
`;
const Background5 = styled.div`
  width: 364.6px;
  position: relative;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  height: 669.5px;
  display: none;
`;
const DailyActivities = styled.div`
  height: 31px;
  width: 164.6px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MenuIcon3 = styled.img`
  width: 5.6px;
  height: 21px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const DailyActivitiesParent = styled.div`
  height: 31px;
  width: 287.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-98xl-5);
`;
const TypeLabels = styled.div`
  width: 297.9px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-2xs-2);
  box-sizing: border-box;
`;
const ChartChild = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const B = styled.b`
  width: 49.3px;
  height: 29.8px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Wrapper = styled.div`
  height: 171.9px;
  width: 151.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-123xl-1) var(--padding-82xl-9) 0px 0px;
  box-sizing: border-box;
`;
const B1 = styled.b`
  height: 24px;
  width: 49.3px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
  margin-left: -3.5px;
`;
const SecondChartLabel = styled.div`
  height: 205.9px;
  width: 49.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-157xl-1) 0px 0px;
  box-sizing: border-box;
  margin-left: -3.5px;
`;
const Chart1 = styled.div`
  width: 308.6px;
  height: 288.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xl-7) var(--padding-lgi-4) var(--padding-35xl-2);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-base-8);
  color: var(--white);
`;
const TypeLabelsParent = styled.div`
  width: 308.6px;
  height: 354.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-16xl);
`;
const Icon = styled.img`
  width: 61.1px;
  position: relative;
  height: 57.4px;
  z-index: 3;
`;
const Icon1 = styled.img`
  width: 61.1px;
  position: relative;
  height: 57.4px;
`;
const Icon2 = styled.img`
  width: 61.1px;
  height: 57.4px;
  position: relative;
  z-index: 1;
`;
const Icons = styled.div`
  width: 61.1px;
  height: 210.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi-1);
`;
const IconsWrapper = styled.div`
  height: 215.2px;
  width: 61.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-8) 0px 0px;
  box-sizing: border-box;
`;
const Entertainment = styled.div`
  width: 124.6px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  height: 24px;
  flex-shrink: 0;
`;
const EntertainmentWrapper = styled.div`
  width: 125.7px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-1);
  box-sizing: border-box;
`;
const ActivityCategoryLabel = styled.div`
  width: 64.1px;
  height: 40.9px;
  position: relative;
  font-size: var(--font-size-6xl-2);
  font-weight: 500;
  font-family: var(--font-jost);
  color: var(--color-gray-200);
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const FrameContainer = styled.div`
  width: 125.7px;
  height: 68.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-8);
`;
const Travel = styled.div`
  width: 54.5px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  height: 24px;
  flex-shrink: 0;
`;
const TravelWrapper = styled.div`
  width: 55.6px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-1);
  box-sizing: border-box;
`;
const Div3 = styled.div`
  width: 61.7px;
  position: relative;
  font-size: var(--font-size-6xl-2);
  font-weight: 500;
  font-family: var(--font-jost);
  color: var(--color-gray-200);
  display: inline-block;
  height: 40.9px;
  flex-shrink: 0;
  z-index: 1;
`;
const FrameDiv = styled.div`
  width: 61.7px;
  height: 68.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-8);
`;
const Shopping = styled.div`
  height: 24px;
  width: 83.5px;
  position: relative;
  letter-spacing: -0.01em;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const Transaction = styled.div`
  width: 84.6px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs-1);
  box-sizing: border-box;
`;
const Div4 = styled.div`
  width: 61.7px;
  height: 40.9px;
  position: relative;
  font-size: var(--font-size-6xl-2);
  font-weight: 500;
  font-family: var(--font-jost);
  color: var(--color-gray-200);
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const TransactionParent = styled.div`
  width: 84.6px;
  height: 68.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-8);
`;
const TypeIcons = styled.div`
  height: 221.7px;
  width: 125.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs-8);
`;
const FrameGroup = styled.div`
  height: 221.7px;
  width: 208.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl-4);
`;
const DownlaodIcon = styled.img`
  width: 21.9px;
  position: relative;
  height: 18.9px;
  z-index: 3;
`;
const DownlaodIcon1 = styled.img`
  width: 21.9px;
  position: relative;
  height: 18.9px;
`;
const DownlaodIcon2 = styled.img`
  width: 21.9px;
  height: 18.9px;
  position: relative;
  z-index: 1;
`;
const Downloads = styled.div`
  width: 21.9px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-38xl-7);
`;
const DownloadsWrapper = styled.div`
  height: 191.5px;
  width: 21.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lgi-5) 0px 0px;
  box-sizing: border-box;
`;
const DailyIconList = styled.div`
  width: 301.5px;
  height: 221.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-52xl-4);
  font-size: var(--font-size-base-8);
  color: var(--color-lightsteelblue);
  font-family: var(--font-zen-kaku-gothic-antique);
`;
const ActivitiesContent = styled.div`
  width: 364.6px;
  height: 669.5px;
  box-shadow: 0px 8.4px 58.91px 3.37px rgba(128, 159, 186, 0.2);
  border-radius: 29.46px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl-6) var(--padding-8xl-5) var(--padding-12xl-8)
    var(--padding-9xl-5);
  box-sizing: border-box;
  gap: var(--gap-11xl-6);
  z-index: 1;
`;
const InnerContent = styled.div`
  height: 736.6px;
  width: 364.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-2xl);
`;
const MenuContainer = styled.div`
  height: 736.6px;
  width: 1144.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
`;
const Image1 = styled.div`
  height: 848.9px;
  width: 1414.5px;
  box-shadow: 40px 48px 105px #ebebeb;
  backdrop-filter: blur(62px);
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-34xl-4) var(--padding-23xl-4) var(--padding-39xl-9)
    var(--padding-51xl-2);
  gap: var(--gap-23xl-4);
  z-index: 2;
`;
const Details = styled.div`
  width: 1427.4px;
  height: 848.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-smi-9) 0px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-6xl-2);
  color: var(--color-gray-200);
`;
const DecoLine = styled.div`
  height: 5px;
  width: 69px;
  position: relative;
  background: linear-gradient(225deg, #66ddf7, #57007b);
`;
const DecoLineWrapper = styled.div`
  width: 69px;
  height: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-183xl-5);
  box-sizing: border-box;
`;
const LeadingCompaniesTrust = styled.b`
  width: 474px;
  height: 108px;
  position: relative;
  line-height: 55px;
  display: inline-block;
  flex-shrink: 0;
`;
const HeadingH2Left1 = styled.div`
  height: 133px;
  width: 474px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const HeadingH2LeftWrapper = styled.div`
  width: 927px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-434xl) 0px 0px;
  box-sizing: border-box;
`;
const Image1034Icon = styled.img`
  width: 800px;
  height: 491px;
  position: relative;
  object-fit: cover;
`;
const Image1035Icon = styled.img`
  height: 372px;
  width: 611px;
  position: relative;
  border-radius: var(--br-xl);
  object-fit: cover;
  z-index: 3;
`;
const Image1035Wrapper = styled.div`
  width: 656px;
  height: 372px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-26xl) 0px 0px;
  box-sizing: border-box;
`;
const Image1036Icon = styled.img`
  width: 701px;
  height: 505px;
  position: relative;
  border-radius: var(--br-xl);
  object-fit: cover;
  z-index: 3;
`;
const Image1025Icon = styled.img`
  height: 509px;
  width: 449px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const Image1025Wrapper = styled.div`
  width: 542px;
  height: 509px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-74xl) 0px 0px;
  box-sizing: border-box;
`;
const FrameParent1 = styled.div`
  height: 1484px;
  width: 701px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-30xl);
`;
const GalleryGrid = styled.div`
  width: 717px;
  height: 1484px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-base);
  box-sizing: border-box;
`;
const TwoImages = styled.div`
  width: 800px;
  height: 2076px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-82xl);
`;
const Gallery = styled.div`
  height: 2110px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-15xl);
  box-sizing: border-box;
`;
const CriaoInovadoraDe = styled.div`
  width: 589px;
  height: 123px;
  position: relative;
  letter-spacing: -0.02px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const AoContratarO = styled.div`
  width: 553px;
  height: 141px;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 160%;
  text-transform: capitalize;
  font-family: var(--font-open-sans);
  color: var(--color-dimgray-200);
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const MarketingDescription = styled.div`
  width: 589px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--header-2-size);
`;
const Points = styled.div`
  width: 562px;
  height: 1493px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-40xl);
  box-sizing: border-box;
  gap: var(--gap-11xl);
  font-size: var(--font-size-11xl);
`;
const SaberMais = styled.div`
  height: 32px;
  width: 102px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button2 = styled.div`
  width: 589px;
  height: 60px;
  border-radius: var(--br-8xs);
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-224xl-5);
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  color: var(--white);
`;
const Contato = styled.div`
  height: 32px;
  width: 71px;
  position: relative;
  line-height: 160%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
`;
const Button3 = styled.div`
  width: 149px;
  height: 60px;
  border-radius: var(--br-8xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-20xl);
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  color: var(--white);
`;
const ImageRow = styled.div`
  height: 2012px;
  width: 589px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-26xl);
`;
const GalleryParent = styled.div`
  width: 1552px;
  height: 2110px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-144xl);
`;
const Image1027Icon = styled.img`
  height: 577px;
  width: 545px;
  position: relative;
  object-fit: cover;
`;
const Image1026Icon = styled.img`
  height: 516px;
  width: 594px;
  position: relative;
  object-fit: cover;
`;
const GalleryContent = styled.div`
  height: 577px;
  width: 1318px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-160xl);
`;
const Heading = styled.div`
  width: 1425px;
  height: 577px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-88xl) 0px 0px;
  box-sizing: border-box;
`;
const ImageGallery = styled.div`
  width: 1552px;
  height: 2729px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-23xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;
const FrameParent2 = styled.div`
  width: 1552px;
  height: 2899px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-18xl);
  text-align: center;
  font-size: var(--headings-headings-h2-size);
  color: var(--gray-gray-900);
  font-family: var(--paragraphs-para-1);
`;
const Content4 = styled.div`
  height: 4074.8px;
  width: 1552px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-67xl);
`;
const BusinessFormRoot = styled.div`
  width: 1904px;
  height: 4147.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-333xl) var(--padding-54xl) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--header-2-size);
  color: var(--white);
  font-family: var(--font-jost);
`;

const FrameComponent14: NextPage<FrameComponent14Type> = ({
  className = "",
}) => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/servio-marketing");
  }, [router]);

  const onButtonContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <BusinessFormRoot className={className}>
      <Content4>
        <InnerItemWrapper>
          <InnerItem>
            <FormHeading>
              <SellServe>Sell | Serve | Automate</SellServe>
              <BoostEnrolmentAndContainer>
                <BoostEnrolmentAndManage>{`Boost enrolment and
manage student lifecycle `}</BoostEnrolmentAndManage>
                <BoostEnrolmentAndManage>
                  with our 360° CRM
                </BoostEnrolmentAndManage>
              </BoostEnrolmentAndContainer>
            </FormHeading>
            <EmailInput>
              <YourBusinessEmail>
                *Your Business Email Address
              </YourBusinessEmail>
              <EmailField>
                <Email1>
                  <EmailChild />
                  <Email>Email</Email>
                </Email1>
                <Button1>
                  <TryNow>Try Now</TryNow>
                </Button1>
              </EmailField>
            </EmailInput>
          </InnerItem>
        </InnerItemWrapper>
        <Details>
          <Image1>
            <Background />
            <MenuIcon alt="" src="/menu1.svg" />
            <MenuContainer>
              <MenuContent>
                <Navigation1>
                  <DashboardLinkParent>
                    <DashboardLink>
                      <Dashboard>Dashboard</Dashboard>
                    </DashboardLink>
                    <Search>
                      <Background1 />
                      <SearchIconContainer>
                        <SearchIcon alt="" src="/search1.svg" />
                      </SearchIconContainer>
                      <SearchHere>Search here...</SearchHere>
                    </Search>
                  </DashboardLinkParent>
                  <ReportContent1>
                    <Background2 />
                    <ReportContent>
                      <CrmAnalyticalReportParent>
                        <CrmAnalyticalReport>
                          CRM Analytical Report
                        </CrmAnalyticalReport>
                        <ReportData>
                          <LegendValue>
                            <FrameParent>
                              <PatternWrapper>
                                <Pattern />
                              </PatternWrapper>
                              <Income>Income</Income>
                            </FrameParent>
                          </LegendValue>
                          <MenuIcon1>
                            <IncomeValue>
                              <PatternWrapper>
                                <ExpensesChartIcon />
                              </PatternWrapper>
                              <Expenses>Expenses</Expenses>
                            </IncomeValue>
                          </MenuIcon1>
                          <ExpensesValue>
                            <AllTime>
                              <Btn />
                              <Monthly>Monthly</Monthly>
                              <Dropdown>
                                <KeyboardArrowDownIcon
                                  alt=""
                                  src="/keyboard-arrow-down.svg"
                                />
                              </Dropdown>
                            </AllTime>
                            <ExpenseIcon>
                              <MenuIcon2 alt="" src="/menu2.svg" />
                            </ExpenseIcon>
                          </ExpensesValue>
                        </ReportData>
                      </CrmAnalyticalReportParent>
                    </ReportContent>
                    <ActivityChart>
                      <MonthLabelsParent>
                        <MonthLabels>
                          <K>30K</K>
                          <K1>15K</K1>
                          <K2>10K</K2>
                          <LegendLabel>
                            <Div>0</Div>
                          </LegendLabel>
                        </MonthLabels>
                        <FrameWrapper>
                          <LineParent>
                            <Line />
                            <Line1 />
                            <Line2 />
                            <Line3 />
                            <PatternIcon alt="" src="/pattern8.svg" />
                            <PatternIcon1 alt="" src="/pattern9.svg" />
                            <HoverIcon alt="" src="/hover.svg" />
                          </LineParent>
                        </FrameWrapper>
                      </MonthLabelsParent>
                      <ChartDates>
                        <LegendItems>
                          <Jan>Jan</Jan>
                          <Months>
                            <Feb>Feb</Feb>
                          </Months>
                          <Mar>Mar</Mar>
                          <Months1>
                            <Apr>Apr</Apr>
                          </Months1>
                          <Months2>
                            <May>May</May>
                          </Months2>
                          <Jan>Jun</Jan>
                          <Months3>
                            <Jul>Jul</Jul>
                          </Months3>
                          <Aug>Aug</Aug>
                        </LegendItems>
                      </ChartDates>
                    </ActivityChart>
                  </ReportContent1>
                </Navigation1>
                <ReportItem>
                  <Div1>
                    <Background3 />
                    <FirstTwo>
                      <TskReport>Tsk Report</TskReport>
                      <Menus>
                        <MenuIcon2 alt="" src="/menu3.svg" />
                      </Menus>
                    </FirstTwo>
                    <Chart>
                      <Pattern1 />
                      <Pattern2 />
                      <Pattern3 />
                      <Pattern4 />
                      <Pattern5 />
                      <Pattern6 />
                      <Pattern7 />
                      <Pattern8 />
                      <Pattern9 />
                      <Pattern10 />
                      <Pattern11 />
                      <Pattern12 />
                      <Pattern13 />
                      <Pattern14 />
                    </Chart>
                  </Div1>
                  <Div2>
                    <Background4 />
                    <RevenueGraphParent>
                      <RevenueGraph>Revenue Graph</RevenueGraph>
                      <ExpenseIcon>
                        <MenuIcon2 alt="" src="/menu4.svg" />
                      </ExpenseIcon>
                    </RevenueGraphParent>
                    <Chart>
                      <Pattern15 />
                      <Pattern16 />
                      <Pattern17 />
                      <Pattern18 />
                      <Pattern19 />
                      <Pattern20 />
                      <Pattern21 />
                      <Pattern22 />
                      <Pattern23 />
                      <Pattern24 />
                      <Pattern25 />
                      <Pattern26 />
                      <Pattern27 />
                      <Pattern28 />
                    </Chart>
                  </Div2>
                </ReportItem>
              </MenuContent>
              <InnerContent>
                <InnerContentInner>
                  <NotifyParent>
                    <NotifyIcon alt="" src="/notify1.svg" />
                    <ImageIcon alt="" src="/image2@2x.png" />
                  </NotifyParent>
                </InnerContentInner>
                <ActivitiesContent>
                  <Background5 />
                  <TypeLabelsParent>
                    <TypeLabels>
                      <DailyActivitiesParent>
                        <DailyActivities>Daily Activities</DailyActivities>
                        <ExpenseIcon>
                          <MenuIcon3 alt="" src="/menu5.svg" />
                        </ExpenseIcon>
                      </DailyActivitiesParent>
                    </TypeLabels>
                    <Chart1>
                      <ChartChild alt="" src="/group-1000001755.svg" />
                      <Wrapper>
                        <B>35%</B>
                      </Wrapper>
                      <B1>40%</B1>
                      <SecondChartLabel>
                        <B>25%</B>
                      </SecondChartLabel>
                    </Chart1>
                  </TypeLabelsParent>
                  <DailyIconList>
                    <FrameGroup>
                      <IconsWrapper>
                        <Icons>
                          <Icon alt="" src="/icon1.svg" />
                          <Icon1 alt="" src="/icon2.svg" />
                          <Icon2 alt="" src="/icon3.svg" />
                        </Icons>
                      </IconsWrapper>
                      <TypeIcons>
                        <FrameContainer>
                          <EntertainmentWrapper>
                            <Entertainment>Entertainment</Entertainment>
                          </EntertainmentWrapper>
                          <ActivityCategoryLabel>40%</ActivityCategoryLabel>
                        </FrameContainer>
                        <FrameDiv>
                          <TravelWrapper>
                            <Travel>Travel</Travel>
                          </TravelWrapper>
                          <Div3>35%</Div3>
                        </FrameDiv>
                        <TransactionParent>
                          <Transaction>
                            <Shopping>Shopping</Shopping>
                          </Transaction>
                          <Div4>25%</Div4>
                        </TransactionParent>
                      </TypeIcons>
                    </FrameGroup>
                    <DownloadsWrapper>
                      <Downloads>
                        <DownlaodIcon alt="" src="/downlaod.svg" />
                        <DownlaodIcon1 alt="" src="/downlaod.svg" />
                        <DownlaodIcon2 alt="" src="/downlaod1.svg" />
                      </Downloads>
                    </DownloadsWrapper>
                  </DailyIconList>
                </ActivitiesContent>
              </InnerContent>
            </MenuContainer>
          </Image1>
        </Details>
        <FrameParent2>
          <HeadingH2LeftWrapper>
            <HeadingH2Left1>
              <DecoLineWrapper>
                <DecoLine />
              </DecoLineWrapper>
              <LeadingCompaniesTrust>
                Serviço de Marketing
              </LeadingCompaniesTrust>
            </HeadingH2Left1>
          </HeadingH2LeftWrapper>
          <ImageGallery>
            <GalleryParent>
              <Gallery>
                <TwoImages>
                  <Image1034Icon alt="" src="/image-1034@2x.png" />
                  <GalleryGrid>
                    <FrameParent1>
                      <Image1035Wrapper>
                        <Image1035Icon alt="" src="/image-1035@2x.png" />
                      </Image1035Wrapper>
                      <Image1036Icon alt="" src="/image-1036@2x.png" />
                      <Image1025Wrapper>
                        <Image1025Icon alt="" src="/image-1025@2x.png" />
                      </Image1025Wrapper>
                    </FrameParent1>
                  </GalleryGrid>
                </TwoImages>
              </Gallery>
              <ImageRow>
                <MarketingDescription>
                  <CriaoInovadoraDe>
                    Criação inovadora de Marketing
                  </CriaoInovadoraDe>
                  <AoContratarO>
                    Ao contratar o pack de marketing customizado, fornecemos
                    todo o suporte e o desenvolvimento do que a sua empresa
                    precisa! Confiram a lista de serviço:
                  </AoContratarO>
                </MarketingDescription>
                <Points>
                  <PointsContent oSeuLogotipoPersonalizado="o seu Logotipo  personalizado" />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Cartão de visita digital"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Cartão de visita Fisico"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Merchandise personalizada"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Capas sociais personalizadas"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Banners"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="autocolantes personalizados"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Poster"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Flyer"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="modelo de Documentos comerciais redigidos por advogados"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Apresentação Power pont personalizada"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                  <PointsContent
                    oSeuLogotipoPersonalizado="Apresentação comerciais em word"
                    propDisplay="inline-block"
                    propMinWidth="unset"
                  />
                </Points>
                <Button2 onClick={onButtonContainerClick}>
                  <SaberMais>Saber mais</SaberMais>
                </Button2>
                <Button3 onClick={onButtonContainerClick1}>
                  <Contato>Contato</Contato>
                </Button3>
              </ImageRow>
            </GalleryParent>
            <Heading>
              <GalleryContent>
                <Image1027Icon alt="" src="/image-1027@2x.png" />
                <Image1026Icon alt="" src="/image-1026@2x.png" />
              </GalleryContent>
            </Heading>
          </ImageGallery>
        </FrameParent2>
      </Content4>
    </BusinessFormRoot>
  );
};

export default FrameComponent14;