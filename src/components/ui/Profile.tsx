import type { TestUser } from "../../types";

const user: TestUser = {
  name: "Hedy Lamarr",
  imageUrl:
    "https://images.velog.io/images/sdb016/post/5d955cc9-06d0-433d-a059-a352e6f93d39/test.png",
  imageSize: 80,
};

import type { ReactNode } from "react";

export default function Profile({ condition }: { condition: boolean }) {
  // rendering 변수의 타입을 명확히 지정하려면 ReactNode를 사용하면 됩니다.
  let rendering: ReactNode;
  if (condition) {
    rendering = <h1 className="text-2xl font-bold">{user.name}</h1>;
  } else {
    rendering = (
      <h1 className="text-2xl font-bold text-gray-400">이름이 숨겨졌습니다</h1>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {rendering}
      {/* w-10 h-10은 대략 40px x 40px 정도입니다. */}
      <img
        className="w-10 h-10"
        src={user.imageUrl}
        alt={user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </div>
  );
}
