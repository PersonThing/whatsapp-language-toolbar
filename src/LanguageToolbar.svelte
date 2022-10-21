<div class="language-toolbar-container">

  <!-- this toolbar appears next to text messages -->
  {#if text || hasAudio}
    <div class="language-toolbar" style="left:{x}px; top:{y - 30}px;">
      {#if text}
        <button on:click={translate}>Translate</button>
      {/if}
      {#if hasAudio}
        {#each speedOptions as speed}
          <button on:click={() => (playbackSpeed=speed)} class:selected={speed == playbackSpeed}>{speed}</button>
        {/each}
      {/if}
    </div>
  {/if}
</div>

<script>
  export let text = null
  export let hasAudio = false
  export let x = 0
  export let y = 0

  let playbackSpeed = 1
  let speedOptions = [
    0.25,
    0.5,
    0.75,
    1.0,
    1.25,
    1.5,
    1.75,
    2.0,
    3.0
  ]

  function translate() {
    if (!text?.length) return

    // quick hack.. just open google translate window
    const url = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  $: if (playbackSpeed) {
    // modify audio elements on the page when speed changes
    const audioElements = document.querySelectorAll('audio')
    console.log('audioElements', audioElements)
    audioElements.forEach(el => {
      el.playbackRate = playbackSpeed
    })
  }
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

  .language-toolbar button {
    padding: 3px 8px;
    background-color: #fff;
    color: #333;
    border-radius: 4px;
  }

  .language-toolbar button.selected {
    background-color: #333;
    color: #fff;
  }
</style>