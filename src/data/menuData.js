const topData = [
  {
    name: 'Getting started',
    getItems: () => gettingStartedData
  },
  {
    name: 'Using Ensembl',
    getItems: () => usingEnsemblData
  },
  {
    name: 'Training'
  },
  {
    name: 'Ensembl annotation & prediction'
  },
  {
    name: 'Data releases'
  },
  {
    name: 'Known bugs'
  },
  {
    name: 'Contact'
  },
];

const gettingStartedData = [
  {
    name: 'What is Ensembl'
  },
  {
    name: 'About the site'
  },
  {
    name: 'Selecting a species'
  },
  {
    name: 'Search'
  },
  {
    name: 'FAQs'
  },
];

const usingEnsemblData = [
  {
    name: 'Viewing Ensembl data',
    getItems: () => viewingEnsemblDataItems
  },
  {
    name: 'Getting Ensembl data'
  },
  {
    name: 'Using other data'
  },
  {
    name: 'Tools'
  },
  {
    name: 'External references'
  },
  {
    name: 'Glossary'
  },
  {
    name: 'How to set up a local mirror'
  },
  {
    name: 'Sharing'
  },
  {
    name: 'Exporting images'
  },
  {
    name: 'Citing Ensembl'
  },
  {
    name: 'Roadmap'
  }
];

const viewingEnsemblDataItems = [
  {
    name: 'Genome browser'
  },
  {
    name: 'Entity viewer'
  },
  {
    name: 'Sequence viewer'
  },
  {
    name: 'Variation viewer'
  },
  {
    name: 'Comparative views'
  },
  {
    name: 'Pairwise & polyploid views'
  },
  {
    name: 'Looking at genes & transcripts'
  }
]


export default topData;
