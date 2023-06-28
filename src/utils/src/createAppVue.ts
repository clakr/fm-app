import { writeFile } from "node:fs";
import { Options } from "../../types";

export default async function (css: Options["css"]) {
  let style = ``;

  switch (css) {
    case "sass":
      style = '<style lang="scss" scoped></style>';
      break;

    default:
      style = "<style scoped></style>";
      break;
  }

  const content = `<script setup lang="ts">
import { inject, onBeforeMount } from "vue";
const addSRHeading = inject("addSRHeading") as () => void;

onBeforeMount(() => {
  addSRHeading();
});
</script>

<template>
  <div>qwe</div>
</template>

${style}
`;

  writeFile("src/App.vue", content, (err) => {
    if (err) throw err;
  });
}
