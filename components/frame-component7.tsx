import type { NextPage } from "next";
import styled from "styled-components";
import LeadManagementFeatures from "./lead-management-features";

export type FrameComponent7Type = {
  className?: string;
};

const BackgroundIcon = styled.img`
  height: 1077.4px;
  width: 769.2px;
  position: absolute;
  margin: 0 !important;
  bottom: -231.4px;
  left: -261px;
  object-fit: contain;
`;
const Background = styled.div`
  width: 731px;
  position: relative;
  box-shadow: -33px 60px 72px rgba(155, 155, 155, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  height: 736px;
  display: none;
  z-index: 0;
`;
const Lead = styled.div`
  width: 32px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
`;
const Qualification = styled.div`
  width: 84px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Validation = styled.div`
  width: 66px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const Supply = styled.div`
  width: 46px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const WeekContainer = styled.div`
  width: 84px;
  height: 131px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
`;
const LeadChartChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 307px;
  height: 136.5px;
  mix-blend-mode: normal;
  z-index: 3;
`;
const ProgressPoint = styled.div`
  position: absolute;
  top: 96px;
  left: 42px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const LeadChart = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 307px;
  height: 136.5px;
`;
const ThisWeek = styled.div`
  width: 47px;
  position: relative;
  line-height: 133.2%;
  text-transform: lowercase;
  display: inline-block;
  z-index: 2;
`;
const ProgressValue = styled.div`
  width: 30px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  display: inline-block;
  z-index: 2;
`;
const ProgressBar = styled.div`
  width: 112px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-63xl);
  box-sizing: border-box;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-100);
`;
const WeekLabel = styled.div`
  position: absolute;
  top: 0px;
  left: 41px;
  width: 112px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
`;
const ProgressLabel = styled.div`
  position: absolute;
  top: 78px;
  left: 35px;
  font-size: var(--font-size-mini);
  line-height: 133.2%;
  text-transform: capitalize;
  color: var(--color-darkslategray-100);
  z-index: 2;
`;
const StatusPointsChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 307px;
  height: 109.7px;
  mix-blend-mode: normal;
  z-index: 4;
`;
const Point = styled.div`
  position: absolute;
  top: 36px;
  left: 126px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const Point1 = styled.div`
  position: absolute;
  top: 5px;
  left: 208px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const Point2 = styled.div`
  position: absolute;
  top: 25px;
  left: 280px;
  border-radius: 50%;
  background-color: var(--color-whitesmoke-100);
  border: 0px solid var(--color-deepskyblue-300);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 5;
`;
const StatusPoints = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 307px;
  height: 109.7px;
`;
const WeeklyLeadDetails = styled.div`
  position: absolute;
  top: 0px;
  left: 1px;
  width: 307px;
  height: 112.7px;
`;
const WeeklyLeadChart = styled.div`
  height: 139.5px;
  width: 308px;
  position: relative;
`;
const ProgressContainer = styled.div`
  width: 314.2px;
  height: 139.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-6xs-2);
  box-sizing: border-box;
  font-size: var(--font-size-xs);
  color: var(--color-darkgray);
`;
const LeadCategories = styled.div`
  height: 403.7px;
  width: 314.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-114xl-2);
`;
const Bar = styled.div`
  width: 31px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 2;
`;
const Bar1 = styled.div`
  width: 31px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const GridCells = styled.div`
  height: 131px;
  width: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
  flex-shrink: 0;
`;
const GridContent = styled.div`
  width: 105.2px;
  height: 131px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-55xl-2) 0px 0px;
  box-sizing: border-box;
