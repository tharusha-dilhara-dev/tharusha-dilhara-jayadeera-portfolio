
export const getproject = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
    res.json(
        [
            {
                name: 'SLEP(STUDENT LEARNING EASILY PLATFORM)',
                status:'dev',
                category:'self',
                des: 'lorem10',
                gitlink: 'https://example.com',
                rating: '3'
            },
            {
                name: 'Password Strength Prediction App (Machine learning)',
                status:'active',
                category:'client',
                des: 'lorem10',
                gitlink: 'https://example.com',
                rating: '2'
            },
            {
                name: 'SLEP(STUDENT LEARNING EASILY PLATFORM)',
                status:'dev',
                category:'self',
                des: 'lorem10',
                gitlink: 'https://example.com',
                rating: '1'
            },
            {
                name: 'Password Strength Prediction App (Machine learning)',
                status:'active',
                category:'client',
                des: 'lorem10',
                gitlink: 'https://example.com',
                rating: '2'
            }
        ]
    );
}


export const getcertificate = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
    res.json(
        [
            {
                name: 'Fundamentals of Red Hat Enterprise Linux ',
                organization: 'cousera',
            },
            {
                name: 'Artificial Intelligence on Microsoft Azure ',
                organization: 'lorem10',
            },
            {
                name: 'APIs in Node.js: Write a RESTful API Backend Application ',
                organization: 'coursea',
            },
            {
                name: 'Docker for absolute beginners ',
                organization: 'lorem10',
            },
            {
                name: 'Foundations of Red Hat Cloud-native Development ',
                organization: 'coursera',
            },
            {
                name: 'Microsoft Azure Machine Learning ',
                organization: 'lorem10',
            },
        ]
    );
}