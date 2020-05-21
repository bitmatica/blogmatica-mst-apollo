import {
  Alert,
  AlertIcon,
  Button,
  DrawerBody,
  DrawerFooter,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/core"
import { useFormik } from "formik"
import startCase from "lodash/startCase"
import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { ObjectPropertyModelType } from "src/models"
import { RegisteredModelConfig } from "src/pages/admin/config"
import * as Yup from "yup"

export type ModelFormProps = {
  modelConfig: RegisteredModelConfig<any>
  modelProps: Array<ObjectPropertyModelType>
  onSubmit: (props: any) => void
  onCancel: () => void
  record?: Record<string, any>
  submitting: boolean
  errorMessage?: string
}

function getInitialFormValues(
  properties: Array<ObjectPropertyModelType>,
  record: Record<string, any> = {},
): object {
  const initialValues: Record<string, any> = {}
  properties.forEach((prop) => {
    if (prop.name) {
      initialValues[prop.name] = record[prop.name] || ""
    }
  })
  return initialValues
}

function isRequired(prop: ObjectPropertyModelType): boolean {
  return prop?.type?.endsWith("!") || false
}

type FieldSchemaType =
  | Yup.BooleanSchema
  | Yup.StringSchema
  | Yup.DateSchema
  | Yup.NumberSchema

function getFieldSchemaType(type: string): FieldSchemaType {
  if (type.toLowerCase().startsWith("id")) {
    return Yup.string()
  }
  if (type.toLowerCase().startsWith("string")) {
    return Yup.string()
  }
  if (type.toLowerCase().startsWith("datetime")) {
    return Yup.date()
  }
  if (type.toLowerCase().startsWith("int")) {
    return Yup.number()
  }
  if (type.toLowerCase().startsWith("float")) {
    return Yup.number()
  }
  if (type.toLowerCase().startsWith("boolean")) {
    return Yup.boolean()
  }

  return Yup.string()
}

function createValidationSchema(
  properties: Array<ObjectPropertyModelType>,
): Yup.ObjectSchema {
  const schema: Record<string, any> = {}
  properties.forEach((prop) => {
    const { name, type } = prop
    if (name && type) {
      let fieldSchema = getFieldSchemaType(type)
      if (isRequired(prop)) {
        fieldSchema = fieldSchema.required("Required")
      }
      schema[name] = fieldSchema
    }
  })
  return Yup.object().shape(schema)
}

const ModelForm: React.FC<ModelFormProps> = ({
  modelProps,
  onCancel,
  onSubmit,
  record,
  submitting,
  errorMessage,
}) => {
  const formik = useFormik({
    initialValues: getInitialFormValues(modelProps, record),
    validationSchema: createValidationSchema(modelProps),
    onSubmit(props): void {
      console.log(props)
      onSubmit(props)
    },
  })

  useEffect(() => {
    if (formik.isSubmitting !== submitting) {
      formik.setSubmitting(submitting)
    }
  }, [formik, submitting])

  return (
    <Flex
      as="form"
      onSubmit={formik.handleSubmit}
      height="100%"
      width="100%"
      direction="column"
    >
      <DrawerBody>
        {errorMessage && (
          <Alert status="error" mb={3}>
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}

        {modelProps.map((property) => {
          const field = formik.getFieldProps(property.name)
          return (
            <FormControl
              key={property.name}
              mb={3}
              isRequired={isRequired(property)}
              isInvalid={
                formik.errors[field.name as keyof typeof formik.errors] &&
                formik.touched[field.name as keyof typeof formik.touched]
              }
            >
              <FormLabel htmlFor={property.name}>{startCase(property.name)}</FormLabel>
              <Input {...field} id={property.name} placeholder={property.name} />
              <FormErrorMessage>
                {formik.errors[field.name as keyof typeof formik.errors]}
              </FormErrorMessage>
            </FormControl>
          )
        })}
      </DrawerBody>
      <DrawerFooter>
        <Button
          variant="outline"
          mr={3}
          onClick={async (): Promise<void> => {
            formik.resetForm()
            onCancel()
          }}
        >
          Cancel
        </Button>
        <Button
          color="blue"
          type="submit"
          onClick={formik.handleSubmit}
          isLoading={formik.isSubmitting}
        >
          Save
        </Button>
      </DrawerFooter>
    </Flex>
  )
}

export default observer(ModelForm)
