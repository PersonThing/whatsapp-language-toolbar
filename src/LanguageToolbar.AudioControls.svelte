<input type="range" bind:value={playbackSpeed} min="0.25" max="3" step="0.25" />
<div class="playback-speed-indicator">
  {playbackSpeed}x
</div>

<button on:click={transcribe}>Transcribe</button>

<script>
  let playbackSpeed = 1

  $: if (playbackSpeed) {
    const audioElements = document.querySelectorAll('audio')
    console.log('audioElements', audioElements)
    audioElements.forEach(el => {
      el.playbackRate = playbackSpeed
    })
  }

  function transcribe() {
    console.log('transcribe... not implemented yet')
  }
</script>

<style>
  .playback-speed-indicator {
    text-align: center;
    width: 40px;
    font-size: 12px;
    color: #333;
  }
</style>