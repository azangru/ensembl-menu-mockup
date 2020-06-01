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
    name: 'Training',
    getItems: () => trainingData
  },
  {
    name: 'Ensembl annotation & prediction',
    getItems: () => ensemblAnnotationData
  },
  {
    name: 'Data releases',
    getItems: () => dataReleasesData
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
    name: 'Getting Ensembl data',
    getItems: () => gettingEnsemblDataItems
  },
  {
    name: 'Using other data',
    getItems: () => usingOtherDataItems
  },
  {
    name: 'Tools',
    getItems: () => toolsItems
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

const trainingData = [
  {
    name: 'Training events'
  },
  {
    name: 'Online training'
  },
  {
    name: 'Training materials',
    getItems: () => getSimpleArticles(0)
  },
  {
    name: 'Training exercises',
    getItems: () => getSimpleArticles(10)
  }
];

const ensemblAnnotationData = [
  {
    name: 'Genes & transcripts',
    getItems: () => getSimpleArticles(0)
  },
  {
    name: 'Variation',
    getItems: () => getSimpleArticles(10)
  },
  {
    name: 'Regulation',
    getItems: () => getSimpleArticles(20)
  },
  {
    name: 'Comparative genomics',
    getItems: () => getSimpleArticles(30)
  },
  {
    name: 'Assemblies',
    getItems: () => getSimpleArticles(40)
  },
  {
    name: 'Annotation methods'
  },
  {
    name: 'Identifiers'
  },
  {
    name: 'Coordinate systems'
  },
  {
    name: 'Pipelines'
  },
  {
    name: 'RNA-Seq & transcriptomes'
  },
  {
    name: 'Supporting evidence'
  },
];

const dataReleasesData = [
  {
    name: 'Release cycle'
  },
  {
    name: 'Archives'
  },
];

const viewingEnsemblDataItems = [
  {
    name: 'Genome browser',
    getItems: () => getSimpleArticles(0)
  },
  {
    name: 'Entity viewer',
    getItems: () => getSimpleArticles(10)
  },
  {
    name: 'Sequence viewer',
    getItems: () => getSimpleArticles(20)
  },
  {
    name: 'Variation viewer',
    getItems: () => getSimpleArticles(30)
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
];

const gettingEnsemblDataItems = [
  {
    name: 'Quick downloads'
  },
  {
    name: 'Custom downloads'
  },
  {
    name: 'REST'
  },
  {
    name: 'APIs'
  },
  {
    name: 'Using FTP'
  },
];

const usingOtherDataItems = [
  {
    name: 'Supported file formats'
  },
  {
    name: 'Trackhubs'
  },
  {
    name: 'URL uploads'
  },
  {
    name: 'Import from external projects'
  }
];

const toolsItems = [
  {
    name: 'VEP'
  },
  {
    name: 'BLAST'
  }
];

const getSimpleArticles = (initialNumber = 0) => [...(new Array(10))].map((_, index) => ({
  name: `article ${index + 1 + initialNumber}`
}));

export default topData;
