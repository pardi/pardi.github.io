import { useState, useEffect, useRef } from "react";


function getRandomWord(){
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789?!&@#$%^&*)(_+-';
    // const word_size = Math.floor(Math.random() * 10000) % 3 + 7
    const word_size = 5
    let word = ''
    for (let i = 0; i < word_size; i++) {
        const char_idx = Math.floor(Math.random() * 10000) % characters.length;
        word += characters[char_idx];
    }

    return word;
}


const RandomWord = ({ wordsList }) => {

    const [currentWord, setCurrentWord] = useState("coding");
    const currentWordRef = useRef();
    currentWordRef.current = currentWord;

    const wordsListRef = useRef();
    wordsListRef.current = wordsList;
    
    const loop_time_ms = 100;
    const hold_counter_th = 20; // loop_time_ms * hold_counter_th [ms]
    const counter_th = 20; // loop_time_ms * counter_th [ms]

    useEffect(() => {
        let counter = 0;
        
        let hold_counter = 0;
            
        const interval = setInterval(() => {

            if (counter === counter_th){

                if (hold_counter === 0){
                    const word_idx = Math.floor(Math.random() * 10000) % wordsListRef.current.length 

                    setCurrentWord(wordsListRef.current[word_idx]);
                }
                
                if (hold_counter === hold_counter_th){
                    hold_counter = 0;
                    counter = 0;
                }else{
                    hold_counter++;
                }
                      
            }
            else{
                setCurrentWord(getRandomWord(currentWordRef.current));
                counter++;
            }          

        }, loop_time_ms);  
    
        return () => clearInterval(interval);  // Clean up when component unmounts
      }, []);
    

    return (
    <>
    {currentWord}
    </>
)
}


export default RandomWord