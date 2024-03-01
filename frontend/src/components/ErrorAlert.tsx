import { DetailedHTMLProps } from "react";
import { errorContainer } from "./ErrorAlert.module.css";

export interface ErrorAlertProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /**
   * Can be a string or an error object - or anything throwable, really.
   */
  error: unknown;
}

/**
 * A simple error alert component for displaying error messages.
 */
export default function ErrorAlert({ error, ...props }: ErrorAlertProps) {
  return (
    <div className={errorContainer} {...props}>
      <p>{formatError(error)}</p>
    </div>
  );
}

function formatError(error: unknown) {
  if (typeof error === "string") {
    return error;
  }

  if (
    error != null &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "An unknown error occurred";
}
