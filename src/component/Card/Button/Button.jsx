import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonComponent({ id, toggleHandler }) {
  return (
    <Button
      variant="contained"
      onClick={() => toggleHandler(id)}
      color="primary"
    >
      Отправить 100$
    </Button>
  );
}
