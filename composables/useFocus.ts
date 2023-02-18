export default function() {
  const isFocused = ref<boolean>(false);

  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }

  return {
    isFocused,
    focus,
    blur
  };
}
