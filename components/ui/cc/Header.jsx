import { BellIcon } from "lucide-react";
import { Button } from "../button";
import { CommandDemo } from "./Command";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notification, setNotification] = useState([
    {
      text: "This is notifications - 1",
      date: "01-02-2023",
      read: true,
    },
    {
      text: "This is notifications - 2",
      date: "01-02-2023",
      read: false,
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-2 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="" className="relative h-8 w-8 border rounded-[8px]">
              <div
                className={`absolute -top-1 -right-1 h-2 w-2 rounded-full my-1 ${
                  notification.find((item) => item.read === true)
                    ? "bg-emerald-500"
                    : ""
                }`}
              ></div>
              <BellIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white border rounded-[8px]"
          >
            <DropdownMenuLabel className="text-neutral-600">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="border-b" />
            {notification.map((item, index) => (
              <DropdownMenuItem 
                key={index} 
                className="focus:bg-neutral-200 hover:bg-neutral-200 transition-colors rounded-[8px] mx-1"
              >
                <div className="flex items-center gap-2 py-1 px-3 cursor-pointer">
                  <div
                    className={`h-3 w-3 rounded-full my-1 ${
                      item.read ? "bg-emerald-500" : "bg-neutral-300"
                    }`}
                  ></div>
                  <div>
                    <p>{item.text}</p>
                    <p className="text-[10px] text-neutral-500">{item.date}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
