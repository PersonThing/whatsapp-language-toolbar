{#each $favoriteLangs as lang}
  <button on:click={() => translateText(lang.short)}>{lang.long} 🠆</button>
{/each}

{#if showLanguageOptions}
  <div class="language-options">
    <button on:click={closeLanguageOptions}>⚙ Close configuration X</button>

    <div>
      <input type="text" bind:value={availableLangFilter} placeholder="Search languages..." bind:this={langFilterTextbox} />
    </div>

    <div class="lang-options">
      {#each availableLangs.filter(lang => availableLangFilter == '' || lang.long.toLowerCase().includes(availableLangFilter.toLowerCase())) as lang}
        <div on:click={() => toggleFavoriteLang(lang.short)} class="lang-option">
          <div class="favorite-star">
            {#if isFavorited($favoriteLangs, lang.short) ? 'favorited' : ''}
              ★
            {:else}
              ☆
            {/if}
          </div>
          <span>{lang.long}</span>
        </div>
      {/each}
    </div>
  </div>
{:else}
  <button on:click={openLanguageOptions}>⚙ Configure</button>
{/if}

<!-- 
<select id="select" on:change={() => translateFromSelect()}>
  <option disabled selected>Select a language to translate</option>
  {#each availableLangs as lang}
    <option class="option" value={lang.short}>{lang.long} 🠆</option>
  {/each}
</select> -->
<script>
  import languages from './languages.js'
  import LocalStorageStore from './local-storage-store.js'
  const availableLangs = Object.keys(languages).map(key => languages[key])

  export let text = null

  let favoriteLangs = LocalStorageStore('favoriteLangs', [languages.pt, languages.es, languages.en])
  let showLanguageOptions = false
  let availableLangFilter = ''
  let langFilterTextbox = null

  function openLanguageOptions() {
    showLanguageOptions = true

    setTimeout(() => {
      langFilterTextbox.focus()
    }, 0)
  }

  function closeLanguageOptions() {
    showLanguageOptions = false
  }

  function toggleFavoriteLang(lang) {
    const favoritesWithoutThisOne = $favoriteLangs.filter(l => l.short != lang)
    if (isFavorited($favoriteLangs, lang)) {
      $favoriteLangs = favoritesWithoutThisOne
    } else {
      $favoriteLangs = [...favoritesWithoutThisOne, languages[lang]]
    }
  }

  function isFavorited(favorites, langShort) {
    return favorites.some(l => l.short == langShort)
  }

  function translateText(targetLang) {
    if (!text?.length) return
    const translationUrl = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=${targetLang}&text=${encodeURIComponent(text)}`
    window.open(translationUrl, '_blank')
  }
</script>

<style>
  select {
    padding: 5px 6px;
    background-color: rgb(32, 44, 51);
    border: none;
    color: white;
    font-size: 12px;
    font-family: Arial;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
  }

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

  .lang-options {
    max-height: 200px;
    overflow-y: auto;
  }

  .lang-option {
    display: flex;
    flex-direction: row;
    gap: 5px;
    cursor: pointer;
    border-radius: 4px;
    align-items: center;
    padding: 0 4px;
  }

  .lang-option:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .lang-option .favorite-star {
    font-size: 24px;
  }
</style>
