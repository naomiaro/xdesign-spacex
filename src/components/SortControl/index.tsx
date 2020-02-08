import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { Button } from 'components/Button';
import { SortIcon } from 'components/Icon';

export type SortDirection = 1 | -1;

type SortControlProps = {
  setSort: Dispatch<SetStateAction<SortDirection>>;
  selectedOption: SortDirection;
};

export const SortControl: FunctionComponent<SortControlProps> = ({
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
