import express from 'express';
const router = express.Router()
import { v4 as uuidv4 } from 'uuid';


let data = []

router.get('/',(req,res) => {
    res.send(data)
})
router.get('/:id',(req,res) => {
    const userid = req.params.id
    const indiUser = data.find(user => user.id == userid)
    res.json(indiUser)
    console.log(indiUser)
})
router.delete('/:id',(req,res) => {
    const userid = req.params.id
    data = data.filter(user => user.id !== userid)
    res.send(`user with the id of ${userid} id deleted`)
})
router.post('/',(req,res) => {
    const user = req.body
    const id = uuidv4()
    data.push({...user, id})
    res.json(data)
})
router.patch('/:id',(req,res) => {
    const userid = req.params.id
    const {name,age} = req.body
    const indiUser = data.find(user => user.id == userid)
    if(name) data.name = name
    if(age) data.age = age
    res.json("updated data")
})

export default router