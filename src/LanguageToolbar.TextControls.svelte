{#each langs as lang}
  <button on:click={() => translateText(lang.short)}>{lang.long} 🠆</button>
{/each}

<script>
  import languages from './languages.js'

  export let text = null
  
  let langs = [
   languages.pt,
   languages.es,
   languages.en
  ]

  function translateText(targetLang) {
    if (!text?.length) return
    const translationUrl = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=${targetLang}&text=${encodeURIComponent(text)}`
    window.open(translationUrl, '_blank')
  }
</script>

<style>
  button {
    padding: 5px 6px;
    background: none;
    border: none;
    color: #e9edef;
    font-size: 12px;
    font-family: Arial;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
</style>