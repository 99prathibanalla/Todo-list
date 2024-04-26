const myarr=[
    // {
    //     name: 'Meditate',
    //     dueDate: '2024-04-23'
    // },
    // {
    //     name: 'Project',
    //     dueDate: '2024-04-25'
    // }
];

function renderTodoList(){
    let todolists='';

    for(let i=0;i<myarr.length;i++){
        const todoObject=myarr[i];
        const {name,dueDate}=todoObject;
        const html=`<div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="myarr.splice(${i},1);
                        renderTodoList();
                        " class="del">Delete</button>
                    `;
        todolists+=html;
    }
   // console.log(todolists);
    document.querySelector(".mydiv")
      .innerHTML=todolists;
}

function addtolist(){
    const inputElement=document.querySelector('.input');
    const name=inputElement.value;
    const dateElement=document.querySelector(".duedate");
    const dueDate=dateElement.value;
    myarr.push({
        name,
        dueDate
    });
    inputElement.value='';
    dateElement.value='';
    //console.log(myarr);
    renderTodoList();  
}
