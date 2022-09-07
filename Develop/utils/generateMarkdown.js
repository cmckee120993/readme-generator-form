// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data !== 'None') {
    let licenseBadge;
    if(data === 'Apache-2.0') {
      licenseBadge = 'Apache_2.0-blue.svg'
    };
    if(data === 'GPL-3.0') {
      licenseBadge = 'GPLv3-blue.svg'
    };
    if(data === 'BSD-3') {
      licenseBadge = 'BSD_3--Clause-blue.svg'
    };
    if(data === 'MIT') {
      licenseBadge = 'MIT-yellow.svg'
    };
    let badgeURL = `![GitHub License](https://img.shields.io/badge/license-${licenseBadge})`;
    return badgeURL;
  };
  return '';
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    \n This project is licensed under the ${license} license.`
  }
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let draftTOC = `\n ## Table of Contents`;

  if (data.installation !== '') {
    draftTOC += `\n * [Installation](#installation)`
  };

  if (data.usage !== '') {
    draftTOC += `\n * [Usage](#usage)`
  };

  if (data.license !== 'None') {
    draftTOC += `\n * [License](#license)`
  };

  if (data.contributing !== '') {
    draftTOC += `\n * [Contributing](#contributing)`
  };

  if (data.tests !== '') {
    draftTOC += `\n * [Tests](#tests)`
  };

  let draftMarkdown = 
  `# ${data.title}\n 

  ${renderLicenseBadge(data.license)}

  \n ## Description
  \n ${(data.description)}\n `;

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

draftMarkdown += `\n \n ${renderLicenseSection(data.license)}`;

if(data.contribute !== '') {
  draftMarkdown += `\n \n ## How to Contribute
  \n ${data.contribute}`};
  
  if(data.tests !== '') {
    draftMarkdown += `\n \n ## Tests
  \n ${data.tests}`
};

draftMarkdown += `\n \n## Questions 
\n If you have any questions, email me at ${data.email}. 
\n You can view more of my work at [${data.username}](https://github.com/${data.username}).`;

return draftMarkdown;
};

module.exports = generateMarkdown;
