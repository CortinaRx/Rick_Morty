
import {useState} from 'react';
import './PaginationLoc.css'

export function PaginationLoc({getData}){
const [actualPage, setActualPage] = useState(1);

const changePage = (newPage) =>{
    getData(newPage);
    setActualPage(newPage);
}
return <div className="paginationloc_container">
    <button onClick={() => changePage(actualPage -1)}>{"<"}</button>
    
    <button onClick={() => changePage(actualPage +1)}>{">"}</button>

</div>

}