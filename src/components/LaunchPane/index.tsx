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

type LaunchListProps = {
  launches: SpaceXAPILaunch[];
};

export type SortDirection = 1 | -1;
type Year = number | null;

type OptionType = { label: Year; value: Year };

type YearFilterProps = {
  years: Year[];
  setYear: Dispatch<SetStateAction<Year>>;
  selectedOption: Year;
};

const YearFilter: FunctionComponent<YearFilterProps> = ({
  years,
  setYear,
  selectedOption,
}) => {
  const options = years.map(year => ({ value: year, label: year }));
  const value = { label: selectedOption, value: selectedOption };
  return (
    <Select
      value={value}
      onChange={(selectedYear: ValueType<OptionType>) =>
        setYear((selectedYear as OptionType).value)
      }
      options={options}
    />
  );
};

export const LaunchPane: FunctionComponent<LaunchListProps> = ({
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
    <section>
      <div>
        <YearFilter
          years={Array.from(allYears)}
          setYear={setYear}
          selectedOption={year}
        />
        <Button
          onClick={() => {
            setSort((sort * -1) as SortDirection);
          }}
        >
          Sort {sort}
        </Button>
      </div>
      <LaunchList launches={viewData} sort={sort}></LaunchList>
    </section>
  );
};
