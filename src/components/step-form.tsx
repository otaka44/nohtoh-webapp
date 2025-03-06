// src/components/StepForm.tsx
import React, { useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn/uiのButtonコンポーネント
// src/data/questions.ts
export const questions = [
  {
    id: 1,
    question: "1日の睡眠時間は？",
    type: "number",
    description:
      "睡眠不足の人が多いことによる日本の経済損失は3兆円にも上るらしいですよ。",
    default: 8,
  },
  {
    id: 2,
    question: "1日の作業時間は？",
    type: "number",
    description:
      "残業時間は有意義な時間？。「人生を一時間でも無駄にする人は人生の価値をまだ発見していない人だ。」という格言は胸に刺さります。",
    default: 8,
  },
  {
    id: 3,
    question: "1日のスクリーンタイムは？",
    type: "number",
    description:
      "無心に縦スクロール。はたまた横スクロールで時間を無駄にしていませんか？ショート動画の中毒性があなたから集中力を奪います。",
    default: 12,
  },
  // {
  //   id: 4,
  //   question: "1日のTV視聴時間は？",
  //   type: "number",
  //   description: "まだテレビを見ている人は。",
  //   default: 0,
  // },
  {
    id: 4,
    question: "普段聴いている音楽の音圧レベル (dB) は？",
    type: "number",
    description:
      "85デシベル(dB)以上の大きな音を聞き続けていると「騒音性難聴」になってしまいます。地下鉄車内は100dBもあるそうですよ。",
    default: 60,
  },
  {
    id: 5,
    question: "1日で音楽を聴く時間は？",
    type: "number",
    description:
      "聞く音楽のテンポや曲調、ジャンルによって作業効率が上がったり・下がったりするそうです。あなただけの作業効率プレイリストを作ってみては。",
    default: 6,
  },
  // 必要に応じて追加
];
const StepForm = ({
  ...props
}: {
  onSubmit?: (val: number[]) => void;
  isLoading?: boolean;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    questions?.map((q) => q?.default ?? 0)
  );

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = Number(event.target.value);
    setAnswers(newAnswers);
  };

  const handleIncrement = () => {
    const newAnswers = [...answers];
    newAnswers[currentStep]++;
    setAnswers(newAnswers);
  };

  const handleDecrement = () => {
    const newAnswers = [...answers];
    if (newAnswers[currentStep] > 0) newAnswers[currentStep]--;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    // if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    props.onSubmit && props.onSubmit(answers);
  };

  return (
    <div className="flex flex-col justify-center bg-white p-4">
      {currentStep < questions.length ? (
        <div className="text-center text-zinc-600">
          <h2 className="text-xl mb-4">{questions[currentStep].question}</h2>
          <div className="m-[1rem]">{questions[currentStep].description}</div>
          <div className="flex justify-center mb-4">
            <Button
              className="text-white bg-zinc-400 hover:bg-zinc-600"
              size="lg"
              onClick={handleDecrement}
            >
              -
            </Button>
            <input
              type="number"
              value={answers[currentStep]}
              className="mx-2 p-2 border rounded text-center w-24"
              onChange={handleChangeInput}
            />
            <Button
              className="text-white bg-zinc-400 hover:bg-zinc-600"
              size="lg"
              onClick={handleIncrement}
            >
              +
            </Button>
          </div>
          <div className="flex justify-between mt-10">
            <Button
              className="text-white bg-zinc-400 hover:bg-zinc-600"
              size="lg"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              戻る
            </Button>
            <span>
              {currentStep + 1} / {questions.length}
            </span>
            <Button
              className="text-white bg-zinc-400 hover:bg-zinc-600"
              size="lg"
              onClick={handleNext}
              // disabled={currentStep === questions.length - 1}
            >
              次へ
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center text-zinc-600">
          <h2 className="text-xl mb-4">以下の内容で懺悔しますか？</h2>
          <div className="m-[1rem]">入力内容を確認してください。</div>
          <div className="my-[4rem] mx-[1rem]">
            {answers.map((ans, idx) => (
              <div
                key={`confirm-${idx}`}
                className="grid grid-cols-7 mb-[1rem]"
              >
                <div className="text-left col-span-4">{`Q${idx + 1}. ${
                  questions[idx].question
                }:`}</div>
                <div className="text-right col-span-1">{`${ans}`}</div>
                <div className="text-right col-span-2">
                  {idx == 3 ? "dB" : "hours"}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between space-x-4">
            <Button
              className="text-white bg-zinc-400 hover:bg-zinc-600"
              size="lg"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              戻る
            </Button>

            <Button
              size="lg"
              onClick={handleSubmit}
              // disabled={currentStep === questions.length - 1}
              className="w-full bg-rose-500 hover:bg-rose-700 text-white"
            >
              {props.isLoading ? (
                <LoaderCircleIcon className="animate-spin" />
              ) : (
                "許しを請う"
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepForm;
