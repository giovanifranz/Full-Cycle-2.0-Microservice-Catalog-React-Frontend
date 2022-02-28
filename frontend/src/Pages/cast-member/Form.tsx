import castMemberHttp from '@/utils/http/cast-member-http'
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
  FormLabel,
  FormHelperText,
  FormControl
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import * as yup from '@/utils/vendor/yup'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { CastMember } from '@/utils/Models'

interface IFormInputs {
  name: string
  type: 1 | 2
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
  type: yup.number().label('Tipo').required()
})

export const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      type: 1
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
  const [castMember, setCastMamber] = useState<CastMember | null>(null)

  useEffect(() => {
    if (!id) {
      return
    }

    async function getCastMember() {
      setLoading(true)
      try {
        const { data } = await castMemberHttp.get(id)
        setCastMamber(data.data)
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

    getCastMember()
  }, [])

  async function onSubmit(formData: any, event: any) {
    setLoading(true)
    try {
      const http = !castMember
        ? castMemberHttp.create(formData)
        : castMemberHttp.update(castMember.id, formData)
      const { data } = await http
      snackbar.enqueueSnackbar(
        `Membro de elenco ${data.data.name} salvo com sucesso`,
        { variant: 'success' }
      )
      setTimeout(() => {
        event
          ? id
            ? navigate(`/cast-members/${data.data.id}/edit`, { replace: true })
            : navigate(`/cast-members/${data.data.id}/edit`)
          : navigate('/cast-members')
      })
    } catch (error) {
      console.error(error)
      snackbar.enqueueSnackbar('Não foi possível salvar o membro de elenco', {
        variant: 'error'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        label="Nome"
        fullWidth
        variant="outlined"
        {...register('name')}
        disabled={loading}
        error={errors.name !== undefined}
        helperText={errors.name && errors.name.message}
        InputLabelProps={{ shrink: true }}
      />

      <FormControl
        margin={'normal'}
        error={errors.type !== undefined}
        disabled={loading}
      >
        <FormLabel component="legend">Tipo</FormLabel>
        <RadioGroup
          name="type"
          onChange={(e) => {
            setValue('type', parseInt(e.target.value) as 1 | 2)
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

        {errors.type && (
          <FormHelperText id="type-helper-text">
            {errors.type.message}
          </FormHelperText>
        )}
      </FormControl>
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
