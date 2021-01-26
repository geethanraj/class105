camera = document.getElementById("camera");
                      
Webcam.attach('#camera'); 
                
Webcam.set({
     heigh: 350, width: 300, image_format: 'png', png_quality: 100
     }); 
                     
    
     function tpic(){ Webcam.snap(function(data_uri){ 
                         
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri +'"/>'; }); 
                        
    } 
                         
    console.log('ml5 version:', ml5.version); 
                          
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded); 
                         
    function modelLoaded(){ console.log('Model Loaded!');
                      
}
                       
function rec(){ 
                            
    img = document.getElementById('captured_image'); 
                           
    classifier.classify(img,gotResult);
                            
} 
                            
function gotResult(error,results){ 
                                
    if (error){ 
                                   
        console.error(error);
                                   
    }
                                    
    else 
                                   
    {
                                          
        console.log("Results",results);
                                          
        document.getElementById("object").innerHtml = results[0].label;
                                         
        document.getElementById("accuracy").innerHtml = results[0].confidence.toFixed(3);
                                         
    } }