let posts=[{school:'KNUST',title:'Welcome to School Gossip Ghana',body:'A place for school communities to share updates responsibly.'}];
export default function handler(req,res){
  if(req.method==='GET') return res.status(200).json(posts);
  if(req.method==='POST'){
    const {school,title,body}=req.body||{};
    if(!school||!title||!body) return res.status(400).json({error:'school, title and body are required'});
    const post={id:Date.now(),school,title,body}; posts.unshift(post); return res.status(201).json(post);
  }
  res.setHeader('Allow',['GET','POST']); return res.status(405).json({error:'Method not allowed'});
}
