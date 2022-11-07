<select id="select"  on:change={()=>translateText()} >
  <option disabled selected>Select a language to translate</option>
  {#each langs as lang} 
    <option class="option" value={lang.short}>{lang.long} 🠆</option>
  {/each}
</select>


<script>
  import languages from './languages.js'
  
  export let text = null
  
  let langs = [
   languages.pt,
   languages.es,
   languages.en,
   languages.ja,
   languages.fr,
   languages.it,
   languages.de,
   languages.ko,
   
   
  ]

  function translateText() {
    let select =  document.getElementById("select");
    let targetLang = select.value;
    if (!text?.length) return
    const translationUrl = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=${targetLang}&text=${encodeURIComponent(text)}`
    window.open(translationUrl, '_blank')
  }
</script>
 
<style>
  select{
    padding: 5px 6px;
    background-color: rgb(32,44,51);
    border: none;
    color: white;
    font-size: 12px;
    font-family: Arial;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
  }
  
  /*button {
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
  }*/
</style>