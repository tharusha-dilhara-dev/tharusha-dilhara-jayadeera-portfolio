



export const getproject = (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json(
        [{
            name: 'SLEP(STUDENT LEARNING EASILY PLATFORM)',
            des: 'lorem10',
            gitlink: 'https://example.com',
            rating: '5'
        },
        {
            name: 'Password Strength Prediction App (Machine learning)',
            des: 'lorem10',
            gitlink: 'https://example.com',
            rating: '10'
        },]
    );
}