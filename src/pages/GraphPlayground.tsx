import React, { Fragment, Component, ReactElement, useState } from "react"
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryArea,
  VictoryCursorContainer,
} from "victory"
import last from "lodash.last"
import {
  ComposedChart,
  Area,
  Line,
  Bar,
  Tooltip,
  Rectangle,
  ContentRenderer,
  BarProps,
  BarData,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts"
import { Text, Box } from "@chakra-ui/core"

interface SpendingData {
  quarter: number
  activity: number
  balance?: number
}

const ACTIVITY = [
  {
    quarter: 1,
    activity: 40,
  },
  {
    quarter: 2,
    activity: -10,
  },
  {
    quarter: 3,
    activity: -3,
  },
  {
    quarter: 4,
    activity: 35,
  },
  {
    quarter: 5,
    activity: -12,
  },
  {
    quarter: 6,
    activity: -6,
  },
]

const pastBalances = ACTIVITY.reduce(
  (acc: SpendingData[], spendingData): SpendingData[] => [
    ...acc,
    {
      ...spendingData,
      balance: (last(acc)?.balance || 0) + spendingData.activity,
    },
  ],
  [],
)

const rawBalances = [
  ...pastBalances,
  ...ACTIVITY.reduce(
    (acc) => {
      return [...acc, (last(acc) || 0) - 5]
    },
    [last(pastBalances)?.balance || 0],
  ),
]

const allSpendingData = pastBalances.reduce((acc): SpendingData[] => {
  const lastData = last(acc)

  return [
    ...acc,
    {
      quarter: (lastData?.quarter || 0) + 1,
      activity: -10,
      balance: (lastData?.balance || 0) - 10,
    },
  ]
}, pastBalances)

const getActivity = (data: SpendingData): number | null =>
  data.quarter < Math.floor(allSpendingData.length / 2) ? Math.abs(data.activity) : null

const GraphPlayground: React.FunctionComponent = () => {
  const [isHovering, setIsHover] = useState(false)

  return (
    <Fragment>
      <Text>Rechart</Text>
      <Box width="100%" height={400}>
        <ResponsiveContainer>
          <ComposedChart
            data={allSpendingData}
            height={400}
            width={800}
            onMouseOver={(): void => {
              setIsHover(true)
            }}
            onMouseOut={(): void => {
              setIsHover(false)
            }}
          >
            <Area dataKey="balance" type="monotone" />
            <Line dataKey="balance" type="monotone" />
            <Bar dataKey={getActivity} barSize={10}>
              {allSpendingData.map((entry, index) => {
                return (
                  <Cell key={`cell-${index}`} fill={entry.activity > 0 ? "green" : "red"} />
                )
              })}
            </Bar>
            {!isHovering && <ReferenceLine x={4} />}
            {isHovering && <Tooltip content={(): string => ""} />}
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
      <Text>Victory</Text>

      <VictoryChart
        domainPadding={20}
        containerComponent={
          <VictoryCursorContainer
            cursorDimension="x"
            style={{
              fill: "black",
            }}
          />
        }
      >
        <VictoryAxis tickFormat={(): string => ""} />
        <VictoryArea
          data={rawBalances}
          x="quarter"
          y="balance"
          style={{
            data: {
              stroke: "purple",
              fill: "lightGrey",
            },
          }}
        />
        <VictoryBar
          data={ACTIVITY}
          x="quarter"
          y="activity"
          style={{
            data: {
              fill: ({ datum }): string => (datum.activity > 0 ? "green" : "red"),
              width: 8,
            },
          }}
        />
      </VictoryChart>
    </Fragment>
  )
}

export default GraphPlayground
