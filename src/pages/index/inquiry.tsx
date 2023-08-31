import React from "react";
import { FC } from "react";
import { userState } from "state";
import { useRecoilValueLoadable } from "recoil";
import { Box, Input, useNavigate, Header, Text } from "zmp-ui";

export const Inquiry: FC = () => {
  const user = useRecoilValueLoadable(userState);

  return (
    <Box pl={4} pb={4} flex alignItems="center" className="space-x-2">
      <img
        className="w-12 h-12 rounded-lg border-none"
        src={user.contents.avatar}
      />
      <Box>
        <Text.Title size="small">{user.contents.name}</Text.Title>
        <Text size="xxSmall" className="text-gray">Thành viên mới</Text>
        <Text size="xxSmall" className="text-gray">Số xu: </Text>
      </Box>
    </Box>
  );
};
