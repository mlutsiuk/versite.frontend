let id = 0;
export default function() {
  return {
    uid: String(id++),
    next: () => id++
  };
}
