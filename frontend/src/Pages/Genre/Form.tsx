import categoryHttp from '@/utils/http/category-http'
import genreHttp from '@/utils/http/genre-http'
import { Category } from '@/utils/Models'
import {
  Box,
  Button,
  ButtonProps,
  makeStyles,
  MenuItem,
  TextField,
  Theme
} from '@material-ui/core'
import { useEffect, useState } from 'react'
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

  const { register, handleSubmit, getValues, setValue, watch } = useForm({
    defaultValues: {
      name: '',
      categories_id: []
    }
  })
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    register('categories_id')
  }, [register])

  useEffect(() => {
    categoryHttp.list().then(({ data }) => {
      setCategories(data.data)
    })
  }, [])

  function onSubmit(formData: any, event: any) {
    console.log(event)
    genreHttp.create(formData).then((response) => {
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
