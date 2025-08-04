import UserItem from "./UserItem";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  DollarSign,
  FileArchive,
  Bell,
  Mail,
  LayoutDashboard,
  User,
  Calendar,
  PlaneTakeoff,
} from "lucide-react";
export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          name: "Dashboard",
          icon: <LayoutDashboard />,
        },
        {
          link: "/",
          name: "Inbox",
          icon: <Mail />,
        },
        {
          link: "/",
          name: "Calendar",
          icon: <Calendar />,
        },
        {
          link: "/",
          name: "Travel",
          icon: <PlaneTakeoff />,
        },
        {
          link: "/",
          name: "Notifications",
          icon: <Bell />,
        },
      ],
    },
    {
      group: "Setting",
      items: [
        {
          link: "/",
          name: "Profile",
          icon: <User />,
        },
        {
          link: "/",
          name: "Billing",
          icon: <DollarSign />,
        },
        {
          link: "/",
          name: "Privacy",
          icon: <FileArchive />,
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-2 w-[250px] min-w-[250px] p-4 min-h-screen border-r">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((item, index) => (
              <div key={index}>
                <CommandGroup heading={item.group}>
                  {item.items.map((menuItem, menuIndex) => (
                    <CommandItem
                      key={menuIndex}
                      className="pl-4 text-[15px] cursor-pointer hover:bg-neutral-800 hover:text-white hover:rounded-[8px] data-[selected=true]:bg-neutral-800 data-[selected=true]:text-white data-[selected=true]:rounded-[8px]"
                    >
                      {menuItem.icon}
                      <span>{menuItem.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                {index < menuList.length - 1 && (
                  <CommandSeparator className="border-b" />
                )}
              </div>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings/ Notifications</div>
    </div>
  );
}
