import { Button, Chip, Link } from '@nextui-org/react';
import React from 'react';

export const TopHeadlineUpdates = () => {
  return (
    <Button
      radius="none"
      variant="shadow"
      name="updatePage"
      as={Link}
      className=" h-14 w-full overflow-hidden bg-default-100"
    >
      <div className="flex items-center justify-center gap-4 break-all sm:gap-6 ">
        <Chip variant="bordered" className="text-primary shadow-lg" size="lg">
          New
        </Chip>
        <p className="text-wrap break-normal">NamiPOS now supports 5 other Payment Methods</p>
      </div>
    </Button>
  );
};
