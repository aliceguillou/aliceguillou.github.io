      function playAudio(command)

  {
    const audio = new Audio(`Sitaudacity.mp3`); audio.play().catch((error) =>

      { console.error("Error playing audio:", error);});
  }







