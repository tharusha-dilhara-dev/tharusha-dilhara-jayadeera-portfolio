import Project from "../models/project.model.js";

export const getproject = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    const data=await Project.find();
    res.json(data);
}


export const getcertificate = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
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