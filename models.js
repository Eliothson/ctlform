//Entity creator one of the person that work to make the project
let creator = {
  name: "Lindsey Stirling",
  contact: "+1 123",
  ipi: "I",
  isni: "0000",
  role: "composer", //Liste derroulante
  society: "composer",
  split: 1
};

//Entity publisher like SACEM, ASCAP
let publisher = {
  name: "Digital Empire",
  contact: "+1 123",
  split: 1
};

//Entity label like oye oye record, tapaje record
let label = {
  id: "uuid:46166430",
  name: "Sony Music"
};

//Each music  in the project
let recording = {
  title: "Crystallize",
  versionTitle: "Crystallize Live Bonus Track",
  alternateTitles: [],
  isrc: "US",
  edited: false,
  album: {
    title: "Lost in the moment",
    upc: "123456789012"
  },
  labels: [label, label],
  primary_artist: creator,
  additional_artists: [creator, creator, creator],
  released: "01/01/1970",
  duration: "00:02:16",
  territory: "a"
};

//Project Model final with all entities
let model = {
  work: {
    title: "Crystallize",
    alternateTitles: ["Crystallize1", "Crystallize2"],
    titleSoundRecording: "",
    alternateTitleSoundRecording: [],
    iswc: "US",
    creators: [creator, creator, creator],
    publishers: [publisher, publisher, publisher],
    territory: "usa"
  },
  recordings: [recording, recording, recording],
  attestation: {
    attestor: {
      id: "uuid:46166430",
      description: "A random Oracle"
    },
    created: "01/01/1970 00:02:16",
    expires: "01/01/1970 00:02:16",
    territory: "usa",
    confidence: 1
  }
};

console.log(model);
