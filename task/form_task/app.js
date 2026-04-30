const express = require('express'); 
const bodyParser = require('body-parser');//reads form data from requests
const sequelize=require('./db');
const user=require('./user');

const app=express();//initializes server

app.set("view engine","pug");
app.set("views","./view");

app.use(bodyParser.urlencoded({extended:true}));//read form data from the url req
app.use(express.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

sequelize.sync();//create table automatically in postgreSQL

app.get('/',async(req,res)=>{
   try{
    const users = await user.findAll();
    res.render("index",{users});
   }catch(err){
    res.send(err.message);
   }
});


app.post("/submit",async(req,res)=>{
    try{
        await user.create(req.body);
        res.redirect('/?msg=created');
    }catch(err){
        res.redirect('/?msg=error');
    }
});


app.get("/users",async(req,res)=>{
    try{
        const users = await user.findAll();
        res.json(users);
    }catch(err){
        console.error(err);
        res.status(500).json({error: 'failed to fetch user'});
    }
});


app.get('/users/:id',async(req,res)=>{
    try{
        const us = await user.findByPk(req.params.id);
        if(!us){
            return res.status(404).json({message:'User not found'});
        }
        res.json(us);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

//update
app.put('/users/:id', async (req, res) => {
    try {
        // await user.update(req.body, {
        //     where: { id: req.params.id }
        // });

        //res.redirect('/');
        const [updated] = await user.update(req.body, {
            where: { id: req.params.id }
        });

        if (!updated) {
            return res.status(404).json({ message: 'User not found' });
        }

       res.redirect('/');

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

//delete
app.delete('/users/:id',async(req,res)=>{
    try{
        const deleted = await user.destroy({
            where:{id:req.params.id}
        });
        if(!deleted){
            return res.status(404).json({message:'User not found'});
        }
        res.json({message: 'Deleted successfully'});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});
app.listen(3001,()=>{
    console.log("server running on port 3001")
});