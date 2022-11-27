import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
export const navigationItems = [
    {name: "Dashboard", href: "", icon: HomeIcon, current: true, count: null},
    {
        name: "About",
        href: "about",
        icon: UsersIcon,
        current: false,
        count: null,
    },
    {name: "Data", href: "data", icon: FolderIcon, current: false, count: 3},
    {
        name: "Calendar",
        href: "",
        icon: CalendarIcon,
        current: false,
        count: 15,
    },
    {
        name: "Documents",
        href: "",
        icon: InboxIcon,
        current: false,
        count: null,
    },
    {
        name: "Reports",
        href: "",
        icon: ChartBarIcon,
        current: false,
        count: null,
    },
];

export const userNavigation = [
    {name: "Your Profile", href: "#"},
    {name: "Settings", href: "#"},
    {name: "Sign out", href: "#"},
];
