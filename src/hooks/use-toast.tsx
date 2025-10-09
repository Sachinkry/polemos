// src/hooks/use-toast.ts (or your file path)

import * as React from "react";
import { toast as sonnerToast } from "sonner";

// Define the shape of the action object that Sonner expects.
// This replaces the need for `ToastActionElement`.
type ToastAction = {
  label: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// Define the props for our new toast function.
type ToastProps = {
  id?: string | number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastAction; // <-- This now uses our clean ToastAction type
  variant?: "default" | "destructive" | "success";
  [key: string]: any;
};

// The new toast function that wraps Sonner.
function toast({
  title,
  description,
  variant = "default",
  action, // <-- This is now a clean object, not a component
  ...props
}: ToastProps) {
  const toastId = sonnerToast[
    variant === "destructive" ? "error" : variant === "success" ? "success" : "message"
  ](title, {
    description: description,
    // The logic is now simpler: we just pass the action object directly.
    action: action,
    ...props,
  });

  return {
    id: toastId,
    dismiss: () => sonnerToast.dismiss(toastId),
    update: (newProps: ToastProps) => toast({ id: toastId, ...newProps }),
  };
}

// The useToast hook remains the same.
function useToast() {
  return {
    toast,
    dismiss: (toastId?: string | number) => sonnerToast.dismiss(toastId),
  };
}

export { useToast, toast };