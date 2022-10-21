<button on:click={toggleLangsPicker}>
  {#if !langsPickerOpen}▼{:else}▲{/if}
</button>

{#if langsPickerOpen}
  <div class="langs-picker">
    <div class="filter">
      <input type="text" bind:value={langsFilter} bind:this={langsFilterInput} />
      <button on:click={clearLangsFilter}>X</button>
    </div>
    <div class="options">
      {#each Object.values(languages).filter(lang => !langsFilter || lang.long.toLowerCase().includes(langsFilter.toLowerCase())) as lang (lang.short)}
        <label>
          <input type=checkbox bind:group={langs} value={lang} />
          {lang.long}
        </label>
      {/each}
    </div>
  </div>
{/if}

{#each langs as lang}
  <button on:click={() => translateText(lang.short)}>{lang.long} 🠆</button>
{/each}

<script>
  import { tick } from 'svelte';
  import languages from './languages.js'

  export let text = null
  
  let langs = [
   languages.pt,
   languages.es,
   languages.en
  ]
  let langsFilter = ''
  let langsPickerOpen = false
  let langsFilterInput = null

  function translateText(targetLang) {
    if (!text?.length) return
    const translationUrl = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=${targetLang}&text=${encodeURIComponent(text)}`
    window.open(translationUrl, '_blank')
  }

  async function toggleLangsPicker() {
    langsPickerOpen = !langsPickerOpen
    await tick()
    if (langsPickerOpen) {
      langsFilterInput.focus()
    }
  }

  async function clearLangsFilter() {
    langsFilter = ''
    await tick()
    langsFilterInput.focus()
  }
</script>

<style>
  .langs-picker {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    background: #fff;
  }

  .langs-picker .filter {
    display: flex;
    flex-direction: row;
  }

  .langs-picker .options {
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  
  .langs-picker label:hover {
    background: #eee;
    cursor: pointer;
  }
  
  .langs-picker label {
    padding: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
</style>