import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const QuestionContext = createContext({}); 

export const QuestionContextProvider = ({children}) => {
    const [minutes, setMinutes] = useState(0);
    const [question, setQuestion] = useState("");
    const [round, setRound] = useState(null);

    const getQuestion = async () => {
        try {
            // const response = await axios.get(`http://localhost:5000/api/question`);
            const response = await axios.get(`https://blind-code.onrender.com/api/question`);

            const data = response.data[0];
            setQuestion(data.question);
            setMinutes(data.minutes);
            setRound(data.round);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuestion();
    }, []);
    

    return(
        <QuestionContext.Provider value={{minutes, question, round, setMinutes}}>
            {children}
        </QuestionContext.Provider>
    )
}