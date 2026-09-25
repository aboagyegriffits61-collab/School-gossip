const express=require('express');const cors=require('cors');const app=express();const PORT=process.env.PORT||3000;
app.use(cors());app.use(express.json());app.use(express.static('.'));
let posts=[{school:'KNUST',title:'Welcome to School Gossip Ghana',body:'A place for school communities to share updates responsibly.'}];
app.get('/api/health',(req,res)=>res.json({ok:true,service:'school-gossip-api'}));
app.get('/api/posts',(req,res)=>res.json(posts));
app.post('/api/posts',(req,res)=>{const {school,title,body}=req.body;if(!school||!title||!body)return res.status(400).json({error:'school, title and body are required'});const post={id:Date.now(),school,title,body};posts.unshift(post);res.status(201).json(post)});
app.listen(PORT,()=>console.log('School Gossip running on port '+PORT));