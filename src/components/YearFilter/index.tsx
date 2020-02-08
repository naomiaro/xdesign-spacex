import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import Select, { ValueType } from 'react-select';
import styles from './YearFilter.module.css';
import cx from 'classnames';
import './react-select.css';

export type Year = number | null;
type OptionType = { label: string; value: Year };

type YearFilterProps = {
  years: Year[];
  setYear: Dispatch<SetStateAction<Year>>;
  selectedOption: Year;
};

export const YearFilter: FunctionComponent<YearFilterProps> = ({
  years,
  setYear,
  selectedOption,
}) => {
  const options = years.map(year => ({
    value: year,
    label: `${year}`,
  }));
  const value = selectedOption
    ? { label: `${selectedOption}`, value: selectedOption }
    : null;
  return (
    <Select
      value={value}
      onChange={(selectedYear: ValueType<OptionType> | null) =>
        setYear(
          selectedYear === null
            ? selectedYear
            : (selectedYear as OptionType).value
        )
      }
      options={options}
      className={cx(styles.YearFilter, 'react-select')}
      isClearable
      placeholder="Filter by Year"
      classNamePrefix="react-select"
    />
  );
};
