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
import { useParams, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { Category } from '@/utils/Models'

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
  const [loading, setLoading] = useState<boolean>(false)
  const classes = useStyles()
  const buttonProps: ButtonProps = {
    variant: 'contained',
    className: classes.submit,
    color: 'secondary',
    disabled: loading
  }

  const { id } = useParams()
  const snackbar = useSnackbar()
  const navigate = useNavigate()
  const [category, setCategory] = useState<Category | null>(null)

  useEffect(() => {
    if (!id) {
      return
    }
    async function getCategory() {
      setLoading(true)
      try {
        const { data } = await categoryHttp.get(id)
        setCategory(data.data)
        reset(data.data)
      } catch (error) {
        console.log(error)
        snackbar.enqueueSnackbar('Não foi possível carregar as informações', {
          variant: 'error'
        })
      } finally {
        setLoading(false)
      }
    }

    getCategory()
  }, [])

  async function onSubmit(formData: any, event: any) {
    setLoading(true)
    try {
      const http = !category
        ? categoryHttp.create(formData)
        : categoryHttp.update(category.id, formData)
      const { data } = await http
      snackbar.enqueueSnackbar('Categoria salva com sucesso', {
        variant: 'success'
      })
      setTimeout(() => {
        event
          ? id
            ? navigate(`/categories/${data.data.id}/edit`, { replace: true })
            : navigate(`/categories/${data.data.id}/edit`)
          : navigate('/categories')
      })
    } catch (error) {
      console.error(error)
      snackbar.enqueueSnackbar('Não foi possível salvar a categoria', {
        variant: 'error'
      })
    } finally {
      setLoading(false)
    }
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
