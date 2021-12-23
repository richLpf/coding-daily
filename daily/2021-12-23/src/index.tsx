// react hooks 
import { useEffect } from 'react'

const useDocumentTitle = (title: string):void => {
    useEffect(():any => {
        document.title = title;
        return () => document.title = "title init";
    }, [title])
}

export default useDocumentTitle