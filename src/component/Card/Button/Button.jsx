import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonComponent({ check, id, toggleHandler }) {
  return (
    <Button
      variant="contained"
      disabled={check}
      onClick={() => toggleHandler(id)}
      color="primary"
    >
      Отправить 100$
    </Button>
  );
}
