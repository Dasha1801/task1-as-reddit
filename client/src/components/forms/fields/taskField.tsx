import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import '../forms.scss';

interface ITextField {
  label: string;
  'data-tag': string;
}

function TaskField({ label, ...props }: ITextField & FieldHookConfig<string>): JSX.Element {
  const [field, meta] = useField(props);

  return (
    <div className="wrapperTask">
      <label htmlFor={props.name} className="labelTask">
        {label}

        {props['data-tag'] === 'textarea' ? (
          <textarea className="inputTask" data-testid={props.name} {...field} />
        ) : (
          <input className="inputTask" data-testid={props.name} {...field} />
        )}
      </label>
      {meta.touched && meta.error ? <div className="error errorTask">{meta.error}</div> : null}
    </div>
  );
}

export default TaskField;
