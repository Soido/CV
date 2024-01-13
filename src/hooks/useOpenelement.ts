import React, { useEffect, useState } from "react";

export default function useOpenElement(onClick: any) {
  const [open, setOpen] = useState(false);

  const handleCkick = () => {
    setOpen(!open);
  };

  return handleCkick;
}
