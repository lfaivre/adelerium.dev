import React from 'react';

// @note Types for File: styles.ts

export interface MainWrapperProps {
  headerHeight: number;
  isIndex: boolean;
}

export interface ReturnButtonIndicatorProps {
  isIndicator?: boolean;
}

// @note Types for File: index.tsx

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageWrapperElementProps {
  element: React.ReactNode;
  props: Record<string, unknown>;
}
