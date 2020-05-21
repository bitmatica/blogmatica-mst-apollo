import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useToast,
} from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LoadingContainer } from "src/components/common"
import { ObjectPropertyModelType } from "src/models"
import { useQuery } from "src/models/reactUtils"
import { RegisteredModelConfig } from "src/pages/admin/config"
import {
  getCreateModelData,
  getCreateModelInput,
  getCreateModelMutation,
  getModelDetailsLink,
} from "src/pages/admin/utils"
import ModelForm from "./ModelForm"

export type CreateModelDrawerProps = {
  modelConfig: RegisteredModelConfig<any>
  isOpen: boolean
  onClose: Function
}

const CreateModelDrawer: React.FC<CreateModelDrawerProps> = ({
  modelConfig,
  onClose,
  isOpen,
}) => {
  const toast = useToast()
  const history = useHistory()
  const {
    data: inputData,
    setQuery: setInputPropsQuery,
    loading: inputPropsLoading,
  } = useQuery<{ getObjectProperties: Array<ObjectPropertyModelType> }>()

  const { data, loading: submittingForm, setQuery } = useQuery()

  useEffect(() => {
    setInputPropsQuery((state) =>
      state.queryGetObjectProperties({ objectName: getCreateModelInput(modelConfig) }),
    )
  }, [modelConfig, setInputPropsQuery])
  const creationResponse = getCreateModelData(modelConfig, data)

  useEffect(() => {
    if (
      !submittingForm &&
      creationResponse &&
      creationResponse.success &&
      creationResponse.id
    ) {
      toast({
        title: `${modelConfig.model.name} Created`,
        status: "success",
        duration: 4000,
        isClosable: true,
      })
      onClose()
      history.push(getModelDetailsLink(modelConfig, creationResponse.id))
    }
  }, [modelConfig, creationResponse, toast, history, onClose, submittingForm])

  const handleSubmit = (props: any): void => {
    setQuery((store) => getCreateModelMutation(modelConfig, store)({ input: props }))
  }

  const inputObjectProperties = inputData?.getObjectProperties || []

  const errorMessage =
    (creationResponse && !creationResponse.success && creationResponse.message) || ""
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={(): void => {
        onClose()
      }}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create {modelConfig.model.name}</DrawerHeader>
        <LoadingContainer loading={inputPropsLoading}>
          <ModelForm
            modelConfig={modelConfig}
            modelProps={inputObjectProperties}
            onCancel={(): void => {
              onClose()
            }}
            onSubmit={handleSubmit}
            submitting={submittingForm}
            errorMessage={errorMessage}
          />
        </LoadingContainer>
      </DrawerContent>
    </Drawer>
  )
}

export default observer(CreateModelDrawer)
