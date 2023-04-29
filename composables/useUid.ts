let id = 0;
export default function () {
  return {
    next: () => id++
  };
}
