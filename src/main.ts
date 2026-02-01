/********************************************************************** */
let $gateSelect = document.getElementById("gate-select") as HTMLInputElement;
let $output = document.getElementById("output") as HTMLElement ;
let $input1 = document.getElementById("input1") as HTMLInputElement ;
let $input2 = document.getElementById("input2") as HTMLInputElement ;
let $input2Label = document.getElementById("input2-label") as HTMLElement;
let $truthTable = document.getElementById("truth-table") as HTMLElement;

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
    
    // Show/hide second input based on gate type
    if (gate === "NOT") {
        $input2Label.classList.add("hidden");
    } else {
        $input2Label.classList.remove("hidden");
    }

switch(gate){
    case "AND" :
        $truthTable.innerHTML = `
            <table>
                <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>A ∧ B</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
        `;
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
        case "NOT" :
            $truthTable.innerHTML = `
                <table>
                    <tr>
                        <th>A</th>
                        <th>¬A</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </table>
            `;
            if(!$input1.checked){
                $output.innerHTML = "1";
                $output.classList.remove("bulb-off");
                $output.classList.add("bulb-on");
            }else{
                $output.innerHTML = "0";
                $output.classList.remove("bulb-on");
                $output.classList.add("bulb-off");
            }
            break;
        case "NAND" :
            $truthTable.innerHTML = `
                <table>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>¬(A ∧ B)</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </table>
            `;
            if(!($input1.checked && $input2.checked)){
                $output.innerHTML = "1";
                $output.classList.remove("bulb-off");
                $output.classList.add("bulb-on");
            }else{
                $output.innerHTML = "0";
                $output.classList.remove("bulb-on");
                $output.classList.add("bulb-off");
            }
            break;
        case "NOR" :
            $truthTable.innerHTML = `
                <table>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>¬(A ∨ B)</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </table>
            `;
            if(!($input1.checked || $input2.checked)){
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
            $truthTable.innerHTML = `
                <table>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A ∨ B</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </table>
            `;
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
                $truthTable.innerHTML = `
                    <table>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>A ⊕ B</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                        </tr>
                    </table>
                `;
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
            case "XNOR" :
                $truthTable.innerHTML = `
                    <table>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>¬(A ⊕ B)</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </table>
                `;
                if($input1.checked == $input2.checked){
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


