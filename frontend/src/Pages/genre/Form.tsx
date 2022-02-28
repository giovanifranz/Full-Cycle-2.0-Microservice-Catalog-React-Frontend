import categoryHttp from '@/utils/http/category-http'
import genreHttp from '@/utils/http/genre-http'
import { Category, Genre } from '@/utils/Models'
import {
  Box,
  Button,
  ButtonProps,
  makeStyles,
  MenuItem,
  TextField,
  Theme
} from '@material-ui/core'
import * as yup from '@/utils/vendor/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

interface IFormInputs {
  name: string
  categories_id: Array<any>
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(1)
    }
  }
})

const validationSchema = yup.object().shape({
  name: yup.string().label('Nome').required().max(255),
  categories_id: yup.array().label('Categorias').required()
})

export const Form = () => {
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
    watch
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      categories_id: []
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
  const [genre, setGenre] = useState<Genre | null>(null)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    let isSubscribed = true
    ;(async () => {
      setLoading(true)
      const promises = [categoryHttp.list({ queryParams: { all: '' } })]
      if (id) {
        promises.push(genreHttp.get(id))
      }
      try {
        const [categoriesResponse, genreResponse] = await Promise.all(promises)
        if (isSubscribed) {
          setCategories(categoriesResponse.data.data)
          if (id) {
            setGenre(genreResponse.data.data)
            const categories_id = genreResponse.data.data.categories.map(
              (item: Category) => item.id
            )
            reset({
              ...genreResponse.data.data,
              categories_id
            })
          }
        }
      } catch (error) {
        console.error(error)
        snackbar.enqueueSnackbar('Não foi possível carregar as informações', {
          variant: 'error'
        })
      } finally {
        setLoading(false)
      }
    })()

    return () => {
      isSubscribed = false
    }
  }, [id, reset, snackbar])

  async function onSubmit(formData: any, event: any) {
    setLoading(true)
    try {
      const http = !genre
        ? genreHttp.create({})
        : genreHttp.update(genre.id, formData)

      console.log('aqui', http)
      const { data } = await http
      snackbar.enqueueSnackbar('Gênero salvo com sucesso', {
        variant: 'success'
      })
      setTimeout(() => {
        event
          ? id
            ? navigate(`/genres/${data.data.id}/edit`, { replace: true })
            : navigate(`/genres/${data.data.id}/edit`)
          : navigate('/genres')
      })
    } catch (error) {
      console.error(error)
      snackbar.enqueueSnackbar('Não foi possível salvar o gênero', {
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
        margin="normal"
        disabled={loading}
        error={errors.name !== undefined}
        helperText={errors.name && errors.name.message}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        select
        {...register('categories_id')}
        value={watch('categories_id')}
        label="Categorias"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          setValue('categories_id', e.target.value as any)
        }}
        SelectProps={{
          multiple: true
        }}
        disabled={loading}
        error={errors.categories_id !== undefined}
        InputLabelProps={{ shrink: true }}
      >
        <MenuItem value="" disabled>
          <em>Selecione categorias</em>
        </MenuItem>
        {categories.map((category, key) => (
          <MenuItem key={key} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </TextField>
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
