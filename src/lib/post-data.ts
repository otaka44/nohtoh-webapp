export type PostData = {
  number: number;
  red?: number;
  green?: number;
  blue?: number;
  brightness?: number;
};
const url = "https://proud-suddenly-albacore.ngrok-free.app/api/multi-color";

export const postRgbData = async (data: PostData[]) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "ngrok-skip-browser-warning": "true",
    },
    body: JSON.stringify({ value: data }),
  });
  return response;
};
