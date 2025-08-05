"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    // Logic to handle organization control when active
    setActive({
      organization: params.organizationId as string,
    });
  }, [setActive, params.organizationId]);

  return <div className="flex flex-col space-y-2 pl-4 pt-2">{}</div>;
};
