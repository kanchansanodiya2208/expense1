function StName(props)
{
    return <li>Student Name is : {props.Name}</li>

}
function ListComponent(){
    const st = ['kanchan','uma'];
    return (
        <div>
        <h1>Student Marks</h1>
        <ul>
           {st.map((st)=>< StName Name={st}/>)}
         </ul>
        </div>
    );
}
export default ListComponent;