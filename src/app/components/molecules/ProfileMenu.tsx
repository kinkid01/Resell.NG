"use client";

import { Avatar, Menu, Portal } from "@chakra-ui/react";
import Link from "next/link";

const ProfileMenu = () => {
  return (
    <Menu.Root positioning={{ placement: "right-end" }}>
      <Menu.Trigger rounded="full" focusRing="outside">
        <Avatar.Root size="sm" cursor="pointer">
          <Avatar.Fallback name="Michael Martins" />
          <Avatar.Image src="" alt="Profile picture" />
        </Avatar.Root>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item asChild value="profile">
              <Link href="/profile">Profile</Link>
            </Menu.Item>

            <Menu.Item asChild value="dashboard">
              <Link href="/dashboard">Dashboard</Link>
            </Menu.Item>

            <Menu.Item asChild value="settings">
              <Link href="/settings">Settings</Link>
            </Menu.Item>

            <Menu.Separator />

            <Menu.Item value="logout" colorPalette="red">
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ProfileMenu;
