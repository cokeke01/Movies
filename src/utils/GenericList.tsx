import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps){
    if (!props.list){ //while waiting to load the list
        if (props.loadingUI){
            return props.loadingUI;
        }
        return <Loading />
    } else if (props.list.length === 0){ //it has loaded the list but no content
        if (props.emptyListUI){
            return props.emptyListUI;
        }
        return <>There are no elements to display</>
    } else{
        return props.children;
    }
}

interface genericListProps{
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}