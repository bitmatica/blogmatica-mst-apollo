import React from "react"
import { Flex, Text, Stack } from "@chakra-ui/core";
import Button from "../components/common/Button";
import Layout from "./Layout";
import { observer } from "mobx-react-lite";
import { useStore } from "../getMstGql";

const ButtonClickTracker: React.FunctionComponent = observer(() => {
  const { isButtonClicked } = useStore()

  return (
    <Flex p={2} justify="center">
      button clicked: {isButtonClicked()}
    </Flex>
  )
})

const TestButton: React.FC = observer(() => {
  const { getTheWeather, updateButtonClicked } = useStore()
  return (
    <Flex justify="center">
      <Button onClick={(): void => {
        getTheWeather()
        updateButtonClicked()
      }}>
        click me
      </Button>
    </Flex>
  )
})

const WeatherData: React.FunctionComponent = observer(() => {
  const { weather } = useStore()

  return (
    <Stack>
      <Text>Temperature: {weather?.temperature}</Text>
      <Text>Humidity: {weather?.humidity}</Text>
      <Text>Description: {weather?.description}</Text>
    </Stack>
  )
})

const Test: React.FunctionComponent = () => {
  return (
    <Layout>
      <Flex direction="column" alignContent="center">
        <ButtonClickTracker />
        <TestButton />
        <WeatherData />
      </Flex>
    </Layout>
  )
}

export default Test
