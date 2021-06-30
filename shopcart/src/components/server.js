

const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const bodyParser  = require('body-parser');
const app=express();
const con=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'shopcart'
});
 

con.connect(err=>{
if(err){
    return err;
}
else{
    console.log('connected to database');
}

});

app.use(cors());
app.use(express.json());

app.post('/logins',(req,res)=>{
  
    // console.log(req.body);

const verify='SELECT username,passwords from privatedata';
con.query(verify,(err,results)=>{

    if(err){
        console.log('someerror occured');
    }
        else{
        
            var i=0;
            var flag=false;
         while(results[i])
         {  
            
             if(results[i].username==req.body.username && results[i].passwords==req.body.password)
             {
                 console.log('You are loggined successfully '+req.body.username);
                
                flag=true;
                
                 
             }
             i++;
         }
         if(flag)
         res.send({
            success:'true'
        });
        else{
            console.log('Sorry You entered wrong username or password');
            res.send({
                success:'false'
            });

        }

        }
    
});


});
//get cart

app.post('/getcart',(req,res)=>{

const getcartitems=`SELECT username, itemid, itemname, itemquantity, itemnetprice from cart where username='${req.body.username}'`;
con.query(getcartitems,(err,results)=>{

    if(err){
        console.log('someerror occured'+err);
    }
        else{
            console.log('Loading cart');
           var i=0;
           var cartitems=[];
           while(results[i])
           {
            cartitems=cartitems.concat({
                id:results[i].itemid,
                name:results[i].itemname,
                quantity:results[i].itemquantity,
                netprice:results[i].itemnetprice
            });
            i++;
           }
           res.send({
               
               cart:cartitems
           });

        }

        
    
});

});
//addtocart
app.post('/addtocart',(req,res)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const addcartitems=`INSERT INTO  cart (username, itemid, itemname, itemquantity, itemnetprice, adddate, addtime) VALUES ('${req.body.username}',${req.body.itemid},'${req.body.itemname}',${req.body.itemquantity},${req.body.itemnetprice},'${date}','${time}')`;
con.query(addcartitems,(err,results)=>{

    if(err){
        console.log('someerror occured'+err);
    }
        else{
            console.log('Items added');
           

        }

        
    
});


const getcartitems=`SELECT username, itemid, itemname, itemquantity, itemnetprice from cart where username='${req.body.username}'`;
con.query(getcartitems,(err,results)=>{

    if(err){
        console.log('someerror occured');
    }
        else{
            console.log('Getitems');
           var i=0;
           var cartitems=[];
           while(results[i])
           {
            cartitems=cartitems.concat({
                id:results[i].itemid,
                name:results[i].itemname,
                quantity:results[i].itemquantity,
                netprice:results[i].itemnetprice
            });
            i++;
           }
           res.send({
               cart:cartitems
           });

        }

        
    
});

});

//deletefromcart
app.post('/deletefromcart',(req,res)=>{
    console.log(req);
    const deletecartitems=`DELETE from cart where username='${req.body.username}' and itemid=${req.body.itemid}`;

    con.query(deletecartitems,(err,results)=>{
    
        if(err){
            console.log('someerror occured'+err);
        }
            else{
                console.log('deleted cart item with id '+req.body.itemid);
            }
    
            
        
    });

    const getcartitems=`SELECT username, itemid, itemname, itemquantity, itemnetprice from cart where username='${req.body.username}'`;
    con.query(getcartitems,(err,results)=>{

    if(err){
        console.log('someerror occured'+err);
    }
        else{
            console.log('Loading cart');
           var i=0;
           var cartitems=[];
           while(results[i])
           {
            cartitems=cartitems.concat({
                id:results[i].itemid,
                name:results[i].itemname,
                quantity:results[i].itemquantity,
                netprice:results[i].itemnetprice
            });
            i++;
           }
           res.send({
               
               cart:cartitems
           });

        }

        
    
});
    
    });

    //clearcart
app.post('/clearcart',(req,res)=>{
    console.log(req);
    const deletecartitems=`DELETE from cart where username='${req.body.username}' `;

    con.query(deletecartitems,(err,results)=>{
    
        if(err){
            console.log('someerror occured'+err);
        }
            else{
                console.log('cleared cart');
                res.send({
                    cart:[]
                });
            }
    
            
        
    });

});
    
  
app.get('/signupcustomer',(req,res)=>{

    const{cid,cfirstname,clastname,cDob,cEmail} =req.query;
    
    const Insert=`INSERT INTO customers (cid,cfirstname,clastname,cDob,cEmail) VALUES ('${cid}','${cfirstname}','${clastname}','${cDob}','${cEmail}')`;
    
    con.query(Insert,(err,results)=>{
        if(err){
            console.log('someerror'+err);
            return res.send('error'+err);
        }
        else{
            return res.send('success');
        }
    });
    });
    app.get('/signupprivatedata',(req,res)=>{

        const{username,passwords} =req.query;
        
        const Insert=`INSERT INTO privatedata(username,passwords) VALUES ('${username}','${passwords}')`;
        
        con.query(Insert,(err,results)=>{
            if(err){
                console.log('someerror');
                return res.send('error'+err);
            }
            else{
                return res.send('success');
            }
        });
        });

        app.get('/signupcustpriv',(req,res)=>{

            const{cid,username} =req.query;
            
            const Insert=`INSERT INTO custpriv(cid,username) VALUES ('${cid}','${username}')`;
            
            con.query(Insert,(err,results)=>{
                if(err){
                    console.log('someerror'+err);
                    return res.send('error'+err);
                }
                else{
                    return res.send('success');
                }
            });
            });
    

    app.get('/orders',(req,res)=>{

        const{oid,iid,quantity,netprice} =req.query;
        
        const Insert=`INSERT INTO orders(oid,iid,quantity,netprice) VALUES ('${oid}','${iid}','${quantity}','${netprice}')`;
        
        con.query(Insert,(err,results)=>{
            if(err){
                console.log('someerror');
                return res.send('error'+err);
            }
            else{
                return res.send('success');
            }
        });
        });
    
        
    app.get('/cust_order',(req,res)=>{

        const{username,oid,date,time} =req.query;
        
        const Insert=`INSERT INTO cust_order(username,oid,date,time) VALUES ('${username}','${oid}','${date}','${time}')`;
        
        con.query(Insert,(err,results)=>{
            if(err){
                console.log('someerror');
                return res.send('error'+err);
            }

            else{
                return res.send('success');
            }
        });
        });
    
app.get('/contact',(req,res)=>{

const{fid,username,ratings,message} =req.query;

const Insert=`INSERT INTO cust_feedback(fid,username,ratings,message) VALUES ('${fid}','${username}','${ratings}','${message}')`;

con.query(Insert,(err,results)=>{
    if(err){
        console.log('someerror');
        return res.send('error'+err);
    }
    else{
        return res.send('success');
    }
});
});

app.listen(4000,()=>{
    console.log('server running 4000')
});
