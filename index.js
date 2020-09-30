// index.js
const fetch = require('cross-fetch');
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

async function imageFetch() {
    let image = await fetch("https://source.unsplash.com/random/200x300")
    return image.url
  }

/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/
async function buildData(){
    let image = await imageFetch()
    return DATA = {
    name: 'Mark Griffith',
    date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'America/New_York',
    }),
    picture: image
    };
}
 
/**
  * A - We open 'main.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
 async function generateReadMe() {
  const DATA = await buildData()
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output =  Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();
