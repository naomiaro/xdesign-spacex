import React, { FunctionComponent, useState } from 'react';
import { SpaceXAPILaunch } from 'SpaceXContext';
import { LaunchList } from 'components/LaunchList';
import { YearFilter, Year } from 'components/YearFilter';
import { SortControl, SortDirection } from 'components/SortControl';
import styles from './LaunchPane.module.css';

type LaunchPaneProps = {
  launches: SpaceXAPILaunch[];
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
