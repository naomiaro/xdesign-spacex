import React, {
  FunctionComponent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import Select, { ValueType } from 'react-select';
import { SpaceXAPILaunch } from 'SpaceXContext';
import { LaunchList } from 'components/LaunchList';
import { Button } from 'components/Button';
import { SortIcon } from 'components/Icon';
import styles from './LaunchPane.module.css';

type LaunchPaneProps = {
  launches: SpaceXAPILaunch[];
};

export type SortDirection = 1 | -1;
type Year = number | null;

type OptionType = { label: string; value: Year };

type YearFilterProps = {
  years: Year[];
  setYear: Dispatch<SetStateAction<Year>>;
  selectedOption: Year;
};

type SortControlProps = {
  setSort: Dispatch<SetStateAction<SortDirection>>;
  selectedOption: SortDirection;
};

const YearFilter: FunctionComponent<YearFilterProps> = ({
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
      className={styles.YearFilter}
      isClearable
      placeholder="Filter by Year"
    />
  );
};

const SortControl: FunctionComponent<SortControlProps> = ({
  setSort,
  selectedOption,
}) => {
  return (
    <Button
      onClick={() => {
        setSort((selectedOption * -1) as SortDirection);
      }}
    >
      Sort {selectedOption === 1 ? 'Descending' : 'Ascending'} <SortIcon />
    </Button>
  );
};

export const LaunchPane: FunctionComponent<LaunchPaneProps> = ({
  launches,
}) => {
  const [sort, setSort] = useState<SortDirection>(1);
  const [year, setYear] = useState<Year>(null);

  const allYears = new Set<Year>();

  launches.forEach(launch => {
    allYears.add(launch.launch_year);
  });

  const viewData = launches.filter(data =>
    year === null ? true : data.launch_year === year
  );

  return (
    <section className={styles.LaunchPane}>
      <div className={styles.Filters}>
        <YearFilter
          years={Array.from(allYears).sort()}
          setYear={setYear}
          selectedOption={year}
        />
        <SortControl setSort={setSort} selectedOption={sort} />
      </div>
      <LaunchList launches={viewData} sort={sort}></LaunchList>
    </section>
  );
};
