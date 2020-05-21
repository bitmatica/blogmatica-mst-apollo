import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { BsThreeDots } from "react-icons/all"
import { Card, LoadingContainer } from "src/components"
import { useStore } from "src/getMstGql"
import { useQuery } from "src/models/reactUtils"
import { RegisteredModelConfig } from "src/pages/admin/config"
import DeleteModelPrompt from "src/pages/admin/DeleteModelPrompt"
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
  const { isOpen: deleteIsOpen, onToggle: toggleDeletePrompt } = useDisclosure(false)

  useEffect(() => {
    setQuery(getModelDetailsQuery(modelConfig, store)({ id: modelId }))
  }, [setQuery, modelId, modelConfig, store])
  const modelData = getModelDetailData(modelConfig, data)
  return (
    <Card m={[0, 4, 8]}>
      <Card.Header>
        <Flex>
          <Box width="100%">
            <Card.Header.Title>{modelConfig.model.name}</Card.Header.Title>
            <Card.Header.Text>{modelId}</Card.Header.Text>
          </Box>
          <Menu>
            <MenuButton>
              <Box as={BsThreeDots} size="24px" margin="auto" />
            </MenuButton>
            <MenuList>
              <MenuItem>Edit</MenuItem>
              <MenuItem onClick={toggleDeletePrompt}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Card.Header>
      <LoadingContainer loading={loading}>
        <Card.Body>
          {!modelData
            ? "Not found"
            : getModelFields(modelConfig).map((field) => {
                return (
                  <FormControl key={field.name} isReadOnly={true} mb={4}>
                    <FormLabel fontSize="sm">{field.label}</FormLabel>
                    <Text fontWeight="light">
                      {formatModelField(modelConfig, modelData, field)}
                    </Text>
                  </FormControl>
                )
              })}
        </Card.Body>

        <DeleteModelPrompt
          modelConfig={modelConfig}
          modelId={modelId}
          isOpen={deleteIsOpen}
          onClose={toggleDeletePrompt}
        />
      </LoadingContainer>
    </Card>
  )
}

export default observer(ModelDetails)
