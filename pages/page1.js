import React from "react";
import { SnackbarProvider, withSnackbar } from "notistack";

const Component = withSnackbar(function Component({ enqueueSnackbar }) {
  function handleClick() {
    enqueueSnackbar("hello");
  }

  return <button onClick={handleClick}>show snackbar</button>;
});

export default function Page1() {
  return (
    <SnackbarProvider>
      <Component />
    </SnackbarProvider>
  );
}
