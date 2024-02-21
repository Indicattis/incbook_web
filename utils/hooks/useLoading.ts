import { useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  function processInit() {
    setLoading(true);
  }

  function processEnd() {
    setLoading(false);
  }

  return { loading, processInit, processEnd };
}