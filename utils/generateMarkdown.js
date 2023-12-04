// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'No License') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'No License') {
    return '';
  }
  let link = '';
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPLv3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'No License') {
    return '';
  }
  return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
