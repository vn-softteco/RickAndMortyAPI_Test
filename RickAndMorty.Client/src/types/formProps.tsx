import { SubmitHandler } from 'react-hook-form'

export type FormProps<T extends object> = {
    handleLoginFormSubmit: SubmitHandler<T>
}