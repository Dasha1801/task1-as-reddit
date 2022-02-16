import React, { useState } from 'react';
import { cities } from '../../../data/cities';
import AutocompleteField from './autocompleteField';
import { ICityProps, IFieldProps } from '../../../shared/interfaces';

function AutocompleteCity({ setState, city }: IFieldProps): JSX.Element {
  const [suggestions, setSuggestions] = useState<ICityProps[]>([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setState('city', value);
    const regex = new RegExp(`${value}`, 'gi');

    if (value.length > 1) {
      setSuggestions(cities.filter((el) => el.name.match(regex)));
    }
  };

  const onClickHandler = (str: string): void => {
    setState('city', str);
    setSuggestions([]);
  };

  return (
    <>
      <AutocompleteField label="City:" name="city" type="city" onChange={onChangeHandler} value={city} />
      {suggestions.length ? (
        <div className="variantCity">
          {suggestions.slice(0, 5).map((el) => (
            <input
              className="itemCity"
              key={el.name}
              value={el.name}
              type="button"
              onClick={() => onClickHandler(el.name)}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default AutocompleteCity;
