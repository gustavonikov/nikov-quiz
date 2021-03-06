import database from '../../db.json'

export default function dbHandler(req, res) {
    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    return res.json(database)
}
