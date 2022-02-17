import { useField } from 'formik';
import React from 'react';

interface ITextField {
  label: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function AutocompleteField({ label, ...props }: ITextField): JSX.Element {
  const [, meta] = useField(props);

  return (
    <div className="wrapperLabel">
      <label htmlFor={props.name} className="label">
        {label}
        <input className="input" data-testid={props.name} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
}

export default AutocompleteField;
