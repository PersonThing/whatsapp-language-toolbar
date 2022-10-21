<div class="language-toolbar-fixture">
  <LanguageToolbar
    text="Hello, world!"
    y={100}
    x={50} />

  <LanguageToolbar
    text="Hello, world!"
    y={150}
    x={50} />
</div>

<script>
  import LanguageToolbar from "./LanguageToolbar.svelte";
</script>

<style>
  .language-toolbar-fixture {
    position: fixed;
    width: 100vw;
    height: 100vh; 
    top: 0;
    left: 0;
    background: #333;
  }
</style>