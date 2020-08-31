import React from 'react';

// @note Types for File: styles.ts

export interface SideBarWrapperProps {
  layoutWidth: number;
}

export interface ContentWrapperProps {
  layoutWidth: number;
}

export interface BackgroundImageProps {
  layoutWidth: number;
}

export interface HeaderWrapperProps {
  layoutWidth: number;
}

export interface MainWrapperProps {
  headerHeight: number;
  isIndex: boolean;
}

export interface ReturnButtonIndicatorProps {
  isIndicator?: boolean;
}

// @note Types for File: index.tsx

export interface DefaultViewProps {
  children: React.ReactNode;
}
