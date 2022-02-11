import categoryHttp from '@/utils/http/category-http'
import {
  Box,
  Button as MuiButton,
  ButtonProps,
  Checkbox,
  TextField
} from '@material-ui/core'
import { styled } from '@mui/system'
import { useForm } from 'react-hook-form'

const Button = styled(MuiButton)(({ theme }) => ({
  margin: theme.spacing(1)
}))

export const Form = () => {
  const buttonProps: ButtonProps = {
    variant: 'outlined'
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
