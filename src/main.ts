let $gateSelect:any = document.getElementById("gate-select");

let gate:string = $gateSelect.value;
let $output:any = document.getElementById("output") ;
let $input1:any = document.getElementById("input1") ;
let $input2:any = document.getElementById("input2") ;

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


