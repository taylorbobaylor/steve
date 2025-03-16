import * as React from "react";

declare module "@radix-ui/react-tabs" {
  interface TabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children?: React.ReactNode;
    className?: string;
  }
  
  interface TabsListProps {
    children?: React.ReactNode;
    className?: string;
  }
  
  interface TabsTriggerProps {
    value?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
  }
  
  interface TabsContentProps {
    value?: string;
    children?: React.ReactNode;
    className?: string;
  }
}
