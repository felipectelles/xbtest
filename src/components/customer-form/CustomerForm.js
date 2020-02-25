import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format } from '../../util/currency';
import RFTextField from '../redux-form-text-field/ReduxFormTextField';
import RFSelect from '../redux-form-select/ReduxFormSelect';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
      marginTop: theme.spacing(2),
    },
    '& #wrapper': {
      width: 320,
      [theme.breakpoints.up('md')]: {
        width: 720,
      },
      [theme.breakpoints.up('lg')]: {
        width: 1140,
      },
    },
    '& button': {
      width: '200px',
    },
  },
  footer: {
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  price: {
    alignSelf: 'flex-end',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      '& .text': {
        width: 340,
      },
      '& .gender': {
        width: 172,
      },
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      '& .text': {
        width: 460,
      },
      '& .gender': {
        width: 172,
      },
    }
  },
}));

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'email',
    'gender',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo obrigatório'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Endereço de email inválido'
  }
  return errors
}

const MaterialUiForm = ({ handleSubmit }) => {
  const product = useSelector(state => state.cart.product);
  const total = useMemo(
    () => format(product.reduce((acc, item) => acc + (item.price * item.quantity), 0)), 
    [product]
  );
  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.root}
      id="wrapper"
      direction="column">
      <form onSubmit={handleSubmit}>
        <Grid
          item
          container
          className={classes.textContainer}>
          <Field
            name="name"
            className="text"
            label="Nome"
            component={RFTextField}
            placeholder="Nome do cliente aqui"
          />
          <Field
            name="email"
            className="text"
            label="Email"
            component={RFTextField}
            placeholder="Digite seu email aqui" />
          <Field
            className="gender"
            name="gender"
            component={RFSelect}
            label="Sexo"
          >
            <option value={''}>Selecione</option>
            <option value={'M'}>Masculino</option>
            <option value={'F'}>Feminino</option>
            <option value={'O'}>Outro</option>
          </Field>
          <Grid
            item
            container
            className={classes.footer}
            direction="column">
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              classes={{h6: classes.price}}>
              {total}
            </Typography>
            <Button
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
            >
              Finalizar Compra
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

export default reduxForm({
  form: 'MaterialUiForm',
  validate,
})(MaterialUiForm)