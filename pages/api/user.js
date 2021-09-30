
const jsObj = {
    name : "Ridoy Islam",
    age: 24,
    email: 'hridoy4t@gmail.com'
};

export default function handler(req, res) {
    res.status(200).json(jsObj);    
}