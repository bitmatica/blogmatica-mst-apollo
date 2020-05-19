import { Flex, Stack, Text } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { Button, Layout } from "src/components"
import { useStore } from "../getMstGql"

const ButtonClickTracker: React.FC = observer(() => {
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
      <Button
        onClick={(): void => {
          getTheWeather()
          updateButtonClicked()
        }}
      >
        click me
      </Button>
    </Flex>
  )
})

const WeatherData: React.FC = observer(() => {
  const { weather } = useStore()

  return (
    <Stack>
      <Text>Temperature: {weather?.temperature}</Text>
      <Text>Humidity: {weather?.humidity}</Text>
      <Text>Description: {weather?.description}</Text>
    </Stack>
  )
})

const Test: React.FC = () => {
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
