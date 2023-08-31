// This is an index.js file that uses mustache.js to render the main.mustache file.

// Require the mustache module
const mustache = require('mustache');

// Require the file system module
const fs = require('fs');

// Read the main.mustache file
fs.readFile('main.mustache', 'utf8', (err, template) => {
  if (err) {
    console.error(err);
    return;
  }

  // Create a view object with the data for the template
  const view = {
    name: 'Aditya Ahir',
    bio: 'A passionate web developer and learner',
    profile_pic_url: 'https://media.licdn.com/dms/image/C4D03AQHL6m9ax17DAQ/profile-displayphoto-shrink_400_400/0/1659938041918?e=1698883200&v=beta&t=6d7FdEfo6gj8z5X7-hqpLTZGwYlN0Ygb6lukmhqWwug',
    skills: [
      { skill: 'Java' },
      { skill: 'Reactive Programming' },
      { skill: 'JavaScript' },
      { skill: 'React' },
      { skill: 'Node.js' },
      { skill: 'CI/CD' }
    ],
    education: [
      {
        degree: 'Bachelor of Technology',
        field: 'Electronics and Communication',
        institution: 'Nirma University ',
        start_year: '2017',
        end_year: '2021'
      }
    ],
    experience: [
      {
        role: 'Associate Software Engineer',
        company: 'Lowes Service Pvt. Ltd.',
        start_date: 'August 2022',
        end_date: 'Current'
      }
    ],
    username: 'adityaahir01',
    linkedin_url: 'https://www.linkedin.com/in/adityaahir01/'
  };

  // Render the template with the view object
  const output = mustache.render(template, view);

  // Write the output to a file
  fs.writeFile('index.html', output, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File created successfully');
  });
});
