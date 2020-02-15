import React, { FunctionComponent } from 'react';

type AnnouncementProps = {
  message: string;
};

export const Announcements: FunctionComponent<AnnouncementProps> = ({
  message,
}) => {
  return (
    <div aria-live="polite" aria-atomic="true" className="visually-hidden">
      {message}
    </div>
  );
};
