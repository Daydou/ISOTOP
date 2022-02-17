var formData = {};
var currentStep = 1;
var maxStep = 10;

function initializeFormData() {
    formData = {
        step1: [],
        step2: [],
        step3: [],
        step4: [],
        step5: [],
        step6: [],
        step7: [],
        step8: [],
        step9: [],
        step10: []
    };
}

initializeFormData();

function addValueToFormdata(valueToAdd) {
    formData["step" + currentStep].push(valueToAdd);
}
function removeValueToFormdata(valueToRemove) {
    const index = formData["step" + currentStep].indexOf(valueToRemove);
    if (index > -1) {
        formData["step" + currentStep].splice(index, 1); // 2nd parameter means remove one item only
    }
}

function nextStep() {
    if (currentStep === maxStep) {
        envoyerForm();
        return;
    }

    hideDiv('step' + currentStep);

    currentStep++;

    displayDiv('step' + currentStep);
    displayDiv("previous_button");
}

function displayDiv(divIdName) {
    var elementAAfficher = document.getElementById(divIdName);
    elementAAfficher.classList.add("visible");
}

function hideDiv(divIdName) {
    var elementAMasquer = document.getElementById(divIdName);
    elementAMasquer.classList.remove("visible");
}


function previousStep() {
    if (currentStep === 1) {
        return;
    }

    hideDiv('step' + currentStep);

    currentStep--;

    displayDiv('step' + currentStep);

    if (currentStep === 1) {
        hideDiv("previous_button");
    }

}

function envoyerForm() {
    alert("envoi du formulairre");
    console.log("formData : ", formData);
    document.location.href="index.html";
}



// faire apparaitre bordure et logo valider


