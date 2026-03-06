import React from 'react';

export interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  status?: 'default' | 'negative' | 'positive';
  leadingIcon?: boolean;
  className?: string;
}
