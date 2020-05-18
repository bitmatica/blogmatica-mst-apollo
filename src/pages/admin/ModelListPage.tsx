import { Box } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import pluralize from "pluralize"
import React, { useEffect, useState } from "react"

import { Card, Table } from "../../components"
import LoadingContainer from "../../components/common/LoadingContainer"
import { useQuery } from "../../models/reactUtils"
import { RegisteredModelConfig } from "./config"
import {
  formatModelField,
  getModelListData,
  getModelListFields,
  getModelListQuery,
  pluralizeModel,
} from "./utils"

export type ModelListPageProps = {
  modelConfig: RegisteredModelConfig<any>
}

const ModelListPage: React.FC<ModelListPageProps> = ({ modelConfig }) => {
  const [cachedModel, setCachedModel] = useState<RegisteredModelConfig<any> | undefined>(
    undefined,
  )
  const { setQuery, data, store, loading } = useQuery()

  useEffect(() => {
    if (cachedModel !== modelConfig) {
      setCachedModel(modelConfig)
      setQuery(getModelListQuery(modelConfig, store))
    }
  }, [cachedModel, store, setQuery, modelConfig])

  const records = getModelListData(modelConfig, data)
  const fields = getModelListFields(modelConfig)
  return (
    <Card m={[0, 4, 8]}>
      <Card.Header>
        <Card.Header.Title>{pluralize(modelConfig.model.name)}</Card.Header.Title>
        <Card.Header.Text>Listing all {pluralizeModel(modelConfig)}</Card.Header.Text>
      </Card.Header>

      <LoadingContainer loading={loading} my="8">
        <Box overflowX="scroll">
          <Table>
            <Table.Head>
              <Table.Head.Row>
                {fields.map((field) => (
                  <Table.Head.Cell key={field.name}>{field.label}</Table.Head.Cell>
                ))}
              </Table.Head.Row>
            </Table.Head>

            <Table.Body>
              {records.map((record) => (
                <Table.Body.Row key={record.id}>
                  {fields.map((field) => (
                    <Table.Body.Cell key={field.name}>
                      {formatModelField(modelConfig, record, field)}
                    </Table.Body.Cell>
                  ))}
                </Table.Body.Row>
              ))}
            </Table.Body>
          </Table>
        </Box>
      </LoadingContainer>
    </Card>
  )
}

export default observer(ModelListPage)
