"use client";
import React from "react";
import { useParams } from "next/navigation";

const dymamicId = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();

  return <div>{params.id}</div>;
};

export default dymamicId;
