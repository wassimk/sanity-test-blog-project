const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "3uwkl3k7", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2022-08-14",
});
