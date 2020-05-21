import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useQuery } from "src/models/reactUtils"
import { RegisteredModelConfig } from "src/pages/admin/config"
import {
  getDeleteModelData,
  getDeleteModelMutation,
  getModelListLink,
} from "src/pages/admin/utils"

export type DeleteModelPromptProps = {
  modelConfig: RegisteredModelConfig<any>
  modelId: string
  isOpen: boolean
  onClose: Function
}

const DeleteModelPrompt: React.FC<DeleteModelPromptProps> = ({
  modelConfig,
  modelId,
  onClose,
  isOpen,
}) => {
  const { setQuery, loading, store, data } = useQuery()
  const history = useHistory()
  const toast = useToast()
  const cancelRef = React.useRef(null)
  const handleDeleteClick = () => {
    setQuery(getDeleteModelMutation(modelConfig, store)({ id: modelId }))
  }

  useEffect(() => {
    if (data) {
      const response = getDeleteModelData(modelConfig, data)
      if (response.success) {
        toast({
          title: `${modelConfig.model.name} Deleted`,
          status: "success",
          duration: 4000,
          isClosable: true,
        })
        onClose()
        history.push(getModelListLink(modelConfig))
      } else {
        toast({
          title: `Error Deleting ${modelConfig.model.name}`,
          description: response.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        })
        onClose()
      }
      console.log(data)
    }
  }, [data, toast])

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={(): void => {
        onClose()
      }}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Delete {modelConfig.model.name}
        </AlertDialogHeader>

        <AlertDialogBody>
          Are you sure? You cannot undo this action afterwards.
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button
            ref={cancelRef}
            onClick={(): void => {
              onClose()
            }}
          >
            Cancel
          </Button>
          <Button
            isLoading={loading}
            variantColor="red"
            onClick={(): void => {
              handleDeleteClick()
            }}
            ml={3}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default observer(DeleteModelPrompt)
