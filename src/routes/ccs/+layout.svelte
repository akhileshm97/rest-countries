<script>
  import {
    Header,
    HeaderUtilities,
    HeaderAction,
    SkipToContent,
    Content,
    Theme
  } from "carbon-components-svelte";
  // import { Link, OutboundLink } from "carbon-components-svelte";
  import { expoIn } from "svelte/easing";

  import "carbon-components-svelte/css/all.css";

  let isSideNavOpen = false;
  let isOpen = false;
  let selected = "0";
  let transitions = {
    "0": {
      text: "Default (duration: 200ms)",
      value: { duration: 200 },
    },
    "1": {
      text: "Custom (duration: 600ms, delay: 50ms, easing: expoIn)",
      value: { duration: 600, delay: 50, easing: expoIn },
    },
    "2": {
      text: "Disabled",
      value: false,
    },
  };
</script>

<Header company="Where in the world?" platformName="" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderUtilities>
    <HeaderAction bind:isOpen transition={transitions[selected].value}>
      <div class="action-container">
        <Theme
          persist 
          persistKey="__carbon-theme"
          render="toggle"
          toggle={{
            themes: ["g10", "g100"],
            labelA: "Enable dark mode",
            labelB: "Enable dark mode",
            hideLabel: true,
            size: "sm",
          }}
        />
      </div>
    </HeaderAction>
  </HeaderUtilities>
</Header>

<Content>
  <slot />
</Content>

<style>
  .action-container {
    padding: 1rem;
  }
</style>