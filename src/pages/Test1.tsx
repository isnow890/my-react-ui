// 조건부 렌더링

import "./Test1.css";
import Profile from "../components/ui/Profile";

type Test1Props = {
  title: string;
};

export default function Test1({ title }: Test1Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 gap-5">
      <h1 className="text-3xl text-blue-600 mb-4">Test1</h1>
      <h1 className="text-xl text-gray-700">
        from props : <span className="font-semibold">{title}</span>
      </h1>

      <div className="ava">wefklewjlkfwjk</div>
      <Profile condition={false} />
      {/* gap-5가 적용이 안 되는 경우, Tailwind CSS가 제대로 적용되고 있는지, 또는 상위 요소에 flex 관련 스타일이 올바르게 적용되어 있는지 확인하세요. 

아래처럼 임시로 border를 추가해서 gap이 적용되는지 시각적으로 확인할 수 있습니다. */}
      {/* 만약 그래도 gap이 적용되지 않으면, Tailwind CSS가 정상적으로 import되어 있는지, 
          또는 index.css에 @tailwind utilities가 누락되지 않았는지 확인해보세요. */}
    </div>
  );
}