`;
const ChartGridIcon = styled.img`
  width: 253.2px;
  height: 251.1px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const LeadImageContainer = styled.div`
  width: 253.2px;
  height: 418.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-17xl-2);
`;
const LeadGrid = styled.div`
  height: 420.3px;
  width: 253.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
`;
const LeadBreakdown = styled.div`
  height: 420.3px;
  width: 607.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-20xl-8);
`;
const LeadChartContainer = styled.div`
  width: 624.7px;
  height: 420.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-mid-5);
  box-sizing: border-box;
  font-size: var(--font-size-mini);
`;
const ChartTitle = styled.div`
  width: 44px;
  position: absolute;
  margin: 0 !important;
  bottom: 304px;
  left: 91px;
  font-size: var(--font-size-17xl);
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  z-index: 2;
`;
const ChartDescription = styled.div`
  width: 29px;
  position: absolute;
  margin: 0 !important;
  right: 320px;
  bottom: 307px;
  font-size: var(--font-size-mini);
  line-height: 133.2%;
  text-transform: capitalize;
  display: inline-block;
  z-index: 2;
`;
const CountBar = styled.div`
  height: calc(100% - 3.6px);
  width: calc(100% - 2.3px);
  position: absolute;
  margin: 0 !important;
  top: 3.57px;
  right: 2.3px;
  bottom: 0.03px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-6xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const NumberOfLeads = styled.div`
  width: 158px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const CountContainer = styled.div`
  height: 235.4px;
  width: 367.4px;
  margin: 0 !important;
  position: absolute;
  bottom: -150.1px;
  left: -238px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xl-9) var(--padding-8xl-8) var(--padding-161xl-5);
  box-sizing: border-box;
  z-index: 1;
`;
const CountValue = styled.div`
  width: 27.6px;
  position: relative;
  font-size: var(--font-size-mini);
  line-height: 133.2%;
  text-transform: capitalize;
  display: inline-block;
  z-index: 2;
`;
const LeadCount = styled.div`
  width: 27.6px;
  height: 20px;
  margin: 0 !important;
  position: absolute;
  top: 394px;
  left: 303px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const BarElement = styled.div`
  position: absolute;
  top: 5.85px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-6xl);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  width: 598.3px;
  height: 233.7px;
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const SaleAnalytics = styled.div`
  position: absolute;
  top: 32.1px;
  left: 27.8px;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
`;
const BarChart = styled.div`
  position: absolute;
  top: 78.3px;
  right: 92.6px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
  z-index: 2;
`;
const BarChart1 = styled.div`
  position: absolute;
  top: 78.3px;
  left: 132px;
  border-radius: var(--br-4xl);
  background-color: var(--color-darkturquoise-300);
  width: 325px;
  height: 16px;
  z-index: 3;
`;
const BarChart2 = styled.div`
  position: absolute;
  right: 92.6px;
  bottom: 108.3px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
`;
const BarChart3 = styled.div`
  position: absolute;
  bottom: 108.3px;
  left: 132px;
  border-radius: var(--br-4xl);
  background-color: var(--color-goldenrod);
  width: 217px;
  height: 16px;
`;
const BarChart4 = styled.div`
  position: absolute;
  right: 92.6px;
  bottom: 71.3px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
`;
const BarChart5 = styled.div`
  position: absolute;
  right: 110.6px;
  bottom: 71.3px;
  border-radius: var(--br-4xl);
  background-color: var(--color-mediumslateblue-300);
  width: 358px;
  height: 16px;
`;
const BarChart6 = styled.div`
  position: absolute;
  right: 92.6px;
  bottom: 34.3px;
  border-radius: var(--br-4xl);
  background-color: var(--color-whitesmoke-200);
  width: 376px;
  height: 16px;
`;
const BarChart7 = styled.div`
  position: absolute;
  bottom: 34.3px;
  left: 132px;
  border-radius: var(--br-4xl);
  background-color: var(--color-lightcoral);
  width: 235px;
  height: 16px;
`;
const SalesChart = styled.div`
  width: 600.6px;
  height: 239.6px;
  position: absolute;
  margin: 0 !important;
  top: 67.7px;
  left: 63px;
  z-index: 5;
`;
const Background1 = styled.div`
  height: calc(100% - 5.8px);
  width: calc(100% - 0.7px);
  position: absolute;
  margin: 0 !important;
  top: 5.79px;
  right: 0.7px;
  bottom: 0.01px;
  left: 0px;
  box-shadow: 0px 14px 28px rgba(205, 205, 205, 0.25),
    -2.6px 2.6px 0px #fff inset;
  backdrop-filter: blur(21.44px);
  border-radius: var(--br-3xs);
  background: linear-gradient(
    -83.52deg,
    rgba(244, 244, 244, 0.93),
    rgba(244, 244, 244, 0.93) 42.19%,
    rgba(255, 255, 255, 0.93)
  );
  transform: rotate(-0.6deg);
  transform-origin: 0 0;
`;
const TaskAssignedTo = styled.div`
  width: 183px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
`;
const TaskIcons = styled.img`
  height: 34px;
  width: 34px;
  position: relative;
  z-index: 1;
`;
const TaskIcon = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
  z-index: 1;
`;
const TaskContent = styled.div`
  height: 33px;
  width: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const TaskDetailsChild = styled.img`
  width: 35px;
  height: 29px;
  position: relative;
  z-index: 1;
`;
const TaskDetails = styled.div`
  height: 30px;
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const TaskItem = styled.div`
  width: 258px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
`;
const TaskList = styled.div`
  height: 35px;
  width: 258px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
`;
const Div = styled.div`
  width: 592.9px;
  height: 85.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xl-8) var(--padding-14xl-7) var(--padding-2xl-9);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-47xl);
  z-index: 1;
`;
const Image1 = styled.div`
  height: 736px;
  width: 731px;
  box-shadow: -33px 60px 72px rgba(155, 155, 155, 0.2);
  border-radius: var(--br-11xl);
  background-color: var(--color-whitesmoke-300);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-122xl-8) var(--padding-14xl) var(--padding-44xl-1)
    var(--padding-54xl-3);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-6xl-1);
  z-index: 1;
