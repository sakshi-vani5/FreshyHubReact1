import {Link} from 'react-router-dom';


function About(){
    return(
        <div>
            
            <div className="aboutCon">
                <div><img src="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg" height={490}></img></div>
                <div><h2 className="myh2">About Fruits and Vegitables</h2>
                <h3 className="myh2">Provide Fresh and healthy fruits and vegitables with affordable price.</h3>
                <p>Furthermore, fruits and vegetables intake keeps our stomach full for a longer time compared to other unhealthy foods. They also keep us physically and mentally fresh than ever. Along with all of these health benefits, eating fruits and vegetables prevents chronic diseases such as heart disease, cancer and diabetes.Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre. There are many varieties of fruit and vegetables available and many ways to prepare, cook and serve them. A diet high in fruit and vegetables can help protect you against cancer, diabetes and heart disease.Not only does fruit aid in good physical health, but it also provides benefits for good mental health. Fruit makes weight loss more efficient and heightens brain functions. Eating a healthy amount of fruit improves the ability for the body to lose weight. Fruit contains eighty percent water just like the human body.Carotenoids are the orange-red pigments found in fruits and vegetables. In this study, researchers found that just two extra portions of fruits and veggies every day were enough to cause an improvement in skin tone over just six weeks.</p>
               <Link to="/"> <button>View Our Chart</button></Link>
               
               
                </div> 
           </div>
       </div>
    )
}
export default About