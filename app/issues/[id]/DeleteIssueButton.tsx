import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const DeleteIssueButton = ({ issue }: { issue: Issue }) => {
  return (
    <Button color="red">
      <Link href={`/issues/${issue.id}/delete`}>Delete Issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
