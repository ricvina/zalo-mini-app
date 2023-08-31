import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, selectedCategoryIdState } from "state";
import { useNavigate } from "react-router";
import { openWebview, followOA } from "zmp-sdk/apis";

export const Categories: FC = () => {
  const categories = useRecoilValue(categoriesState);
  const navigate = useNavigate();
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

  const gotoCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    // navigate("/category");
    followOA({
      id: "1717024216432568302",
      success: () => {openWebview({url: "https://appgame.busiapp.me/play/3d44e59a67-c712f4-0eb9ce-8630e4315f"})},
      fail: () => {return;}
    });
  };

  return (
    <Box className="bg-white grid grid-cols-3 gap-4 p-4">
      {categories.map((category, i) => (
        <div
          key={i}
          onClick={() => gotoCategory(category.id)}
          className="flex flex-col space-y-2 items-center"
        >
          <img className="w-12 h-12" src={category.icon} />
          <Text size="xxSmall" className="text-gray">
            {category.name}
          </Text>
        </div>
      ))}
    </Box>
  );
};
