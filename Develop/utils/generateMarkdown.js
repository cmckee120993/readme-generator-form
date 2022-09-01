// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license) {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license) {
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license) {
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let draftTOC = `\n ## Table of Contents`

  if (data.installation !== '') {
    draftTOC += `\n * Installation`
  };

  if (data.usage !== '') {
    draftTOC += `\n * Usage`
  };

  if (data.license !== 'None') {
    draftTOC += `\n * License`
  };

  if (data.contributing !== '') {
    draftTOC += `\n * Contributing`
  };

  if (data.tests !== '') {
    draftTOC += `\n * Tests`
  };

  let draftMarkdown = 
  `# ${data.title}\n 

  \n ##Creator Info
  \n ${data.username}
  \n ${data.email}\n 

  \n ## Description
  \n ${data.description}\n `;

  if (draftTOC !== 'No') {
    draftMarkdown += draftTOC
  };
  
  if(data.installation !== '') {
  draftMarkdown += 
  `\n \n ## Installation
  \n ${data.install}`
  };

  if(data.usage !== '') {
    draftMarkdown +=
  `\n \n ## Usage
  \n ${data.usage}`
};

  
  // ${data.license}
  
  if(data.contribute !== '') {
  `\n \n ## How to Contribute
  \n ${data.contribute}`};
  
  if(data.tests !== '') {
  `\n \n ## Tests
  \n ${data.tests}`
};

return draftMarkdown;
};

module.exports = generateMarkdown;
