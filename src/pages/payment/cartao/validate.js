import * as yup from 'yup';

const addressSchema = yup.object().shape({
    nameCard: yup
        .string()
        .required(),
    numberCard: yup
        .number()
        .required(),
    validateCard: yup
        .date()
        .required(),
    cvvCard: yup
        .number()
        .required(),
    cpf: yup
        .number()
        .required(),
    date: yup
        .date()
        .required()
})

export default addressSchema