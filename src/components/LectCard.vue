<template>
  <div class="row-1 card" v-if="visible">
    <div class="col-0">
      <h1 :class="{ selected }">{{ lect.name }}</h1>
      <p class="text-caption">
        <span split class="text-dot" :key="f" v-for="f in lect.family">
          {{ f }}
        </span>
      </p>
    </div>
    <img :src="flag" />
  </div>
</template>

<script>
export default {
  name: "LectCard",
  props: ["lect", "selected", "query"],
  computed: {
    family() {
      return this.lect.family.join(" › ");
    },
    flag() {
      return this.$store.state.root + this.lect.name + "/flag.png";
    },
    tags() {
      return [this.lect.name, this.lect.tags, this.lect.family.join(" ")]
        .join(" ")
        .toLowerCase();
    },
    visible() {
      return this.query?.every((t) => this.tags.includes(t));
    },
  },
  watch: {
    visible() {
      this.$emit("visible", this.visible);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
  user-select: none;
}
.selected {
  color: var(--color-highlight);
}
.card {
  min-height: 54px;
  max-height: 54px;
  background-color: var(--color-foreground);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  * {
    z-index: 1;
  }
  &:hover img {
    transform: translate(27%) rotate(-45deg);
  }
  &:active img {
    opacity: 1;
  }
  img {
    pointer-events: none;
    z-index: 0;
    position: absolute;
    right: 0;
    height: 2 * 100%;
    transform: translate(32%) rotate(-45deg);
    opacity: 0.5;
    mask-image: linear-gradient(transparent, white);
  }
}
</style>