function checkUncheck() {
    initializeFormData();
    //step1
    var image1_step1_hide = document.getElementById('image1_step1_hide');
    var image1_step1_visible = document.getElementById('image1_step1_visible');

    if (image1_step1_hide.checked) {
        document.getElementById('image_valider1_step1').style.display = 'block';
        image1_step1_visible.classList.add= "bordur";
        addValueToFormdata(image1_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider1_step1').style.display = 'none';
        image1_step1_visible.classList.remove= "bordur";
        removeValueToFormdata(image1_step1_hide.value);
        console.log("formData : ", formData);
    }

    var image2_step1_hide = document.getElementById('image2_step1_hide');
    if (image2_step1_hide.checked) {
        document.getElementById('image_valider2_step1').style.display = 'block';
        document.getElementById('image2_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image2_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider2_step1').style.display = 'none';
        document.getElementById('image2_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image2_step1_hide.value);
        console.log("formData : ", formData);
    }

    var image3_step1_hide = document.getElementById('image3_step1_hide');
    if (image3_step1_hide.checked) {
        document.getElementById('image_valider3_step1').style.display = 'block';
        document.getElementById('image3_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image3_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider3_step1').style.display = 'none';
        document.getElementById('image3_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image3_step1_hide.value);
        console.log("formData : ", formData);
    }


    var image4_step1_hide = document.getElementById('image4_step1_hide');
    if (image4_step1_hide.checked) {
        document.getElementById('image_valider4_step1').style.display = 'block';
        document.getElementById('image4_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image4_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider4_step1').style.display = 'none';
        document.getElementById('image4_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image4_step1_hide.value);
        console.log("formData : ", formData);
    }

    var image5_step1_hide = document.getElementById('image5_step1_hide');
    if (image5_step1_hide.checked) {
        document.getElementById('image_valider5_step1').style.display = 'block';
        document.getElementById('image5_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image5_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider5_step1').style.display = 'none';
        document.getElementById('image5_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image5_step1_hide.value);
        console.log("formData : ", formData);
    }

    var image6_step1_hide = document.getElementById('image6_step1_hide');
    if (image6_step1_hide.checked) {
        document.getElementById('image_valider6_step1').style.display = 'block';
        document.getElementById('image6_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image6_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider6_step1').style.display = 'none';
        document.getElementById('image6_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image6_step1_hide.value);
        console.log("formData : ", formData);
    }

    var image7_step1_hide = document.getElementById('image7_step1_hide');
    if (image7_step1_hide.checked) {
        document.getElementById('image_valider7_step1').style.display = 'block';
        document.getElementById('image7_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image7_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider7_step1').style.display = 'none';
        document.getElementById('image7_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image7_step1_hide.value);
        console.log("formData : ", formData);
    }

    var image8_step1_hide = document.getElementById('image8_step1_hide');
    if (image8_step1_hide.checked) {
        document.getElementById('image_valider8_step1').style.display = 'block';
        document.getElementById('image8_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image8_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider8_step1').style.display = 'none';
        document.getElementById('image8_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image8_step1_hide.value);
        console.log("formData : ", formData);
    }

    var image9_step1_hide = document.getElementById('image9_step1_hide');
    if (image9_step1_hide.checked) {
        document.getElementById('image_valider9_step1').style.display = 'block';
        document.getElementById('image9_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image9_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider9_step1').style.display = 'none';
        document.getElementById('image9_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image9_step1_hide.value);
        console.log("formData : ", formData);
    }

   
    var image10_step1_hide = document.getElementById('image10_step1_hide');
    if (image10_step1_hide.checked) {
        document.getElementById('image_valider10_step1').style.display = 'block';
        document.getElementById('image10_step1_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image10_step1_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider10_step1').style.display = 'none';
        document.getElementById('image10_step1_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image10_step1_hide.value);
        console.log("formData : ", formData);
    }

    //step2

    var image1_step2_hide = document.getElementById('image1_step2_hide');
    if (image1_step2_hide.checked) {
        document.getElementById('image_valider1_step2').style.display = 'block';
        document.getElementById('image1_step2_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image1_step2_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider1_step2').style.display = 'none';
        document.getElementById('image1_step2_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image1_step2_hide.value);
        console.log("formData : ", formData);
    }


    var image2_step2_hide = document.getElementById('image2_step2_hide');
    if (image2_step2_hide.checked) {
        document.getElementById('image_valider2_step2').style.display = 'block';
        document.getElementById('image2_step2_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image2_step2_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider2_step2').style.display = 'none';
        document.getElementById('image2_step2_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image2_step2_hide.value);
        console.log("formData : ", formData);
    }
    //step3
    var image1_step3_hide = document.getElementById('image1_step3_hide');
    if (image1_step3_hide.checked) {
        document.getElementById('image_valider1_step3').style.display = 'block';
        document.getElementById('image1_step3_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image1_step3_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider1_step3').style.display = 'none';
        document.getElementById('image1_step3_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image1_step3_hide.value);
        console.log("formData : ", formData);
    }

    var image2_step3_hide = document.getElementById('image2_step3_hide');
    if (image2_step3_hide.checked) {
        document.getElementById('image_valider2_step3').style.display = 'block';
        document.getElementById('image2_step3_visible').style.border = 'solid 5px aqua';
        addValueToFormdata(image2_step3_hide.value);
        console.log("formData : ", formData);
    } else {
        document.getElementById('image_valider2_step3').style.display = 'none';
        document.getElementById('image2_step3_visible').style.border = 'solid 1px black';
        removeValueToFormdata(image2_step3_hide.value);
        console.log("formData : ", formData);
    }

   //step4

   var image1_step4_hide = document.getElementById('image1_step4_hide');
   if (image1_step4_hide.checked) {
       document.getElementById('image_valider1_step4').style.display = 'block';
       document.getElementById('image1_step4_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image1_step4_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider1_step4').style.display = 'none';
       document.getElementById('image1_step4_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image1_step4_hide.value);
       console.log("formData : ", formData);
   }

   var image2_step4_hide = document.getElementById('image2_step4_hide');
   if (image2_step4_hide.checked) {
       document.getElementById('image_valider2_step4').style.display = 'block';
       document.getElementById('image2_step4_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image2_step4_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider2_step4').style.display = 'none';
       document.getElementById('image2_step4_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image2_step4_hide.value);
       console.log("formData : ", formData);
   }

   var image3_step4_hide = document.getElementById('image3_step4_hide');
   if (image3_step4_hide.checked) {
       document.getElementById('image_valider3_step4').style.display = 'block';
       document.getElementById('image3_step4_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image3_step4_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider3_step4').style.display = 'none';
       document.getElementById('image3_step4_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image3_step4_hide.value);
       console.log("formData : ", formData);
   }

   //step5


   var image1_step5_hide = document.getElementById('image1_step5_hide');
   if (image1_step5_hide.checked) {
       document.getElementById('image_valider1_step5').style.display = 'block';
       document.getElementById('image1_step5_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image1_step5_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider1_step5').style.display = 'none';
       document.getElementById('image1_step5_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image1_step5_hide.value);
       console.log("formData : ", formData);
   }


   var image2_step5_hide = document.getElementById('image2_step5_hide');
   if (image2_step5_hide.checked) {
       document.getElementById('image_valider2_step5').style.display = 'block';
       document.getElementById('image2_step5_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image2_step5_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider2_step5').style.display = 'none';
       document.getElementById('image2_step5_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image2_step5_hide.value);
       console.log("formData : ", formData);
   }

   var image3_step5_hide = document.getElementById('image3_step5_hide');
   if (image3_step5_hide.checked) {
       document.getElementById('image_valider3_step5').style.display = 'block';
       document.getElementById('image3_step5_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image3_step5_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider3_step5').style.display = 'none';
       document.getElementById('image3_step5_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image3_step5_hide.value);
       console.log("formData : ", formData);
   }


   var image4_step5_hide = document.getElementById('image4_step5_hide');
   if (image4_step5_hide.checked) {
       document.getElementById('image_valider4_step5').style.display = 'block';
       document.getElementById('image4_step5_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image4_step5_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider4_step5').style.display = 'none';
       document.getElementById('image4_step5_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image4_step5_hide.value);
       console.log("formData : ", formData);
   }

   var image5_step5_hide = document.getElementById('image5_step5_hide');
   if (image5_step5_hide.checked) {
       document.getElementById('image_valider5_step5').style.display = 'block';
       document.getElementById('image5_step5_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image5_step5_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider5_step5').style.display = 'none';
       document.getElementById('image5_step5_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image5_step5_hide.value);
       console.log("formData : ", formData);
   }



   //step6

   var image1_step6_hide = document.getElementById('image1_step6_hide');
   if (image1_step6_hide.checked) {
       document.getElementById('image_valider1_step6').style.display = 'block';
       document.getElementById('image1_step6_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image1_step6_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider1_step6').style.display = 'none';
       document.getElementById('image1_step6_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image1_step6_hide.value);
       console.log("formData : ", formData);
   }


   var image2_step6_hide = document.getElementById('image2_step6_hide');
   if (image2_step6_hide.checked) {
       document.getElementById('image_valider2_step6').style.display = 'block';
       document.getElementById('image2_step6_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image2_step6_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider2_step6').style.display = 'none';
       document.getElementById('image2_step6_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image2_step6_hide.value);
       console.log("formData : ", formData);
   }

   var image3_step6_hide = document.getElementById('image3_step6_hide');
   if (image3_step6_hide.checked) {
       document.getElementById('image_valider3_step6').style.display = 'block';
       document.getElementById('image3_step6_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image3_step6_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider3_step6').style.display = 'none';
       document.getElementById('image3_step6_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image3_step6_hide.value);
       console.log("formData : ", formData);
   }

   //step7
   var image1_step7_hide = document.getElementById('image1_step7_hide');
   if (image1_step7_hide.checked) {
       document.getElementById('image_valider1_step7').style.display = 'block';
       document.getElementById('image1_step7_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image1_step7_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider1_step7').style.display = 'none';
       document.getElementById('image1_step7_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image1_step7_hide.value);
       console.log("formData : ", formData);
   }
   var image2_step7_hide = document.getElementById('image2_step7_hide');
   if (image2_step7_hide.checked) {
       document.getElementById('image_valider2_step7').style.display = 'block';
       document.getElementById('image2_step7_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image2_step7_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider2_step7').style.display = 'none';
       document.getElementById('image2_step7_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image2_step7_hide.value);
       console.log("formData : ", formData);
   }

   var image3_step7_hide = document.getElementById('image3_step7_hide');
   if (image3_step7_hide.checked) {
       document.getElementById('image_valider3_step7').style.display = 'block';
       document.getElementById('image3_step7_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image3_step7_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider3_step7').style.display = 'none';
       document.getElementById('image3_step7_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image3_step7_hide.value);
       console.log("formData : ", formData);
   }

   var image4_step7_hide = document.getElementById('image4_step7_hide');
   if (image4_step7_hide.checked) {
       document.getElementById('image_valider4_step7').style.display = 'block';
       document.getElementById('image4_step7_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image4_step7_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider4_step7').style.display = 'none';
       document.getElementById('image4_step7_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image4_step7_hide.value);
       console.log("formData : ", formData);
   }

   var image5_step7_hide = document.getElementById('image5_step7_hide');
   if (image5_step7_hide.checked) {
       document.getElementById('image_valider5_step7').style.display = 'block';
       document.getElementById('image5_step7_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image5_step7_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider5_step7').style.display = 'none';
       document.getElementById('image5_step7_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image5_step7_hide.value);
       console.log("formData : ", formData);
   }
   var image6_step7_hide = document.getElementById('image6_step7_hide');
   if (image6_step7_hide.checked) {
       document.getElementById('image_valider6_step7').style.display = 'block';
       document.getElementById('image6_step7_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image6_step7_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider6_step7').style.display = 'none';
       document.getElementById('image6_step7_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image6_step7_hide.value);
       console.log("formData : ", formData);
   }


   //step8
   var image1_step8_hide = document.getElementById('image1_step8_hide');
   if (image1_step8_hide.checked) {
       document.getElementById('image_valider1_step8').style.display = 'block';
       document.getElementById('image1_step8_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image1_step8_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider1_step8').style.display = 'none';
       document.getElementById('image1_step8_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image1_step8_hide.value);
       console.log("formData : ", formData);
   }

   var image2_step8_hide = document.getElementById('image2_step8_hide');
   if (image2_step8_hide.checked) {
       document.getElementById('image_valider2_step8').style.display = 'block';
       document.getElementById('image2_step8_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image2_step8_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider2_step8').style.display = 'none';
       document.getElementById('image2_step8_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image2_step8_hide.value);
       console.log("formData : ", formData);
   }

   var image3_step8_hide = document.getElementById('image3_step8_hide');
   if (image3_step8_hide.checked) {
       document.getElementById('image_valider3_step8').style.display = 'block';
       document.getElementById('image3_step8_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image3_step8_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider3_step8').style.display = 'none';
       document.getElementById('image3_step8_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image3_step8_hide.value);
       console.log("formData : ", formData);
   }

   var image4_step8_hide = document.getElementById('image4_step8_hide');
   if (image4_step8_hide.checked) {
       document.getElementById('image_valider4_step8').style.display = 'block';
       document.getElementById('image4_step8_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image4_step8_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider4_step8').style.display = 'none';
       document.getElementById('image4_step8_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image4_step8_hide.value);
       console.log("formData : ", formData);
   }

   var image5_step8_hide = document.getElementById('image5_step8_hide');
   if (image5_step8_hide.checked) {
       document.getElementById('image_valider5_step8').style.display = 'block';
       document.getElementById('image5_step8_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image5_step8_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider5_step8').style.display = 'none';
       document.getElementById('image5_step8_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image5_step8_hide.value);
       console.log("formData : ", formData);
   }

   var image6_step8_hide = document.getElementById('image6_step8_hide');
   if (image6_step8_hide.checked) {
       document.getElementById('image_valider6_step8').style.display = 'block';
       document.getElementById('image6_step8_visible').style.border = 'solid 5px aqua';
       addValueToFormdata(image6_step8_hide.value);
       console.log("formData : ", formData);
   } else {
       document.getElementById('image_valider6_step8').style.display = 'none';
       document.getElementById('image6_step8_visible').style.border = 'solid 1px black';
       removeValueToFormdata(image6_step8_hide.value);
       console.log("formData : ", formData);
   }

    var barre_code_step9 = document.getElementById('barre_code_step9');
     if(barre_code_step9.value != "") { // si le champ est rempli ???? 
        addValueToFormdata(barre_code_step9.value);
     } else {
        removeValueToFormdata( barre_code_step9.value);
        console.log("formData : ", formData);
     }

     var nom_step10 = document.getElementById('nom_step10');
     if(nom_step10.value != "") { // si le champ est rempli ???? 
        addValueToFormdata(nom_step10.value);
     } else {
        removeValueToFormdata( nom_step10.value);
        console.log("formData : ", formData);
     }

     var prenom_step10 = document.getElementById('prenom_step10');
     if(prenom_step10.value != "") { // si le champ est rempli ???? 
        addValueToFormdata(prenom_step10.value);
     } else {
        removeValueToFormdata( prenom_step10.value);
        console.log("formData : ", formData);
     }

     var telephone_step10 = document.getElementById('telephone_step10');
     if(telephone_step10.value != "") { // si le champ est rempli ???? //
        addValueToFormdata(telephone_step10.value);
     } else {
        removeValueToFormdata( telephone_step10.value);
        console.log("formData : ", formData);
     }

     var mail_step10 = document.getElementById('mail_step10');
     if(mail_step10.value != "") { // si le champ est rempli ???? //
        addValueToFormdata(mail_step10.value);
     } else {
        removeValueToFormdata( mail_step10.value);
        console.log("formData : ", formData);
     }

     

     var oui1 = document.getElementById('oui1');
     if(oui1.value != "") { // si le champ est rempli ???? //
        addValueToFormdata(oui1.value);
     } else {
        removeValueToFormdata( oui1.value);
        console.log("formData : ", formData);
     }
     var oui2 = document.getElementById('oui2');
     if(oui2.value != "") { // si le champ est rempli ???? //
        addValueToFormdata(oui2.value);
     } else {
        removeValueToFormdata( oui2.value);
        console.log("formData : ", formData);
     }
     var oui3 = document.getElementById('oui3');
     if(oui3.value != "") { // si le champ est rempli ???? //
        addValueToFormdata(oui3.value);
     } else {
        removeValueToFormdata( oui3.value);
        console.log("formData : ", formData);
     }
     var oui4 = document.getElementById('oui4');
     if(oui4.value != "") { // si le champ est rempli ???? //
      addValueToFormdata(oui4.value);
     } else {
        removeValueToFormdata( oui4.value);
        console.log("formData : ", formData);
     } 

}
