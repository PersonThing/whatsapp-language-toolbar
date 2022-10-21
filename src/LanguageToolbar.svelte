<div class="language-toolbar-container">

  <!-- this toolbar appears next to text messages -->
  {#if text || hasAudio}
    <div class="language-toolbar" style="right: 0px; top:{hasAudio ? y - 20 : y}px;">
      {#if text}
        <TextControls {text} />
      {/if}
      {#if hasAudio}
        <AudioControls />
      {/if}
    </div>
  {/if}
</div>

<script>
  import AudioControls from "./LanguageToolbar.AudioControls.svelte"
  import TextControls from "./LanguageToolbar.TextControls.svelte"

  export let text = null
  export let hasAudio = false
  export let isFromMe = false // might use for something later...
  export let y = 0
</script>

<style>
  .language-toolbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }

  .language-toolbar {
    position: absolute;
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  :global(.language-toolbar button) {
    padding: 3px 8px;
    background-color: #fff;
    color: #333;
    border-radius: 4px;
  }

  :global(.language-toolbar button.selected) {
    background-color: #333;
    color: #fff;
  }
</style>