import { FormControl, FormLabel, Text } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { Card, LoadingContainer } from "src/components"
import { useStore } from "src/getMstGql"
import { useQuery } from "src/models/reactUtils"
import { RegisteredModelConfig } from "src/pages/admin/config"
import {
  formatModelField,
  getModelDetailData,
  getModelDetailsQuery,
  getModelFields,
} from "src/pages/admin/utils"

export type ModelDetailsProps = {
  modelConfig: RegisteredModelConfig<any>
  modelId: string
}

const ModelDetails: React.FC<ModelDetailsProps> = ({ modelConfig, modelId }) => {
  const store = useStore()
  const { setQuery, data, loading } = useQuery()

  useEffect(() => {
    setQuery(getModelDetailsQuery(modelConfig, store)({ id: modelId }))
  }, [setQuery, modelId, modelConfig, store])
  const modelData = getModelDetailData(modelConfig, data)
  return (
    <Card m={[0, 4, 8]}>
      <Card.Header>
        <Card.Header.Title>{modelConfig.model.name}</Card.Header.Title>
        <Card.Header.Text>{modelId}</Card.Header.Text>
      </Card.Header>
      <LoadingContainer loading={loading}>
        <Card.Body>
          {!modelData
            ? "Not found"
            : getModelFields(modelConfig).map((field) => {
                return (
                  <FormControl key={field.name} isReadOnly={true} mb={4}>
                    <FormLabel>{field.label}</FormLabel>
                    <Text>{formatModelField(modelConfig, modelData, field)}</Text>
                  </FormControl>
                )
              })}
        </Card.Body>
      </LoadingContainer>
    </Card>
  )
}

export default observer(ModelDetails)
