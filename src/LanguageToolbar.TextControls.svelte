<button on:click={translateText}>Translate</button>

<script>
  export let text = null

  function translateText() {
    if (!text?.length) return
    const translationUrl = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=${encodeURIComponent(text)}`
    window.open(translationUrl, '_blank')
  }
</script>