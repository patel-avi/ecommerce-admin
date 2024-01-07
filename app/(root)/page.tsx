import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
      <UserButton afterSignOutUrl="/" />
    )
  }

export default SetupPage;