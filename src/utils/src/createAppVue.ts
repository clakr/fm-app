import { writeFile } from "node:fs";

export default async function () {
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
  
  <style lang="scss" scoped></style>
  `;

  writeFile("src/App.vue", content, (err) => {
    if (err) throw err;
  });
}
