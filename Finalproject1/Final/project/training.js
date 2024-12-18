      function playAudio(command)

  {
    console.log(`Attempting to play audio for: ${command}`);

    const audio = new Audio(`${command}audacity.mp3`); audio.play().catch((error) =>

      { console.error("Error playing audio:", error);});
  }







