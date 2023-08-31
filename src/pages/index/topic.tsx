import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { setTopicIdState, topicState } from "state";
import { useNavigate } from "react-router";
import { openWebview, followOA } from "zmp-sdk/apis";

export const Topic: FC = () => {
  const topics = useRecoilValue(topicState);
  const navigate = useNavigate();
  const setTopicId = useSetRecoilState(setTopicIdState);

  const goto = (topicId: string) => {
    setTopicId(topicId);
    navigate("/mini-game");
  };

  return (
    <Box className="bg-white grid grid-cols-3 gap-4 p-4">
      {topics.map((topic, i) => (
        <div
          key={i}
          onClick={() => goto(topic.id)}
          className="flex flex-col space-y-2 items-center"
        >
          <img className="w-12 h-12" src={topic.icon} />
          <Text size="xxSmall" className="text-gray">
            {topic.name}
          </Text>
        </div>
      ))}
    </Box>
  );
};
