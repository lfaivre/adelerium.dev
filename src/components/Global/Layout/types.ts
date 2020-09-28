import React from 'react';

// @note Types for File: index.tsx

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageWrapperElementProps {
  element: React.ReactNode;
  props: Record<string, unknown>;
}
