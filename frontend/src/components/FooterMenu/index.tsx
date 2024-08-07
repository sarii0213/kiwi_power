"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const NAV_ITEMS = [
  { href: "/objectives", name: "ビジョンボード", icon: InterestsOutlinedIcon },
  { href: "/records", name: "記録", icon: TrendingDownOutlinedIcon },
  { href: "/settings", name: "設定", icon: SettingsRoundedIcon },
];

export const FooterMenu = () => {
  const pathname = usePathname();
  const [value, setValue] = useState(pathname);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        {NAV_ITEMS.map((item) => (
          <BottomNavigationAction
            component={Link}
            key={item.href}
            href={item.href}
            label={item.name}
            value={item.href}
            icon={<item.icon />}
            className={`inline-flex flex-col items-center justify-center px-5 hover:opacity-100 dark:hover:opacity-100 group ${
              pathname === item.href ? "opacity-100" : "opacity-40"
            }`}
            sx={{
              "&.Mui-selected": {
                color: "success.main",
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default FooterMenu;