`;
const BackgroundParent = styled.div`
  height: 736px;
  width: 731px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const AllocateLeadsAnd = styled.div`
  width: 589px;
  height: 123px;
  position: relative;
  line-height: 133.2%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
`;
const UniqueAndPowerful = styled.div`
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
`;
const BenefitHighlight = styled.div`
  width: 589px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const BenefitsContainer = styled.div`
  width: 589px;
  height: 646px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const SoftwareBenefits = styled.div`
  height: 691px;
  width: 589px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-26xl) 0px 0px;
  box-sizing: border-box;
  font-size: var(--header-2-size);
`;
const AnalyticsContainer = styled.div`
  height: 736px;
  width: 1398px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-59xl);
`;
const AnalyticsContainerWrapperRoot = styled.div`
  width: 1936px;
  height: 1066px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-519xl) var(--padding-311xl) 0px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-jost);
`;

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <AnalyticsContainerWrapperRoot className={className}>
      <AnalyticsContainer>
        <BackgroundParent>
          <BackgroundIcon alt="" src="/background3@2x.png" />
          <Image1>
            <Background />
            <LeadChartContainer>
              <LeadBreakdown>
                <LeadCategories>
                  <WeekContainer>
                    <Lead>Lead</Lead>
                    <Qualification>Qualification</Qualification>
                    <Validation>Validation</Validation>
                    <Supply>Supply</Supply>
                  </WeekContainer>
                  <ProgressContainer>
                    <WeeklyLeadChart>
                      <LeadChart>
                        <LeadChartChild alt="" src="/vector-242.svg" />
                        <ProgressPoint />
                      </LeadChart>
                      <WeeklyLeadDetails>
                        <WeekLabel>
                          <ThisWeek>This week</ThisWeek>
                          <ProgressBar>
                            <ProgressValue>40%</ProgressValue>
                          </ProgressBar>
                        </WeekLabel>
                        <ProgressLabel>10%</ProgressLabel>
                        <StatusPoints>
                          <StatusPointsChild alt="" src="/vector-243.svg" />
                          <Point />
                          <Point1 />
                          <Point2 />
                        </StatusPoints>
                      </WeeklyLeadDetails>
                    </WeeklyLeadChart>
                  </ProgressContainer>
                </LeadCategories>
                <LeadGrid>
                  <LeadImageContainer>
                    <GridContent>
                      <GridCells>
                        <Bar>80%</Bar>
                        <Bar1>45%</Bar1>
                        <Bar1>90%</Bar1>
                        <Bar1>60%</Bar1>
                      </GridCells>
                    </GridContent>
                    <ChartGridIcon alt="" src="/chart-grid.svg" />
                  </LeadImageContainer>
                </LeadGrid>
              </LeadBreakdown>
            </LeadChartContainer>
            <ChartTitle>85</ChartTitle>
            <ChartDescription>50%</ChartDescription>
            <LeadCount>
              <CountContainer>
                <CountBar />
                <NumberOfLeads>Number of leads</NumberOfLeads>
              </CountContainer>
              <CountValue>60%</CountValue>
            </LeadCount>
            <SalesChart>
              <BarElement />
              <SaleAnalytics>{`Sale analytics `}</SaleAnalytics>
              <BarChart />
              <BarChart1 />
              <BarChart2 />
              <BarChart3 />
              <BarChart4 />
              <BarChart5 />
              <BarChart6 />
              <BarChart7 />
            </SalesChart>
            <Div>
              <Background1 />
              <TaskAssignedTo>Task Assigned to me</TaskAssignedTo>
              <TaskList>
                <TaskItem>
                  <TaskIcons alt="" src="/task-icons.svg" />
                  <TaskContent>
                    <TaskIcon alt="" src="/task-icon.svg" />
                  </TaskContent>
                  <TaskIcons alt="" src="/task-icons1.svg" />
                  <TaskDetails>
                    <TaskDetailsChild alt="" src="/group-2461.svg" />
                  </TaskDetails>
                </TaskItem>
              </TaskList>
            </Div>
          </Image1>
        </BackgroundParent>
        <SoftwareBenefits>
          <BenefitsContainer>
            <BenefitHighlight>
              <AllocateLeadsAnd>
                Allocate Leads and Simplify Lead Management
              </AllocateLeadsAnd>
              <UniqueAndPowerful>
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </UniqueAndPowerful>
            </BenefitHighlight>
            <LeadManagementFeatures
              leadGeneration="Lead generation"
              guideHelpsCompaniesIncrea={`Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.`}
            />
            <LeadManagementFeatures
              leadGeneration="Team Email"
              guideHelpsCompaniesIncrea="Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools."
            />
          </BenefitsContainer>
        </SoftwareBenefits>
      </AnalyticsContainer>
    </AnalyticsContainerWrapperRoot>
  );
};

export default FrameComponent7;
