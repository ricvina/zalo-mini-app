import React, { FC } from "react";
import { Box, Header, Text, Input, useNavigate } from "zmp-ui";
import { useRecoilValueLoadable } from "recoil";
import { userState } from "state";
import logo from "static/3T.png";
import appConfig from "../../../app-config.json";
// import { getConfig } from "utils/config";

export const Welcome: FC = () => {
  const navigate = useNavigate();

  return (
    <Header
      className="app-header no-border pl-4 flex-none pb-[6px]"
      showBackIcon={false}
      title={
        (
          <Box flex alignItems="center" className="space-x-2">
            <img
              className="w-24 h-7 rounded-lg border-none"
              src={logo}
            />
            <Box noSpace className="bg-white" height={36} flex>
              <Input.Search className="input-search"
                onFocus={() => navigate("/search")}
                placeholder="Tìm nhanh sản phẩm ..."
              />
            </Box>
            {/* <Box>
              <Text.Title size="small">{appConfig.app.title}</Text.Title>
              {user.state === "hasValue" ? (
                <Text size="xxSmall" className="text-gray">
                  Welcome, {user.contents.name}!
                </Text>
              ) : (
                <Text>...</Text>
              )}
            </Box> */}
          </Box>



        ) as unknown as string
      }
    />
  );
};
