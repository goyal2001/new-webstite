var bodyParser=require('body-parser'),
    methodOverride=require('method-override'),
    expressSanitizer=require("express-sanitizer"),
    express=require('express'),
    app= express();
const path=require('path');

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set('views',path.join(__dirname,'views'));
app.use(methodOverride('_method'));
//MONGOOSE /MODEL CONFIG

//restfull routes
var PORT=process.env.PORT||3001;

app.get('/',(req,res)=>{
    res.render('layout',{
        title:'hello world'
    });
});



//CREATE ROUTE

app.listen(PORT);