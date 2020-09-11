// TODO: load the dataset
let attractions;

fetch('./attractions.json')
  .then((response) => response.json())
  .then((data) => {
    attractions = data;
  })
  .then(() => {
    filterData('all');
  });

function filterData(category) {
  /* **************************************************
   *
   * TODO: filter attractions by the selected category
   * TODO: filter top 5 attractions
   *
   * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
   *
   * renderBarChart(data)
   *
   * - 'data' must be an array of JSON objects
   * - the max. length of 'data' is 5
   *
   * **************************************************/
  let filtered = attractions;
  if (category != 'all') {
    filtered = attractions.filter(
      (attraction) => attraction.Category == category
    );
  }
  filtered.sort((a, b) => b.Visitors - a.Visitors);
  let rendered = filtered.filter((v, i) => i < 5);
  console.log('rendered', rendered);
  renderBarChart(rendered);
}

function handler(event) {
  console.log('event target value', event.target.value);
  filterData(event.target.value);
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
document.querySelector('#attraction-category');
document.addEventListener('change', handler);
