let quotes = [
  {
    text: "It is strange that only extraordinary men make the discoveries, which later appear so easy and simple.",
    category:"Motivational",
    author: "Georg C. Lichtenberg"

  },
  {
    text: "Actually, everything that can be known has a Number, for it is impossible to grasp anything with the mind or to recognize it without this.",
    category:"Motivational",
    author: "Philolaus"
  },
  {
    text: "God created two acts of folly. First, He created the Universe in a Big Bang. Second, He was negligent enough to leave behind evidence for this act, in the form of microwave radiation.",
    category:"Motivational",
    author: "Paul Erdős"
  },
  {
    text: "Progress is made by trial and failure, the failures are generally a hundred times more numerous than the successes, yet, they are usually left unchronicled.",
    category:"Motivational",
    author: "William Ramsay"
  },
  {
    text: "Although Nature needs thousands or millions of years to create a new species, man needs only a few dozen years to destroy one.",
    category:"Motivational",
    author: "Victor Scheffer"
  },
  {
    text: "There may be babblers, wholly ignorant of mathematics, who dare to condemn my hypothesis, upon the authority of some part of the Bible twisted to suit their purpose. I value them not, and scorn their unfounded judgment.",
    category:"Motivational",
    author: "Nicolaus Copernicus"
  },
  {
    text: "If your experiment needs statistics, you ought to have done a better experiment.",
    category:"Motivational",
    author: "Ernest Rutherford"
  },
  {
    text: "By \"life\", we mean a thing that can nourish itself and grow and decay.",
    category:"Motivational",
    author: "Aristotle"
  },
  {
    text: "A physicist is an atom\'s way of knowing about atoms.",
    category:"Motivational",
    category:"Motivational",
    author: "George Wald"
  },
  {
    text: "An experiment is a question which science poses to Nature, and a measurement is the recording of Nature\'s answer.",
    category:"Motivational",
    author: "Max Planck"
  }
];
const fileName = "my-download.json";
const quoteDisplay = document.getElementById("quoteDisplay");
const qouteBtn = document.getElementById("newQoute");
const newQoute = document.getElementById("newQouteText");
const newCategory = document.getElementById("newQouteCategory");
const addQouteBtn = document.getElementById("addNewQoute");

function showRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  categoryDisplay= quotes[random].category;
  quoteDisplay.innerHTML = `${quotes[random].text} ${"<br></br>"} Quote-Category:${categoryDisplay} `;
  
}

function addQuote(){
  const createAddQuoteForm = document.createElement('div');
  document.body.appendChild(createAddQuoteForm);
  let text = document.getElementById('newQuoteText').value;
  let category = document.getElementById('newQuoteCategory').value;
  quotes.push({
    text,
    category
  });
  createAddQuoteForm.innerHTML = `${text} ${"<br></br>"} Quote-Category:${text} `;
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

let downloadData = (function () {
  const downloadBtn = document.createElement("button");
  document.body.appendChild(button);
  button.style = "display: none";
  return function (data, fileName) {
      let json = JSON.stringify(data),
          blob = new Blob([json], {type: "application/json"}),
          url = window.URL.createObjectURL(blob);
      button.href = url;
      button.download = fileName;
      button.click();
      window.URL.revokeObjectURL(url);
  };
}());

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}

window.addEventListener('load', () => {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedFavorites) {
    favorites = JSON.parse(quotes);
    displayFavorites();
  }
});

qouteBtn.addEventListener('click', showRandomQuote) ;
addQouteBtn.addEventListener('click', addQuote);
downloadData(quotes, fileName);


