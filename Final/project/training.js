      function playAudio(command)

  {
    const audio = new Audio(`Audio/${command}audacity.mp3`); audio.play().catch((error) =>

      { console.error("Error playing audio:",error);});
  }







