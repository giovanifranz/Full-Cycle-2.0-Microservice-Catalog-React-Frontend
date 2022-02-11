import categoryHttp from '@/utils/http/category-http'
import {
  Box,
  Button as MuiButton,
  ButtonProps,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from '@material-ui/core'
import { styled } from '@mui/system'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const Button = styled(MuiButton)(({ theme }) => ({
  margin: theme.spacing(1)
}))

export const Form = () => {
  const buttonProps: ButtonProps = {
    variant: 'outlined'
  }

  const { register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      name: '',
      type: 1
    }
  })

  useEffect(() => {
    register('type')
  }, [register])

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
      <RadioGroup
        name="type"
        onChange={(e) => {
          setValue('type', parseInt(e.target.value))
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Diretor" />
        <FormControlLabel value="2" control={<Radio />} label="Ator" />
      </RadioGroup>

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
