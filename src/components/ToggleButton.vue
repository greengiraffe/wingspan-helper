<template>
  <label class="toggle-button">
    <div class="toggle">
      <input type="checkbox" :checked="value" @change="$emit('change', $event.target.checked)">
      <span class="slider" aria-hidden="true"></span>
    </div>
    <span v-if="name" class="name">{{ name }}</span>
  </label>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    name: {
      type: String
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      toggled: this.value
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>

<style scoped lang="scss">

$toggle-size: 0.8em;
$toggle-width: 1.6em;
$toggle-inset: 0.08em;

.toggle-button {
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: bold;
}

// Hide default checkbox
input {
  opacity: 0;
  width: 0;
  height: 0;
}

// The toggle button
.toggle {
  position: relative;
  display: inline-block;
  width: $toggle-width;
  height: $toggle-size;
}

// Slider element
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-switch-bg;
  box-shadow: inset 0 0 5px 0 rgba(0,0,0,0.2);
  transition: .2s ease;
  border-radius: $border-radius-default;
}

// Slider indicator
.slider:before {
  position: absolute;
  content: "";
  height: ($toggle-size - 2 * $toggle-inset);
  width: ($toggle-size - 2 * $toggle-inset);
  left: $toggle-inset;
  bottom: $toggle-inset;
  background-color: $color-switch-slider;
  transition: .2s ease;
  border: 2px solid transparent;
  border-radius: $border-radius-default;
}

input:checked + .slider {
  background-color: $color-switch-bg--active;
}

input:focus + .slider {
  box-shadow: inset 0 0 5px 1px rgba(0,0,0,0.3);
}

input:checked + .slider:before {
  left: $toggle-width - $toggle-size + $toggle-inset;
}

.name {
  display: inline-block;
  margin-left: 0.5rem;
}

</style>
