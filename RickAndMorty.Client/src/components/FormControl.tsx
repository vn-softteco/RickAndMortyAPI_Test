import {
    ComponentType,
    ForwardRefExoticComponent,
    ReactNode,
} from 'react';
import {
    Control,
    FieldPath,
    FieldValues,
    useController,
} from 'react-hook-form';

type ComponentBaseProps = {
    error?: boolean;
    helperText?: ReactNode;
};

type Component<TProps extends ComponentBaseProps> =
    | ComponentType<TProps>
    | ForwardRefExoticComponent<TProps>;

type Props<
    TProps extends ComponentBaseProps,
    TFieldValues extends FieldValues,
> = {
    component?: Component<TProps>;
    control?: Control<TFieldValues>;
    id?: string;
    name: string;
} & TProps;

function FormControl<
    TProps extends ComponentBaseProps = ComponentBaseProps,
    TFieldValues extends FieldValues = FieldValues,
>({
      component: Component,
      control,
      helperText,
      name,
      ...rest
  }: Props<TProps, TFieldValues>) {
    const {
        field,
        fieldState: { error },
    } = useController<TFieldValues>({
        name: name as FieldPath<TFieldValues>,
        control,
    });

    return Component ? (
        <Component
            helperText={error?.message}
            error={!!error}
            {...field}
            {...(rest as TProps)}
        />
    ) : null;
}

export default FormControl;