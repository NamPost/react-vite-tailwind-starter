import {Fragment, useEffect} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import SideBarMenuContent from "../components/nav/SideBarMenuContent";

import {atom, useAtom} from "jotai";

const sideBarOpenAtom = atom(false);
/* 
This hook is used to contain and show the Sidebar Menu Flyout

it returns the sidebarOpen state and the setSidebarOpen function and also the actual SideBar Flyout Component

 */
export const useMenu = () => {
    const [sidebarOpen, setSidebarOpen] = useAtom(sideBarOpenAtom);

    /* Initial useEffect to handle flyout menu */
    useEffect(() => {
        console.log("useMenu useEffect: ", sidebarOpen);
    }, []);

    const openMenu = (open: any) => {
        console.log("Open Menu Action", open);
        setSidebarOpen(open);
    };

    return {sidebarOpen, openMenu};
};


export function SideBarMenuSlider() {

    const {sidebarOpen, openMenu} = useMenu();
    return (
        <Transition.Root show={sidebarOpen === true ? true : false} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-40 "
                onClose={() => openMenu(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex ">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col pt-5 pb-4 bg-white dark:bg-darksolid">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => openMenu(false)}
                                    >
                                        <span className="sr-only">
                                            Close sidebar
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </Transition.Child>
                            <SideBarMenuContent />
                        </Dialog.Panel>
                    </Transition.Child>
                    <div className="w-14 flex-shrink-0" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
