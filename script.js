        //giving classes not ids 14-23 lines

let add=document.querySelector("#add");

function push(){
    if(document.querySelector("#task").value.length == 0){
        alert("Please Enter a value");
    }
    else{
        document.querySelector('#list').innerHTML+=`
        <div class="item">      
            <span class="taskname">
            ${document.querySelector('#task').value}
            </span>
            <button class="delete">
            
            <i class="fa-regular fa-trash-can"></i>
            
            </button>
        </div>
        
        `;
        var del=document.querySelectorAll(".delete");
        del.forEach((e)=>{e.addEventListener('click',remove)});

        let items=document.querySelectorAll('.item');
        items.forEach((e)=>{e.addEventListener('click',finsihedstatus)})

    }
    document.querySelector("#task").value="";
}
add.addEventListener('click',push);


function remove(){
    console.log(this);
    this.parentNode.remove(); //important step
    }

function finsihedstatus(){
        console.log(this);
        this.classList.toggle('completed');
    }