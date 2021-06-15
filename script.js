let todo={};
function refresh()
{
    var len=1;
    var cur_string="";
    for(var key in todo)
    {
        var desc=todo[key];
        cur_string+=`<tr>
        <th  scope="row">${len}</th>
        <td >${key}</td>
        <td >${todo[key]}</td>
        <td><button type="button" class="btn btn-primary" onclick="delete_task('${key}')">Delete</button></td>
      </tr>`;
      len+=1;
    }
    document.getElementById("table_main").innerHTML=cur_string;

}
function add(){
    let task=document.getElementById("task1").value;
    let description=document.getElementById("task2").value;
    todo[task]=description;
    refresh();
}

function delete_task(task)
{
    console.log(task);
    delete todo[task];


    refresh();
}
function clear_all()
{
    todo={};
    refresh();
}
refresh();