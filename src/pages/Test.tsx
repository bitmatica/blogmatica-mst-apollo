import React from "react"
import { Flex, Text, Stack } from "@chakra-ui/core";
import Button from "../components/common/Button";
import { useStore } from "../store/RootStore";
import Layout from "./Layout";
import { observer } from "mobx-react-lite";
import LoadingContainer from "../components/common/LoadingContainer";

const ButtonClickTracker: React.FunctionComponent = () => {
  const { isButtonClicked } = useStore()

  return (
    <Flex p={2} justify="center">
      button clicked: {isButtonClicked()}
    </Flex>
  )
}

const TestButton: React.FC = () => {
  const { updateButtonClicked, weather } = useStore()

  return (
    <Flex justify="center">
      <Button onClick={(): void => {
        weather.getTheWeather()
        updateButtonClicked()
      }}>
        click me
      </Button>
    </Flex>
  )
}

const ObservingButtonClickTracker = observer(ButtonClickTracker)

const WeatherData: React.FunctionComponent = () => {
  const { weather } = useStore()
  const { temperature, humidity, description, status } = weather

  return (
    <LoadingContainer loading={status === "pending"}>
      <Stack>
        <Text>Temperature: {temperature}</Text>
        <Text>Humidity: {humidity}</Text>
        <Text>Description: {description}</Text>
      </Stack>
    </LoadingContainer>
  )
}

const ObservingWeatherData = observer(WeatherData)

const Test: React.FunctionComponent = () => {
  return (
    <Layout>
      <Flex direction="column" alignContent="center">
        <ObservingButtonClickTracker />
        <TestButton />
        <ObservingWeatherData />
      </Flex>
    </Layout>
  )
}

export default Test
