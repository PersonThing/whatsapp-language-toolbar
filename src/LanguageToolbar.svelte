{#if text}
  <div class="language-toolbar" style="position: absolute; left:{x}px; top:{y}px;">
    <button on:click={translate}>Translate</button>
  </div>
{/if}

<script>
  export let text = null
  export let x = 0
  export let y = 0

  function translate() {
    if (!text?.length) return

    // quick hack.. just open google translate window
    const url = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }
</script>

<style>
  .language-toolbar {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    border-radius: 4px;
  }

  .language-toolbar button {
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 4px;
  }
</style>