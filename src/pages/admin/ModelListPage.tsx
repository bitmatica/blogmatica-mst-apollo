import { Box } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import pluralize from "pluralize"
import React, { useEffect, useState } from "react"

import {
  Card,
  CardHeader,
  CardHeaderText,
  CardHeaderTitle,
  LoadingContainer,
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeadCell,
  TableHeadRow,
} from "src/components"
import { useQuery } from "src/models/reactUtils"
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

const ModelListPage: React.FunctionComponent<ModelListPageProps> = ({ modelConfig }) => {
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
      <CardHeader>
        <CardHeaderTitle>{pluralize(modelConfig.model.name)}</CardHeaderTitle>
        <CardHeaderText>Listing all {pluralizeModel(modelConfig)}</CardHeaderText>
      </CardHeader>

      <LoadingContainer loading={loading} my="8">
        <Box overflowX="scroll">
          <Table>
            <TableHead>
              <TableHeadRow>
                {fields.map((field) => (
                  <TableHeadCell key={field.name}>{field.label}</TableHeadCell>
                ))}
              </TableHeadRow>
            </TableHead>

            <TableBody>
              {records.map((record) => (
                <TableBodyRow key={record.id}>
                  {fields.map((field) => (
                    <TableBodyCell key={field.name}>
                      {formatModelField(modelConfig, record, field)}
                    </TableBodyCell>
                  ))}
                </TableBodyRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </LoadingContainer>
    </Card>
  )
}

export default observer(ModelListPage)
