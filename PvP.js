    
           $(document).ready(function(){
                var spelerscore1 = 0;
                var spelerscore2 = 0;
                var Gelijkgespeeld = 0;
                var plus = 1;
                var i = 0;
                var gewonnenspeler1 = false;
                var gewonnenspeler2 = false;
                var error = document.getElementById("error").innerHTML = "";
                
                
                
                
                
               $("#PvP").click(function(){
                   
                  
                   $("#PvP").removeClass("midden").addClass("hidden");
                   $("#PCMakkelijk").removeClass("midden").addClass("hidden");
                   $("#PCMoeilijk").removeClass("midden").addClass("hidden");
                    
                    $("#speler1Input").removeClass("hidden").addClass("middeninput");
                    $("#speler2Input").removeClass("hidden").addClass("middeninput");
                    $("#question").removeClass("hidden").addClass("question");
                    $("#startgame").removeClass("hidden");
                    
                    
                var button11 = document.getElementById("button1");
                var button22 = document.getElementById("button2");
                var button33 = document.getElementById("button3");
                var button44 = document.getElementById("button4");
                var button55 = document.getElementById("button5");
                var button66 = document.getElementById("button6");
                var button77 = document.getElementById("button7");
                var button88 = document.getElementById("button8");
                var button99 = document.getElementById("button9");
                  
                    
                    
                    
                    
                    
                    
                    
                    
                    $("#startgame").click(function bruh(){
                        
                        
                       if($("#speler1Input").val() == "" || $("#speler2Input").val() == ""){
                           $("#error").removeClass("hidden");
                           error = document.getElementById("error").innerHTML = "speler(s) naam niet ingevuld.";
                       }else if($("#speler1Input").text().length > 15 || $("#speler2Input").text().length > 15){
                           error = document.getElementById("error").innerHTML = "wowow bro slow down with the caracters";
                           
                       }else{
                        var   speler1Input = document.getElementById("speler1Input").value;
                        var   speler2Input = document.getElementById("speler2Input").value;
                         document.getElementById("speler1score").innerHTML = speler1Input + ": " + spelerscore1;
                         document.getElementById("speler2score").innerHTML = speler2Input + ": " + spelerscore2;
                         document.getElementById("Gelijkspel").innerHTML = "Gelijkgespeeld: " + Gelijkgespeeld;
                            error = document.getElementById("error").innerHTML = "";
                            document.getElementById("speler1").innerHTML = speler1Input;
                            document.getElementById("speler2").innerHTML = speler2Input;
                        var speler1 = true;
                        var speler2 = false;
                           document.getElementById("informatie").innerHTML = speler1Input + " is aan de beurt" ;
                            $("#speler1Input").removeClass("middeninput").addClass("hidden");
                            $("#speler2Input").removeClass("middeninput").addClass("hidden");
                            $("#question").removeClass("question").addClass("hidden");
                            $("#startgame").addClass("hidden");
                            $("#informatie").removeClass("hidden").addClass("info");
                            
                            pvp();
                       }
                       
                       
                       
                       
                      $("#reset").click(function(){
                          if(speler1){
                            document.getElementById("informatie").innerHTML = speler1Input + " is aan de beurt";
                        }else{
                            document.getElementById("informatie").innerHTML = speler2Input + " is aan de beurt";
                        }
                         i=0;
                         plus = 1;
                         gewonnenspeler1 = false;
                         gewonnenspeler2 = false;
                         
                         
                        button11.value = "";
                        button22.value = "";
                        button33.value = "";
                        button44.value = "";
                        button55.value = "";
                        button66.value = "";
                        button77.value = "";
                        button88.value = "";
                        button99.value = "";
                        
                        button11.innerHTML = "";
                        button22.innerHTML = "";
                        button33.innerHTML = "";
                        button44.innerHTML = "";
                        button55.innerHTML = "";
                        button66.innerHTML = "";
                        button77.innerHTML = "";
                        button88.innerHTML = "";
                        button99.innerHTML = "";
                        
                        button11.disabled = false;
                        button22.disabled = false;
                        button33.disabled = false;
                        button44.disabled = false;
                        button55.disabled = false;
                        button66.disabled = false;
                        button77.disabled = false;
                        button88.disabled = false;
                        button99.disabled = false;
                        
                        
                        
                        
                       
                        $("#opnieuwSpelen").fadeOut(1000);
                        $("#reset").addClass("hidden");
                        
                    });
                       
                       function pvp(){
                        
                             
                           
                             
                    
                    
                    
                           
                           $(".Buttons").click(function(){
                               
                              i += plus;
                              
                            
                             
                               if(speler1){      
                               console.log("false");
                                 speler1 = false;
                                 speler2 = true;
                                 document.getElementById("informatie").innerHTML = speler2Input + " is aan de beurt" ;
                              console.log(speler1, speler2);
                              this.innerHTML = 'x';
                              this.value = 'x';
                              this.disabled = true;
                              
                              
                           }else{
                               console.log("true");
                              this.value = 'o';
                               speler1 = true;
                               speler2 = false;
                                document.getElementById("informatie").innerHTML = speler1Input + " is aan de beurt" ;
                               
                               this.disabled = true;
                               this.innerHTML = 'o';
                               
                              
                           }
                           
                           
                           
                           
                           
                               
                            var button1 = document.getElementById("button1").value;
                            var button2 = document.getElementById("button2").value;
                            var button3 = document.getElementById("button3").value;
                            var button4 = document.getElementById("button4").value;
                            var button5 = document.getElementById("button5").value;
                            var button6 = document.getElementById("button6").value;
                            var button7 = document.getElementById("button7").value;
                            var button8 = document.getElementById("button8").value;
                            var button9 = document.getElementById("button9").value;
                           
                           
                          
                            console.log(button1, button2, button3, button4, button5, button6, button7, button8, button9);
                           
                           
                           
                           if(button1 == 'x' || button1 == 'o' && button2 == 'x' || button2 == 'o' && button3 == 'x' || button3 == 'o'){
                               if(button1 == 'x' && button2 == 'x' && button3 == 'x'){
                                   gewonnenspeler2 = true;
                                   console.log(speler2Input + ' heeft gewonnen');
                               }else if(button1 == 'o' && button2 == 'o' && button3 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                   gewonnenspeler1 = true;
                               }
                           }
                           
                           if(button4 == 'x' || button4 == 'o' && button5 == 'x' || button5 == 'o' && button6 == 'x' || button6 == 'o'){
                               if(button4 == 'x' && button5 == 'x' && button6 == 'x'){
                                   console.log(speler2Input + ' heeft gewonnen');
                                   gewonnenspeler2 = true;
                               }else if(button4 == 'o' && button5 == 'o' && button6 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                   gewonnenspeler1 = true;
                               }
                           }
                           
                            if(button7 == 'x' || button7 == 'o' && button8 == 'x' || button8 == 'o' && button9 == 'x' || button9 == 'o'){
                               if(button7 == 'x' && button8 == 'x' && button9 == 'x'){
                                   console.log(speler2Input + ' heeft gewonnen');
                                   gewonnenspeler2 = true;
                               }else if(button7 == 'o' && button8 == 'o' && button9 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                  gewonnenspeler1 = true;
                               }
                           }
                           
                            if(button1 == 'x' || button1 == 'o' && button4 == 'x' || button4 == 'o' && button7 == 'x' || button7 == 'o'){
                               if(button1 == 'x' && button4 == 'x' && button7 == 'x'){
                                   console.log(speler2Input + ' heeft gewonnen');
                                   gewonnenspeler2 = true;
                               }else if(button1 == 'o' && button4 == 'o' && button7 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                   gewonnenspeler1 = true;
                               }
                           }
                           
                            if(button2 == 'x' || button2 == 'o' && button5 == 'x' || button5 == 'o' && button8 == 'x' || button8 == 'o'){
                               if(button2 == 'x' && button5 == 'x' && button8 == 'x'){
                                   console.log(speler2Input + ' heeft gewonnen');
                                   gewonnenspeler2 = true;
                               }else if(button2 == 'o' && button5 == 'o' && button8 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                   gewonnenspeler1 = true;
                               }
                           }
                           
                           if(button3 == 'x' || button3 == 'o' && button6 == 'x' || button6 == 'o' && button9 == 'x' || button9 == 'o'){
                               if(button3 == 'x' && button6 == 'x' && button9 == 'x'){
                                   console.log(speler2Input + ' heeft gewonnen');
                                   gewonnenspeler2 = true;
                               }else if(button3 == 'o' && button6 == 'o' && button9 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                   gewonnenspeler1 = true;
                               }
                           }
                           
                           if(button1 == 'x' || button1 == 'o' && button5 == 'x' || button5 == 'o' && button9 == 'x' || button9 == 'o'){
                               if(button1 == 'x' && button5 == 'x' && button9 == 'x'){
                                   console.log(speler2Input + ' heeft gewonnen');
                                   gewonnenspeler2 = true;
                               }else if(button1 == 'o' && button5 == 'x'){
                                   console.log('secret place!');
                               }else if(button1 == 'o' && button5 == 'o' && button9 == 'x'){
                                   console.log('another secret place!');
                                }else if(button1 == 'o' && button1 == 'o' && button1 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                   gewonnenspeler1 = true;
                               }
                           }
                           
                           if(button3 == 'x' || button3 == 'o' && button5 == 'x' || button5 == 'o' && button7 == 'x' || button7 == 'o'){
                               if(button3 == 'x' && button5 == 'x' && button7 == 'x'){
                                   console.log(speler2Input + ' heeft gewonnen');
                                   gewonnenspeler2 = true;
                               }else if(button3 == 'o' && button5 == 'o' && button7 == 'o'){
                                   console.log(speler1Input + ' heeft gewonnen');
                                   gewonnenspeler1 = true;
                               }
                           }
                           
                           
                           if(gewonnenspeler1){
                               spelerscore2 += plus;
                               
                               document.getElementById("speler2score").innerHTML = speler2Input + ": " + spelerscore2;
                               $(".Buttons").prop('disabled', true);
                               $("#reset").removeClass("hidden");
                               $("#opnieuwSpelen").fadeIn(1000);
                               
                                 document.getElementById("spelerGewonnen").innerHTML = speler2Input + " heeft gewonnen!";
                                 
                             document.getElementById("informatie").innerHTML = speler2Input +  " heeft gewonnen";  
                             
                           }else if(gewonnenspeler2){
                               spelerscore1 += plus;
                               document.getElementById("speler1score").innerHTML = speler1Input + ": " + spelerscore1;
                               $("#opnieuwSpelen").fadeToggle(1000);
                               $(".Buttons").prop('disabled', true);
                               $("#Won").fadeIn(1000);
                               $("#reset").removeClass("hidden");
                               document.getElementById("spelerGewonnen").innerHTML = speler1Input + " heeft gewonnen!";
                              $(".Buttons").prop('disabled', true);
                               document.getElementById("informatie").innerHTML = speler1Input + ' heeft gewonnen';
                               
                               
                               
                           }else if(i === 9){
                               Gelijkgespeeld += plus;
                                document.getElementById("Gelijkspel").innerHTML = "Gelijkgespeeld: " + Gelijkgespeeld;
                               $("#reset").removeClass("hidden");
                               $("#opnieuwSpelen").fadeIn(1000);
                                document.getElementById("informatie").innerHTML = "Gelijkspel!";
                               $(".Buttons").prop('disabled', true);
                               $("#Won").fadeToggle(1000);
                               document.getElementById("spelerGewonnen").innerHTML = "Het is gelijkspel geworden!";
                               $(".Buttons").prop('disabled', true);
                           }
                           
                           
                           
                           
                           });
                           
                           
                       }
                       
                       
                        
                    });
                    
               });
            });
    
    