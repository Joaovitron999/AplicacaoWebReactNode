import { ArrowArcLeft, ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({feedbackType,onFeedbackRestartRequested}: FeedbackContentStepProps) {
  const feedbackTypeData = feedbackTypes[feedbackType];

  return(
    <>
      <header>
        <button 
        type="button" 
        className="top-5 left-2 absolute text-zinc-400 hover:text-zinc-100"
        onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight="bold" className="h-4 w-4 "/>
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img className="h-6 w-6" src={feedbackTypeData.image.source} alt={feedbackTypeData.image.alt}/>
          {feedbackTypeData.title} 
        </span>

        <CloseButton/> 
      </header>
    
      <form className="my-3 w-full ">
        <textarea
        className="min-w-[304px] w-full min-h-[112px] h-auto text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md  hover:border focus:border-brand-500 focus:ring-brand-500 focus:ring-3 resize-none focus:outline-none"
        placeholder="Conte com detalhes o que está acontecendo..."
        >

        </textarea>
      </form>
        
    </>  
  )
}