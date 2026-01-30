/********************************************************************** */
let $gateSelect = document.getElementById("gate-select") as HTMLInputElement;
let $output = document.getElementById("output") as HTMLElement ;
let $input1 = document.getElementById("input1") as HTMLInputElement ;
let $input2 = document.getElementById("input2") as HTMLInputElement ;
let Table = document.getElementById("Table") as HTMLImageElement;

let gate:string = $gateSelect.value;

$gateSelect.addEventListener("change", () => {
  gate = $gateSelect.value;

    
  console.log(gate);
  CheckGateState()
});

$input1.addEventListener("change", () => {
  console.log($input1.value);
  CheckGateState()
});

$input2.addEventListener("change", () => {
  console.log($input2.value);
  CheckGateState()
});

$output.addEventListener("change", ()=>{
    console.log($output.classList);
    CheckGateState()
})

function CheckGateState(){

switch(gate){
    case "AND" :
    Table.src = "/public/Images/ANDT.png";
        if($input1.checked && $input2.checked){
            $output.innerHTML = "1";
            $output.classList.remove("bulb-off");
            $output.classList.add("bulb-on");



        }else{
            $output.innerHTML = "0";
            $output.classList.remove("bulb-on");
            $output.classList.add("bulb-off");


        }
        break;
        case "OR" :
            if($input1.checked || $input2.checked){
                $output.innerHTML = "1";
                $output.classList.remove("bulb-off");
                $output.classList.add("bulb-on");


            }else{
                $output.innerHTML = "0";
                $output.classList.remove("bulb-on");
                $output.classList.add("bulb-off");

            }
            break;

            case "XOR" :
                if($input1.checked != $input2.checked){
                    $output.innerHTML = "1";
                    $output.classList.remove("bulb-off");
                    $output.classList.add("bulb-on");
                }
                else{
                    $output.innerHTML = "0";
                    $output.classList.remove("bulb-on");
                    $output.classList.add("bulb-off");
                }
            break;

}

}


