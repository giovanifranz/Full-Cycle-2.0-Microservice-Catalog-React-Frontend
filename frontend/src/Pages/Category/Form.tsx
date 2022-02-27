import categoryHttp from '@/utils/http/category-http'
import {
  Box,
  Button,
  ButtonProps,
  Checkbox,
  makeStyles,
  TextField,
  Theme
} from '@material-ui/core'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(1)
    }
  }
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

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: '',
      description: '',
      is_active: true
    }
  })

  function onSubmit(formData: any, event: any) {
    console.log(event)
    categoryHttp.create(formData).then((response) => {
      console.log(response)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Nome"
        fullWidth
        variant="outlined"
        {...register('name')}
      />
      <TextField
        label="Descrição"
        multiline
        rows="4"
        fullWidth
        variant="outlined"
        margin="normal"
        {...register('description')}
      />
      <Checkbox {...register('is_active')} defaultChecked />
      Ativo?
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
