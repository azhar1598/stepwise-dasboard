// sidebar.tsx
"use client";

import { useState } from "react";
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  Text,
} from "@mantine/core";
import {
  IconSwitchHorizontal,
  IconLogout,
  IconTool,
} from "@tabler/icons-react";
import { useRouter, usePathname } from "next/navigation";
import classes from "./sidebar.module.css";
import { sidebarItems } from "./sidebar";
import { signOut } from "next-auth/react";
import LogoImage from "../../../public/stepwise-logo.png";
import Image from "next/image";

interface NavbarLinkProps {
  icon: any;
  label: string;
  active?: boolean;
  link: string;
  onClick?(): void;
}

function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  link,
}: NavbarLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    router.push(link);
  };

  return (
    // <Tooltizp
    //   label={label}
    //   // position="flex-start"
    //   transitionProps={{ duration: 0 }}
    // >
    <UnstyledButton
      onClick={handleClick}
      className={classes.link}
      data-active={active || undefined}
      // style={{ borderBottom: "0.5px solid gray" }}
    >
      <Icon style={{ width: "", height: "100px" }} stroke={1.5} />
      <Text size="14px" ml={10}>
        {label}
      </Text>
    </UnstyledButton>
    // </Tooltizp>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const activeIndex = sidebarItems.findIndex((item) => {
    if (pathname === "/") {
      return item.link === "/";
    }
    if (pathname === "/tasks") {
      return item.link === "/tasks";
    }
    if (pathname === "/patients") {
      return item.link === "/patients";
    }
    if (pathname === "/invoices") {
      return item.link === "/invoices";
    }
    if (pathname === "/study-material") {
      return item.link === "/study-material";
    }
    if (pathname === "/events") {
      return item.link === "/events";
    }
    if (pathname === "/help-desk") {
      return item.link === "/help-desk";
    }

    // return pathname.startsWith(item.link); // Fixes incorrect matches
  });

  const links = sidebarItems.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === activeIndex}
      onClick={() => {}}
    />
  ));

  const handleAccountSwitch = () => {
    // Handle account switching logic
    console.log("Switching account");
  };

  return (
    <nav className={classes.navbar}>
      <Center>
        {/* <Text c={"white"} fw={600} size="22px">
          Tulboxx
        </Text> */}
        <div className="flex justify-center items-center bg- px-1 w-full h-16 bg-white">
          <Image src={LogoImage} alt="logo" height={150} width={150} />
        </div>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="flex-start" gap={5}>
          {links}
          <UnstyledButton
            onClick={() => {
              // signOut({ callbackUrl: "/login" });
              router.push("/login");
            }}
            className={classes.link}
            // data-active={}
          >
            <IconLogout style={{ width: "", height: "100px" }} stroke={1.5} />
            <Text size="14px" ml={10}>
              Logout
            </Text>
          </UnstyledButton>
        </Stack>
      </div>
    </nav>
  );
}
