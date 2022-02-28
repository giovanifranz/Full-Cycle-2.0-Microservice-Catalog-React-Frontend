import categoryHttp from '@/utils/http/category-http'
import {
  Box,
  Button,
  ButtonProps,
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
  Theme
} from '@material-ui/core'
import * as yup from '@/utils/vendor/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams } from 'react-router-dom'

interface IFormInputs {
  name: string
  description: string
  is_active: boolean
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(1)
    }
  }
})

const validationSchema = yup.object().shape({
  name: yup.string().label('Nome').required().max(255)
})

export const Form = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const classes = useStyles()
  const buttonProps: ButtonProps = {
    variant: 'contained',
    className: classes.submit,
    color: 'secondary',
    disabled: loading
  }

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
    setValue,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      is_active: true
    }
  })

  const { id } = useParams()
  const [category, setCategory] = useState<{ id: string } | null>(null)

  useEffect(() => {
    if (!id) {
      return
    }

    categoryHttp.get(id).then(({ data }) => {
      setCategory(data.data)
      reset(data.data)
    })
  }, [])

  function onSubmit(formData: any, event: any) {
    const http = !category
      ? categoryHttp.create(formData)
      : categoryHttp.update(category.id, formData)
    http.then((response) => {
      console.log(response)
    })
    console.log(event)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Nome"
        fullWidth
        variant="outlined"
        {...register('name')}
        error={errors.name !== undefined}
        helperText={errors.name && errors.name.message}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Descrição"
        multiline
        rows="4"
        fullWidth
        variant="outlined"
        margin="normal"
        {...register('description')}
        InputLabelProps={{ shrink: true }}
      />
      <FormControlLabel
        control={
          <Checkbox
            {...register('is_active')}
            color="primary"
            checked={watch('is_active')}
            onChange={() => setValue('is_active', !getValues()['is_active'])}
          />
        }
        label="Ativo?"
        labelPlacement="end"
      />
      <Box dir="rtl">
        <Button {...buttonProps} onClick={() => onSubmit(getValues, null)}>
          Salvar
        </Button>
        <Button {...buttonProps} type="submit">
          Salvar e continuar editando
        </Button>
      </Box>
    </form>
  )
}
