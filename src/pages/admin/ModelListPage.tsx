import { observer } from "mobx-react-lite"
import { IModelType } from "mobx-state-tree"
import pluralize from "pluralize"
import React, { useEffect, useState } from "react"

import { Card, Table } from "../../components"
import LoadingContainer from "../../components/common/LoadingContainer"
import { useQuery } from "../../models/reactUtils"
import {
  formatModelField,
  getModelListData,
  getModelListFields,
  getModelListQuery,
  pluralizeModel,
} from "./utils"

export type ModelListPageProps = {
  model: IModelType<any, any>
}

const ModelListPage: React.FC<ModelListPageProps> = ({ model }) => {
  const [cachedModel, setCachedModel] = useState<IModelType<any, any> | undefined>(
    undefined,
  )
  const { setQuery, data, store, loading } = useQuery()

  useEffect(() => {
    if (cachedModel !== model) {
      setCachedModel(model)
      setQuery(getModelListQuery(model, store))
    }
  }, [cachedModel, store, setQuery, model])

  const records = getModelListData(model, data)
  const fields = getModelListFields(model)
  return (
    <Card m="8">
      <Card.Header>
        <Card.Header.Title>{pluralize(model.name)}</Card.Header.Title>
        <Card.Header.Text>Listing all {pluralizeModel(model)}</Card.Header.Text>
      </Card.Header>

      <LoadingContainer loading={loading} my="8">
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
                    {formatModelField(model, record, field)}
                  </Table.Body.Cell>
                ))}
              </Table.Body.Row>
            ))}
          </Table.Body>
        </Table>
      </LoadingContainer>
    </Card>
  )
}

export default observer(ModelListPage)
