import express from 'express'
import MessageOfUser from '../../../models/Message.js'

const router = express.Router()

router.post('/:id',async(req,res)=>{
    const newMessage = new MessageOfUser({
        sender:req.params.id,
        text:req.body.text,
        conversationId:req.body.conversationId
    })
    try{
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
    }catch(error){
        res.status(500).json(error)
    }
})


router.get('/:conversationId',async(req,res)=>{
    try{
        const messages = await MessageOfUser.find(
            {conversationId:req.params.conversationId}
        )
        res.status(200).json(messages)
    }catch(error){
        res.status(500).json(error)
    }
})


export default router