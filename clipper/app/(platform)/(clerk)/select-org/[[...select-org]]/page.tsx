import { OrganizationList } from "@clerk/nextjs";
import React from "react";

// This page allows users to select or create an organization
// It uses the OrganizationList component from Clerk to handle organization selection
export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
