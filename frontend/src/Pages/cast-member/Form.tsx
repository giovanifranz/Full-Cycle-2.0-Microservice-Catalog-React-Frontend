import categoryHttp from '@/utils/http/category-http'
import {
  Box,
  Button,
  ButtonProps,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Theme,
  FormLabel
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

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

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors }
  } = useForm({
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
        margin="normal"
        label="Nome"
        fullWidth
        variant="outlined"
        {...register('name')}
      />
      <FormLabel component="legend">Tipo</FormLabel>
      <RadioGroup
        name="type"
        onChange={(e) => {
          setValue('type', parseInt(e.target.value))
        }}
      >
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="Diretor"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Ator"
        />
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
