function toggleEnvelope() {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  envelope.classList.toggle('open');

  if (envelope.classList.contains('open')) {
      letter.style.transform = 'translate(-50%, 0) scale(1)';
      letter.style.opacity = '1';
      letter.style.zIndex = '2';
  } else {
      letter.style.transform = 'translate(-50%, 0) scale(0)';
      letter.style.opacity = '0';
      letter.style.zIndex = '1';
  }
}
const envelope = document.querySelector('.envelope');
const klikAmplop = document.querySelector('.klik-amplop');

envelope.addEventListener('mouseover', () => {
    envelope.classList.add('active');
});

envelope.addEventListener('mouseout', () => {
    envelope.classList.remove('active');
});

klikAmplop.addEventListener('click', () => {
    console.log('Amplop diklik!');
});