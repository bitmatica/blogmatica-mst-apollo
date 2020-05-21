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
import { LoadingContainer } from "src/components/common"
import { ObjectPropertyModelType } from "src/models"
import { useQuery } from "src/models/reactUtils"
import { RegisteredModelConfig } from "src/pages/admin/config"
import {
  getUpdateModelData,
  getUpdateModelInput,
  getUpdateModelMutation,
  Model,
} from "src/pages/admin/utils"
import ModelForm from "./ModelForm"

export type UpdateModelDrawerProps = {
  modelConfig: RegisteredModelConfig<any>
  modelId: string
  isOpen: boolean
  onClose: Function
  record?: Model
}

const UpdateModelDrawer: React.FC<UpdateModelDrawerProps> = ({
  modelConfig,
  modelId,
  onClose,
  isOpen,
  record,
}) => {
  const toast = useToast()
  const {
    data: inputData,
    setQuery: setInputPropsQuery,
    loading: inputPropsLoading,
  } = useQuery<{ getObjectProperties: Array<ObjectPropertyModelType> }>()

  const { data, loading: submittingForm, setQuery } = useQuery()

  useEffect(() => {
    setInputPropsQuery((state) =>
      state.queryGetObjectProperties({ objectName: getUpdateModelInput(modelConfig) }),
    )
  }, [modelConfig, setInputPropsQuery])
  const updateResponse = getUpdateModelData(modelConfig, data)

  useEffect(() => {
    if (!submittingForm && updateResponse && updateResponse.success && updateResponse.id) {
      toast({
        title: `${modelConfig.model.name} Updated`,
        status: "success",
        duration: 4000,
        isClosable: true,
      })
      onClose()
    }
  }, [modelConfig, updateResponse, toast, onClose, submittingForm])

  const handleSubmit = (props: any): void => {
    setQuery((store) =>
      getUpdateModelMutation(modelConfig, store)({ id: modelId, input: props }),
    )
  }

  const inputObjectProperties = inputData?.getObjectProperties || []

  const errorMessage =
    (updateResponse && !updateResponse.success && updateResponse.message) || ""
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
            record={record}
          />
        </LoadingContainer>
      </DrawerContent>
    </Drawer>
  )
}

export default observer(UpdateModelDrawer)
