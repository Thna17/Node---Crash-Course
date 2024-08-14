import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
    {id:1, name: 'Jonh Doe'},
    {id:2, name: 'Jane Doe'},
    {id:3, name: 'Mike Doe'},
];

// Logger middleware 

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

//Json middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handle for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handle for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    console.log(id)
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
                
        res.write(JSON.stringify(user));
        res.end();
    } else { 
        
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
        res.end();
    }
}

// Not fount handler 
const notFoundHandler = (req, res) => {
    res.status = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}
const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByIdHandler(req, res);
            }  else {
                notFoundHandler(req, res);
            }
        });
        
    })
    
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})