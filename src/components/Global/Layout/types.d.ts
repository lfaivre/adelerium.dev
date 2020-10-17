import { ReactElement } from 'react';

export type LayoutProps = { children: ReactElement };

export type PageWrapperElementProps = { element: ReactElement; props: Record<string, unknown> };
