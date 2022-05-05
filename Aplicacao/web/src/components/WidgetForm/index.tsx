import { CloseButton } from "../CloseButton";
import thoughtImageUrl from "../../assets/thought.png";
import ideaImageUrl from "../../assets/idea.png";
import bugImageUrl from "../../assets/bug.png";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedBackContentStep";




export const feedbackTypes = {
    BUG:{
      title: "Problema",
      image:{
        source: bugImageUrl,
        alt: "imagem de um inseto"
      }
    },
    IDEA:{
      title: "Idéia",
      image:{
        source: ideaImageUrl,
        alt: "imagem de uma lampada"
      }
    },
    OTHER:{
      title: "Outro",
      image:{
        source: thoughtImageUrl,
        alt: "imagem de um documento"
      }
    }
  }

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

  function handleRestartFeedback(){
    setFeedbackType(null);
  }
  
  const[feedbackType,setFeedbackType] = useState<FeedbackType|null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex items-center flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ):(
        <FeedbackContentStep  feedbackType={feedbackType} 
                              onFeedbackRestartRequested={handleRestartFeedback}/>
        
      )}

      <footer className="text-xs text-neutral-400 align-middle">
        Feito com ♥ - <a className="underline underline-offset-2" href="https://github.com/Joaovitron999">Joaovitron999</a>
      </footer>
    </div>



  );
}