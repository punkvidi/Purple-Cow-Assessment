const hitButton = document.getElementById('hit-button');
const KEY = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e'; //Note: this is not a secret

hitButton &&
  hitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.countapi.xyz/hit/purplecows.com/${KEY}`,
      {
        method: 'GET',
      }
    );
    const json = await res.json();
    alert(`This button has been hit ${json.value} times!`);
  });
