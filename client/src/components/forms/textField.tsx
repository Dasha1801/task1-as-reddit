import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import './forms.scss';

interface ITextField {
  label: string;
}

function TextField({ label, ...props }: ITextField & FieldHookConfig<string>): JSX.Element {
  const [field, meta] = useField(props);

  return (
    <div className="wrapperLabel">
      <label htmlFor={props.name} className="label">
        {label}
        <input className="input" data-testid={props.name} {...field} />
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
}

export default TextField;
